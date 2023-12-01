import { Steps } from 'antd';

import { useLowestCostRoute } from 'src/contexts/LowestCostRoute';

export function RouteSteps() {
  const { lowestCostRoute } = useLowestCostRoute();

  console.log({ lowestCostRoute });

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
