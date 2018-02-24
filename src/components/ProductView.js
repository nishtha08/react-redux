import React from 'react';
import { connect } from 'react-redux';
import {getProductData,fetchData,fetchHotelNameList} from '../actions/act';
import images from '../utils/img1.jpg';

const ListLayout = ({product,prices,getProductData,fetchHotelNameList})=>{
    
    (Object.keys(product).length===0) ? getProductData() :'';
    (Object.keys(prices).length===0) ? fetchHotelNameList():'';

    return(
        <div className="container">   
                 <div className="row flr" >
                        <div className="col-md-5 fcol">
                            {'hey'}
                        </div>
                        <div className="col-md-7 ">
                            <div>
                                {'you can'}
                            </div>
                            <div >
                                {'do it'}
                            </div>
                            <div>
                                {'trust me'}
                            </div>
                        </div>
                    </div>
        </div>    
        
    )
}

const mapStateToProps = state =>{
    return {
        product : state.productViewData,
        prices :state.prices
    }
}

//to invoke methods when data isn't there:
const mapDispatchToProps = dispatch =>{
    return {
        getProductData :()=>{dispatch(getProductData())},
        fetchHotelNameList :()=>{dispatch(fetchHotelNameList())}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ListLayout);

