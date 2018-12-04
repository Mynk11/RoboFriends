import React from 'react';

const Searchbox = ({ searchChange, searchField }) => {
    return (<div className="pa2" >
        <input className="bg-light-blue ba b--light-green pa3"
            type="search"
            placeholder="search robots"
            onChange={searchChange}>
        </input>
    </div>);
}

export default Searchbox;