const user= require('../../service/user');

module.exports = {
    getAllTrainees:() => { 
        return user.getAllUsers(); 
    },
    getTrainee: (parent, args) => {
        const { id } = args;
        return user.getUser(id);
    }
}