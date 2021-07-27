# Prueba-B4E

-Tiempo de prueba 60 minutos.

1- Crear una nueva aplicación de ReactJS con el nombre welcome_b4e 
2- Realice la limpieza del Proyecto dejando solamente el texto Wellcome B4E en un <h1> en el componente App.js 
3- Cree un nuevo componente con el nombre DataCrypto.jsx. e importarlo en el componente App.js 
4- Cree un Botón que realice una petición a la api coingecko (https://www.coingecko.com/es/api), a través de la url(https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin&order=m arket_cap_desc&per_page=100&page=1&sparkline=false), e imprima el resultado por consola. Puede usar fetch, axios o el método que considere adecuado.  
5- En el componente DataCrypto.jsx Renderice en una tarjeta los siguientes elementos:  
    - Logo de la criptomoneda (image) 
    - Nombre (name) 
    - Símbolo (symbol) 
    - Precio actual (current_price) 
    - Porcentaje de variación de las últimas 24 horas 
      (market_cap_change_percentage_24h) si el porcentaje es positivo represéntelo en color verde si es negativo represéntelo en color rojo. 
6- Cree un input tipo number, con el nombre cantidad que multiplique el número ingresado con el precio de la criptomoneda(current_price) y lo muestre en pantalla. 
7- Subir la prueba a su repositorio en Github, si no posee cuenta de Github debe crear una.  
