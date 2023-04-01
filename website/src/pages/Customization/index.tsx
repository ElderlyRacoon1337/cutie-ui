import { useEffect } from 'react';
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import ScrollToTop from '../../utils/ScrollToTop';
import { SxProp } from './SxProp';
import { Themming } from './Themming';

export const Customization = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const localStoragePage = window.localStorage.getItem('customization-page');
    if (localStoragePage !== null) {
      navigate('/customization/' + localStoragePage);
    }
  }, []);

  useEffect(() => {
    if (location.pathname.split('/')[2]) {
      window.localStorage.setItem(
        'customization-page',
        location.pathname.split('/')[2]
      );
    }
  }, [location.pathname]);

  return (
    <div className="pb-100px">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Navigate to="/customization/themming" />} />
        <Route path="/themming" element={<Themming />} />
        <Route path="/sx-prop" element={<SxProp />} />
      </Routes>
    </div>
  );
};
