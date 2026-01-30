'use client';

import { useState } from 'react';
import styles from './page.module.css';

export default function InterviewPage() {
    const [password, setPassword] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        // Verify password by making a HEAD request
        // This is a lightweight way to check auth before loading the audio
        try {
            const res = await fetch(`/api/stream-audio?pwd=${password}`, { method: 'HEAD' });
            if (res.ok) {
                setIsAuthenticated(true);
            } else {
                setError('Onjuist wachtwoord. Probeer het opnieuw.');
            }
        } catch (err) {
            setError('Er ging iets mis. Probeer het later opnieuw.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <main className={styles.container}>
            <h1 className={styles.title}>Interview Opname</h1>

            {!isAuthenticated ? (
                <form onSubmit={handleSubmit} className={styles.form}>
                    <p>Voer de toegangscode in om het interview te beluisteren.</p>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Voer code in..."
                        className={styles.input}
                        autoFocus
                    />
                    {error && <p className={styles.error}>{error}</p>}
                    <button type="submit" className={styles.button} disabled={isLoading}>
                        {isLoading ? 'Controleren...' : 'Toegang krijgen'}
                    </button>
                </form>
            ) : (
                <div className={styles.playerContainer}>
                    <div className={styles.audioDescription}>
                        <p><strong>Bestand:</strong> Interview GD P4 (PO)</p>
                        <p>Je hebt nu toegang tot deze opname.</p>
                    </div>
                    <audio
                        controls
                        className="w-full"
                        src={`/api/stream-audio?pwd=${password}`}
                        autoPlay
                    >
                        Je browser ondersteunt geen audio element.
                    </audio>
                    <button
                        onClick={() => setIsAuthenticated(false)}
                        className={styles.button}
                        style={{ marginTop: '2rem', background: 'rgba(255,255,255,0.1)' }}
                    >
                        Opnieuw vergrendelen
                    </button>
                </div>
            )}
        </main>
    );
}
