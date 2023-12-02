import { Steps, Typography } from 'antd';

import { useLowestCostRoute } from 'src/contexts/LowestCostRoute';
import { VehicleValueType } from 'src/core/constants/vehicles';

import './styles.scss';

type RouteStepsProps = {
  selectedVehicle: VehicleValueType;
};

export function RouteSteps({ selectedVehicle }: RouteStepsProps) {
  const { lowestCostRoute } = useLowestCostRoute();

  return (
    <Steps
      className="route-steps-container"
      direction="vertical"
      items={lowestCostRoute?.caminho.map(
        ({ destino, distancia, origem, tempoMedioCaminhao, tempoMedioCarro, tempoMedioMoto, tempoMedioOnibus }, index) => ({
          title: `${origem.replace(' Pr', '')} - ${destino.replace(' Pr', '')}`,
          description: (
            <>
              {selectedVehicle === 'Carro' ? `Carro: ${tempoMedioCarro}` : ''}
              {selectedVehicle === 'Caminhão' ? `Caminhão: ${tempoMedioCaminhao}` : ''}
              {selectedVehicle === 'Motocicleta' ? `Motocicleta: ${tempoMedioMoto}` : ''}
              {selectedVehicle === 'Micro-ônibus' ? `Micro-ônibus: NaN` : ''}
              {selectedVehicle === 'Ônibus' ? `Ônibus: ${tempoMedioOnibus}` : ''}
            </>
          ),
          subTitle: index === 0 && (
            <Typography.Text type="warning" strong>
              {distancia} km
            </Typography.Text>
          ),
          status: 'finish',
        }),
      )}
      progressDot
    />
  );
}
