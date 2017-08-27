import {
    CHANGE_AUTH,
    BODY_TOP_CLICKED
} from './types';

export function authenticate(isLoggedIn) {
    console.log('action: CHANGE_AUTH');
    return {
        type: CHANGE_AUTH,
        payload: isLoggedIn
    }
}

export function bodyTopClicked(isClicked) {
    console.log('action: BODY_TOP_CLICKED');
    return {
        type: BODY_TOP_CLICKED,
        payload: isClicked
    }
}