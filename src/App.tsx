import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { Main } from '@chatscope/chat-ui-kit-react';
import { useState } from 'react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';

function App() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <ScrollToTop />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
      <Footer />
      <div className="chat-container">
        <button
          className="bg-primary text-white p-4 rounded-full shadow-lg"
          onClick={() => setChatOpen(!chatOpen)}
        >
          💬
        </button>
        {chatOpen && (
          <div className="w-80 h-96 bg-white shadow-lg rounded-lg overflow-hidden">
            <Main />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
