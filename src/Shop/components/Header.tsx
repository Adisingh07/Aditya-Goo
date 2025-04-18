import React, { CSSProperties } from "react";
import { User } from "../";

interface Props {
  onSignIn: () => void;
  onSignOut: () => void;
  user: User | null
}

const isMobile = window.innerWidth <= 600;

const headerStyle: CSSProperties = {
  padding: '12px 20px',
  backgroundColor: '#4285f4',
  color: 'white',
  width: isMobile ? '92%' : '97.5%',
  margin: isMobile ? '0 auto' : '0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
};


const logoStyle: CSSProperties = {
  fontSize: '1.2rem',
  fontWeight: 'bold',
};

const buttonStyle: CSSProperties = {
  backgroundColor: 'white',
  color: '#4285f4',
  border: 'none',
  borderRadius: '4px',
  padding: '6px 12px',
  cursor: 'pointer',
  fontWeight: 'bold',
};


export default function Header(props: Props) {
  return (
    <header style={headerStyle}>
  <div style={logoStyle}>🔍 Aditya Goo</div>
  <div style={{ marginTop: 8 }}>
    {props.user === null ? (
      <button style={buttonStyle} onClick={props.onSignIn}>Sign in</button>
    ) : (
      <div>
        @{props.user.username}
        <button style={{ ...buttonStyle, marginLeft: 10 }} onClick={props.onSignOut}>Sign out</button>
      </div>
    )}
  </div>
</header>
  );
}
