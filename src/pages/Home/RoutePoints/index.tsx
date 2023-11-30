import { Typography } from 'antd';

import { useLowestCostRoute } from 'src/contexts/LowestCostRoute';

export function RoutePoints() {
  const { lowestCostRoute } = useLowestCostRoute();

  return <Typography.Text code>{JSON.stringify(lowestCostRoute, null, 2)}</Typography.Text>;
}
