import { useEffect, useRef } from 'react';
import { MainStore } from '../../store/editor';
import type { EditorManager } from '../../manager';
import type { EditorStoreType } from '../../store/editor';

interface UseEditorStoreProps {
  value: any;
  onChange: (value: any) => void;
  isMobile?: boolean;
  theme?: string;
  toolbarMode?: 'default' | 'mini';
  noDialog?: boolean;
  isSubEditor?: boolean;
  amisDocHost?: string;
  superEditorData?: any;
  appLocale?: string;
  amisEnv?: any;
  i18nEnabled?: boolean;
  ctx?: any;
  showCustomRenderersPanel?: boolean;
}

export const useEditorStore = ({
                                 value,
                                 onChange,
                                 isMobile,
                                 theme,
                                 toolbarMode = 'default',
                                 noDialog,
                                 isSubEditor,
                                 amisDocHost,
                                 superEditorData,
                                 appLocale,
                                 amisEnv,
                                 i18nEnabled = false,
                                 ctx,
                                 showCustomRenderersPanel
                               }: UseEditorStoreProps): [EditorStoreType, boolean] => {
  const store = useRef<EditorStoreType>(MainStore.create({
    isMobile,
    theme,
    toolbarMode,
    noDialog,
    isSubEditor,
    amisDocHost,
    superEditorData,
    appLocale,
    appCorpusData: amisEnv?.replaceText,
    i18nEnabled
  })).current;

  const isInternalChangeRef = useRef(false);

  useEffect(() => {
    store.setCtx(ctx);
    store.setSchema(value);

    if (showCustomRenderersPanel !== undefined) {
      store.setShowCustomRenderersPanel(showCustomRenderersPanel);
    }
  }, []);

  useEffect(() => {
    if (value !== store.schemaRaw) {
      isInternalChangeRef.current = true;
      store.setSchema(value);
      isInternalChangeRef.current = false;
    }
  }, [value]);

  useEffect(() => {
    store.setIsMobile(isMobile);
  }, [isMobile]);

  useEffect(() => {
    store.setCtx(ctx);
  }, [ctx]);

  useEffect(() => {
    store.setAppLocale(appLocale);
  }, [appLocale]);

  useEffect(() => {
    store.setAppCorpusData(amisEnv?.replaceText);
  }, [amisEnv?.replaceText]);

  return [store, isInternalChangeRef.current];
};
