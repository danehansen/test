import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './Card.module.scss';
import {useState, useEffect} from 'react';

export default function Card({ author, darkmode, id, src, subtitle, title, url }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.addEventListener('load', function(){setLoaded(true)});
    img.src = src;
  });

  return (
    <div className={classnames(styles.root, darkmode && styles.darkmode)}>
      <div className={styles.top}>
        <img className={classnames(styles.img, loaded && styles.loaded)} src={src} alt={title} />
      </div>
      <div className={styles.bottom}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.subtitle}>{subtitle}</p>
        <dl className={styles.attributes}>
          <dt className={styles.key}>Author</dt>
          <dd className={styles.value}>{author}</dd>
          <dt className={styles.key}>ID</dt>
          <dd className={styles.value}>{id}</dd>
          <dt className={styles.key}>URL</dt>
          <dd className={styles.value}>
            <a className={styles.link} href={url}>{url}</a>
          </dd>
        </dl>
      </div>
    </div>
  );
}

Card.propTypes = {
  author: PropTypes.string.isRequired,
  darkmode: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
