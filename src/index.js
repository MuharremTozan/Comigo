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

export class List {
   constructor(name, items = []) {
      this.name = name
      this.items = items
   }
}

const user1 = new User('Muharrem', 'muharrem@example.com', 'password123')

user1.createList('Shopping List', ['Apples', 'Bananas', 'Oranges'])
user1.createList('To-Do List', ['Clean the house', 'Buy groceries'])

console.log(user1.lists)
console.log(user1.lists[0].items)
console.log(user1.lists[1].items)

user1.addItemToList('Shopping List', 'Grapes')
console.log(user1.lists[0].items)

user1.removeItemFromList('To-Do List', 'Buy groceries')
console.log(user1.lists[1].items)

user1.deleteList('Shopping List')
console.log(user1.lists)

const user2 = new User('Jane', 'jane@example.com', 'securepassword')

user2.createList('Work Tasks', ['Finish report', 'Email client'])
console.log(user2.lists)
console.log(user1.lists)