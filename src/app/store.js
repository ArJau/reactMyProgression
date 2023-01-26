import { configureStore } from "@reduxjs/toolkit";
import technosReducer from "../feature/technos.slice";

export default configureStore({
  reducer: {
    technos: technosReducer,
  },
});
