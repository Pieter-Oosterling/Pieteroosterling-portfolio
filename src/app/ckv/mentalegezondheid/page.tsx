import type { Metadata } from 'next';
import Link from 'next/link';
import ArtworkInteractive from './ArtworkInteractive';
import BalanceModelInteractive from './BalanceModelInteractive';
import { ImageSlot, ProcessGallery, VideoPlayerSlot } from './MediaShowcase';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Verborgen Woorden — Mentale Gezondheid & CKV Kunstwerk | Pieter Oosterling',
  description:
    'De werkelijkheid achter een perfecte buitenkant. Een CKV-project over actuele mentale gezondheid bij scholieren, draagkracht vs draaglast, en directe hulp.',
};

export default function MentaleGezondheidPage() {
  return (
    <main className={styles.pageWrapper}>
      <div className={styles.container}>

        {/* Quick Navigation Anchor Bar for Mobile & NFC Visitors */}
        <nav className={styles.quickNavWrapper} aria-label="Snelmenu">
          <div className={styles.quickNav}>
            <a href="#kunstwerk" className={styles.quickNavLink}>🎨 Kunstwerk</a>
            <a href="#proces" className={styles.quickNavLink}>📸 Maakproces</a>
            <a href="#video" className={styles.quickNavLink}>🎬 Video</a>
            <a href="#verslag" className={styles.quickNavLink}>📄 CKV Verslag</a>
            <a href="#cijfers" className={styles.quickNavLink}>📊 Cijfers 2025</a>
            <a href="#werking" className={styles.quickNavLink}>⚖️ Hoe het werkt</a>
            <a href="#herkennen" className={styles.quickNavLink}>🔍 Signalen</a>
            <a href="#zelf-doen" className={styles.quickNavLink}>💡 Wat kun je doen?</a>
            <a href="#ander-helpen" className={styles.quickNavLink}>🤝 Een ander helpen</a>
            <a href="#hulp" className={styles.quickNavLink}>🚨 Waar terecht?</a>
          </div>
        </nav>

        {/* Hero Section */}
        <header className={styles.heroSection}>
          <div className={styles.heroTag}>
            <span>CKV Eindwerk &amp; Maatschappelijk Project</span>
          </div>
          <h1 className={styles.heroTitle}>
            VERBORGEN WOORDEN
          </h1>
          <p className={styles.heroSubtitle}>
            De werkelijkheid achter een perfecte buitenkant
          </p>

          <div className={styles.heroIntroBox}>
            <h2 className={styles.heroQuestion}>&ldquo;Hoe gaat het met je?&rdquo;</h2>
            <p>
              Een simpele vraag die we dagelijks gedachteloos aan elkaar stellen.
              Vaak volgt een automatisch antwoord: <em>&lsquo;Goed, en met jou?&rsquo;</em> Maar is dat antwoord altijd eerlijk?
            </p>
            <p>
              Niet iedereen laat aan de buitenkant zien hoe hij of zij zich daadwerkelijk voelt.
              Achter een glimlach, verzorgd voorkomen of vrolijke grappen in de klas kunnen stress,
              faalangst, eenzaamheid en slapeloze nachten schuilgaan.
            </p>
            <p>
              Deze pagina is het digitale verlengstuk van mijn CKV-kunstwerk. Hier ontdek je
              waarom mentale gezondheid actueler is dan ooit onder jongeren, hoe het evenwicht in je hoofd werkt,
              hoe je signalen herkent en waar je terechtkunt wanneer het masker te zwaar wordt.
            </p>
          </div>

          <div className={styles.nfcNotice}>
            <span>📡</span>
            <span>Geopend via NFC op het kunstwerk of online via <strong>pieteroosterling.nl/ckv/mentalegezondheid</strong></span>
          </div>
        </header>

        {/* Hero Media Showcase: Grote Overzichtsfoto van het Kunstwerk */}
        <div className={styles.heroArtworkCard}>
          <div className={styles.heroArtworkImageSlot}>
            <ImageSlot
              src="/ckv/mentalegezondheid/kunstwerk-totaal.jpg"
              alt="Totaaloverzicht van het 3D CKV kunstwerk Verborgen Woorden"
              title="Totaaloverzicht van het Kunstwerk"
              tip="Plaats hier je mooiste overzichtsfoto van het voltooide 3D hoofd op een neutrale achtergrond of sokkel."
              height="380px"
              icon="🗿"
            />
          </div>
          <div className={styles.heroArtworkCaption}>
            <span className={styles.heroArtworkCaptionTitle}>
              <span>🎭</span>
              <span>Verborgen Woorden — 3D Sculptuur &amp; Mixed Media</span>
            </span>
            <span className={styles.heroArtworkTag}>CKV Eindwerk · Pieter Oosterling</span>
          </div>
        </div>

        {/* SECTION 1: Het Kunstwerk & Gillian Wearing */}
        <section id="kunstwerk" className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.tag}>Het Kunstwerk</span>
            <h2 className={styles.sectionTitle}>1. Het verhaal achter &apos;Verborgen Woorden&apos;</h2>
            <p className={styles.sectionLead}>
              Mijn CKV-kunstwerk is een driedimensionaal beeld in de vorm van een menselijk hoofd,
              waarbij de binnenkant van het brein open en zichtbaar is gemaakt.
            </p>
          </div>

          <div className={styles.artContextCard}>
            <p>
              Het werk toont twee contrasterende werelden binnen één persoon. Aan de ene kant zie je een
              strakke, rustige en opgeruimde buitenkant. Aan de andere kant openbaart zich een rauwe werkelijkheid:
              scheuren, tandwielen, draden, een tikkende wekker en een smartphone die symbool staan voor de
              ononderbroken stroom van prikkels en verwachtingen.
            </p>

            <div className={styles.artTwoCol}>
              <div className={styles.artHalfBox}>
                <h4>😊 De Buitenkant</h4>
                <div style={{ margin: '1rem 0' }}>
                  <ImageSlot
                    src="/ckv/mentalegezondheid/kunstwerk-buitenkant.jpg"
                    alt="Foto van de rustige buitenkant van het kunstwerk"
                    title="Foto Buitenkant (Façade)"
                    tip="Close-up van het briefje 'Met mij gaat het GOED' en 'Blijf glimlachen!'"
                    height="180px"
                    icon="😊"
                  />
                </div>
                <p>
                  Uit de mond steekt een briefje met de tekst: <strong>&lsquo;Met mij gaat het GOED&rsquo;</strong>.
                  Op de lippen staat de sociale dwingende oproep: <strong>&lsquo;Blijf glimlachen!&rsquo;</strong>.
                  Het verbeeldt de druk om te conformeren en de angst om anderen tot last te zijn.
                </p>
              </div>

              <div className={styles.artHalfBox}>
                <h4>🧠 De Binnenkant</h4>
                <div style={{ margin: '1rem 0' }}>
                  <ImageSlot
                    src="/ckv/mentalegezondheid/kunstwerk-binnenkant.jpg"
                    alt="Foto van de opengewerkte hersenkamer met tandwielen en draden"
                    title="Foto Binnenkant (Realiteit)"
                    tip="Foto van de opengewerkte hersenen met ijzerdraad, wekker en tandwielen"
                    height="180px"
                    icon="🧠"
                  />
                </div>
                <p>
                  Vastgelopen tandwielen (overpeinzen en piekeren), een wekker (toetsdruk en tijdstekort)
                  en oplichtende telefoondraden (sociale vergelijking). Het laat zien dat rust aan de
                  buitenkant geen garantie is voor rust vanbinnen.
                </p>
              </div>
            </div>

            {/* Kunsthistorische context */}
            <div className={styles.artRefBox}>
              <h3 className={styles.artRefTitle}>Inspiratie: Gillian Wearing &amp; Jill Bennett</h3>
              <p>
                Het kunstwerk is sterk geïnspireerd door de Britse conceptuele kunstenaar <strong>Gillian Wearing</strong> met
                haar iconische serie <em>&lsquo;Signs that say what you want them to say and not Signs that say what someone else wants you to say&rsquo; (1992–1993)</em>.
                Wearing vroeg willekeurige voorbijgangers op straat om hun diepste gedachten op een vel papier te schrijven en daarmee te poseren.
                Het beroemdste beeld — een strak geklede zakenman die glimlachend een bord vasthoudt met <em>&apos;I&apos;M DESPERATE&apos;</em> —
                bewees dat uiterlijke schijn en innerlijke werkelijkheid mijlenver uit elkaar kunnen liggen.
              </p>
              <p>
                Daarnaast sluit het project aan bij het onderzoek van <strong>Jill Bennett (2023)</strong> naar <em>Visual communication and mental health</em>:
                hoe beeldende kunst complexe, onzichtbare psychische ervaringen invoelbaar en bespreekbaar kan maken zonder medische taboes.
              </p>
            </div>
          </div>

          {/* Interactief element voor kunstwerk & symbolen met detailfoto's */}
          <ArtworkInteractive />
        </section>

        {/* NIEUWE SECTIE: Maakproces & Fotogalerij */}
        <section id="proces" className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.tag}>Behind the Scenes</span>
            <h2 className={styles.sectionTitle}>Het Ontstaansproces</h2>
            <p className={styles.sectionLead}>
              Van de eerste brainstorm en moodboards tot het 3D-printen, assembleren van tandwielen en de technische NFC-integratie.
            </p>
          </div>
          <ProcessGallery />
        </section>

        {/* NIEUWE SECTIE: Video & Rondgang */}
        <section id="video" className={styles.section}>
          <VideoPlayerSlot />
        </section>

        {/* NIEUWE SECTIE: CKV Verslag Download & Inkijken */}
        <section id="verslag" className={styles.section}>
          <div className={styles.reportCard}>
            <div className={styles.reportContentSide}>
              <div className={styles.reportIconBox}>📄</div>
              <div className={styles.reportInfo}>
                <span className={styles.tag} style={{ color: 'var(--primary)' }}>Officieel CKV Examenverslag</span>
                <h3>Verslag: Verborgen Woorden</h3>
                <p>
                  Lees het complete onderzoeksverslag inclusief kunstanalyse, contextonderzoek naar Gillian Wearing,
                  materiaalonderzoek, reflectie en bronvermelding.
                </p>
              </div>
            </div>
            <div className={styles.reportActions}>
              <a
                href="/ckv/mentalegezondheid/CKV-Verslag-Verborgen-Woorden.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnReportPrimary}
              >
                <span>👁️</span>
                <span>Bekijk Verslag (PDF)</span>
              </a>
              <a
                href="/ckv/mentalegezondheid/CKV-Verslag-Verborgen-Woorden.pdf"
                download
                className={styles.btnReportSecondary}
              >
                <span>⬇️</span>
                <span>Download</span>
              </a>
            </div>
          </div>
        </section>

        {/* SECTION 2: Actuele Cijfers */}
        <section id="cijfers" className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.tag}>Maatschappelijke Urgentie</span>
            <h2 className={styles.sectionTitle}>2. Waarom is mentale gezondheid zó actueel?</h2>
            <p className={styles.sectionLead}>
              Mentale gezondheid is geen individueel luxeprobleem; het is een van de grootste
              uitdagingen van de huidige generatie scholieren. Recente landelijke metingen laten
              een alarmerende trend zien.
            </p>
          </div>

          <div className={styles.statsGrid}>
            <div className={`${styles.statCard} ${styles.statHighlight}`}>
              <div className={styles.statNumber}>31,2%</div>
              <div className={styles.statLabel}>Bijna 1 op de 3 scholieren</div>
              <p className={styles.statSub}>
                Ervaart mentale problemen in het Nederlandse voortgezet onderwijs (12–16 jaar).
              </p>
            </div>

            <div className={styles.statCard}>
              <div className={styles.statNumber}>+58%</div>
              <div className={styles.statLabel}>Stijging sinds 2017</div>
              <p className={styles.statSub}>
                De RIVM HBSC-monitor registreerde een toename van 19,7% (2017) naar 31,2% (2025).
              </p>
            </div>

            <div className={styles.statCard}>
              <div className={styles.statNumber}>40,0%</div>
              <div className={styles.statLabel}>Meisjes vs. 22,8% Jongens</div>
              <p className={styles.statSub}>
                Meisjes rapporteren vaker emotionele druk en somberheid; jongens uiten spanning vaker in stilte of gedrag.
              </p>
            </div>
          </div>

          {/* Visual bar chart */}
          <div className={styles.barVisualCard}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '1.25rem' }}>Ontwikkeling mentale problemen (SDQ-score 12–16 jaar)</h3>

            <div className={styles.barRow}>
              <div className={styles.barHeader}>
                <span>HBSC-meting 2017</span>
                <span>19,7%</span>
              </div>
              <div className={styles.barTrack}>
                <div className={styles.barFill} style={{ width: '19.7%' }} />
              </div>
            </div>

            <div className={styles.barRow}>
              <div className={styles.barHeader}>
                <span>HBSC-meting 2021 (Covid-periode)</span>
                <span>27,5%</span>
              </div>
              <div className={styles.barTrack}>
                <div className={styles.barFill} style={{ width: '27.5%' }} />
              </div>
            </div>

            <div className={styles.barRow}>
              <div className={styles.barHeader}>
                <span>HBSC-meting 2025 (Huidig)</span>
                <span style={{ color: '#ef4444', fontWeight: 'bold' }}>31,2%</span>
              </div>
              <div className={styles.barTrack}>
                <div className={`${styles.barFill} ${styles.barFillAlert}`} style={{ width: '31.2%' }} />
              </div>
            </div>

            <div style={{ marginTop: '1.5rem' }}>
              <div className={styles.statNuanceBox}>
                <strong>Belangrijke nuance bij de cijfers:</strong> Deze gegevens zijn gebaseerd op de gevalideerde
                <em> Strengths and Difficulties Questionnaire (SDQ)</em> binnen het landelijke HBSC-onderzoek (RIVM/Trimbos/UU).
                Het betreft een brede meting van emotionele klachten, concentratieproblemen en sociale druk. Het betekent
                <strong> niet</strong> dat één op de drie scholieren een officiële psychiatrische stoornis heeft, maar wel dat
                bijna een derde substantieel hinder ondervindt in het dagelijks functioneren.
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3 & 4: Wat is het & Het Draagkracht-Model */}
        <section id="werking" className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.tag}>Inzicht &amp; Werking</span>
            <h2 className={styles.sectionTitle}>3. Wat is mentale gezondheid en hoe werkt het?</h2>
            <p className={styles.sectionLead}>
              Mentale gezondheid is geen kwestie van &lsquo;gek of normaal&rsquo;. Het gaat over hoe je denkt, voelt,
              omgaat met tegenslagen en betekenisvolle relaties onderhoudt. Iedereen ervaart schommelingen.
            </p>
          </div>

          {/* Interactief Weegschaal Model */}
          <BalanceModelInteractive />

          <div className={styles.artContextCard} style={{ marginTop: '2rem' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>De 4 Pijlers van Mentaal Welzijn</h3>
            <div className={styles.signsGrid}>
              <div className={styles.signCard}>
                <span className={styles.signIcon}>🪞</span>
                <h4 className={styles.signCategoryTitle}>1. Zelfbeeld</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  Hoe je naar jezelf kijkt, of je jezelf fouten gunt en hoe mild je innerlijke dialoog is.
                </p>
              </div>
              <div className={styles.signCard}>
                <span className={styles.signIcon}>👥</span>
                <h4 className={styles.signCategoryTitle}>2. Verbinding</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  Het gevoel erbij te horen, gehoord te worden door vrienden of familie en steun te kunnen vragen.
                </p>
              </div>
              <div className={styles.signCard}>
                <span className={styles.signIcon}>⚡</span>
                <h4 className={styles.signCategoryTitle}>3. Dagelijks Leven</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  Voldoende energie om naar school te gaan, te sporten, je te concentreren en grenzen te stellen.
                </p>
              </div>
              <div className={styles.signCard}>
                <span className={styles.signIcon}>🌱</span>
                <h4 className={styles.signCategoryTitle}>4. Veerkracht</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  Kunnen omgaan met teleurstellingen, verdriet of stress zonder dat je hele fundament wankelt.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: Hoe herken je het? */}
        <section id="herkennen" className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.tag}>Signalen</span>
            <h2 className={styles.sectionTitle}>4. Hoe herken je mentale problemen?</h2>
            <p className={styles.sectionLead}>
              Omdat veel scholieren hun klachten verbergen achter een vriendelijke lach (precies zoals in mijn kunstwerk),
              is het belangrijk om alert te zijn op subtiele signalen. Eén signaal op zichzelf hoeft niks te betekenen,
              maar een combinatie of langere duur is een alarmsignaal.
            </p>
          </div>

          <div className={styles.signsGrid}>
            <div className={styles.signCard}>
              <span className={styles.signIcon}>💭</span>
              <h3 className={styles.signCategoryTitle}>Gedachten</h3>
              <ul className={styles.signList}>
                <li>Aanhoudend piekeren</li>
                <li>Zwart-wit denken (&lsquo;alles mislukt&rsquo;)</li>
                <li>Faalangst voor toetsen</li>
                <li>Moeite met concentreren</li>
              </ul>
            </div>

            <div className={styles.signCard}>
              <span className={styles.signIcon}>💔</span>
              <h3 className={styles.signCategoryTitle}>Emoties</h3>
              <ul className={styles.signList}>
                <li>Vaak somber of leeg voelen</li>
                <li>Snel geïrriteerd of boos worden</li>
                <li>Gevoel dat niks meer plezier geeft</li>
                <li>Plotselinge paniek of angst</li>
              </ul>
            </div>

            <div className={styles.signCard}>
              <span className={styles.signIcon}>🔋</span>
              <h3 className={styles.signCategoryTitle}>Lichaam</h3>
              <ul className={styles.signList}>
                <li>Chronische vermoeidheid</li>
                <li>Slecht inslapen of vroeg wakker</li>
                <li>Onverklaarde buikpijn of hoofdpijn</li>
                <li>Vastzittende nek- en schouderspieren</li>
              </ul>
            </div>

            <div className={styles.signCard}>
              <span className={styles.signIcon}>🚪</span>
              <h3 className={styles.signCategoryTitle}>Gedrag</h3>
              <ul className={styles.signList}>
                <li>Afspraken met vrienden afzeggen</li>
                <li>Stoppen met vertrouwde hobby&apos;s</li>
                <li>Steeds meer spijbelen of vermijden</li>
                <li>Uren doelloos scrollen op telefoon</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 6: Wat kun je zelf doen? */}
        <section id="zelf-doen" className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.tag}>Actie &amp; Herstel</span>
            <h2 className={styles.sectionTitle}>5. Wat kun je zelf doen aan je mentale gezondheid?</h2>
            <p className={styles.sectionLead}>
              Je hebt niet alles in de hand, maar er zijn concrete gewoonten die je draagkracht direct vergroten.
            </p>
          </div>

          <div className={styles.actionGrid}>
            <div className={styles.actionCard}>
              <div className={styles.actionNumber}>1</div>
              <div className={styles.actionContent}>
                <h4>Breek de stilte</h4>
                <p>
                  Praten verkleint het probleem. Deel met een vertrouwde vriend, mentor of ouder dat het even niet lekker gaat.
                  Je hoeft niet direct een kant-en-klaar verhaal te hebben; een begin maken lucht al op.
                </p>
              </div>
            </div>

            <div className={styles.actionCard}>
              <div className={styles.actionNumber}>2</div>
              <div className={styles.actionContent}>
                <h4>Bescherm je slaap</h4>
                <p>
                  Slaap is de natuurlijke resetknop van je hersenen. Leg je telefoon minstens 45 minuten voor bedtijd weg en
                  laad hem niet naast je kussen op. Vaste slaaptijden maken je stressbestendiger.
                </p>
              </div>
            </div>

            <div className={styles.actionCard}>
              <div className={styles.actionNumber}>3</div>
              <div className={styles.actionContent}>
                <h4>Zet je telefoon bewust uit</h4>
                <p>
                  Ontvolg accounts die je een minderwaardig gevoel geven. Plan dagelijks minimaal één blok van een uur
                  waarin je offline bent en je hoofd niet gebombardeerd wordt door prikkels.
                </p>
              </div>
            </div>

            <div className={styles.actionCard}>
              <div className={styles.actionNumber}>4</div>
              <div className={styles.actionContent}>
                <h4>Beweeg om te ontladen</h4>
                <p>
                  Wanneer je piekert zit alle spanning in je hoofd. Wandelen, fietsen, skaten of sporten dwingt je lichaam
                  om stresshormonen (cortisol) af te breken en endorfine aan te maken.
                </p>
              </div>
            </div>

            <div className={styles.actionCard}>
              <div className={styles.actionNumber}>5</div>
              <div className={styles.actionContent}>
                <h4>Durf &lsquo;nee&rsquo; te zeggen</h4>
                <p>
                  Je hoeft niet overal bij te zijn, niet elk bericht binnen twee minuten te beantwoorden en niet altijd een 9
                  te halen. Grenzen stellen is geen zwakte, maar noodzakelijk zelfbehoud.
                </p>
              </div>
            </div>

            <div className={styles.actionCard}>
              <div className={styles.actionNumber}>6</div>
              <div className={styles.actionContent}>
                <h4>Doe doelloze dingen</h4>
                <p>
                  Niet alles in je leven hoeft productief te zijn. Muziek luisteren, gamen, tekenen of gewoon even uit het raam
                  staren zonder doel geeft je brein de hoognodige rust.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7: Hoe help je iemand anders? */}
        <section id="ander-helpen" className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.tag}>Sociaal Verband</span>
            <h2 className={styles.sectionTitle}>6. Hoe help je een vriend of vriendin?</h2>
            <p className={styles.sectionLead}>
              Je hoeft geen psycholoog te zijn om iemands dag of leven te veranderen. Gewoon aanwezig zijn en écht luisteren is vaak al goud waard.
            </p>
          </div>

          <div className={styles.conversationBox}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>Eerste Hulp bij Mentale Druk: Handige Zinnen</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
              Vind je het lastig om een gesprek te openen? Hier zijn respectvolle manieren om door het &lsquo;gaat goed&rsquo;-masker heen te prikken:
            </p>

            <div className={styles.quoteExampleList}>
              <div className={styles.quoteExample}>
                <strong>Vraag specifiek door:</strong>
                <p>&ldquo;Ik merk dat je de laatste tijd wat stiller bent in de pauzes. Hoe gaat het nou écht met je?&rdquo;</p>
              </div>

              <div className={styles.quoteExample}>
                <strong>Luister zonder meteen oplossingen te geven:</strong>
                <p>&ldquo;Wat onwijs naar dat je je zo voelt. Ik hoef het niet voor je op te lossen, maar ik ben er wel voor je als je wilt spuien.&rdquo;</p>
              </div>

              <div className={styles.quoteExample}>
                <strong>Bied concrete en laagdrempelige hulp aan:</strong>
                <p>&ldquo;Zullen we vanmiddag gewoon even een rondje wandelen zonder telefoons? Of zal ik meegaan naar de mentor als je wilt praten?&rdquo;</p>
              </div>
            </div>

            <div style={{ marginTop: '1.5rem', borderTop: '1px solid var(--border-color)', paddingTop: '1.25rem' }}>
              <h4 style={{ fontSize: '1rem', marginBottom: '0.5rem', color: '#ef4444' }}>Wat je beter NIET kunt zeggen:</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                ❌ &lsquo;Stel je niet aan, iedereen heeft het druk.&rsquo;<br />
                ❌ &lsquo;Je moet gewoon wat positiever denken!&rsquo;<br />
                ❌ &lsquo;Anderen hebben het veel zwaarder dan jij.&rsquo;<br />
                <em>(Hiermee geef je de ander het gevoel dat zijn gevoelens niet legitiem zijn en sluit hij zich juist verder af.)</em>
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 8: Waar kun je terecht? */}
        <section id="hulp" className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.tag}>Hulpinstanties</span>
            <h2 className={styles.sectionTitle}>7. Waar kun je terecht als het niet gaat?</h2>
            <p className={styles.sectionLead}>
              Blijf er niet alleen mee lopen. Hulp vragen is geen zwaktebod, maar een teken van moed.
              Er zijn veel gratis, anonieme en professionele plekken waar mensen voor je klaarstaan.
            </p>
          </div>

          <div className={styles.helpGrid}>
            {/* De Kindertelefoon */}
            <div className={styles.helpCard}>
              <div className={styles.helpHeader}>
                <span className={styles.helpTarget}>Voor jongeren van 8 t/m 18 jaar</span>
                <h3 className={styles.helpTitle}>De Kindertelefoon</h3>
                <p className={styles.helpDesc}>
                  Voor alles wat je dwarszit: van schoolstress, eenzaamheid en ruzie thuis tot somberheid.
                  Volledig anoniem en gratis.
                </p>
              </div>
              <div className={styles.helpActions}>
                <a href="tel:08000432" className={styles.btnPrimaryCall}>
                  📞 Bel gratis 0800-0432
                </a>
                <a href="https://www.kindertelefoon.nl" target="_blank" rel="noopener noreferrer" className={styles.btnSecondaryWeb}>
                  💬 Chat op kindertelefoon.nl ↗
                </a>
              </div>
            </div>

            {/* In Je Bol */}
            <div className={styles.helpCard}>
              <div className={styles.helpHeader}>
                <span className={styles.helpTarget}>Voor jongeren van 16 t/m 27 jaar</span>
                <h3 className={styles.helpTitle}>In Je Bol</h3>
                <p className={styles.helpDesc}>
                  Een platform speciaal voor jongeren en studenten met tips, herkenbare verhalen en directe ondersteuning bij mentale klachten.
                </p>
              </div>
              <div className={styles.helpActions}>
                <a href="tel:08000450" className={styles.btnPrimaryCall}>
                  📞 Bel gratis 0800-0450
                </a>
                <a href="https://www.injebol.nl" target="_blank" rel="noopener noreferrer" className={styles.btnSecondaryWeb}>
                  🌐 Bezoek injebol.nl ↗
                </a>
              </div>
            </div>

            {/* 113 Zelfmoordpreventie */}
            <div className={`${styles.helpCard} ${styles.helpCardCritical}`}>
              <div className={styles.helpHeader}>
                <span className={styles.helpTarget} style={{ color: '#ef4444' }}>24/7 Crisis &amp; Luisterend Oor</span>
                <h3 className={styles.helpTitle}>113 Zelfmoordpreventie</h3>
                <p className={styles.helpDesc}>
                  Denk je aan zelfdoding of maak je je ernstig zorgen om iemand anders?
                  Dag en nacht bereikbaar. Gratis, anoniem en zonder oordeel.
                </p>
              </div>
              <div className={styles.helpActions}>
                <a href="tel:113" className={styles.btnDangerCall}>
                  🚨 Bel 113 (of 0800-0113)
                </a>
                <a href="https://www.113.nl" target="_blank" rel="noopener noreferrer" className={styles.btnSecondaryWeb}>
                  💬 Chat direct op 113.nl ↗
                </a>
              </div>
            </div>
          </div>

          {/* Hulp in je eigen omgeving */}
          <div className={styles.localHelpBox}>
            <h3 className={styles.localHelpTitle}>Hulp in je directe omgeving</h3>
            <div className={styles.localHelpList}>
              <div className={styles.localHelpItem}>
                <strong>🏫 Op School</strong>
                <p>Loop naar je mentor, de vertrouwenspersoon, leerlingbegeleider of schoolmaatschappelijk werker. Zij kunnen meedenken over aanpassingen in je rooster of toetsdruk.</p>
              </div>
              <div className={styles.localHelpItem}>
                <strong>🩺 De Huisarts &amp; POH-GGZ</strong>
                <p>Een afspraak bij de huisarts is vertrouwelijk en valt onder de basisverzekering. De POH-GGZ (praktijkondersteuner) biedt laagdrempelige gesprekken zonder wachtlijst.</p>
              </div>
              <div className={styles.localHelpItem}>
                <strong>🏡 Het Buurtteam / Wijkteam</strong>
                <p>In elke gemeente is een jeugdteam actief waar jongeren en gezinnen terechtkunnen voor kosteloze ondersteuning bij stress of problemen thuis.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 9: Tot Slot & Boodschap */}
        <section className={styles.closingCard}>
          <blockquote className={styles.closingQuote}>
            &ldquo;Je ziet niet altijd wat iemand voelt.<br />
            Maar je kunt wel de tijd nemen om te luisteren.&rdquo;
          </blockquote>
          <p className={styles.closingSub}>
            Mijn kunstwerk <em>Verborgen Woorden</em> herinnert ons eraan dat achter elk verzorgd uiterlijk en elke glimlach
            een heel universum aan emoties kan schuilgaan. Laten we stoppen met genoegen nemen met het automatische &lsquo;het gaat goed&rsquo;,
            en elkaar wat vaker de ruimte geven om eerlijk te zijn.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
            <Link href="/" className={styles.quickNavLink} style={{ padding: '0.6rem 1.4rem', border: '1px solid var(--border-color)' }}>
              ← Terug naar Pieter&apos;s Portfolio
            </Link>
            <a href="#kunstwerk" className={styles.quickNavLink} style={{ padding: '0.6rem 1.4rem', background: 'var(--primary)', color: '#fff' }}>
              🎨 Bekijk het Kunstwerk opnieuw
            </a>
          </div>

          <div className={styles.sourcesBox}>
            <h5>Geraadpleegde Bronnen &amp; Verantwoording</h5>
            <div className={styles.sourcesList}>
              <span>• RIVM / Universiteit Utrecht / Trimbos-instituut — <em>HBSC-meting Voortgezet Onderwijs 2025: Gezondheid en welzijn van jongeren</em> (<a href="https://www.rivm.nl/mentale-gezondheid" target="_blank" rel="noopener noreferrer">rivm.nl</a>)</span>
              <span>• Trimbos-instituut — <em>Mentale gezondheid van de jeugd &amp; Geluk onder druk</em> (<a href="https://www.trimbos.nl" target="_blank" rel="noopener noreferrer">trimbos.nl</a>)</span>
              <span>• Gillian Wearing — <em>Signs that say what you want them to say... (Tate Collection)</em></span>
              <span>• Jill Bennett — <em>Visual communication and mental health (2023)</em></span>
              <span>• Thuisarts.nl — <em>Ik voel me somber / Ik heb last van stress</em> (<a href="https://www.thuisarts.nl" target="_blank" rel="noopener noreferrer">thuisarts.nl</a>)</span>
            </div>
            <p className={styles.sourcesDisclaimer}>
              Disclaimer: Deze website is ontwikkeld door Pieter Oosterling als onderdeel van het CKV-eindexamenproject op het voortgezet onderwijs.
              De verstrekte informatie heeft een informatief en educatief karakter en is geen medisch advies.
            </p>
          </div>
        </section>

      </div>
    </main>
  );
}
