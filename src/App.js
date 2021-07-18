

import { BrowserRouter, Route,Switch } from "react-router-dom";


import Login from "./Components/Login/Login";
// import Nav from "./Components/Nav/Nav"
import Stationstat from './Components/StationStat/StationStat';
import Stationtabi from './Components/HeadStationStat/HeadStationStat';
// import Footer from './Components/Footer/Footer';
import ReportStation from './Components/ReportStation/ReportStastion';
import Analysis from './Components/TotalAnalysis/TotalAnalysis';
import Expensereport from './Components/Expensereport/Expensereport';
import AccoutUs from './Components/AccoutUs/AccoutUs';
import Accoutdetail from './Components/AccoutDetail/AccoutDetail';
import CCTV from './Components/Cctv/Cctv';
import StationUse from './Components/StationClick/StationClick';
import Stationcharger from "./Components/Stationchargerinfo/Stationcharger";
import StationCG from "./Components/StationchargerC/StationchargerC";
import HeadStationAnalysis from "./Components/HeadStationAnalysis/HeadStationAnalysis";
import Headstationexpensereport from "./Components/Headstationexpensereport/Headstationexpensereport";
import Headstationpickingreport from "./Components/Headstationpickingreport/Headstationpickingreport";
import Headcctv from "./Components/Headcctv/Headcctv";
import Mapgoogle from "./Components/map/Mapgoogle";


import './App.css';

import './icon/style.css'


import './datepicker.css'
import './heroslider.css'
import './jasny-bootstrap.css'
import './jquery-ui.css'
import './nanoscroller.css'
import './nice-select.css'
import './reset.css'
import './responsive.css'
import './select-compat.css'
import './select.css'
import './SimpleSlider.css'
import './style.css'
import './uploadfile.css'

export default () => {
  return (
            <BrowserRouter>
              <Switch>
                <Route exact path={'/'}  component={Login} />
                {/* <Route exact path={'/Nav'} component={Nav} /> */}
                <Route exact path={'/Stationstat'} component={Stationstat} />
                {/* <Route exact path={'/footer'} component={Footer} /> */}
                <Route exact path={'/Stationtabi'} component={Stationtabi} />
                <Route exact path={'/Reportstation'} component={ReportStation}/>
                <Route exact path={'/Analysis'} component={Analysis} />
                <Route exact path={'/Expensereport'} component={Expensereport} />
                <Route exact path={'/Accout'} component={AccoutUs} />
                <Route exact path={'/Accoutdetail'} component={Accoutdetail} />
                <Route exact path={'/cctv'} component={CCTV} />
                
                <Route exact path={'/stationuse'} component={StationUse} />
                <Route exact path={'/stationcharger'} component={Stationcharger} />
                <Route exact path={'/stationcg'} component={StationCG} />
                <Route exact path={'/HeadStationAnalysis'} component={HeadStationAnalysis} />
                {/* <Route exact path={'/Headstationexpensereport'} component={Headstationexpensereport}/> */}
                {/* <Route exact path={'/Headstationpickingreport'} component={Headstationpickingreport} /> */}
                <Route exact path={'/headcctv'} component={Headcctv} />
                <Route exact path={'/mapgoogle'} component={Mapgoogle} />

              

              </Switch>
            </BrowserRouter>
  )
}
