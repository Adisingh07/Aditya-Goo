import React, { useState } from 'react';
import './FeedbackForm.css'; // ✅ Link to CSS file

type EmojiRating = {
  icon: string;
  label: string;
  value: number;
};

const emojiMap: EmojiRating[] = [
  { icon: '😡', label: 'Very Bad', value: 1 },
  { icon: '😞', label: 'Bad', value: 2 },
  { icon: '😐', label: 'Okay', value: 3 },
  { icon: '😊', label: 'Good', value: 4 },
  { icon: '🤩', label: 'Excellent', value: 5 }
];

const FeedbackForm: React.FC = () => {
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
      <h2 className="feedback-title">Send Feedback</h2>
      <p>Your feedback is important to us. If you have any ideas for new features or improvements, please include them—we’ll do our best to incorporate them in upcoming updates. </p>
      <p>
  (In case of Form error please mail us at - 
  <a href="mailto:mail.adityagoo@gmail.com">
    <strong>mail.adityagoo@gmail.com</strong>
  </a>)
</p>
      <form onSubmit={handleSubmit} className="feedback-form">
        <input
          type="text"
          className="input"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        {/* <input
          type="email"
          className="input"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        /> */}

        <div>
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
        </div>

        <textarea
          className="textarea"
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />

        <input
          type="file"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          className="file-input"
        />

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

export default FeedbackForm;
