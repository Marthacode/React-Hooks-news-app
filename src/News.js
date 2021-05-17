import React from 'react'

const News =({title, author, date, description, link, photo})=>{
    return(
        <div className="row news">
            <div className="col-md-6">
            <h3>{title}</h3>
            <h6>Source: {author}</h6>
            <h6>Publication Date: {date}</h6>
            <p>{description} <a href={link}>Read Content</a></p>
            </div>
            <div className="col-md-6">
            <img className="img-fluid justify-content-center" src={photo} alt="..."  width="600px"/>
            
            </div>
           
        </div>
    )
}
export default News;