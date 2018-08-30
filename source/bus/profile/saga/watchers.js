// Core
import { takeEvery, all, call } from 'redux-saga/effects';

// Types
import { types } from '../types';

// Workers
import { updateName, updateAvatar, updatePassword } from './workers';

function* watchUpdateName () {
    yield takeEvery(types.UPDATE_NAME_ASYNC, updateName);
}

function* watchUpdatePassword () {
    yield takeEvery(types.UPDATE_PASSWORD_ASYNC, updatePassword);
}

function* watchUpdateAvatar () {
    yield takeEvery(types.UPDATE_AVATAR_ASYNC, updateAvatar);
}

export function* watchProfile () {
    yield all([call(watchUpdateName), call(watchUpdatePassword), call(watchUpdateAvatar)]);
}
