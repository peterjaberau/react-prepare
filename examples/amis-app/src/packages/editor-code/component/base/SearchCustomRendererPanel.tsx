import React, { useState, useEffect, useMemo } from 'react';
import SearchPanel from './SearchPanel';

interface SearchCustomRendererProps {
  store: {
    customRenderersByOrder: Array<any>;
    customRenderersKeywords: string;
    customRenderersTag: string;
    changeCustomRenderersKeywords: (keyword: string) => void;
    changeCustomRenderersTag: (tag: string) => void;
  };
}

const SearchCustomRendererPanel: React.FC<SearchCustomRendererProps> = ({ store }) => {
  const localStorageKey = 'amis-editor-custom-renderer-search-history';
  const [customRenderersByOrder, setCustomRenderersByOrder] = useState<Array<any>>([]);
  const [defaultKeyword, setDefaultKeyword] = useState<string>('');

  const filteredRenderers = useMemo(() =>
      store.customRenderersByOrder.filter((item) => !item.disabledRendererPlugin),
    [store.customRenderersByOrder]
  );

  useEffect(() => {
    setCustomRenderersByOrder(filteredRenderers);
    setDefaultKeyword(store.customRenderersKeywords || store.customRenderersTag || '');
  }, [filteredRenderers, store.customRenderersKeywords, store.customRenderersTag]);

  return customRenderersByOrder.length > 0 ? (
    <SearchPanel
      allResult={customRenderersByOrder}
      externalKeyword={defaultKeyword}
      immediateChange
      closeAutoComplete
      searchPanelUUID={localStorageKey}
      onChange={store.changeCustomRenderersKeywords}
      onTagChange={store.changeCustomRenderersTag}
    />
  ) : null;
};

export default SearchCustomRendererPanel;
