import React, { CSSProperties } from "react";
import { Link } from "react-router-dom";

const isMobile = window.innerWidth <= 600;

const headerStyle: CSSProperties = {
  padding: '12px 20px',
  backgroundColor: '#4285f4',
  color: 'white',
  
  margin: isMobile ? '0 auto' : '0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
};

const logoStyle: CSSProperties = {
  fontSize: '1.2rem',
  fontWeight: 'bold',
  color: 'white',
  textDecoration: 'none',
};

export default function Header() {
  return (
    <header style={headerStyle}>
      <Link to="/" style={logoStyle}>🔍 Aditya Goo</Link>
    </header>
  );
}
