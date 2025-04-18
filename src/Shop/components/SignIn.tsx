import React, { CSSProperties } from 'react';

interface Props {
  onSignIn: () => void,
  onModalClose: () => void,
}

const modalStyle: CSSProperties = {
  background: 'white',
  position: 'fixed',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  maxWidth: '400px',
  height: '200px',
  borderRadius: '8px',
  border: '1px solid #ccc',
  textAlign: 'center',
  boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '20px',
  zIndex: 1000,
};

const buttonStyle: CSSProperties = {
  padding: '8px 16px',
  margin: '0 8px',
  borderRadius: '4px',
  border: 'none',
  cursor: 'pointer',
  fontWeight: 'bold',
};

const primaryBtn: CSSProperties = {
  ...buttonStyle,
  backgroundColor: '#4285f4',
  color: 'white',
};

const secondaryBtn: CSSProperties = {
  ...buttonStyle,
  backgroundColor: '#f1f1f1',
};


export default function SignIn(props: Props) {
  return (
    <div style={modalStyle}>
  <p style={{ fontWeight: 'bold', marginBottom: '20px' }}>You need to sign in first.</p>
  <div>
    <button onClick={props.onSignIn} style={primaryBtn}>Sign in</button>
    <button onClick={props.onModalClose} style={secondaryBtn}>Close</button>
  </div>
</div>

  )
}