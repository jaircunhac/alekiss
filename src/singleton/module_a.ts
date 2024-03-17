import { MyDatabaseMetod } from "./db/my-database-metodo"

const myDatabase = new MyDatabaseMetod;

myDatabase.add({ name: "Maria", age: 15})
myDatabase.show()

export { myDatabase }