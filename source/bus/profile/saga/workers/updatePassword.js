// Core
import { put, apply } from 'redux-saga/effects';

// Instruments
import { api } from '../../../../REST';
import { uiActions } from '../../../ui/actions';
import { profileActions } from '../../../profile/actions';

export function* updatePassword ({ payload: passwordData }) {
    try {
        yield put(uiActions.startFetching());

        const response = yield apply(api, api.profile.updateProfile, [passwordData]);
        const { data: updatedPassword, message } = yield apply(response, response.json);

        if (response.status !== 200) {
            throw new Error(message);
        }

        yield put(profileActions.fillProfile(updatedPassword));
    } catch (error) {
        yield put(uiActions.emitError(error, 'updatePassword worker'));
    } finally {
        yield put(uiActions.stopFetching());
    }
}
