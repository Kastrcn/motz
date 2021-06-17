import { createBrowserHistory } from "history";
import { applyMiddleware, compose, createStore } from "redux";
import { routerMiddleware } from "connected-react-router";
import createRootReducer from "./reducers";
export const history = createBrowserHistory();
import thunk from "redux-thunk";
import { useDispatch } from "react-redux";

export default function configureStore(preloadedState?: any) {
  const composeEnhancer: typeof compose =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    createRootReducer(history), // root reducer with router state
    preloadedState,
    composeEnhancer(
      applyMiddleware(
        routerMiddleware(history), // for dispatching history actions
        thunk
        // ... other middlewares ...
      )
    )
  );
  return store;
}

export const useAppDispatch = () => useDispatch<any>(); // Export a hook that can be reused to resolve types
