import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import AskQuestion from './AskQuestion';
import LoginPage from './LoginPage';
import Registration from './Registration';
import Answer from './Answer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ask" element={<AskQuestion />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/answer" element={<Answer />} />
        <Route path="/question/:id" element={<div>Question Detail Page</div>} />
        <Route path="/question/:id/answer" element={<div>Add Answer Page</div>} />
      </Routes>
    </Router>
  );
}

export default App;