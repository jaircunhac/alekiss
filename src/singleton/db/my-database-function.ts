import { User } from "../interface/user"; // export default MyDatabaseClassic;

const users: User[] = [];

export const MyDatabaseFunctionfunction = ( function (){
    return {
        add(user: User): void{
            users.push(user)
        },

        //Criar a funcao para deletar um usuario

        show(): void{
            for(const user of users){
                console.log(user)
            }
        }
    }
})
