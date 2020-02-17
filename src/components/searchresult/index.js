import React from 'react';
import Card from '../card';
import './search-result.css';

/**
 * component to show the search results
 */

const SearchResults = props => {
    const { searchResults = [] } = props

    return (
        <div className="resultCon">
            {
                searchResults.map(result => <Card author={result['author']}
                                                   title={result['title']}
                                                   summary={result['summary']}/>)
            }
        </div>
    )
}

export default SearchResults;