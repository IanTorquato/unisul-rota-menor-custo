import { Steps } from 'antd';

import { useLowestCostRoute } from 'src/contexts/LowestCostRoute';
import { VehicleValueType } from 'src/core/constants/vehicles';

type RouteStepsProps = {
  selectedVehicle: VehicleValueType;
};

export function RouteSteps({ selectedVehicle }: RouteStepsProps) {
  const { lowestCostRoute } = useLowestCostRoute();

  // TODO
  console.log(selectedVehicle);

  return (
    <Steps
      direction="vertical"
      items={lowestCostRoute?.caminho.map(({ destino, distancia, origem, tempoMedioCaminhao, tempoMedioCarro, tempoMedioMoto, tempoMedioOnibus }) => ({
        title: `${origem.replace(' Pr', '')} - ${destino.replace(' Pr', '')}`,
        description: (
          <>
            Carro: {tempoMedioCarro} - Moto: {tempoMedioMoto} - Ônibus: {tempoMedioOnibus} - Caminhão: {tempoMedioCaminhao}
          </>
        ),
        subTitle: `${distancia} Km`,
        status: 'finish',
      }))}
      progressDot
    />
  );
}
