// Ao escrever
// Preview: Docs JavaScript XML (JSX) is a syntax extension of JavaScript that provides highly functional and reusable markup code. It is used to create DOM elements which are then rendered in the React DOM. JSX provides a neat visual representation of the UI.
// JSX
// , é comum usar variáveis ​​para definir atributos .

// Aqui está um exemplo de como isso pode funcionar:

// // Use a variable to set the `height` and `width` attributes:

// const sideLength = "200px";

// const panda = (
//   <img 
//     src="images/panda.jpg" 
//     alt="panda" 
//     height={sideLength} 
//     width={sideLength} />
// );


// Observe como neste exemplo, <img />cada atributo 's obtém sua própria linha. Isso pode tornar seu código mais legível se você tiver muitos atributos para um elemento.

// Propriedades de objeto também são frequentemente usadas para definir atributos:

// const pics = {
//   panda: "http://bit.ly/1Tqltv5",
//   owl: "http://bit.ly/1XGtkM3",
//   owlCat: "http://bit.ly/1Upbczi"
// }; 

// const panda = (
//   <img 
//     src={pics.panda} 
//     alt="Lazy Panda" />
// );

// const owl = (
//   <img 
//     src={pics.owl} 
//     alt="Unimpressed Owl" />
// );

// const owlCat = (
//   <img 
//     src={pics.owlCat} 
//     alt="Ghastly Abomination" />
// ); 


// Instruções
// Ponto de verificação 1 habilitado
// 1 .
// Na linha 9, declare uma nova variável chamada gooseImg. Defina seu valor igual a um <img />elemento JSX.

// Dê a <img />um atributo o nome . Defina o valorsrc do atributo igual à variável .goose



import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);
const goose = 'https://content.codecademy.com/courses/React/react_photo-goose.jpg';

// Declare new variable here:
const gooseImg = (<img src={goose}/>);
root.render(gooseImg);