import { useState, useMemo } from "react";
import {
  ArrowUpRight,
  BadgeCheck,
  BarChart3,
  Building2,
  Calculator,
  Check,
  ChevronDown,
  ChevronRight,
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
  BookOpen,
  Workflow,
  Database,
  Network,
  ClipboardList,
  FlaskConical,
  Map,
  AlertTriangle,
  ArrowRight,
} from "lucide-react";

type Lang = "fr" | "en";

function App() {
  const [lang, setLang] = useState<Lang>("fr");
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeChapter, setActiveChapter] = useState<number | null>(null);
  const isEn = lang === "en";

  const chapters = useMemo(() => [
    {
      id: 1,
      icon: Sparkles,
      slug: "vision",
      titleFr: "Vision et Mission",
      titleEn: "Vision & Mission",
      eyebrow: "01",
      color: "coral",
    },
    {
      id: 2,
      icon: Network,
      slug: "architecture",
      titleFr: "Architecture globale",
      titleEn: "Global Architecture",
      eyebrow: "02",
      color: "cyan",
    },
    {
      id: 3,
      icon: LockKeyhole,
      slug: "auth",
      titleFr: "Authentification & Permissions",
      titleEn: "Authentication & Permissions",
      eyebrow: "03",
      color: "violet",
    },
    {
      id: 4,
      icon: Workflow,
      slug: "workflow",
      titleFr: "Workflow du contribuable",
      titleEn: "Taxpayer Workflow",
      eyebrow: "04",
      color: "gold",
    },
    {
      id: 5,
      icon: ClipboardList,
      slug: "profile",
      titleFr: "Profil & Questionnaire adaptatif",
      titleEn: "Profile & Adaptive Questionnaire",
      eyebrow: "05",
      color: "coral",
    },
    {
      id: 6,
      icon: ScanLine,
      slug: "documents",
      titleFr: "Documents, Coffre & OCR",
      titleEn: "Documents, Vault & OCR",
      eyebrow: "06",
      color: "cyan",
    },
    {
      id: 7,
      icon: BookOpen,
      slug: "dictionary",
      titleFr: "Dictionnaire fiscal",
      titleEn: "Tax Dictionary",
      eyebrow: "07",
      color: "violet",
    },
    {
      id: 8,
      icon: Calculator,
      slug: "engine",
      titleFr: "Moteur fiscal",
      titleEn: "Tax Engine",
      eyebrow: "08",
      color: "gold",
    },
    {
      id: 9,
      icon: BarChart3,
      slug: "simulator",
      titleFr: "Simulateur & Résultats",
      titleEn: "Simulator & Results",
      eyebrow: "09",
      color: "coral",
    },
    {
      id: 10,
      icon: Building2,
      slug: "business",
      titleFr: "Espace entreprise",
      titleEn: "Business Space",
      eyebrow: "10",
      color: "cyan",
    },
    {
      id: 11,
      icon: FileCheck2,
      slug: "preparer",
      titleFr: "Espace préparateur",
      titleEn: "Preparer Space",
      eyebrow: "11",
      color: "violet",
    },
    {
      id: 12,
      icon: ShieldCheck,
      slug: "admin",
      titleFr: "Super Administration",
      titleEn: "Super Administration",
      eyebrow: "12",
      color: "gold",
    },
    {
      id: 13,
      icon: Globe2,
      slug: "integrations",
      titleFr: "Intégrations ARC & Revenu Québec",
      titleEn: "CRA & Revenu Québec Integrations",
      eyebrow: "13",
      color: "coral",
    },
    {
      id: 14,
      icon: Database,
      slug: "security",
      titleFr: "Sécurité, Confidentialité & Audit",
      titleEn: "Security, Privacy & Audit",
      eyebrow: "14",
      color: "cyan",
    },
    {
      id: 15,
      icon: FileText,
      slug: "scenarios",
      titleFr: "Scénarios complets",
      titleEn: "Complete Scenarios",
      eyebrow: "15",
      color: "violet",
    },
    {
      id: 16,
      icon: FlaskConical,
      slug: "tests",
      titleFr: "Tests & Critères d'acceptation",
      titleEn: "Tests & Acceptance Criteria",
      eyebrow: "16",
      color: "gold",
    },
    {
      id: 17,
      icon: Map,
      slug: "roadmap",
      titleFr: "Roadmap & État réel",
      titleEn: "Roadmap & Current State",
      eyebrow: "17",
      color: "coral",
    },
  ], []);

  return (
    <main>
      {/* HEADER */}
      <header className="site-header">
        <a className="brand" href="#top" aria-label="EasyTax home">
          <span className="brand-mark"><span>ET</span></span>
          <span><strong>Easy</strong><b>Tax</b><small>CANADA · QUÉBEC</small></span>
        </a>
        <nav className={menuOpen ? "nav open" : "nav"}>
          <a href="#vision" onClick={() => setMenuOpen(false)}>{isEn ? "Vision" : "Vision"}</a>
          <a href="#architecture" onClick={() => setMenuOpen(false)}>{isEn ? "Architecture" : "Architecture"}</a>
          <a href="#workflow" onClick={() => setMenuOpen(false)}>{isEn ? "Workflow" : "Workflow"}</a>
          <a href="#chapters" onClick={() => setMenuOpen(false)}>{isEn ? "Chapters" : "Chapitres"}</a>
          <a href="#scenarios" onClick={() => setMenuOpen(false)}>{isEn ? "Scenarios" : "Scénarios"}</a>
          <a className="nav-cta" href="#roadmap" onClick={() => setMenuOpen(false)}>
            {isEn ? "Roadmap" : "Roadmap"} <ArrowUpRight size={15} />
          </a>
        </nav>
        <div className="header-actions">
          <button className="language" onClick={() => setLang(isEn ? "fr" : "en")} aria-label="Switch language">
            <Globe2 size={16} /> {isEn ? "FR" : "EN"}
          </button>
          <button className="menu-button" onClick={() => setMenuOpen(o => !o)} aria-label="Menu">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="hero" id="top">
        <div className="hero-grid" />
        <div className="hero-copy reveal">
          <div className="kicker"><span className="pulse" /> {isEn ? "CANADA · QUEBEC · FISCAL INFRASTRUCTURE" : "CANADA · QUÉBEC · INFRASTRUCTURE FISCALE"}</div>
          <h1>{isEn ? "Your taxes, finally readable." : "Vos impôts, enfin lisibles."}<em>·</em></h1>
          <p className="hero-body">
            {isEn
              ? "EasyTax brings together tax profiles, adaptive questionnaires, a document vault, OCR and a traceable calculation engine in one clear experience — from the first data point to the explained result."
              : "EasyTax réunit le profil fiscal, les questionnaires adaptatifs, le coffre documentaire, l'OCR et un moteur de calcul traçable dans une expérience claire — de la première donnée au résultat expliqué."}
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#vision">
              {isEn ? "Explore the platform" : "Découvrir la plateforme"} <ArrowUpRight size={17} />
            </a>
            <a className="button secondary" href="#chapters">
              {isEn ? "View all 17 chapters" : "Voir les 17 chapitres"} <ChevronDown size={16} />
            </a>
          </div>
          <div className="demo-note">
            <BadgeCheck size={17} />
            <span>{isEn ? "Functional design document · demo data · no official result" : "Document de conception fonctionnelle · données de démonstration · aucun résultat officiel"}</span>
          </div>
        </div>
        <div className="hero-card reveal-delay">
          <div className="card-glow" />
          <div className="window-bar"><span /><span /><span /><small>easytax / overview</small></div>
          <div className="hero-dashboard">
            <div className="dashboard-top">
              <div>
                <small>{isEn ? "Tax Declaration 2025" : "Déclaration 2025"}</small>
                <strong>{isEn ? "Your tax journey" : "Votre parcours fiscal"}</strong>
              </div>
              <span className="status">{isEn ? "In progress" : "En cours"}</span>
            </div>
            <div className="progress-ring">
              <div><strong>65%</strong><small>{isEn ? "complete" : "complété"}</small></div>
            </div>
            <div className="mini-list">
              <div><span className="mini-icon cyan"><FileText size={14} /></span><span><b>{isEn ? "Documents" : "Documents"}</b><small>{isEn ? "3 files validated" : "3 feuillets validés"}</small></span><Check size={15} /></div>
              <div><span className="mini-icon violet"><Calculator size={14} /></span><span><b>{isEn ? "Tax calculation" : "Calcul fiscal"}</b><small>{isEn ? "Federal + Quebec" : "Fédéral + Québec"}</small></span><span className="dot-active" /></div>
              <div><span className="mini-icon coral"><ShieldCheck size={14} /></span><span><b>{isEn ? "Final review" : "Vérification finale"}</b><small>{isEn ? "Ready when you are" : "Quand vous serez prêt"}</small></span><span className="arrow-mini">→</span></div>
            </div>
          </div>
          <div className="floating-tag"><Sparkles size={15} /><span>{isEn ? "Traceable by design" : "Traçable par conception"}</span></div>
        </div>
      </section>

      {/* METRICS */}
      <div className="metrics-strip" id="platform">
        {(isEn
          ? ["4 separated spaces", "OCR + validation", "T1 and TP-1", "Traceable calculations", "17 documented chapters", "10 detailed scenarios"]
          : ["4 espaces séparés", "OCR + validation", "T1 et TP-1", "Calculs traçables", "17 chapitres documentés", "10 scénarios détaillés"]
        ).map((metric, i) => (
          <div key={metric}><span>0{i + 1}</span><strong>{metric}</strong></div>
        ))}
      </div>

      {/* CHAPTER 1 — VISION */}
      <section className="doc-section" id="vision">
        <div className="doc-section-inner">
          <div className="doc-chapter-header coral">
            <div className="doc-eyebrow">01 · {isEn ? "VISION & MISSION" : "VISION ET MISSION"}</div>
            <h2>{isEn ? "EasyTax: What it is and why it exists" : "EasyTax : ce que c'est et pourquoi ça existe"}</h2>
          </div>

          <div className="doc-two-col">
            <div className="doc-prose">
              <h3>{isEn ? "The problem EasyTax solves" : "Le problème qu'EasyTax résout"}</h3>
              <p>
                {isEn
                  ? "Tax preparation in Canada is fragmented. Individuals receive dozens of slips from employers, financial institutions and government programs. Each slip contains numbered boxes whose values must be transferred to specific lines in federal and provincial returns — a process that is error-prone, opaque and frustrating."
                  : "La préparation fiscale au Canada est fragmentée. Les particuliers reçoivent des dizaines de feuillets de leurs employeurs, institutions financières et programmes gouvernementaux. Chaque feuillet contient des cases numérotées dont les valeurs doivent être transférées vers des lignes précises des déclarations fédérale et provinciale — un processus sujet aux erreurs, opaque et frustrant."}
              </p>
              <p>
                {isEn
                  ? "EasyTax is a digital platform designed to simplify tax obligations for individuals and businesses in Canada. It organizes tax information, guides users through their processes, centralizes supporting documents, automates calculations using versioned rules, and tracks each declaration from preparation to final status."
                  : "EasyTax est une plateforme numérique conçue pour simplifier les obligations fiscales des particuliers et des entreprises au Canada. Elle organise les informations fiscales, guide les utilisateurs dans leurs démarches, centralise les documents justificatifs, automatise les calculs selon des règles versionnées et permet de suivre chaque déclaration depuis sa préparation jusqu'à son statut final."}
              </p>

              <h3>{isEn ? "Core principle" : "Principe fondamental"}</h3>
              <p>
                {isEn
                  ? "Every piece of information must be entered once, verified, reused when permitted, and tracked to its final tax use. No silent overwriting, no orphaned values, no untraced recalculation."
                  : "Chaque information doit être saisie une seule fois, vérifiée, réutilisée lorsque cela est permis et suivie jusqu'à son utilisation fiscale finale. Pas d'écrasement silencieux, pas de valeurs orphelines, pas de recalcul non tracé."}
              </p>

              <h3>{isEn ? "Who EasyTax is for" : "Pour qui est EasyTax"}</h3>
              <ul className="doc-list">
                <li><strong>{isEn ? "Individuals" : "Particuliers"}</strong> — {isEn ? "salaried workers, self-employed, retirees, students" : "salariés, travailleurs autonomes, retraités, étudiants"}</li>
                <li><strong>{isEn ? "Businesses" : "Entreprises"}</strong> — {isEn ? "corporations managing employees and corporate obligations" : "sociétés gérant les employés et obligations d'entreprise"}</li>
                <li><strong>{isEn ? "Tax preparers" : "Préparateurs fiscaux"}</strong> — {isEn ? "professionals managing authorized client files" : "professionnels gérant des dossiers clients autorisés"}</li>
                <li><strong>{isEn ? "Administrators" : "Administrateurs"}</strong> — {isEn ? "platform operators controlling rules, accounts and operations" : "opérateurs contrôlant les règles, comptes et opérations"}</li>
              </ul>
            </div>

            <div className="doc-aside">
              <div className="doc-card">
                <div className="doc-card-title">{isEn ? "Value proposition" : "Proposition de valeur"}</div>
                {[
                  { icon: "🎯", fr: "Saisie unique des données", en: "Single data entry" },
                  { icon: "🔍", fr: "Traçabilité complète", en: "Complete traceability" },
                  { icon: "⚡", fr: "Calculs versionnés", en: "Versioned calculations" },
                  { icon: "🔒", fr: "Isolation des espaces", en: "Space isolation" },
                  { icon: "📋", fr: "Résultats expliqués", en: "Explained results" },
                ].map(item => (
                  <div key={item.fr} className="doc-card-item">
                    <span>{item.icon}</span>
                    <span>{isEn ? item.en : item.fr}</span>
                  </div>
                ))}
              </div>

              <div className="doc-card">
                <div className="doc-card-title">{isEn ? "Key distinction" : "Distinction clé"}</div>
                <div className="doc-distinction-grid">
                  {[
                    { fr: "Préparation", en: "Preparation", desc_fr: "Organiser et saisir les données", desc_en: "Organize and enter data" },
                    { fr: "Calcul", en: "Calculation", desc_fr: "Appliquer les règles fiscales", desc_en: "Apply tax rules" },
                    { fr: "Validation", en: "Validation", desc_fr: "Vérifier avant soumission", desc_en: "Verify before submission" },
                    { fr: "Transmission", en: "Filing", desc_fr: "Envoyer aux agences officielles", desc_en: "Send to official agencies" },
                  ].map(item => (
                    <div key={item.fr} className="doc-distinction-item">
                      <strong>{isEn ? item.en : item.fr}</strong>
                      <small>{isEn ? item.desc_en : item.desc_fr}</small>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SCREENSHOTS — APP IN ACTION (after Vision) */}
      <section className="screenshots-section">
        <div className="screenshots-inner">
          <div className="screenshots-header">
            <div className="screenshots-eyebrow">{isEn ? "THE APP IN ACTION" : "L'APPLICATION EN ACTION"}</div>
            <h2>{isEn ? "A real platform, real data" : "Une plateforme réelle, des données réelles"}</h2>
            <p>{isEn ? "These screens come directly from the functional version of EasyTax running in a test environment." : "Ces écrans proviennent directement de la version fonctionnelle d'EasyTax en environnement de test."}</p>
          </div>
          <div className="screenshots-grid-2">
            <div className="screenshot-card">
              <div className="screenshot-label">{isEn ? "Personal dashboard" : "Tableau de bord personnel"}</div>
              <img src="/screenshots/dashboard-personal.jpg" alt={isEn ? "EasyTax personal dashboard" : "Tableau de bord EasyTax"} loading="lazy" />
            </div>
            <div className="screenshot-card">
              <div className="screenshot-label">{isEn ? "Account type selection" : "Sélection du type de compte"}</div>
              <img src="/screenshots/account-type.jpg" alt={isEn ? "Account type selection" : "Sélection du type de compte"} loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* CHAPTER 2 — ARCHITECTURE */}
      <section className="doc-section alt" id="architecture">
        <div className="doc-section-inner">
          <div className="doc-chapter-header cyan">
            <div className="doc-eyebrow">02 · {isEn ? "GLOBAL ARCHITECTURE" : "ARCHITECTURE GLOBALE"}</div>
            <h2>{isEn ? "Modules, responsibilities and data flows" : "Modules, responsabilités et flux de données"}</h2>
          </div>

          <div className="doc-prose wide">
            <p>
              {isEn
                ? "EasyTax is organized around a shared infrastructure serving four distinct spaces. Each space has its own permissions, interface and responsibilities — but they all rely on common data layers: authentication, document vault, tax dictionary, calculation engine and audit logs."
                : "EasyTax s'organise autour d'une infrastructure commune qui sert quatre espaces distincts. Chaque espace a ses propres permissions, interface et responsabilités — mais ils s'appuient tous sur des couches de données communes : authentification, coffre documentaire, dictionnaire fiscal, moteur de calcul et journaux d'audit."}
            </p>
          </div>

          <div className="arch-grid">
            {[
              {
                layer: isEn ? "Public interface" : "Interface publique",
                color: "layer-public",
                items: [isEn ? "Landing page" : "Page d'accueil", isEn ? "Registration" : "Inscription", isEn ? "Login" : "Connexion", isEn ? "Password recovery" : "Récupération"],
              },
              {
                layer: isEn ? "User spaces" : "Espaces utilisateurs",
                color: "layer-user",
                items: [isEn ? "Individual" : "Particulier", isEn ? "Business" : "Entreprise", isEn ? "Preparer" : "Préparateur", isEn ? "Administration" : "Administration"],
              },
              {
                layer: isEn ? "Core services" : "Services centraux",
                color: "layer-core",
                items: ["OCR", isEn ? "Tax engine" : "Moteur fiscal", isEn ? "Tax dictionary" : "Dictionnaire fiscal", isEn ? "Document vault" : "Coffre documentaire"],
              },
              {
                layer: isEn ? "Infrastructure" : "Infrastructure",
                color: "layer-infra",
                items: [isEn ? "Neon PostgreSQL" : "Neon PostgreSQL", "Clerk Auth", isEn ? "Audit logs" : "Journaux d'audit", isEn ? "Govt. connectors" : "Connecteurs gouvernementaux"],
              },
            ].map(row => (
              <div key={row.layer} className={`arch-layer ${row.color}`}>
                <div className="arch-layer-title">{row.layer}</div>
                <div className="arch-layer-items">
                  {row.items.map(item => <span key={item}>{item}</span>)}
                </div>
              </div>
            ))}
          </div>

          <div className="doc-modules-table">
            <div className="doc-table-title">{isEn ? "Module responsibilities" : "Responsabilités des modules"}</div>
            <table className="doc-table">
              <thead>
                <tr>
                  <th>{isEn ? "Module" : "Module"}</th>
                  <th>{isEn ? "Receives" : "Reçoit"}</th>
                  <th>{isEn ? "Produces" : "Produit"}</th>
                  <th>{isEn ? "Dependencies" : "Dépendances"}</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    mod: "OCR",
                    recv_fr: "Fichier PDF/image",
                    recv_en: "PDF/image file",
                    prod_fr: "Cases numérotées + valeurs",
                    prod_en: "Numbered boxes + values",
                    dep: isEn ? "Document vault, OCR.space" : "Coffre, OCR.space",
                  },
                  {
                    mod: isEn ? "Tax dictionary" : "Dictionnaire fiscal",
                    recv_fr: "Type de feuillet",
                    recv_en: "Slip type",
                    prod_fr: "Mapping cases → lignes fiscales",
                    prod_en: "Boxes → tax lines mapping",
                    dep: isEn ? "Rules, fiscal year" : "Règles, année fiscale",
                  },
                  {
                    mod: isEn ? "Tax engine" : "Moteur fiscal",
                    recv_fr: "Données validées",
                    recv_en: "Validated data",
                    prod_fr: "T1, TP-1, résumé",
                    prod_en: "T1, TP-1, summary",
                    dep: isEn ? "Dictionary, versioned rules" : "Dictionnaire, règles versionnées",
                  },
                  {
                    mod: isEn ? "Audit logs" : "Journaux d'audit",
                    recv_fr: "Toute action utilisateur",
                    recv_en: "All user actions",
                    prod_fr: "Journal horodaté + immuable",
                    prod_en: "Timestamped + immutable log",
                    dep: isEn ? "All modules" : "Tous les modules",
                  },
                ].map(row => (
                  <tr key={row.mod}>
                    <td><strong>{row.mod}</strong></td>
                    <td>{isEn ? row.recv_en : row.recv_fr}</td>
                    <td>{isEn ? row.prod_en : row.prod_fr}</td>
                    <td>{row.dep}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CHAPTER 3 — AUTH */}
      <section className="doc-section" id="auth">
        <div className="doc-section-inner">
          <div className="doc-chapter-header violet">
            <div className="doc-eyebrow">03 · {isEn ? "AUTHENTICATION & PERMISSIONS" : "AUTHENTIFICATION & PERMISSIONS"}</div>
            <h2>{isEn ? "Roles, access and server-side controls" : "Rôles, accès et contrôles côté serveur"}</h2>
          </div>

          <div className="doc-prose wide">
            <p>
              {isEn
                ? "EasyTax uses Clerk for authentication. Every protected route is verified server-side. A user can hold multiple roles without mixing personal and professional spaces — permissions are contextual, not global."
                : "EasyTax utilise Clerk pour l'authentification. Chaque route protégée est vérifiée côté serveur. Un utilisateur peut détenir plusieurs rôles sans mélanger les espaces personnels et professionnels — les permissions sont contextuelles, pas globales."}
            </p>
          </div>

          <div className="roles-grid">
            {[
              {
                role: "INDIVIDUAL",
                color: "coral",
                fr: "Particulier",
                en: "Individual",
                canFr: ["Créer son profil fiscal", "Répondre au questionnaire", "Importer des documents", "Consulter ses déclarations", "Voir son résultat estimé"],
                canEn: ["Create tax profile", "Complete questionnaire", "Import documents", "View own declarations", "See estimated result"],
                cannotFr: ["Voir d'autres dossiers", "Modifier les règles fiscales", "Accéder à l'administration"],
                cannotEn: ["View other files", "Modify tax rules", "Access administration"],
              },
              {
                role: "PREPARER",
                color: "cyan",
                fr: "Préparateur",
                en: "Preparer",
                canFr: ["Accéder aux dossiers autorisés", "Vérifier et corriger", "Ajouter des commentaires", "Valider avant transmission"],
                canEn: ["Access authorized files", "Review and correct", "Add comments", "Validate before filing"],
                cannotFr: ["Accéder à des dossiers non autorisés", "Modifier les règles fiscales"],
                cannotEn: ["Access unauthorized files", "Modify tax rules"],
              },
              {
                role: "BUSINESS",
                color: "gold",
                fr: "Entreprise",
                en: "Business",
                canFr: ["Gérer l'organisation", "Ajouter des employés", "Gérer les documents d'entreprise", "Consulter les obligations fiscales"],
                canEn: ["Manage organization", "Add employees", "Manage business documents", "View tax obligations"],
                cannotFr: ["Voir les dossiers personnels des employés", "Accéder à d'autres entreprises"],
                cannotEn: ["See employees' personal files", "Access other businesses"],
              },
              {
                role: "ADMIN / SUPER_ADMIN",
                color: "violet",
                fr: "Administrateur",
                en: "Administrator",
                canFr: ["Gérer tous les comptes", "Configurer les règles fiscales", "Surveiller les opérations", "Accéder aux journaux d'audit"],
                canEn: ["Manage all accounts", "Configure tax rules", "Monitor operations", "Access audit logs"],
                cannotFr: ["Modifier des déclarations soumises sans audit", "Bypasser les contrôles de sécurité"],
                cannotEn: ["Modify submitted declarations without audit", "Bypass security controls"],
              },
            ].map(r => (
              <div key={r.role} className={`role-card ${r.color}`}>
                <div className="role-badge">{r.role}</div>
                <div className="role-name">{isEn ? r.en : r.fr}</div>
                <div className="role-section">
                  <div className="role-label green">{isEn ? "✓ Can" : "✓ Peut"}</div>
                  {(isEn ? r.canEn : r.canFr).map(item => <div key={item} className="role-item can">{item}</div>)}
                </div>
                <div className="role-section">
                  <div className="role-label red">{isEn ? "✗ Cannot" : "✗ Ne peut pas"}</div>
                  {(isEn ? r.cannotEn : r.cannotFr).map(item => <div key={item} className="role-item cannot">{item}</div>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHAPTER 4 — WORKFLOW */}
      <section className="workflow-band" id="workflow">
        <div className="workflow-inner">
          <div className="doc-eyebrow">04 · {isEn ? "TAXPAYER WORKFLOW" : "WORKFLOW DU CONTRIBUABLE"}</div>
          <h2>{isEn ? "12 steps from account creation to archiving" : "12 étapes de la création du compte à l'archivage"}</h2>
          <p>
            {isEn
              ? "Each step has a defined objective, inputs, processing, outputs, and conditions to proceed. Backward loops are supported: correcting a document triggers re-evaluation of affected fields and recalculation of dependent lines."
              : "Chaque étape a un objectif défini, des entrées, un traitement, des sorties et des conditions pour continuer. Les retours en arrière sont supportés : corriger un document déclenche la réévaluation des champs concernés et le recalcul des lignes dépendantes."}
          </p>
          <div className="workflow-steps-grid">
            {[
              { n: "01", fr: "Identification & accès", en: "Identification & access", descFr: "Création du compte, authentification, choix de l'espace, attribution des permissions.", descEn: "Account creation, authentication, space selection, permission assignment." },
              { n: "02", fr: "Dossier fiscal", en: "Tax file", descFr: "Année fiscale, profil existant, résidence, juridiction et données déjà enregistrées.", descEn: "Fiscal year, existing profile, residence, jurisdiction and previously saved data." },
              { n: "03", fr: "Questionnaire adaptatif", en: "Adaptive questionnaire", descFr: "Questions conditionnelles, sauvegarde, contrôles de cohérence et progression réelle.", descEn: "Conditional questions, auto-save, consistency checks and real progress." },
              { n: "04", fr: "Documents & OCR", en: "Documents & OCR", descFr: "Importation, sécurité, classification, extraction des cases et validation des valeurs.", descEn: "Import, security, classification, box extraction and value validation." },
              { n: "05", fr: "Dictionnaire fiscal", en: "Tax dictionary", descFr: "Identification des documents, validation des cases et correspondance avec les champs fiscaux.", descEn: "Document identification, box validation and mapping to tax fields." },
              { n: "06", fr: "Moteur fiscal", en: "Tax engine", descFr: "Règles de l'année, calcul fédéral, provincial, crédits, déductions et contrôles.", descEn: "Annual rules, federal and provincial calculation, credits, deductions and checks." },
              { n: "07", fr: "Révision & validation", en: "Review & validation", descFr: "Résultats expliqués, anomalies, informations manquantes et corrections.", descEn: "Explained results, anomalies, missing information and corrections." },
              { n: "08", fr: "Transmission & suivi", en: "Filing & tracking", descFr: "Consentement, intégration autorisée, statut réel, accusés et archivage.", descEn: "Consent, authorized integration, real status, receipts and archiving." },
            ].map((step, i) => (
              <div key={step.n} className="workflow-step-card">
                <div className="workflow-step-num">{step.n}</div>
                <div className="workflow-step-body">
                  <strong>{isEn ? step.en : step.fr}</strong>
                  <p>{isEn ? step.descEn : step.descFr}</p>
                </div>
                {i < 7 && <ArrowRight size={14} className="workflow-step-arrow" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHAPTER 5 — PROFILE */}
      <section className="doc-section" id="profile">
        <div className="doc-section-inner">
          <div className="doc-chapter-header coral">
            <div className="doc-eyebrow">05 · {isEn ? "PROFILE & ADAPTIVE QUESTIONNAIRE" : "PROFIL & QUESTIONNAIRE ADAPTATIF"}</div>
            <h2>{isEn ? "How answers shape the next question" : "Comment les réponses façonnent la question suivante"}</h2>
          </div>
          <div className="doc-two-col">
            <div className="doc-prose">
              <p>
                {isEn
                  ? "The profile collects a taxpayer's stable identity — name, SIN, address, residence province, marital status, dependants. The adaptive questionnaire builds dynamically on top of this foundation. Answering 'yes' to self-employment income activates a new branch. Confirming a dependent opens child-credit questions. No irrelevant sections are shown."
                  : "Le profil collecte l'identité stable d'un contribuable — nom, NAS, adresse, province de résidence, état civil, personnes à charge. Le questionnaire adaptatif se construit dynamiquement sur cette base. Répondre 'oui' à un revenu d'emploi autonome active une nouvelle branche. Confirmer une personne à charge ouvre les questions sur les crédits pour enfants. Aucune section non pertinente n'est affichée."}
              </p>
              <h3>{isEn ? "Profile sections" : "Sections du profil"}</h3>
              <ul className="doc-list">
                {(isEn ? [
                  "Identity (name, SIN, date of birth)",
                  "Residence (province, city, postal code)",
                  "Family situation (marital status, dependants)",
                  "Income sources (employment, self-employment, investments, pensions)",
                  "Government benefits (EI, CCB, OAS)",
                  "Education and tuition",
                  "Deductions (RRSP, moving expenses, professional dues)",
                  "Credits (disability, medical, charitable donations)",
                ] : [
                  "Identité (nom, NAS, date de naissance)",
                  "Résidence (province, ville, code postal)",
                  "Situation familiale (état civil, personnes à charge)",
                  "Sources de revenus (emploi, autonome, placements, rentes)",
                  "Prestations gouvernementales (AE, ACE, SV)",
                  "Études et frais de scolarité",
                  "Déductions (REER, frais de déménagement, cotisations professionnelles)",
                  "Crédits (invalidité, médical, dons de bienfaisance)",
                ]).map(item => <li key={item}>{item}</li>)}
              </ul>
              <h3>{isEn ? "Field types" : "Types de champs"}</h3>
              <div className="field-types-grid">
                {[
                  { type: isEn ? "Required" : "Obligatoire", color: "red", desc: isEn ? "Cannot proceed without it" : "Impossible de continuer sans" },
                  { type: isEn ? "Optional" : "Facultatif", color: "green", desc: isEn ? "Skippable with default" : "Ignorable avec valeur par défaut" },
                  { type: isEn ? "Conditional" : "Conditionnel", color: "blue", desc: isEn ? "Appears based on prior answers" : "Apparaît selon les réponses précédentes" },
                  { type: isEn ? "Calculated" : "Calculé", color: "gold", desc: isEn ? "Derived from other fields" : "Dérivé d'autres champs" },
                ].map(f => (
                  <div key={f.type} className={`field-type-badge ${f.color}`}>
                    <strong>{f.type}</strong>
                    <small>{f.desc}</small>
                  </div>
                ))}
              </div>
            </div>
            <div className="doc-aside">
              <div className="doc-card">
                <div className="doc-card-title">{isEn ? "Auto-save & resume" : "Sauvegarde automatique & reprise"}</div>
                <p className="doc-card-body">
                  {isEn
                    ? "Progress is saved automatically at each step. A user who interrupts can resume exactly where they stopped. Previously confirmed data is not re-requested unless the user explicitly changes a profile section that invalidates it."
                    : "La progression est sauvegardée automatiquement à chaque étape. Un utilisateur qui interrompt peut reprendre exactement là où il s'est arrêté. Les données déjà confirmées ne sont pas re-demandées, sauf si l'utilisateur modifie explicitement une section du profil qui les invalide."}
                </p>
              </div>
              <div className="doc-card">
                <div className="doc-card-title">{isEn ? "Consistency checks" : "Contrôles de cohérence"}</div>
                {(isEn ? [
                  "SIN format validation",
                  "Postal code vs province match",
                  "RRSP contribution limit check",
                  "Self-employment income vs expenses ratio",
                  "Missing required fields before proceeding",
                ] : [
                  "Validation du format du NAS",
                  "Correspondance code postal / province",
                  "Vérification des plafonds REER",
                  "Ratio revenus / dépenses travail autonome",
                  "Champs obligatoires manquants avant de continuer",
                ]).map(item => (
                  <div key={item} className="doc-card-check">
                    <Check size={13} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SCREENSHOT — QUESTIONNAIRE */}
      <div className="screenshot-band">
        <div className="screenshot-band-inner">
          <div className="screenshot-band-text">
            <div className="screenshots-eyebrow">{isEn ? "PROFILE & QUESTIONNAIRE" : "PROFIL & QUESTIONNAIRE"}</div>
            <h3>{isEn ? "Adaptive questions — province, income, family status" : "Questions adaptatives — province, revenus, situation familiale"}</h3>
            <p>{isEn ? "The questionnaire adjusts to each user's profile. Only relevant sections are shown — 102 questions maximum, dynamically filtered." : "Le questionnaire s'adapte au profil de chaque utilisateur. Seules les sections pertinentes s'affichent — 102 questions maximum, filtrées dynamiquement."}</p>
          </div>
          <div className="screenshot-band-img">
            <img src="/screenshots/questionnaire.jpg" alt={isEn ? "Adaptive questionnaire" : "Questionnaire adaptatif"} loading="lazy" />
          </div>
        </div>
      </div>

      {/* CHAPTER 6 — DOCUMENTS & OCR */}
      <section className="doc-section alt" id="documents">
        <div className="doc-section-inner">
          <div className="doc-chapter-header cyan">
            <div className="doc-eyebrow">06 · {isEn ? "DOCUMENTS, VAULT & OCR" : "DOCUMENTS, COFFRE & OCR"}</div>
            <h2>{isEn ? "From upload to validated tax data" : "De l'importation aux données fiscales validées"}</h2>
          </div>
          <div className="doc-lifecycle">
            {[
              { n: "1", fr: "Importation", en: "Import", descFr: "PDF, JPG, PNG · vérification MIME · taille max", descEn: "PDF, JPG, PNG · MIME check · max size" },
              { n: "2", fr: "Sécurité", en: "Security", descFr: "Scan antivirus · isolation par utilisateur", descEn: "Antivirus scan · per-user isolation" },
              { n: "3", fr: "Déduplication", en: "Deduplication", descFr: "Hachage du contenu · alerte si doublon", descEn: "Content hash · duplicate alert" },
              { n: "4", fr: "Classification", en: "Classification", descFr: "Détection du type de feuillet via dictionnaire", descEn: "Slip type detection via dictionary" },
              { n: "5", fr: "OCR", en: "OCR", descFr: "Extraction des cases numérotées via OCR.space", descEn: "Box extraction via OCR.space" },
              { n: "6", fr: "Validation humaine", en: "Human validation", descFr: "Cases incertaines soumises à l'utilisateur", descEn: "Uncertain boxes submitted to user" },
              { n: "7", fr: "Rapprochement fiscal", en: "Tax matching", descFr: "Cases → lignes fiscales via dictionnaire", descEn: "Boxes → tax lines via dictionary" },
              { n: "8", fr: "Archivage", en: "Archiving", descFr: "Document lié au dossier fiscal permanent", descEn: "Document linked to permanent tax file" },
            ].map((step, i) => (
              <div key={step.n} className="lifecycle-step">
                <div className="lifecycle-num">{step.n}</div>
                <div className="lifecycle-body">
                  <strong>{isEn ? step.en : step.fr}</strong>
                  <small>{isEn ? step.descEn : step.descFr}</small>
                </div>
                {i < 7 && <div className="lifecycle-arrow">↓</div>}
              </div>
            ))}
          </div>
          <div className="doc-prose wide" style={{ marginTop: "32px" }}>
            <h3>{isEn ? "Handling difficult cases" : "Gestion des cas difficiles"}</h3>
            <div className="error-cases-grid">
              {[
                { icon: "⚠️", fr: "Document illisible", en: "Unreadable document", descFr: "Signal à l'utilisateur, option de re-soumission manuelle", descEn: "User notified, manual re-entry option" },
                { icon: "🔁", fr: "Doublon détecté", en: "Duplicate detected", descFr: "Alerte, confirmation requise avant remplacement", descEn: "Alert, confirmation required before replacement" },
                { icon: "❓", fr: "Valeur incertaine", en: "Uncertain value", descFr: "Case mise en attente, validée par l'utilisateur", descEn: "Box held pending, validated by user" },
                { icon: "📝", fr: "Erreur d'extraction", en: "Extraction error", descFr: "Correction manuelle possible, traçabilité maintenue", descEn: "Manual correction possible, traceability maintained" },
              ].map(item => (
                <div key={item.fr} className="error-case-card">
                  <span className="error-case-icon">{item.icon}</span>
                  <strong>{isEn ? item.en : item.fr}</strong>
                  <p>{isEn ? item.descEn : item.descFr}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SCREENSHOTS — OCR PIPELINE */}
      <section className="screenshots-section alt">
        <div className="screenshots-inner">
          <div className="screenshots-header">
            <div className="screenshots-eyebrow">{isEn ? "DOCUMENT VAULT & OCR" : "COFFRE DOCUMENTAIRE & OCR"}</div>
            <h2>{isEn ? "Upload → OCR → Human validation → Tax data" : "Téléversement → OCR → Validation humaine → Données fiscales"}</h2>
          </div>
          <div className="screenshots-grid-3">
            <div className="screenshot-card">
              <div className="screenshot-label">{isEn ? "Document vault — 3/3 analyzed" : "Coffre documentaire — 3/3 analysés"}</div>
              <img src="/screenshots/documents-vault.jpg" alt={isEn ? "Document vault" : "Coffre documentaire"} loading="lazy" />
            </div>
            <div className="screenshot-card">
              <div className="screenshot-label">{isEn ? "OCR step 3 — Validation (empty)" : "Étape 3 OCR — Validation (vide)"}</div>
              <img src="/screenshots/ocr-validation-empty.jpg" alt="OCR validation" loading="lazy" />
            </div>
            <div className="screenshot-card">
              <div className="screenshot-label">{isEn ? "OCR step 3 — Validation (12/18 extracted)" : "Étape 3 OCR — Validation (12/18 extraites)"}</div>
              <img src="/screenshots/ocr-validation-filled.jpg" alt="OCR validation filled" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* CHAPTER 7 — DICTIONARY */}
      <section className="doc-section" id="dictionary">
        <div className="doc-section-inner">
          <div className="doc-chapter-header violet">
            <div className="doc-eyebrow">07 · {isEn ? "TAX DICTIONARY" : "DICTIONNAIRE FISCAL"}</div>
            <h2>{isEn ? "43 slip types, boxes, and tax line mappings" : "43 types de feuillets, cases et correspondances fiscales"}</h2>
          </div>
          <div className="doc-prose wide">
            <p>
              {isEn
                ? "The tax dictionary is the bridge between a physical document and the tax return. It catalogs every slip type, every numbered box on that slip, valid value ranges, OCR aliases (how a scanner might misread a box label) and the tax lines they feed — versioned by fiscal year and jurisdiction."
                : "Le dictionnaire fiscal est le pont entre un document physique et la déclaration fiscale. Il catalogue chaque type de feuillet, chaque case numérotée, les plages de valeurs valides, les alias OCR (comment un scanner pourrait mal lire une étiquette de case) et les lignes fiscales qu'elles alimentent — versionné par année fiscale et juridiction."}
            </p>
          </div>
          <div className="slip-examples">
            <div className="doc-table-title">{isEn ? "Slip examples with box mappings" : "Exemples de feuillets avec correspondances de cases"}</div>
            <div className="slip-grid">
              {[
                { slip: "T4", boxFr: "Case 14 — Revenus d'emploi", boxEn: "Box 14 — Employment income", lineFr: "→ Ligne 10100 (T1 fédéral)", lineEn: "→ Line 10100 (T1 federal)" },
                { slip: "Relevé 1", boxFr: "Case A — Revenus d'emploi", boxEn: "Box A — Employment income", lineFr: "→ Ligne 101 (TP-1 provincial)", lineEn: "→ Line 101 (TP-1 provincial)" },
                { slip: "T4A", boxFr: "Case 020 — Pension ou rente", boxEn: "Box 020 — Pension or annuity", lineFr: "→ Ligne 11500 (T1 fédéral)", lineEn: "→ Line 11500 (T1 federal)" },
                { slip: "T4E", boxFr: "Case 14 — Prestations d'assurance-emploi", boxEn: "Box 14 — Employment insurance benefits", lineFr: "→ Ligne 11900 (T1 fédéral)", lineEn: "→ Line 11900 (T1 federal)" },
                { slip: "T5", boxFr: "Case 13 — Dividendes", boxEn: "Box 13 — Dividends", lineFr: "→ Ligne 12000 (T1 fédéral)", lineEn: "→ Line 12000 (T1 federal)" },
                { slip: "T2202", boxFr: "Case C — Frais de scolarité admissibles", boxEn: "Box C — Eligible tuition fees", lineFr: "→ Ligne 32300 (T1 fédéral)", lineEn: "→ Line 32300 (T1 federal)" },
              ].map(item => (
                <div key={item.slip} className="slip-card">
                  <div className="slip-badge">{item.slip}</div>
                  <div className="slip-box">{isEn ? item.boxEn : item.boxFr}</div>
                  <div className="slip-line">{isEn ? item.lineEn : item.lineFr}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SCREENSHOT — T4 SLIP */}
      <div className="screenshot-band alt">
        <div className="screenshot-band-inner reverse">
          <div className="screenshot-band-text">
            <div className="screenshots-eyebrow">{isEn ? "TAX DICTIONARY" : "DICTIONNAIRE FISCAL"}</div>
            <h3>{isEn ? "The T4 — the most common employment slip" : "Le T4 — le feuillet d'emploi le plus courant"}</h3>
            <p>{isEn ? "Each box on a T4 maps to a specific tax line. Box 14 (employment income) → Line 10100 of the federal T1. The dictionary catalogues all 43 slip types with the same level of precision." : "Chaque case du T4 correspond à une ligne fiscale précise. Case 14 (revenus d'emploi) → Ligne 10100 du T1 fédéral. Le dictionnaire catalogue les 43 types de feuillets avec le même niveau de précision."}</p>
          </div>
          <div className="screenshot-band-img wide">
            <img src="/screenshots/t4-slip.png" alt="T4 slip example" loading="lazy" />
          </div>
        </div>
      </div>

      {/* CHAPTER 8 — TAX ENGINE */}
      <section className="doc-section alt" id="engine">
        <div className="doc-section-inner">
          <div className="doc-chapter-header gold">
            <div className="doc-eyebrow">08 · {isEn ? "TAX ENGINE" : "MOTEUR FISCAL"}</div>
            <h2>{isEn ? "Versioned rules, traceable calculations" : "Règles versionnées, calculs traçables"}</h2>
          </div>
          <div className="doc-two-col">
            <div className="doc-prose">
              <p>
                {isEn
                  ? "The tax engine is separate from the interface. It receives validated data, applies the relevant rules for the year and jurisdiction, and produces a line-by-line explanation of how the result was calculated. Every line can be traced back to its source data, formula, rule version and fiscal year."
                  : "Le moteur fiscal est séparé de l'interface. Il reçoit les données validées, applique les règles pertinentes pour l'année et la juridiction, et produit une explication ligne par ligne de la manière dont le résultat a été calculé. Chaque ligne peut remonter vers ses données source, sa formule, sa version de règle et son année fiscale."}
              </p>
              <h3>{isEn ? "Income progression" : "Progression du revenu"}</h3>
              <div className="income-flow">
                {[
                  { fr: "Revenu total", en: "Total income", note_fr: "Somme de toutes les sources", note_en: "Sum of all sources" },
                  { fr: "Revenu net", en: "Net income", note_fr: "– Déductions", note_en: "– Deductions" },
                  { fr: "Revenu imposable", en: "Taxable income", note_fr: "– Déductions spéciales", note_en: "– Special deductions" },
                  { fr: "Impôt calculé", en: "Calculated tax", note_fr: "Barèmes fédéral + provincial", note_en: "Federal + provincial brackets" },
                  { fr: "Crédits appliqués", en: "Credits applied", note_fr: "Remboursables + non remboursables", note_en: "Refundable + non-refundable" },
                  { fr: "Solde final", en: "Final balance", note_fr: "Remboursement ou solde dû", note_en: "Refund or balance owing" },
                ].map((item, i) => (
                  <div key={item.fr} className="income-step">
                    <div className="income-step-body">
                      <strong>{isEn ? item.en : item.fr}</strong>
                      <small>{isEn ? item.note_en : item.note_fr}</small>
                    </div>
                    {i < 5 && <div className="income-arrow">↓</div>}
                  </div>
                ))}
              </div>
            </div>
            <div className="doc-aside">
              <div className="doc-card">
                <div className="doc-card-title">{isEn ? "Traceability per line" : "Traçabilité par ligne"}</div>
                {(isEn ? [
                  "Source data (which box, which slip)",
                  "Formula applied",
                  "Applicable rule",
                  "Fiscal year and jurisdiction",
                  "Rule version",
                  "Calculated result",
                  "Validation tests",
                ] : [
                  "Données d'origine (quelle case, quel feuillet)",
                  "Formule appliquée",
                  "Règle applicable",
                  "Année fiscale et juridiction",
                  "Version de la règle",
                  "Résultat calculé",
                  "Tests de validation",
                ]).map((item, i) => (
                  <div key={i} className="doc-card-check">
                    <span className="trace-num">{i + 1}</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="doc-card warning-card">
                <AlertTriangle size={16} />
                <div>
                  <strong>{isEn ? "Disclaimer" : "Avertissement"}</strong>
                  <p>{isEn ? "All calculations shown are preliminary estimates for preparation purposes only. Official results require transmission through authorized channels." : "Tous les calculs affichés sont des estimations préliminaires à des fins de préparation uniquement. Les résultats officiels nécessitent la transmission par les canaux autorisés."}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHAPTER 9 — SIMULATOR */}
      <section className="doc-section" id="simulator">
        <div className="doc-section-inner">
          <div className="doc-chapter-header coral">
            <div className="doc-eyebrow">09 · {isEn ? "SIMULATOR & RESULTS" : "SIMULATEUR & RÉSULTATS"}</div>
            <h2>{isEn ? "From estimate to filed declaration" : "De l'estimation à la déclaration déposée"}</h2>
          </div>
          <div className="status-progression">
            {[
              { status: isEn ? "Estimate" : "Estimation", desc: isEn ? "Preliminary, can change" : "Préliminaire, peut changer", color: "muted" },
              { status: isEn ? "Draft" : "Brouillon", desc: isEn ? "User reviewed, not finalized" : "Révisé par l'utilisateur, non finalisé", color: "blue" },
              { status: isEn ? "Validated" : "Validée", desc: isEn ? "Ready to file" : "Prête à soumettre", color: "green" },
              { status: isEn ? "Filed" : "Transmise", desc: isEn ? "Sent to government" : "Envoyée au gouvernement", color: "cyan" },
              { status: isEn ? "Accepted" : "Acceptée", desc: isEn ? "Confirmed by agency" : "Confirmée par l'agence", color: "gold" },
            ].map((s, i) => (
              <div key={s.status} className="status-step">
                <div className={`status-dot ${s.color}`} />
                <div className="status-body">
                  <strong>{s.status}</strong>
                  <small>{s.desc}</small>
                </div>
                {i < 4 && <ArrowRight size={13} className="status-arrow" />}
              </div>
            ))}
          </div>
          <div className="doc-prose wide" style={{ marginTop: "32px" }}>
            <p>
              {isEn
                ? "The simulator allows users to see the impact of any data change in real time. Correcting a T4 box value immediately shows how the taxable income and final balance shift. Every anomaly (missing data, conflicting values, exceeded limits) is flagged before validation. The system never silently changes a confirmed value."
                : "Le simulateur permet aux utilisateurs de voir l'impact de tout changement de données en temps réel. Corriger une valeur de case T4 montre immédiatement comment le revenu imposable et le solde final évoluent. Chaque anomalie (données manquantes, valeurs contradictoires, limites dépassées) est signalée avant la validation. Le système n'écrase jamais silencieusement une valeur confirmée."}
            </p>
          </div>
        </div>
      </section>

      {/* SCREENSHOTS — TAX ENGINE & SIMULATOR */}
      <section className="screenshots-section">
        <div className="screenshots-inner">
          <div className="screenshots-header">
            <div className="screenshots-eyebrow">{isEn ? "TAX ENGINE · SIMULATOR · RESULTS" : "MOTEUR FISCAL · SIMULATEUR · RÉSULTATS"}</div>
            <h2>{isEn ? "Line-by-line traceability, real numbers" : "Traçabilité ligne par ligne, chiffres réels"}</h2>
          </div>
          <div className="screenshots-grid-3">
            <div className="screenshot-card">
              <div className="screenshot-label">{isEn ? "Fiscal summary — Federal + Québec" : "Résumé fiscal — Fédéral + Québec"}</div>
              <img src="/screenshots/fiscal-summary.jpg" alt={isEn ? "Fiscal summary" : "Résumé fiscal"} loading="lazy" />
            </div>
            <div className="screenshot-card">
              <div className="screenshot-label">{isEn ? "T1 federal declaration — 9 lines filled" : "Déclaration T1 fédérale — 9 lignes remplies"}</div>
              <img src="/screenshots/declaration-t1.jpg" alt="T1 declaration" loading="lazy" />
            </div>
            <div className="screenshot-card">
              <div className="screenshot-label">{isEn ? "Assessment summary — Federal NOA style" : "Sommaire de cotisation — style avis fédéral"}</div>
              <img src="/screenshots/assessment-summary.jpg" alt={isEn ? "Assessment summary" : "Sommaire de cotisation"} loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* CHAPTER 10 — BUSINESS */}
      <section className="doc-section alt" id="business">
        <div className="doc-section-inner">
          <div className="doc-chapter-header cyan">
            <div className="doc-eyebrow">10 · {isEn ? "BUSINESS SPACE" : "ESPACE ENTREPRISE"}</div>
            <h2>{isEn ? "Organizations, identifiers and employees" : "Organisations, identifiants et employés"}</h2>
          </div>
          <div className="doc-two-col">
            <div className="doc-prose">
              <p>
                {isEn
                  ? "The business space is completely separate from the individual space. A business account manages its own organization, employees, documents and tax obligations without accessing any employee's personal tax data."
                  : "L'espace entreprise est complètement séparé de l'espace particulier. Un compte entreprise gère sa propre organisation, ses employés, ses documents et ses obligations fiscales sans accéder aux données fiscales personnelles d'aucun employé."}
              </p>
              <h3>{isEn ? "Tax identifiers managed" : "Identifiants fiscaux gérés"}</h3>
              <div className="identifiers-grid">
                {[
                  { id: "NAS / SIN", fr: "Numéro d'assurance sociale (particulier)", en: "Social Insurance Number (individual)" },
                  { id: "NE / BN", fr: "Numéro d'entreprise fédéral ARC", en: "Federal Business Number (CRA)" },
                  { id: "NEQ", fr: "Numéro d'entreprise du Québec", en: "Quebec Enterprise Number" },
                  { id: isEn ? "Payroll account" : "Compte de paie", fr: "Compte programme ARC (paie)", en: "CRA payroll program account" },
                  { id: "GST/HST", fr: "Compte TPS/TVH ARC", en: "CRA GST/HST account" },
                  { id: "QST", fr: "Compte TVQ Revenu Québec", en: "Revenu Québec QST account" },
                ].map(item => (
                  <div key={item.id} className="identifier-card">
                    <strong>{item.id}</strong>
                    <small>{isEn ? item.en : item.fr}</small>
                  </div>
                ))}
              </div>
            </div>
            <div className="doc-aside">
              <div className="doc-card">
                <div className="doc-card-title">{isEn ? "Access controls" : "Contrôles d'accès"}</div>
                <p className="doc-card-body">
                  {isEn
                    ? "Each business's data is isolated. An employee granted access to a business space sees only what their role permits within that organization. Cross-business data leakage is prevented at the database query level."
                    : "Les données de chaque entreprise sont isolées. Un employé ayant accès à un espace entreprise ne voit que ce que son rôle lui permet au sein de cette organisation. Les fuites de données inter-entreprises sont prévenues au niveau des requêtes de base de données."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHAPTER 11 + 12 — PREPARER & ADMIN */}
      <section className="doc-section" id="preparer">
        <div className="doc-section-inner">
          <div className="doc-chapter-header violet">
            <div className="doc-eyebrow">11 · {isEn ? "PREPARER SPACE" : "ESPACE PRÉPARATEUR"}</div>
            <h2>{isEn ? "Authorized file access and review" : "Accès autorisé aux dossiers et révision"}</h2>
          </div>
          <div className="doc-prose wide">
            <p>
              {isEn
                ? "A tax preparer can only access files that a client has explicitly authorized. The authorization is granular: a client can grant read-only access, correction access, or full preparation rights. Every action by the preparer is logged in the audit trail. The preparer cannot modify the client's profile information without explicit permission."
                : "Un préparateur fiscal ne peut accéder qu'aux dossiers qu'un client a explicitement autorisés. L'autorisation est granulaire : un client peut accorder un accès en lecture seule, un accès de correction ou des droits de préparation complets. Chaque action du préparateur est enregistrée dans la piste d'audit. Le préparateur ne peut pas modifier les informations de profil du client sans permission explicite."}
            </p>
            <div className="preparer-actions">
              {(isEn ? [
                { icon: "👁", label: "View authorized files", desc: "Read-only access to client data" },
                { icon: "✏️", label: "Correct values", desc: "Modify with explicit authorization" },
                { icon: "💬", label: "Add comments", desc: "Internal notes on any section" },
                { icon: "✓", label: "Pre-validate", desc: "Approve before client final review" },
                { icon: "📋", label: "View history", desc: "All changes with timestamps" },
              ] : [
                { icon: "👁", label: "Consulter les dossiers autorisés", desc: "Accès en lecture aux données client" },
                { icon: "✏️", label: "Corriger des valeurs", desc: "Modifier avec autorisation explicite" },
                { icon: "💬", label: "Ajouter des commentaires", desc: "Notes internes sur toute section" },
                { icon: "✓", label: "Pré-valider", desc: "Approuver avant révision finale du client" },
                { icon: "📋", label: "Voir l'historique", desc: "Tous les changements avec horodatage" },
              ]).map(action => (
                <div key={action.label} className="preparer-action-card">
                  <span className="preparer-action-icon">{action.icon}</span>
                  <strong>{action.label}</strong>
                  <small>{action.desc}</small>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="doc-section alt" id="admin">
        <div className="doc-section-inner">
          <div className="doc-chapter-header gold">
            <div className="doc-eyebrow">12 · {isEn ? "SUPER ADMINISTRATION" : "SUPER ADMINISTRATION"}</div>
            <h2>{isEn ? "Complete platform control and governance" : "Contrôle complet de la plateforme et gouvernance"}</h2>
          </div>
          <div className="admin-modules-grid">
            {[
              { icon: "👥", fr: "Gestion des utilisateurs", en: "User management", descFr: "Comptes, rôles, permissions, suspensions", descEn: "Accounts, roles, permissions, suspensions" },
              { icon: "🏢", fr: "Gestion des entreprises", en: "Business management", descFr: "Organisations, employés, identifiants", descEn: "Organizations, employees, identifiers" },
              { icon: "📊", fr: "Déclarations & dossiers", en: "Declarations & files", descFr: "Vue globale de tous les dossiers", descEn: "Global view of all files" },
              { icon: "⚙️", fr: "Moteur fiscal", en: "Tax engine config", descFr: "Règles, barèmes, versions annuelles", descEn: "Rules, brackets, annual versions" },
              { icon: "📚", fr: "Dictionnaire fiscal", en: "Tax dictionary", descFr: "Feuillets, cases, correspondances", descEn: "Slips, boxes, mappings" },
              { icon: "🔍", fr: "Files OCR", en: "OCR queues", descFr: "Statut des traitements, erreurs", descEn: "Processing status, errors" },
              { icon: "📋", fr: "Journaux d'audit", en: "Audit logs", descFr: "Toutes les actions sensibles horodatées", descEn: "All sensitive actions timestamped" },
              { icon: "🔔", fr: "Notifications", en: "Notifications", descFr: "Envoi, statut de lecture, types", descEn: "Sending, read status, types" },
              { icon: "🔗", fr: "Connecteurs gouvernementaux", en: "Government connectors", descFr: "ARC, Revenu Québec, statuts", descEn: "CRA, Revenu Québec, statuses" },
              { icon: "🛡️", fr: "Sécurité", en: "Security", descFr: "Sessions, tentatives d'accès, alertes", descEn: "Sessions, access attempts, alerts" },
            ].map(mod => (
              <div key={mod.fr} className="admin-module-card">
                <span className="admin-module-icon">{mod.icon}</span>
                <strong>{isEn ? mod.en : mod.fr}</strong>
                <small>{isEn ? mod.descEn : mod.descFr}</small>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCREENSHOT — ADMIN CONSOLE */}
      <div className="screenshot-band dark">
        <div className="screenshot-band-inner">
          <div className="screenshot-band-text light">
            <div className="screenshots-eyebrow accent">{isEn ? "SUPER ADMINISTRATION" : "SUPER ADMINISTRATION"}</div>
            <h3>{isEn ? "Complete control — 7 users, 6 fiscal profiles, 4 documents" : "Contrôle total — 7 utilisateurs, 6 profils fiscaux, 4 documents"}</h3>
            <p>{isEn ? "The admin console gives the SUPER_ADMIN full visibility over all individual and business activity, declarations, and platform settings." : "La console d'administration donne au SUPER_ADMIN une visibilité complète sur toutes les activités individuelles, entreprises, déclarations et paramètres de la plateforme."}</p>
          </div>
          <div className="screenshot-band-img">
            <img src="/screenshots/admin-console.jpg" alt={isEn ? "Admin console" : "Console d'administration"} loading="lazy" />
          </div>
        </div>
      </div>

      {/* CHAPTER 13 — INTEGRATIONS */}
      <section className="doc-section" id="integrations">
        <div className="doc-section-inner">
          <div className="doc-chapter-header coral">
            <div className="doc-eyebrow">13 · {isEn ? "CRA & REVENU QUÉBEC INTEGRATIONS" : "INTÉGRATIONS ARC & REVENU QUÉBEC"}</div>
            <h2>{isEn ? "What is planned vs. what is active" : "Ce qui est prévu vs ce qui est actif"}</h2>
          </div>
          <div className="doc-prose wide">
            <p>
              {isEn
                ? "EasyTax clearly distinguishes between simulated filing (for preparation and review purposes) and actual government transmission (requiring authorized software certification and formal agreements with CRA and Revenu Québec). A simulated transmission is never presented as an official government operation."
                : "EasyTax distingue clairement entre la transmission simulée (à des fins de préparation et de révision) et la transmission gouvernementale réelle (nécessitant une certification de logiciel autorisé et des accords formels avec l'ARC et Revenu Québec). Une transmission simulée n'est jamais présentée comme une opération gouvernementale officielle."}
            </p>
          </div>
          <div className="integration-status-grid">
            {[
              { feature_fr: "Préparation du fichier XML NETFILE/IMPÔTNET", feature_en: "XML file preparation for NETFILE/IMPÔTNET", status: isEn ? "Planned" : "Prévu", color: "planned" },
              { feature_fr: "Validation du format avant soumission", feature_en: "Format validation before submission", status: isEn ? "In development" : "En développement", color: "dev" },
              { feature_fr: "Transmission NETFILE (T1)", feature_en: "NETFILE transmission (T1)", status: isEn ? "Planned" : "Prévu", color: "planned" },
              { feature_fr: "Transmission IMPÔTNET (TP-1)", feature_en: "IMPÔTNET transmission (TP-1)", status: isEn ? "Planned" : "Prévu", color: "planned" },
              { feature_fr: "Réception des accusés de réception", feature_en: "Receipt acknowledgment", status: isEn ? "Planned" : "Prévu", color: "planned" },
              { feature_fr: "Gestion des rejets et corrections", feature_en: "Rejection handling and corrections", status: isEn ? "Planned" : "Prévu", color: "planned" },
            ].map(item => (
              <div key={item.feature_fr} className="integration-row">
                <span className={`integration-badge ${item.color}`}>{item.status}</span>
                <span>{isEn ? item.feature_en : item.feature_fr}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHAPTER 14 — SECURITY */}
      <section className="doc-section alt" id="security">
        <div className="doc-section-inner">
          <div className="doc-chapter-header cyan">
            <div className="doc-eyebrow">14 · {isEn ? "SECURITY, PRIVACY & AUDIT" : "SÉCURITÉ, CONFIDENTIALITÉ & AUDIT"}</div>
            <h2>{isEn ? "Protection, isolation and traceability" : "Protection, isolation et traçabilité"}</h2>
          </div>
          <div className="security-pillars">
            {[
              {
                icon: "🔐",
                fr: "Authentification",
                en: "Authentication",
                items_fr: ["Sessions Clerk sécurisées", "Vérification côté serveur à chaque requête", "Tokens à durée limitée", "Révocation immédiate"],
                items_en: ["Secure Clerk sessions", "Server-side verification on every request", "Time-limited tokens", "Immediate revocation"],
              },
              {
                icon: "🔒",
                fr: "Isolation des données",
                en: "Data isolation",
                items_fr: ["Requêtes filtrées par userId côté serveur", "Aucune donnée croisée entre utilisateurs", "Documents privés par namespace", "Séparation des espaces (particulier/entreprise/préparateur)"],
                items_en: ["Queries filtered by userId server-side", "No cross-user data leakage", "Private documents by namespace", "Space separation (individual/business/preparer)"],
              },
              {
                icon: "📋",
                fr: "Journaux d'audit",
                en: "Audit logs",
                items_fr: ["Toutes les actions sensibles enregistrées", "Horodatage immuable", "Identité de l'acteur préservée", "Consultation possible par les administrateurs"],
                items_en: ["All sensitive actions recorded", "Immutable timestamps", "Actor identity preserved", "Viewable by administrators"],
              },
              {
                icon: "💾",
                fr: "Données & sauvegardes",
                en: "Data & backups",
                items_fr: ["Base de données Neon PostgreSQL", "Sauvegardes automatiques", "Procédures de reprise documentées", "Conservation des données selon réglementation"],
                items_en: ["Neon PostgreSQL database", "Automatic backups", "Documented recovery procedures", "Data retention per regulation"],
              },
            ].map(pillar => (
              <div key={pillar.fr} className="security-pillar">
                <div className="security-pillar-header">
                  <span>{pillar.icon}</span>
                  <strong>{isEn ? pillar.en : pillar.fr}</strong>
                </div>
                <ul className="security-list">
                  {(isEn ? pillar.items_en : pillar.items_fr).map(item => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHAPTER 15 — SCENARIOS */}
      <section className="doc-section" id="scenarios">
        <div className="doc-section-inner">
          <div className="doc-chapter-header violet">
            <div className="doc-eyebrow">15 · {isEn ? "COMPLETE SCENARIOS" : "SCÉNARIOS COMPLETS"}</div>
            <h2>{isEn ? "10 end-to-end test cases" : "10 cas de bout en bout"}</h2>
          </div>
          <div className="scenarios-grid">
            {[
              { n: "01", fr: "Salarié avec T4 et Relevé 1", en: "Employee with T4 and Relevé 1", descFr: "Importation des deux feuillets, OCR, validation et calcul complet T1/TP-1.", descEn: "Import both slips, OCR, validation and complete T1/TP-1 calculation." },
              { n: "02", fr: "Bénéficiaire de prestations", en: "Benefits recipient", descFr: "AE, ACE, PSV — identification des sources, cases correspondantes, lignes fiscales.", descEn: "EI, CCB, OAS — source identification, corresponding boxes, tax lines." },
              { n: "03", fr: "Travailleur autonome", en: "Self-employed worker", descFr: "Revenus, dépenses déductibles, calcul des cotisations et crédits applicables.", descEn: "Income, deductible expenses, contribution calculation and applicable credits." },
              { n: "04", fr: "OCR incomplet", en: "Incomplete OCR", descFr: "Cases illisibles signalées, validation manuelle requise, recalcul après correction.", descEn: "Unreadable boxes flagged, manual validation required, recalculation after correction." },
              { n: "05", fr: "Correction d'une valeur extraite", en: "Correcting an extracted value", descFr: "Valeur OCR incorrecte → correction → réévaluation des champs dépendants → nouveau résultat.", descEn: "Incorrect OCR value → correction → dependent fields re-evaluated → new result." },
              { n: "06", fr: "Entreprise gérant ses employés", en: "Business managing employees", descFr: "Ajout d'employés, émission de T4, séparation stricte des données personnelles.", descEn: "Add employees, issue T4s, strict personal data separation." },
              { n: "07", fr: "Préparateur révisant un dossier", en: "Preparer reviewing a file", descFr: "Accès autorisé, corrections avec traçabilité, validation avant soumission client.", descEn: "Authorized access, corrections with traceability, validation before client submission." },
              { n: "08", fr: "Administrateur corrigeant une règle fiscale", en: "Admin correcting a tax rule", descFr: "Modification versionnée, impact sur les dossiers concernés, validation avant déploiement.", descEn: "Versioned modification, impact on affected files, validation before deployment." },
              { n: "09", fr: "Déclaration refusée par un connecteur", en: "Declaration rejected by connector", descFr: "Réception du rejet, affichage de la raison, correction guidée, nouvelle soumission.", descEn: "Rejection received, reason displayed, guided correction, resubmission." },
              { n: "10", fr: "Session interrompue puis reprise", en: "Interrupted session resumed", descFr: "Toutes les données préservées, reprise exacte du point d'arrêt, aucune re-saisie requise.", descEn: "All data preserved, exact resumption point, no re-entry required." },
            ].map(s => (
              <div key={s.n} className="scenario-card">
                <div className="scenario-num">{s.n}</div>
                <div className="scenario-body">
                  <strong>{isEn ? s.en : s.fr}</strong>
                  <p>{isEn ? s.descEn : s.descFr}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHAPTER 16 — TESTS */}
      <section className="doc-section alt" id="tests">
        <div className="doc-section-inner">
          <div className="doc-chapter-header gold">
            <div className="doc-eyebrow">16 · {isEn ? "TESTS & ACCEPTANCE CRITERIA" : "TESTS & CRITÈRES D'ACCEPTATION"}</div>
            <h2>{isEn ? "Test matrix by function" : "Matrice de tests par fonction"}</h2>
          </div>
          <div className="doc-prose wide">
            <p>
              {isEn
                ? "Each test case specifies the function tested, preconditions, input data, executed action, expected result, and current status. Tests are not invented — unverified items are explicitly marked as 'Not tested'."
                : "Chaque cas de test précise la fonction testée, les préconditions, les données d'entrée, l'action exécutée, le résultat attendu et le statut actuel. Les tests ne sont pas inventés — les éléments non vérifiés sont explicitement marqués 'Non testé'."}
            </p>
          </div>
          <div className="test-matrix">
            <table className="doc-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>{isEn ? "Function" : "Fonction"}</th>
                  <th>{isEn ? "Input" : "Entrée"}</th>
                  <th>{isEn ? "Expected" : "Attendu"}</th>
                  <th>{isEn ? "Status" : "Statut"}</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { id: "T-01", fn_fr: "Authentification", fn_en: "Authentication", in_fr: "Email + mot de passe valide", in_en: "Valid email + password", exp_fr: "Session créée, redirection dashboard", exp_en: "Session created, dashboard redirect", status: isEn ? "Passed" : "Réussi", color: "green" },
                  { id: "T-02", fn_fr: "OCR T4", fn_en: "T4 OCR", in_fr: "Fichier T4 PDF", in_en: "T4 PDF file", exp_fr: "Cases 14, 22, 52 extraites", exp_en: "Boxes 14, 22, 52 extracted", status: isEn ? "Passed" : "Réussi", color: "green" },
                  { id: "T-03", fn_fr: "Moteur fiscal", fn_en: "Tax engine", in_fr: "Revenu emploi 50 000 $", in_en: "Employment income $50,000", exp_fr: "Calcul T1 traçable correct", exp_en: "Correct traceable T1 calculation", status: isEn ? "Partial" : "Partiel", color: "yellow" },
                  { id: "T-04", fn_fr: "Isolation des données", fn_en: "Data isolation", in_fr: "userId B accédant données userId A", in_en: "userId B accessing userId A data", exp_fr: "Accès refusé (403)", exp_en: "Access denied (403)", status: isEn ? "Passed" : "Réussi", color: "green" },
                  { id: "T-05", fn_fr: "Transmission NETFILE", fn_en: "NETFILE filing", in_fr: "Déclaration validée", in_en: "Validated declaration", exp_fr: "Fichier XML conforme envoyé", exp_en: "Compliant XML file sent", status: isEn ? "Not tested" : "Non testé", color: "gray" },
                  { id: "T-06", fn_fr: "Correction OCR", fn_en: "OCR correction", in_fr: "Valeur incorrecte corrigée", in_en: "Incorrect value corrected", exp_fr: "Recalcul des lignes dépendantes", exp_en: "Dependent lines recalculated", status: isEn ? "Passed" : "Réussi", color: "green" },
                ].map(test => (
                  <tr key={test.id}>
                    <td><code>{test.id}</code></td>
                    <td>{isEn ? test.fn_en : test.fn_fr}</td>
                    <td>{isEn ? test.in_en : test.in_fr}</td>
                    <td>{isEn ? test.exp_en : test.exp_fr}</td>
                    <td><span className={`test-status ${test.color}`}>{test.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CHAPTER 17 — ROADMAP */}
      <section className="doc-section" id="roadmap">
        <div className="doc-section-inner">
          <div className="doc-chapter-header coral">
            <div className="doc-eyebrow">17 · {isEn ? "ROADMAP & CURRENT STATE" : "ROADMAP & ÉTAT RÉEL"}</div>
            <h2>{isEn ? "What works, what is planned, what is missing" : "Ce qui fonctionne, ce qui est prévu, ce qui manque"}</h2>
          </div>
          <div className="roadmap-grid">
            {[
              {
                label: isEn ? "Operational & verified" : "Opérationnel & vérifié",
                color: "green",
                items_fr: ["Authentification Clerk", "Profil fiscal utilisateur", "Questionnaire adaptatif", "Coffre documentaire", "Intégration OCR.space", "Espace entreprise (base)", "Console d'administration (10 modules)", "Journaux d'audit", "Notifications système"],
                items_en: ["Clerk authentication", "User tax profile", "Adaptive questionnaire", "Document vault", "OCR.space integration", "Business space (base)", "Admin console (10 modules)", "Audit logs", "System notifications"],
              },
              {
                label: isEn ? "Partially operational" : "Partiellement opérationnel",
                color: "yellow",
                items_fr: ["Moteur fiscal T1 (calculs de base)", "Dictionnaire fiscal (catalogue partiel)", "Espace préparateur", "Simulateur de résultats"],
                items_en: ["T1 tax engine (basic calculations)", "Tax dictionary (partial catalog)", "Preparer space", "Results simulator"],
              },
              {
                label: isEn ? "In development" : "En développement",
                color: "blue",
                items_fr: ["Moteur fiscal TP-1 complet", "Dictionnaire fiscal — 43 feuillets", "Simulation de scénarios", "Tests unitaires du moteur"],
                items_en: ["Complete TP-1 tax engine", "Tax dictionary — 43 slips", "Scenario simulation", "Engine unit tests"],
              },
              {
                label: isEn ? "Planned / not started" : "Prévu / non démarré",
                color: "gray",
                items_fr: ["Connecteur NETFILE (ARC)", "Connecteur IMPÔTNET (Revenu Québec)", "Certification de logiciel autorisé", "Transmission gouvernementale réelle"],
                items_en: ["NETFILE connector (CRA)", "IMPÔTNET connector (Revenu Québec)", "Authorized software certification", "Real government transmission"],
              },
            ].map(category => (
              <div key={category.label} className={`roadmap-category ${category.color}`}>
                <div className="roadmap-category-title">
                  <span className={`roadmap-dot ${category.color}`} />
                  {category.label}
                </div>
                <ul className="roadmap-list">
                  {(isEn ? category.items_en : category.items_fr).map(item => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TABLE OF CONTENTS */}
      <section className="toc-section" id="chapters">
        <div className="doc-section-inner">
          <div className="doc-eyebrow" style={{ marginBottom: "16px" }}>
            {isEn ? "COMPLETE TABLE OF CONTENTS" : "TABLE DES MATIÈRES COMPLÈTE"}
          </div>
          <h2 style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800, fontSize: "clamp(28px, 3.5vw, 44px)", letterSpacing: "-0.06em", color: "var(--ink)", marginBottom: "32px" }}>
            {isEn ? "All 17 chapters" : "Les 17 chapitres"}
          </h2>
          <div className="toc-grid">
            {chapters.map(ch => {
              const Icon = ch.icon;
              return (
                <a
                  key={ch.id}
                  href={`#${ch.slug}`}
                  className={`toc-card ${ch.color}`}
                  onClick={() => setActiveChapter(ch.id)}
                >
                  <div className="toc-card-eyebrow">{ch.eyebrow}</div>
                  <div className="toc-card-icon"><Icon size={18} /></div>
                  <div className="toc-card-title">{isEn ? ch.titleEn : ch.titleFr}</div>
                  <ChevronRight size={14} className="toc-card-arrow" />
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact">
        <div className="footer-brand">
          <span className="brand-mark small"><span>ET</span></span>
          <span><strong>Easy</strong><b>Tax</b></span>
        </div>
        <p>{isEn ? "EasyTax · Functional design document · Canada / Quebec" : "EasyTax · Document de conception fonctionnelle · Canada / Québec"}</p>
        <div className="footer-links">
          <a href="#top">{isEn ? "Top" : "Haut"}</a>
          <a href="#chapters">{isEn ? "Chapters" : "Chapitres"}</a>
          <button onClick={() => setLang(isEn ? "fr" : "en")}>{isEn ? "Français" : "English"}</button>
        </div>
      </footer>
    </main>
  );
}

export default App;
