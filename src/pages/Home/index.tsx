import { Form, Layout } from 'antd';

import { useLowestCostRoute } from 'src/contexts/LowestCostRoute';
import { VehicleValueType } from 'src/core/constants/vehicles';

import { CustomMap } from './CustomMap';
import { Header } from './Header';
import { RouteInfo } from './RouteInfo';
import { SearchForm } from './SearchForm';

import './styles.scss';

export function Home() {
  const [formInstance] = Form.useForm();
  const selectedVehicleToSearch = Form.useWatch<VehicleValueType>('veiculo', formInstance);

  const { lowestCostRoute } = useLowestCostRoute();

  return (
    <Layout className="home-container">
      <Header />

      <Layout hasSider>
        <Layout.Sider width={344}>
          <SearchForm formInstance={formInstance} />

          {lowestCostRoute !== undefined && <RouteInfo initialVehicle={selectedVehicleToSearch} />}
        </Layout.Sider>

        <Layout.Content>
          <CustomMap formInstance={formInstance} />
        </Layout.Content>
      </Layout>
    </Layout>
  );
}
