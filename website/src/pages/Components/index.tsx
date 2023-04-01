import { useEffect } from 'react';
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import ScrollToTop from '../../utils/ScrollToTop';
import { AlertPage } from './AlertPage';
import { AvatarPage } from './AvatarPage';
import ButtonPage from './ButtonPage';
import { CheckboxPage } from './CheckboxPage';
import { GradientTextPage } from './GradientTextPage';
import { IconButtonPage } from './IconButtonPage';
import { IconPage } from './IconPage';
import { InputPage } from './Input';
import { LinearProgressPage } from './LinearProgressPage';
import { LinkPage } from './LinkPage';
import { ListPage } from './ListPage';
import { LoaderPage } from './LoaderPage';
import { MenuPage } from './MenuPage';
import { PopupPage } from './PopupPage';
import { RadioPage } from './RadioPage';
import { SelectPage } from './SelectPage';
import { SkeletonPage } from './Skeleton';
import { SwitchPage } from './SwitchPage';
import { TabsPage } from './TabsPage';
import { TooltipPage } from './TooltipPage';

const Components = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const localStoragePage = window.localStorage.getItem('components-page');
    if (localStoragePage !== null) {
      navigate('/components/' + localStoragePage);
    }
  }, []);

  useEffect(() => {
    if (location.pathname.split('/')[2]) {
      window.localStorage.setItem(
        'components-page',
        location.pathname.split('/')[2]
      );
    }
  }, [location.pathname]);

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
        <Route path="/link" element={<LinkPage />} />
        <Route path="/list" element={<ListPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/tabs" element={<TabsPage />} />
        <Route path="/avatar" element={<AvatarPage />} />
        <Route path="/alert" element={<AlertPage />} />
        <Route path="/popup" element={<PopupPage />} />
        <Route path="/gradient-text" element={<GradientTextPage />} />
        <Route path="/loader" element={<LoaderPage />} />
        <Route path="/linear-progress" element={<LinearProgressPage />} />
        <Route path="/skeleton" element={<SkeletonPage />} />
      </Routes>
    </div>
  );
};

export default Components;
