import React from 'react';

interface ImportanceProps {
  importance: boolean;
  urgency?: boolean; // Optional urgency level (string literal type)
  selector: boolean; // true for importance, false for urgency
}

const ImportanceLabel: React.FC<ImportanceProps> = ({ importance, urgency, selector }) => {
  const importanceLabel = importance === false ? 'Not Important' : 'Important';
  const urgencyLabel = urgency ? 'Not Urgent' : 'Urgent';

  return (
    selector ? <span> {importanceLabel} </span> : <span> {urgencyLabel} </span> 
  );
};

export default ImportanceLabel;


