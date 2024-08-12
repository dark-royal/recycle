import styles from './index.module.css'
const Video = () => {
    return (
        <div>
            <div className={styles.videoContainer}>
                <iframe
                    width="1260"
                    height="615"
                    src="https://www.youtube.com/embed/3BQ2VdJG6jg?si=7EJLgZUGK9mkcatu"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
}

export default Video;
