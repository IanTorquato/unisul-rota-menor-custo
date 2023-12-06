import { createControlComponent } from '@react-leaflet/core';
import L from 'leaflet';
import { useMemo } from 'react';

import 'leaflet-routing-machine';

import './styles.scss';

type MapRoutingMachineProps = {
  destinationCoords: [number, number];
  originCoords: [number, number];
};

export function MapRoutingMachine({ destinationCoords, originCoords }: MapRoutingMachineProps) {
  const RoutingMachine = useMemo(() => {
    return createControlComponent(() => {
      const instance = L.Routing.control({
        waypoints: [L.latLng(originCoords[0], originCoords[1]), L.latLng(destinationCoords[0], destinationCoords[1])],
        lineOptions: {
          extendToWaypoints: true,
          missingRouteTolerance: 4,
          styles: [{ color: '#227bc9', weight: 4 }],
        },

        // show: false,
        // collapsible: true,
        addWaypoints: false,
        containerClassName: 'display-none',

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ['draggableWaypoints' as any]: false,
        showAlternatives: false,
        routeWhileDragging: true,
        fitSelectedRoutes: true,
      });

      return instance;
    });
  }, [originCoords, destinationCoords]);

  return <RoutingMachine />;
}
