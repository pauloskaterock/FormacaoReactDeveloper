// src/components/TaskList.js
import React, { useState } from 'react';
import Task from './Task';
import './styles.css';

function TaskList() {
  // 1. Estado para armazenar a lista de tarefas
  // useState retorna um array com [valor, funçãoParaAtualizar]
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Aprender React', completed: false },
    { id: 2, text: 'Fazer café', completed: true }
  ]);

  // 2. Estado para controlar o input de nova tarefa
  const [newTask, setNewTask] = useState('');

  // 3. Função para adicionar nova tarefa
  const addTask = () => {
    if (newTask.trim() !== '') { // Verifica se não está vazio
      setTasks([...tasks, { 
        id: Date.now(), // Cria um ID único
        text: newTask, 
        completed: false 
      }]);
      setNewTask(''); // Limpa o input
    }
  };

  // 4. Função para deletar tarefa
  const deleteTask = (id) => {
    // Filtra a lista mantendo apenas tarefas com ID diferente
    setTasks(tasks.filter(task => task.id !== id));
  };

  // 5. Função para marcar/desmarcar como concluída
  const toggleTask = (id) => {
    // Mapeia a lista e altera o completed da tarefa com ID correspondente
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="task-list-container">
      <h1>Minha Lista de Tarefas</h1>
      
      {/* 6. Input para adicionar novas tarefas */}
      <div className="input-container">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Digite uma nova tarefa..."
          onKeyPress={(e) => e.key === 'Enter' && addTask()}
        />
        <button onClick={addTask}>Adicionar</button>
      </div>
      
      {/* 7. Lista de tarefas */}
      <div className="tasks-container">
        {tasks.length === 0 ? (
          <p className="empty-message">Nenhuma tarefa adicionada ainda!</p>
        ) : (
          tasks.map(task => (
            <Task 
              key={task.id} // Importante para otimização do React
              task={task} 
              onDelete={deleteTask}
              onToggle={toggleTask}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default TaskList;