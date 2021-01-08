import Card from './Card/Card';
import CardHolder from './CardHolder/CardHolder';
import classnames from 'classnames';
import getData from './getData';
import styles from './App.module.scss';
import Toggle from './Toggle/Toggle';
import { useState } from 'react';
import colorStyles from 'styles/colors.module.scss';

const DARK = colorStyles.black000;
const LIGHT = colorStyles.gray097;

// add as many cards as you would like here
const DATA = getData(10);

export default function App() {
  const [darkmode, setDarkmode] = useState(false);

  return (
    <div className={classnames(styles.root, darkmode && styles.darkmode)}>
      <div className={styles.header}>
        <label className={styles.label}>
          darkmode
          <Toggle checked={darkmode} darkmode={darkmode} onChange={function({target: {checked}}){
            document.body.style.background = checked ? DARK : LIGHT
            setDarkmode(checked);
          }} />
        </label>
      </div>
      <CardHolder>
        {DATA.map(function(data) {
          return <Card {...data} darkmode={darkmode} key={data.id} />;
        })}
      </CardHolder>
    </div>
  );
}
