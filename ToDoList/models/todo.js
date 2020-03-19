module.exports = function (sequelize, DataTypes) {

    // 定义数据库表格
    var Todo = sequelize.define("Todo", {
        text: DataTypes.STRING,
        complete: DataTypes.BOOLEAN
    });
    return Todo;
};