import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { fetchHotelNameList, fetchPriceList, getProductData,updateMinPrice } from '../actions/action';
import { connect } from 'react-redux';
 import image1 from '../utils/img1.jpg';
// import {image2} from '../../public/assets/img2.jpg';
// import {image3} from './../utils/img3.jpg';
import AppData from './Images';


const Images = ['../utils/img1.jpg', '../utils/img2.jpg', '../utils/img3.jpg', '../utils/img4.jpg', '../utils/img5.jpg'];

class ListView extends Component {
    constructor(props) {
        super(props);
        this.state = this.props;
        //console.log(image2);
    }

    componentDidMount() {
        //fetch hotels List 
        if (Object.keys(this.props.hotelList).length === 0) {
            this.props.fetchHotelList();
        }
        this.props.fetchPriceList();
    }

    render() {
        //updated hotels and prices from the store: 
        const { hotelList, priceList } = this.props;


        return (
            <div className="main">
                <div className="container">
                    <div className="row" >
                        <div className="col-md-4">
                            <div className="item_container hr">
                                Filters    
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="row">
                                <div className="col-md-10">
                                    {hotelList.map((item, i) => {
                                        return (
                                            <div className="item_container row flr" key={item.id}>
                                                <div className="col-md-5 image_tile p10" >
                                                    <ImageTile id={item.id} />
                                                </div>
                                                <div className="col-md-4 fcol p10">
                                                    <div className="item_names fcol fl">
                                                        {item.name}
                                                    </div>
                                                    <div className="item_places fcol">
                                                        {item.city}
                                                    </div>
                                                </div>
                                                <div className="col-md-3 jc fcol">
                                                    <Price mouse={priceList} val={item.id} access={this.props}/>

                                                    <Button id={item.id} access={this.props}>Book</Button>

                                                </div>
                                            </div>)
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>)
    }
}


    const Price = ({ mouse, val ,access}) => {
    let minPrice = '';

    //check if Price has received the object after the api's response:
    if (Object.keys(mouse).length !== 0) {

        //free the price obj of nulls and find the minimum to display: 
        const obj = mouse.filter((item, i) => item.id === val);
        const objsansNull = (Object.values(obj[0].price)).filter(e => e);

        if (Object.keys(objsansNull).length !== 0) {
            minPrice = Math.min.apply(Math, objsansNull)
        }
        else {
            minPrice = "SOLD OUT"
        }
    }
    //access.updateMinPrice(minPrice);
    return <div className="price">
                {(minPrice !== 'SOLD OUT') ? '₹'+minPrice : 'SOLD OUT'}
            </div>
}

//since browser history wasn't working with react-router:
const Button = withRouter(({ history, id, access }) => {
 
    return (<button className="bookbtn"
        type='button'
        onClick={() => {
            //fetch product data before routing;
            access.getProductData(id);
            history.push(`/search/${id}`)
        }}>
        Book
        </button>)
})

const ImageTile = ({ id }) => {

    let tileImage = Images.filter((item, i) => i === id)
    //let identity = tileImage[0].id;
    return <img src={image1} className="img1"/>
}


const mapStateToProps = state => {
    return {
        hotelList: state.hotels,
        priceList: state.prices,
        minPrice :state.minPrice
    }
}

const mapDispatchToProps = dispatch => {
    return {

        fetchHotelList: () => { dispatch(fetchHotelNameList()) },
        fetchPriceList: () => { dispatch(fetchPriceList()) },
        getProductData: (id) => { dispatch(getProductData(id)) },
        updateMinPrice: (data)=>{dispatch(updateMinPrice(data))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListView);