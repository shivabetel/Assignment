import React from 'react';
import Card from '../card';
import './search-result.css';

/**
 * component to show the search results
 */

const SearchResults = props => {
    const { searchResults = [] } = props
    return (
        <div data-testid="results" className="resultCon">
            {
              searchResults.length >0 ? searchResults.map(result => <Card key={result['id']} author={result['author']}
                                                   title={result['title']}
                                                   summary={result['summary']}/>) : 'No Books Selected'
            }
        </div>
    )
}

export default SearchResults;