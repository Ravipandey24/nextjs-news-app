"use client";

import { getOneMonthAgo, getOneWeekAgo } from "@/lib/uitls";
import {
  Dispatch,
  createContext,
  useContext,
  useMemo,
  useReducer,
} from "react";

const initialState = {
  query: "",
  date: getOneWeekAgo(),
};

type DispatchAction = {
  type: "CHANGE_QUERY" | "CHANGE_DATE";
  value: string | Date;
};
type StateData = typeof initialState;
type ContextData =
  | {
      state: StateData;
      dispatch: Dispatch<DispatchAction>;
    }
  | undefined;
const DataContext = createContext<ContextData>(undefined);

export function DataProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(dataReducer, initialState);
  const data = useMemo(() => ({ state, dispatch }), [state]);
  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
}
export function useDataContext(){
    return useContext(DataContext)
}

const dataReducer = (state: StateData, action: DispatchAction) => {
  switch (action.type) {
    case "CHANGE_DATE":
      return {
        ...state,
        date: action.value as Date,
      };
    case "CHANGE_QUERY":
      return {
        ...state,
        query: action.value as string,
      };
    // return new state
    default:
      throw Error("Unknown action: " + action.type);
  }
};
