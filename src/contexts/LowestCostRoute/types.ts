type PathType = {
  destino: string;
  distancia: number;
  origem: string;
  tempoMedioCaminhao: number;
  tempoMedioCarro: number;
  tempoMedioMicroOnibus: number;
  tempoMedioMoto: number;
  tempoMedioOnibus: number;

  custoPedagio?: number;
};

export type LowestCostRouteType = {
  caminho: PathType[];
  distanciaTotal: number;
  tempoMedioCaminhao: number;
  tempoMedioCarro: number;
  tempoMedioMicroOnibus: number;
  tempoMedioMoto: number;
  tempoMedioOnibus: number;

  custoPedagiosViagem?: {
    caminhao: number;
    carro: number;
    microOnibus: number;
    moto: number;
    onibus: number;
  };
  custoRefeicao?: number;
};
