import { Link } from 'react-scroll';

export const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="Hero" smooth="true" duration={500}>
            Що ми робимо
          </Link>
        </li>
        <li>
          <Link to="Hero" smooth="true" duration={500}>
            Продукти
          </Link>
        </li>
        <li>
          <Link to="Hero" smooth="true" duration={500}>
            Статті
          </Link>
        </li>
        <li>
          <Link to="Hero" smooth="true" duration={500}>
            Партнери
          </Link>
        </li>
        <li>
          <Link to="Hero" smooth="true" duration={500}>
            Карта господарств
          </Link>
        </li>
        <li>
          <Link to="Hero" smooth="true" duration={500}>
            Контакти
          </Link>
        </li>
      </ul>
    </nav>
  );
};
