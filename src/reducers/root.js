const Initialstate ={
    hotels:[],
    prices:[],
    loadingHotelList:false,
    loadingPriceList:false,
    errorFetching:false,
    productViewData:{}
}

function RootReducer (state = Initialstate , action){
    switch(action.type){
        case "LOADING_HOTEL_LIST":
        return {...state,loadingHotelList:action.isloading}
        case "FETCH_ERROR":
        return {...state,errorFetching:true}
        case "FETCH_HOTEL_LIST":
        return {...state}  
        case "HOTEL_LIST_SUCCESS":
        return {...state,hotels:[...action.data]}
        case "LOADING_PRICE_LIST":
        return {...state,loadingPriceList:action.isLoading}
        case "FETCH_PRICE_LIST":
        return {...state}
        case "PRICE_LIST_SUCCESS":
        return {...state,prices:[...action.priceData]}
        case "FETCH_PRODUCT_DETAIL":
        return {...state}
        case "PRODUCT_DATA_SUCCESS":
        return {...state,productViewData:{...action.productData}}
        default:
        return state 
    }
}

export default RootReducer