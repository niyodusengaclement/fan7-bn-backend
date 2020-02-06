export default {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Requests', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    passportName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    passportNumber: {
      type: Sequelize.STRING,
      allowNull: false
    },
    gender: {
      type: Sequelize.STRING,
      allowNull: false
    },
    dob: {
      allowNull: true,
      type: Sequelize.DATE
    },
    origin: {
      type: Sequelize.STRING,
      allowNull: false
    },
    destination: {
      type: Sequelize.STRING,
      allowNull: false
    },
    travel_date: {
      type: Sequelize.DATE,
      allowNull: false
    },
    return_date: {
      type: Sequelize.DATE,
      allowNull: true
    },
    accommodation_id: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    user_id: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    reason: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'reason is not allowed to be empty'
        }
      }
    },
    isApproved: {
      allowNull: true,
      type: Sequelize.BOOLEAN,
      defaultValue: false
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.fn('NOW')
    },
    updatedAt: {
      allowNull: true,
      type: Sequelize.DATE,
      defaultValue: Sequelize.fn('NOW')
    }
  }),

  down: queryInterface => queryInterface.dropTable('Requests')
};
