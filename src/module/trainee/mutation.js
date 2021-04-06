const users = require('../../service/user');

module.exports = {
    CreateTrainee:  (parent, args) => {
        const { input } = args;
        const { name, email } = input;
        const user = { id: users.length + 1, name : name, email : email }
        users.push(user);
        return {data: users, message:"Trainee created successfully", status :200};
    },
    UpdateTrainee:  (parent, args) => {
        const { id, input } = args;
        const { name, email } = input;
        console.log(args);
        let index = users.findIndex((user) => user.id == id);
        if(index === -1)
          return {data: null, message:"Trainee id not found", status :500};
        
        users[index].name  = name;
        users[index].email = email;
        console.log(users);
        return {data: users, message:"Trainee updated successfully", status :200};
        
    },
    DeleteTrainee:  (parent, args) => {
        const { id } = args;
        let index = users.findIndex((user) => user.id == id);

        if(index === -1)
           return {data: null, message:"Trainee id not found", status :500};
        
        users.splice(index, 1);
        return {data: users, message:"Trainee deleted successfully", status :200}; 
    },
}