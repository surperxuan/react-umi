import weather from './weather/index';
import beef from './beef/index';
import wei from './wei/index';
import star from './star/index';
import { Route, NavLink ,Switch} from "react-router-dom";
export default function Main() {
  return (
    <div className="T-main">
    <NavLink to="/weather" className="main-1">天气</NavLink>
    <NavLink to="/beef" className="main-2">电影</NavLink>
    <NavLink to="/wei" className="main-3">魏</NavLink>
    <NavLink to="/star" className="main-4">石</NavLink>
    <Switch>
      <Route component={weather} path="/weather"/>
      <Route component={beef} path="/beef"/>
      <Route component={wei} path="/wei"/>
      <Route component={star} path="/star"/>
    </Switch>
    </div>
  );
}
