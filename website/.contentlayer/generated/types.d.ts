// NOTE This file is auto-generated by Contentlayer

import type { Markdown, MDX, ImageFieldData, IsoDateTimeString } from 'contentlayer/core'
import * as Local from 'contentlayer/source-files'

export { isType } from 'contentlayer/client'

export type { Markdown, MDX, ImageFieldData, IsoDateTimeString }

/** Document types */
export type Component = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'Component'
  title?: string | undefined
  description?: string | undefined
  package?: string | undefined
  slugAlias?: string | undefined
  /** MDX file body */
  body: MDX
  slug: string
  editUrl: string
  params: list
  frontmatter: json
  npmUrl: string
  pathname: string
  sourceUrl: string
  visualizeUrl: string
  version: string
}

export type Guide = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'Guide'
  title?: string | undefined
  description?: string | undefined
  package?: string | undefined
  /** MDX file body */
  body: MDX
  slug: string
  editUrl: string
  params: list
  frontmatter: json
}

export type Overview = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'Overview'
  title?: string | undefined
  description?: string | undefined
  package?: string | undefined
  /** MDX file body */
  body: MDX
  slug: string
  editUrl: string
  params: list
  frontmatter: json
  pathname: string
}

export type Snippet = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'Snippet'
  title?: string | undefined
  description?: string | undefined
  package?: string | undefined
  /** MDX file body */
  body: MDX
  slug: string
  editUrl: string
  params: list
  frontmatter: json
  framework: string
}  

/** Nested types */
  

/** Helper types */

export type AllTypes = DocumentTypes | NestedTypes
export type AllTypeNames = DocumentTypeNames | NestedTypeNames

export type DocumentTypes = Component | Guide | Overview | Snippet
export type DocumentTypeNames = 'Component' | 'Guide' | 'Overview' | 'Snippet'

export type NestedTypes = never
export type NestedTypeNames = never

export type DataExports = {
  allDocuments: DocumentTypes[]
  allOverviews: Overview[]
  allGuides: Guide[]
  allSnippets: Snippet[]
  allComponents: Component[]
}


export interface ContentlayerGenTypes {
  documentTypes: DocumentTypes
  documentTypeMap: DocumentTypeMap
  documentTypeNames: DocumentTypeNames
  nestedTypes: NestedTypes
  nestedTypeMap: NestedTypeMap
  nestedTypeNames: NestedTypeNames
  allTypeNames: AllTypeNames
  dataExports: DataExports
}

declare global {
  interface ContentlayerGen extends ContentlayerGenTypes {}
}

export type DocumentTypeMap = {
  Component: Component
  Guide: Guide
  Overview: Overview
  Snippet: Snippet
}

export type NestedTypeMap = {

}

 