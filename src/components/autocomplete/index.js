import React, { useState } from 'react';
import './autocomplete.css'
/*
  AutoComplete component
*/
const AutoComplete = props => {

    const [showSuggestions, setShowSuggestions] = useState(false)
    const { value, onChange = () => { }, suggestions = [], onSuggestionSelection = () => { } , required=false, errorText} = props


    const onInputChange = (value) => {
        setShowSuggestions(true);
        onChange(value);
    }

    //event handler to handle selected suggestion items
    const handleSuggestionSelection = (suggestion) => {
        onSuggestionSelection(suggestion)//onSuggestionSelection is the parent event passed as prop
        setShowSuggestions(false)

    }


    //function which return suggested component
    const _getSuggestedItems = () => {
        return <div data-testid="suggestions" className="suggestionCon">
            {
                suggestions.map(suggestion => <div onClick={() => handleSuggestionSelection(suggestion)} className="listItem">
                    <span>{suggestion['title']}</span>
                </div>)
            }
        </div>
    }
    return (
        <div data-testid="autocomplete" className="autoCompleteInputCon">
            <input type="text"
                className={errorText ? 'error': ""}
                data-testid="autocomplete-input"
                required={required}
                value={value}
                onChange={e => onInputChange(e.target.value)} />
            {   
                showSuggestions && _getSuggestedItems()
            }
        </div>
    )
}


export default AutoComplete