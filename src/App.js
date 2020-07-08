import React, { useEffect } from 'react';
import './App.css';
import SearchMovies from './components/searchMovies';
import ReactGA from 'react-ga';

function App() {
    useEffect(() => {
      ReactGA.initialize('UA-172022121-1');
      ReactGA.pageview(window.location.pathname);
    }, []);

    return (
        <div className="App">
            <div className="container">
                <h1 className="title">REACT MOVIE SEARCH</h1>
                <SearchMovies />
            </div>
        </div>
    );
}

export default App;