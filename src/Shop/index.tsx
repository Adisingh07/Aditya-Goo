import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from './components/Header';
import './SearchEngine.css';

const SearchPage: React.FC = () => {
  const [query, setQuery] = useState('');
  const history = useHistory();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      history.push(`/results?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <>
      <header className="header">
    <a href="/" className="logo">🔍 Aditya Goo</a>
  </header>
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
        <footer className="footer">
  <div className="footer-links">
    <div><a href="/terms" target="_blank" rel="noopener noreferrer">Terms</a>
    <a href="/contact" target="_blank" rel="noopener noreferrer">ContactUs</a>
    <a href="/privacy" target="_blank" rel="noopener noreferrer">PrivacyPolicy</a></div>
    <div><a href="/roadmap" target="_blank" rel="noopener noreferrer">Roadmap</a>
    <a href="/feedback" target="_blank" rel="noopener noreferrer">Feedback</a></div>
  </div>
 <p className="footer-text">© {new Date().getFullYear()} Aditya Goo. All rights reserved.</p>
</footer>
      </div>
      

    </>
  );
};

export default SearchPage;
