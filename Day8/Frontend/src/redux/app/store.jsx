import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/userSlice";
import cartSlice from "../features/cartSlice";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("reduxState");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("reduxState", serializedState);
  } catch (err) {
    // Handle errors while saving state
  }
};

const store = configureStore({
  reducer: {
    user: userSlice,
    allCart: cartSlice
  },
  preloadedState: loadState()
});

store.subscribe(() => {
  saveState(store.getState());
});

export { store };
