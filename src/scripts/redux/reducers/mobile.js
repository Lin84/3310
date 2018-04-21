import {
    UPDATE_SELECTED_DATA,
    REMOVE_LAST_SELECTED_DATA,
    RESET_DATA,
    HANDLE_SUBMIT_SUCCESS,
    HANDLE_SUBMIT_ERROR
} from './../constants';

import * as actions from './../action-creators/mobile';

const defaultState = {
    results: [],
    selectedValue: []
};

export default (state = defaultState, action) => {
    const { type, payload } = action;

    switch (type) {
        case UPDATE_SELECTED_DATA: {
            const { results, selectedValue } = state;
            const { value } = payload;

            return {
                results: [...results],
                selectedValue: [
                    ...selectedValue,
                    value
                ]
            };
        }

        case REMOVE_LAST_SELECTED_DATA: {
            const { results, selectedValue } = state;

            return {
                results: [...results],
                selectedValue: selectedValue.slice(0, -1)
            };
        }

        case RESET_DATA: {
            return defaultState;
        }

        case HANDLE_SUBMIT_SUCCESS: {
            const { results, selectedValue } = state;
            const { data } = payload;

            return {
                results: data,
                selectedValue: [...selectedValue]
            };
        }

        case HANDLE_SUBMIT_ERROR: {
            // can return some flag according to what we can show some error message or ...
            return defaultState;
        }

        default: {
            return state;
        }
    }
};
