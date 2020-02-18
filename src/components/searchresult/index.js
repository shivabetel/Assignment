import React from 'react';
import Card from '../card';
import './search-result.css';

/**
 * component to show the search results
 */

const SearchResults = props => {
    const { searchResults = [] } = props
console.log("searchResults",searchResults)
    return (
        <div data-testid="results" className="resultCon">
            {
                searchResults.map(result => <Card key={result['id']} author={result['author']}
                                                   title={result['title']}
                                                   summary={result['summary']}/>)
            }
        </div>
    )
}

export default SearchResults;