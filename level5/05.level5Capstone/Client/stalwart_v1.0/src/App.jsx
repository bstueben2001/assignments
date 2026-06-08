import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './Context';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Council from './Components/Council';
import Calendar from './Components/Calendar';
import Settings from './Components/Settings';

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/council" element={<Council />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
