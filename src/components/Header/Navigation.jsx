import { Link } from 'react-scroll';

export const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="Hero" smooth="true" duration={500}>
            Hero
          </Link>
        </li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </nav>
  );
};
