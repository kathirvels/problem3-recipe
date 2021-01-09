import React from 'react';
import axios from "axios";
import SearchForm from './SearchForm';
import SearchResult from './SearchResult';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      cuisineType: '',
      mealType: '',
      dishType: '',
      health: '',
      calories: '',
      time: '',
      diet: '',
      resultSet: [],
      error: '',
      disableSubmit: false,
      searchHistroy: []
    }
    this.textChanged = this.textChanged.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  textChanged(ev) {
    this.setState({ [ev.target.name]: ev.target.value });
  }

  submitForm = async () => {
    this.setState({
      disableSubmit: true
    });
    const subVal = {
      searchText: this.state.searchText,
      cuisineType: this.state.cuisineType,
      mealType: this.state.mealType,
      dishType: this.state.dishType,
      health: this.state.health,
      calories: this.state.calories,
      time: this.state.time,
      diet: this.state.diet
    };

    const YOUR_APP_ID = 'f2df590b';
    const YOUR_APP_KEY = '61a2f431076197f448a1f7e850837043';
    let queryParam = `cuisineType=${subVal.cuisineType}&mealType=${subVal.mealType}&dishType=${subVal.dishType}&health=${subVal.health}&calories=${subVal.calories}&time=${subVal.time}&diet=${subVal.diet}`;
    if (subVal.cuisineType === '' && subVal.dishType === '' && subVal.mealType === '') {
      queryParam = `health=${subVal.health}&calories=${subVal.calories}&time=${subVal.time}&diet=${subVal.diet}`;
    }

    await axios
      .get(`https://api.edamam.com/search?q=${subVal.searchText}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=10&${queryParam}`)
      .then(response => {
        console.log(response.data);
        this.setState({
          resultSet: response.data,
          error: '',
          disableSubmit: false,
          searchHistroy: [...this.state.searchHistroy, subVal]
        });
      })
      .catch(error => {
        if (error.response) {
          this.setState({
            error: error.response.data,
            resultSet: [],
            disableSubmit: false
          });
        } else if (error.request) {
          this.setState({
            error: error.request.data || 'Maximum request timeout (Usage limits are exceeded)',
            resultSet: [],
            disableSubmit: false
          });
        } else {
          this.setState({
            error: error.response.data,
            resultSet: [],
            disableSubmit: false
          });
        }
      });

  }
  render() {
    const errorMess = this.state.error !== '' ? <div className="error">{this.state.error}</div> : '';
    return <div>
      <h1>{this.props.title}</h1>
      <div className="searchForm">
        <SearchForm searchHandler={this.textChanged} value={[this.state]} ></SearchForm>
        <input type="button" value="Search" onClick={this.submitForm} disabled={this.state.disableSubmit} />
      </div>
      <div>{errorMess}</div>
      <SearchResult value={this.state}></SearchResult>
    </div>
  }

}
export default App;
