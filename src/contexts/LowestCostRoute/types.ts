type PathType = {
  destino: string;
  distancia: number;
  origem: string;
  tempoMedioCaminhao: number;
  tempoMedioCarro: number;
  tempoMedioMoto: number;
  tempoMedioOnibus: number;
};

export type LowestCostRouteType = {
  caminho: PathType[];
  distanciaTotal: number;
  tempoMedioCaminhao: number;
  tempoMedioCarro: number;
  tempoMedioMoto: number;
  tempoMedioOnibus: number;
};
