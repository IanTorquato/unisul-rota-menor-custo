import { Form, Layout } from 'antd';

import { CustomMap } from './CustomMap';
import { Header } from './Header';
import { RouteSteps } from './RouteSteps';
import { SearchForm } from './SearchForm';

import './styles.scss';

function useHome() {
  const [formInstance] = Form.useForm();

  return { formInstance };
}

export function Home() {
  const { formInstance } = useHome();

  return (
    <Layout className="home-container">
      <Header />

      <Layout hasSider>
        <Layout.Sider width={344}>
          <SearchForm formInstance={formInstance} />

          <RouteSteps />
        </Layout.Sider>

        <Layout.Content>
          <CustomMap formInstance={formInstance} />
        </Layout.Content>
      </Layout>
    </Layout>
  );
}
