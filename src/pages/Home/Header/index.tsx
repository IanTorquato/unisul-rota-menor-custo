import { Layout, Typography } from 'antd';

import './styles.scss';

export function Header() {
  return (
    <Layout.Header>
      <Typography.Title level={1}>Centro Ocidental Paranaense</Typography.Title>
    </Layout.Header>
  );
}
