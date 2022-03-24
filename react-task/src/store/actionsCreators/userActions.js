import { LOG_IN, LOG_OUT } from "../reducers/userReducer";

export const logInAction = (payload) => ({ type: LOG_IN, payload });
export const logOutAction = (payload) => ({ type: LOG_OUT, payload });
