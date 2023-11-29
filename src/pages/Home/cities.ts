import { DefaultOptionType } from 'antd/es/select';

export const CITY_OPTIONS: DefaultOptionType[] = [
  {
    label: 'Microrregião Telêmaco Borda',
    options: [
      { label: 'Ortigueira', value: 'Ortigueira Pr' },
      { label: 'Imbaú', value: 'Imbaú Pr' },
      { label: 'Reserva', value: 'Reserva Pr' },
      { label: 'Tibagi', value: 'Tibagi Pr' },
      { label: 'Telêmaco Borba', value: 'Telêmaco Borba Pr' },
      { label: 'Ventania', value: 'Ventania Pr' },
    ],
  },
  {
    label: 'Microrregião Jaguariaíva',
    options: [
      { label: 'Arapoti', value: 'Arapoti Pr' },
      { label: 'Sengés', value: 'Sengês Pr' },
      { label: 'Jaguariaíva', value: 'Jaguariaiva Pr' },
      { label: 'Piraí do Sul', value: 'Piraí do Sul Pr' },
    ],
  },
  {
    label: 'Microrregião Ponta Grossa',
    options: [
      { label: 'Castro', value: 'Castro Pr' },
      { label: 'Carambeí', value: 'Carambei Pr' },
      { label: 'Palmeira', value: 'Palmeira Pr' },
      { label: 'Ponta Grossa', value: 'Ponta Grossa Pr' },
    ],
  },
];

/* eslint-disable @typescript-eslint/naming-convention */
export const CITY_COORDINATES: Record<string, [number, number]> = {
  'Ortigueira Pr': [-24.2069653, -50.9303261],
  'Imbaú Pr': [-24.4451289, -50.7577285],
  'Reserva Pr': [-24.6534488, -50.8500466],
  'Tibagi Pr': [-24.5165903, -50.4134912],
  'Telêmaco Borba Pr': [-24.3252508, -50.6330457],
  'Ventania Pr': [-24.2456188, -50.244162],
  'Arapoti Pr': [-24.1420673, -49.8230446],
  'Sengês Pr': [-24.1149056, -49.4641554],
  'Jaguariaiva Pr': [-24.2578096, -49.7169692],
  'Piraí do Sul Pr': [-24.53304, -49.9383946],
  'Castro Pr': [-24.7934361, -50.0009043],
  'Carambei Pr': [-24.9494741, -50.1190969],
  'Palmeira Pr': [-25.4250902, -49.9982052],
  'Ponta Grossa Pr': [-25.1037611, -50.1498237],
};
