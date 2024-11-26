#Formula related

Formula input related component specifications.

## Explicit and implicit expressions

For example: `visibleOn`, `disabledOn` Because there are two ways of writing expressions, a clear distinction needs to be made here.

- When there is no initial value, the "Click to write expression" button appears. Clicking it will pop up an expression editor.
- When the initial value exists and is a js expression (that is, not wrapped in `${` and `}`), it can be displayed and entered directly in the text input box.
- When the initial value exists and is a formula expression wrapped by `${` and `}`, it will be displayed in the formula editor. After clicking at the same time, an expression editor will pop up, which can directly echo the current formula.
- The formula pop-up window always contains formula syntax, and there is no template splicing syntax.
- When the js expression is deleted, only the new version of the formula editor can be used.

```schema
getSchemaTpl('expressionFormulaControl', {
  label: 'No default value',
  name: 'var1'
}),

getSchemaTpl('expressionFormulaControl', {
  label: 'Default value is old syntax',
  name: 'var2',
  value: 'data.a == 1'
}),

getSchemaTpl('expressionFormulaControl', {
  label: 'Default value is new syntax',
  name: 'var3',
  value: '\\${a == 1 ? "1" : a == 2 ? "二" : a == 3 ? "三" : "A very long expression"}'
})
```

##Default value of text input box

The default display is a text input box. Click `+fx` to add a formula fragment. The formula part is highlighted, which is the overall highlighting, rather than the highlighting of the internal token of the expression (variable names, operators, literals, etc. will be used differently. highlighted). The overall highlight will not be refined within the highlight. When the tooltip is displayed, the highlight will be refined, and the clicked part of the formula will be edited after clicking. Note that this is editing the local formula, not the entire default value input box.

If the formula wrapped by `${` and `}` does not appear in the value format, it is considered to be ordinary text. If it exists, the formula will be processed. At that time, when the user entered the formula directly through the text input box, it was regarded as ordinary text. If the user entered the `$` symbol, it should be converted into `\\$` so that it would not be mistaken for a formula. To add a formula fragment, the user must add it by clicking the `+fx` button. `+fx` can add multiple fragments.

```schema
getSchemaTpl('tplFormulaControl', {
  name: 'value',
  label: 'default value'
}),

getSchemaTpl('tplFormulaControl', {
  name: 'value2',
  label: 'default value',
  value: 'My name is \\${name}'
})
```

##Multi-line text input box default value

```schema
getSchemaTpl('textareaDefaultValue', {
  name: 'var1',
  value: 'My name is \\${name}'
})
```

##Default value of number input box

The default display is a numeric input box. You can enter a formula by clicking `fx`. Because it is not text, it cannot be spliced, so the default value is either a formula or a static value.

```schema
getSchemaTpl('valueFormula', {
  mode: 'vertical',
  rendererSchema: (schema) => ({
    type: 'input-number',
    ...schema,
    displayMode: 'base'
  }),
  valueType: 'number' // expected numeric type
})
```

##Date input box default value

```schema
getSchemaTpl('valueFormula', {
  mode: 'vertical',
  rendererSchema: (schema) => ({
    type: 'input-date',
    ...schema
  }),
  placeholder: 'Please select a static value',
  header: 'Expression or relative value',
  DateTimeType: 1,
  label: tipedLabel('Default value', 'Supports for example: <code>now, +3days, -2weeks, +1hour, +2years</code>, etc. (minute|min|hour|day|week|month|year|weekday |second|millisecond) This relative value usage')
})
```

## Default value of option input box

```schema
getSchemaTpl('valueFormula', {
  rendererSchema: (schema) => ({
    ...schema,
    type: 'select',
    options: [
      {
        label: 'Option 1',
        value: '1'
      },
      {
        label: 'Option 2',
        value: '2'
      }
    ]
  }),
  // There are some problems with the design of the default value component. The request is automatically initiated. The interface data is used as the default value option. The interface form should be to set a static value or FX.
  needDeleteProps: ['source'],
  // When the data source is a custom static option, there is no need to configure the default value. Just check the option directly. If you leave it, there will be a bug: when the check is removed, the default value configuration component is not cleared, but the schema is cleared. value
  visibleOn: 'this.selectFirst !== true && this.source != null'
})
```
