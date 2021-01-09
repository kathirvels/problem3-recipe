import React from 'react';

function SearchForm(props) {
  return <div>
    <form>
      <div><label for="searchText">searchText</label><input type="text" name="searchText" id="searchText" value={props.searchText} onChange={props.searchHandler} /></div>
      <div><label for="cuisineType">cuisineType</label><input type="text" name="cuisineType" id="cuisineType" value={props.cuisineType} onChange={props.searchHandler} /></div>
      <div><label for="mealType">mealType</label><input type="text" name="mealType" id="mealType" value={props.mealType} onChange={props.searchHandler} /></div>
      <div><label for="dishType">dishType</label><input type="text" name="dishType" id="dishType" value={props.dishType} onChange={props.searchHandler} /></div>
      <div><label for="health">health</label><input type="text" name="health" id="health" value={props.health} onChange={props.searchHandler} /></div>
      <div><label for="calories">calories</label><input type="text" name="calories" id="calories" value={props.calories} onChange={props.searchHandler} /></div>
      <div><label for="time">time</label><input type="text" name="time" id="time" value={props.time} onChange={props.searchHandler} /></div>
      <div><label for="diet">diet</label><input type="text" name="diet" id="diet" value={props.diet} onChange={props.searchHandler} /></div>
    </form>
  </div>
}
export default SearchForm;
