const express = require("express");
const categoryController = require("../controller/category/category");
const subCategoryController = require("../controller/category/subCategory");
const auth = require("../middleware/Auth")

const Router = express.Router();
Router.use(express.json());

//Category
Router.post("/api/category", categoryController.createCategory);
Router.get("/api/getAllCategory", categoryController.getAllCategory);
Router.put("/api/updateCategory/:id", categoryController.updatecategory);
Router.delete("/api/deleteCategory/:id", categoryController.deletecategory);

//SubCategory
Router.post("/api/subCategory", subCategoryController.createSubCategory);
Router.get("/api/getAllSubCategory", subCategoryController.getAllSubCategory);
Router.put("/api/updateSubCategory/:id", subCategoryController.updateSubCategory);
Router.delete("/api/deleteSubCategory/:id", subCategoryController.deleteSubCategory);

module.exports = Router;