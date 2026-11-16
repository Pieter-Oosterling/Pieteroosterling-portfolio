'use client';

import { useState } from 'react';
import styles from './page.module.css';

interface Factor {
  id: string;
  name: string;
  type: 'load' | 'resource';
  weight: number;
  description: string;
}

const factorsData: Factor[] = [
  // Belasting (Draaglast)
  { id: 'school', name: 'Toetsweken & Deadlines', type: 'load', weight: 25, description: 'Constante toetsdruk, huiswerk en faalangst voor slechte cijfers.' },
  { id: 'social', name: 'Sociale media & FOMO', type: 'load', weight: 20, description: 'Non-stop meldingen en jezelf vergelijken met andermans perfecte plaatjes.' },
  { id: 'expectation', name: 'Hoge verwachtingen', type: 'load', weight: 20, description: 'Het gevoel altijd te moeten presteren voor ouders, school en vrienden.' },
  { id: 'conflict', name: 'Onrust thuis of vriendschap', type: 'load', weight: 25, description: 'Ruzies, buitensluiting of spanningen in je directe omgeving.' },
  
  // Draagkracht (Hulpbronnen)
  { id: 'sleep', name: 'Goede nachtrust (8-9 uur)', type: 'resource', weight: 25, description: 'Essentieel voor emotieregulatie, herstel en concentratie.' },
  { id: 'talk', name: 'Eerlijk praten met iemand', type: 'resource', weight: 25, description: 'Je hart luchten bij een vriend, mentor of ouder haalt druk van de ketel.' },
  { id: 'boundaries', name: 'Nee durven zeggen', type: 'resource', weight: 20, description: 'Grenzen stellen aan feestjes, extra taken of WhatsApp-bereikbaarheid.' },
  { id: 'recharge', name: 'Sport & hobby\'s', type: 'resource', weight: 20, description: 'Tijd voor dingen die je oprecht leuk vindt, zonder prestatiedruk.' },
];

export default function BalanceModelInteractive() {
  const [activeFactors, setActiveFactors] = useState<string[]>([
    'school', 'social', 'expectation', 'sleep'
  ]);

  const toggleFactor = (id: string) => {
    setActiveFactors(prev => 
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  const totalLoad = factorsData
    .filter(f => f.type === 'load' && activeFactors.includes(f.id))
    .reduce((sum, f) => sum + f.weight, 0);

  const totalResource = factorsData
    .filter(f => f.type === 'resource' && activeFactors.includes(f.id))
    .reduce((sum, f) => sum + f.weight, 0);

  const balanceDiff = totalLoad - totalResource; // > 0 is overbelasting, <= 0 is in balans

  return (
    <div className={styles.balanceContainer}>
      <div className={styles.balanceHeader}>
        <span className={styles.tag}>Interactief Denkmodel</span>
        <h3>Draagkracht vs. Draaglast</h3>
        <p>
          Mentale gezondheid is geen vaste toestand, maar een dynamische weegschaal.
          Klik op onderstaande factoren en ontdek wat er met de balans gebeurt:
        </p>
      </div>

      {/* Visuele Weegschaal Indicator */}
      <div className={styles.scaleDisplay}>
        <div className={styles.scaleStatusBox}>
          {balanceDiff > 20 ? (
            <div className={styles.scaleAlertWarning}>
              <span className={styles.statusEmoji}>⚠️</span>
              <div>
                <strong>Ernstige Overbelasting</strong>
                <p>De belasting overstijgt de hersteltijd fors. Grote kans op hoofdpijn, piekeren, slaapgebrek en mentale uitputting.</p>
              </div>
            </div>
          ) : balanceDiff > 0 ? (
            <div className={styles.scaleAlertMedium}>
              <span className={styles.statusEmoji}>⚡</span>
              <div>
                <strong>Lichte Overbelasting</strong>
                <p>Er is spanning. Je houdt het even vol, maar zonder extra herstel of hulpbronnen raak je langzaam leeg.</p>
              </div>
            </div>
          ) : (
            <div className={styles.scaleAlertGood}>
              <span className={styles.statusEmoji}>⚖️</span>
              <div>
                <strong>Gezonde Balans</strong>
                <p>Er is wel stress, maar er is voldoende steun, slaap en ontspanning om dit op te vangen en te verwerken.</p>
              </div>
            </div>
          )}
        </div>

        {/* Meters */}
        <div className={styles.meterRow}>
          <div className={styles.meterCol}>
            <div className={styles.meterHeader}>
              <span className={styles.meterLabel}>Mentale Belasting (Draaglast)</span>
              <span className={styles.meterValueLoad}>{totalLoad}%</span>
            </div>
            <div className={styles.meterTrack}>
              <div 
                className={styles.meterFillLoad} 
                style={{ width: `${Math.min(100, totalLoad)}%` }}
              />
            </div>
          </div>

          <div className={styles.meterCol}>
            <div className={styles.meterHeader}>
              <span className={styles.meterLabel}>Hulpbronnen (Draagkracht)</span>
              <span className={styles.meterValueResource}>{totalResource}%</span>
            </div>
            <div className={styles.meterTrack}>
              <div 
                className={styles.meterFillResource} 
                style={{ width: `${Math.min(100, totalResource)}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Selecteerbare knoppen */}
      <div className={styles.factorsGrid}>
        <div className={styles.factorsColumn}>
          <h4 className={styles.columnTitle}>🔴 Belastingfactoren (Stressoren)</h4>
          <div className={styles.factorBtnList}>
            {factorsData.filter(f => f.type === 'load').map(f => {
              const active = activeFactors.includes(f.id);
              return (
                <button
                  key={f.id}
                  type="button"
                  className={`${styles.factorBtn} ${active ? styles.factorBtnActiveLoad : ''}`}
                  onClick={() => toggleFactor(f.id)}
                >
                  <div className={styles.factorBtnTop}>
                    <span className={styles.factorCheckbox}>{active ? '✕' : '+'}</span>
                    <span className={styles.factorName}>{f.name}</span>
                  </div>
                  <p className={styles.factorDesc}>{f.description}</p>
                </button>
              );
            })}
          </div>
        </div>

        <div className={styles.factorsColumn}>
          <h4 className={styles.columnTitle}>🟢 Draagkrachtfactoren (Herstel & Steun)</h4>
          <div className={styles.factorBtnList}>
            {factorsData.filter(f => f.type === 'resource').map(f => {
              const active = activeFactors.includes(f.id);
              return (
                <button
                  key={f.id}
                  type="button"
                  className={`${styles.factorBtn} ${active ? styles.factorBtnActiveResource : ''}`}
                  onClick={() => toggleFactor(f.id)}
                >
                  <div className={styles.factorBtnTop}>
                    <span className={styles.factorCheckbox}>{active ? '✓' : '+'}</span>
                    <span className={styles.factorName}>{f.name}</span>
                  </div>
                  <p className={styles.factorDesc}>{f.description}</p>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
