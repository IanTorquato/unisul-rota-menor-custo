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

  custoPedagio?: number;
  custoRefeicao?: number;
};
