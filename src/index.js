import { User } from './user.js'

const users = []
 
const user1 = new User('Muharrem', 'muharrem@example.com', 'password123')
users.push(user1)

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
users.push(user2)

user2.createList('Work Tasks', ['Finish report', 'Email client'])
console.log(user2.lists)
console.log(user1.lists) 

function showAllLists() {
   users.forEach(user => {
      console.log(`Lists for ${user.name}:`)
      user.lists.forEach(list => {
         console.log(`- ${list.name}: ${list.items.join(', ')}`)
      })
   })
}

showAllLists()