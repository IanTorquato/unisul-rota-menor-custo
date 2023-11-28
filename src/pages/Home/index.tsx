import { Button, Card, Col, Dropdown, Flex, Form, Layout, Row, Select, Typography } from 'antd';
import { DefaultOptionType } from 'antd/es/select';
import { MapContainer, Marker, TileLayer, Tooltip } from 'react-leaflet';

import { MapRoutingMachine } from 'src/components/MapRoutingMachine';
import { getColBreakpoints } from 'src/utils/getColBreakpoints';

import { CITY_COORDINATES, CITY_OPTIONS } from './cities';

import './styles.scss';

const INITIAL_MAP_POSITION: [number, number] = [-24.7548828, -50.3667741];

function useHome() {
  const [formInstance] = Form.useForm();

  const selectedOrigin = Form.useWatch<string | undefined>('origem', formInstance);
  const selectedDestination = Form.useWatch<string | undefined>('destino', formInstance);

  return { formInstance, selectedOrigin, selectedDestination };
}

export function Home() {
  const { formInstance, selectedDestination, selectedOrigin } = useHome();

  return (
    <div className="home-container">
      <Flex className="header" justify="center">
        <Dropdown menu={{ items: [{ label: 'Reset Form', key: 'reset', onClick: () => formInstance.resetFields() }] }} trigger={['contextMenu']}>
          <Typography.Title level={1}>Centro Ocidental Paranaense</Typography.Title>
        </Dropdown>
      </Flex>

      <Layout.Content className="content">
        <Form className="inputs-container" form={formInstance} layout="vertical" onFinish={console.log}>
          <Row gutter={12}>
            <Col {...getColBreakpoints(7)}>
              <Form.Item label="Origem" name="origem" rules={[{ required: true }]} required>
                <Select
                  options={CITY_OPTIONS}
                  placeholder="Selecione uma cidade"
                  autoFocus
                  showSearch
                  onSelect={(newOrigin: string) => {
                    if (newOrigin === formInstance.getFieldValue('destino')) {
                      formInstance.setFieldValue('destino', undefined);
                    }
                  }}
                />
              </Form.Item>
            </Col>

            <Col {...getColBreakpoints(7)}>
              <Form.Item label="Destino" name="destino" rules={[{ required: true }]} required>
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
          </Card>
        </div>
      </Layout.Content>
    </div>
  );
}
