module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        id:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        username: {
            type: Sequelize.STRING,
        },
        fname: {
            type: Sequelize.STRING
        },
        lname: {
            type: Sequelize.STRING
        },
        userType: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        isActive: {
            type: Sequelize.BOOLEAN
        }
    });

    return User;
};

