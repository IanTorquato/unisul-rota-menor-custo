import { DefaultOptionType } from 'antd/es/select';

export const CITY_OPTIONS: DefaultOptionType[] = [
  {
    label: 'Microrregião Telêmaco Borda',
    options: [
      { label: 'Ortigueira', value: 'Ortigueira' },
      { label: 'Imbaú', value: 'Imbaú' },
      { label: 'Reserva', value: 'Reserva' },
      { label: 'Tibagi', value: 'Tibagi' },
      { label: 'Telêmaco Borba', value: 'Telêmaco Borba' },
      { label: 'Ventania', value: 'Ventania' },
    ],
  },
  {
    label: 'Microrregião Jaguariaíva',
    options: [
      { label: 'Arapoti', value: 'Arapoti' },
      { label: 'Sengés', value: 'Sengés' },
      { label: 'Jaguariaíva', value: 'Jaguariaíva' },
      { label: 'Piraí do Sul', value: 'Piraí do Sul' },
    ],
  },
  {
    label: 'Microrregião Ponta Grossa',
    options: [
      { label: 'Castro', value: 'Castro' },
      { label: 'Carambeí', value: 'Carambeí' },
      { label: 'Palmeira', value: 'Palmeira' },
      { label: 'Ponta Grossa', value: 'Ponta Grossa' },
    ],
  },
];

/* eslint-disable @typescript-eslint/naming-convention */
export const CITY_COORDINATES: Record<string, [number, number]> = {
  Ortigueira: [-24.2069653, -50.9303261],
  Imbaú: [-24.4451289, -50.7577285],
  Reserva: [-24.6534488, -50.8500466],
  Tibagi: [-24.5165903, -50.4134912],
  'Telêmaco Borba': [-24.3252508, -50.6330457],
  Ventania: [-24.2456188, -50.244162],
  Arapoti: [-24.1420673, -49.8230446],
  Sengés: [-24.1149056, -49.4641554],
  Jaguariaíva: [-24.2578096, -49.7169692],
  'Piraí do Sul': [-24.53304, -49.9383946],
  Castro: [-24.7934361, -50.0009043],
  Carambeí: [-24.9494741, -50.1190969],
  Palmeira: [-25.4250902, -49.9982052],
  'Ponta Grossa': [-25.1037611, -50.1498237],
};
