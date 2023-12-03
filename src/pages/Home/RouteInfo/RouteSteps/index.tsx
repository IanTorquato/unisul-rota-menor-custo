import { Steps, Typography } from 'antd';

import { useLowestCostRoute } from 'src/contexts/LowestCostRoute';
import { VehicleValueType } from 'src/core/constants/vehicles';
import { formatHour } from 'src/utils/formatHour';
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
              {selectedVehicle === 'Carro' ? `Carro: ${formatHour(tempoMedioCarro)}` : ''}
              {selectedVehicle === 'Caminhão' ? `Caminhão: ${formatHour(tempoMedioCaminhao)}` : ''}
              {selectedVehicle === 'Motocicleta' ? `Motocicleta: ${formatHour(tempoMedioMoto)}` : ''}
              {selectedVehicle === 'Micro-ônibus' ? `Micro-ônibus: NaN` : ''}
              {selectedVehicle === 'Ônibus' ? `Ônibus: ${formatHour(tempoMedioOnibus)}` : ''}
              <br />
              {distancia} km
            </>
          ),
          subTitle: index === 0 && (
            <Typography.Text type="warning" strong>
              {lowestCostRoute.distanciaTotal} km
            </Typography.Text>
          ),
          status: 'finish',
        }),
      )}
      progressDot
    />
  );
}
