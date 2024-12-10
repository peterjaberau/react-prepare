import React, { ForwardedRef, forwardRef } from 'react'
import { PATHS } from '../lib/paths'
import { Link } from 'react-router-dom'
import type { LinkProps } from 'react-router-dom'

interface BaseActionButtonProps {
  className?: string
}

type ActionButtonAsButton = BaseActionButtonProps &
  Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    keyof BaseActionButtonProps
  > & {
    Element: 'button'
  }

type ActionButtonAsLink = BaseActionButtonProps &
  Omit<LinkProps, keyof BaseActionButtonProps> & {
    Element: 'link'
  }

type ActionButtonAsExternal = BaseActionButtonProps &
  Omit<LinkProps, keyof BaseActionButtonProps> & {
    Element: 'externalLink'
  }

type ActionButtonAsElement = BaseActionButtonProps &
  Omit<React.HTMLAttributes<HTMLElement>, keyof BaseActionButtonProps> & {
    Element: React.ComponentType<React.HTMLAttributes<HTMLButtonElement>>
  }

export type ActionButtonProps =
  | ActionButtonAsButton
  | ActionButtonAsLink
  | ActionButtonAsExternal
  | ActionButtonAsElement

export const ActionButton = forwardRef((props: ActionButtonProps, ref) => {
  const classNames = `action-button p-0 m-0 group mono text-xs leading-none flex items-center gap-2 rounded-sm border-solid border border-chalkboard-30 hover:border-chalkboard-40 enabled:dark:border-chalkboard-70 dark:hover:border-chalkboard-60 dark:bg-chalkboard-90/50 text-chalkboard-100 dark:text-chalkboard-10 ${props.className ? props.className : ''}`

  switch (props.Element) {
    case 'button': {
      // Note we have to destructure 'className' and 'Element' out of props
      // because we don't want to pass them to the button element;
      // the same is true for the other cases below.
      const {
        Element,
        children,
        className: _className,
        ...rest
      } = props
      return (
        <button
          ref={ref as ForwardedRef<HTMLButtonElement>}
          className={classNames}
          {...rest}
        >
          {children}
        </button>
      )
    }
    case 'link': {
      const {
        Element,
        to,
        children,
        className: _className,
        ...rest
      } = props
      return (
        <Link
          ref={ref as ForwardedRef<HTMLAnchorElement>}
          to={to || PATHS.INDEX}
          className={classNames}
          {...rest}
        >
          {children}
        </Link>
      )
    }
    case 'externalLink': {
      const {
        Element,
        to,
        children,
        className: _className,
        ...rest
      } = props
      return (
        <Link
          ref={ref as ForwardedRef<HTMLAnchorElement>}
          to={to || PATHS.INDEX}
          className={classNames}
          {...rest}
          target="_blank"
        >
          {children}
        </Link>
      )
    }
    default: {
      const {
        Element,
        children,
        className: _className,
        ...rest
      } = props

      return (
        <Element className={classNames} {...rest}>
          {children}
        </Element>
      )
    }
  }
})
