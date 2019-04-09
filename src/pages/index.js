import styles from './index.css';
import weather from './weather/index';
import beef from './beef/index';
import wei from './wei/index';
import star from './star/index';
import { Route,Router,NavLink ,Switch} from "react-router-dom";
export default function() {
  return (
    <div>
    <NavLink to="/weather" className={styles.main}>柴</NavLink>
    <NavLink to="/beef" className={styles.main}>牛</NavLink>
    <NavLink to="/wei" className={styles.main}>魏</NavLink>
    <NavLink to="/star" className={styles.main}>石</NavLink>
    <Switch>
      <Route component={weather} path="/weather"/>
      <Route component={beef} path="/beef"/>
      <Route component={wei} path="/wei"/>
      <Route component={star} path="/star"/>
    </Switch>
      
    </div>
  );
}
