import React from 'react'

const Navbar =()=>{
    return(
        <div>
                    <form onSubmit={getSearch} className="search-form">
                <input className="search-input" type="text" value={search} onChange={updateSearch} />
                <button className="search-btn" type="submit">Serch</button>
            </form>
        </div>
    )
}
export default Navbar;