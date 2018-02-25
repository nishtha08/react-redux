
const Initialstate ={
    hotels:[],
    prices:[],
    loadingPrice:false,
    loadingHotelList:false,
    errorFetching:false,
    productViewData:{},
    productDataLoaded:false,
    minPrice:[]
}

function rootReducer (state = Initialstate , action){
    switch(action.type){
        case "LOADING_HOTEL_LIST":
        return {...state,loadingHotelList:action.loading}
        case "FETCH_ERROR":
        return {...state,errorFetching:true}
        case "FETCH_HOTEL_LIST":
        return {...state}  
        case "HOTEL_LIST_SUCCESS":
        return {...state,hotels:[...action.data]}
        case "LOADING_PRICE":
        return {...state,loadingPrice:action.isloading}
        case "FETCH_PRICE_LIST":
        return {...state}
        case "PRICE_LIST_SUCCESS":
        return {...state,prices:[...action.priceData]}
        case "FETCH_PRODUCT_DETAIL":
        return {...state}
        case "PRODUCT_DATA_SUCCESS":
        return {...state,productViewData:{...action.productData}}
        case "UPDATE_MINPRICE":
        return {...state,minPrice:[...action.data]}
        default:
        return state 
    }
}


export default rootReducer;
