import { useState } from 'react';
import './Privacy.css';

function Privacy() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="privacy">
      <div className="container">
        <div className="privacy-toggle-container">
          <button 
            className="privacy-toggle"
            onClick={() => setIsExpanded(!isExpanded)}
            aria-expanded={isExpanded}
          >
            {isExpanded ? '▼' : '▶'} Privacy Statement
          </button>
        </div>

        {isExpanded && (
          <div className="privacy-content">
            <p className="privacy-intro">
              We value your privacy and want to be transparent about how we handle your personal information 
              for our wedding celebration.
            </p>

            <div className="privacy-section">
              <h3>What Information We Collect</h3>
              <p>When you RSVP through our website, we collect:</p>
              <ul>
                <li>Your name and contact details (email and phone number)</li>
                <li>Information about your attendance and accommodation preferences</li>
                <li>Dietary requirements and meal preferences</li>
                <li>Song suggestions for the reception</li>
                <li>Information about any additional guests you're bringing</li>
              </ul>
            </div>

            <div className="privacy-section">
              <h3>Why We Need This Information</h3>
              <p>We collect this information to:</p>
              <ul>
                <li>Confirm your attendance and plan seating arrangements</li>
                <li>Provide appropriate meals that meet your dietary needs</li>
                <li>Coordinate accommodation bookings at the venue</li>
                <li>Contact you with important updates about the wedding</li>
                <li>Create a personalized experience on our special day</li>
              </ul>
            </div>

            <div className="privacy-section">
              <h3>How We Store Your Information</h3>
              <p>
                Your information is securely stored using Google Sheets and is only accessible to us 
                (the bride and groom). We may share relevant details with our wedding venue and caterers 
                to ensure proper arrangements for your visit.
              </p>
            </div>

            <div className="privacy-section">
              <h3>How Long We Keep Your Information</h3>
              <p>
                We will keep your information until one month after the wedding date, after which it will 
                be securely deleted. We may keep some information longer if required for legal or tax purposes 
                (such as gift records).
              </p>
            </div>

            <div className="privacy-section">
              <h3>Your Rights</h3>
              <p>You have the right to:</p>
              <ul>
                <li>Request a copy of the information we hold about you</li>
                <li>Ask us to correct any incorrect information</li>
                <li>Request that we delete your information</li>
                <li>Withdraw your RSVP at any time</li>
              </ul>
              <p>
                To exercise any of these rights, please contact us at the email address provided 
                in the information section.
              </p>
            </div>

            <div className="privacy-section">
              <h3>Questions or Concerns</h3>
              <p>
                If you have any questions about how we handle your information, please don't hesitate 
                to get in touch with us. We're happy to discuss any concerns you may have.
              </p>
            </div>

            <p className="privacy-footer">
              Last updated: May 2026
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Privacy;
