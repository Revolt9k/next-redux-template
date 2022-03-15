/* eslint-disable import/no-extraneous-dependencies */
import { createWrapper } from "next-redux-wrapper";
import { applyMiddleware, combineReducers, createStore, EmptyObject, Store } from "redux";
import AppReducer from "./reducers/AppReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer, Persistor } from "redux-persist";
import { AppInitialStateType } from "./reducers/AppReducer/types";
import { HydrateActionType } from "./actions/app/types";
import { PersistPartial } from "redux-persist/lib/persistReducer";

//COMBINING ALL REDUCERS
const combinedReducer = combineReducers({
  AppReducer
  // OTHER REDUCERS WILL BE ADDED HERE
});

// BINDING MIDDLEWARE
const bindMiddleware = (middleware: any) => {
  if (process.env.NODE_ENV !== "production") {
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const makeStore = ({ isServer }: any) => {
  if (isServer) {
    //If it's on server side, create a store
    return createStore(combinedReducer, bindMiddleware([]));
  } else {
    //If it's on client side, create a store which will persist
    const storage = require("redux-persist/lib/storage").default;

    const persistConfig = {
      key: "nextjs",
      whitelist: ["AppReducer"], // only counter will be persisted, add other reducers if needed
      storage // if needed, use a safer storage
    };

    const persistedReducer = persistReducer(persistConfig, combinedReducer); // Create a new reducer with our existing reducer

    const store: ExtendedStore = createStore(persistedReducer, bindMiddleware([])); // Creating the store again

    store.__persistor = persistStore(store); // This creates a persistor object & push that persisted object to .__persistor, so that we can avail the persistability feature

    return store;
  }
};

// Export the wrapper & wrap the pages/_app.js with this wrapper only
export const wrapper = createWrapper(makeStore);

export type StoreType = Store<
  EmptyObject & {
    AppReducer: AppInitialStateType;
  } & PersistPartial,
  HydrateActionType
>;

type ExtendedStore = StoreType & { __persistor?: Persistor };
