import { Button, Card, Col, Flex, Form, Layout, Row, Select, Typography } from 'antd';
import { DefaultOptionType } from 'antd/es/select';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

import { getColBreakpoints } from 'src/utils/getColBreakpoints';

import { CITY_OPTIONS } from './cities';

import './styles.scss';

function useHome() {
  const [formInstance] = Form.useForm();
  const selectedOrigin = Form.useWatch<string | undefined>('origin', formInstance);

  return { formInstance, selectedOrigin };
}

export function Home() {
  const { formInstance, selectedOrigin } = useHome();

  return (
    <div className="home-container">
      <Flex className="header" justify="center">
        <Typography.Title level={1}>Centro Ocidental Paranaense</Typography.Title>
      </Flex>

      <Layout.Content className="content">
        <Form className="inputs-container" form={formInstance} layout="vertical" onFinish={console.log}>
          <Row gutter={12}>
            <Col {...getColBreakpoints(7)}>
              <Form.Item label="Origem" name="origin" rules={[{ required: true }]} required>
                <Select
                  options={CITY_OPTIONS}
                  placeholder="Selecione uma cidade"
                  autoFocus
                  showSearch
                  onSelect={(newOrigin: string) => {
                    if (newOrigin === formInstance.getFieldValue('destination')) {
                      formInstance.setFieldValue('destination', undefined);
                    }
                  }}
                />
              </Form.Item>
            </Col>

            <Col {...getColBreakpoints(7)}>
              <Form.Item label="Destino" name="destination" rules={[{ required: true }]} required>
                <Select
                  options={CITY_OPTIONS.map(microRegion => ({
                    ...microRegion,
                    options: microRegion.options.filter((city: DefaultOptionType) => city.value !== selectedOrigin),
                  }))}
                  placeholder="Selecione uma cidade"
                  showSearch
                />
              </Form.Item>
            </Col>

            <Col {...getColBreakpoints(7)}>
              <Form.Item initialValue="Carro" label="Veículo" name="vehicle" rules={[{ required: true }]} required>
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
