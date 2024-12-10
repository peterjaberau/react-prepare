// PageComponent2.tsx
import React from "react";

const PageComponent2: React.FC<{ title: string; onBack: () => void }> = ({ title, onBack }) => {
  return (
    <div>
      <h1>{title}</h1>
      <button onClick={onBack}>Back</button>
    </div>
  );
};

export default PageComponent2;
