const mongoose = require("mongoose");

const categorySchema = mongoose.Schema(
    {
        title: { type: String, trim: true, },
        category: { type: String, trim: true, unique: true },
        description: { type: String, },
        image: { type: String },
    },
    {
        timestamps: true,
    }
);

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
