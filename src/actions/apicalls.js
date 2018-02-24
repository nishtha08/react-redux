import axios from 'axios';

//api calls for fetching data:

const src = "http://www.mocky.io/v2/5a7f24f02e00005200b568";

export const getHotelList = () =>
axios.get(`${src}73`).then(function (response) { return response.data; }) 

export const getHotelPriceList = (id) =>
axios.get(`${src}75`).then(function (response) { return response; })

export const getHotelDetailById = (id) =>
axios.get(`${src}77`).then(function (response) { return response; })