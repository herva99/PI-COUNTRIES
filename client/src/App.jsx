import { Route, Routes } from 'react-router-dom';
import Landing from './views/landing/landing';
import Home from './views/home/home';
import Detail from './views/detail/detail';
import Create from './views/create/create';
import './App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/:id" element={<Detail />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </div>
  );
}

export default App;
