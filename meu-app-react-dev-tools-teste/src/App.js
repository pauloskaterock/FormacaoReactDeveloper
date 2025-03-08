import React, { useState } from 'react';

function App() {
  const [contador, setContador] = useState(0);

  return (
    <div>
        <h2>React Dev Tools Teste PH RAILS REACT ENGINEER</h2>

      <h1>Contador: {contador}</h1>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </div>
  );
}

export default App;