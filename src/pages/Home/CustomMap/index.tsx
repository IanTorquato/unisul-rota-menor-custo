import { Form, FormInstance, Typography } from 'antd';
import { MapContainer, Marker, TileLayer, Tooltip } from 'react-leaflet';

import { MapRoutingMachine } from 'src/components/MapRoutingMachine';
import { CITY_COORDINATES } from 'src/pages/Home/cities';

import './styles.scss';

const INITIAL_MAP_POSITION: [number, number] = [-24.7548828, -50.3667741];

type CustomMapProps = {
  formInstance: FormInstance;
};

export function CustomMap({ formInstance }: CustomMapProps) {
  const selectedOrigin = Form.useWatch<string | undefined>('origem', formInstance);
  const selectedDestination = Form.useWatch<string | undefined>('destino', formInstance);

  return (
    <MapContainer center={INITIAL_MAP_POSITION} id="map" scrollWheelZoom={false} zoom={9}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {selectedOrigin && selectedDestination && (
        <MapRoutingMachine destinationCoords={CITY_COORDINATES[selectedDestination]} originCoords={CITY_COORDINATES[selectedOrigin]} />
      )}

      {selectedOrigin && (
        <Marker position={CITY_COORDINATES[selectedOrigin]}>
          <Tooltip>
            <Typography.Text code>{CITY_COORDINATES[selectedOrigin].join().replace(',', ', ')}</Typography.Text>
          </Tooltip>
        </Marker>
      )}

      {selectedDestination && (
        <Marker position={CITY_COORDINATES[selectedDestination]} title="Destino">
          <Tooltip>
            <Typography.Text code>{CITY_COORDINATES[selectedDestination].join().replace(',', ', ')}</Typography.Text>
          </Tooltip>
        </Marker>
      )}
    </MapContainer>
  );
}
