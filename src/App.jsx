import React from 'react';
import './App.scss';
import './styles/general.scss';
import { PostsList } from './components/PostsList';
import { PostDetails } from './components/PostDetails';

const App = () => (
  <div className="App">
    <header className="App__header">
      <label>
        Select a user: &nbsp;

        <select className="App__user-selector">
          <option value="0">All users</option>
          <option value="1">Leanne Graham</option>
        </select>
      </label>
    </header>

    <main className="App__main">
      <div className="App__sidebar">
        <PostsList />
      </div>

      <div className="App__content">
        <PostDetails />
      </div>
    </main>
  </div>
);

export default App;
