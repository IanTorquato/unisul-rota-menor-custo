import { faGasPump, faRoadBarrier, faUtensils } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Flex, Space, Typography } from 'antd';

import './styles.scss';

export function RouteCosts() {
  return (
    <Flex align="center" className="route-costs-container" vertical>
      <Space size={12}>
        <Typography.Text strong>Custos estimados:</Typography.Text>
        <Typography.Text type="warning" strong>
          R$ 400,00
        </Typography.Text>
      </Space>

      <Flex justify="space-evenly" style={{ width: '100%' }}>
        <Space size={4}>
          <FontAwesomeIcon icon={faRoadBarrier} /> <div>R$ 150,00</div>
        </Space>

        <Space size={4}>
          <FontAwesomeIcon icon={faGasPump} /> <div>R$ 150,00</div>
        </Space>

        <Space size={4}>
          <FontAwesomeIcon icon={faUtensils} /> <div>R$ 100,00</div>
        </Space>
      </Flex>
    </Flex>
  );
}
