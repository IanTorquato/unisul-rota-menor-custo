import { ReactNode, createContext, useContext, useMemo } from 'react';

import { LowestCostRouteType } from './types';

const LowestCostRouteContext = createContext<LowestCostRouteType | undefined>(undefined);

export function LowestCostRouteProvider({ children }: { children: ReactNode }) {
  const memoizedContextValue = useMemo<LowestCostRouteType | undefined>(() => undefined, []);

  return <LowestCostRouteContext.Provider value={memoizedContextValue}>{children}</LowestCostRouteContext.Provider>;
}

export const useLowestCostRoute = () => {
  return useContext(LowestCostRouteContext);
};
