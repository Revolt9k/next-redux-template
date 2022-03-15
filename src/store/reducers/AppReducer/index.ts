import { HYDRATE } from "next-redux-wrapper";
import { HydrateActionType } from "store/actions/app/types";
import { AppInitialStateType } from "./types";

const initialState: AppInitialStateType = {
  modal: "",
  baseURL: ""
};

const AppReducer = (state = initialState, action: HydrateActionType): AppInitialStateType => {
  switch (action.type) {
    case HYDRATE: {
      return action.payload.AppReducer;
    }

    default:
      return state;
  }
};

export default AppReducer;
