export const rootConfig = {
  "parentId": "",
  "parentRegion": "",
  "isCommonConfig": false,
  "isFormConfig": false,
  "id": "root",
  "type": "",
  "label": "Root",
  "path": "",
  "schemaPath": "",
  "region": "",
  "preferTag": "",
  "state": {},
  "widthMutable": false,
  "heightMutable": false,
  "memberIndex": -1,
  "folded": false,
  "patched": false,
  "x": 0,
  "y": 0,
  "w": 0,
  "h": 0,
  "dialogTitle": "",
  "dialogType": "",
  "children": []
}

export const pageSchemaConfig = {
  "type": "page",
  "title": "Simple Form Page",
  "regions": [
    "body"
  ],
  "body": [
    {
      "type": "service",
      "body": [
        {
          "type": "panel",
          "title": "标题",
          "body": [
            {
              "type": "tpl",
              "tpl": "内容",
              "wrapperComponent": "",
              "inline": false,
              "id": "u:f418d4245c33",
              "$$id": "3ab987de0631"
            }
          ],
          "id": "u:658b78af13e8",
          "actions": [
            {
              "type": "button",
              "label": "button",
              "onEvent": {
                "click": {
                  "actions": [],
                  "$$id": "543d2449c2f3"
                },
                "$$id": "21bd8107c4d3"
              },
              "id": "u:8a201b3f8376",
              "icon": "fa fa-snapchat",
              "rightIcon": "fa fa-snapchat-square",
              "level": "primary",
              "$$id": "a4d256470486"
            }
          ],
          "affixFooter": false,
          "$$id": "9c932beea527"
        }
      ],
      "id": "u:76e1b0ff8ebd",
      "dsType": "api",
      "$$id": "61aeb0debaa1"
    },
    {
      "type": "code",
      "language": "html",
      "value": "<div>html</div>",
      "id": "u:3422108ce1c8",
      "$$id": "2307959a5a86"
    },
    {
      "type": "collapse",
      "header": "标题",
      "body": [
        {
          "type": "tpl",
          "tpl": "内容",
          "wrapperComponent": "",
          "inline": false,
          "id": "u:72975dffc487",
          "$$id": "5795a7b6ecc9"
        },
        {
          "type": "flex",
          "items": [
            {
              "type": "container",
              "body": [],
              "size": "none",
              "style": {
                "position": "static",
                "display": "block",
                "flex": "1 1 auto",
                "flexGrow": 1,
                "flexBasis": "0px",
                "$$id": "d604e86f5b49"
              },
              "wrapperBody": false,
              "isFixedHeight": false,
              "isFixedWidth": false,
              "id": "u:f556377f3f13",
              "$$id": "e7e376a047bf"
            },
            {
              "type": "container",
              "body": [],
              "size": "none",
              "style": {
                "position": "static",
                "display": "block",
                "flex": "1 1 auto",
                "flexGrow": 1,
                "flexBasis": "0px",
                "$$id": "abcfd70f06bf"
              },
              "wrapperBody": false,
              "isFixedHeight": false,
              "isFixedWidth": false,
              "id": "u:5a835dbbb4a3",
              "$$id": "838cd5ac1be1"
            },
            {
              "type": "container",
              "body": [],
              "size": "none",
              "style": {
                "position": "static",
                "display": "block",
                "flex": "1 1 auto",
                "flexGrow": 1,
                "flexBasis": "0px",
                "$$id": "bb0ef84aebec"
              },
              "wrapperBody": false,
              "isFixedHeight": false,
              "isFixedWidth": false,
              "id": "u:e1c849b6f695",
              "$$id": "2e7986e43b4c"
            },
            {
              "type": "container",
              "body": [],
              "size": "none",
              "style": {
                "position": "static",
                "display": "block",
                "flex": "1 1 auto",
                "flexGrow": 1,
                "flexBasis": "0px",
                "$$id": "2b09b529a771"
              },
              "wrapperBody": false,
              "isFixedHeight": false,
              "isFixedWidth": false,
              "id": "u:d8e325b5bc33",
              "$$id": "2cfe657f7c7a"
            },
            {
              "type": "container",
              "body": [],
              "size": "none",
              "style": {
                "position": "static",
                "display": "block",
                "flex": "1 1 auto",
                "flexGrow": 1,
                "flexBasis": 0,
                "$$id": "6976fec64b2d"
              },
              "wrapperBody": false,
              "isFixedHeight": false,
              "isFixedWidth": false,
              "id": "u:8cd60d8c7dfa",
              "$$id": "d15dd67ec620"
            }
          ],
          "style": {
            "position": "relative",
            "rowGap": "10px",
            "columnGap": "10px",
            "$$id": "62291eaad3b0"
          },
          "id": "u:2bfbfaa1b9d2",
          "$$id": "f2e506b18c41"
        }
      ],
      "id": "u:3bb5c003437b",
      "themeCss": {
        "baseControlClassName": {
          "radius": {
            "top-right-border-radius": "var(--borders-radius-2)",
            "$$id": "fa088cfb5b33"
          },
          "$$id": "e556c15818c6"
        },
        "$$id": "f3c97c121cb7"
      },
      "$$id": "b1f4ed03622f"
    },
    {
      "type": "service",
      "body": [],
      "id": "u:fe2410f8920a",
      "dsType": "api",
      "$$id": "16a33da1ad3a"
    }
  ],
  "id": "u:1577ddbabddd",
  "pullRefresh": {
    "disabled": true,
    "$$id": "da10e6367e54"
  },
  "onEvent": {
    "$$id": "1a4ad3431132"
  },
  "$$id": "7f59115b9e0c"
}

export const appVariablesConfig = {
  "ProductName": "BCC",
  "Banlance": 1234.888,
  "ProductNum": 10,
  "isOnline": false,
  "ProductList": [
    "BCC",
    "BOS",
    "VPC"
  ],
  "PROFILE": {
    "FirstName": "Amis",
    "Age": 18,
    "Address": {
      "street": "ShangDi",
      "postcode": 100001
    }
  }
}

export const schemaHistory = [
  {
    "versionId": 0,
    "schema": "[Circular]"
  }
]

export const initialContext = {
  "ready": false,
  "isMobile": false,
  "isSubEditor": false,
  "amisDocHost": "",
  "root": {},
  "theme": "cxd",
  "toolbarMode": "default",
  "noDialog": false,
  "hoverId": "",
  "hoverRegion": "",
  "activeId": "",
  "activeRegion": "",
  "mouseMoveRegion": "",
  "selections": [],
  "contextId": "",
  "dragMode": "move",
  "dragId": "",
  "dragType": "",
  "dropId": "",
  "dropRegion": "",
  "planDropId": "",
  "planDropRegion": "",
  "insertId": "",
  "insertRegion": "",
  "insertRenderers": [],
  "insertRenderersKeywords": "",
  "insertTag": "all",
  "insertSelected": "",
  "insertMode": "insert",
  "insertOrigId": "",
  "insertBeforeId": "",
  "showInsertRenderer": false,
  "schema": {},
  "versionId": 0,
  "schemaHistory": [],
  "toolbars": [],
  "panels": [],
  "showCustomRenderersPanel": true,
  "renderersTabsKey": "base-renderers",
  "outlineTabsKey": "component-outline",
  "subRenderers": [],
  "subRenderersKeywords": "",
  "subRenderersTag": "",
  "subRendererRegion": "",
  "customRenderersKeywords": "",
  "customRenderersTag": "",
  "panelKey": "",
  "leftPanelKey": "",
  "leftPanelOpenStatus": true,
  "jsonSchemaUri": "",
  "scaffoldFormStep": 0,
  "scaffoldStepManipulated": false,
  "scaffoldFormBuzy": false,
  "scaffoldError": "",
  "calculateStarted": false,
  "targetNames": [],
  "appVariables": {},
  "ctx": {
    "__page": {
      "num": 2
    },
    "appVariables": {}
  },
  "i18nEnabled": false,
  "appLocale": "en-US",
  "appCorpusData": {},
  "appLocaleState": 0
}


