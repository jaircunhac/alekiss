import { User } from "../interface/user"; // export default MyDatabaseClassic;

const users: User[] = [];

export class MyDatabaseMetod{
    add(user: User): void{
        users.push(user)
    }

    remove(user: User[], value: any): boolean{
        const index = users.indexOf(value);
        if (index === -1) {
          return false;
        }
        users.splice(index, 1);
        return true;
      }

    //Criar a funcao para deletar um usuario

    show(): void{
        for(const user of users){
            console.log(user)
        }
    }

}