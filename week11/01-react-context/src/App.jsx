
import './App.css'

import { UserProvider } from "./UserContext";
import { ThemeProvider } from './ThemeContext';
import { BrowserRouter } from 'react-router';
import { UserPage } from './components/UserPage';


function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <ThemeProvider>
          {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users/:username" element={<UserPage />} />
        </Routes> */}
          <UserPage />
        </ThemeProvider>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
