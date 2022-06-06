import { types } from "../types/types";

export const setError = (msg) => ({
    type: types.uiSetError,
    payload: msg
});

export const removeError = () => ({
    type: types.uiRemoveError
});


export const startLoading = () => ({
    type: types.uiStartLoading,
});

export const finishLoading = () => ({
    type: types.uiFinishLoading,
});