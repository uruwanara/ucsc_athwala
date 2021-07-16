module.exports = (sequelize, Sequelize) => {
    const AuthToken = sequelize.define("authtoken", {
        token: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING,
            primaryKey: true,
        }
    });

    return AuthToken;
};