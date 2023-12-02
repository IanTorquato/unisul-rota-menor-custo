import { faBus, faBusAlt, faCar, faMotorcycle, faTruckMoving } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'antd';
import { useState } from 'react';

import { useLowestCostRoute } from 'src/contexts/LowestCostRoute';
import { VehicleValueType } from 'src/core/constants/vehicles';

import './styles.scss';

type VehicleTimesProps = {
  initialVehicle: VehicleValueType;
};

export function VehicleTimes({ initialVehicle }: VehicleTimesProps) {
  const [selectedVehicle, setSelectedVehicle] = useState<VehicleValueType>(initialVehicle);

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
        {tempoMedioCarro}h
      </Button>

      <Button size="small" title="Caminhão" type={selectedVehicle === 'Caminhão' ? 'link' : 'text'} onClick={() => setSelectedVehicle('Caminhão')}>
        <FontAwesomeIcon icon={faTruckMoving} />
        <br />
        {tempoMedioCaminhao}h
      </Button>

      <Button size="small" title="Motocicleta" type={selectedVehicle === 'Motocicleta' ? 'link' : 'text'} onClick={() => setSelectedVehicle('Motocicleta')}>
        <FontAwesomeIcon icon={faMotorcycle} />
        <br />
        {tempoMedioMoto}h
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
        {tempoMedioOnibus}h
      </Button>
    </div>
  );
}
