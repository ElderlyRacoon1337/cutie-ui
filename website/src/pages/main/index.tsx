import { Link, Navigate, Route, Routes } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import Components from '../Components';
import GettingStarted from '../GettingStarted';
import { Button, Icon, Input, Switch, ThemeContext, useSwitch } from 'cutie-ui';
import { useContext, useEffect, useState } from 'react';

const Main = () => {
  const [theme, setTheme] = useState('light');
  const { changeTheme } = useContext(ThemeContext);
  const { checkedSwitch, setCheckedSwitch, handleSwitch } = useSwitch();
  useEffect(() => {
    const theme = document.documentElement.dataset.theme;
    if (theme) {
      setCheckedSwitch(theme == 'dark');
      setTheme(theme);
    }
  }, [document.documentElement.dataset.theme]);

  return (
    <>
      <header className="header h-70px px-15px df aic jcsb">
        <div className="header-left df aic">
          <Link to="/" className="headerLogo mr-60px">
            <h1 style={{ margin: 0 }}>Cutie UI</h1>
            <p className="textSecondary">Cute library for react</p>
          </Link>
          <Input
            className="minw-400px"
            placeholder="Search docs..."
            startIcon={
              <Icon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </Icon>
            }
          />
        </div>
        <div className="headerRight df aic">
          <Button className="mr-10px" variant="outlined">
            About us
          </Button>
          <Link to={'/getting-started'}>
            <Button variant="contained">Get started</Button>
          </Link>
          <Switch
            className="ml-10px"
            checked={checkedSwitch}
            onChange={(e: any) => {
              handleSwitch(e);
              changeTheme(theme == 'dark' ? 'light' : 'dark');
            }}
          />
        </div>
      </header>
      <main className="df p-10px">
        <div className="sideBar w-200px">
          <Sidebar />
        </div>
        <div
          className="content flex container maxw-1000px"
          style={{ maxWidth: '1000px' }}
        >
          <Routes>
            <Route path="/" element={<Navigate to={'/getting-started'} />} />
            <Route path="/getting-started" element={<GettingStarted />} />
            <Route path="/components/*" element={<Components />} />
            <Route path="/hooks" element={<Components />} />
            <Route path="/customisation" element={<Components />} />
            <Route path="/styling" element={<Components />} />
          </Routes>
        </div>
      </main>
    </>
  );
};

export default Main;
