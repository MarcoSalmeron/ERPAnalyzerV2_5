import React from 'react';

const getAgentLabel = (agent) => {
  const labels = {
    supervisor: 'Supervisor',
    investigador: 'Investigador',
    analista: 'Analista',
    redactor: 'Redactor',
    system: 'Sistema',
  };
  return labels[agent?.toLowerCase()] || agent || 'Sistema';
};

const getAgentColor = (agent) => {
  const colors = {
    supervisor: 'bg-oracle-accent',
    investigador: 'bg-oracle-success',
    analista: 'bg-oracle-warning',
    redactor: 'bg-oracle-primary',
    system: 'bg-oracle-muted',
  };
  return colors[agent?.toLowerCase()] || 'bg-oracle-muted';
};

const MessageItem = ({ message }) => {
  const isUser = message.agent === 'user';
  const isSystem = message.agent === 'system';

  const formatTime = (timestamp) => {
    if (!timestamp) return '';
    const date = new Date(timestamp);
    return date.toLocaleTimeString('es-MX', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  return (
    <div 
      className={`
        animate-in
        ${isUser ? 'flex justify-end' : 'flex justify-start'}
      `}
    >
      <div 
        className={`
          max-w-[80%] rounded-lg p-3
          ${isUser 
            ? 'bg-oracle-accent text-white' 
            : isSystem
              ? 'bg-oracle-border text-oracle-muted text-center w-full max-w-full'
              : 'bg-oracle-surface border border-oracle-border'
          }
        `}
      >
        {!isUser && !isSystem && (
          <div className="flex items-center gap-2 mb-1">
            <div className={`w-5 h-5 rounded-full ${getAgentColor(message.agent)} flex items-center justify-center text-[10px] font-bold text-white`}>
              {getAgentLabel(message.agent).charAt(0)}
            </div>
            <span className="text-xs font-medium text-oracle-accent">
              {getAgentLabel(message.agent)}
            </span>
          </div>
        )}
        
        <p className={`text-sm ${isUser ? 'text-white' : 'text-oracle-text'} whitespace-pre-wrap`}>
          {message.content}
        </p>
        
        <span className={`text-[10px] mt-1 block ${isUser ? 'text-white/70' : 'text-oracle-muted'}`}>
          {formatTime(message.timestamp)}
        </span>
      </div>
    </div>
  );
};

export default MessageItem;
