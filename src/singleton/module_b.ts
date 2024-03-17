import { MyDatabaseMetod } from "./db/my-database-metodo"
import { myDatabase, myDatabase as myDatabaseA } from "./module_a"

const MyDatabaseClassic = new MyDatabaseMetod;

MyDatabaseClassic.add({ name: "Jair", age: 18})
MyDatabaseClassic.add({name: "Daniel", age: 26})
MyDatabaseClassic.remove(2)
MyDatabaseClassic.show()

console.log(MyDatabaseClassic === myDatabase)