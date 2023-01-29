const Side = require("../models/sideModel")
const Place = require("../models/placeModel")
const Hotel = require("../models/hotelModel")
const Bookmarks = require('../models/saveModel')

const getAllPlaces = async (req, res) => {
  try {
    const places = await Place.find({});
    res.json(places);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

const getSides = async (req, res) => {
  try {
    const sides = await Side.find({});
    res.json(sides);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

const getHotels = async (req, res) => {
  try {
    const sides = await Hotel.find({});
    res.json(sides);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

const addPlace = async (req, res) => {
  place = req.body.place,
  side = req.body.side,
  description = req.body.description,
  longitude = req.body.longitude,
  latitude = req.body.latitude,
  images = req.body.images,
  hotel = req.body.hotel,
  location = req.body.location
    const newPlace = new Place({location, hotel, images, place, side, description, longitude, latitude})
    await newPlace.save()
    .then(() => res.json(`palce - ${place} added`))
    .catch(err => console.log(err))
}

const createBookmark = async (req, res) => {
    await Place.updateOne(
      { _id: req.body.bookmark },
      { $set: {marked: true} }
    )
    .then(() => console.log(`changed`))
    .catch(err => console.log(err))
}

const getBookmarks = async (req, res) => {
  try {

    const bookmarks = await Place.find({marked: true});
    res.json(bookmarks);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

const removeBookmark = async (req, res) => {
    await Place.updateOne(
      { _id: req.body.id },
      { $set: {marked: false} }
    )
    .then(() => console.log(`changed`))
    .catch(err => console.log(err))
}

const addSide = async (req, res) => {
  side = req.body.side,
  description = req.body.description,
  longitude = req.body.longitude,
  latitude = req.body.latitude,
  images = req.body.images
    const newSide = new Side({images, side, description, longitude, latitude})
      await newSide.save()
      .then(() => res.json(`palce - ${side} added`))
      .catch(err => console.log(err))
}

const addHotel = async (req, res) => {
  name = req.body.name,
  description = req.body.description,
  location = req.body.location,
  images = req.body.images
    const newHotel = new Hotel({images, name, description, location})
      await newHotel.save()
      .then(() => res.json(`palce - ${name} added`))
      .catch(err => console.log(err))
}

const getPlaceById = async (req, res) => {
  try{
    const place = await Place.findById(req.params.id)
    res.json(place)
  }catch(error){
    res.status(500).json({ message: "Server Error" });
  }
}

const getHotelById = async (req, res) => {
  try{
    const hotel = await Hotel.findById(req.params.id)
    res.json(hotel)
  }catch(error){
    res.status(500).json({ message: "Server Error" });
  }
}

const searchPlace = async (req, res) => {
  try{
    var items = []
    const place = await Place.find({})
    await place.map(item => item.place.replace(/ /g, '').includes(req.params.keyword) ? items.push(item) : "")
    res.json(items)
  }catch(error){
    res.status(500).json({ message: "Server Error" });
  }
}


module.exports = {
  addPlace, 
  getAllPlaces, 
  addSide, 
  getSides, 
  addHotel, 
  getHotels, 
  getPlaceById,
  getHotelById,
  searchPlace,
  createBookmark,
  getBookmarks,
  removeBookmark
}