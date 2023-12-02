import { Form, Layout } from 'antd';

import { useLowestCostRoute } from 'src/contexts/LowestCostRoute';
import { VehicleValueType } from 'src/core/constants/vehicles';

import { CustomMap } from './CustomMap';
import { Header } from './Header';
import { RouteSteps } from './RouteSteps';
import { SearchForm } from './SearchForm';
import { VehicleTimes } from './VehicleTimes';

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

          {lowestCostRoute !== undefined && (
            <>
              <VehicleTimes initialVehicle={selectedVehicleToSearch} />

              <RouteSteps />
            </>
          )}
        </Layout.Sider>

        <Layout.Content>
          <CustomMap formInstance={formInstance} />
        </Layout.Content>
      </Layout>
    </Layout>
  );
}
