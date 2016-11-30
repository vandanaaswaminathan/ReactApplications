import React, { Component } from 'react';
import Day from './Day';
import Loader from './Loader';
import Location from './Location';
import axios from 'axios';

/*@Desc:Class to get weather details and render them 
  @author: Vandanaa Swaminathan
*/
class Weather extends Component {
  constructor() {
    super();
    this.state = { weather: null };
    this.getWeather = this.getWeather.bind(this);
  }
/*@Desc:Function to get weather using forecast.io API
  @author: Vandanaa Swaminathan
*/
  getWeather(location) {
    var self = this;
    axios({
      url: 'https://crossorigin.me/https://api.forecast.io/forecast/53e011938a657dd4627f16be994b32e6/'+location[0]+','+location[1],
      method: 'get',
      responseType: 'json'
    })
    .then(function(r) {
      var d = r.data;
      var days = d.daily.data;
      self.setState({
        weather: {
          'current': d.currently.temperature,
          'summary': d.hourly.summary,
          'daily': [days[1], days[2], days[3], days[4], days[5]]
        }
      });
    })
    .catch(function(r){
      console.log(r);
    });
  }
/*@Desc:Function to get today's weather
  @author: Vandanaa Swaminathan
*/
  getTodayForecast() {
    if (this.state.weather !== null) {
      return <div className="weather-temp">{ Math.round(this.state.weather.current) + '˚' }</div>;
    } else {
      return <Loader />;
    }
  }
/*@Desc:Function to get weather forecast for the next 5 days
  @author: Vandanaa Swaminathan
*/
  get5DayForecast() {
    if (this.state.weather !== null) {
      var days = [];
      var dayData = this.state.weather.daily;
      for(var i = 0; i < dayData.length; i++) {
        days.push(<Day icon={dayData[i].icon} min={dayData[i].temperatureMin} max={dayData[i].temperatureMax} num={i} key={'day'+i}/>);
      }
      return <div className="weather-forecast">
        {days}
      </div>;
    } else {
      return;
    }
  }

  render() {
    return <div>
      { this.getTodayForecast() }
      { this.get5DayForecast() }
      <Location weather={this.getWeather} />
    </div>;
  }
}

export default Weather;
