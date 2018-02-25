import React from 'react';
import { connect } from 'react-redux';
import { getProductData, fetchHotelNameList, fetchPriceList } from '../actions/action';
import images from '../utils/img2.jpg';

const ListLayout = (props) => {

    const productId = props.match.params.id;

    //check if product,details to be displayed and respective prices of it are there,else fetch data for both:
    (Object.keys(props.hotels).length === 0) ? props.fetchHotelNameList() : '';
    (Object.keys(props.product).length === 0) ? props.getProductData(productId) : '';
    (Object.keys(props.prices).length === 0) ? props.fetchPriceList() : '';

    const productName = props.hotels.filter((item, i) => { return item.id == productId });
    const productDetails = (Object.keys(props.product).length !== 0) ? props.product : '';
    const productPrice = props.prices.filter((item, i) => item.id == productId);

    return (
        <div className="container confix">
            <div className="row backfix">
                <div className="col-md-5">
                    <img src={images} alt={images} className="img2" />
                </div>
                <div className="col-md-7 pl0">
                    <div>
                        {((Object.keys(productName).length !== 0) && (Object.keys(productPrice).length !== 0)) ?
                            <AfterDataLoads namedetail={productName} pricedetail={productPrice} /> : ''}
                    </div>
                </div>
            </div>
            <hr />
            <div className="container">
                {(Object.keys(productDetails).length !== 0) ? <Details hotelDetail={productDetails} /> : ''}
            </div>
        </div>
    )
}

const AfterDataLoads = (props) => {
    const variations = props.pricedetail[0].price;
    return (<div className="col-md-12 pl0">

        <div className="fdisplay align">
            <ul id="detail">
                <li className="fs">
                    {props.namedetail[0].name}
                </li>
                <li>
                    {props.namedetail[0].locality}
                </li>
                <li>
                    {props.namedetail[0].city}
                </li>
            </ul>
        </div>
        <div className="fdisplay" >
            <div className="col-md-3 pl0">
                Prices:
                                {Object.keys(variations).map((item, i) => {
                    let val = (!variations[`${item}`]) ? 'SOLD OUT' : variations[`${item}`]
                    return <div key={i}>{item}:{val}</div>
                })}
            </div>
            <div className="col-md-7">

            </div>
        </div>
        <div className="fdisplay rfix">
            <div className=" row justify-content-end alitem">
                <button className="bookbtn plr">Book</button>
            </div>
        </div>
    </div>)
}

const Details = (props) => {
    return (
        <div className="container pl0">

            <div className="row">
                <div className="col-sm-6 pl0">
                    Policies : {props.hotelDetail.policies.map((item, i) => {
                        return <div key={i}>{item}</div>
                    })}

                </div>
                <div className="col-sm-6" >
                    Essentials : <ul id="ulist">
                        {props.hotelDetail.essentials.map((item, i) => {
                            return <li key={i}>{item}</li>
                        })}
                    </ul>

                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        product: state.productViewData,
        prices: state.prices,
        hotels: state.hotels,
        productDataLoaded: state.productDataLoaded,
        loadingPrice: state.loadingPrice
    }
}

//to invoke methods when data isn't there:
const mapDispatchToProps = dispatch => {
    return {
        getProductData: (id) => { dispatch(getProductData(id)) },
        fetchHotelNameList: () => { dispatch(fetchHotelNameList()) },
        fetchPriceList: () => { dispatch(fetchPriceList()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListLayout);

