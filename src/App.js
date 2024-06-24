import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from "./components/layout/layout"; // Import the Layout component
import Dashboard from './pages/dashboard'

function App() {
  return (
    <Router>

      <Routes>
     
      <Route path="/" element={ <Layout> <Dashboard/> </Layout>  } />
      <Route path="/dashboard" element={ <Layout> <Dashboard/> </Layout>  } />
        

      </Routes>
    </Router>
  );
}

export default App;
