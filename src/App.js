
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import CelebritiesPage from './pages/CelebritiesPage';
import RandomCelebrityPage from './pages/RandomCelebrityPage';
import CelebryDetailPage from './pages/CelebrityDetailPage';



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<HomePage/>} />
          <Route path="/celebrities" element= {<CelebritiesPage/>} />
          <Route path="/randomcelebrity" element= {<RandomCelebrityPage/>} />
          <Route path="/celebrity/:celebrityId" element= {<CelebryDetailPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
