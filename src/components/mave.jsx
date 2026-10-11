import { } from "react";
import "../App.css";
function Mave() {
    return (
        <>
            <header className="header">
                <div className="logo">mave</div>
                <nav className="navbar">
                    <a href="/home">Home</a>
                    <a href="/science">The Science</a>
                    <a href="/mave">Is Mave for me?</a>
                </nav>
                <button className="order-btn">
                    Order now ↗
                </button>
            </header>
            <section className="mave9-hero">
              <h2>YOUR HEALTH, YOUR WAY</h2>
                <h1>Unlock your detailed Brain Score</h1>
                <p className="mave9-description">
                    Focus & Attention |
                    Working memory |
                    Reasoning |
                    Stress Tolerance |
                    Drive & Mindset |
                    Sleep & Recovery |
                    Lifestyle
                </p>
                <div className="mave9-image">
                    <img
                        src="/images/ph2.png"
                        alt="Mave mobile app"
                    />
                </div>
                <p className="mave9-description">
                    Takes less than 5 minutes
                    |
                    Developed by experts
                </p>
                <button
                    className="mave9-button"
                    onClick={() => window.location.href = "/science"}
                >
                    Get Your Brain Score
                </button>
                <p className="mave9-bottom-text">
                    Your responses are private and securely stored - they are never shared with
                    any third party. This assessment is for informational
                    purposes only and does not constitute a medical diagnosis.
                </p>
            </section>
        </>
    );
}
export default Mave;
