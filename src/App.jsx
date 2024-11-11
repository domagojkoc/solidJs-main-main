
import styles from './App.module.css';
import Component from './MyComponent';
import Counter from './Counter';
import Counter2 from './Counter2';
import Login from './login';
import Flow from './Flow';
import Menu from './Menu';
import Dynamo from './Dynamo';
import Events from './Events';
import Styles from './Styles';
import Refs from './Refs';
import Spreads from './Spreads';
import Pvp from './Pvp';
import Children from './Children';
import Stores from './Stores';

function App() {
  return (
    < >
    <div class={styles.App}>Dobar dan, svijete!</div>

    <Events/>
    <Styles/>
    <Refs/>
    <Spreads/>
    <Pvp/>
    <Children/>
    <Stores/>
    </>
  );
}

export default App;
