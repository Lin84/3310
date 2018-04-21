import axios from 'axios';

import {
    createLoadingCircle,
    showLoadingCircle,
    removeLoadingCircle
} from './../../ultilities/loadingCircle';

import {
    HANDLE_SUBMIT_ERROR,
    HANDLE_SUBMIT_SUCCESS,
    REMOVE_LAST_SELECTED_DATA,
    RESET_DATA,
    SUBMIT_DATA,
    UPDATE_SELECTED_DATA
} from './../constants';

export const updateSelectedData = (value) => {
    return {
        type: UPDATE_SELECTED_DATA,
        payload: {
            value
        }
    };
};

export const removeLastEnteredData = () => {
    return {
        type: REMOVE_LAST_SELECTED_DATA
    };
};

export const resetData = () => {
    return {
        type: 'RESET_DATA'
    };
};

export const submitData = ({ data, endPoint }) => {
    return (dispatch) => {
        dispatch({
            type: SUBMIT_DATA
        });

        createLoadingCircle();
        showLoadingCircle();

        axios(endPoint, {
            method: 'POST',
            data
        })
            .then(({ data }) => {
                dispatch({
                    type: HANDLE_SUBMIT_SUCCESS,
                    payload: {
                        data
                    }
                });
                removeLoadingCircle();
            })
            .catch((error) => {
                dispatch({
                    type: HANDLE_SUBMIT_ERROR
                });
                removeLoadingCircle();
            });
    };
};
