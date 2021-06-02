import { Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import Channel from './Channel';

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Route
          exact
          path='/admin/dashboard'
          component={Dashboard}
        />
        <Route
          exact
          path='/admin/channel'
          component={Channel}
        />
      </div>
    </div>
  );
}

export default App;
