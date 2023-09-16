import { legacy_createStore as createStore } from '@reduxjs/toolkit'
import { useEffect } from 'react';

function reducer(state, action){
    // state 정의
    if (state === undefined) {
        return {
            체중: 100,
            currentPage: 'home',
        }
    }

    const newState = { ...state };
    // state 변경
    switch (action.type) {
        case 'setCuurentPage':
            newState.currentPage = action.data;
            break;
    }
    return newState;
}

const store = createStore(reducer);
export default store;