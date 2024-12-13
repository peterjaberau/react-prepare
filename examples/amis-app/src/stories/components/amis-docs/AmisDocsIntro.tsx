import * as React from 'react';
import { render as renderAmis } from 'amis';
import 'amis/lib/themes/cxd.css';
import 'amis/lib/helper.css';
import 'amis/sdk/iconfont.css';
// import 'amins/lib/themes/antd.css';

export const AmisDocsIntro = () => {
  const ui = {
    "type": "panel",
    "title": "Operational Strength",
    "body": [
      {
        "type": "table-view",
        "trs": [
          {
            "background": "#9ecfe2",
            "tds": [
              {
                "body": {
                  "type": "tpl",
                  "tpl": "rating factors",
                },
              },
              {
                "body": {
                  "type": "tpl",
                  "tpl": "serial number",
                },
              },
              {
                "body": {
                  "type": "tpl",
                  "tpl": "Indicator name",
                },
              },
              {
                "body": {
                  "type": "tpl",
                  "tpl": "weight",
                },
              },
              {
                "body": {
                  "type": "tpl",
                  "tpl": "Secondary indicator value",
                },
              },
              {
                "body": {
                  "type": "tpl",
                  "tpl": "Indicator score",
                },
              }
            ],
            "height": 44
          },
          {
            "tds": [
              {
                "rowspan": 4,
                "body": {
                  "type": "tpl",
                  "tpl": "Business Indicators",
                },
              },
              {
                "body": {
                  "type": "tpl",
                  "tpl": "1",
                },
              },
              {
                "body": {
                  "type": "tpl",
                  "tpl": "Product structure and competitiveness",
                },
              },
              {
                "body": {
                  "type": "tpl",
                  "tpl": "40%",
                },
              },
              {
                "body": [
                  {
                    "value": "5",
                    "name": "radios",
                    "type": "radios",
                    "options": [
                      {
                        "label": "1",
                        "value": "1"
                      },
                      {
                        "label": "2",
                        "value": "2"
                      },
                      {
                        "label": "3",
                        "value": "3"
                      },
                      {
                        "label": "4",
                        "value": "4"
                      },
                      {
                        "label": "5",
                        "value": "5"
                      },
                      {
                        "label": "6",
                        "value": "6"
                      },
                      {
                        "label": "7",
                        "value": "7"
                      }
                    ]
                  },
                  {
                    "type": "textarea",
                    "minRows": 3,
                    "maxRows": 20,
                    "value": "test"
                  }
                ],
              },
              {
                "body": {
                  "type": "tpl",
                  "wrapperComponent": "",
                  "tpl": "5.00",
                },
              }
            ],
            "height": 44
          },
          {
            "tds": [
              {
                "body": {
                  "type": "tpl",
                  "tpl": "2",
                },
              },
              {
                "body": {
                  "type": "tpl",
                  "wrapperComponent": "",
                  "tpl": "Technical level",
                },
              },
              {
                "body": {
                  "type": "tpl",
                  "wrapperComponent": "",
                  "tpl": "30%",
                },
              },
              {
                "body": [
                  {
                    "value": "5",
                    "name": "radios",
                    "type": "radios",
                    "options": [
                      {
                        "label": "1",
                        "value": "1"
                      },
                      {
                        "label": "2",
                        "value": "2"
                      },
                      {
                        "label": "3",
                        "value": "3"
                      },
                      {
                        "label": "4",
                        "value": "4"
                      },
                      {
                        "label": "5",
                        "value": "5"
                      },
                      {
                        "label": "6",
                        "value": "6"
                      },
                      {
                        "label": "7",
                        "value": "7"
                      }
                    ]
                  },
                  {
                    "type": "textarea",
                    "label": "",
                    "name": "textarea",
                    "minRows": 3,
                    "maxRows": 20,
                    "value": "test"
                  }
                ],
              },
              {
                "body": {
                  "type": "tpl",
                  "tpl": "5.00",
                },
              }
            ],
          },
          {
            "tds": [
              {
                "body": {
                  "type": "tpl",
                  "tpl": "3",
                },
              },
              {
                "body": {
                  "type": "tpl",
                  "tpl": "Fixed assets (100 million yuan) (two-year weighted)",
                },
              },
              {
                "body": {
                  "type": "tpl",
                  "tpl": "15%",
                },
              },
              {
                "body": {
                  "type": "tpl",
                  "tpl": "1375.04",
                },
              },
              {
                "body": {
                  "type": "tpl",
                  "tpl": "7.00",
                },
              }
            ],
          },
          {
            "tds": [
              {
                "body": {
                  "type": "tpl",
                  "tpl": "4",
                },
              },
              {
                "body": {
                  "type": "tpl",
                  "tpl": "Total operating income (100 million yuan) (three-year weighted)",
                },
              },
              {
                "body": {
                  "type": "tpl",
                  "tpl": "15%",
                },
              },
              {
                "body": {
                  "type": "tpl",
                  "tpl": "6949.30",
                },
              },
              {
                "body": {
                  "type": "tpl",
                  "tpl": "7.00",
                },
              }
            ],
          }
        ],
        "borderColor": "#080808",
        "themeCss": {
          "baseControlClassName": {
            "padding-and-margin:default": {}
          }
        }
      },
      {
        "type": "tpl",
        "tpl": "Operational strength score: 6(5.60)",
        "inline": false,
      },
      {
        "type": "tpl",
        "tpl": "Industry risk score: 3",
        "inline": false,
      },
      {
        "type": "tpl",
        "tpl": "Business risk score: 6",
        "inline": false,
      }
    ],
    "className": "Panel--default border-black",
    "bodyClassName": "text-sm p-4"
  };

  return (
    <div className='container mx-auto p-8'>{renderAmis(ui)}</div>
  )
}
