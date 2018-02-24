import * as Api from './apicalls';
import axios from 'axios';

//export const loadInProgress = 

export const loadInProgress=(bool)=> {
    return {
        type: 'LOADING_HOTEL_LIST',
        bool
    };
  }

export const FetchError=(bool)=>{
    return{
        type:'FETCH_ERROR',
        bool
    }
}
  export const hotelListFetched=(data)=>{
    return{
        type:'HOTEL_LIST_SUCCESS',
        data
    }
  }

  export const fetchPriceList =()=>{
      return{
          type:'FETCH_PRICE_LIST'
      }
  }

  export const priceListFetched=({priceData})=>{
      return{
          type:'PRICE_LIST_SUCCESS',
          priceData
      }
  }
  export const fetchHotelNameList=()=>{
    return{
        type:'FETCH_HOTEL_LIST'
    }
  }

  export const getProductData=()=>{
      return{
          type:'FETCH_PRODUCT_DETAIL'
      }
  }

  export const productDataSuccess=({productData})=>{
      return{
          type:'PRODUCT_DATA_SUCCESS',
          productData
      }
  }

// export function fetchListData() {
// //     return (dispatch) => {
// //         debugger
// //         axios.get("http://www.mocky.io/v2/5a7f24f02e00005200b568").
// //         then((response) => { dispatch({type:"HOTEL_LIST_SUCCESS",payload:response.data }) 
// //         })
// //         .catch((err)=>{dispatch({type:"FETCH_ERROR",payload:err})})
// //   }
//     return{
//         type:"FETCH_HOTEL_LIST"
//     }
// }
