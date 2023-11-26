import { Button, Card, Col, Flex, Form, Layout, Row, Select, Typography } from 'antd';
import { DefaultOptionType } from 'antd/es/select';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

import { getColBreakpoints } from 'src/utils/getColBreakpoints';

import './styles.scss';

const CITY_OPTIONS: DefaultOptionType[] = [
  { label: 'Ortigueira', value: 'Ortigueira' },
  { label: 'Imbaú', value: 'Imbaú' },
  { label: 'Reserva', value: 'Reserva' },
  { label: 'Tibagi', value: 'Tibagi' },
  { label: 'Telêmaco Borba', value: 'Telêmaco Borba' },
  { label: 'Ventania', value: 'Ventania' },
  { label: 'Arapoti', value: 'Arapoti' },
  { label: 'Sengés', value: 'Sengés' },
  { label: 'Jaguariaíva', value: 'Jaguariaíva' },
  { label: 'Piraí do Sul', value: 'Piraí do Sul' },
  { label: 'Castro', value: 'Castro' },
  { label: 'Carambeí', value: 'Carambeí' },
  { label: 'Palmeira', value: 'Palmeira' },
  { label: 'Ponta Grossa', value: 'Ponta Grossa' },
];

export function Home() {
  return (
    <div className="home-container">
      <Flex className="header" justify="center">
        <Typography.Title level={1}>Centro Ocidental Paranaense</Typography.Title>
      </Flex>

      <Layout.Content className="content">
        <Form className="inputs-container" layout="vertical" onFinish={console.log}>
          <Row gutter={12}>
            <Col {...getColBreakpoints(7)}>
              <Form.Item label="Origem" name="origem" rules={[{ required: true }]} required>
                <Select options={CITY_OPTIONS} placeholder="Selecione uma cidade" autoFocus showSearch />
              </Form.Item>
            </Col>

            <Col {...getColBreakpoints(7)}>
              <Form.Item label="Destino" name="destino" rules={[{ required: true }]} required>
                <Select options={CITY_OPTIONS} placeholder="Selecione uma cidade" showSearch />
              </Form.Item>
            </Col>

            <Col {...getColBreakpoints(7)}>
              <Form.Item initialValue="Carro" label="Veículo" name="veiculo" rules={[{ required: true }]} required>
                <Select
                  options={[
                    { label: 'Carro', value: 'Carro' },
                    { label: 'Caminhão', value: 'Caminhão' },
                    { label: 'Motocicleta', value: 'Motocicleta' },
                    { label: 'Micro-ônibus', value: 'Micro-ônibus' },
                    { label: 'Ônibus', value: 'Ônibus' },
                  ]}
                  showSearch
                />
              </Form.Item>
            </Col>

            <Col {...getColBreakpoints(3)}>
              <br />
              <Button htmlType="submit" type="primary" block>
                Calcular
              </Button>
            </Col>
          </Row>
        </Form>

        <div className="map-container">
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
        </div>
      </Layout.Content>
    </div>
  );
}
