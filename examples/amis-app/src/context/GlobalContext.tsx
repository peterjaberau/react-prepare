import React, { createContext, useContext, useState, ReactNode } from 'react';

interface GlobalContextType {
  engineCommandManager: any;
  kclManager: any;
  sceneInfra: any;
  sceneEntitiesManager: any;
  editorManager: any;
  setEngineCommandManager: (value: any) => void;
  setKclManager: (value: any) => void;
  setSceneInfra: (value: any) => void;
  setSceneEntitiesManager: (value: any) => void;
  setEditorManager: (value: any) => void;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [engineCommandManager, setEngineCommandManager] = useState<any>(null);
  const [kclManager, setKclManager] = useState<any>(null);
  const [sceneInfra, setSceneInfra] = useState<any>(null);
  const [sceneEntitiesManager, setSceneEntitiesManager] = useState<any>(null);
  const [editorManager, setEditorManager] = useState<any>(null);

  return (
    <GlobalContext.Provider
      value={{
        engineCommandManager,
        kclManager,
        sceneInfra,
        sceneEntitiesManager,
        editorManager,
        setEngineCommandManager,
        setKclManager,
        setSceneInfra,
        setSceneEntitiesManager,
        setEditorManager,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error('useGlobalContext must be used within a GlobalProvider');
  }
  return context;
};
