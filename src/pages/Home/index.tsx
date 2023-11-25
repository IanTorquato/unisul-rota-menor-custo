import { Card, Flex, Layout, Typography } from 'antd';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

import './styles.scss';

export function Home() {
  return (
    <div className="home-container">
      <Flex className="header" justify="center">
        <Typography.Title level={1}>Centro Ocidental Paranaense</Typography.Title>
      </Flex>

      <Layout.Content className="map-container">
        <Card size="small">
          <MapContainer center={[-28.3341378, -49.0332305]} id="map" scrollWheelZoom={false} zoom={14}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={[-28.3301378, -49.0322305]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </Card>
      </Layout.Content>
    </div>
  );
}
