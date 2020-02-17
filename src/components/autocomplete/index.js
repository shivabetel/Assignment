import React, { useState, useEffect } from 'react';
import './autocomplete.css'

const AutoComplete = props => {

    const [showSuggestions, setShowSuggestions] = useState(false)
    const { value, onChange = () => { }, suggestions = [], onSuggestionSelection= () => {} } = props


    const onInputChange = (value) => {
       setShowSuggestions(true);
       onChange(value);
    }

    const handleSuggestionSelection = (suggestion) => {
        onSuggestionSelection(suggestion)
        setShowSuggestions(false)
        
    }


    const _getSuggestedItems = () => {
        return <div className="suggestionCon">
            {
                suggestions.map(suggestion => <div onClick={() => handleSuggestionSelection(suggestion)} className="listItem">
                    <span>{suggestion['title']}</span>
                </div>)
            }
        </div>
    }

    return (
        <div className="autoCompleteInputCon">
            <input type="text"
                value={value}
                onChange={e => onInputChange(e.target.value)} />
            {
                showSuggestions && _getSuggestedItems()
            }
        </div>
    )
}


export default AutoComplete