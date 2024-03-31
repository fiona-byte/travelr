import { Link } from 'react-router-dom';
import { CardProps } from '../../types';
import './card.css';

const Card = ({ country }: { country: CardProps }) => {
  return (
    <Link to={`/country/${country?.name}`} className='card'>
      <div className='card__container'>
        <img src={country?.flag} alt='country flag' className='card__flag' />
        <div className='card__box'>
          <h3 className='card__capital'>{country?.capital}</h3>
          <p className='card__country'>{country?.name}</p>
        </div>
        <div className='card__weather'>
          <div className='weather__icon'></div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
