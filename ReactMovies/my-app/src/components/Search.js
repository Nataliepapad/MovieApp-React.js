import React from "react";

const SearchBox = (props) =>{
    return (
        <div className="searchBox">
            <input className="form-control"
            type="text"
            value={props.value} 
                   onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                        props.setSearchMovie(e.target.value)
                    }}}
                   placeholder="Search movie title...">                
            </input>
        </div>
    );
};

export default SearchBox;