import React, { useState } from 'react';
import './CardCrypto.scss';

const getClassToNumber = (number) =>
  Math.sign(number) === 1
    ? 'percentage-24h positive'
    : 'percentage-24h negative';

export const CardCrypto = ({ crypto }) => {
  const [cantidad, setCantidad] = useState({ cantidad: '' });

  const actualizarState = (e) => {
    setCantidad({
      ...crypto,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className='cryptos__wrap-card'>
      <div key={crypto.id} className='cryptos__wrap-card--card'>
        <div className='cryptos__wrap-card--card__title'>
          <figure className='cryptos__wrap-card--card__title--container-img'>
            <img
              className='cryptos__wrap-card--card__title--container-img--img'
              src={crypto.image}
              alt={crypto.name}
            />
          </figure>
          <h3>
            {crypto.name} - <span>{crypto.symbol}</span>
          </h3>
        </div>
        <div className='cryptos__wrap-card--card__description'>
          <h4>
            Price: <span>{crypto.current_price} USD</span>
          </h4>
          <h4>
            24h %:{' '}
            <span
              className={getClassToNumber(crypto.price_change_percentage_24h)}
            >
              {crypto.price_change_percentage_24h} %
            </span>
          </h4>
          <label htmlFor='purchase-price'>Cantidad </label>
          <input
            type='number'
            id='cantidad'
            placeholder='1'
            name='cantidad'
            onChange={actualizarState}
          />
          <h4>
            total: <span>{cantidad.cantidad * crypto.current_price}</span>
          </h4>
        </div>
      </div>
    </div>
  );
};
