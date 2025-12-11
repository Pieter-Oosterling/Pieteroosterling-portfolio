import styles from './Toolkit.module.css';

const TOOLS = [
    { name: 'Onshape', icon: '📐' },
    { name: 'SketchUp', icon: '🏗️' },
    { name: 'Tinkercad', icon: '🧱' },
    { name: 'Windsurf', icon: '🏄‍♂️' },
    { name: 'Python', icon: '🐍' },
    { name: 'HTML', icon: '🌐' },
    { name: 'CSS', icon: '🎨' },
    { name: 'JavaScript', icon: '⚡' },
    { name: 'Documenten', icon: '📄' },
    { name: 'Presentaties', icon: '🗣️' },
    { name: 'Figma', icon: '🎨' },
    { name: 'Blender', icon: '🧱' },
    { name: 'Canva', icon: '✨' },
];

export default function Toolkit() {
    return (
        <div className={styles.toolkitWrapper}>
            <h2 className={styles.title}>My Toolkit</h2>
            <div className={styles.marqueeContainer}>
                <div className={styles.marqueeTrack}>
                    {/* Double the list for seamless loop */}
                    {[...TOOLS, ...TOOLS].map((tool, index) => (
                        <div key={`${tool.name}-${index}`} className={styles.toolItem}>
                            <span className={styles.icon}>{tool.icon}</span>
                            <span className={styles.name}>{tool.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
