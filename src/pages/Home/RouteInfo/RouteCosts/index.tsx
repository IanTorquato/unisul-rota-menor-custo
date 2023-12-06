import { faGasPump, faRoadBarrier, faUtensils } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Flex, Space, Tooltip, Typography } from 'antd';
import { useMemo } from 'react';

import { useLowestCostRoute } from 'src/contexts/LowestCostRoute';
import { FuelAverage, VehicleValueType } from 'src/core/constants/vehicles';
import { formatCurrency } from 'src/utils/formatCurrency';

import './styles.scss';

type RouteCostsProps = {
  selectedVehicle: VehicleValueType;
};

const FUEL_PRICE = 6;

export function RouteCosts({ selectedVehicle }: RouteCostsProps) {
  const { lowestCostRoute } = useLowestCostRoute();

  const {  custoRefeicao = 0 } = lowestCostRoute || {};

  const { custoPedagiosViagem } = lowestCostRoute || {};

  const custoPedagios = {
    "Carro": custoPedagiosViagem?.carro,
    "Caminhão": custoPedagiosViagem?.caminhao,
    "Motocicleta": custoPedagiosViagem?.moto,
    "Micro-ônibus": custoPedagiosViagem?.microOnibus,
    "Ônibus": custoPedagiosViagem?.onibus
  };
  
  const custoPedagio = custoPedagios[selectedVehicle] || 0;


  // eslint-disable-next-line react-hooks/exhaustive-deps
  const custoCombustivel = useMemo(() => (lowestCostRoute!.distanciaTotal / FuelAverage[selectedVehicle]) * FUEL_PRICE, [selectedVehicle]);

  return (
    <Flex align="center" className="route-costs-container" vertical>
      <Space size={12}>
        <Typography.Text strong>Custos estimados:</Typography.Text>

        <Typography.Text type="success" strong>
          {/* TODO: Calculate total */}
          {formatCurrency(custoCombustivel + custoPedagio + custoRefeicao)}
        </Typography.Text>
      </Space>

      <Flex justify="space-evenly" style={{ width: '100%' }}>
        <Tooltip placement="bottom" title="Combustível">
          <Space size={4}>
            <FontAwesomeIcon icon={faGasPump} /> <div>{formatCurrency(custoCombustivel)}</div>
          </Space>
        </Tooltip>

        <Tooltip placement="bottom" title="Pedágio">
          <Space size={4}>
            <FontAwesomeIcon icon={faRoadBarrier} /> <div>{formatCurrency(custoPedagio)}</div>
          </Space>
        </Tooltip>

        <Tooltip placement="bottom" title="Alimentação">
          <Space size={4}>
            <FontAwesomeIcon icon={faUtensils} /> <div>{formatCurrency(custoRefeicao)}</div>
          </Space>
        </Tooltip>
      </Flex>
    </Flex>
  );
}
