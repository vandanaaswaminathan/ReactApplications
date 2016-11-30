Weather Application
===================

A sample weather application built using react that displays 5 days wether forecast.

* Application is built using ReactJS
* Application uses forecast.io API
* Application also uses crossorigin.me to prevent any CORS proxy issues.
* Application uses Google geocoding API to locate address and convert address to Latitude and Longitude!
* Application uses several svg components to display the weather forecast
* Application is hosted on nodeJS as a public webserver
* Application uses Axios as a promise based http service

## Pre requisite

* Install NodeJS

## Installation

* Download / Clone the source code from the git repository
* Unzip the code
* Open the terminal and navigate to the application folder
* Start the node server using npm start
* Then navigate your browser to `http://localhost:3000` to see the app running in
your browser.

## Pitfalls &  Assumptions

* Since I have used crossorigin.me as CORS proxy , results might not be returned by forecast.io API if the crossorigin.me API is down.
* Forecast.io returns the temperature in Farenheint, The temperature displayed is also in Farenheit
* Weather forecast for London is displayed by default.



