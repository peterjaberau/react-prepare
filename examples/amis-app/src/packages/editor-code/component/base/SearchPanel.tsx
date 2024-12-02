import React, { useState, useEffect, useRef } from "react"
import { Input, Button, List } from "antd"
import { matchSorter } from "match-sorter"
import isString from "lodash/isString"

/**
 * A general search component with the following features:
 * 1. Search history: It automatically records the keywords that users have searched for, making it convenient for users to use them next time;
 * 2. Auto-complete: When autoComplete is set to true, it will display all information containing the keyword inputted by the user (presented in a categorized format);
 * 3. Search category: It depends on whether the current search data structure contains a tag. If it doesn't contain a tag, it won't display the search category;
 */
interface SearchProps {
  allResult: Array<any> // Current available search data
  searchPanelUUID: string // Search panel ID, needs to be unique, front-end web storage needs
  closeAutoComplete?: boolean // Whether to close autoComplete, default is enabled
  externalKeyword?: string // External recorded search keywords: mainly used for external search operations
  tagKey?: string // According to which field in the search results to classify, the default is 'tags'
  onChange: (keyword: string) => void // Execute when the search keyword changes
  onTagChange?: (tag: string) => void // Execute when clicking the search category
  immediateChange?: boolean // Whether to enable immediate feedback, the value changes immediately trigger onChange, default is false
}

interface SearchStates {
  resultTags: Array<string> // Store current all categories, not changing with search keywords
  resultByTag: {
    // Store allResult data in allResult by tag: not changing with search keywords
    [propName: string]: Array<any>
  }
  curKeyword: string // Current search keyword
  searchResult: Array<any> // Store matching search results for the current search keyword: changing with search keywords
  searchResultByTag: {
    // Store a list containing the current search keyword (stored by tag): changing with search keywords
    [propName: string]: Array<any>
  }
  visible: boolean // Used to control whether to display the search dropdown panel
  curKeywordSearchHistory: string[] // Search history
  toggleTagFolderStatus: boolean
}

const SearchPanel: React.FC<SearchProps> = ({
  allResult,
  searchPanelUUID,
  closeAutoComplete = false,
  externalKeyword = "",
  tagKey = "tags",
  onChange,
  onTagChange,
  immediateChange = false,
}) => {
  const inputRef = useRef<any>(null)

  const getSearchHistory = () => {
    let searchHistory = []
    if (window.localStorage) {
      const historyDataStr = window.localStorage.getItem(searchPanelUUID)
      if (historyDataStr) {
        const historyData = JSON.parse(historyDataStr)
        if (historyData && Array.isArray(historyData)) {
          searchHistory = historyData
        }
      }
    }
    return searchHistory
  }

  const [state, setState] = useState<SearchStates>({
    resultTags: [],
    resultByTag: {},
    curKeyword: externalKeyword,
    searchResult: [],
    searchResultByTag: {},
    visible: false,
    curKeywordSearchHistory: getSearchHistory(),
    toggleTagFolderStatus: true,
  })

  useEffect(() => {
    if (externalKeyword !== state.curKeyword) {
      setState((prevState) => ({
        ...prevState,
        curKeyword: externalKeyword,
      }))
      groupedResultByKeyword(externalKeyword)
    }
    // ... existing code ...
  }, [externalKeyword, allResult])

  const groupedResultByKeyword = (keywords: string = "") => {
    // ... existing code ...
  }

  const updateCurKeyword = (keywords: string) => {
    const trimmedKeyword = keywords.trim()
    setState((prevState) => ({
      ...prevState,
      curKeyword: trimmedKeyword,
    }))
    groupedResultByKeyword(trimmedKeyword)
    if (immediateChange) {
      onChange(trimmedKeyword)
    }
  }

  const addSearchHistory = (newKeywords: string) => {
    const { curKeywordSearchHistory } = state
    if (curKeywordSearchHistory.indexOf(newKeywords) > -1) {
      return
    }
    if (curKeywordSearchHistory.length === 10) {
      curKeywordSearchHistory.shift()
    }
    curKeywordSearchHistory.push(newKeywords)
    updateSearchHistory()
  }

  const updateSearchHistory = () => {
    if (window.localStorage) {
      const { curKeywordSearchHistory } = state
      window.localStorage.setItem(searchPanelUUID, JSON.stringify(curKeywordSearchHistory))
    }
  }

  return (
    <div className="editor-InputSearch-panel">
      <Input
        ref={inputRef}
        value={state.curKeyword}
        onChange={(e) => updateCurKeyword(e.target.value)}
        placeholder="Enter keyword to search components"
        onFocus={() => setState((prevState) => ({ ...prevState, visible: true }))}
        onBlur={() => setState((prevState) => ({ ...prevState, visible: false }))}
        suffix={
          state.curKeyword ? <Button icon="close" onClick={() => updateCurKeyword("")} /> : <Button icon="search" />
        }
      />
      {state.visible && <div className="editor-InputSearch-content">{/* Render search results and history */}</div>}
    </div>
  )
}

export default SearchPanel
