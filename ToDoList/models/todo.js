module.exports = function (sequelize, DataTypes) {

    // 定义数据库表格
    // 见：https://sequelize.org/v5/manual/getting-started.html#modeling-a-table
    var Todo = sequelize.define("Todo", {
        text: DataTypes.STRING,
        complete: DataTypes.BOOLEAN
    });
    return Todo;
};