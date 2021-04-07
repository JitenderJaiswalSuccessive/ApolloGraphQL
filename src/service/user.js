class User {
    constructor() {
        this.users = new Map();
        this.id = 0;
    }

    getAllUsers() {
        return this.users;
    }

    createUser(user) {
        this.id += 1;
        this.users.set(this.id, { ...user, id: this.id });
        return this.users.get(this.id);
    }

    updateUser(id, role){
     const user = this.users.get(Number(id));
     this.users.set(Number(id), { ...user, role});
     return this.users.get(Number(id));
    }

    deleteUser(id){
        this.users.delete(Number(id));
        return {id: id};
    }

    getUser(id){
        return this.users.get(id);
    }
}
/*const users =[
    {
        id: 1, 
        name:"sneha",
        email:"sneha@gmail.com"
    },
    {
        id: 2, 
        name:"jitender",
        email:"jitender@gmail.com"
    }
];*/
module.exports = new User(); 