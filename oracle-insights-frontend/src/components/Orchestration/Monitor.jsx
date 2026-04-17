import React from 'react';
import AgentCard from './AgentCard';

const Monitor = ({ agents, currentStep }) => {
  return (
    <div className="h-full flex flex-col">
      <div className="p-4 border-b border-oracle-border">
        <h2 className="text-lg font-semibold text-oracle-text flex items-center gap-2">
          <svg className="w-5 h-5 text-oracle-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
          </svg>
          Orquestación
        </h2>
        <p className="text-xs text-oracle-muted mt-1">
          Estado de los agentes
        </p>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {agents.map((agent) => (
          <AgentCard
            key={agent.id}
            agent={agent}
            isActive={agent.status === 'active'}
            isCompleted={agent.status === 'completed'}
          />
        ))}
      </div>

      <div className="p-4 border-t border-oracle-border">
        <div className="flex items-center justify-between text-xs text-oracle-muted">
          <span>Progreso</span>
          <span>{currentStep}/4</span>
        </div>
        <div className="mt-2 h-1 bg-oracle-border rounded-full overflow-hidden">
          <div 
            className="h-full bg-oracle-accent transition-all duration-500"
            style={{ width: `${(currentStep / 4) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default Monitor;
