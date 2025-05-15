import React, { useState } from 'react';
import './roadmap.css';

type Phase = {
  title: string;
  description: string;
};

const phaseData: Record<number, Phase> = {
  1: {
    title: "Beginning",
    description:
      "Phase 1 of Aditya Goo has been successfully completed! This phase focused on planning and core project development. A simple and fully functional search engine is now live — you can now search the entire web using Aditya Goo.",
  },
  2: {
    title: "Promotion Integration",
    description:
      "In Phase 2, Pioneers will be able to promote their websites using Pi Coin. By purchasing tokens with Pi, users can boost their site's visibility in search results and attract more traffic.",
  },
  3: {
    title: "UI Enhancement",
    description:
      "In Phase 3, we will focus on UI enhancements to make Aditya Goo more modern, responsive, and user-friendly. This includes dark mode and layout improvements.",
  },
  4: {
    title: "Upgradation",
    description:
      "Phase 4 will bring advanced features like AI-powered overviews, rich previews, and a new desktop interface for better performance and design.",
  },
  5: {
    title: "Feedback Implementation",
    description:
      "In Phase 5, user feedback will guide our improvements. We'll implement requested features and polish the final version of Aditya Goo.",
  },
};

const Roadmap: React.FC = () => {
  const [activePhase, setActivePhase] = useState<number | null>(null);

  const showPhaseDetail = (phase: number) => {
    setActivePhase(phase);
  };

  const hideModal = () => {
    setActivePhase(null);
  };

  return (
    <>
      <header className="header">
        <a href="/" className="logo">🔍 Aditya Goo</a>
      </header>

      <div className="roadmap-title">Aditya Goo - Roadmap</div>

      <p className="phase-announcement">
        Phase 1 of Aditya Goo has been successfully completed. We're excited to move forward to the next stage of development.
        Click on any phase below to learn about upcoming features and how we plan to build them.
        <strong> We are now entering <em>Phase 2</em>.</strong>
      </p>

      <div className="roadmap-container completed-phase1">
        {[1, 2, 3, 4, 5].map((phase) => (
          <div key={phase} className={`phase phase${phase}`} onClick={() => showPhaseDetail(phase)}>
            <div className="phase-marker">{phase}</div>
            <div className="phase-title">{phaseData[phase].title}</div>
            <div className="phase-subtext">
              {phase === 1 && 'Initial planning and project setup.'}
              {phase === 2 && 'Poiners can promote their site.'}
              {phase === 3 && 'Improve interface and user experience.'}
              {phase === 4 && 'Many exciting features integration.'}
              {phase === 5 && 'Apply user feedback for final changes.'}
            </div>
          </div>
        ))}
      </div>

      {activePhase !== null && (
        <div className="phase-detail-modal" style={{ display: 'flex' }}>
          <div className="modal-content">
            <span className="close-btn" onClick={hideModal}>×</span>
            <h2>{phaseData[activePhase].title}</h2>
            <p>{phaseData[activePhase].description}</p>
          </div>
        </div>
      )}

      <footer className="footer">
        <div className="footer-links">
          <div>
            <a href="/terms" target="_blank" rel="noopener noreferrer">Terms</a>
            <a href="/contact" target="_blank" rel="noopener noreferrer">Contact Us</a>
            <a href="/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
          </div>
          <div>
            <a href="/roadmap" target="_blank" rel="noopener noreferrer">Roadmap</a>
            <a href="/feedback" target="_blank" rel="noopener noreferrer">Feedback</a>
          </div>
        </div>
        <p className="footer-text">© 2025 Aditya Goo. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Roadmap;
