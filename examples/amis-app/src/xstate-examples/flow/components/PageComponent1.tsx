import React from "react";

const PageComponent1: React.FC<{ title: string; onNext: () => void }> = ({ title, onNext }) => {
  return (
    <div>
      <h1>{title}</h1>
      <button onClick={onNext}>Next</button>
    </div>
  );
};

export default PageComponent1;
