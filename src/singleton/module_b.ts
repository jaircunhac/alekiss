import { MyDatabaseMetod } from "./db/my-database-metodo"
import { myDatabase, myDatabase as myDatabaseA } from "./module_a"

const MyDatabaseClassic = new MyDatabaseMetod;

MyDatabaseClassic.add({ name: "Jair", age: 18})
MyDatabaseClassic.show()

console.log(MyDatabaseClassic === myDatabase)