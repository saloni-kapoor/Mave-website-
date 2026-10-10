import { useState, useEffect, useRef } from "react";
import './App.css';

function CompanionApp() {
  const phoneImages = [
    "/images/phone-1.png",
    "/images/phone-2.png",
    "/images/phone-3.png",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage(
        (previous) => (previous + 1) % phoneImages.length
      );
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="companion-section">
      <div className="companion-container">
        <div className="companion-left">
          <p className="companion-label">COMPANION APP</p>

          <h2>
            Unlock more
            <br />
            with the Mave app
          </h2>

          <p className="free-access">
            ❧ Lifetime free access ❧
          </p>

          <div className="feature-cards">
            <div className="feature-card">
              Track<br />Progress
            </div>

            <div className="feature-card">
              Manage<br />Sessions
            </div>

            <div className="feature-card">
              Health<br />Sync
            </div>
          </div>

          <div className="compatibility">
            Compatible with  iOS and ▶ Android.
          </div>
        </div>

        <div className="companion-right">
          <img
            key={currentImage}
            src={phoneImages[currentImage]}
            alt="Mave app phone screen"
            className="phone-image"
          />
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function handleScroll() {
      let scroll = window.scrollY;
      let height = document.body.scrollHeight - window.innerHeight;

      if (height > 0) {
        setProgress((scroll / height) * 100);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="how-it-works">
      <h2>How it works</h2>


      <div className="timeline">

        <div className="phase">
          <p className="phase-name">Phase 1 <span>•</span> Week 1 - 4</p>
          <h3>Gentle activation</h3>
          <p className="description">
            You notice a subtle boost in focus,
            energy and stress regulation.
          </p>

          <div className="phase-line"></div>
          <div className="circle"></div>
        </div>

        <div className="phase">
          <p className="phase-name">Phase 2 <span>•</span> Week 5 - 8</p>
          <h3>Nudge</h3>
          <p className="description">
            Your attention lasts longer, your mood lifts,
            and thinking feels effortless every day.
          </p>

          <div className="phase-line"></div>
          <div className="circle"></div>
        </div>

        <div className="phase phase-last">
          <p className="phase-name">Phase 3 <span>•</span> Week 8+</p>
          <h3>Rhythm Reset</h3>
          <p className="description">
            The shift becomes seamless. Focus, clarity,
            and steadiness flow naturally every day.
          </p>
        </div>

      </div>

    </section>
  );
}
function ExpertsSection() {
  const [active, setActive] = useState(0);

  const experts = [
    {
      image: `${import.meta.env.BASE_URL}images/e1.jpg`,
      quote:
        "Mave has brought together evidence-based science and functional design to make a truly effective tool.",
      name: "Dr. Himanshu Nirvan",
      role: "MD, Psychiatrist & Gold Medalist",
    },
    {
      image: `${import.meta.env.BASE_URL}images/e2.jpg`,
      quote:
        "Mave’s headset does what’s long overdue: making neurotechnology accessible and effortless for everyday life.",
      name: "Nicole O’Connor, MA, MFT",
      role: "Former Chief of Staff, Headspace",
    },
    {
      image: `${import.meta.env.BASE_URL}images/e3.jpg`,
      quote:
        "It’s like a model t car vs a 2025 Mercedes. Mave’s product is the Mercedes!",
      name: "Steev Hodgson",
      role: "Certified ADHD Coach",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((previous) => (previous + 1) % experts.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="experts-section">
      <div className="experts-box">
        <h2>Experts trust Mave</h2>

        <div className="expert-content" key={active}>
          <p className="expert-quote">
            “{experts[active].quote}”
          </p>

          <h3>{experts[active].name}</h3>
          <p className="expert-role">{experts[active].role}</p>
        </div>

        <div className="expert-images">
          {experts.map((expert, index) => (
            <button
              className={`expert-button ${active === index ? "active" : ""
                }`}
              key={expert.image}
              onClick={() => setActive(index)}
              aria-label={`Show ${expert.name}`}
            >
              <img src={expert.image} alt={expert.name} />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function App() {

  const resultsRef = useRef(null);
  const [showResults, setShowResults] = useState(false);

  const videoRef = useRef(null);
  const videoSectionRef = useRef(null);

  const [launchClicked, setLaunchClicked] = useState(false);

  useEffect(() => {
    const section = videoSectionRef.current;
    const video = videoRef.current;

    if (!section || !video) return;

    const sendCommand = (func) => {
      video.contentWindow?.postMessage(
        JSON.stringify({
          event: "command",
          func: func,
          args: [],
        }),
        "*"
      );
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!launchClicked) {
            sendCommand("mute");
            sendCommand("playVideo");
          }
        } else {
          sendCommand("pauseVideo");
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, [launchClicked]);

  const playVideoWithSound = () => {
    setLaunchClicked(true);
  };


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowResults(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (resultsRef.current) {
      observer.observe(resultsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      image: `${import.meta.env.BASE_URL}images/u4.jpg`,
      review: "More energy and focus than caffeine, without the jitters. It’s worth the appreciation.",
      name: "Michael Raspuzzi",
      role: "Founder US",
    },
    {
      image: `${import.meta.env.BASE_URL}images/u2.jpg`,
      review: "My frequency of anxious thoughts reduced drastically, like someone pressed a reset button.",
      name: "Vardhman Jain",
      role: "Founder IN",
      video: true,
    },
    {
      image: `${import.meta.env.BASE_URL}images/u3.jpg`,
      review: "I stay calmer under stress and react effectively, my mental stamina and HRV have also improved.",
      name: "Forest Welch",
      role: "Software Engineer US",
    },
    {
      image: `${import.meta.env.BASE_URL}images/u5.jpg`,
      review: "More energy and focus throughout the day.",
      name: "Customer Four",
      role: "Founder US",
    },
    {
      image: `${import.meta.env.BASE_URL}images/u6.jpg`,
      review: "I feel calmer and more focused in my daily life.",
      name: "Customer Five",
      role: "Founder IN",
    },
    {
      image: `${import.meta.env.BASE_URL}images/u3.jpg`,
      review: "My stress feels easier to manage.",
      name: "Customer Six",
      role: "Software Engineer US",
    },
  ];
  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev >= testimonials.length - 3 ? 0 : prev + 1
    );
  };
  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev <= 0 ? testimonials.length - 3 : prev - 1
    );
  };


  return (
    <>
      <header className="header">
        <div className="logo">mave</div>

        <nav className="navbar">
          <a href="#home">Home</a>
          <a href="#science">The Science</a>
          <a href="#mave">Is Mave for me?</a>
        </nav>

        <button className="order-btn">
          Order now ↗
        </button>
      </header>
      <section className="hero" id="home">
        <div className="hero-top">
          <div className="hero-left">
            <h1>
              Let your days flow
              <br />
              effortlessly with Mave
            </h1>
            <p>
              Improve focus. Reduce stress. Feel calm.
            </p>
          </div>
          <div className="hero-right">
            <p className="review-text">
              “Helps me feel calm and ready to go.”
            </p>
            <p className="review-name">
              Max ‘Pain’ Griffin, UFC Fighter
            </p>
            <div className="profile-images">
              <img src={`${import.meta.env.BASE_URL}images/p1.jpg`} alt="Customer 1" />
              <img src={`${import.meta.env.BASE_URL}images/p2.jpg`} alt="Customer 2" />
              <img src={`${import.meta.env.BASE_URL}images/p3.jpg`} alt="Customer 3" />
              <img src={`${import.meta.env.BASE_URL}images/p4.jpg`} alt="Customer 4" />
              <img src={`${import.meta.env.BASE_URL}images/p5.jpg`} alt="Customer 5" />
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img
            src={`${import.meta.env.BASE_URL}images/hero.jpg`}
            alt="Mave wellness"
          />
          <span className="rating">★★★★★</span>
        </div>
      </section>
      <section className="featured">
        <p className="featured-title">AS FEATURED ON</p>
        <div className="featured-logos">
          <span>Entrepreneur</span>
          <span>TechCrunch</span>
          <span className="forbes">Forbes</span>
          <span>The Economic Times</span>
          <span>THE KEN</span>
          <span>Inc.42</span>
          <span>wellworthy</span>
          <span>YOURSTORY</span>
        </div>
      </section>
      <section className="testimonials">
        <h2>Loved by users</h2>
        <div className="testimonial-slider">
          <div
            className="testimonial-track"
            style={{
              transform: `translateX(-${currentIndex * (100 / 3)}%)`,
              transition: "transform 0.5s ease-in-out"
            }}
          >
            {testimonials.map((user, index) => (
              <div className="testimonial-card" key={index}>
                <img src={user.image} alt={user.name} />
                <h3>{user.review}</h3>
                <p>{user.name}</p>
                <small>{user.role}</small>
              </div>
            ))}
          </div>
        </div>
        <div className="slider-buttons">
          <button
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            ←
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next slide"
          >
            →
          </button>
        </div>
      </section>
      <section className="brain-section">
        <h1>
          Modern life
          <br />
          fatigues the brain
        </h1>
        <div className="brain-diagram">
          <div className="left-labels">
            <p>Chronic Stress</p>
            <p>Screen Overload</p>
            <p>Indoor Lifestyle</p>
          </div>
          <svg
            className="connecting-lines"
            viewBox="0 0 450 220"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="lineColor" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#E9C9B0" />
                <stop offset="100%" stopColor="#FFE49B" />
              </linearGradient>
            </defs>
            <g
              fill="none"
              stroke="url(#lineColor)"
              strokeWidth="12"
              strokeLinecap="butt"
              opacity="0.38"
            >
              <path d="M0 30 H120 C190 30 190 110 260 110 H450" />
              <path d="M0 30 H120 C190 30 190 210 260 210 H450" />
              <path d="M0 110 H120 C190 110 190 30 260 30 H450" />
              <path d="M0 110 H120 C190 110 190 210 260 210 H450" />
              <path d="M0 210 H120 C190 210 190 30 260 30 H450" />
              <path d="M0 210 H120 C190 210 190 110 260 110 H450" />
            </g>
          </svg>
          <div className="right-labels">
            <p>Cognitive Fatigue</p>
            <p>Elevated Stress</p>
            <p>Impaired Resilience</p>
          </div>
        </div>
      </section>
      <section className="introducing-section">
        <h1>Introducing Mave</h1>
        <div className="product-area">
          <img
            src={`${import.meta.env.BASE_URL}images/move-bend.png`}
            alt="Mave Product"
            className="product-image"
          />
        </div>
      </section>
      <section className="product-description">
        <h2>
          The first-of-its-kind
          <br />
          tDCS wearable, built to tackle
          <br />
          the stressors of modern life.
        </h2>
      </section>
      <section className="mave-hero">
        <div className="mave-content">

          <div className="mave-text">
            <p>
              Mave is designed to improve stress regulation,
              focus, and mood in just 20 mins/day.
            </p>

            <p>
              It uses targeted, low-intensity electrical signals
              (tDCS) to strengthen the prefrontal cortex, the
              brain's command center.
            </p>
          </div>

          <div className="mave-right">
            <button className="order1-btn">
              Order at Launch Price
            </button>

            <p className="trial-text">
              ❧ 30 day risk free trial ❧
            </p>

            <div className="mave-cards">
              <div className="mave-card">
                tDCS is backed by
                <br />
                10K+ studies globally
              </div>

              <div className="mave-card">
                No adverse side
                <br />
                effects, safe to use
              </div>
            </div>
          </div>

        </div>
      </section>
      <section className="how-mave-works">
        <div className="mave-layout">
          <div className="mave-photo">
            <img
              src="/images/mave-woman.jpg"
              alt="Woman wearing Mave headset"
            />

            <div className="photo-labels">
              <span>Ergonomic design</span>
              <span>Adjustable strap</span>
            </div>
          </div>
          <div className="mave-info">

            <h2>20 minutes a day</h2>

            <div className="steps">
              <div className="step">
                <span>1</span>
                <p>Wear it</p>
              </div>

              <div className="step">
                <span>2</span>
                <p>Start session</p>
              </div>

              <div className="step">
                <span>3</span>
                <p>Move on</p>
              </div>
            </div>

            <p className="mave-description">
              The Mave headset works quietly in the
              background. Just wear it and go about your
              day as usual.
            </p>

            <div className="review">
              <div className="review-badge">
                <span>👥</span>
                <span>100+</span>
                <span className="stars">★★★★★</span>
                <span>Easy to use</span>
              </div>

              <p className="review-quote">
                “I love it. It’s very comfortable, sleek
                and effortless.”
              </p>

              <div className="review-person">
                <div className="person-avatar">A</div>
                <div>
                  <p>Aaron Hoffman</p>
                  <small>Founder (LA us)</small>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      <CompanionApp />

      <section
        className="results-section"
        ref={resultsRef}
      >
        <p className="results-label">THE RESULTS</p>

        <h2>
          Experience the shift within
          <br />
          your first month
        </h2>

        <div className="results-list">
          <div className="result-row">
            <div className={`result-fill fill-84 ${showResults ? "animate" : ""}`}>
              <span className="percentage">84%</span>
              <span>Improved stress regulation</span>
            </div>

            <span className="result-icon">♧</span>
          </div>

          <div className="result-row">
            <div className={`result-fill fill-80 ${showResults ? "animate" : ""}`}>
              <span className="percentage">80%</span>
              <span>Improved mood</span>
            </div>

            <span className="result-icon">☺</span>
          </div>

          <div className="result-row">
            <div className={`result-fill fill-77 ${showResults ? "animate" : ""}`}>
              <span className="percentage">77%</span>
              <span>Improved attention</span>
            </div>

            <span className="result-icon">◎</span>
          </div>
        </div>
      </section>
      <HowItWorks />
      <ExpertsSection />

      <section className="science-section">

        <div className="science-heading">
          <p>THE SCIENCE</p>
          <h2>
            tDCS is backed by
            <br />
            25+ years of research
          </h2>
        </div>

        <div className="science-slider">
          <div className="science-track">

            {[1, 2].map((repeat) => (
              <>
                <div className="science-card">
                  <div className="science-category">
                    <span>♧</span> Mood
                  </div>

                  <p className="science-quote">
                    “In two separate experiments, series of daily
                    prefrontal tDCS sessions positively impacted
                    mood states by 64.7 and 39.1%, compared to no
                    effect in sham condition.”
                  </p>

                  <div className="science-bottom">
                    <p>Mar 2016, Adelaide Austin</p>
                    <a href="#research">Read full article</a>
                  </div>
                </div>

                <div className="science-card">
                  <div className="science-category">
                    <span>♧</span> Working memory. cortisol.
                  </div>

                  <p className="science-quote">
                    “Active tDCS blunted cortisol release in stress
                    conditions and improved working memory under
                    stress induced state.”
                  </p>

                  <div className="science-bottom">
                    <p>Nov 2024, Sumit Roy</p>
                    <a href="#research">Read full article</a>
                  </div>
                </div>

                <div className="science-card">
                  <div className="science-category">
                    <span>♧</span> Heart rate. HRV.
                  </div>

                  <p className="science-quote">
                    “Anodal HD tDCS over left DLPFC significantly
                    reduced the heart rate and improved the HRV
                    in healthy young people.”
                  </p>

                  <div className="science-bottom">
                    <p>Nov 2024, Sumit Roy</p>
                    <a href="#research">Read full article</a>
                  </div>
                </div>
                <div className="science-card">
                  <div className="science-category">
                    <span>♧</span> No side effects.
                  </div>

                  <p className="science-quote">
                    "The use of conventional tDCS protocols has not
                    produced any serious adverse side effects or irreversible
                    injury across 33,200 sessions"
                  </p>

                  <div className="science-bottom">
                    <p>Oct 2016,Marom Bikson</p>
                    <a href="#research">Read full article</a>
                  </div>
                </div>
                <div className="science-card">
                  <div className="science-category">
                    <span>♧</span> Performance.
                  </div>

                  <p className="science-quote">
                    "In healthy, well rested,
                    active duty soldiers active tDCS group yielded significantly
                    better perfomance compared to sham stimulation group"
                  </p>

                  <div className="science-bottom">
                    <p>Aug 2025,Amanda Kelley</p>
                    <a href="#research">Read full article</a>
                  </div>
                </div>
                <div className="science-card">
                  <div className="science-category">
                    <span>♧</span> Stress regulation sleep.
                  </div>

                  <p className="science-quote">
                    "The tDCS sessions resulted in reduced stress levels,
                    improve sleep quality and enhanced percepation of stress
                    compared to sham across 175 individuals"
                  </p>

                  <div className="science-bottom">
                    <p>Sep 2024,Laya Dalila dos Reis</p>
                    <a href="#research">Read full article</a>
                  </div>
                </div>
              </>
            ))}

          </div>
        </div>

      </section>
      <section className="launch-section" ref={videoSectionRef}>
        <div className="launch-video-box">
          <iframe
            ref={videoRef}
            className="launch-video"
            src={
              launchClicked
                ? "https://www.youtube.com/embed/6M57TX5fzPI?autoplay=1&mute=0&controls=1&playsinline=1&enablejsapi=1"
                : "https://www.youtube.com/embed/6M57TX5fzPI?autoplay=1&mute=1&controls=0&playsinline=1&enablejsapi=1&loop=1&playlist=6M57TX5fzPI"
            }
            title="Mave Launch Video"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
          {!launchClicked && (
            <div className="launch-overlay">
              <button
                type="button"
                className="launch-video-button"
                onClick={playVideoWithSound}
              >
                ▶ Watch Launch Video
              </button>

              <div className="launch-bottom">
                <h2>Wondering if Mave is right for you?</h2>

                <button
                  type="button"
                  className="assessment-button"
                >
                  Take the 5-minute assessment
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="faq-section">
        <div className="faq-container">
          <div className="faq-left">
            <h2>Frequently Asked<br />Questions</h2>

            <p>
              Have a question you want answered?{" "}
              <a href="https://www.mavehealth.com/#">
                Write to us.
              </a>
            </p>
          </div>
          <div className="faq-right">

            <div className="faq-card">
              <button
                className="faq-question"
                onClick={() => setOpenFaq(openFaq === 0 ? null : 0)}
              >
                Is Mave safe to use?
                <span>{openFaq === 0 ? "−" : "+"}</span>
              </button>
              <div className="faq-answer">
                <p>Yes, Mave is a non-invasive wearable and incredibly safe. Its underlying technology tDCS (or transcranial direct current stimulation) has been researched for over 25 years, and no adverse side effects have been reported in any formal or informal studies on tDCS.

                  Electrical signals are your neuron's natural communication mechanism. tDCS works by subtly reinforcing the brain's own electrical activity through gentle stimulation applied externally.</p>
              </div>
            </div>

            <div className="faq-card">
              <button
                className="faq-question"
                onClick={() => setOpenFaq(openFaq === 1 ? null : 1)}
              >
                Is there a subscription fee?
                <span>{openFaq === 1 ? "−" : "+"}</span>
              </button>
              <div className="faq-answer">
                <p>Your subscription information will go here.</p>
              </div>
            </div>

            <div className="faq-card">
              <button className="faq-question">
                If I don't like it, can I return it?
                <span>+</span>
              </button>
              <div className="faq-answer">
                <p>Your return policy information will go here.</p>
              </div>
            </div>

            <div className="faq-card">
              <button className="faq-question">
                When should I use the product?
                <span>+</span>
              </button>
              <div className="faq-answer">
                <p>Your product usage information will go here.</p>
              </div>
            </div>

            <div className="faq-card">
              <button className="faq-question">
                What does it feel like during the session?
                <span>+</span>
              </button>
              <div className="faq-answer">
                <p>Your session experience information will go here.</p>
              </div>
            </div>

            <div className="faq-card">
              <button className="faq-question">
                Who is it for?
                <span>+</span>
              </button>
              <div className="faq-answer">
                <p>Your information about who Mave is for will go here.</p>
              </div>
            </div>

            <div className="faq-card">
              <button className="faq-question">
                When will I see the results?
                <span>+</span>
              </button>
              <div className="faq-answer">
                <p>Your results information will go here.</p>
              </div>
            </div>

            <div className="faq-card">
              <button className="faq-question">
                Can I take medicines along with Mave?
                <span>+</span>
              </button>
              <div className="faq-answer">
                <p>Your medicine-related information will go here.</p>
              </div>
            </div>

            <div className="faq-card">
              <button className="faq-question">
                Does the headset collect any data?
                <span>+</span>
              </button>
              <div className="faq-answer">
                <p>Your data privacy information will go here.</p>
              </div>
            </div>
            <div className="faq-card">
              <button className="faq-question">
                Do I get session pads?
                <span>+</span>
              </button>
              <div className="faq-answer">
                <p>Your session pads information will go here.</p>
              </div>
            </div>
            <div className="faq-card">
              <button className="faq-question">
                Is Mave suitable for everyone?
                <span>+</span>
              </button>
              <div className="faq-answer">
                <p>Your suitability information will go here.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default App;
