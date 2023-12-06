import { faGasPump, faRoadBarrier, faUtensils } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Flex, Space, Tooltip, Typography } from 'antd';

import './styles.scss';
import { useLowestCostRoute } from 'src/contexts/LowestCostRoute';
import { VehicleValueType } from 'src/core/constants/vehicles';

type RouteCostsProps = {
  initialVehicle: VehicleValueType;
};

const GASOLINE_VALUE = 6

const CAR_AVERAGE = 15;
const MOTORCYCLE_AVERAGE = 25;
const TRUCK_AVERAGE = 7.5;
const MICROBUS_AVERAGE = 10;
const BUS_AVERAGE = 5.5;


export function RouteCosts({ initialVehicle }: RouteCostsProps) {

  const { lowestCostRoute } = useLowestCostRoute();
  
  function calculateCost(vehicleType: keyof FuelEfficiencyType, distance: number): number {
    const fuelEfficiency: FuelEfficiencyType = {
        Carro: CAR_AVERAGE,
        Motocicleta: MOTORCYCLE_AVERAGE,
        Caminhão: TRUCK_AVERAGE,
        'Micro-ônibus': MICROBUS_AVERAGE,
        Ônibus: BUS_AVERAGE,
    };

    return (distance / fuelEfficiency[vehicleType]) * GASOLINE_VALUE;
}

  const costForInitialVehicle = calculateCost(initialVehicle, lowestCostRoute?.distanciaTotal || 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  return (
    <Flex align="center" className="route-costs-container" vertical>
      <Space size={12}>
        <Typography.Text strong>Custos estimados:</Typography.Text>
        <Typography.Text type="warning" strong>
          R$ 400,00
        </Typography.Text>
      </Space>

      <Flex justify="space-evenly" style={{ width: '100%' }}>
        <Tooltip placement="bottom" title="Pedágio">
          <Space size={4}>
            <FontAwesomeIcon icon={faRoadBarrier} /> <div>R$ 150,00</div>
          </Space>
        </Tooltip>

        <Tooltip placement="bottom" title="Combustível">
          <Space size={4}>
            <FontAwesomeIcon icon={faGasPump} /> <div>{costForInitialVehicle}</div>
          </Space>
        </Tooltip>

        <Tooltip placement="bottom" title="Alimentação">
          <Space size={4}>
            <FontAwesomeIcon icon={faUtensils} /> <div>R$ 100,00</div>
          </Space>
        </Tooltip>
      </Flex>
    </Flex>
  );
}
