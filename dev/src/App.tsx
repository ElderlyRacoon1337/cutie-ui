import { Alert } from './cutie-components/Alert';
import { Avatar } from './cutie-components/Avatar';
import { Button } from './cutie-components/Button';
import { Loader } from './cutie-components/Loader';
import { Icon } from './cutie-components/Icon';
import { IconButton } from './cutie-components/IconButton';
import { Input } from './cutie-components/Input';
import { Link } from './cutie-components/Link';
import { List } from './cutie-components/List';
import { ListItem } from './cutie-components/List/ListItem';
import { ListItemButton } from './cutie-components/List/ListItemButton';
import { Menu } from './cutie-components/Menu/index';
import { MenuItem } from './cutie-components/Menu/MenuItem';
import { Popup } from './cutie-components/Popup';
import { Tabs } from './cutie-components/Tabs';
import { useMenu } from './cutie-hooks/useMenu';
import { usePopup } from './cutie-hooks/usePopup';
import { Switch } from './cutie-components/Switch';
import { Tab } from './cutie-components/Tabs/Tab';
import { useAlert } from './cutie-hooks/useAlert';
import { useTabs } from './cutie-hooks/useTabs';
import { Skeleton } from './cutie-components/Skeleton';
import { ThemeContext } from './ThemeProvider';
import { useContext, useEffect, useState } from 'react';
import { GradientText } from './cutie-components/GradientText';
import { useSwitch } from './cutie-hooks/useSwitch';
import { LinearProgress } from './cutie-components/LinearProgress';
import { Tooltip } from './cutie-components/Tooltip';
import { Select } from './cutie-components/Select';
import { Checkbox } from './cutie-components/Checkbox';
import { Radio } from './cutie-components/Radio';

function App() {
  const { popupOpen, handleClickPopup, handleClosePopup } = usePopup();

  const { menuAnchorEl, menuOpen, handleClickMenu, handleCloseMenu } =
    useMenu();

  const { alertOpen, handleCloseAlert, handleClickAlert } = useAlert();
  const { handleChangeTabs, tabsValue } = useTabs(4);

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
  const [tooltipAnchorEl, setTooltipAnchorEl] = useState(null);

  const [currentValue, setCurrentValue] = useState(
    window.localStorage.getItem('theme') || 'system'
  );

  const [checkboxChecked, setCheckboxChecked] = useState(true);

  return (
    <div className="App">
      <div className="pl-10px pr-10px">
        <div className="df jcsb aic p-10px">
          <div className="left df aic pt-7px pb-7px">
            <div className="df fdc">
              <a href="/" className="df aic">
                <h1 className="m-0px mr-5px" style={{ fontWeight: 'black' }}>
                  Cutie UI
                </h1>
              </a>
              <p style={{ color: 'var(--textSecondary)' }}>
                Cute ui framework for React
              </p>
            </div>
            <Input
              label
              variant="filled"
              button={<Button>Search</Button>}
              className="minw-300px ml-50px"
              placeholder="Search docs"
            />
          </div>
          <div>efwfwefwef</div>
          <div className="right df aic">
            <Button
              onClick={(e: any) => {
                handleClickMenu(e);
              }}
              className="mr-10px"
            >
              Hello
            </Button>
            <Button
              onClick={handleClickAlert}
              endIcon={
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
                      d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
                    />
                  </svg>
                </Icon>
              }
              className="mr-10px"
              variant="outlined"
            >
              More
            </Button>
            <Button
              endIcon={
                <Loader
                  variant={2}
                  size="1rem"
                  color="textOpposite"
                  fatness={'2px'}
                />
              }
              onClick={handleClickPopup}
              className="mr-10px"
              variant="contained"
            >
              Button
            </Button>
            <Popup open={popupOpen} onClose={handleClosePopup}>
              fewfwe
            </Popup>
            <Menu
              fullWidth
              open={menuOpen}
              anchorEl={menuAnchorEl}
              onClose={handleCloseMenu}
            >
              <MenuItem onClick={handleClickPopup} onClose={handleCloseMenu}>
                Hello I'm
              </MenuItem>
              <MenuItem
                endIcon={
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
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                      />
                    </svg>
                  </Icon>
                }
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
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                      />
                    </svg>
                  </Icon>
                }
                onClose={handleCloseMenu}
              >
                Hello I'm
              </MenuItem>
              <MenuItem
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
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                      />
                    </svg>
                  </Icon>
                }
                divider
                onClose={handleCloseMenu}
              >
                Hello I'm menu
              </MenuItem>
              <MenuItem
                endIcon={
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
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                      />
                    </svg>
                  </Icon>
                }
                onClose={handleCloseMenu}
              >
                Hello
              </MenuItem>
              <MenuItem onClose={handleCloseMenu}>Hello I'm menu</MenuItem>
            </Menu>
            <Alert
              open={alertOpen}
              onClose={handleCloseAlert}
              position="bottomCenter"
              color="primary"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Alert>
            <Icon
              className="mr-10px"
              other={{
                onMouseEnter: (e: any) => setTooltipAnchorEl(e.currentTarget),
                onMouseLeave: (e: any) => setTooltipAnchorEl(null),
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </Icon>
            <Avatar
              onClick={(e: any) => {
                handleClickMenu(e);
              }}
              src="https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_4x3.jpg"
            />
          </div>
        </div>
        <div className="mt-10px df">
          <List>
            <ListItemButton
              active
              startIcon={
                <Icon>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                    />
                  </svg>
                </Icon>
              }
              className="mb-10px"
            >
              Get Started
            </ListItemButton>
            <ListItemButton
              startIcon={
                <Icon>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </Icon>
              }
              className="mb-10px"
            >
              Sponsor
            </ListItemButton>
            <ListItemButton
              activeFilled
              startIcon={
                <Icon>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                    />
                  </svg>
                </Icon>
              }
              className="mb-10px"
            >
              Documentation
            </ListItemButton>
            <ListItemButton
              startIcon={
                <Icon>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </Icon>
              }
              endIcon={
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
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </Icon>
              }
              onClick={handleClickMenu}
              className="mb-10px"
            >
              Features
            </ListItemButton>
            <ListItem activeFilled>Components</ListItem>
            <ListItemButton>Hello</ListItemButton>
            <ListItemButton active>Hello world</ListItemButton>
            <ListItemButton>Hello world</ListItemButton>
            <ListItemButton className="mb-10px">
              Hello worldworldworld
            </ListItemButton>
            <ListItem active onClick={handleClickMenu} className="colorPrimary">
              Layout
            </ListItem>
            <ListItemButton>Hello</ListItemButton>
            <ListItemButton>Hello world</ListItemButton>
            <ListItemButton>Hello world</ListItemButton>
            <ListItemButton>Hello world</ListItemButton>
            <ListItemButton>Hello world</ListItemButton>
            <ListItemButton className="mb-10px">
              Hello worldworldworld
            </ListItemButton>
            <ListItem onClick={handleClickMenu} className="colorPrimary">
              Layout
            </ListItem>
            <ListItemButton>Hello</ListItemButton>
            <ListItemButton>Hello world</ListItemButton>
            <ListItemButton onClick={handleClickMenu}>
              Hello world
            </ListItemButton>
            <ListItemButton>Hello world</ListItemButton>
            <ListItemButton>Hello world</ListItemButton>
            <ListItemButton>Hello world</ListItemButton>
            <ListItemButton>Hello worldworldworld</ListItemButton>
            <ListItemButton>Hello worldworldworld</ListItemButton>
            <ListItemButton>Hello worldworldworld</ListItemButton>
            <ListItemButton>Hello worldworldworld</ListItemButton>
            <ListItemButton>Hello worldworldworld</ListItemButton>
            <ListItemButton>Hello worldworldworld</ListItemButton>
            <ListItemButton>Hello worldworldworld</ListItemButton>
            <ListItemButton>Hello worldworldworld</ListItemButton>
            <ListItemButton>Hello worldworldworld</ListItemButton>
            <ListItemButton>Hello worldworldworld</ListItemButton>
            <ListItemButton>Hello worldworldworld</ListItemButton>
            <ListItemButton onClick={handleClickMenu}>
              Hello worldworldworld
            </ListItemButton>
          </List>
          <div className="px-50px flex">
            <div className="df aic">
              <Button className="mr-10px">Hello</Button>
              <Button
                other={{
                  onMouseEnter: (e: any) => setTooltipAnchorEl(e.currentTarget),
                  onMouseLeave: (e: any) => setTooltipAnchorEl(null),
                }}
                className="mr-10px"
                variant="outlined"
              >
                Hello
              </Button>
              <Button className="mr-10px" variant="contained">
                Hello
              </Button>
              <Link className="ml-10px">Hello</Link>
              <Switch
                size="medium"
                className="ml-10px"
                checked={checkedSwitch}
                onChange={(e: any) => {
                  handleSwitch(e);
                  changeTheme(theme == 'dark' ? 'light' : 'dark');
                }}
              />
            </div>

            <Tabs
              color="neutral"
              value={tabsValue}
              onChange={handleChangeTabs}
              variant="contained"
              labels={['English', 'Russian', 'Swedish', 'Bebrish']}
              fullWidth
            >
              <Tab className="pt-20px">
                <Skeleton
                  className="mb-10px"
                  variant="circle"
                  width={'100px'}
                  height={'100px'}
                />
                <Skeleton variant="rounded" width="500px" height="100px" />
                <Icon color="neutral">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </Icon>
                <Icon color="primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </Icon>
                <Icon color="secondary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </Icon>
              </Tab>
              <Tab className="pt-20px">
                <div>
                  <Button
                    size="large"
                    color="white"
                    className="mr-20px"
                    onClick={() => changeTheme('light')}
                    variant="contained"
                  >
                    Light
                  </Button>
                  <Button
                    size="large"
                    color="neutral"
                    className="mr-20px"
                    onClick={() => changeTheme('dark')}
                    variant="contained"
                  >
                    Dark
                  </Button>
                  <Button
                    startIcon={
                      <Icon>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </Icon>
                    }
                    size="large"
                    color="secondary"
                    className="mr-20px"
                    onClick={() => changeTheme('system')}
                    variant="contained"
                  >
                    System
                  </Button>
                </div>
                <div className="w-500px">
                  <LinearProgress
                    duration={1.2}
                    height={2}
                    value={20}
                    className="mt-20px"
                  />
                  <LinearProgress
                    variant={1}
                    loader
                    duration={2}
                    height={2}
                    value={20}
                    className="mt-20px"
                  />
                  <LinearProgress
                    variant={1}
                    loader
                    duration={2}
                    color="success"
                    height={2}
                    value={20}
                    className="mt-20px"
                  />
                  <LinearProgress
                    variant={3}
                    loader
                    duration={2}
                    color="pink"
                    height={2}
                    value={20}
                    className="mt-20px"
                  />
                  <Loader
                    duration={1}
                    variant={1}
                    fatness={2}
                    className="mt-20px"
                  />
                  <Loader
                    duration={1}
                    variant={2}
                    fatness={3}
                    className="mt-20px"
                  />
                  <Loader
                    duration={1}
                    variant={3}
                    size={'10px'}
                    fatness={5}
                    className="mt-20px"
                  />
                </div>
              </Tab>
              <Tab className="pt-10px">
                <GradientText
                  fontSize={'50px'}
                  fontWeight={700}
                  rotate={10}
                  firstColor="primary"
                  secondColor="neutral"
                >
                  Hello world
                </GradientText>
                <div className="mb-10px">
                  <Button variant="text">Button</Button>
                  <Button variant="outlined">Button</Button>
                  <Button variant="contained">Button</Button>
                </div>
                <div className="mb-10px">
                  <Button variant="text" color="secondary">
                    Button
                  </Button>
                  <Button variant="outlined" color="secondary">
                    Button
                  </Button>
                  <Button variant="contained" color="secondary">
                    Button
                  </Button>
                </div>
                <div className="mb-10px">
                  <Button variant="text" color="neutral">
                    Button
                  </Button>
                  <Button variant="outlined" color="neutral">
                    Button
                  </Button>
                  <Button variant="contained" color="neutral">
                    Button
                  </Button>
                </div>
                <div className="mb-10px">
                  <Button variant="text" color="success">
                    Button
                  </Button>
                  <Button variant="outlined" color="success">
                    Button
                  </Button>
                  <Button variant="contained" color="success">
                    Button
                  </Button>
                </div>
                <div className="mb-10px">
                  <Button variant="text" color="info">
                    Button
                  </Button>
                  <Button variant="outlined" color="info">
                    Button
                  </Button>
                  <Button variant="contained" color="info">
                    Button
                  </Button>
                </div>
                <div className="mb-10px">
                  <Button variant="text" color="warning">
                    Button
                  </Button>
                  <Button variant="outlined" color="warning">
                    Button
                  </Button>
                  <Button variant="contained" color="warning">
                    Button
                  </Button>
                </div>
                <div className="mb-10px">
                  <Button variant="text" color="sky">
                    Button
                  </Button>
                  <Button variant="outlined" color="sky">
                    Button
                  </Button>
                  <Button variant="contained" color="#F73C8C">
                    Button
                  </Button>
                </div>
                <div className="mb-10px">
                  <Button variant="text" color="error">
                    Button
                  </Button>
                  <Button variant="outlined" color="error">
                    Button
                  </Button>
                  <Button variant="contained" color="error">
                    Button
                  </Button>
                </div>
                <div className="mb-10px">
                  <Button variant="text" color="black">
                    Button
                  </Button>
                  <Button variant="outlined" color="black">
                    Button
                  </Button>
                  <Button variant="contained" color="black">
                    Button
                  </Button>
                </div>
                <div className="mb-10px">
                  <Button variant="text" color="white">
                    Button
                  </Button>
                  <Button variant="outlined" color="white">
                    Button
                  </Button>
                  <Button variant="contained" color="white">
                    Button
                  </Button>
                </div>
                <div className="mb-10px">
                  <Button variant="text" color="textPrimary">
                    Button
                  </Button>
                  <Button variant="outlined" color="textPrimary">
                    Button
                  </Button>
                  <Button variant="contained" color="textPrimary">
                    Button
                  </Button>
                </div>
                <div className="mb-10px">
                  <IconButton className="mr-10px">
                    <Icon fontSize={'20px'}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                        />
                      </svg>
                    </Icon>
                  </IconButton>
                  <IconButton variant="outlined" className="mr-10px">
                    <Icon fontSize={'20px'}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                        />
                      </svg>
                    </Icon>
                  </IconButton>
                  <IconButton
                    size="large"
                    variant="contained"
                    className="mr-10px"
                  >
                    <Icon>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                        />
                      </svg>
                    </Icon>
                  </IconButton>
                </div>
                <div className="mb-10px">
                  <IconButton
                    size="large"
                    color="secondary"
                    className="mr-10px"
                  >
                    <Icon>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                        />
                      </svg>
                    </Icon>
                  </IconButton>
                  <IconButton
                    color="secondary"
                    variant="outlined"
                    className="mr-10px"
                  >
                    <Icon>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                        />
                      </svg>
                    </Icon>
                  </IconButton>
                  <IconButton
                    color="secondary"
                    variant="contained"
                    className="mr-10px"
                  >
                    <Icon>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                        />
                      </svg>
                    </Icon>
                  </IconButton>
                </div>
                <div className="mb-10px">
                  <IconButton color="neutral" className="mr-10px">
                    <Icon>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                        />
                      </svg>
                    </Icon>
                  </IconButton>
                  <IconButton
                    color="neutral"
                    variant="outlined"
                    className="mr-10px"
                  >
                    <Icon>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                        />
                      </svg>
                    </Icon>
                  </IconButton>
                  <IconButton
                    color="neutral"
                    variant="contained"
                    className="mr-10px"
                  >
                    <Icon>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                        />
                      </svg>
                    </Icon>
                  </IconButton>
                </div>
                <div className="mb-10px">
                  <IconButton color="text" className="mr-10px">
                    <Icon>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                        />
                      </svg>
                    </Icon>
                  </IconButton>
                </div>
              </Tab>
              <Tab>
                <Select
                  // onChange={(e) => setCurrentValue(e.target.value)}
                  className="w-300px"
                >
                  <option value={10}>Hello1</option>
                  <option value={20}>Hello2</option>
                  <option value={30}>Hello3</option>
                  <option value={40}>Hello4</option>
                </Select>
                <Checkbox
                  className="my-20px"
                  checked={checkboxChecked}
                  onChange={(e) => setCheckboxChecked(e.target.checked)}
                  label="Agree with terms"
                />
                <Radio
                  size="small"
                  className="mb-10px"
                  currentValue={currentValue}
                  onChange={(e: any) => {
                    setCurrentValue(e.target.value);
                    changeTheme(e.target.value);
                  }}
                  value={'light'}
                  label="light"
                />
                <Radio
                  className="mb-10px"
                  currentValue={currentValue}
                  onChange={(e: any) => {
                    setCurrentValue(e.target.value);
                    changeTheme(e.target.value);
                  }}
                  value={'dark'}
                  label="dark"
                />
                <Radio
                  size="large"
                  className="mb-10px"
                  currentValue={currentValue}
                  onChange={(e: any) => {
                    setCurrentValue(e.target.value);
                    changeTheme(e.target.value);
                  }}
                  value={'system'}
                  label="system"
                />
                <div className="df mb-20px">
                  <Button className="mr-20px">text</Button>
                  <Button className="mr-20px" variant="text2">
                    text2
                  </Button>
                </div>
                <div className="df mb-20px">
                  <Button className="mr-20px" variant="outlined">
                    outlined
                  </Button>
                  <Button className="mr-20px" variant="outlined2">
                    outlined2
                  </Button>
                  <Button className="mr-20px" variant="outlined3">
                    outlined3
                  </Button>
                  <Button className="mr-20px" variant="outlined4">
                    outlined4
                  </Button>
                </div>
                <div className="df mb-20px">
                  <Button className="mr-20px" variant="contained">
                    contained
                  </Button>
                  <Button className="mr-20px" variant="contained2">
                    contained2
                  </Button>
                  <Button className="mr-20px" variant="contained3">
                    contained3
                  </Button>
                  <Button className="mr-20px" variant="contained4">
                    contained4
                  </Button>
                </div>
                <span className="relative">
                  <img
                    width={'350px'}
                    height="auto"
                    src="https://cdn.oneesports.gg/cdn-data/2021/10/Dota2_NetflixDotaDragonsBlood_Marci_Hero_2.jpg"
                  />
                  <Button
                    className="mr-20px absolute right-60px bottom-80px"
                    color="rgba(0,0,0,0.5)"
                    variant="contained"
                    sx={{
                      '&:hover': {
                        backgroundColor: 'rgba(0,0,0,0.7)',
                      },
                      '&:active': {
                        backgroundColor: 'rgba(0,0,0,0.8)',
                      },
                    }}
                  >
                    button4k
                  </Button>
                  <Button
                    className="mr-20px absolute right-170px bottom-80px"
                    color="rgba(255,255,255,0.5)"
                    sx={{
                      '&:hover': {
                        backgroundColor: 'rgba(255,255,255,0.7)',
                      },
                      '&:active': {
                        backgroundColor: 'rgba(255,255,255,0.8)',
                      },
                    }}
                    variant="contained"
                  >
                    button4k
                  </Button>
                </span>
                <p className="w-500px">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptas quis culpa cum dolorum, doloremque fugiat iure
                  reprehenderit. Sit voluptas, nesciunt delectus, laboriosam,
                  architecto ipsam rem nostrum in dicta voluptates suscipit!
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. At
                  dolor unde, quaerat nostrum explicabo ipsa distinctio sit
                  atque molestias voluptates incidunt cupiditate veniam, dolore
                  aspernatur veritatis minima iste perspiciatis. Quis.
                </p>
                <Input
                  label
                  variant="basic"
                  button={<Button>Search</Button>}
                  className="minw-300px"
                  placeholder="Search docs"
                />
                <Input
                  label
                  variant="underlined"
                  button={<Button>Search</Button>}
                  className="minw-300px ml-50px"
                  placeholder="Search docs"
                />
                <Input
                  label
                  variant="filled"
                  button={<Button>Search</Button>}
                  className="minw-300px ml-50px"
                  placeholder="Search docs"
                />
                <Input
                  other={{
                    onMouseEnter: (e: any) =>
                      setTooltipAnchorEl(e.currentTarget),
                    onMouseLeave: (e: any) => setTooltipAnchorEl(null),
                  }}
                  label
                  button={<Button>Search</Button>}
                  className="minw-300px mt-50px"
                  placeholder="Search docs"
                />
                <Button
                  other={{
                    onMouseEnter: (e: any) =>
                      setTooltipAnchorEl(e.currentTarget),
                    onMouseLeave: (e: any) => setTooltipAnchorEl(null),
                  }}
                >
                  Hello
                </Button>
                <Radio
                  className="mt-50px"
                  other={{
                    onMouseEnter: (e: any) =>
                      setTooltipAnchorEl(e.currentTarget),
                    onMouseLeave: (e: any) => setTooltipAnchorEl(null),
                  }}
                />
                <Avatar
                  width={'2.5rem'}
                  className="mr-20px"
                  src={
                    'https://img.championat.com/news/big/p/y/v-dota-2-poyavilsya-pervyj-chestnyj-igrok-s-grandmasterom-na-marci-viktoriya-bonya_1637747390104987094.jpg'
                  }
                />
                <Avatar
                  width={'3rem'}
                  className="mr-20px"
                  src={'https://dota2.ru/img/heroes/anti_mage/portrait.jpg'}
                />
                <Avatar
                  width={'4rem'}
                  className="mr-20px"
                  src={
                    'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/wrarcana/wr_portrait.png'
                  }
                />
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
      <Loader size={'200px'} />
      <div className="df fdc">
        <Button variant="contained">Hello</Button>
        <Button variant="outlined">Hello</Button>
      </div>
      <Tooltip anchorEl={tooltipAnchorEl}>Lorem</Tooltip>
    </div>
  );
}

export default App;
