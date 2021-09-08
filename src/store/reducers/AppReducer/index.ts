import { HYDRATE } from "next-redux-wrapper";
import { AppActionTypes, HydrateActionType } from "store/actions/app/types";
import { SET_MODAL } from "../../constants/app";
import { AppInitialStateType } from "./types";

const initialState: AppInitialStateType = {
  modal: "",
  baseURL: "",
};

const AppReducer = (
  state = initialState,
  action: AppActionTypes | HydrateActionType
): AppInitialStateType => {
  switch (action.type) {
    case HYDRATE: {
      return action.payload.AppReducer;
    }
    case SET_MODAL: {
      return {
        ...state,
        modal: action.modal,
      };
    }
    default:
      return state;
  }
};

export default AppReducer;
