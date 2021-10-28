import React from 'react'

const Search = ({handleSearchNote}) => {
    return (
        <div className = 'Search'>
            <input
                onChange = {( event ) =>
                    handleSearchNote(event.target.value)
                }
                type = 'text'
                placeholder = 'search....'
            />
        </div>
    )
}

export default Search
