import { Space, Steps, Typography } from 'antd';

import { useLowestCostRoute } from 'src/contexts/LowestCostRoute';
import { VehicleValueType } from 'src/core/constants/vehicles';
import { formatHour } from 'src/utils/formatHour';

import './styles.scss';

type RouteStepsProps = {
  selectedVehicle: VehicleValueType;
};

export function RouteSteps({ selectedVehicle }: RouteStepsProps) {
  const { lowestCostRoute } = useLowestCostRoute();

  const routeTimeByVehicle: Record<VehicleValueType, number | undefined> = {
    Carro: lowestCostRoute?.tempoMedioCarro,
    Caminhão: lowestCostRoute?.tempoMedioCaminhao,
    Motocicleta: lowestCostRoute?.tempoMedioMoto,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    'Micro-ônibus': lowestCostRoute?.tempoMedioMicroOnibus,
    Ônibus: lowestCostRoute?.tempoMedioOnibus,
  };

  return (
    <div className="route-steps-container">
      <Space align="end" direction="vertical" size={0}>
        <Typography.Text type="warning" strong>
          {formatHour(routeTimeByVehicle[selectedVehicle] || 0, true)}
        </Typography.Text>

        <Typography.Text type="warning" strong>
          {lowestCostRoute?.distanciaTotal} km
        </Typography.Text>
      </Space>

      <Steps
        direction="vertical"
        items={lowestCostRoute?.caminho?.map(
          ({ destino, distancia, origem, tempoMedioCaminhao, tempoMedioCarro, tempoMedioMicroOnibus, tempoMedioMoto, tempoMedioOnibus }) => ({
            title: `${origem.replace(' Pr', '')} - ${destino.replace(' Pr', '')}`,
            description: (
              <>
                {selectedVehicle === 'Carro' ? formatHour(tempoMedioCarro) : ''}
                {selectedVehicle === 'Caminhão' ? formatHour(tempoMedioCaminhao) : ''}
                {selectedVehicle === 'Motocicleta' ? formatHour(tempoMedioMoto) : ''}
                {selectedVehicle === 'Micro-ônibus' ? formatHour(tempoMedioMicroOnibus) : ''}
                {selectedVehicle === 'Ônibus' ? formatHour(tempoMedioOnibus) : ''}
                <br />
                {distancia} km
              </>
            ),
            status: 'finish',
          }),
        )}
        progressDot
      />
    </div>
  );
}
