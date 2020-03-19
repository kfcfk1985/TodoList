module.exports = function (sequelize, DataTypes) {

    // 定义模型
    var Todo = sequelize.define("Todo", {
        text: DataTypes.STRING,
        complete: DataTypes.BOOLEAN
    });
    return Todo;
};