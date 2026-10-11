import { useState, useEffect } from "react";
import "../App.css";
function Science() {
    const [activeSection, setActiveSection] = useState("problem");
    useEffect(() => {
        const handleScroll = () => {
            const sections = ["problem", "impact", "solution"];
            let currentSection = "problem";
            sections.forEach((id) => {
                const section = document.getElementById(id);
                if (
                    section &&
                    section.getBoundingClientRect().top <= 260
                ) {
                    currentSection = id;
                }
            });
            setActiveSection(currentSection);
        };
        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <main className="science-page">
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
            <section className="science-intro">
                <aside className="science-sidebar">
                    <a
                        href="#problem"
                        className={
                            activeSection === "problem" ? "science-link active" : "science-link"
                        }
                    >
                        The problem
                    </a>
                    <a
                        href="#impact"
                        className={
                            activeSection === "impact" ? "science-link active" : "science-link"
                        }
                    >
                        The impact
                    </a>
                    <a
                        href="#solution"
                        className={
                            activeSection === "solution" ? "science-link active" : "science-link"
                        }
                    >
                        The solution
                    </a>
                </aside>
                <div className="science-main-content">
                    <h1 className="science-main-heading">
                        Modern life is moving faster
                        <br className="science-desktop-break" /> than the brain can adapt.
                    </h1>
                    <div className="science-video">
                        <iframe
                            className="science-video-player"
                            src="https://www.youtube.com/embed/lGfXY8XGPtw"
                            title="The science behind Mave"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                        <div className="science-video-heading">
                            <div className="science-video-logo">m</div>
                            <div>
                                <h2>The science behind Mave, in 3 mins</h2>
                                <p>Mave</p>
                            </div>
                        </div>
                        <div className="science-video-center">
                            <h3>
                                CAN YOU TRAIN
                                <br />
                                YOUR BRAIN?
                            </h3>
                            <button
                                className="science-play-btn"
                                aria-label="Play science video"
                                onClick={() => {
                                    alert("Add your science video link here.");
                                }}
                            >
                                ▶
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="science-detail-section" id="problem">
                <div className="science-detail-container">
                    <p className="science-detail-intro">
                        The brain evolved over hundreds of thousands of years to help humans
                        survive in physically demanding, socially connected environments.
                        But in just the last few years, nearly every aspect of daily life has changed.
                    </p>
                    <div className="science-detail-item">
                        <h2>Most jobs are cognitively demanding, not physical</h2>
                        <p>
                            Most jobs now require sustained attention, rapid context-switching,
                            and constant decision-making. The average person makes ~35,000
                            decisions per day.
                        </p>
                    </div>
                    <div className="science-detail-item">
                        <h2>We have become an "indoor species"</h2>
                        <p>
                            Humans spend ~93% of their lives inside buildings or vehicles,
                            with reduced daylight, movement, and sensory variation.
                        </p>
                    </div>
                    <div className="science-detail-item">
                        <h2>Our attention is no longer our own</h2>
                        <p>
                            Notifications, meetings, and algorithm-driven feeds fragment
                            focus and prevent mental recovery. Screen time has increased
                            by ~261% with the rise of personalized digital platforms.
                        </p>
                    </div>
                    <div className="science-detail-item">
                        <h2>Social structures have weakened</h2>
                        <p>
                            People live farther from family, and time spent with friends
                            has dropped by ~60% over the last decade. Loneliness and social
                            isolation are as damaging to health as smoking 15 cigarettes per day.
                        </p>
                    </div>
                    <div className="science-detail-item">
                        <h2>Work is the new insomnia</h2>
                        <p>
                            Work-related stress and constant mental demands can make it
                            difficult to relax and get restful sleep.
                        </p>
                    </div>
                </div>
            </section>
            <section className="science-impact-section" id="impact">
                <div className="science-impact-container">
                    <p className="science2-quote">
                        “We're living with a prehistoric brain in a digital age,
                        and it's being pushed to operate continuously beyond the
                        conditions it evolved for.”
                    </p>
                    <h2 className="science-impact-heading">
                        The PFC takes the hit.
                    </h2>
                    <p className="science-impact-text">
                        The PFC is the brain's control center. It governs focus,
                        decision-making, emotional regulation, impulse control, and sleep.
                    </p>
                    <p className="science-impact-text">
                        Neuroscience and stress physiology reveal a clear pattern
                        under prolonged demand:
                    </p>
                    <div className="science-impact-list">
                        <p>Activity and efficiency in the prefrontal cortex declines.</p>
                        <p>Limbic regions—especially the amygdala—become more reactive.</p>
                        <p>
                            Control shifts from rational, top-down thinking to emotion-
                            and threat-driven responses.
                        </p>
                    </div>
                    <p className="science-impact-text">
                        As this balance shifts, people commonly experience:
                    </p>
                    <div className="science-impact-list">
                        <p>Difficulty sustaining focus</p>
                        <p>Increased mental fatigue and decision friction</p>
                        <p>Heightened stress reactivity</p>
                        <p>Reduced emotional regulation</p>
                        <p>Fragmented or non-restorative sleep</p>
                    </div>
                    <p className="science-impact-text">
                        This pattern is observed repeatedly across experimental
                        research and clinical settings, including work by researchers
                        such as <a href="https://en.wikipedia.org/wiki/Robert_Sapolsky">
                            Robert Sapolsky</a> and clinicians like <a href="https://www.markrego.com/">
                            Mark Rego</a>.
                    </p>
                </div>
            </section>
            <section className="science-solution-section" id="solution">
                <div className="science-solution-container">
                    <div className="science-watch">
                        <p className="science-watch-title">Also watch:</p>
                        <div className="science-watch-videos">
                            <iframe
                                src="https://www.youtube.com/embed/gzLPa6NbcrE"
                                title="Mave science video"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                            <iframe
                                src="https://www.youtube.com/embed/Mo1A45ShcMo"
                                title="Mave science video 2"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                    <h2 className="science-solution-heading">
                        This is where transcranial direct current stimulation
                        (tDCS) comes in.
                    </h2>
                    <p className="science-solution-text">
                        tDCS is a non-invasive technique that delivers very low-intensity
                        electrical currents (1–2 mA) to targeted brain regions. This
                        stimulation may influence neuronal activity. Applied over the
                        prefrontal cortex, it has been studied for its potential effects
                        on mood, focus, motivation, stress regulation, sleep, and HRV.
                    </p>
                    <p className="science-solution-text">
                        Each session lasts about 20 minutes and works in the background.
                        Repeated sessions are intended to influence neural networks and
                        support self-regulation over time.
                    </p>
                    <p className="science-solution-text">
                        tDCS has been studied extensively. Its effects and safety depend
                        on the protocol and individual circumstances.
                    </p>
                    <div className="science1-founder-quote">
                        <span className="science1-quote-mark">"</span>
                        <p>
                            Three years ago, we lost a close friend to depression. That
                            experience pushed us to look closely at how broken and outdated
                            most solutions still are. What started as personal loss turned
                            into a long-term commitment to understanding the brain better
                            and building something meaningfully different.
                        </p>
                        <div className="science1-founder-name">
                            ~ <a href="#">Aman Kumar</a> (Co-founder and CTO, Mave)
                        </div>
                    </div>
                </div>
            </section>
            <section className="science6-section">
                <div className="science6-slider">
                    <div className="science6-track">
                        {[1, 2].map((repeat) => (
                            <>
                                <div className="science6-card">
                                    <div className="science6-category">
                                        <span>♧</span> Mood
                                    </div>
                                    <p className="science6-quote">
                                        “In two separate experiments, series of daily
                                        prefrontal tDCS sessions positively impacted
                                        mood states by 64.7 and 39.1%, compared to no
                                        effect in sham condition.”
                                    </p>
                                    <div className="science6-bottom">
                                        <p>Mar 2016, Adelaide Austin</p>
                                        <a href="#research">Read full article</a>
                                    </div>
                                </div>
                                <div className="science6-card">
                                    <div className="science6-category">
                                        <span>♧</span> Working memory. cortisol.
                                    </div>
                                    <p className="science6-quote">
                                        “Active tDCS blunted cortisol release in stress
                                        conditions and improved working memory under
                                        stress induced state.”
                                    </p>
                                    <div className="science6-bottom">
                                        <p>Nov 2024, Sumit Roy</p>
                                        <a href="#research">Read full article</a>
                                    </div>
                                </div>
                                <div className="science6-card">
                                    <div className="science6-category">
                                        <span>♧</span> Heart rate. HRV.
                                    </div>
                                    <p className="science6-quote">
                                        “Anodal HD tDCS over left DLPFC significantly
                                        reduced the heart rate and improved the HRV
                                        in healthy young people.”
                                    </p>
                                    <div className="science6-bottom">
                                        <p>Nov 2024, Sumit Roy</p>
                                        <a href="#research">Read full article</a>
                                    </div>
                                </div>
                                <div className="science6-card">
                                    <div className="science6-category">
                                        <span>♧</span> No side effects.
                                    </div>
                                    <p className="science6-quote">
                                        "The use of conventional tDCS protocols has not
                                        produced any serious adverse side effects or irreversible
                                        injury across 33,200 sessions"
                                    </p>
                                    <div className="science6-bottom">
                                        <p>Oct 2016,Marom Bikson</p>
                                        <a href="#research">Read full article</a>
                                    </div>
                                </div>
                                <div className="science6-card">
                                    <div className="science6-category">
                                        <span>♧</span> Performance.
                                    </div>
                                    <p className="science6-quote">
                                        "In healthy, well rested,
                                        active duty soldiers active tDCS group yielded significantly
                                        better perfomance compared to sham stimulation group"
                                    </p>
                                    <div className="science6-bottom">
                                        <p>Aug 2025,Amanda Kelley</p>
                                        <a href="#research">Read full article</a>
                                    </div>
                                </div>
                                <div className="science6-card">
                                    <div className="science6-category">
                                        <span>♧</span> Stress regulation sleep.
                                    </div>
                                    <p className="science6-quote">
                                        "The tDCS sessions resulted in reduced stress levels,
                                        improve sleep quality and enhanced percepation of stress
                                        compared to sham across 175 individuals"
                                    </p>
                                    <div className="science6-bottom">
                                        <p>Sep 2024,Laya Dalila dos Reis</p>
                                        <a href="#research">Read full article</a>
                                    </div>
                                </div>
                            </>
                        ))}
                    </div>
                </div>
            </section>
            <footer className="footer-section">
                <div className="footer-company">
                    <h2 className="footer-logo">∿Mave</h2>
                    <div className="company-address">
                        <p>🇺🇸 Mave Health LLC</p>
                        <p>30 N Gould St Ste R Sheridan, WY 82801</p>
                    </div>
                    <div className="company-address india-address">
                        <p>🇮🇳 Mave Health Private Limited</p>
                        <p>235, 2nd and 3rd Floor, 13th Cross Road,</p>
                        <p>Indiranagar, Bangalore- 560038, KA</p>
                        <p>(CIN: U62099KA2023PTC178941)</p>
                    </div>
                    <div className="footer-country">
                        <p>Selected country: 🇮🇳 India (INR)</p>
                        <a href="#">Change country</a>
                    </div>
                    <p className="footer-disclaimer">
                        Mave is a general wellness product designed to support wellbeing.
                        Mave is not approved or cleared by the FDA and is not intended,
                        marketed, or sold to treat or cure any disease or condition.
                        At this time, Mave is only available for shipment within the
                        United States and India.
                    </p>
                    <div className="footer-legal">
                        <a href="#">Returns and Cancellations</a>
                        <span>•</span>
                        <a href="#">Privacy policy</a>
                        <a href="#">Terms of use</a>
                    </div>
                </div>
                <div className="footer-right">
                    <div className="footer-index">
                        <h4>INDEX</h4>
                        <a href="#">Home</a>
                        <a href="#">The science</a>
                        <a href="#">Careers</a>
                        <a href="#">Order now</a>
                    </div>
                    <div className="footer-social">
                        <h4>SOCIAL</h4>
                        <div className="social-icons">
                            <a href="#" aria-label="LinkedIn">in</a>
                            <a href="#" aria-label="X">𝕏</a>
                            <a href="#" aria-label="Instagram">◎</a>
                        </div>
                    </div>
                    <div className="footer-contact">
                        <h4>CONTACT</h4>
                        <p>Jai Sharma</p>
                        <a href="mailto:jai@mavehealth.com">
                            ✉ jai@mavehealth.com
                        </a>
                        <a href="tel:+917597394088">
                            ☏ +91-7597 394 088
                        </a>
                        <img src="/images/f.jpg" alt="Brain cells" />
                    </div>
                </div>
            </footer>
        </main>
    );
}

export default Science;
