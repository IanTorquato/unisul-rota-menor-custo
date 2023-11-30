import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useMemo, useState } from 'react';

import { LowestCostRouteType } from './types';

type LowestCostRouteContextProps = {
  lowestCostRoute: LowestCostRouteType | undefined;
  setLowestCostRoute: Dispatch<SetStateAction<LowestCostRouteType | undefined>>;
};

const LowestCostRouteContext = createContext<LowestCostRouteContextProps>({} as LowestCostRouteContextProps);

export function LowestCostRouteProvider({ children }: { children: ReactNode }) {
  const [lowestCostRoute, setLowestCostRoute] = useState<LowestCostRouteType>();

  const memoizedContextValue = useMemo<LowestCostRouteContextProps>(() => ({ lowestCostRoute, setLowestCostRoute }), [lowestCostRoute]);

  return <LowestCostRouteContext.Provider value={memoizedContextValue}>{children}</LowestCostRouteContext.Provider>;
}

export const useLowestCostRoute = () => {
  return useContext(LowestCostRouteContext);
};
