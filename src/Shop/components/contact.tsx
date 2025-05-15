import React, { useState } from 'react';
import './FeedbackForm.css'; // ✅ Link to CSS file




const ContactUs: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState<number | null>(null);
  const [message, setMessage] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!rating) return alert('Please select a rating');

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('rating', rating.toString());
    formData.append('message', message);
    if (file) formData.append('attachment', file);

    try {
      const response = await fetch('https://backendfeed.onrender.com/api/feedback', {
        method: 'POST',
        body: formData
      });

      const result = await response.json();
      setStatus(result.success ? 'Feedback sent!' : 'Failed to send feedback');
    } catch (err) {
      setStatus('Error occurred.');
    }
  };

  return (<>
  <header className="header">
    <a href="/" className="logo">🔍 Aditya Goo</a>
  </header>
    <div className="feedback-container">
      <h2 className="feedback-title">Contact Us</h2>
      <p>Have a question or want to contact? Fill out the form below! </p>
      <p>
  (In case of Form error please mail us at - 
  <a href="mailto:mail.adityagoo@gmail.com">
    <strong>mail.adityagoo@gmail.com</strong>
  </a>)
</p>

      <form onSubmit={handleSubmit} className="feedback-form">
        <h3>Name :</h3>
        <input
          type="text"
          className="input"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <h3>Email :</h3>
        <input
          type="email"
          className="input"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        {/* <div>
          <p className="rating-label">Your Rating:</p>
          <div className="emoji-rating">
            {emojiMap.map((emoji) => (
              <button
                key={emoji.value}
                type="button"
                onClick={() => setRating(emoji.value)}
                className={`emoji-button ${rating === emoji.value ? 'selected' : ''}`}
                title={emoji.label}
              >
                {emoji.icon}
              </button>
            ))}
          </div>
        </div> */}
        <h3>Message :</h3>
        <textarea
          className="textarea"
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />

        {/* <input
          type="file"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          className="file-input"
        /> */}

        <button type="submit" className="submit-button">
          Submit
        </button>

        {status && <p className="status-message">{status}</p>}
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
    </>
  );
};

export default ContactUs;
