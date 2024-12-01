import type {SchemaObject} from 'amis';

const tpls: {
  [propName: string]: any;
} = {};

export function getSchemaTpl(
  name: string,
  patch?: object,
  options?: object
): any {
  const tpl = tpls[name] || {};
  let schema = null;

  if (typeof tpl === 'function') {
    schema = tpl(patch, options);
  } else {
    schema = patch
      ? {
          ...tpl,
          ...patch
        }
      : tpl;
  }

  return schema;
}

export function setSchemaTpl(name: string, value: any) {
  tpls[name] = value;
}

export function valuePipeOut(value: any) {
  try {
    if (value === 'undefined') {
      return undefined;
    }


    return JSON.parse(value);
  } catch (e) {
    return value;
  }
}

export function undefinedPipeOut(value: any) {
  if (Array.isArray(value)) {
    return value.length ? value : undefined;
  }

  if (typeof value === 'string') {
    return value ? value : undefined;
  }

  if (typeof value === 'object') {
    return Object.keys(value).length ? value : undefined;
  }
  return value;
}

export function defaultValue(defaultValue: any, strictMode: boolean = true) {
  return strictMode
    ? (value: any) => (typeof value === 'undefined' ? defaultValue : value)
    : (value: any) => value || defaultValue;
}


export function tipedLabel(
  body: string | Array<SchemaObject>,
  tip: string,
  style?: React.CSSProperties
) {
  return {
    type: 'tooltip-wrapper',
    tooltip: tip,
    tooltipTheme: 'dark',
    placement: 'top',
    tooltipStyle: {
      fontSize: '12px',
      ...(style || {})
    },
    className: 'ae-formItemControl-label-tip',
    body
  };
}
