import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from 'react-simple-maps';
import { Container } from '../Common/Container/Container';

import mapData from './gadm41_UKR.json';
import style from './mapStyles.module.scss';
import './customStyle.css';

export const FarmLocationsMap = () => {
  return (
    <Container>
      <div className={style.map_container}>
        <ComposableMap
          projection="geoAzimuthalEqualArea"
          projectionConfig={{
            rotate: [-26.0, -49.0, 0],
            scale: 5700,
          }}
          style={{ width: '100%', height: 'auto' }}
          viewBox="130 -70 1200 800"
        >
          {/* <ZoomableGroup center={[longitude, latitude]} zoom={1}></ZoomableGroup> */}
          <Geographies geography={mapData}>
            {({ geographies }) =>
              geographies.map(geo => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  style={{
                    default: {
                      fill: '#f9fbea', // колір області
                      stroke: '#c9a9a0', //  колір для ліній меж
                      strokeWidth: 0.75, // товщина лінії меж
                      outline: 'none', // визначає контур навколо областей, який ми відключаємо, встановлюючи none.
                    },
                    hover: {
                      fill: '#f1f6d1',
                      stroke: '#c9a9a0',
                      strokeWidth: 0.75,
                      outline: 'none',
                    },
                    pressed: {
                      fill: '#f1f6d1',
                      stroke: '#c9a9a0',
                      strokeWidth: 0.75,
                      outline: 'none',
                    },
                  }}
                />
              ))
            }
          </Geographies>
        </ComposableMap>
      </div>
    </Container>
  );
};
