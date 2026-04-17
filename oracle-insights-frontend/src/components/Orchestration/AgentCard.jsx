import React from 'react';

const AgentCard = ({ agent, isActive, isCompleted }) => {
  const getStatusClass = () => {
    if (isCompleted) return 'status-dot-active';
    if (isActive) return 'status-dot-active';
    return 'status-dot-waiting';
  };

  const getBorderClass = () => {
    if (isActive) return 'border-oracle-accent glow-border active';
    if (isCompleted) return 'border-oracle-success';
    return 'border-oracle-border';
  };

  return (
    <div 
      className={`
        card p-3 transition-all duration-300
        ${getBorderClass()}
        ${isActive ? 'shadow-glow' : ''}
      `}
    >
      <div className="flex items-center gap-3">
        <div className={`
          agent-icon
          ${agent.color}
          ${isActive ? 'ring-2 ring-oracle-accent' : ''}
          ${isCompleted ? 'ring-2 ring-oracle-success' : ''}
        `}>
          {agent.icon}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-medium text-oracle-text truncate">
            {agent.name}
          </h3>
          <div className="flex items-center gap-2 mt-1">
            <div className={getStatusClass()} />
            <span className="text-xs text-oracle-muted">
              {agent.log || (isActive ? 'Ejecutando...' : 'Esperando')}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentCard;
