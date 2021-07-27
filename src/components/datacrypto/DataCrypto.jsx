import React, { useState, useEffect } from 'react';
import { getCryptos } from '../../utils/getCryptos';
import { CardCrypto } from '../cardcrypto';

export const DataCrypto = () => {
  const [cryptos, setCryptos] = useState([]);

  const handleClick = () => {
    if (cryptos.length == 0) {
      getCryptos({ setCryptos });
    }

    return;
  };

  return (
    <div>
      <button type='button' className='btn-crypto' onClick={handleClick}>
        Obtener Cryptos
      </button>
      {cryptos.map((crypto) => (
        <CardCrypto crypto={crypto} />
      ))}
    </div>
  );
};
