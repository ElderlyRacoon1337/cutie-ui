import { Navigate, Route, Routes } from 'react-router-dom';
import ScrollToTop from '../../utils/ScrollToTop';
import ButtonPage from './ButtonPage';
import { CheckboxPage } from './CheckboxPage';
import { IconButtonPage } from './IconButtonPage';
import { IconPage } from './IconPage';
import { InputPage } from './Input';
import { RadioPage } from './RadioPage';
import { SelectPage } from './SelectPage';
import { SwitchPage } from './SwitchPage';
import { TooltipPage } from './TooltipPage';

const Components = () => {
  return (
    <div className="pb-100px">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Navigate to="/components/button" />} />
        <Route path="/button" element={<ButtonPage />} />
        <Route path="/icon-button" element={<IconButtonPage />} />
        <Route path="/icon" element={<IconPage />} />
        <Route path="/input" element={<InputPage />} />
        <Route path="/switch" element={<SwitchPage />} />
        <Route path="/checkbox" element={<CheckboxPage />} />
        <Route path="/radio" element={<RadioPage />} />
        <Route path="/select" element={<SelectPage />} />
        <Route path="/tooltip" element={<TooltipPage />} />
      </Routes>
    </div>
  );
};

export default Components;
