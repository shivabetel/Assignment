import React, { useState, useEffect } from 'react';
import AutoComplete from '../autocomplete';
import { getSuggestions } from '../../sources/search'
import { debounce } from 'lodash'
import './search.css'

const DEBOUNCE_TIME = 500
let debounceEvent = null;
const Search = (props) => {
    const [userInput, setUserInput] = useState({
        title: '',
        id: ''
    });
    const [ error,setError ] = useState(false)
    const [suggestions, setSuggestions] = useState();


    useEffect(() => {
        //debounceing the network api call which fetches all the suggestions
        debounceEvent = debounce( async (keyWord) => {            
            //calling api to get the suggestions
            const suggestionsRes = await getSuggestions({
                keyWord
            });
            setSuggestions(suggestionsRes ? suggestionsRes['suggestions'] : []);
        }, DEBOUNCE_TIME)
    }, [])


    const onSuggestionSelection = (suggestedItem) => {
        setUserInput({
            ...suggestedItem
        })
    }

    const validate = () => {
        if(userInput['title'] == ''){
            setError("Required")
            return false
        }
        return true;
    }

    //onClick event handler for submit button
    const onSearch = async () => {
        if(!validate()){
            return
        }
        const { search } = props;
        search({
            id: userInput['id']
        })
        setUserInput({
            title: '',
            id: ''
        });
        setSuggestions([]);
        
    }
    //onChange event handler passing as prop to autocomplete
    const onChange = (value) => {
        setUserInput(value)
        setError('')
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
                        <AutoComplete value={userInput['title']}
                            onChange={onChange}
                            suggestions={suggestions} 
                            required={Boolean(error)}
                            errorText={error}
                            onSuggestionSelection={onSuggestionSelection}/>
                    </div>
                </div>
                <div className="searchButton">
                    <button data-testid="search-button" onClick={onSearch} type="button">{'Submit'}</button>
                </div>
            </div>
        </div>

    )
}

export default Search;