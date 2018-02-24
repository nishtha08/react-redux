import React, { Component ,Fragment} from 'react';
import { history } from 'react-router';
import { withRouter } from 'react-router-dom'
import {loadInProgress,fetchHotelNameList,fetchPriceList,getProductData} from '../actions/act';
import { connect } from 'react-redux';
import images from '../utils/img1.jpg';

class ListView extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        //fetch hotel List along with the price list :p
        this.props.fetchHotelList();
    }

    render(){
        //updated hotels and prices from the store: 
        const {hotelList,priceList,loadingPriceList} = this.props;
        const image = './../utils/';
        
        return(
            <div className="main">
             <div className="container">   
                 <div className="row" >
                        <div className="col-md-2">
                            {/* <div>Filters Area</div> */}
                        </div>
                        <div className="col-md-8">
                            <div className="row">
                                <div className="col-md-10">
                                {hotelList.map((item,i)=>{
                                    return (
                                    <div className="item_container row flr" key={item.id}>
                                         <div className="col-md-5 image_tile">
                                            <img src={images} alt=""/>
                                         </div>
                                         <div className="col-md-4 fcol">
                                            <div className="item_names fcol">
                                                {item.name}
                                            </div>
                                            <div className="item_places fcol">
                                                    {item.city}
                                            </div>     
                                         </div>
                                         <div className="col-md-3 jc fcol">
                                                <div ><Price mouse={priceList} val={item.id} /></div>
                                                <div><Button id={item.id} access={this.props}>Book</Button> </div>     
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


const Price=({mouse,val,loadingPriceList})=> {
      let minPrice ='';

      //check if child has received the object after the api's response:
      if(Object.keys(mouse).length!==0){

        //free the price obj of nulls and find the minimum to display: 
        const obj = mouse.filter((item,i)=> item.id===val);
        const objsansNull = (Object.values(obj[0].price)).filter(e=>e);

        if(Object.keys(objsansNull).length!==0){
            minPrice =  Math.min.apply(Math,objsansNull)
        }
        else{
            minPrice = "SOLD OUT"
        } 
      }
      return ((loadingPriceList===true)? <div>{"hello"}</div>:<div>{(minPrice!=='')? minPrice:''}</div>)
}

//since browser history wasn't working with react-router:
const Button = withRouter(({ history,id,access}) => (
  <button className="bookbtn"
    type='button'
    onClick={() => { 
        //now this is a hack need to find a better way,access = this.props:
        access.getProductData(id);
        history.push('/search/`${id}`') }}>
    Click Me!
  </button>
))

const mapStateToProps = state =>{
    return {
        hotelList : state.hotels,
        priceList :state.prices
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        loadingInProgress :()=>{ dispatch(loadInProgress())},
        fetchHotelList :()=>{dispatch(fetchHotelNameList())},
        fetchPriceList :()=>{dispatch(fetchPriceList())},
        getProductData :(id)=>{dispatch(getProductData(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ListView);