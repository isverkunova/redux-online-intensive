// Core
import { fromJS, List } from 'immutable';

// Reducer
import { usersReducer } from '../reducer';

// Actions
import { usersActions } from '../actions';

const initialState = List();

describe('users reducer:', () => {
    test('should return initial state by default', () => {
        expect(usersReducer(void 0, initialState)).toEqual(initialState);
    });

    test('should handle FILL_USERS action', () => {
        expect(usersReducer(void 0, usersActions.fillUsers(fromJS(__.users)))).toEqual(fromJS(__.users));
    });

    test('should handle CLEAR_USERS action', () => {
        expect(usersReducer(void 0, usersActions.clearUsers())).toEqual(initialState);
    });
});
