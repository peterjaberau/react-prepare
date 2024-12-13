import React, { useState, useEffect } from 'react';
import { Input } from 'antd';
import SearchPanel from './SearchPanel';

interface SearchRendererProps {
  store: any;
}



const SearchRendererPanel: React.FC<SearchRendererProps> = ({ store }) => {
  const localStorageKey = 'amis-editor-renderer-search-history';
  const [subRenderersByOrder, setSubRenderersByOrder] = useState<Array<any>>([]);
  const [defaultKeyword, setDefaultKeyword] = useState<string>('');
  const [lastSubRenderersTag, setLastSubRenderersTag] = useState<string>(store.subRenderersTag);

  useEffect(() => {
    // Filter out hidden components
    let filteredSubRenderers = store.subRenderersByOrder.filter(
      (item: any) => !item.disabledRendererPlugin
    );
    setSubRenderersByOrder(filteredSubRenderers);
    setDefaultKeyword(store.subRenderersKeywords || store.subRenderersTag || '');
  }, [store.subRenderersByOrder, store.subRenderersKeywords, store.subRenderersTag]);

  useEffect(() => {
    // Sync the current keyword with subRenderersTag if it changes externally
    // Note: When the tag is reset externally, subRenderersKeywords is also reset.
    if (store.subRenderersTag !== lastSubRenderersTag && !store.subRenderersKeywords) {
      setLastSubRenderersTag(store.subRenderersTag);
      setDefaultKeyword(store.subRenderersTag);
    }
  }, [store.subRenderersTag, store.subRenderersKeywords, lastSubRenderersTag]);

  const changeSubRenderersTag = (curTag: string) => {
    setLastSubRenderersTag(curTag);
    store.changeSubRenderersTag(curTag);
  };

  return (
    <SearchPanel
      allResult={subRenderersByOrder}
      externalKeyword={defaultKeyword}
      searchPanelUUID={localStorageKey}
      onChange={store.changeSubRenderersKeywords}
      onTagChange={changeSubRenderersTag}
      immediateChange={true}
      closeAutoComplete={true}
    />
  );
};

export default SearchRendererPanel;
