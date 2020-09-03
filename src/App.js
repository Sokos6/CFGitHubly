import React, { useEffect, useState } from 'react';
import './App.css';
import List from './components/List';
import WithListLoading from './components/WithListLoading';

function App() {
  const ListLoading = WithListLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `https://api.github.com/users/Sokos6/repos`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((repos) => {
        setAppState({ loading: false, repos: repos });
      });
  }, [setAppState]);
  return (
    <div className='App'>
      <div className='container'>
        <h1>My Repositories</h1>
      </div>
      <div className='repo-container'>
        <ListLoading isLoading={appState.loading} repos={appState.repos} />
        <footer>
          <div className='footer'>
            Built{' '}
            <span role='img' aria-label='love'>
              with 💚
            </span>{' '}
            by Will Sokolowski
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
