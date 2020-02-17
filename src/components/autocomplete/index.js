import React, { useState } from 'react';
import './autocomplete.css'

const AutoComplete = props => {

    const [showSuggestions, setShowSuggestions] = useState(false)
    const { value, onChange = () => { }, suggestions = [], onSuggestionSelection= () => {} } = props

    const onInputChange = (e) => {
       setShowSuggestions(true);
       onChange(e.target.value);
    }



    const _getSuggestedItems = () => {
        return <div className="suggestionCon">
            {
                suggestions.map(suggestion => <div onClick={() => onSuggestionSelection(suggestion)} className="listItem">
                    <span>{suggestion['title']}</span>
                </div>)
            }
        </div>
    }

    return (
        <div className="autoCompleteInputCon">
            <input type="text"
                value={value}
                onChange={onInputChange} />
            {
                showSuggestions && _getSuggestedItems()
            }
        </div>
    )
}


export default AutoComplete