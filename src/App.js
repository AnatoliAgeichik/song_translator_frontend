import './App.css';

import {HomePage} from './pages/HomePage/HomePage'
import {SingersPage} from './pages/SingersPage/SingersPage'
import SingerAdd from './pages/SingersPage/SingerAdd'
import SingerEdit from './pages/SingersPage/SingerEdit'
import TrackEdit from './pages/TracksPage/TrackEdit'
import TrackAdd from './pages/TracksPage/TrackAdd'
import {TracksPage} from './pages/TracksPage/TracksPage'
import SingerDetail from './pages/SingersPage/DetailPage'
import TrackDetail from './pages/TracksPage/TrackDetail'
import TranslationsPage from './pages/TranslationsPage/TranslationsPage'
import TranslationDetail from './pages/TranslationsPage/TranslationDetail'
import TranslationAdd from "./pages/TranslationsPage/TranslationAdd";
import {AuthenticationPage} from "./pages/RegistrationPage/AuthenticationPage";
import {RegistrationPage} from "./pages/RegistrationPage/RegistrationPage";
import TranslationEdit from "./pages/TranslationsPage/TranslationEdit";
import CommentPage from "./pages/CommentPage/CommentPage";

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
        <Route exact path="/tracks/" component={TracksPage} />
        <Route exact path="/tracks/:id" component={TrackDetail} />
        <Route exact path ="/tracks/:id/translations" component={TranslationsPage}/>
        <Route exact path ="/tracks/:id/comments" component={CommentPage}/>
        <Route exact path ="/tracks/:id/translations/:transl_id" component={TranslationDetail}/>
     </Switch>
     <Switch>
        <Route path="/addTrack" component={TrackAdd} />
     </Switch>
     <Switch>
        <Route path="/addSinger" component={SingerAdd} />
     </Switch>
     <Switch>
        <Route path="/editSinger" component={SingerEdit} />
     </Switch>
     <Switch>
        <Route path="/editTrack" component={TrackEdit} />
     </Switch>
     <Switch>
        <Route path="/editTranslation" component={TranslationEdit} />
     </Switch>
     <Switch>
        <Route path="/addTranslation" component={TranslationAdd} />
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
