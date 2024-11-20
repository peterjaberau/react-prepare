import { type FilePathTreeNode, TreeCollection, type TreeCollectionOptions, filePathToTree } from "@ibrains-design/collection"
import { ref } from "@ibrains-design/core"

export const collection = <T>(options: TreeCollectionOptions<T>): TreeCollection<T> => {
  return ref(new TreeCollection(options))
}

collection.empty = (): TreeCollection => {
  return ref(new TreeCollection({ rootNode: { children: [] } }))
}

export function filePathCollection(paths: string[]): TreeCollection<FilePathTreeNode> {
  return ref(filePathToTree(paths))
}
