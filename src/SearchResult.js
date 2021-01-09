import React from 'react';

function SearchResult(props) {
    let listRecipe = '';
    let searchBy = '';
    let searchHistory = '';
    if (props.value.resultSet.hits !== undefined) {
        const listjsx = props.value.resultSet.hits.map(element => { return element });
        const searchHistoryData = props.value.searchHistroy.map(element => {
            return <li>{Object.keys(element).map((key) => (
                <span>{element[`${key}`] !== '' ? <span><b>{key}:</b><span>{element[`${key}`]}</span>; </span> : ''}</span>))}</li>
        });
        listRecipe = listjsx.map(element => {
            return <li>{element.recipe.label}, <b>Calories:</b> {element.recipe.calories}, <b>Health:</b> {element.recipe.healthLabels.map(t => <span>{t}</span>).reduce((prev, curr) => [prev, ', ', curr])}, <b>Diet:</b> {element.recipe.dietLabels.map(t => <span>{t}</span>).reduce((prev, curr) => [prev, ', ', curr])}</li>
        });
        searchBy = (<div className="searchBy">
            <b>Search By:</b>
            {Object.keys(props.value).map((key) => (
                <span>{props.value[`${key}`] !== '' && key !== 'resultSet' && key !== 'error' && key !== 'searchHistroy' ? <span><b>{key}:</b><span>{props.value[`${key}`]}</span>; </span> : ''}</span>
            ))}
        </div>);
        searchHistory = (<div className="searchHistory">
            <b>Search History:</b>
            <ul>{searchHistoryData}</ul>
        </div>);
    }

    return <div className="searchResult">
        <div>{searchBy}</div>
        <div>{searchHistory}</div>
        <ul>{listRecipe}</ul>
    </div>
}
SearchResult.defaulValue = { count: 0 }
export default SearchResult;
