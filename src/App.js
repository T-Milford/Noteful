import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';
import './App.css';
import DisplayFolders from './DisplayFolders'
import DisplayNotes from './DisplayNotes'

class App extends Component {
  
  render() {
      return (
        <main className="App">
          <header>
            <Link to='/'>Noteful</Link>
          </header>
          
          <div className='sidebar'>
            <Route 
              exact path='/'
              component={DisplayFolders} 
            />
            <Route
              path='/folders/:folderId'
              // component={DisplayOneFolder}
            />
          </div>
                          
          <section className='home'>
              <Route
                exact path='/'
                component={DisplayNotes}
              />
              <Route
                exact path='/notes/:noteId'
                // component={Note}
              />
          </section>

        </main>
    );
  }
}

export default App;
