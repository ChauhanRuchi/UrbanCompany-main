const mongoose = require("mongoose");

const subCategorySchema = mongoose.Schema(
    {
        title: { type: String, trim: true, },
        categoryID: [{ 
            type: mongoose.Types.ObjectId, 
            ref: 'Category', 
            trim: true, 
            index: true 
        }],
        subCategory: [{ 
            title: { type: String, trim: true }, 
            subtitle: { type: String, trim: true }, 
            price: { type: Number, trim: true },
            description: { type: String, trim: true },
         }],
        description: { type: String, },
        image: { type: String },
    },
    {
        timestamps: true,
    }
);

const SubCategory = mongoose.model("SubCategory", subCategorySchema);

module.exports = SubCategory;
