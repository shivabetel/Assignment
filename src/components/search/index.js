import React, { useState, useEffect } from 'react';
import AutoComplete from '../autocomplete';
import { getSuggestions } from '../../sources/search'
import { debounce } from 'lodash'
import './search.css'

const DEBOUNCE_TIME = 500
let debounceEvent = null;
const Search = (props) => {
    const [userInput, setUserInput] = useState();
    const [suggestions, setSuggestions] = useState();

    useEffect(() => {
        debounceEvent = debounce( async (keyWord) => {
            const suggestionsRes = await getSuggestions({
                keyWord
            });
            setSuggestions(suggestionsRes ? suggestionsRes['suggestions'] : []);
        }, DEBOUNCE_TIME)
    }, [])


    const onSuggestionSelection = (suggestedItem) => {
        setUserInput(suggestedItem['title'])
    }

    const onSearch = async () => {
        //TODO logic to handle search
    }
    const onChange = (value) => {
        setUserInput(value)
        debounceEvent(value)
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
                            suggestions={suggestions} 
                            onSuggestionSelection={onSuggestionSelection}/>
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