import React from 'react';
import './CodeSection.css';

interface CodeSectionProps {
  code: string;
}

const CodeSection: React.FC<CodeSectionProps> = ({ code }) => {
  return (
    <div className="code-section-container" data-animation="down-up">
      <div className="code-header">
        <div className="code-dots">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
        </div>
      </div>
      <div className="code-content">
        <pre className="code-block">
          <code dangerouslySetInnerHTML={{ __html: code }} />
        </pre>
      </div>
    </div>
  );
};

export default CodeSection;
