
import { put,select,takeEvery} from 'redux-saga/effects';


export function* fetchData(action) {
    try {
        //sets the loadingHotelList to true
        yield put({type: "LOADING_HOTEL_LIST",loading:false});

        const user = yield select(state => state.hotels);
    
        if(Object.keys(user).length === 0){
            const data = yield fetch('http://www.mocky.io/v2/5a7f23442e00005000b56873').then(response => response.json()).then(res=>res.data);
        
            yield put({type: "HOTEL_LIST_SUCCESS", data});

            yield put({type: "LOADING_HOTEL_LIST",loading:true});
        }
    
        } catch (error) {
        }
 }

 export function* fetchPriceData(action) {
    try {
        //sets the loadingPrice to true
       
        const priceData = yield fetch('http://www.mocky.io/v2/5a7f24f02e00005200b56875').then(response => response.json()).then(res=>res.data);
        
        yield put({type: "PRICE_LIST_SUCCESS", priceData});
        
        //yield put({type: "LOADING_PRICE",isloading:false});
       
    } catch (error) {
    }
 }

 export function* fetchProductData(action) {
    try {
        //sets the loadingProductlist to true
        yield put({type:"LOADING_PRODUCT",loading:true})
        const productData = yield fetch('http://www.mocky.io/v2/5a7f265b2e00005d00b56877').then(response => response.json()).then(res=>res.data);
        yield put({type:"PRODUCT_DATA_SUCCESS",productData});
        yield put({type:"LOADING_PRODUCT",loading:false})
    } catch (error) {
    }
 }

 export default function* watchFetchData() {
     yield takeEvery('FETCH_HOTEL_LIST', fetchData)
     yield takeEvery('FETCH_PRICE_LIST',fetchPriceData)
     yield takeEvery('FETCH_PRODUCT_DETAIL', fetchProductData)
  }