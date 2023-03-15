import { useState } from 'react';
import { Avatar } from './cute-components/Avatar';
import { Button } from './cute-components/Button';
import { Icon } from './cute-components/Icon';
import { IconButton } from './cute-components/IconButton';
import { Input } from './cute-components/Input';
import { List } from './cute-components/List';
import { ListItem } from './cute-components/List/ListItem';
import { ListItemButton } from './cute-components/List/ListItemButton';
import { Menu } from './cute-components/Menu';
import { MenuItem } from './cute-components/Menu/MenuItem';
import { Popup } from './cute-components/Popup';

function App() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const onClose = () => {
    setAnchorEl(null);
  };

  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <div className="App">
      <div className="pl-10px pr-10px">
        <div className="df jcsb aic p-10px">
          <div className="left df aic pt-7px pb-7px">
            <a href="/" className="df aic">
              <h1 className="m-0px">Cutie</h1>
              <Icon
                size="large"
                svg={
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
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                }
              />
            </a>
          </div>
          <Input
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
            className="w-600px py-10px"
            placeholder="Search"
          />
          <div className="right df aic">
            <IconButton
              className="mr-10px"
              svg={
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
              svg={
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
              svg={
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
              onClick={(e: any) => {
                handleClick(e);
              }}
              className="mr-10px"
            >
              Hello
            </Button>
            <Button
              endIcon={
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
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              }
              className="mr-10px"
              variant="outlined"
            >
              Hello
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
              onClick={() => setPopupOpen(true)}
              className="mr-10px"
              variant="contained"
            >
              Hello
            </Button>
            <Popup open={popupOpen} onClose={() => setPopupOpen(false)}>
              fewfwe
            </Popup>
            <Menu open={open} anchorEl={anchorEl} onClose={onClose}>
              <MenuItem onClick={() => setPopupOpen(true)} onClose={onClose}>
                Hello I'm
              </MenuItem>
              <MenuItem onClose={onClose}>Hello I'm </MenuItem>
              <MenuItem onClose={onClose}>Hello I'm menu</MenuItem>
              <MenuItem onClose={onClose}>Hello</MenuItem>
              <MenuItem onClose={onClose}>Hello I'm menu</MenuItem>
            </Menu>
            <Icon
              className="mr-10px"
              svg={
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
            <Avatar
              onClick={(e: any) => {
                handleClick(e);
              }}
              src="https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_4x3.jpg"
            />
          </div>
        </div>
        <div className="mt-10px">
          <List className="maxw-200px">
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
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
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
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              }
              className="mb-10px"
            >
              Follow
            </ListItemButton>
            <ListItem className="colorPrimary">Components</ListItem>
            <ListItemButton>Hello</ListItemButton>
            <ListItemButton active>Hello world</ListItemButton>
            <ListItemButton>Hello world</ListItemButton>
            <ListItemButton className="mb-10px">
              Hello worldworldworld
            </ListItemButton>
            <ListItem onClick={handleClick} className="colorPrimary">
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
            <ListItemButton onClick={handleClick}>Hello world</ListItemButton>
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
            <ListItemButton>Hello worldworldworld</ListItemButton>
          </List>
        </div>
      </div>
    </div>
  );
}

export default App;
