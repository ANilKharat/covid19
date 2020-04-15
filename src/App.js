import React from 'react';
import Cards from './components/Cards/Cards';
import Chart from './components/Charts/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';
import  './App.css'
import { fetchData } from './api'

import coronaImage from './images/image.png'

class App extends React.Component {
  state = {
    data: [],
    country: ''
  }

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData })
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);

    this.setState({ data: fetchedData, country: country })  

    console.log(fetchedData)
    console.log(country)
  }

  render() {
    const { data, country } = this.state
    return (
      <div className="container">
        <img className="image" src={coronaImage} alt="COVID-19" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
