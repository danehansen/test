import styles from './CardHolder.module.scss';
import PropTypes from 'prop-types';

export default function CardHolder({children}) {
  return <div className={styles.root} >{children}</div>;
}

CardHolder.propTypes = {
  children: PropTypes.node,
};
