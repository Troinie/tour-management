import { DataTypes } from "sequelize";
import sequelize from "../config/database";

const Tour = sequelize.define("Tour", {
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
    code: {
        type: DataTypes.STRING(10),
    },
    images: {
        type: DataTypes.TEXT('long'), // LONGTEXT
    },
    price: {
        type: DataTypes.INTEGER,
    },   
    discount: {
        type: DataTypes.INTEGER,
    },    
    information: {
        type: DataTypes.TEXT('long'),
    },   
    schedule: {
         type: DataTypes.TEXT('long'),
    },   
    timeStart: {
        type: DataTypes.DATE, // TIMESTAMP
    },   
    stock: {
        type: DataTypes.INTEGER,
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
    tableName: "tours", // tên bảng
    timestamps: true, // tự động uản lý createAt, updateAt
});

export default Tour;