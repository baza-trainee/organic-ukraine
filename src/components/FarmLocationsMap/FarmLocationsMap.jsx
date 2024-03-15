import { MapContainer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Container } from '../Common/Container/Container';

import ukraineGeoJSON from './ukrainegeojson.json';

import style from './mapStyles.module.scss';
import './customStyle.css';
import { useTranslation } from 'react-i18next';

export const FarmLocationsMap = () => {
  const { t } = useTranslation('FarmLocationsMap');
  // const onEachFeature = (feature, layer) => {
  //   if (feature.properties && feature.properties.NAME_1) {
  //     layer.bindPopup(feature.properties.NAME_1);
  //   }
  // };

  const geoJsonStyle = {
    fillColor: ' #f9fbea',
    color: '#c9a9a0',
    weight: 0.5,
    fillOpacity: 1,
  };
  const onEachFeature = (feature, layer) => {
    if (feature.properties && feature.properties.NAME_1) {
      layer.bindPopup(feature.properties.NAME_1);
      layer.on({
        mouseover: event => {
          event.target.setStyle({
            fillColor: 'yellow', // Колір області при наведенні курсору
            color: 'green', // Колір межі області при наведенні курсору
            fillOpacity: 0.8, // Прозорість області при наведенні курсору
          });
        },
        mouseout: event => {
          event.target.setStyle(geoJsonStyle); // Вертаємо стандартні стилі
        },
      });
    }
  };
  return (
    <Container>
      <div id="FarmLocationsMap" className={style.map_container}>
        <h2 className={style.map_title}>{t('titlemap')}</h2>
        <MapContainer
          center={[48.3794, 31.1656]}
          zoom={6}
          style={{ height: '800px', width: '1200px' }}
          zoomControl={false} // Вимикаємо кнопки зуму
          scrollWheelZoom={false} // Вимикаємо зум колесом миші
          doubleClickZoom={false} // Вимикаємо зум подвійним кліком
          touchZoom={false} // Вимикаємо зум торканням
          draggable={false} // Вимикаємо перетягування мапи
          dragging={false}
        >
          <GeoJSON
            data={ukraineGeoJSON}
            style={geoJsonStyle}
            onEachFeature={onEachFeature}
          />
        </MapContainer>
      </div>
    </Container>
  );
};
