const mongoose = require("mongoose");

//Imports
const users = require('../models/User')
const ResponseService = require("../utils/RresponseService"); // Response service

// Update
exports.update=(async (req, res) => {
  users.findByIdAndUpdate(req.params.id, req.body, (err, doc) => {
    ResponseService.generalPayloadResponse(err, doc, res, "user updated successfully");
  });
});

// Get by id
exports.getById=(async (req, res) => {
  users.findById(req.params.id, (err, doc) => {
    ResponseService.generalPayloadResponse(err, doc, res);
  });
});

// Soft Delete
exports.delete=(async(req, res) => {
  users.findByIdAndUpdate(req.params.id, (err, doc) => {
    ResponseService.generalPayloadResponse(err, doc, res, "user deleted successfully");
  });
});

//get all
exports.getAll=(async(req, res) => {
  users.find((err, doc) => {
    ResponseService.generalPayloadResponse(err, doc, res);
  });
});

//get all by designation
exports.getAllByDesignation = async function (req, res) {
  const designation = req.params.designation;

  // Pagination parameters
  const limit = req.query.limit ? parseInt(req.query.limit) : 10;
  const page = req.query.page ? parseInt(req.query.page) - 1 : 0;


  const totalPages = Math.ceil(await users.countDocuments({ designation: designation }) / limit);

   posts.find({ categoryis: categoryId }, (err, doc) => {
    const newPayload = {
      docs: doc,
      totalPages: totalPages
    }
    ResponseService.generalPayloadResponse(err, newPayload, res);
  })
    .sort({ name: -1 })
    .skip(page * limit)
    .limit(limit);
}

//get all by technology
exports.getAllByDesignation = async function (req, res) {
  const technology = req.params.technology;

  // Pagination parameters
  const limit = req.query.limit ? parseInt(req.query.limit) : 10;
  const page = req.query.page ? parseInt(req.query.page) - 1 : 0;


  const totalPages = Math.ceil(await users.countDocuments({ technologies:{ $elemMatch: { item: technology}} }) / limit);

   posts.find({ technologies:{ $elemMatch: { item: technology}}}, (err, doc) => {
    const newPayload = {
      docs: doc,
      totalPages: totalPages
    }
    ResponseService.generalPayloadResponse(err, newPayload, res);
  })
    .sort({ name: -1 })
    .skip(page * limit)
    .limit(limit);
}

// search user by name
exports.searchAllByName = async function (req, res) {
  const limit = req.query.limit ? parseInt(req.query.limit) : 10;
  const page = req.query.page ? parseInt(req.query.page) : 0;

  const searchTerm = req.params.searchTerm;
  const result = posts.find({ name: { $regex: searchTerm, $options: 'i' } }, (err, doc) => {
    ResponseService.generalPayloadResponse(err, doc, res);
  })
    .sort({ name: -1 })
    .skip(page * limit)
    .limit(limit);
}

