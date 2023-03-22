import { Navigate, Route, Routes } from 'react-router-dom';
import ButtonPage from './ButtonPage';

const Components = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/components/button" />} />
        <Route path="/button" element={<ButtonPage />} />
      </Routes>
    </div>
  );
};

export default Components;
