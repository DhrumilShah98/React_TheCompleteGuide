import { Route, Switch } from 'react-router-dom';
import Layout from './components/layouts/Layout';
import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact><AllMeetupsPage /></Route>
        <Route path='/newMeetUp' exact><NewMeetupPage /></Route>
        <Route path='/favorites' exact><FavoritesPage /></Route>
      </Switch>
    </Layout>
  );
}

export default App;
