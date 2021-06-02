import './App.css';

import {HomePage} from './pages/HomePage/HomePage'
import {SingersPage} from './pages/SingersPage/SingersPage'
import SingerForm from './pages/SingersPage/SingerForm'
import TrackForm from './pages/TracksPage/TrackForm'
import {TracksPage} from './pages/TracksPage/TracksPage'
import SingerDetail from './pages/SingersPage/DetailPage'
import TrackDetail from './pages/TracksPage/TrackDetail'
import TranslationsPage from './pages/TranslationsPage/TranslationsPage'
import TranslationDetail from './pages/TranslationsPage/TranslationDetail'
import TranslationForm from "./pages/TranslationsPage/TranslationForm";
// import AuthenticationForm from "./components/AuthenticationForm";
// import RegistrationForm from "./components/RegistrationForm";
import {AuthenticationPage} from "./pages/RegistrationPage/AuthenticationPage";
import {RegistrationPage} from "./pages/RegistrationPage/RegistrationPage";


import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className=" p-0 m-0 bg_app">
      <Switch>
        <Route path="/" component={HomePage} exact />
      </Switch>
      <Switch>
        <Route exact path="/singers" component={SingersPage}/>
        <Route exact path="/singers/:id" component={SingerDetail}/>
      </Switch>
      <Switch>
        <Route exact path="/tracks" component={TracksPage} />
        <Route exact path="/tracks/:id" component={TrackDetail} />
        <Route exact path ="/tracks/:id/translations" component={TranslationsPage}/>
        <Route exact path ="/tracks/:id/translations/:transl_id" component={TranslationDetail}/>
     </Switch>
     <Switch>
        <Route path="/addTrack" component={TrackForm} />
     </Switch>
     <Switch>
        <Route path="/addSinger" component={SingerForm} />
     </Switch>
     <Switch>
        <Route path="/addTranslation" component={TranslationForm} />
     </Switch>
     <Switch>
         <Route path ="/sign_in" component={AuthenticationPage}/>
     </Switch>
     <Switch>
         <Route path ="/sign_up" component={RegistrationPage}/>
     </Switch>

    </div>
    </Router>
  );
}

export default App;
