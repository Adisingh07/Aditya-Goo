import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from './components/Header';
import SignIn from './components/SignIn';
import './SearchEngine.css';
import axios from 'axios';





type AuthResult = {
  accessToken: string,
  user: {
    uid: string,
    username: string
  }
};
export type User = AuthResult['user'];


// Make TS accept the existence of our window.__ENV object - defined in index.html:
interface WindowWithEnv extends Window {
  __ENV?: {
    backendURL: string, // REACT_APP_BACKEND_URL environment variable
    sandbox: "true" | "false", // REACT_APP_SANDBOX_SDK environment variable - string, not boolean!
  }
}
const _window: WindowWithEnv = window;
const backendURL = _window.__ENV && _window.__ENV.backendURL;

const axiosClient = axios.create({ baseURL: `${backendURL}`, timeout: 20000, withCredentials: true});
const config = {headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'}};




  

  
  
  
  
  


  


const SearchPage: React.FC = () => {
  const [query, setQuery] = useState('');
  const [user, setUser] = useState<User | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const history = useHistory();
  
  const signIn = async () => {
    const scopes = ['username', 'payments'];
    const authResult: AuthResult = await window.Pi.authenticate(scopes);
    signInUser(authResult);
    setUser(authResult.user);
  }

  const signOut = () => {
    setUser(null);
    signOutUser();
  }

  const signInUser = (authResult: AuthResult) => {
    axiosClient.post('/user/signin', {authResult});
    return setShowModal(false);
  }

  const signOutUser = () => {
    return axiosClient.get('/user/signout');
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      history.push(`/results?q=${encodeURIComponent(query)}`);
    }
  };



  return (
    <>
      <Header user={user} onSignIn={signIn} onSignOut={signOut} />
      <div className="search-page">
        <div className="search-container">
          <h1>Aditya Goo</h1>
          <form onSubmit={handleSearch}>
            <div className="search-box">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search the web..."
                autoFocus
              />
              <button type="submit">Search</button>
            </div>
          </form>
        </div>
      </div>

      {showModal && <SignIn onSignIn={signIn} onModalClose={() => setShowModal(false)} />}
    </>
  );
};

export default SearchPage;
