module.exports = (sequelize, Sequelize) => {
    const Donation = sequelize.define("donation", {
        donationID: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        donationType: {
            type: Sequelize.STRING
        },
        title: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        }
        // },
        // email: {
        //     type: Sequelize.STRING
        // },
        // password: {
        //     type: Sequelize.STRING
        // },
        // isActive: {
        //     type: Sequelize.BOOLEAN
        // }
    });

    return Donation;
};