import React from 'react';

// Components
import Content from './components/content/Content';
import Header from './components/header/Header';

// Styling
import './App.scss';

function App() {
    return (<div className="App">
            <Header/>
            <Content/>
        </div>);
}

export default App;
