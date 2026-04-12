import styles from './pubs.module.css';

interface PubCardProps {
  link_url: string;
  image: string;
  header: string;
  text: string;
  index: number;
}

const PubCard = ({ link_url, image, header, text, index }: PubCardProps) => {
  return (
    <article className={styles.pubRow}>
      <span className={styles.pubIndex}>{String(index).padStart(2, '0')}</span>

      <a href={link_url} className={styles.pubImageWrap} target="_blank" rel="noopener noreferrer">
        <img src={image} alt={header} className={styles.pubImage} />
      </a>

      <div className={styles.pubContent}>
        <a href={link_url} target="_blank" rel="noopener noreferrer" className={styles.pubLink}>
          <h3 className={styles.pubTitle}>{header}</h3>
        </a>
        <p className={styles.pubExcerpt}>{text}</p>
        <a href={link_url} target="_blank" rel="noopener noreferrer" className={styles.readMore}>
          Read More &rarr;
        </a>
      </div>
    </article>
  );
};

export default PubCard;
