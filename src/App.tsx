import { ConfigProvider } from 'antd';
import ptBr from 'antd/lib/locale/pt_BR';

import { LowestCostRouteProvider } from './contexts/LowestCostRoute';
import { Home } from './pages/Home';

import './styles/global.scss';

export function App() {
  return (
    <ConfigProvider locale={ptBr} theme={{ token: { colorPrimary: '#2f54eb' } }}>
      <LowestCostRouteProvider>
        <Home />
      </LowestCostRouteProvider>
    </ConfigProvider>
  );
}
