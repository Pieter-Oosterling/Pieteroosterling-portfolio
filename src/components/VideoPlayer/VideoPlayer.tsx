'use client';

import styles from './VideoPlayer.module.css';

interface VideoPlayerProps {
    videos: {
        type: 'youtube' | 'local';
        url: string;
        title?: string;
    }[];
}

export default function VideoPlayer({ videos }: VideoPlayerProps) {
    // Extract YouTube video ID from URL
    const getYouTubeId = (url: string): string | null => {
        const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s]+)/);
        return match ? match[1] : null;
    };

    if (!videos || videos.length === 0) return null;

    return (
        <div className={styles.videoSection}>
            <h3 className={styles.videoTitle}>Project Video's</h3>
            <div className={styles.videoGrid}>
                {videos.map((video, index) => (
                    <div key={index} className={styles.videoCard}>
                        {video.type === 'youtube' ? (
                            <>
                                <div className={styles.videoWrapper}>
                                    <iframe
                                        src={`https://www.youtube.com/embed/${getYouTubeId(video.url)}`}
                                        title={video.title || `Video ${index + 1}`}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className={styles.iframe}
                                    />
                                </div>
                                {video.title && <p className={styles.videoCaption}>{video.title}</p>}
                            </>
                        ) : (
                            <>
                                <video
                                    controls
                                    className={styles.localVideo}
                                    preload="metadata"
                                >
                                    <source src={video.url} type="video/mp4" />
                                    Je browser ondersteunt geen video.
                                </video>
                                {video.title && <p className={styles.videoCaption}>{video.title}</p>}
                                <a
                                    href={video.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.videoLink}
                                >
                                    Open video in nieuw tabblad →
                                </a>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
