// 20 dígitos de Pi em JSX
// 6 minutos
// Agora você pode injetar JavaScript regular em expressões JSX! Isso será extremamente útil.

// No editor de código, você pode ver uma expressão JSX que exibe os primeiros vinte dígitos de pi.

// Estude a expressão e observe o seguinte:

// O código é escrito em um arquivo JavaScript. Por padrão, tudo será tratado como JavaScript regular.
// Encontre <div>na linha 5. A partir daí, até </div>, o código será tratado como JSX.
// Encontre Math. A partir daí, até (20), o código será tratado como JavaScript regular novamente.
// As chaves em si não serão tratadas como JSX ou como JavaScript. Elas são marcadores que sinalizam o início e o fim de uma injeção de JavaScript em JSX, semelhante às aspas que sinalizam os limites de uma string.

// Instruções

// Ponto de verificação 1 falhou, tente novamente
// 1 .
// Abra app.js .

// Declare uma nova variável chamada math. Defina igual a um elemento mathJSX .<h1>

// Coloque a seguinte expressão dentro de <h1>:


import React from 'react';
import ReactDOM from 'react-dom';

const pi = (
  <div>
    <h1>
      PI, YALL!
    </h1>
    <p>
      {Math.PI.toFixed(20)}
    </p>
  </div>
);

ReactDOM.render(
	pi,
	document.getElementById('app')
);

// --------------------------------------------------------------------------

import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);
// Write code here:
const math = (<h1>2 + 3 = {2 + 3}</h1>);
root.render(math);
