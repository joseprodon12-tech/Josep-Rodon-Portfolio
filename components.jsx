/* AYMA / Josep Rodon — portfolio components */
const { useState, useEffect, useMemo, useRef, useCallback } = React;

/* Quantes pantalles de scroll costa fer entrar el strip de projectes al home.
   Si es canvia, cal canviar també l'alçada de .home-stage a app.css
   (ha de ser 100vh de hero + HOME_ENTER_VH × 100vh de recorregut). */
const HOME_ENTER_VH = 1.6;

/* Suavitat de l'entrada: com més petit, més lliscada i més endarrerida
   respecte de la roda del ratolí (0.10 ≈ el mateix tacte que el scroll
   horitzontal del strip). */
const HOME_ENTER_EASE = 0.09;

/* Imatge fixa del home (fons sobre el qual entren els projectes).
   Ordinador: la composició apaïsada, a sang.
   Mòbil: la mateixa fotografia retallada en vertical; el text el remunta
   el CSS a sobre (.mobile-hero-type), així encaixa a qualsevol pantalla. */
const HOME_STILL_SRC = "assets/home-desktop.jpg";
const HOME_STILL_MOBILE_SRC = "assets/home-mobile.jpg";

/* Durada de l'obertura del menú quan es clica la fletxa "Click Here!" */
const HOME_REVEAL_MS = 1000;

/* Mòbil: franja inferior on fan cua els projectes que vénen (fracció de
   pantalla) i quantes tires s'hi veuen alhora. */
const MOBILE_BAND = 0.16;
const MOBILE_QUEUE = 4;

/* Quina part del recorregut de cada projecte és pujada i quina és aturada
   a la línia del header (0.5 = mitja pantalla pujant, mitja aturat). */
const MOBILE_RISE = 0.5;

/* On seu el títol dins de la targeta (fracció d'alçada). Prou avall perquè
   no entri mai al header i perquè, en desplegar-se, aparegui al centre de
   la imatge, que és on estàs mirant. El CSS ho llegeix de --title-top. */
const MOBILE_TITLE_TOP = 0.38;

/* Pantalla d'inici del mòbil: quina part ocupa l'avançament de projectes
   i quants se'n veuen apilats. */
const MOBILE_HOME_STACK = 0.40;
const MOBILE_HOME_QUEUE = 4;

/* Prova: als N primers projectes les lletres inverteixen el color del fons
   en comptes de ser blanques. Posa-ho a 0 per treure-ho o a 99 per a tots. */
const MOBILE_INVERT_FIRST = 5;

/* ============== AVA Mark ============== */
function AvaMark({ fill = "currentColor", accent }) {
  return (
    <img className="ava" src="assets/logo.png" alt="Logo" style={{ objectFit: "contain" }} />);

}

/* ============== Live clock ============== */
function Clock() {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  const hh = String(now.getHours()).padStart(2, "0");
  const mm = String(now.getMinutes()).padStart(2, "0");
  const ss = String(now.getSeconds()).padStart(2, "0");
  return (
    <div className="clock">
      <span className="tabular">{hh}:{mm}:{ss}</span>
    </div>);

}

/* ============== Top nav (logo fixed separate, text difference blend) ============== */
function Nav({ page, onNav, lang, accentYellow, onMenu }) {
  const s = window.STRINGS[lang];
  return (
    <>
      <button className="nav-logo-fixed" onClick={() => onNav("home")} aria-label="Home">
        <AvaMark accent={accentYellow ? "var(--accent-yellow)" : "currentColor"} />
      </button>
      <header className="nav">
        <div className="nav-left">
          <span className="nav-logo-spacer" />
          <button className="nav-brand-text" onClick={() => onNav("home")} style={{ background: "none", border: 0, padding: 0, font: "inherit", color: "inherit", cursor: "pointer" }}>
            <span className="slash">/</span>
            <span className="name" style={{ fontWeight: "700", fontFamily: "\"DM Sans\"", textTransform: "none", letterSpacing: "-0.05em", fontSize: "33px" }}>Josep Rodon</span>
          </button>
        </div>
        <span className="nav-line" aria-hidden="true" />
        <div className="nav-right">
          <nav className="nav-links">
            <button className={`nav-link ${page === "home" ? "is-active" : ""}`} onClick={() => onNav("home")}>{s.nav.home}</button>
            <button className={`nav-link ${page === "about" ? "is-active" : ""}`} onClick={() => onNav("about")}>{s.nav.about}</button>
          </nav>
          <button className="nav-link" onClick={onMenu} style={{ paddingLeft: 10, borderLeft: "1px solid currentColor", opacity: 1 }}>Menu</button>
        </div>
      </header>
    </>);

}

/* ============== Homepage — hero carousel ============== */
function HeroCarousel({ projects, onOpen, lang, onNav, paused = false }) {
  const [idx, setIdx] = useState(0);
  const [leaving, setLeaving] = useState(-1);
  const s = window.STRINGS[lang];
  const p = projects[idx];

  const go = useCallback((dir) => {
    setLeaving(idx);
    setIdx((i) => (i + dir + projects.length) % projects.length);
  }, [idx, projects.length]);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => go(1), 2000);
    return () => clearInterval(id);
  }, [go, paused]);

  useEffect(() => {
    if (paused) return;
    const onKey = (e) => {
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
      if (e.key === "Enter") onOpen(p.id);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, onOpen, p.id, paused]);

  return (
    <>
      <section className="home-hero" data-over="dark" onClick={() => onOpen(p.id)}>
        {projects.map((pr, i) =>
        <img
          key={pr.id + i}
          className={`home-hero-img ${i === idx ? "is-active" : i === leaving ? "is-leaving" : "is-pending"}`}
          src={pr.cover}
          alt={pr.title} />

        )}
        <button
          className="home-arrow left"
          onClick={(e) => {e.stopPropagation();go(-1);}}
          aria-label="Previous">
          ‹</button>
        <button
          className="home-arrow right"
          onClick={(e) => {e.stopPropagation();go(1);}}
          aria-label="Next">
          ›</button>
        <div className="home-pager">
          {projects.map((pr, i) =>
          <button
            key={pr.id + i}
            className={i === idx ? "is-active" : ""}
            onClick={(e) => {e.stopPropagation();setLeaving(idx);setIdx(i);}}
            aria-label={`Go to ${pr.title}`} />

          )}
        </div>
        <div className="home-caption">
          <h1 className="home-caption-title">{p.title}</h1>
          <div className="home-caption-meta">
            <span className="label">{p.num} · {p.category[lang]}</span>
            <span className="tabular">{p.date}</span>
            <span className="label" style={{ marginTop: 8, opacity: 0.55 }}>{s.home_press_enter} →</span>
          </div>
        </div>
      </section>
    </>);

}

/* ============== Homepage — imatge fixa de fons ============== */
function HeroStill({ onReveal, lang }) {
  return (
    <section className="home-hero home-hero-still" data-over="dark">
      <img className="home-hero-img is-active" src={HOME_STILL_SRC} alt="Josep Rodon" />
      {onReveal &&
      <button
        className="home-still-open"
        onClick={onReveal}
        aria-label={lang === "en" ? "See projects" : "Veure projectes"} />
      }
    </section>);

}

/* ============== Homepage — hero + strip de projectes en un sol scroll ==============
   El hero ocupa tota la pantalla. En fer scroll, el strip de projectes entra des de
   la dreta fins a omplir-la; llavors apareix l'índex fixat a l'esquerra i el scroll
   passa a ser horitzontal. Pujant, tot torna enrere i es recupera el hero.        */
function HomeStage({ projects, onOpen, lang, onNav }) {
  const [enter, setEnter] = useState(0); // 0 = només hero · 1 = strip del tot dins
  const targetRef = useRef(0);   // on vol arribar el scroll
  const currentRef = useRef(0);  // on és ara el strip
  const rafRef = useRef(null);
  const revealingRef = useRef(false); // animació del "Click Here!" en marxa

  // El scroll marca un objectiu; el strip hi va lliscant, no hi salta.
  useEffect(() => {
    const readTarget = () => {
      const runway = window.innerHeight * HOME_ENTER_VH;
      // Si ja som al final de la pàgina, el strip és dins encara que
      // l'arrodoniment del navegador deixi el càlcul una mica curt.
      const atBottom =
        window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;
      targetRef.current =
        runway <= 0 || atBottom ? 1 : Math.min(1, Math.max(0, window.scrollY / runway));
    };

    const step = () => {
      if (revealingRef.current) { rafRef.current = null; return; }
      const diff = targetRef.current - currentRef.current;
      if (Math.abs(diff) < 0.0008) {
        currentRef.current = targetRef.current;
        setEnter(currentRef.current);
        rafRef.current = null;
        return;
      }
      currentRef.current += diff * HOME_ENTER_EASE;
      setEnter(currentRef.current);
      rafRef.current = requestAnimationFrame(step);
    };

    const onScroll = () => {
      readTarget();
      if (!revealingRef.current && rafRef.current === null) rafRef.current = requestAnimationFrame(step);
    };

    readTarget();
    currentRef.current = targetRef.current;
    setEnter(currentRef.current);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  /* "Click Here!": obre el menú sencer amb la mateixa entrada lateral,
     en 1 segon exacte, i deixa el scroll al lloc que li tocaria. */
  const reveal = useCallback(() => {
    if (revealingRef.current || currentRef.current > 0.98) return;
    revealingRef.current = true;
    if (rafRef.current) { cancelAnimationFrame(rafRef.current); rafRef.current = null; }
    const from = currentRef.current;
    const t0 = performance.now();
    const tick = (t) => {
      const k = Math.min(1, (t - t0) / HOME_REVEAL_MS);
      const eased = 1 - Math.pow(1 - k, 3); // frena al final
      currentRef.current = from + (1 - from) * eased;
      setEnter(currentRef.current);
      if (k < 1) { requestAnimationFrame(tick); return; }
      // Sincronitzem el scroll amb l'estat final, sense tornar a animar
      currentRef.current = 1;
      targetRef.current = 1;
      revealingRef.current = false;
      window.scrollTo(0, window.innerHeight * HOME_ENTER_VH);
    };
    requestAnimationFrame(tick);
  }, []);

  const locked = enter > 0.98;

  return (
    <div className="home-stage">
      <div className="home-stage-sticky">
        <div
          className="home-stage-hero"
          style={{ pointerEvents: enter > 0.15 ? "none" : "auto" }}>
          <HeroStill onReveal={reveal} lang={lang} />
        </div>
        <div
          className="home-stage-strip"
          style={{ transform: `translate3d(${(1 - enter) * 100}%,0,0)` }}>
          <StripMenu onOpen={onOpen} lang={lang} onNav={onNav} embedded locked={locked} />
        </div>
      </div>
    </div>);

}

/* ============== Homepage — sparse variant ============== */
function HomeSparse({ onNav, lang }) {
  const s = window.STRINGS[lang];
  return (
    <section className="home-sparse" data-over="light">
      <h1 className="home-sparse-title">
        Josep<br />Rodon — <em>{lang === "ca" ? "disseny espacial" : "spatial design"}</em>
      </h1>
      <div className="home-sparse-side">
        <p className="lead">{s.home_about_text}</p>
        <p className="lead" style={{ color: "var(--fg-muted)" }}>{s.home_subtitle}</p>
        <div className="meta">
          <button className="nav-link" onClick={() => onNav("menu")} style={{ borderBottom: "1px solid currentColor", paddingBottom: 2, opacity: 1 }}>
            → {s.selected_works}
          </button>
        </div>
      </div>
    </section>);

}

/* ============== Menu — photo grid ============== */
function MenuGrid({ onOpen, lang, layout }) {
  const s = window.STRINGS[lang];
  const allTiles = window.MENU_TILES;
  const [filter, setFilter] = useState(0);

  const filterKey = window.FILTER_KEYS[filter];
  const tiles = filterKey === "all" ? allTiles : allTiles.filter(t => t.filter === filterKey);
  const projects = filterKey === "all" ? window.PROJECTS : window.PROJECTS.filter(p => p.filter === filterKey);

  return (
    <div className="menu-page" data-over="light">
      <div className="menu-head">
        <div className="eyebrow">{s.menu_eyebrow} / {tiles.length}</div>
        <div className="filters">
          {s.menu_filters.map((f, i) =>
          <button key={f} className={i === filter ? "is-active" : ""} onClick={() => setFilter(i)}>{f}</button>
          )}
        </div>
        <div className="count tabular">2024 — 2026</div>
      </div>

      {layout === "grid" &&
      <div className="menu-grid">
          {tiles.map((t, i) =>
        <button key={i} className={`menu-tile ${t.size}`} onClick={() => onOpen(t.id)}>
              <img src={t.img} alt={t.title} />
              <div className="menu-tile-caption">
                <span>{t.title}</span>
                <span className="tabular">{t.date}</span>
              </div>
            </button>
        )}
        </div>
      }

      {layout === "list" &&
      <ul className="menu-list">
          {projects.map((p) =>
        <li key={p.id} className="menu-list-row" onClick={() => onOpen(p.id)}>
              <span className="num">{p.num}</span>
              <span className="title">{p.title}</span>
              <span className="cat">{p.category[lang]}</span>
              <span className="date tabular">{p.date}</span>
              <span className="arr">→</span>
            </li>
        )}
        </ul>
      }

      {layout === "columns" &&
      <ColumnsMenu tiles={tiles} onOpen={onOpen} />
      }
    </div>);

}

/* ============== Project detail ============== */
function ProjectDetail({ project, onOpen, onBack, lang }) {
  const s = window.STRINGS[lang];
  const idx = window.PROJECTS.findIndex((p) => p.id === project.id);
  const next = window.PROJECTS[(idx + 1) % window.PROJECTS.length];

  return (
    <article className="proj-page" data-over="light">
      <div className="proj-meta-bar">
        <span className="num">{project.num}</span>
        <span className="title-cell">
          {project.title}
        </span>
        <span className="institution">{project.institution[lang]}</span>
        <span className="date tabular">{project.date}</span>
      </div>

      <button className="proj-back-mobile" onClick={onBack}>← {s.back}</button>

      <div className="proj-hero" data-over="dark">
        <img src={project.cover} alt={project.title} />
        <button className="proj-hero-back" onClick={onBack}>← {s.back}</button>
        <button className="proj-hero-next" onClick={() => { onOpen(next.id); window.scrollTo({ top: 0 }); }}>
          {next.title} →
        </button>
      </div>

      <section className="proj-intro">
        <div className="col-num">{project.num}</div>
        <div>
          <h1>{project.title}</h1>
          <p>{project.blurb[lang]}</p>
          <p>{project.body[lang]}</p>
        </div>
        <div className="proj-sheet">
          <div className="proj-sheet-row"><span className="proj-sheet-k">{lang === "ca" ? "Tipologia" : "Type"}</span><span className="proj-sheet-v">{project.category[lang]}</span></div>
          <div className="proj-sheet-row"><span className="proj-sheet-k">{lang === "ca" ? "Lloc" : "Location"}</span><span className="proj-sheet-v">{project.location[lang]}</span></div>
          <div className="proj-sheet-row"><span className="proj-sheet-k">{lang === "ca" ? "Data" : "Date"}</span><span className="proj-sheet-v tabular">{project.date}</span></div>
          <div className="proj-sheet-row"><span className="proj-sheet-k">{lang === "ca" ? "Rol" : "Role"}</span><span className="proj-sheet-v">{project.role[lang]}</span></div>
          {project.collaborators &&
          <div className="proj-sheet-row"><span className="proj-sheet-k">{lang === "ca" ? "Col·laboradors" : "Collaborators"}</span><span className="proj-sheet-v"><em>{project.collaborators[lang]}</em></span></div>
          }
          {project.coordinator &&
          <div className="proj-sheet-row"><span className="proj-sheet-k">{lang === "ca" ? "Coordinació" : "Coordinator"}</span><span className="proj-sheet-v"><em>{project.coordinator}</em></span></div>
          }
          <div className="proj-sheet-row"><span className="proj-sheet-k">{lang === "ca" ? "Institució" : "Institution"}</span><span className="proj-sheet-v">{project.institution[lang]}</span></div>
          {project.materials &&
          <div className="proj-sheet-row"><span className="proj-sheet-k">{lang === "ca" ? "Materials" : "Materials"}</span><span className="proj-sheet-v">{project.materials[lang]}</span></div>
          }
          {project.dimensions &&
          <div className="proj-sheet-row"><span className="proj-sheet-k">{lang === "ca" ? "Dimensions" : "Dimensions"}</span><span className="proj-sheet-v tabular">{project.dimensions}</span></div>
          }
        </div>
      </section>

      <section className="proj-body">
        {project.images.map((im, i) => {
          const cls = {
            full: "f-full", "half-l": "f-half-l", "half-r": "f-half-r",
            "third-l": "f-third-l", "third-c": "f-third-c", "third-r": "f-third-r",
            plan: "f-plan", ref: "f-ref"
          }[im.layout] || "f-full";
          return (
            <figure key={i} className={cls}>
              {im.type === "video"
                ? <video src={im.src} autoPlay loop muted playsInline style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                : <img src={im.src} alt="" />}
              <figcaption>
                <span>{im.caption[lang]}</span>
                <span className="tabular">{project.num}.{String(i + 1).padStart(2, "0")}</span>
              </figcaption>
            </figure>);

        })}
      </section>

      <footer className="proj-footer">
        <div className="proj-footer-cell" onClick={onBack}>
          <span className="label">← {s.back}</span>
          <span className="ttl">{s.selected_works}</span>
        </div>
        <div className="proj-footer-cell right" onClick={() => {onOpen(next.id);window.scrollTo({ top: 0 });}}>
          <span className="label">{s.next} {next.num} →</span>
          <span className="ttl">{next.title}</span>
        </div>
      </footer>
    </article>);

}

/* ============== About ============== */
function About({ lang }) {
  const s = window.STRINGS[lang];
  return (
    <section className="about-page" data-over="light">
      <div className="col-num">0.0</div>
      <div>
        <h1>
          {lang === "ca" ?
          <>Josep Rodon — <em>disseny espacial</em>, interiors i direcció artística.</> :
          <>Josep Rodon — <em>spatial design</em>, interiors and art direction.</>}
        </h1>
        <p>{s.about_text_1}</p>
        <p>{lang === "ca"
          ? <>AYMA Studio és el meu espai de recerca i projectes: un reflex del camí que estic construint com a dissenyador. Disponible per <strong>col·laboracions i encàrrecs</strong>.</>
          : <>AYMA Studio is my space for research and projects: a reflection of the path I am building as a designer. Available for <strong>collaborations and commissions</strong>.</>
        }</p>
      </div>
      <div className="about-side">
        <div className="about-block">
          <span className="eyebrow">{s.contact}</span>
          <ul>
            <li><a href="mailto:joseprodon12@gmail.com">joseprodon12@gmail.com</a></li>
            <li className="tabular">+34 620 925 416</li>
          </ul>
        </div>
        <div className="about-block">
          <span className="eyebrow">{s.elsewhere}</span>
          <ul>
            <li><a href="https://www.instagram.com/joseprodon_" target="_blank">@joseprodon_</a></li>
            <li><a href="https://www.instagram.com/ayma.std" target="_blank">@ayma.std</a></li>
          </ul>
        </div>
        <div className="about-block">
          <span className="eyebrow">{s.info}</span>
          <ul>
            <li style={{ color: "var(--fg-muted)" }}>CV · PDF ({lang === "ca" ? "sota petició" : "on request"})</li>
            <li style={{ color: "var(--fg-muted)" }}>© 2026 Josep Rodon</li>
          </ul>
        </div>
      </div>
    </section>);

}

/* ============== Full-screen menu overlay ============== */
function MenuOverlay({ open, onClose, onOpen, onNav, lang }) {
  const [hover, setHover] = useState(window.PROJECTS[0]);
  const [hoverAbout, setHoverAbout] = useState(false);
  if (!open) return null;
  const s = window.STRINGS[lang];
  return (
    <div className="menu-overlay" role="dialog" aria-modal="true">
      <button className="menu-overlay-close" onClick={onClose}>Close ✕</button>
      <nav>
        <button onClick={() => {onNav("home");onClose();}}><span className="num">—</span>{s.nav.home}</button>
        {window.PROJECTS.map((p) =>
        <button
          key={p.id}
          onMouseEnter={() => { setHover(p); setHoverAbout(false); }}
          onClick={() => {onOpen(p.id);onClose();}}>

            <span className="num">{p.num}</span>{p.title}
          </button>
        )}
        <button
          onClick={() => {onNav("about");onClose();}}
          onMouseEnter={() => setHoverAbout(true)}
          onMouseLeave={() => setHoverAbout(false)}>
          <span className="num">0.0</span>{s.nav.about}
        </button>
      </nav>
      <aside>
        {hoverAbout
          ? <div className="about-preview-text">
              {lang === "ca"
                ? <>Josep Rodon — <em>disseny espacial</em>, interiors i direcció artística.</>
                : <>Josep Rodon — <em>spatial design</em>, interiors and art direction.</>}
            </div>
          : <div className="preview">{hover && <img src={hover.cover} alt={hover.title} />}</div>
        }
        <div>
          {!hoverAbout && <>
            <div>{hover?.title}</div>
            <div style={{ marginTop: 6, color: "var(--fg-muted)" }}>{hover?.category[lang]} · {hover?.date}</div>
          </>}
        </div>
      </aside>
    </div>);

}

/* ============== Columns menu (4-col + center hover preview) ============== */
function ColumnsMenu({ tiles, onOpen }) {
  const [hover, setHover] = useState(null);
  const cols = [[], [], [], []];
  tiles.forEach((t, i) => cols[i % 4].push(t));
  return (
    <div className="menu-cols-wrap">
      <div className="menu-cols">
        {cols.map((items, col) =>
        <div key={col} className="menu-cols-col">
            {items.map((t, i) =>
          <div
            key={i}
            className="menu-cols-row"
            onClick={() => onOpen(t.id)}
            onMouseEnter={() => setHover(t)}
            onMouseLeave={() => setHover((h) => h === t ? null : h)}>
            
                <div className="thumb"><img src={t.img} alt="" style={{ margin: "0px", padding: "0px" }} /></div>
                <div className="row-meta">
                  <span className="lbl">{t.title}</span>
                  <span className="meta tabular">{t.date}</span>
                </div>
              </div>
          )}
          </div>
        )}
      </div>
      <div className={`menu-cols-preview ${hover ? "is-on" : ""}`} aria-hidden="true">
        {hover &&
        <figure>
            <img src={hover.img} alt="" />
            <figcaption>
              <span>{hover.title}</span>
              <span className="tabular">{hover.date}</span>
            </figcaption>
          </figure>
        }
      </div>
    </div>);

}

/* ============== Strip menu — portades en horitzontal ============== */
const STRIP_FILTERS = [
  { key: "all",        ca: "Tots",         en: "All" },
  { key: "espais",     ca: "Espais",       en: "Spaces" },
  { key: "renders",    ca: "Renders 3D",   en: "3D Renders" },
  { key: "instalacio", ca: "Instal·lació", en: "Installation" },
  { key: "recerca",    ca: "Recerca",      en: "Research" },
];

/* Posició horitzontal del strip: es recorda entre visites, perquè en
   tornar d'un projecte no comenci de zero. */
let STRIP_SCROLL_X = 0;

function StripMenu({ onOpen, lang, onNav, embedded = false, locked = true }) {
  const wrapRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const [focusedId, setFocusedId] = useState(null);

  const filtered = activeFilter === "all"
    ? window.PROJECTS
    : window.PROJECTS.filter(p => p.filter === activeFilter);

  const focusedProject = focusedId ? window.PROJECTS.find(p => p.id === focusedId) : null;
  const focusedIdx = focusedId ? window.PROJECTS.findIndex(p => p.id === focusedId) : -1;
  const nextFocused = focusedIdx >= 0 ? window.PROJECTS[(focusedIdx + 1) % window.PROJECTS.length] : null;

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    let targetX = el.scrollLeft;
    let rafId = null;
    // La posició es recupera un fotograma després: en muntar-se, la fila
    // encara no té amplada i el navegador la retallaria a zero.
    if (STRIP_SCROLL_X > 0) {
      requestAnimationFrame(() => {
        el.scrollLeft = STRIP_SCROLL_X;
        targetX = el.scrollLeft;
      });
    }
    const MIN_PAS = 1.5;
    const step = () => {
      const diff = targetX - el.scrollLeft;
      // El llindar d'aturada ha de ser més gran que el pas mínim: si no,
      // el bucle es passa de llarg i torna enrere sense parar (vibració).
      if (Math.abs(diff) <= MIN_PAS) { el.scrollLeft = targetX; STRIP_SCROLL_X = targetX; rafId = null; return; }
      const move = diff * 0.10;
      el.scrollLeft += Math.abs(move) < MIN_PAS ? Math.sign(move) * MIN_PAS : move;
      STRIP_SCROLL_X = el.scrollLeft;
      rafId = requestAnimationFrame(step);
    };
    const onWheel = (e) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
      // Mentre el strip encara entra des de la dreta, el scroll és de la pàgina.
      if (!locked) return;
      // Ja al principi del strip i pujant: retornem el scroll a la pàgina,
      // perquè el strip pugui tornar a sortir i es vegi el hero.
      if (e.deltaY < 0 && el.scrollLeft <= 0 && targetX <= 0) return;
      e.preventDefault();
      const multiplier = e.deltaMode === 1 ? 30 : e.deltaMode === 2 ? 300 : 1;
      targetX = Math.max(0, Math.min(targetX + e.deltaY * multiplier, el.scrollWidth - el.clientWidth));
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(step);
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      el.removeEventListener("wheel", onWheel);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [locked]);

  const scrollPage = () => {
    const el = wrapRef.current;
    if (!el) return;
    el.scrollBy({ left: el.clientWidth, behavior: "smooth" });
  };

  return (
    <>
      <aside className={`strip-index-panel${embedded ? " is-embedded" : ""}${locked ? " is-in" : ""}`}>
        <div className="strip-index-top">
          <span className="strip-index-eyebrow">Projectes</span>
          <nav className="strip-index-nav">
            {STRIP_FILTERS.map(f => (
              <button
                key={f.key}
                className={activeFilter === f.key ? "is-active" : ""}
                onClick={() => { setActiveFilter(f.key); setFocusedId(null); }}
              >{f[lang] || f.ca}</button>
            ))}
          </nav>
        </div>
        <div className="strip-index-projects">
          {window.PROJECTS.map(p => (
            <button
              key={p.id}
              className={focusedId === p.id ? "is-active" : ""}
              onClick={() => setFocusedId(p.id)}
            >{p.title}</button>
          ))}
        </div>
      </aside>

      {focusedProject && (
        <div className="strip-focused-view" onClick={() => onOpen(focusedProject.id)}>
          <img src={focusedProject.cover} alt={focusedProject.title} />
          <div className="strip-focused-info">
            <span className="strip-focused-num">{focusedProject.num}</span>
            <h2 className="strip-focused-title">{focusedProject.title}</h2>
            <span className="strip-focused-cat">{focusedProject.category[lang]}</span>
            <span className="strip-focused-cta">{lang === "ca" ? "Veure projecte →" : "View project →"}</span>
          </div>
          {nextFocused && (
            <button
              className="strip-focused-next"
              onClick={(e) => { e.stopPropagation(); setFocusedId(nextFocused.id); }}
            >{nextFocused.title} →</button>
          )}
          <button
            className="strip-focused-close"
            onClick={(e) => { e.stopPropagation(); setFocusedId(null); }}
          >✕</button>
        </div>
      )}

      <div className={`menu-strip-wrap${embedded ? " is-embedded" : ""}`} ref={wrapRef} style={{ display: focusedProject ? "none" : "flex" }}>
        {filtered.map((p) => (
          <div key={p.id} className="menu-strip-item" data-id={p.id} onClick={() => onOpen(p.id)}>
            <img src={p.cover} alt={p.title} decoding="async" />
            <span className="menu-strip-num">{p.num}</span>
            <div className="menu-strip-info">
              <h2 className="menu-strip-title">{p.title}</h2>
              <span className="menu-strip-cat">{p.category[lang]}</span>
            </div>
          </div>
        ))}
        <div className="menu-strip-cta">
          <div className="menu-strip-cta-inner">
            <p className="menu-strip-cta-text">
              {lang === "ca" ? "Vols col·laborar en un projecte?" : "Want to collaborate on a project?"}
            </p>
            <button className="menu-strip-cta-link" onClick={(e) => { e.stopPropagation(); onNav("about"); }}>
              {lang === "ca" ? "Contactem →" : "Get in touch →"}
            </button>
          </div>
        </div>
      </div>
      <button
        className={`strip-next-btn${embedded ? " is-embedded" : ""}${locked ? " is-in" : ""}`}
        onClick={scrollPage}
        aria-label="Següents projectes"
        style={{ display: focusedProject || embedded && !locked ? "none" : "" }}>›</button>
    </>
  );
}

/* ============== Mobile: strip de categories + panell de menú ============== */
const MOBILE_FILTERS = [
  { key: "espais",     ca: "Espais",       en: "Spaces" },
  { key: "instalacio", ca: "Instal·lació", en: "Installation" },
  { key: "recerca",    ca: "Recerca",      en: "Research" },
];

function MobileMenuStrip({ lang, onNav, onOpen, open, onToggle }) {
  const catStr = MOBILE_FILTERS.map(f => f[lang] || f.ca).join(" / ");

  return (
    <>
      <div className="mobile-strip-bar" onClick={onToggle}>
        <span className="mobile-strip-main">
          {!open && <span className="mobile-strip-label">PROJECTES: </span>}
          <span className="mobile-strip-cats">{catStr}</span>
        </span>
        <span className={`mobile-strip-arrow ${open ? "is-open" : ""}`}>▼</span>
      </div>

      {open && (
        <div className="mobile-menu-panel">
          <div className="mobile-menu-section">
            <span className="mobile-menu-eyebrow">PROJECTES:</span>
            <div className="mobile-menu-projects-grid">
              <div className="mobile-menu-col">
                {window.PROJECTS.slice(0, 5).map(p => (
                  <button key={p.id} className="mobile-menu-proj-btn"
                    onClick={() => { onOpen(p.id); onToggle(); }}>
                    {p.title}
                  </button>
                ))}
              </div>
              <div className="mobile-menu-col">
                {window.PROJECTS.slice(5).map(p => (
                  <button key={p.id} className="mobile-menu-proj-btn"
                    onClick={() => { onOpen(p.id); onToggle(); }}>
                    {p.title}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="mobile-menu-section mobile-menu-section--pages">
            <button className="mobile-menu-page-btn" onClick={() => { onNav("about"); onToggle(); }}>
              {lang === "ca" ? "SOBRE MI" : "ABOUT"}
            </button>
            <button className="mobile-menu-page-btn" onClick={() => { onNav("about"); onToggle(); }}>
              {lang === "ca" ? "CONTACTE" : "CONTACT"}
            </button>
          </div>
        </div>
      )}
    </>
  );
}

/* ============== Mobile home — pàgina única de scroll ============== */
function MobileHome({ lang, onOpen, onNav }) {
  const [filter, setFilter] = useState("all");
  const deckRef = useRef(null);
  const projects = window.PROJECTS;
  const s = window.STRINGS[lang];
  // El filtre de la tira blanca mana sobre tota l'escena
  const visible = filter === "all" ? projects : projects.filter(p => p.filter === filter);
  const visibleKey = visible.map(p => p.id).join(",");

  /* Una sola escena per a tot el mòbil.
     A dalt de tot (sense scroll) els projectes són pestanyes amples a la
     franja inferior: això és l'inici. En fer scroll, la primera pestanya es
     desplega des de baix fins a aturar-se a la línia del header, mentre les
     altres s'aprimen i es converteixen en tires amb només el número.
     Tot es calcula a partir del scroll, sense inèrcia pròpia. */
  useEffect(() => {
    const deck = deckRef.current;
    if (!deck) return;
    const cards = Array.from(deck.querySelectorAll(".mobile-deck-card"));
    if (!cards.length) return;
    let rafId = null;

    const paint = () => {
      rafId = null;
      const vh = window.innerHeight;
      const nav = document.querySelector(".nav");
      const line = nav ? Math.round(nav.getBoundingClientRect().bottom) : 50;
      // p = 0 → inici (pestanyes) · p = 1 → primer projecte obert · p = 2 → segon...
      const p = Math.max(0, Math.min(cards.length, -deck.getBoundingClientRect().top / vh));

      // De pestanyes amples (inici) a tires fines (baralla)
      const blend = Math.min(1, p);
      const band = vh * (MOBILE_HOME_STACK + (MOBILE_BAND - MOBILE_HOME_STACK) * blend);
      const step = band / MOBILE_QUEUE;

      cards.forEach((el, i) => {
        const d = i - p + 1; // a p=0 el primer projecte ja fa de pestanya (d=1)
        let y;
        if (d >= 1) {
          // Pestanya / tira fent cua a la franja inferior
          y = Math.min(vh, vh - band + (d - 1) * step);
        } else if (d >= MOBILE_RISE) {
          // Desplegant-se des de la franja fins a la línia del header
          const k = (1 - d) / (1 - MOBILE_RISE);
          y = (vh - band) + (line - (vh - band)) * k;
        } else if (d >= 0) {
          // STOP: aturat alineat amb la línia del header
          y = line;
        } else if (d >= -MOBILE_RISE) {
          // El següent se l'emporta cap amunt i tapa la franja del header
          y = line * (1 - -d / MOBILE_RISE);
        } else {
          y = 0;
        }
        el.style.transform = `translate3d(0,${y.toFixed(1)}px,0)`;
        el.style.visibility = d > MOBILE_QUEUE + 0.5 ? "hidden" : "visible";

        // Títol petit de la pestanya: només mentre som a l'inici.
        // El número no s'esvaeix mai: es veu també a les tires i al header.
        const tab = el.querySelector(".mobile-deck-tab-title");
        if (tab) tab.style.opacity = String(Math.max(0, 1 - blend * 2.5));

        // Títol gran: apareix quan les lletres arriben a 3/4 de pantalla i
        // es veu al 100% quan són a mitja pantalla.
        const info = el.querySelector(".mobile-deck-info");
        if (info) {
          const titolY = y + MOBILE_TITLE_TOP * vh;
          info.style.opacity = String(Math.max(0, Math.min(1, (vh * 0.75 - titolY) / (vh * 0.25))));
        }
      });
    };

    const onScroll = () => { if (rafId === null) rafId = requestAnimationFrame(paint); };
    paint();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [visibleKey]);

  // Canviar de filtre torna a l'inici, que és on es veuen les pestanyes noves
  const triaFiltre = (key) => {
    setFilter(key);
    if (window.scrollY > 0) window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="mobile-scroll-page">

      <div
        className="mobile-deck"
        ref={deckRef}
        style={{
          "--n": visible.length + 1,
          "--title-top": MOBILE_TITLE_TOP,
          "--home-stack": MOBILE_HOME_STACK
        }}>
        <div className="mobile-deck-stage">

          {/* Fons de l'inici: imatge i tira de classificació. Les pestanyes
              hi passen per sobre en desplegar-se. */}
          <div className="mobile-home-back">
            <div className="mobile-hero">
              <img className="mobile-hero-img is-active" src={HOME_STILL_MOBILE_SRC} alt="Josep Rodon" />
              {/* Versió vertical de la composició: la fotografia retallada i
                  la tipografia remuntada, perquè encaixi a qualsevol mòbil. */}
              <div className="mobile-hero-type">
                {/* Mateix joc de línies que la composició de l'ordinador:
                    una ratlla entra des de l'esquerra fins a JOSEP i una
                    altra surt de RODON cap a la vora dreta. */}
                <h1 className="mobile-hero-name">
                  <span className="mobile-hero-line-row">
                    <span className="mobile-hero-rule is-left" />
                    <span>Josep</span>
                  </span>
                  <span className="mobile-hero-line-row is-second">
                    <span>Rodon</span>
                    <span className="mobile-hero-rule is-right" />
                  </span>
                </h1>
                <p className="mobile-hero-claim">
                  {lang === "en"
                    ? <>Space Design, Products, 3D,<br />Installations and Environment</>
                    : <>Space Design, Products, 3D,<br />Instalations and Envoirment</>}
                </p>
                <button
                  className="mobile-hero-explore"
                  onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}>
                  {lang === "en" ? "Explore" : "Explora"} <span aria-hidden="true">⟶</span>
                </button>
              </div>
            </div>
            <nav className="mobile-filters">
              {STRIP_FILTERS.map(f => (
                <button
                  key={f.key}
                  className={filter === f.key ? "is-active" : ""}
                  onClick={() => triaFiltre(f.key)}>
                  {f[lang] || f.ca}
                </button>
              ))}
            </nav>
            <div className="mobile-home-slot">
              {visible.length === 0 &&
              <p className="mobile-preview-buit">
                {lang === "en" ? "Nothing here yet" : "Encara no hi ha res aquí"}
              </p>
              }
            </div>
          </div>

          {visible.map((p, i) => (
            <article
              key={p.id}
              className={`mobile-deck-card${i < MOBILE_INVERT_FIRST ? " is-invert" : ""}`}
              style={{ zIndex: i + 1 }}
              onClick={() => onOpen(p.id)}>
              <div className="mobile-deck-media">
                <img src={p.cover} alt="" decoding="async" />
              </div>
              <div className="mobile-deck-tab">
                <span className="mobile-deck-tab-title">{p.title}</span>
                <span className="mobile-deck-num">{p.num}</span>
              </div>
              <div className="mobile-deck-info">
                <h2 className="mobile-deck-title">{p.title}</h2>
                <span className="mobile-deck-cat">{p.category[lang]}</span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* 3. Peu — AYMA + Josep Rodon + contacte */}
      <div className="mobile-info-strip">
        <div className="mobile-info-block">
          <h2>AYMA Studio <img src="assets/logo.png" alt="" style={{ height: "10px", width: "auto", objectFit: "contain" }} /></h2>
          <p>{lang === "ca" ? "Espai de recerca i projectes de disseny espacial, arquitectura i direcció artística." : "A space for research and projects in spatial design, architecture and art direction."}</p>
        </div>
        <div className="mobile-info-block">
          <h2>Josep Rodon</h2>
          <p>{lang === "ca" ? "Estudiant a BAU, Barcelona. Disseny d'espais i materialitat sostenible. " : "Student at BAU, Barcelona. Spatial design and sustainable materiality. "}<button className="contactem-btn" onClick={() => onNav("about")}>{lang === "ca" ? "Contactem" : "Contact"}</button></p>
        </div>
      </div>

      {/* 3. Sobre Mi inline */}
      <section className="mobile-about-inline">
        <h2 className="mobile-about-title">
          {lang === "ca"
            ? <>Josep Rodon — <em>disseny espacial</em>, interiors i direcció artística.</>
            : <>Josep Rodon — <em>spatial design</em>, interiors and art direction.</>}
        </h2>
        <p className="mobile-about-text">{s.about_text_1}</p>
        <p className="mobile-about-text">{lang === "ca"
          ? <>AYMA Studio és el meu espai de recerca i projectes. Disponible per <strong>col·laboracions i encàrrecs</strong>.</>
          : <>AYMA Studio is my space for research and projects. Available for <strong>collaborations and commissions</strong>.</>}
        </p>
        <div className="mobile-about-links">
          <a href="mailto:joseprodon12@gmail.com">joseprodon12@gmail.com</a>
          <a href="https://www.instagram.com/joseprodon_" target="_blank" rel="noreferrer">@joseprodon_</a>
          <a href="https://www.instagram.com/ayma.std" target="_blank" rel="noreferrer">@ayma.std</a>
        </div>
      </section>
      <div className="mobile-home-cta">
        <button className="mobile-home-cta-btn" onClick={() => onNav("about")}>
          {lang === "ca" ? "Vols col·laborar en un projecte? Contactem" : "Want to collaborate on a project? Get in touch"}
        </button>
      </div>

    </div>
  );
}

/* ============== Language switch — fix bottom-right ============== */
function LangSwitch({ lang, onLang }) {
  return (
    <div className="lang-switch-fixed">
      <button className={lang === "ca" ? "is-active" : ""} onClick={() => onLang("ca")}>CA</button>
      <span className="sep">/</span>
      <button className={lang === "en" ? "is-active" : ""} onClick={() => onLang("en")}>EN</button>
    </div>
  );
}

Object.assign(window, {
  AvaMark, Clock, Nav, HeroCarousel, HomeSparse, MenuGrid, ColumnsMenu, StripMenu, ProjectDetail, About, MenuOverlay,
  MobileMenuStrip, MobileHome, LangSwitch
});