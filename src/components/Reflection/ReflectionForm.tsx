'use client';

import { useState } from 'react';
import styles from './ReflectionForm.module.css';

export default function ReflectionForm() {
    const [formData, setFormData] = useState({
        name: '',
        role: '',
        learningGoals: '',
        collaboration: '',
        feedback: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Reflectie opgeslagen! (Dit is een demo)');
    };

    return (
        <div className={styles.container}>
            <h3 className={styles.heading}>Reflectie Formulier</h3>
            <p className={styles.subtext}>Vul hieronder je reflectie in voor dit project.</p>

            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                    <label htmlFor="name">Naam Student</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Jouw naam"
                        required
                    />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="role">Rol in Project</label>
                    <select id="role" name="role" value={formData.role} onChange={handleChange}>
                        <option value="">Selecteer een rol...</option>
                        <option value="leader">Projectleider</option>
                        <option value="planner">Planner</option>
                        <option value="researcher">Onderzoeker</option>
                        <option value="designer">Ontwerper</option>
                        <option value="developer">Developer</option>
                    </select>
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="learningGoals">Wat waren je leerdoelen?</label>
                    <textarea
                        id="learningGoals"
                        name="learningGoals"
                        value={formData.learningGoals}
                        onChange={handleChange}
                        placeholder="Beschrijf wat je wilde leren..."
                        rows={3}
                    />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="collaboration">Hoe verliep de samenwerking?</label>
                    <textarea
                        id="collaboration"
                        name="collaboration"
                        value={formData.collaboration}
                        onChange={handleChange}
                        placeholder="Reflecteer op het groepsproces..."
                        rows={3}
                    />
                </div>

                <button type="submit" className={styles.submitButton}>
                    Reflectie Opslaan
                </button>
            </form>
        </div>
    );
}
