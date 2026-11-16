'use client';

import { useState } from 'react';
import styles from './page.module.css';

interface SymbolItem {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  inArtwork: string;
  meaning: string;
  quote: string;
}

const symbols: SymbolItem[] = [
  {
    id: 'wekker',
    icon: '⏰',
    title: 'De Wekker',
    subtitle: 'Prestatiedruk & Tijdsnood',
    inArtwork: 'Gemonteerd in de hectische helft van het hoofd, tikkend tegen de schedelwand.',
    meaning: 'Staat voor de constante tijdsdruk, toetsweken, huiswerkdeadlines en het gevoel dat er nooit genoeg uren in een dag zitten om aan alle verwachtingen te voldoen.',
    quote: '"De klok stopt nooit met tikken; het gevoel dat je altijd achter de feiten aanloopt."'
  },
  {
    id: 'telefoon',
    icon: '📱',
    title: 'De Telefoon',
    subtitle: 'Sociale Vergelijking & Prikkels',
    inArtwork: 'Verweven tussen draden en tandwielen met oplichtende meldingen.',
    meaning: 'Verwijst naar de non-stop stroom aan berichten, FOMO (fear of missing out) en het vergelijken van je eigen binnenkant met de gemanipuleerde buitenkant van anderen op Instagram en TikTok.',
    quote: '"Iedereen lijkt een perfect leven te leiden — behalve jij in je donkere slaapkamer."'
  },
  {
    id: 'tandwielen',
    icon: '⚙️',
    title: 'Tandwielen & Draden',
    subtitle: 'Het Overactieve Piekerbrein',
    inArtwork: 'Draaiende en vastgelopen tandwielen die kriskras verbonden zijn met koperdraad.',
    meaning: 'Symboliseert het malende hoofd. Gedachten die maar door blijven tollen, zelfs wanneer je wilt slapen. De mentale kortsluiting wanneer je hersenen geen rustmoment meer krijgen.',
    quote: '"Gedachten die elkaar in een oneindige cirkel blijven opjagen."'
  },
  {
    id: 'scheuren',
    icon: '⚡',
    title: 'De Scheuren & Onrust',
    subtitle: 'De Barsten in het Masker',
    inArtwork: 'Diepe scheuren in het gips die de opgeruimde helft scheiden van de chaotische binnenwereld.',
    meaning: 'Laat zien dat de ogenschijnlijk rustige buitenkant kwetsbaar is. Zelfs als je je uiterste best doet om alles onder controle te houden, ontstaan er onvermijdelijk barsten wanneer de druk te hoog wordt.',
    quote: '"De buitenkant probeert heel te blijven, maar de binnenkant breekt langzaam uit."'
  },
  {
    id: 'briefje',
    icon: '✉️',
    title: 'Het Briefje & De Mond',
    subtitle: 'De Sociale Leugen',
    inArtwork: 'Een opgevouwen briefje uit de mond met: "Met mij gaat het GOED", geflankeerd door: "Blijf glimlachen!".',
    meaning: 'De kernboodschap van het kunstwerk. Het masker dat we dagelijks opzetten. We zeggen wat de maatschappij wil horen, niet hoe we ons werkelijk vanbinnen voelen.',
    quote: '"Het makkelijkste antwoord is \'goed\'. Het eerlijke antwoord vraagt moed."'
  }
];

export default function ArtworkInteractive() {
  const [activeSide, setActiveSide] = useState<'outside' | 'inside'>('outside');
  const [selectedSymbol, setSelectedSymbol] = useState<SymbolItem>(symbols[0]);

  return (
    <div className={styles.interactiveContainer}>
      {/* Dual Perspective Toggle */}
      <div className={styles.perspectiveBox}>
        <div className={styles.perspectiveHeader}>
          <span className={styles.tag}>Interactieve Ervaring</span>
          <h3>Kijk door het Masker</h3>
          <p>
            Het kunstwerk <em>Verborgen Woorden</em> verkent de spanning tussen wat we tonen en wat we voelen.
            Wissel tussen de twee perspectieven:
          </p>
        </div>

        <div className={styles.toggleGroup} role="tablist" aria-label="Perspectief selectie">
          <button
            type="button"
            className={`${styles.toggleBtn} ${activeSide === 'outside' ? styles.toggleActive : ''}`}
            onClick={() => setActiveSide('outside')}
            role="tab"
            aria-selected={activeSide === 'outside'}
          >
            <span className={styles.btnIcon}>😊</span>
            <span>De Buitenkant (Wat men ziet)</span>
          </button>
          <button
            type="button"
            className={`${styles.toggleBtn} ${activeSide === 'inside' ? styles.toggleActive : ''}`}
            onClick={() => setActiveSide('inside')}
            role="tab"
            aria-selected={activeSide === 'inside'}
          >
            <span className={styles.btnIcon}>🧠</span>
            <span>De Binnenwereld (Wat er speelt)</span>
          </button>
        </div>

        <div className={`${styles.perspectiveCard} ${activeSide === 'inside' ? styles.perspectiveCardInside : ''}`}>
          {activeSide === 'outside' ? (
            <div className={styles.perspectiveContent}>
              <div className={styles.badgeSuccess}>Zichtbare façade</div>
              <h4 className={styles.perspectiveTitle}>&ldquo;Met mij gaat het GOED!&rdquo;</h4>
              <p className={styles.perspectiveDesc}>
                Een verzorgd kapsel, lachend in de gangen op school, hoge cijfers op Magister,
                een gestructureerde agenda en beleefd reageren op de vraag: &lsquo;Hoe is &apos;t?&rsquo;
              </p>
              <div className={styles.stickerBox}>
                <span className={styles.sticker}>😊 Blijf glimlachen!</span>
                <span className={styles.sticker}>✔️ Geen vuiltje aan de lucht</span>
                <span className={styles.sticker}>🎯 Altijd onder controle</span>
              </div>
              <p className={styles.perspectiveSub}>
                👉 Tik hierboven op <strong>&apos;De Binnenwereld&apos;</strong> om te ontdekken wat zich achter deze façade afspeelt.
              </p>
            </div>
          ) : (
            <div className={styles.perspectiveContent}>
              <div className={styles.badgeAlert}>Verborgen realiteit</div>
              <h4 className={styles.perspectiveTitle}>Piekergedachten, druk &amp; uitputting</h4>
              <p className={styles.perspectiveDesc}>
                In het hoofd draaien tandwielen op volle toeren. De wekker jaagt je op voor de volgende deadline.
                Op social media zie je wat je denkt te moeten zijn, terwijl de scheuren in je zelfvertrouwen steeds dieper worden.
              </p>
              <div className={styles.stickerBoxChaos}>
                <span className={styles.stickerDark}>⏰ Constant achter de feiten aan</span>
                <span className={styles.stickerDark}>📱 Sociale vergelijkingsdruk</span>
                <span className={styles.stickerDark}>⚡ Vermoeidheid &amp; piekeren</span>
              </div>
              <p className={styles.perspectiveSub}>
                Dit is de kloof die <em>Verborgen Woorden</em> tastbaar maakt.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Symbolen in het Kunstwerk */}
      <div className={styles.symbolsSection}>
        <div className={styles.sectionHeaderInner}>
          <span className={styles.tag}>Analyse &amp; Symboliek</span>
          <h3 className={styles.symbolsTitle}>Ontleed het Kunstwerk</h3>
          <p className={styles.symbolsSubtitle}>
            Selecteer een onderdeel om te ontdekken hoe elk element de actuele mentale druk van scholieren verbeeldt.
          </p>
        </div>

        <div className={styles.symbolSelector}>
          {symbols.map((sym) => (
            <button
              key={sym.id}
              type="button"
              className={`${styles.symbolBtn} ${selectedSymbol.id === sym.id ? styles.symbolBtnActive : ''}`}
              onClick={() => setSelectedSymbol(sym)}
            >
              <span className={styles.symbolIcon}>{sym.icon}</span>
              <span className={styles.symbolLabel}>{sym.title}</span>
            </button>
          ))}
        </div>

        <div className={styles.symbolDetailCard}>
          <div className={styles.symbolDetailHeader}>
            <div className={styles.symbolDetailIcon}>{selectedSymbol.icon}</div>
            <div>
              <span className={styles.symbolDetailSubtitle}>{selectedSymbol.subtitle}</span>
              <h4 className={styles.symbolDetailTitle}>{selectedSymbol.title}</h4>
            </div>
          </div>

          <div className={styles.symbolDetailBody}>
            <div className={styles.symbolDetailRow}>
              <strong>In het kunstwerk:</strong>
              <p>{selectedSymbol.inArtwork}</p>
            </div>
            <div className={styles.symbolDetailRow}>
              <strong>De psychologische betekenis:</strong>
              <p>{selectedSymbol.meaning}</p>
            </div>
            <blockquote className={styles.symbolQuote}>
              {selectedSymbol.quote}
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
}
