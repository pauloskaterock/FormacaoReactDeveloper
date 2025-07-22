// src/components/Task.js
import React from 'react';

function Task({ task, onDelete, onToggle }) {
  // Props recebidas:
  // - task: objeto com { id, text, completed }
  // - onDelete: função para remover a tarefa
  // - onToggle: função para alternar status
  
  return (
    <div className={`task ${task.completed ? 'completed' : ''}`}>
      {/* Checkbox para marcar como concluída */}
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
        className="task-checkbox"
      />
      
      {/* Texto da tarefa */}
      <span 
        className="task-text"
        onClick={() => onToggle(task.id)}
      >
        {task.text}
      </span>
      
      {/* Botão para deletar */}
      <button 
        onClick={() => onDelete(task.id)} 
        className="delete-btn"
        aria-label="Deletar tarefa"
      >
        ×
      </button>
    </div>
  );
}

export default Task;