import { useMemo, useRef, useState } from "react";
import {
  ArrowUpRight,
  BadgeCheck,
  BarChart3,
  Building2,
  Calculator,
  Check,
  ChevronDown,
  FileCheck2,
  FileText,
  Globe2,
  Landmark,
  LockKeyhole,
  Menu,
  ScanLine,
  ShieldCheck,
  Sparkles,
  UsersRound,
  X,
} from "lucide-react";

type Lang = "fr" | "en";
type Shot = { id: number; title: string; eyebrow: string; description: string };

type Copy = {
  nav: { platform: string; spaces: string; intelligence: string; screenshots: string; trust: string; contact: string };
  hero: { kicker: string; title: string; body: string; primary: string; secondary: string; note: string };
  metrics: string[];
  spacesTitle: string;
  spacesBody: string;
  intelligenceTitle: string;
  intelligenceBody: string;
  galleryTitle: string;
  galleryBody: string;
  upload: string;
  replace: string;
  empty: string;
  modulesTitle: string;
  modulesBody: string;
  necessity: string;
  sync: string;
  workflowTitle: string;
  workflowBody: string;
  trustTitle: string;
  trustBody: string;
  trustCta: string;
  footer: string;
};

const copy: Record<Lang, Copy> = {
  fr: {
    nav: { platform: "La plateforme", spaces: "Espaces", intelligence: "Intelligence fiscale", screenshots: "Captures", trust: "Confiance", contact: "Présenter EasyTax" },
    hero: { kicker: "CANADA · QUÉBEC · INFRASTRUCTURE FISCALE", title: "Vos impôts, enfin lisibles.", body: "EasyTax réunit le profil fiscal, les questionnaires adaptatifs, le coffre documentaire, l’OCR et un moteur de calcul traçable dans une expérience claire — de la première donnée au résultat expliqué.", primary: "Découvrir la plateforme", secondary: "Voir les 10 espaces visuels", note: "Présentation produit · données de démonstration · aucun résultat officiel" },
    metrics: ["4 espaces séparés", "OCR + validation", "T1 et TP-1", "Calculs traçables"],
    spacesTitle: "Une infrastructure commune. Des espaces adaptés.",
    spacesBody: "Chaque rôle dispose d’une interface dédiée, sans mélanger les permissions, les dossiers ni les responsabilités.",
    intelligenceTitle: "L’intelligence fiscale devient vérifiable.",
    intelligenceBody: "EasyTax ne se contente pas d’afficher un résultat : chaque valeur peut remonter vers sa source, sa case, sa ligne fiscale, sa règle et sa version.",
    galleryTitle: "Dix preuves visuelles à intégrer",
    galleryBody: "Insère tes captures une par une. Chaque onglet correspond à un écran précis : aucune mosaïque, aucun visuel écrasé.",
    upload: "Insérer une capture",
    replace: "Remplacer l’image",
    empty: "Ton screenshot apparaîtra ici",
    modulesTitle: "Les modules qui font fonctionner EasyTax",
    modulesBody: "Une présentation claire des briques produit, de leur nécessité et de leur synchronisation.",
    necessity: "Nécessité",
    sync: "Synchronisation",
    workflowTitle: "Du document au résultat, sans zone grise.",
    workflowBody: "Le parcours est conçu comme une chaîne de contrôle : l’utilisateur comprend ce qui a été importé, reconnu, validé et calculé.",
    trustTitle: "Une expérience premium, une posture responsable.",
    trustBody: "EasyTax est présenté comme une plateforme de préparation et d’explication fiscale. Les données de démonstration sont identifiées, les calculs sont préliminaires et la transmission officielle nécessite les canaux autorisés.",
    trustCta: "Préparer une démonstration",
    footer: "EasyTax · Présentation de produit · Canada / Québec",
  },
  en: {
    nav: { platform: "Platform", spaces: "Workspaces", intelligence: "Tax intelligence", screenshots: "Screenshots", trust: "Trust", contact: "Present EasyTax" },
    hero: { kicker: "CANADA · QUEBEC · TAX INFRASTRUCTURE", title: "Your taxes, finally readable.", body: "EasyTax brings together tax profiles, adaptive questionnaires, a document vault, OCR and a traceable calculation engine in one clear experience — from the first data point to the explained result.", primary: "Explore the platform", secondary: "View the 10 visual spaces", note: "Product presentation · demo data · no official result" },
    metrics: ["4 separated spaces", "OCR + validation", "T1 and TP-1", "Traceable calculations"],
    spacesTitle: "One shared infrastructure. Purpose-built spaces.",
    spacesBody: "Every role gets a dedicated interface without mixing permissions, files or responsibilities.",
    intelligenceTitle: "Tax intelligence you can verify.",
    intelligenceBody: "EasyTax does more than display an outcome: every value can lead back to its source, box, tax line, rule and version.",
    galleryTitle: "Ten visual proofs to add",
    galleryBody: "Insert your screenshots one by one. Each tab maps to a precise screen: no collage, no squeezed visuals.",
    upload: "Insert screenshot",
    replace: "Replace image",
    empty: "Your screenshot will appear here",
    modulesTitle: "The modules behind EasyTax",
    modulesBody: "A clear view of each product building block, its purpose and its synchronization.",
    necessity: "Why it matters",
    sync: "Synchronization",
    workflowTitle: "From document to result, with no blind spot.",
    workflowBody: "The journey is designed as a control chain: users understand what was imported, recognized, validated and calculated.",
    trustTitle: "Premium experience, responsible posture.",
    trustBody: "EasyTax is presented as a tax preparation and explanation platform. Demo data is identified, calculations are preliminary, and official filing requires authorized channels.",
    trustCta: "Prepare a demo",
    footer: "EasyTax · Product presentation · Canada / Quebec",
  },
};

const shots: Shot[] = [
  { id: 1, title: "Tableau de bord", eyebrow: "01 · Overview", description: "Progression du dossier, année fiscale et prochaines actions en un coup d’œil." },
  { id: 2, title: "Profil fiscal", eyebrow: "02 · Identity", description: "Identité, résidence, coordonnées et contexte fiscal regroupés dans un espace contrôlé." },
  { id: 3, title: "Questionnaire adaptatif", eyebrow: "03 · Guided flow", description: "Les questions utiles apparaissent selon la situation réelle, sans répétitions inutiles." },
  { id: 4, title: "Coffre documentaire", eyebrow: "04 · Documents", description: "Feuillets, reçus et justificatifs classés par année, type et statut de validation." },
  { id: 5, title: "Extraction OCR", eyebrow: "05 · OCR", description: "Cases et montants reconnus, niveau de confiance et contrôle humain avant calcul." },
  { id: 6, title: "Déclaration T1", eyebrow: "06 · Federal", description: "Lignes fédérales, crédits, retenues et effets fiscaux présentés avec traçabilité." },
  { id: 7, title: "Déclaration TP-1", eyebrow: "07 · Quebec", description: "Lecture provinciale structurée pour les règles et crédits du Québec." },
  { id: 8, title: "Résumé fiscal", eyebrow: "08 · Result", description: "Revenu imposable, impôts, crédits et solde estimé dans une vue lisible." },
  { id: 9, title: "Espace entreprise", eyebrow: "09 · Business", description: "Organisation, identifiants, employés, paie et documents d’entreprise séparés." },
  { id: 10, title: "Administration", eyebrow: "10 · Control", description: "Journaux, règles, dictionnaires, opérations et gouvernance de l’infrastructure." },
];

const spaceCards = [
  { icon: UsersRound, label: "Particulier", en: "Individual", color: "coral", body: "Profil fiscal, questionnaire, documents, déclaration et résultat estimé." },
  { icon: Building2, label: "Entreprise", en: "Business", color: "cyan", body: "Organisation, employés, identifiants fiscaux, paie et dossiers autorisés." },
  { icon: FileCheck2, label: "Préparateur", en: "Preparer", color: "violet", body: "Dossiers partagés, vérifications, corrections et suivi des déclarations." },
  { icon: Landmark, label: "Administration", en: "Administration", color: "gold", body: "Moteurs, dictionnaires, sécurité, audit et intégrations gouvernementales." },
];

const modules = [
  { icon: ScanLine, name: "OCR & coffre documentaire", expl: "Transformer les feuillets en données structurées et contrôlables.", need: "Réduit la saisie manuelle et rend chaque valeur révisable.", sync: "Documents → cases → entrées validées → lignes fiscales" },
  { icon: Calculator, name: "Moteur fiscal", expl: "Calculer fédéral et provincial avec règles versionnées traçables.", need: "Sépare revenu, impôt, crédits, retenues et résultat final.", sync: "Données validées → règles annuelles → T1 / TP-1" },
  { icon: BarChart3, name: "Résumé & simulation", expl: "Présenter un résultat lisible, comparable et expliqué.", need: "Permet de comprendre l’effet de chaque donnée sur le résultat.", sync: "Calculs → lignes fiscales → résumé → détail" },
  { icon: ShieldCheck, name: "Audit & contrôle", expl: "Conserver source, version, validation et historique de chaque action.", need: "Protège l’intégrité du dossier et facilite les corrections.", sync: "Action → journal → état → preuve consultable" },
];

function App() {
  const [lang, setLang] = useState<Lang>("fr");
  const [activeShot, setActiveShot] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [images, setImages] = useState<Record<number, string>>({});
  const fileRefs = useRef<Record<number, HTMLInputElement | null>>({});
  const t = copy[lang];
  const currentShot = shots[activeShot];
  const isEn = lang === "en";

  const navItems = useMemo(() => [
    ["platform", t.nav.platform], ["spaces", t.nav.spaces], ["intelligence", t.nav.intelligence], ["screenshots", t.nav.screenshots], ["trust", t.nav.trust],
  ] as const, [t]);

  function selectImage(id: number, file?: File) {
    if (!file) return;
    const url = URL.createObjectURL(file);
    setImages((old) => ({ ...old, [id]: url }));
  }

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="EasyTax home">
          <span className="brand-mark"><span>ET</span></span>
          <span><strong>Easy</strong><b>Tax</b><small>CANADA · QUÉBEC</small></span>
        </a>
        <nav className={menuOpen ? "nav open" : "nav"}>
          {navItems.map(([id, label]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>)}
          <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>{t.nav.contact}<ArrowUpRight size={15} /></a>
        </nav>
        <div className="header-actions">
          <button className="language" onClick={() => setLang(isEn ? "fr" : "en")} aria-label="Switch language"><Globe2 size={16} /> {isEn ? "FR" : "EN"}</button>
          <button className="menu-button" onClick={() => setMenuOpen((open) => !open)} aria-label="Menu">{menuOpen ? <X /> : <Menu />}</button>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid" />
        <div className="hero-copy reveal">
          <div className="kicker"><span className="pulse" /> {t.hero.kicker}</div>
          <h1>{t.hero.title}<em>·</em></h1>
          <p className="hero-body">{t.hero.body}</p>
          <div className="hero-actions">
            <a className="button primary" href="#platform">{t.hero.primary} <ArrowUpRight size={17} /></a>
            <a className="button secondary" href="#screenshots">{t.hero.secondary} <ChevronDown size={16} /></a>
          </div>
          <div className="demo-note"><BadgeCheck size={17} /><span>{t.hero.note}</span></div>
        </div>
        <div className="hero-card reveal-delay">
          <div className="card-glow" />
          <div className="window-bar"><span /><span /><span /><small>easytax / overview</small></div>
          <div className="hero-dashboard">
            <div className="dashboard-top"><div><small>Déclaration 2025</small><strong>{isEn ? "Your tax journey" : "Votre parcours fiscal"}</strong></div><span className="status">{isEn ? "In progress" : "En cours"}</span></div>
            <div className="progress-ring"><div><strong>65%</strong><small>{isEn ? "complete" : "complété"}</small></div></div>
            <div className="mini-list"><div><span className="mini-icon cyan"><FileText size={14} /></span><span><b>{isEn ? "Documents" : "Documents"}</b><small>{isEn ? "3 files validated" : "3 feuillets validés"}</small></span><Check size={15} /></div><div><span className="mini-icon violet"><Calculator size={14} /></span><span><b>{isEn ? "Tax calculation" : "Calcul fiscal"}</b><small>{isEn ? "Federal + Quebec" : "Fédéral + Québec"}</small></span><span className="dot-active" /></div><div><span className="mini-icon coral"><ShieldCheck size={14} /></span><span><b>{isEn ? "Final review" : "Vérification finale"}</b><small>{isEn ? "Ready when you are" : "Quand vous serez prêt"}</small></span><span className="arrow-mini">→</span></div></div>
          </div>
          <div className="floating-tag"><Sparkles size={15} /><span>{isEn ? "Traceable by design" : "Traçable par conception"}</span></div>
        </div>
      </section>

      <div className="metrics-strip" id="platform">{t.metrics.map((metric, index) => <div key={metric}><span>0{index + 1}</span><strong>{metric}</strong></div>)}</div>

      <section className="section spaces-section" id="spaces">
        <div className="section-heading"><div><div className="eyebrow">01 · {isEn ? "WORKSPACES" : "ESPACES"}</div><h2>{t.spacesTitle}</h2></div><p>{t.spacesBody}</p></div>
        <div className="space-grid">{spaceCards.map(({ icon: Icon, label, en, color, body }) => <article className={`space-card ${color}`} key={label}><div className="space-icon"><Icon size={21} /></div><div className="space-number">0{spaceCards.findIndex((item) => item.label === label) + 1}</div><h3>{isEn ? en : label}</h3><p>{body}</p><a href="#screenshots">{isEn ? "View screen" : "Voir l’écran"} <ArrowUpRight size={15} /></a></article>)}</div>
      </section>

      <section className="section intelligence-section" id="intelligence">
        <div className="intelligence-visual"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="core"><Calculator size={32} /><strong>EasyTax</strong><small>{isEn ? "Tax engine" : "Moteur fiscal"}</small></div><div className="orbit-node n1"><FileText size={16} /><span>T4</span></div><div className="orbit-node n2"><ScanLine size={16} /><span>OCR</span></div><div className="orbit-node n3"><Landmark size={16} /><span>TP-1</span></div><div className="orbit-node n4"><ShieldCheck size={16} /><span>Audit</span></div></div>
        <div className="intelligence-copy"><div className="eyebrow">02 · {isEn ? "TAX INTELLIGENCE" : "INTELLIGENCE FISCALE"}</div><h2>{t.intelligenceTitle}</h2><p>{t.intelligenceBody}</p><div className="proof-list"><div><span className="proof-check"><Check size={14} /></span><span><b>{isEn ? "Source-aware" : "Source identifiée"}</b><small>{isEn ? "Every field keeps its document trail." : "Chaque valeur conserve le lien vers son document."}</small></span></div><div><span className="proof-check"><Check size={14} /></span><span><b>{isEn ? "Year-aware" : "Année respectée"}</b><small>{isEn ? "Rules are versioned by year and jurisdiction." : "Les règles sont versionnées par année et juridiction."}</small></span></div><div><span className="proof-check"><Check size={14} /></span><span><b>{isEn ? "Human-confirmed" : "Validation humaine"}</b><small>{isEn ? "Uncertain OCR values stay reviewable." : "Les valeurs OCR incertaines restent révisables."}</small></span></div></div></div>
      </section>

      <section className="section gallery-section" id="screenshots">
        <div className="section-heading gallery-heading"><div><div className="eyebrow">03 · {isEn ? "PRODUCT PROOF" : "PREUVES PRODUIT"}</div><h2>{t.galleryTitle}</h2></div><p>{t.galleryBody}</p></div>
        <div className="gallery-layout">
          <div className="shot-tabs">{shots.map((shot, index) => <button key={shot.id} className={activeShot === index ? "shot-tab active" : "shot-tab"} onClick={() => setActiveShot(index)}><span>{String(shot.id).padStart(2, "0")}</span><strong>{isEn && shot.id === 1 ? "Dashboard" : shot.title}</strong><ChevronDown size={15} /></button>)}</div>
          <div className="shot-stage"><div className="shot-stage-header"><div><span className="shot-eyebrow">{currentShot.eyebrow}</span><h3>{isEn && currentShot.id === 1 ? "Dashboard" : currentShot.title}</h3></div><span className="shot-count">{String(currentShot.id).padStart(2, "0")} / 10</span></div><div className={images[currentShot.id] ? "image-frame has-image" : "image-frame"}>{images[currentShot.id] ? <img src={images[currentShot.id]} alt={currentShot.title} /> : <div className="placeholder-content"><div className="placeholder-mark"><ScanLine size={29} /></div><strong>{t.empty}</strong><small>{isEn ? "PNG, JPG or WEBP · recommended 16:10" : "PNG, JPG ou WEBP · format conseillé 16:10"}</small></div>}<input ref={(element) => { fileRefs.current[currentShot.id] = element; }} type="file" accept="image/png,image/jpeg,image/webp" onChange={(event) => selectImage(currentShot.id, event.target.files?.[0])} /></div><div className="shot-footer"><p>{currentShot.description}</p><button className="upload-button" onClick={() => fileRefs.current[currentShot.id]?.click()}>{images[currentShot.id] ? t.replace : t.upload} <ArrowUpRight size={15} /></button></div></div>
        </div>
      </section>

      <section className="section modules-section"><div className="section-heading"><div><div className="eyebrow">04 · {isEn ? "PRODUCT ARCHITECTURE" : "ARCHITECTURE PRODUIT"}</div><h2>{t.modulesTitle}</h2></div><p>{t.modulesBody}</p></div><div className="module-list">{modules.map(({ icon: Icon, name, expl, need, sync }, index) => <article className="module-row" key={name}><div className="module-number">0{index + 1}</div><div className="module-icon"><Icon size={20} /></div><div className="module-main"><h3>{name}</h3><p>{expl}</p></div><div className="module-meta"><span>{t.necessity}</span><p>{need}</p></div><div className="module-meta"><span>{t.sync}</span><p>{sync}</p></div></article>)}</div></section>

      <section className="workflow-band"><div className="workflow-inner"><div><div className="eyebrow">05 · {isEn ? "CONTROL CHAIN" : "CHAÎNE DE CONTRÔLE"}</div><h2>{t.workflowTitle}</h2><p>{t.workflowBody}</p></div><div className="flow-line">{["Profil", "Questionnaire", "OCR", "Validation", "Calcul", "Résultat"].map((item, index) => <div key={item}><span className={index < 4 ? "flow-dot done" : "flow-dot"}>{index < 4 ? <Check size={12} /> : index + 1}</span><b>{isEn ? ["Profile", "Questionnaire", "OCR", "Validation", "Calculation", "Result"][index] : item}</b>{index < 5 && <i />}</div>)}</div></div></section>

      <section className="section trust-section" id="trust"><div className="trust-card"><div className="trust-icon"><LockKeyhole size={24} /></div><div><div className="eyebrow">06 · {isEn ? "TRUST LAYER" : "COUCHE DE CONFIANCE"}</div><h2>{t.trustTitle}</h2><p>{t.trustBody}</p></div><a className="button light" href="#contact">{t.trustCta} <ArrowUpRight size={16} /></a></div></section>
      <footer id="contact"><div className="footer-brand"><span className="brand-mark small"><span>ET</span></span><span><strong>Easy</strong><b>Tax</b></span></div><p>{t.footer}</p><div className="footer-links"><a href="#top">Top</a><button onClick={() => setLang(isEn ? "fr" : "en")}>{isEn ? "Français" : "English"}</button></div></footer>
    </main>
  );
}

export default App;
