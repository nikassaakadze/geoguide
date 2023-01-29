const express = require("express");
const router = express.Router();
const {
  getPlaceById, 
  addPlace, 
  getAllPlaces, 
  getSides, 
  getHotels,
  getHotelById,
  searchPlace,
  createBookmark,
  getBookmarks,
  removeBookmark
} = require("../controllers/dataController");

router.post("/addPlace", addPlace);
router.patch("/createBookmark", createBookmark);
router.patch("/removeBookmark", removeBookmark);
router.get("/getItems", getAllPlaces);
router.get("/getBookmarks", getBookmarks);
router.get("/getSides", getSides);
router.get("/getHotels", getHotels);
router.get("/getPlace/:id", getPlaceById);
router.get("/getHotel/:id", getHotelById);
router.get("/searchPlace/:keyword", searchPlace);

module.exports = router;
