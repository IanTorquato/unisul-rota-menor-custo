export type VehicleValueType = 'Carro' | 'Caminhão' | 'Motocicleta' | 'Micro-ônibus' | 'Ônibus';

export const FuelAverage: Record<VehicleValueType, number> = {
  Carro: 15,
  Motocicleta: 25,
  Caminhão: 7.5,
  // eslint-disable-next-line @typescript-eslint/naming-convention
  'Micro-ônibus': 10,
  Ônibus: 5.5,
};
