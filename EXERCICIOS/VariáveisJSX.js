// Quando você injeta JavaScript em
// Visualização: Descrição do link de carregamento de documentos
// JSX
// , que o JavaScript faz parte do mesmo ambiente que o restante do JavaScript no seu arquivo.

// Isso significa que você pode acessar variáveis ​​dentro de uma expressão JSX, mesmo que essas variáveis ​​tenham sido declaradas fora do bloco de código JSX.

// // Declare a variable:
// const name = 'Gerdo';

// // Access your variable inside of a JSX expression:
// const greeting = <p>Hello, {name}!</p>;


// Instruções
// Ponto de verificação 1 habilitado
// 1 .
// Substitua root.render()o argumento de por um JSX <h1></h1>.

// Usando chaves, defina o <h1></h1>texto interno da tag como theBestString.


import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);

const theBestString = 'This text was accessed through a javascript variable';

root.render(<h1>{theBestString}</h1>);