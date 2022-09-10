const { Schema, model } = require("mongoose");

const employeeSchema = new Schema(
   {
        firstname: {
            type: String,
            require: true,
        },
        lastname: {
            type: String,
            require: true,
        },
        email: {
            type: String,
            require: true,
        },
        phone: {
            type: String,
            unique: true,
            require: true,
        },
        image: {
            type: String,
            require: true,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = model("Employee", employeeSchema);