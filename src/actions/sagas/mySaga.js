import { delay } from 'redux-saga';
import { put, select,takeEvery,takeLatest } from 'redux-saga/effects';
import { call} from 'redux-saga/effects';
import Loading from '../act';

export function* fetchData(action) {
    try {
        //sets the loadingHotelList to true
        yield put({type: "LOADING_HOTEL_LIST",isloading:true})

        yield put({type: "LOADING_PRICE_LIST",isloading:true})

        //get the value of hotels from the state:
        const user = yield select(state => state.hotels)

        if(Object.keys(user).length === 0){
            const data = yield fetch('http://www.mocky.io/v2/5a7f23442e00005000b56873').then(response => response.json()).then(res=>res.data);
        
            yield put({type: "HOTEL_LIST_SUCCESS", data})

            yield put({type: "LOADING_HOTEL_LIST",isloading:false})
        }
    
        const priceData = yield fetch('http://www.mocky.io/v2/5a7f24f02e00005200b56875').then(response => response.json()).then(res=>res.data);
        
        yield put({type: "PRICE_LIST_SUCCESS", priceData})

        yield call(delay, 5000)

        yield put({type: "LOADING_PRICE_LIST",isloading:false})

        } catch (error) {
        // yield put({type: "DATA_ERRORED", error})
        }
 }

 export function* fetchProductData(action,id) {
    try {
        //sets the loadingProductlist to true
       
        const productData = yield fetch('http://www.mocky.io/v2/5a7f265b2e00005d00b56877').then(response => response.json()).then(res=>res.data);
        yield put({type:"PRODUCT_DATA_SUCCESS",productData});
       

    } catch (error) {
      // yield put({type: "DATA_ERRORED", error})
    }
 }

 export default function* watchFetchData() {
     console.log("Hello Sagas");
     yield takeEvery('FETCH_HOTEL_LIST', fetchData)
     yield takeLatest('FETCH_PRODUCT_DETAIL', fetchProductData)
  }