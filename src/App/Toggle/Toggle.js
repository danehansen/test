import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './Toggle.module.scss';

export default function Toggle({darkmode, ...rest}) {
  return (
    <input className={classnames(styles.root, darkmode && styles.darkmode)} type="checkbox" {...rest} />
  );
}

Toggle.propTypes = {
  darkmode: PropTypes.bool.isRequired,
};
