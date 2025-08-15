import { List } from "./list.js"

export class User {
   constructor(name, email, password) {
      this.name = name
      this.email = email
      this.password = password
      this.lists = []
   }

   createList(name, items = []) {
      const newList = new List(name, items)
      this.lists.push(newList)
      return newList
   }

   deleteList(listName) {
      this.lists = this.lists.filter(list => list.name !== listName)
   }

   addItemToList(listName, item) {
      const list = this.lists.find(list => list.name === listName)
      if (list) {
         list.items.push(item)
      }
   }

   removeItemFromList(listName, itemName) {
      const list = this.lists.find(list => list.name === listName)
      if (list) {
         list.items = list.items.filter(item => item !== itemName)
      }
   }
}