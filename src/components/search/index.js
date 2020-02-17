import React, { useState } from 'react';
import AutoComplete from '../autocomplete';
import './search.css'

const Search = (props) => {
    const [userInput, setUserInput] = useState();
    const [suggestions, setSuggestions] = useState();

    const _getSuggestedItems = async (keyWord) => {
        //TODO call api to get suggested items
    }
    const onSearch = async () => {
        //TODO logic to handle search
    }
    const onChange = (value) => {
        setUserInput(value)
        _getSuggestedItems(value)
    }

    return (

        <div className="searchCon">
            <div className="headerCon">
                <span className="headerText">{'Search Books'}</span>
            </div>
            <div className="searchInnerCon">
                <div className="searchBox">
                    <div>
                        <AutoComplete value={userInput}
                            onChange={onChange}
                            suggestions={suggestions} />
                    </div>
                </div>
                <div className="searchButton">
                    <button onClick={onSearch} type="button">{'Search'}</button>
                </div>
            </div>
        </div>

    )
}

export default Search;