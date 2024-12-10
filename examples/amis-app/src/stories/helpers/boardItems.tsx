import * as React from "react"


export const boardItems = [


  {
    id: 'board-item-1',
    definition: {},
    columnSpan: 1,
    rowSpan: 5,
    data: {
      title: 'board-item-1',
      description: '',
      content: (
        <>
          board-item-1 content
          {/*<RenderFormulePart as={'SchemaPreview'} />*/}
        </>
      ),
    },
  },

  {
    id: 'board-item-2',
    definition: {},
    columnSpan: 3,
    rowSpan: 5,
    data: {
      title: 'board-item-2',
      description: '',
      content: (
        <>
          board-item-2 content
          {/*<RenderFormulePart as={'FormPreview'} />*/}
        </>
      ),
    },
  },

]
