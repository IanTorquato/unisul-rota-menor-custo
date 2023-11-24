import { ConfigProvider } from 'antd';
import ptBr from 'antd/lib/locale/pt_BR';

import { Home } from "./pages/Home";

import './styles/global.scss';

export function App() {
  return (
    <ConfigProvider locale={ptBr}>
      <Home />
    </ConfigProvider>
  )
}
