import React, { useState } from 'react';

function Counter() {
  // 1. Criando o estado do contador com useState
  // count é o valor atual, setCount é a função para atualizá-lo
  // Iniciamos com 0
  const [count, setCount] = useState(0);

  // 2. Função para incrementar o contador
  const increment = () => {
    setCount(count + 1); // Atualiza o estado adicionando 1
  };

  // 3. Função para decrementar o contador
  const decrement = () => {
    setCount(count - 1); // Atualiza o estado subtraindo 1
  };

  // 4. Função para resetar o contador
  const reset = () => {
    setCount(0); // Volta o estado para 0
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Contador React</h2>
      
      {/* 5. Exibindo o valor atual do contador */}
      <p style={styles.counter}>Valor atual: {count}</p>
      
      {/* 6. Botões para controlar o contador */}
      <div style={styles.buttons}>
        <button style={styles.button} onClick={decrement}>
          Diminuir (-)
        </button>
        
        <button style={styles.button} onClick={reset}>
          Resetar
        </button>
        
        <button style={styles.button} onClick={increment}>
          Aumentar (+)
        </button>
      </div>
    </div>
  );
}

// Estilos CSS-in-JS (opcional, pode usar CSS normal)
const styles = {
  container: {
    textAlign: 'center',
    margin: '50px auto',
    padding: '20px',
    maxWidth: '400px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#696969', //Gimgrey
  },
  title: {
    color: '#333',
  },
  counter: {
    fontSize: '1.5rem',
    margin: '20px 0',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
  },
  button: {
    padding: '8px 16px',
    fontSize: '1rem',
    cursor: 'pointer',
    backgroundColor: '#483D8B', //DarkSlateBlue
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    transition: 'background-color 0.3s',
  },
};

export default Counter;