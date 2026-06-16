import { useState } from "react";
import "./style.css";

import logo from "./assets/logo.svg";
import lightning from "./assets/lightning.svg";
import scribble from "./assets/scribble.svg";
import characters from "./assets/characters.png";
import aboutRight from "./assets/about-right.png";

function Header({ setPage, setIsAdviceOpen, setIsLangOpen, setIsMenuOpen }) {  return (
    <header className="header">
      <button className="burger" onClick={() => setIsMenuOpen(true)}>
  ☰
</button>
      <button className="logo" onClick={() => setPage("home")}>
        <img src={logo} alt="Labyrinth" />
      </button>
      <button
  className="lang-switch"
  onClick={() => setIsLangOpen(true)}
>
  ENG
  <span className="lang-arrow"></span>
</button>

      <nav className="nav">
        <button className="nav-link nav-about" onClick={() => setPage("about")}>
          <img className="lightning" src={lightning} alt="" />
          About Project
          <Outline />
        </button>

<button className="nav-link nav-authors" onClick={() => setPage("authors")}>          Authors
          <Outline />
        </button>

<button className="nav-link nav-boundaries" onClick={() => setPage("boundaries")}>          Define your boundaries
          <Outline />
        </button>

        <button
  className="nav-link nav-advice"
  onClick={() => setIsAdviceOpen(true)}
>
  Psychologist&apos;s Advice
  <Outline />
</button>

        <button className="lang nav-lang" onClick={() => setIsLangOpen(true)}>
  ENG
  <span className="lang-arrow"></span>
  <Outline />
</button>
      </nav>
    </header>
  );
}

function Outline() {
  return (
    <svg className="hover-outline" viewBox="0 0 120 50">
      <path d="M20 8 C5 10 3 35 18 42 C35 50 90 48 105 38 C122 26 112 5 90 6 C65 7 42 4 20 8" />
    </svg>
  );
}

function HomePage() {
  return (
    <section className="hero">
      <img className="scribble" src={scribble} alt="" />

      <div className="start-block">
        <h1 className="start-title">START</h1>

        <div className="start-row">
          <span className="left-text">start the game</span>

          <div className="start-line">
            <span className="line-left">
              <span className="plus-line"></span>
            </span>

            <span className="circle"></span>
            <span className="line-right"></span>
            <span className="arrow-head"></span>
          </div>

          <span className="right-text">choose your story</span>
        </div>
      </div>

      <div className="bottom">
        <div className="big-text">
          <p className="purple">GO THROUGH<br />SEX STORIES</p>
          <p>WHAT DID YOU<br />DO IN THEIR<br />PLACE?</p>
        </div>

        <div className="characters">
          <img src={characters} alt="" />
        </div>
      </div>
    </section>
  );
}

function AboutPage() {
  return (
    <section className="about">
      <h1>ABOUT PROJECT</h1>

      <div className="about-content">
        <div className="about-left">
          <p className="about-main">
            Sex Ed. Labyrinth focuses on providing sexual education to young
            people aged between <span>13–19 years old</span> in Estonia, Albania,
            Moldova, Ukraine, and Lithuania. The project aims to help
            teenagers prevent major mistakes in their first sexual
            experiences, show them how to create their own constitution
            regarding what other people are allowed and not allowed to do
            to them, and help them understand that they have their own
            rights and perspectives.
          </p>

          <div className="dots">
            <span className="dot purple-dot"></span>
            <span className="dot green-dot"></span>
          </div>

          <p>
            The project takes the form of an engaging game that provides comprehensive sexual
            education in a fun and interactive way.
          </p>

          <p>
            The primary objectives of the project are to empower young people to make informed
            choices about their sexual health and wellbeing.
          </p>

          <p>
            We believe that this project will play an important role in promoting sexual education
            and wellbeing among young people.
          </p>
        </div>

        <div className="about-right">
          <img src={aboutRight} alt="" />
        </div>
      </div>
    </section>
  );
}
function AuthorsPage() {
  const authors = [
    { name: "Kseniya", img: "/authors/kseniya.png", top: "70px", delay: "0s" },
    { name: "Mădălina", img: "/authors/madalina.png", top: "70px", delay: "-5s" },
    { name: "Ingrid", img: "/authors/ingrid.png", top: "70px", delay: "-10s" },

    { name: "Asya", img: "/authors/asya.png", top: "160px", delay: "-3s" },
    { name: "Leonid", img: "/authors/leonid.png", top: "160px", delay: "-8s" },

    { name: "Xheni", img: "/authors/xheni.png", top: "250px", delay: "-6s" },

    { name: "Diana", img: "/authors/diana.png", top: "340px", delay: "-2s" },
    { name: "Kornelija", img: "/authors/kornelija.png", top: "340px", delay: "-9s" },
  ];

  return (
    <section className="authors-page">
      <h1>AUTHORS</h1>

      <div className="authors-field">
        {authors.map((author) => (
          <div
            className="author-item"
            key={author.name}
            style={{
              top: author.top,
              animationDelay: author.delay,
            }}
          >
            <img src={author.img} alt={author.name} />
            <span>{author.name}</span>
          </div>
        ))}
      </div>

      <div className="mentors">
        <span className="mentors-title">Mentors</span>

        <div className="mentor">
          <img src="/authors/daria.png" alt="Daria" />
          <span>Daria</span>
        </div>

        <div className="mentor">
          <img src="/authors/arminas.png" alt="Arminas" />
          <span>Arminas</span>
        </div>
      </div>
    </section>
  );
}

function BoundariesPage() {
const [items, setItems] = useState([
  {
    id: 1,
    text: "initiating/having sex while or after using alcohol/recreational drugs",
    side: "acceptable",
  },
  {
    id: 2,
    text: "sharing passwords with a partner",
    side: "acceptable",
  },
  {
    id: 3,
    text: "kissing in public",
    side: "acceptable",
  },
  {
    id: 4,
    text: "getting tested for STIs before sex with a partner",
    side: "acceptable",
  },
  {
    id: 5,
    text: "having unprotected sex",
    side: "acceptable",
  },
  {
    id: 6,
    text: "sending nude photos",
    side: "acceptable",
  },
  {
    id: 7,
    text: "following sex work related creators online",
    side: "unacceptable",
  },
  {
    id: 8,
    text: "using sex toys with a partner",
    side: "unacceptable",
  },
  {
    id: 9,
    text: "family or co-workers about my sex life",
    side: "unacceptable",
  },
  {
    id: 10,
    text: "posting about the relationship publicly",
    side: "unacceptable",
  },
]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newBoundary, setNewBoundary] = useState("");
  const [draggingId, setDraggingId] = useState(null);



function handleDragStart(e, id) {
  e.dataTransfer.setData("boundaryId", id);
  e.dataTransfer.effectAllowed = "move";

  const ghost = e.currentTarget.cloneNode(true);

  ghost.classList.remove("dragging-pill");
  ghost.style.position = "fixed";
  ghost.style.left = "-1000px";
  ghost.style.top = "-1000px";
  ghost.style.opacity = "1";
  ghost.style.boxShadow = "none";
  ghost.style.borderRadius = "28px";
  ghost.style.pointerEvents = "none";

  document.body.appendChild(ghost);

  e.dataTransfer.setDragImage(
    ghost,
    ghost.offsetWidth / 2,
    ghost.offsetHeight / 2
  );

  setTimeout(() => {
    setDraggingId(id);
  }, 0);

  setTimeout(() => {
    document.body.removeChild(ghost);
  }, 100);
}
function handleDragEnd() {
  setDraggingId(null);
}
function handleDrop(e, side) {
  e.preventDefault();

  const id = Number(e.dataTransfer.getData("boundaryId"));

  setItems((prev) =>
    prev.map((item) =>
      item.id === id ? { ...item, side } : item
    )
  );

  setDraggingId(null);
}
function selectBoundary(id) {
  setItems((prev) =>
    prev.map((item) =>
      item.id === id ? { ...item, side: "middle" } : item
    )
  );
}

  function addBoundary() {
    if (newBoundary.trim() === "") return;

    setItems((prev) => [
      ...prev,
      {
        id: Date.now(),
        text: newBoundary,
        side: "middle",
      },
    ]);

    setNewBoundary("");
    setIsModalOpen(false);
  }

  const acceptableCount = items.filter((item) => item.side === "acceptable").length;
  const unacceptableCount = items.filter((item) => item.side === "unacceptable").length;

  return (
    <section className="boundaries">
      <h1>DEFINE YOUR<br />BOUNDARIES</h1>

      <p className="boundaries-text">
        Our boundaries are our own and we all have the right to decide where they end and begin.
        Use this tool to explore what is acceptable to you, and what is unacceptable by dragging
        the provided text boxes into the column where you feel they best belong.
      </p>

      <div className="boundary-head">
        <div className="head-left">✓ ACCEPTABLE <span>{acceptableCount}</span></div>
        <div className="head-right">✕ UNACCEPTABLE <span>{unacceptableCount}</span></div>
      </div>
<div className="mobile-acceptable">
  ✓ ACCEPTABLE <span>{acceptableCount}</span>
</div>
     <div className="drop-area">
  <div
    className="drop-zone acceptable-zone"
    onDragOver={(e) => e.preventDefault()}
    onDrop={(e) => handleDrop(e, "acceptable")}
  >
    {items
      .filter((item) => item.side === "acceptable")
      .map((item) => (
        <div
  key={item.id}
  className={`pill green-pill ${draggingId === item.id ? "dragging-pill" : ""}`}
  draggable
  onDragStart={(e) => handleDragStart(e, item.id)}
  onDragEnd={handleDragEnd}
  onClick={() => selectBoundary(item.id)}
>
  {item.text}
</div>
      ))}
  </div>
        <div className="middle-zone">
  {items
    .filter((item) => item.side === "middle")
    .map((item) => (
      <div key={item.id} className="middle-pill">
        <span>{item.text}</span>

        <button
          className="middle-arrow middle-arrow-left"
          onClick={() =>
            setItems((prev) =>
              prev.map((el) =>
                el.id === item.id ? { ...el, side: "acceptable" } : el
              )
            )
          }
        >
          ←
        </button>

        <button
          className="middle-arrow middle-arrow-right"
          onClick={() =>
            setItems((prev) =>
              prev.map((el) =>
                el.id === item.id ? { ...el, side: "unacceptable" } : el
              )
            )
          }
        >
          →
        </button>
      </div>
    ))}
</div>
        <button className="center-circle" onClick={() => setIsModalOpen(true)}>
  <span>+</span>
</button>

        <div
          className="drop-zone unacceptable-zone"
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => handleDrop(e, "unacceptable")}
        >
          {items
            .filter((item) => item.side === "unacceptable")
            .map((item) => (
              <div
  key={item.id}
  className={`pill purple-pill ${draggingId === item.id ? "dragging-pill" : ""}`}
  draggable
  onDragStart={(e) => handleDragStart(e, item.id)}
  onDragEnd={handleDragEnd}
  onClick={() => selectBoundary(item.id)}
>
  {item.text}
</div>
            ))}
        </div>
      </div>
<div className="mobile-unacceptable">
  ✕ UNACCEPTABLE <span>{unacceptableCount}</span>
</div>
      <div className="boundary-buttons">
        <button>SAVE PDF</button>
        <button>SHARE</button>
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="boundary-modal">
            <button className="modal-close" onClick={() => setIsModalOpen(false)}>
              ×
            </button>

            <h2>Create your boundaries</h2>

            <div className="modal-input-wrap">
              <input
                value={newBoundary}
                onChange={(e) => setNewBoundary(e.target.value)}
                maxLength={250}
                placeholder="Write your boundary"
              />

              <span className="counter">{newBoundary.length}/250</span>

              <button className="add-btn" onClick={addBoundary}>
                ADD
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
export default function App() {
  const [page, setPage] = useState("home");
  const [isAdviceOpen, setIsAdviceOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <main className={`page ${page === "about" ? "about-page" : ""}`}>
<Header
  setPage={setPage}
  setIsAdviceOpen={setIsAdviceOpen}
  setIsLangOpen={setIsLangOpen}
  setIsMenuOpen={setIsMenuOpen}
/>      {page === "home" && <HomePage />}
      {page === "about" && <AboutPage />}
      {page === "authors" && <AuthorsPage />}
      {page === "boundaries" && <BoundariesPage />}
      {isAdviceOpen && (
  <div className="advice-overlay" onClick={() => setIsAdviceOpen(false)}>
    <div className="advice-modal" onClick={(e) => e.stopPropagation()}>
      <button className="advice-close" onClick={() => setIsAdviceOpen(false)}>
        ×
      </button>

      <div className="advice-header">
        <img
  src="/icons/advice-icon.svg"
  alt="Advice"
  className="advice-icon"
/>
        <h2>Psychologist’s advice</h2>
      </div>

      <p>
        It is always hard to say ‘no’ to your loved-ones. Especially when they try
        to convince you that you’re offending them or you make them hurt. However,
        it is important to remember about yourself and your personal boundaries.
        As we see through psychological experience, it usually ends badly when you
        try to forget about yourself in any kind of relationship. I am so glad that
        Anna stood for herself in the end. And you should remember that you have
        every right to protect your interests when you feel pushed into something
        or even violated. ‘No’ is a perfect weapon for it.
      </p>
    </div>
  </div>
  
)}
{isLangOpen && (
  <div className="lang-overlay">
    <div className="lang-modal">
      <button className="lang-close" onClick={() => setIsLangOpen(false)}>
        ×
      </button>

      <button
  className="lang-logo"
  onClick={() => {
    setPage("home");
    setIsLangOpen(false);
  }}
>
  <img src={logo} alt="Labyrinth" />
</button>

      <div className="lang-scribble">
  <img
    src="/icons/scribble.svg"
    alt=""
  />
</div>

      <div className="lang-list">
        <button className="active">ENG</button>
        <button>EST</button>
        <button>RUM</button>
        <button>LIT</button>
        <button>UKR</button>
        <button>ALB</button>
      </div>
    </div>
  </div>
)}
{isMenuOpen && (
  <div className="mobile-menu">
    <button className="mobile-menu-close" onClick={() => setIsMenuOpen(false)}>
      ×
    </button>

    <img className="mobile-menu-scribble" src="/icons/scribble.svg" alt="" />

    <div className="mobile-menu-links">
      <button onClick={() => { setPage("about"); setIsMenuOpen(false); }}>
        About Project
      </button>

      <button onClick={() => { setPage("authors"); setIsMenuOpen(false); }}>
        Authors
      </button>

      <button onClick={() => { setPage("boundaries"); setIsMenuOpen(false); }}>
        Define your boundaries
      </button>

      <button onClick={() => { setIsAdviceOpen(true); setIsMenuOpen(false); }}>
        Psychologist&apos;s Advice
      </button>
    </div>
  </div>
)}
    </main>
  );
}