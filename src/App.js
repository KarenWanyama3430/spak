import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from "./components/layout/layout"; // Import the Layout component
import Dashboard from './pages/dashboard'
import Assets from './pages/assets'
import Maintenance from './pages/maintenance'
import Reports from './pages/reports'
import Settings from './pages/settings'
import Helpcenter from './pages/helpcenter'
import Logout from './pages/logout'

function App() {
  return (
    <Router>

      <Routes>
     
      <Route path="/" element={ <Layout> <Dashboard/> </Layout>  } />
      <Route path="/dashboard" element={ <Layout> <Dashboard/> </Layout>  } />
      <Route path="/assets" element={ <Layout> <Assets/> </Layout>  } />     
      <Route path="/maintenance" element={ <Layout> <Maintenance/> </Layout>  } />
      <Route path="/reports" element={ <Layout> <Reports/> </Layout>  } />
      <Route path="/settings" element={ <Layout> <Settings/> </Layout>  } />
      <Route path="/helpcenter" element={ <Layout> <Helpcenter/> </Layout>  } />
      <Route path="/logout" element={ <Layout> <Logout/> </Layout>  } />
      </Routes>
    </Router>
  );
}

export default App;
