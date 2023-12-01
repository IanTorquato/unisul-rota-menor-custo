import { faBus, faBusAlt, faCar, faMotorcycle, faTruckMoving } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'antd';

import { useLowestCostRoute } from 'src/contexts/LowestCostRoute';
import './styles.scss';

// type VehicleTimesProps = {};

export function VehicleTimes() {
  const { lowestCostRoute } = useLowestCostRoute();
  const { distanciaTotal, tempoMedioCaminhao, tempoMedioCarro, tempoMedioMoto, tempoMedioOnibus } = lowestCostRoute || {};

  return (
    <div className="vehicle-times-container">
      <Button size="small" title="Carro" type="link">
        <FontAwesomeIcon icon={faCar} />
        <br />
        {tempoMedioCarro}h
      </Button>

      <Button size="small" title="Caminhão" type="text">
        <FontAwesomeIcon icon={faTruckMoving} />
        <br />
        {tempoMedioCaminhao}h
      </Button>

      <Button size="small" title="Motocicleta" type="text">
        <FontAwesomeIcon icon={faMotorcycle} />
        <br />
        {tempoMedioMoto}h
      </Button>

      <Button size="small" title="Micro-ônibus" type="text">
        <FontAwesomeIcon icon={faBusAlt} />
        <br />
        NaNh
      </Button>

      <Button size="small" title="Ônibus" type="text">
        <FontAwesomeIcon icon={faBus} />
        <br />
        {tempoMedioOnibus}h
      </Button>
    </div>
  );
}
