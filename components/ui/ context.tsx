import { FC, createContext, useContext, ReactElement, useReducer,useMemo } from 'react';

export interface StateModifiers {
  openSidebar: () => void;
  closeSidebar: () => void;
}

export interface StateValues {
  isSidebarOpen: boolean;
}

const stateModifiers = {
  openSidebar: () => {},
  closeSidebar: () => {}
};

const initialState = { isSidebarOpen: true };

type State = StateValues & StateModifiers;

const UIContext = createContext<State>({
  ...initialState,
  ...stateModifiers
});

enum actionType {
  OPEN_SIDEBAR,
  CLOSE_SIDEBAR
}
type ActionType = {
  type: actionType;
  payload?: any;
};

function uiReducer(state: StateValues, action: ActionType) {
  switch (action.type) {
    case actionType.OPEN_SIDEBAR: {
      return {
        ...state,
        isSidebarOpen: true
      };
    }
    case actionType.CLOSE_SIDEBAR: {
      return {
        ...state,
        isSidebarOpen: false
      };
    }
    default:
      return state;
  }
}

type UIProviderProps = {
  children: ReactElement | ReactElement[] | undefined;
};

export const UIProvider = ({ children }: UIProviderProps): ReactElement => {
  const [state, dispatch] = useReducer(uiReducer, initialState);
  const openSidebar = () => dispatch({ type: actionType.OPEN_SIDEBAR });
  const closeSidebar = () => dispatch({ type: actionType.CLOSE_SIDEBAR });

  const value =useMemo(()=> {
   return {
     ...state,
    openSidebar,
    closeSidebar
   }
  },[state.isSidebarOpen]);
  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};

export const useUI = () => {
  const context = useContext(UIContext);
  return context;
};
