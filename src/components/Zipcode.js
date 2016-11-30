import React, { Component } from 'react';
import axios from 'axios';

/*@Desc:Class to get geo location using google geocode API
  @author: Vandanaa Swaminathan
*/
class Zipcode extends Component {
  componentWillMount() {
    this.setState({ value: '' });
   // this.handleChange = this.handleChange.bind(this)
  }

 onBlur(event) {
    this.setState({ value: event.target.value });
      this.getLocationFromZip(event.target.value);
  }
  getLocationFromZip(zip) {
    var self = this;
    axios({
      url: 'https://maps.googleapis.com/maps/api/geocode/json?address='+zip+'&key=AIzaSyB3svjApZ3iQx9nRlRnpziNiU0siwca1TI',
      method: 'get',
      responseType: 'json'
    })
    .then(function(r) {
      self.props.onValueChange([r.data.results[0].geometry.location.lat, r.data.results[0].geometry.location.lng]);
      console.log('Location obtained - Lat:'+r.data.results[0].geometry.location.lat);
        console.log('Location obtained - lng:'+r.data.results[0].geometry.location.lng);
    })
    .catch(function(r){
      console.log(r);
    });
  }

  render() {
    return <div className="zip">
    <h3 className="headingTxt">After entering the location, Please click ouside the textbox to fetch results. Incase the Api is down the weather forecast is shown for London by default</h3>
      <input type="text"
             maxLength="40"
             onBlur={this.onBlur.bind(this)}
             placeholder="Enter the location"/>
                 
    </div>;
  }
}

export default Zipcode;
