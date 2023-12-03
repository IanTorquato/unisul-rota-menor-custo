import { faBus, faBusAlt, faCar, faMotorcycle, faTruckMoving } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'antd';

import { useLowestCostRoute } from 'src/contexts/LowestCostRoute';
import { VehicleValueType } from 'src/core/constants/vehicles';
import { formatHour } from 'src/utils/formatHour';

import './styles.scss';

export type VehicleTimesProps = {
  selectedVehicle: VehicleValueType;
  setSelectedVehicle: (newVehicle: VehicleValueType) => void;
};

export function VehicleTimes({ selectedVehicle, setSelectedVehicle }: VehicleTimesProps) {
  const { lowestCostRoute } = useLowestCostRoute();

  if (lowestCostRoute === undefined) {
    return null;
  }

  const { /* distanciaTotal, */ tempoMedioCaminhao, tempoMedioCarro, tempoMedioMoto, tempoMedioOnibus } = lowestCostRoute;

  return (
    <div className="vehicle-times-container">
      <Button size="small" title="Carro" type={selectedVehicle === 'Carro' ? 'link' : 'text'} onClick={() => setSelectedVehicle('Carro')}>
        <FontAwesomeIcon icon={faCar} />
        <br />
        {formatHour(tempoMedioCarro)}
      </Button>

      <Button size="small" title="Caminhão" type={selectedVehicle === 'Caminhão' ? 'link' : 'text'} onClick={() => setSelectedVehicle('Caminhão')}>
        <FontAwesomeIcon icon={faTruckMoving} />
        <br />
        {formatHour(tempoMedioCaminhao)}
      </Button>

      <Button size="small" title="Motocicleta" type={selectedVehicle === 'Motocicleta' ? 'link' : 'text'} onClick={() => setSelectedVehicle('Motocicleta')}>
        <FontAwesomeIcon icon={faMotorcycle} />
        <br />
        {formatHour(tempoMedioMoto)}
      </Button>

      <Button
        size="small"
        title="Micro-ônibus"
        type={selectedVehicle === 'Micro-ônibus' ? 'link' : 'text'}
        onClick={() => setSelectedVehicle('Micro-ônibus')}
      >
        <FontAwesomeIcon icon={faBusAlt} />
        <br />
        NaNh
      </Button>

      <Button size="small" title="Ônibus" type={selectedVehicle === 'Ônibus' ? 'link' : 'text'} onClick={() => setSelectedVehicle('Ônibus')}>
        <FontAwesomeIcon icon={faBus} />
        <br />
        {formatHour(tempoMedioOnibus)}
      </Button>
    </div>
  );
}
