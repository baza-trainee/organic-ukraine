import { useTranslation } from 'react-i18next';
import farms from '../../assets/WhatWeDo/farms.png';
import lands from '../../assets/WhatWeDo/lands.png';
import workers from '../../assets/WhatWeDo/workers.png';

const {t} = useTranslation("WhatWeDo")
const stats = [
  {
    value: '53',
    label: 'господарств',
    img: farms,
    alt: 'farms',
  },
  {
    value: '221',
    label: 'земель',
    img: lands,
    alt: 'lands',
  },
  {
    value: '3770',
    label: 'працівників',
    img: workers,
    alt: 'workers',
  },
];

export default stats;
