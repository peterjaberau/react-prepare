/**
  * @file client/renderer/InputTextI18n.tsx
  * @description supports internationalized input-text component
 */

import { FormControlProps, FormItem, makeTranslator } from "amis-core"
import React from "react"
import { Icon, InputBox } from "amis-ui"
import { InputBoxProps } from "amis-ui/lib/components/InputBox"
import cx from "classnames"
import { getEnv } from "mobx-state-tree"
import _ from "lodash"
import { LocaleProps } from "amis-core"

/** Corpus key regular expression */
export const corpusKeyReg = /^i18n:[0-9a-z]{8}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{12}$/

interface InputTextI18nProps extends InputBoxProps, LocaleProps {
  classPrefix: string
  i18nEnabled?: boolean
  disabled?: boolean
  maxLength?: number
  minLength?: number
  onI18nChange?: (value: string) => void
}

export class InputTextI18n extends React.Component<InputTextI18nProps> {
  constructor(props: InputTextI18nProps) {
    super(props)
    this.onClickI18nBtn = this.onClickI18nBtn.bind(this);
    this.onInputChange = this.onInputChange.bind(this);

  }

  render() {
    let {
      value,
      classPrefix,
      i18nEnabled,
      className,
      disabled,
      translate = makeTranslator(this.props.locale),
      placeholder,
      onI18nChange,
      ...rest
    } = this.props

    const restProps = rest
      ? _.pick(rest, [
          "onBlur",
          "placeholder",
          "disabled",
          "readOnly",
          "onClear",
          "hasError",
          "prefix",
          "children",
          "borderMode",
        ])
      : {}

    const isMatch = corpusKeyReg.test(value!)
    const _value = i18nEnabled ? translate(value) : value

    return (
      <div
        className={cx(className, `${classPrefix}InputI18n-container`, {
          [`${classPrefix}InputI18n-multi-container`]: i18nEnabled,
        })}
      >
        <div className={cx(`${classPrefix}InputI18n-inner-container`)}>
          <InputBox
            {...restProps}
            value={_value}
            clearable={false}
            onChange={this.onInputChange}
            placeholder={placeholder}
            disabled={disabled}
          ></InputBox>
          {i18nEnabled && !disabled ? (
            <div
              className={cx(`${classPrefix}InputI18n-addon-container`, {
                [`${classPrefix}InputI18n-addon-active`]: isMatch,
              })}
              onClick={this.onClickI18nBtn}
            >
              <Icon icon="corpus-i18n" className="icon cursor-pointer CorpusI18n-input-icon" />
            </div>
          ) : null}

          {isMatch && i18nEnabled ? (
            <div className={cx(`${classPrefix}InputI18n-overlay`)} onClick={this.onClickI18nBtn}></div>
          ) : null}
        </div>
      </div>
    )
  }

  // @autobind
  onClickI18nBtn() {
    const { value } = this.props
    if (corpusKeyReg.test(value!)) {
      this.props?.onChange?.("")
      this.props.onI18nChange?.("")
      return
    }
    let _uuid = "i18n:1189fb5d-ac5b-4558-b363-068ce5decc99"
    this.props?.onChange?.(_uuid)
    this.props.onI18nChange?.(_uuid)
  }

  // @autobind
  onInputChange(value: string) {
    this.props.onChange?.(value)
  }
}

interface InputTextI18nControlProps extends FormControlProps {}

class InputTextI18nControl extends React.Component<InputTextI18nControlProps> {
  constructor(props: InputTextI18nControlProps) {
    super(props)
  }

  render() {
    const { onChange, value, classPrefix, className, classnames, placeholder, disabled, ...rest } = this.props
    const { i18nEnabled } = getEnv((window as any).editorStore)

    return (
      <InputTextI18n
        {...rest}
        i18nEnabled={i18nEnabled}
        onChange={onChange}
        classPrefix={classPrefix}
        classnames={classnames}
        value={value}
        placeholder={placeholder}
        className={className}
        disabled={disabled}
      ></InputTextI18n>
    )
  }
}

@FormItem({
  type: "input-text-i18n",
})
export class InputTextI18nRenderer extends InputTextI18nControl {}
