import { ConfigProvider } from 'antd';
import ptBr from 'antd/lib/locale/pt_BR';

import { Home } from "./pages/Home";

export function App() {
  return (
    <ConfigProvider locale={ptBr}>
      <Home />
    </ConfigProvider>
  )
}
