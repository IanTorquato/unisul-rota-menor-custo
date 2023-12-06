import { useState } from 'react';

import { VehicleValueType } from 'src/core/constants/vehicles';

import { RouteCosts } from './RouteCosts';
import { RouteSteps } from './RouteSteps';
import { VehicleTimes } from './VehicleTimes';

type RouteInfoProps = {
  initialVehicle: VehicleValueType;
};

export function RouteInfo({ initialVehicle }: RouteInfoProps) {
  const [selectedVehicle, setSelectedVehicle] = useState<VehicleValueType>(initialVehicle);

  return (
    <>
      <VehicleTimes selectedVehicle={selectedVehicle} setSelectedVehicle={setSelectedVehicle} />

      <RouteCosts selectedVehicle={selectedVehicle} />

      <RouteSteps selectedVehicle={selectedVehicle} />
    </>
  );
}
