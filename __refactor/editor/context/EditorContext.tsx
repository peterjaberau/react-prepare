import React, { createContext, useContext } from 'react';
import type { EditorManager } from '../../manager';
import type { EditorStoreType } from '../../store/editor';

interface EditorContextType {
  store: EditorStoreType;
  manager: EditorManager;
  theme?: string;
  appLocale?: string;
  amisEnv?: any;
  readonly?: boolean;
}

const EditorContext = createContext<EditorContextType | null>(null);

export const EditorProvider: React.FC<EditorContextType & { children: React.ReactNode }> = ({
                                                                                              children,
                                                                                              ...props
                                                                                            }) => {
  return (
    <EditorContext.Provider value={props}>
      {children}
    </EditorContext.Provider>
  );
};

export const useEditor = () => {
  const context = useContext(EditorContext);
  if (!context) {
    throw new Error('useEditor must be used within an EditorProvider');
  }
  return context;
};
