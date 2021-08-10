module.exports = (sequelize, DataTypes) => {
    const Comments = sequelize.define("Comments", {
      commentText: {
        type: DataTypes.STRING(280),
        allowNull: false,
      },
      username: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
    });
  
    return Comments;
  };
  