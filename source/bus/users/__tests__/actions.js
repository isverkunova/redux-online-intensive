// Actions
import { usersActions } from '../actions';

// Types
import { types } from '../types';

describe('users actions:', () => {
    test('fillUsers', () => {
        expect(usersActions.fillUsers(__.users)).toEqual({
            type:    types.FILL_USERS,
            payload: __.users,
        });
    });

    test('clearUsers', () => {
        expect(usersActions.clearUsers()).toEqual({
            type: types.CLEAR_USERS,
        });
    });

    test('fetchUsersAsync', () => {
        expect(usersActions.fetchUsersAsync()).toEqual({
            type: types.FETCH_USERS_ASYNC,
        });
    });
});
