import Alert from './cute-components/Alert';
import { Avatar } from './cute-components/Avatar';
import { Button } from './cute-components/Button';
import Loader from './cute-components/Loader';
import { Icon } from './cute-components/Icon';
import { IconButton } from './cute-components/IconButton';
import { Input } from './cute-components/Input';
import Link from './cute-components/Link';
import { List } from './cute-components/List';
import { ListItem } from './cute-components/List/ListItem';
import { ListItemButton } from './cute-components/List/ListItemButton';
import { Menu } from './cute-components/Menu';
import { MenuItem } from './cute-components/Menu/MenuItem';
import { Popup } from './cute-components/Popup';
import Tabs from './cute-components/Tabs';
import { useMenu } from './cute-hooks/useMenu';
import { usePopup } from './cute-hooks/usePopup';
import Switch from './cute-components/Switch';
import Tab from './cute-components/Tabs/Tab';
import { useAlert } from './cute-hooks/useAlert';
import { useTabs } from './cute-hooks/useTabs';
import Skeleton from './cute-components/Skeleton';
import { ThemeContext } from './ThemeProvider';
import { useContext, useEffect, useState } from 'react';
import GradientText from './cute-components/GradientText';
import { useSwitch } from './cute-hooks/useSwitch';

function App() {
  const { popupOpen, handleClickPopup, handleClosePopup } = usePopup();
  const { menuAnchorEl, menuOpen, handleClickMenu, handleCloseMenu } =
    useMenu();
  const { alertOpen, handleCloseAlert, handleClickAlert } = useAlert();
  const { handleChangeTabs, tabsValue } = useTabs(1);

  const [theme, setTheme] = useState('light');
  const { changeTheme } = useContext(ThemeContext);
  const { checkedSwitch, setCheckedSwitch, handleSwitch } = useSwitch();
  useEffect(() => {
    const theme = document.documentElement.dataset.theme;
    if (theme) {
      setCheckedSwitch(theme == 'dark');
      setTheme(theme);
    }
  }, [document.documentElement.dataset.theme, checkedSwitch]);

  return (
    <div className="App">
      <div className="pl-10px pr-10px">
        <div className="df jcsb aic p-10px">
          <div className="left df aic pt-7px pb-7px">
            <a href="/" className="df aic">
              <h1 className="m-0px">Cutie UI</h1>
            </a>
            <Input
              button={<Button>Search</Button>}
              startIcon={
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
              }
              className="minw-250px"
              classNameForWrapper="ml-50px"
              placeholder="Choose your age"
            />
          </div>

          <div className="right df aic">
            <IconButton
              size="medium"
              className="mr-10px"
              icon={
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
              }
            />
            <IconButton
              variant="outlined"
              color="secondary"
              className="mr-10px"
              icon={
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
              }
            />
            <IconButton
              onClick={handleClickAlert}
              variant="contained"
              className="mr-10px"
              icon={
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
              }
            />
            <Button
              onClick={(e: any) => {
                handleClickMenu(e);
              }}
              className="mr-10px"
            >
              Hello
            </Button>

            <Button className="mr-10px" variant="outlined">
              More
              <input hidden accept="image/*" multiple type="file" />
            </Button>
            <Button
              endIcon={
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
                }
                onClose={handleCloseMenu}
              >
                Hello I'm
              </MenuItem>
              <MenuItem divider onClose={handleCloseMenu}>
                Hello I'm menu
              </MenuItem>
              <MenuItem
                endIcon={
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
              position="bottomLeft"
              color="error"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Alert>
            <Icon className="mr-10px">
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
              startIcon={
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
              }
              className="mb-10px"
            >
              Get Started
            </ListItemButton>
            <ListItemButton
              startIcon={
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
              }
              className="mb-10px"
            >
              Sponsor
            </ListItemButton>
            <ListItemButton
              activeFilled
              startIcon={
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
              }
              className="mb-10px"
            >
              Documentation
            </ListItemButton>
            <ListItemButton
              startIcon={
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
              }
              endIcon={
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
              }
              onClick={handleClickMenu}
              className="mb-10px"
            >
              Features
            </ListItemButton>
            <ListItem className="colorPrimary">Components</ListItem>
            <ListItemButton>Hello</ListItemButton>
            <ListItemButton active>Hello world</ListItemButton>
            <ListItemButton>Hello world</ListItemButton>
            <ListItemButton className="mb-10px">
              Hello worldworldworld
            </ListItemButton>
            <ListItem onClick={handleClickMenu} className="colorPrimary">
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
            <ListItem className="colorPrimary">Layout</ListItem>
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
            <Button className="mr-10px mb-10px">Hello</Button>
            <Button className="mr-10px" variant="outlined">
              Hello
            </Button>
            <Button className="mr-10px" variant="contained">
              Hello
            </Button>
            <Link className="ml-10px">Hello</Link>

            <Switch
              className="mb-10px"
              checked={checkedSwitch}
              onChange={(e: any) => {
                handleSwitch(e);
                changeTheme(theme == 'dark' ? 'light' : 'dark');
              }}
            />

            <Tabs
              color="secondary"
              value={tabsValue}
              onChange={handleChangeTabs}
              variant="contained"
              labels={['English', 'Russian', 'Swedish']}
              fullWidth
              // className="minw-550px"
            >
              <Tab className="pt-20px">
                <Skeleton
                  className="mb-10px"
                  variant="circle"
                  width={100}
                  height={100}
                />
                <Skeleton variant="rounded" width="500" height="100" />
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
                <Icon
                  color="primary"
                  icon={
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
                  }
                ></Icon>
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
                <div className="">
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
                    size="large"
                    color="secondary"
                    className="mr-20px"
                    onClick={() => changeTheme('system')}
                    variant="contained"
                  >
                    System
                  </Button>
                </div>
              </Tab>
              <Tab className="pt-10px">
                <GradientText
                  fontSize={50}
                  fontWeight={700}
                  rotate={150}
                  firstColor="var(--secondary)"
                  secondColor="var(--primary)"
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
                  <Button variant="text" color="text">
                    Button
                  </Button>
                  <Button variant="outlined" color="text">
                    Button
                  </Button>
                  <Button variant="contained" color="text">
                    Button
                  </Button>
                </div>
                <div className="mb-10px">
                  <IconButton
                    className="mr-10px"
                    icon={
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
                    }
                  />
                  <IconButton
                    variant="outlined"
                    className="mr-10px"
                    icon={
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
                    }
                  />
                  <IconButton
                    variant="contained"
                    className="mr-10px"
                    icon={
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
                    }
                  />
                </div>
                <div className="mb-10px">
                  <IconButton
                    color="secondary"
                    className="mr-10px"
                    icon={
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
                    }
                  />
                  <IconButton
                    color="secondary"
                    variant="outlined"
                    className="mr-10px"
                    icon={
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
                    }
                  />
                  <IconButton
                    color="secondary"
                    variant="contained"
                    className="mr-10px"
                    icon={
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
                    }
                  />
                </div>
                <div className="mb-10px">
                  <IconButton
                    color="neutral"
                    className="mr-10px"
                    icon={
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
                    }
                  />
                  <IconButton
                    color="neutral"
                    variant="outlined"
                    className="mr-10px"
                    icon={
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
                    }
                  />
                  <IconButton
                    color="neutral"
                    variant="contained"
                    className="mr-10px"
                    icon={
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
                    }
                  />
                </div>
                <div className="mb-10px">
                  <IconButton
                    color="text"
                    className="mr-10px"
                    icon={
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
                    }
                  />
                  <IconButton
                    color="text"
                    variant="outlined"
                    className="mr-10px"
                    icon={
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
                    }
                  />
                  <IconButton
                    color="text"
                    variant="contained"
                    className="mr-10px"
                    icon={
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
                    }
                  />
                </div>
                <div className="mb-10px">
                  <IconButton
                    color="white"
                    className="mr-10px"
                    icon={
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
                    }
                  />
                  <IconButton
                    color="white"
                    variant="outlined"
                    className="mr-10px"
                    icon={
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
                    }
                  />
                  <IconButton
                    color="white"
                    variant="contained"
                    className="mr-10px"
                    icon={
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
                    }
                  />
                </div>
                <div className="mb-10px">
                  <IconButton
                    color="black"
                    className="mr-10px"
                    icon={
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
                    }
                  />
                  <IconButton
                    color="black"
                    variant="outlined"
                    className="mr-10px"
                    icon={
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
                    }
                  />
                  <IconButton
                    color="black"
                    variant="contained"
                    className="mr-10px"
                    icon={
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
                    }
                  />
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
      <Loader />
      <div className="df fdc">
        <Button variant="contained">Hello</Button>
        <Button variant="outlined">Hello</Button>
      </div>
    </div>
  );
}

export default App;
