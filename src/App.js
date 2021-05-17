import React, { useEffect, useState } from 'react'
import News from './News'
import './App.css'

const App=()=>{

  const [news, setNews] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('top-headlines?country=ng')

    useEffect( () =>{
        getNews()
    }, [query]);

    const getNews = async ()=>{
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=ng&apiKey=YOUR-API-KEY`)
        const data = await response.json()
        console.log(data.articles)
        setNews(data.articles) 
    }
    const updateSearch = e =>{
      setSearch(e.target.value)
    }
    const getSearch =e =>{
      e.preventDefault()
      setQuery(search)
    }

    return(
        <div className="App">

          <nav className="navbar navbar-light bg-dark fixed-top justify-content-between">
          <a className="navbar-brand text-light" href="latest news">Latest News</a>
          <form className="form-inline" onSubmit={getSearch}>
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={updateSearch} />
          <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
          </form>
          </nav>

            {news.map(news =>(
              <News
              key={news.title}
              title={news.title}
              author={news.source.name}
              date={news.publishedAt}
              description={news.description}
              link={news.url}
              photo={news.urlToImage}
             
               />
            ))}
        </div>
    )
}
export default App;


