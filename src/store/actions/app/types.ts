import { ModalType } from "reducers/AppReducer/types";
import { SET_MODAL } from "../../constants/app";

export type ActionSetModalType = {
  type: typeof SET_MODAL;
  modal: ModalType;
};

export type HydrateActionType = {
  type: "__NEXT_REDUX_WRAPPER_HYDRATE__";
  payload: any;
};

export type AppActionTypes = ActionSetModalType;
