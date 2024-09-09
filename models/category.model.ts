import { DataTypes } from "sequelize";
import sequelize from "../config/database";

const Category = sequelize.define("Category", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true, // tự động tăng
        allowNull: false, // k đc để trống
        primaryKey: true, // từ khoá chính
    },
    title: {
        type: DataTypes.STRING(255), // VARCHAR(255)
        allowNull: false,
    },
    image: {
        type: DataTypes.TEXT('long'), // LONGTEXT
    },       
    description: {
        type: DataTypes.TEXT("long"),
    },
    status: {
        type: DataTypes.STRING(20),
    },   
    position: {
        type: DataTypes.INTEGER,
    },  
    slug: {
        type: DataTypes.STRING(255), 
        allowNull: false,
    },
    deleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false, // Đặt giá trị mặc định là false
    },
    deletedAt: {
        type: DataTypes.DATE,
    }
}, {
    tableName: "categories", // tên bảng
    timestamps: true, // tự động uản lý createAt, updateAt
});

export default Category;