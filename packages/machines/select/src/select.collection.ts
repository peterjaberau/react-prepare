import { ListCollection, type CollectionItem, type CollectionOptions } from "@ibrains-design/collection"
import { ref } from "@ibrains-design/core"

export const collection = <T extends CollectionItem>(options: CollectionOptions<T>): ListCollection<T> => {
  return ref(new ListCollection(options))
}

collection.empty = (): ListCollection<CollectionItem> => {
  return ref(new ListCollection<CollectionItem>({ items: [] }))
}
