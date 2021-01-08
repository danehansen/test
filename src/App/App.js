import Card from './Card/Card';
import CardHolder from './CardHolder/CardHolder';
import classnames from 'classnames';
import getData from './getData';
import styles from './App.module.scss';
import Toggle from './Toggle/Toggle';
import { useState } from 'react';

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
            setDarkmode(checked)}} />
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
