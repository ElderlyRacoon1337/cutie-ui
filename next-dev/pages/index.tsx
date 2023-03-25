import Alert from '../cutie-components/Alert';
import { Avatar } from '../cutie-components/Avatar';
import { Button } from '../cutie-components/Button';
import Spinner from '../cutie-components/Spinner';
import { Icon } from '../cutie-components/Icon';
import { IconButton } from '../cutie-components/IconButton';
import { Input } from '../cutie-components/Input';
import Link from '../cutie-components/Link';
import { List } from '../cutie-components/List';
import { ListItem } from '../cutie-components/List/ListItem';
import { ListItemButton } from '../cutie-components/List/ListItemButton';
import { Menu } from '../cutie-components/Menu/index';
import { MenuItem } from '../cutie-components/Menu/MenuItem';
import { Popup } from '../cutie-components/Popup';
import Tabs from '../cutie-components/Tabs';
import { useMenu } from '../cutie-hooks/useMenu';
import { usePopup } from '../cutie-hooks/usePopup';
import Switch from '../cutie-components/Switch';
import Tab from '../cutie-components/Tabs/Tab';
import { useAlert } from '../cutie-hooks/useAlert';
import { useTabs } from '../cutie-hooks/useTabs';
import Skeleton from '../cutie-components/Skeleton';
import { ThemeContext } from '../ThemeProvider';
import { useContext, useEffect, useState } from 'react';
import GradientText from '../cutie-components/GradientText';
import { useSwitch } from '../cutie-hooks/useSwitch';
import Progress from '../cutie-components/LinearProgress';
import Tooltip from '../cutie-components/Tooltip';

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
  }, [checkedSwitch]);

  const [tooltipAnchorEl, setTooltipAnchorEl] = useState(null);

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
                <Icon fontSize={'1.3rem'} style={{ color: 'var(--logo)' }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentcolor"
                    version="1.1"
                    id="Capa_1"
                    viewBox="0 0 58 58"
                  >
                    <g>
                      <path d="M20.046,29.258c1.764-1.038,3.153-3.265,2.281-5.9c-0.173-0.524-0.738-0.809-1.263-0.635   c-0.524,0.173-0.809,0.739-0.635,1.263c0.557,1.685-0.404,2.964-1.396,3.548c-0.998,0.586-2.59,0.807-3.796-0.502   c-0.375-0.406-1.007-0.433-1.413-0.059c-0.406,0.374-0.433,1.007-0.059,1.413c1.058,1.149,2.35,1.61,3.593,1.61   C18.329,29.997,19.27,29.715,20.046,29.258z" />
                      <path d="M41.971,35.051c-0.524,0.173-0.809,0.739-0.635,1.263c0.557,1.685-0.404,2.965-1.396,3.549   c-0.998,0.587-2.591,0.807-3.796-0.503c-0.375-0.406-1.006-0.433-1.413-0.059c-0.406,0.374-0.433,1.007-0.059,1.413   c1.058,1.149,2.35,1.611,3.593,1.611c0.972,0,1.913-0.282,2.689-0.739c1.764-1.038,3.153-3.265,2.281-5.9   C43.062,35.162,42.495,34.875,41.971,35.051z" />
                      <path d="M25.833,38.41c-0.52-0.185-1.092,0.09-1.275,0.61c-0.59,1.673-2.134,2.1-3.276,1.952c-1.148-0.146-2.543-0.946-2.696-2.721   c-0.047-0.55-0.532-0.971-1.082-0.911c-0.55,0.047-0.958,0.531-0.911,1.082c0.238,2.772,2.399,4.274,4.435,4.534   c0.219,0.028,0.443,0.042,0.669,0.042c1.874,0,3.922-0.978,4.745-3.313C26.627,39.165,26.354,38.594,25.833,38.41z" />
                      <path d="M30.029,33.619c0.219,0.028,0.442,0.042,0.669,0.042c1.874,0,3.922-0.977,4.745-3.313c0.184-0.521-0.089-1.092-0.61-1.275   c-0.52-0.185-1.092,0.09-1.275,0.61c-0.59,1.673-2.131,2.093-3.276,1.952c-1.148-0.146-2.543-0.947-2.696-2.721   c-0.047-0.55-0.533-0.97-1.082-0.911c-0.55,0.047-0.958,0.531-0.911,1.082C25.831,31.857,27.992,33.36,30.029,33.619z" />
                      <path d="M33.251,44.039c-0.531,0.153-0.836,0.708-0.684,1.238c0.492,1.705-0.518,2.946-1.532,3.492   c-1.019,0.548-2.619,0.707-3.774-0.648c-0.358-0.421-0.99-0.471-1.41-0.113c-0.42,0.358-0.471,0.989-0.113,1.41   c1.065,1.251,2.419,1.751,3.722,1.751c0.903,0,1.782-0.241,2.521-0.638c1.803-0.969,3.277-3.141,2.507-5.808   C34.336,44.192,33.782,43.886,33.251,44.039z" />
                      <path d="M43.76,25.021c-1.194,1.313-2.78,1.104-3.776,0.526c-1.001-0.581-1.976-1.86-1.427-3.555   c0.17-0.525-0.118-1.089-0.643-1.259c-0.523-0.17-1.09,0.118-1.259,0.643c-0.858,2.646,0.55,4.871,2.326,5.901   c0.768,0.445,1.696,0.719,2.653,0.719c1.25,0,2.549-0.467,3.606-1.63c0.372-0.409,0.342-1.041-0.067-1.413   C44.764,24.582,44.132,24.613,43.76,25.021z" />
                      <path d="M51.5,28.5c0-2.246-1.142-4.296-3.018-5.484c-0.191-2.586-1.901-4.803-4.347-5.65c-0.072-0.209-0.17-0.403-0.262-0.6   c2.227-1.823,3.77-3.988,4.577-6.454c0.171-0.521-0.109-1.082-0.628-1.258c-6.805-2.314-10.671-1.144-12.59,0.025   c-1.106-5.75-4.85-8.064-6.341-8.772C28.708,0.121,28.463,0,28.187,0h-0.211c-0.26,0-0.482,0.11-0.651,0.281   c-1.451,0.676-5.274,2.974-6.394,8.797c-1.92-1.168-5.788-2.337-12.59-0.025c-0.519,0.176-0.799,0.737-0.628,1.258   c0.886,2.707,2.709,5.115,5.301,7.026C10.356,18.187,8.5,20.639,8.5,23.5c0,0.406,0.039,0.812,0.115,1.211   C7.28,25.936,6.5,27.681,6.5,29.5c0,1.746,0.713,3.416,1.945,4.629C7.831,35.14,7.5,36.307,7.5,37.5   c0,2.794,1.741,5.197,4.283,6.107C11.596,44.22,11.5,44.859,11.5,45.5c0,2.791,1.768,5.235,4.365,6.135   C16.765,54.232,19.209,56,22,56c0.972,0,1.917-0.214,2.783-0.626C25.998,57.015,27.917,58,30,58c1.943,0,3.75-0.856,4.978-2.326   C35.631,55.891,36.308,56,37,56c3.073,0,5.724-2.204,6.354-5.146c2.942-0.63,5.146-3.281,5.146-6.354   c0-0.478-0.054-0.953-0.161-1.422c1.945-1.162,3.161-3.266,3.161-5.578c0-1.689-0.663-3.3-1.815-4.5   C50.837,31.8,51.5,30.189,51.5,28.5z M9.972,10.63c8.201-2.465,10.871,0.922,10.89,0.947c0.244,0.344,0.676,0.499,1.081,0.387   c0.406-0.111,0.699-0.464,0.733-0.883c0.49-6.015,4.155-8.326,5.406-8.944c1.251,0.618,4.917,2.929,5.406,8.944   c0.034,0.414,0.324,0.758,0.723,0.873c0.4,0.116,0.832-0.034,1.082-0.365c0.028-0.036,2.7-3.423,10.9-0.958   c-0.721,1.659-1.868,3.153-3.421,4.461c-0.041-0.044-0.086-0.082-0.128-0.125c-0.074-0.076-0.149-0.15-0.227-0.223   c-0.18-0.168-0.367-0.326-0.563-0.472c-0.043-0.032-0.085-0.065-0.129-0.095c-0.22-0.155-0.451-0.291-0.689-0.417   c-0.073-0.039-0.147-0.075-0.221-0.111c-0.247-0.119-0.5-0.227-0.761-0.314c-0.018-0.006-0.035-0.014-0.053-0.02   c-0.28-0.091-0.57-0.155-0.863-0.207c-0.074-0.013-0.148-0.025-0.224-0.035C38.613,13.029,38.309,13,38,13   c-2.218,0-4.23,1.118-5.413,2.901C31.383,14.702,29.737,14,28,14c-1.689,0-3.3,0.663-4.5,1.815C22.3,14.663,20.689,14,19,14   c-0.26,0-0.516,0.02-0.77,0.05c-0.082,0.01-0.163,0.024-0.244,0.036c-0.171,0.027-0.34,0.06-0.507,0.101   c-0.093,0.022-0.185,0.044-0.277,0.07c-0.157,0.045-0.311,0.1-0.463,0.157c-0.198,0.073-0.39,0.158-0.579,0.25   c-0.079,0.039-0.16,0.074-0.238,0.117c-0.153,0.083-0.3,0.174-0.446,0.269c-0.038,0.025-0.076,0.05-0.114,0.076   c-0.335,0.227-0.654,0.477-0.943,0.766C12.364,14.426,10.847,12.632,9.972,10.63z M47.581,33.818   c1.202,0.844,1.919,2.221,1.919,3.682c0,1.812-1.078,3.439-2.747,4.146L45.87,42.02l0.338,0.898   c0.194,0.516,0.292,1.048,0.292,1.582c0,2.314-1.805,4.282-4.109,4.48l-0.839,0.072l-0.072,0.839C41.282,52.195,39.314,54,37,54   c-0.67,0-1.321-0.149-1.936-0.444l-0.798-0.382l-0.477,0.745C32.956,55.222,31.539,56,30,56c-1.685,0-3.215-0.932-3.994-2.433   l-0.522-1.006l-0.933,0.644C23.797,53.725,22.915,54,22,54c-2.067,0-3.86-1.402-4.361-3.411l-0.145-0.583l-0.583-0.145   c-2.008-0.5-3.411-2.293-3.411-4.361c0-0.742,0.176-1.45,0.524-2.105l0.658-1.239l-1.386-0.218C11.097,41.592,9.5,39.726,9.5,37.5   c0-1.057,0.375-2.085,1.057-2.895l0.694-0.825l-0.875-0.63C9.202,32.304,8.5,30.939,8.5,29.5c0-1.436,0.667-2.753,1.829-3.614   l0.564-0.418l-0.202-0.672C10.564,24.372,10.5,23.937,10.5,23.5c0-2.195,1.57-4.058,3.733-4.429l0.503-0.086l0.225-0.458   c0.121-0.247,0.268-0.473,0.426-0.689c0.006-0.007,0.014-0.01,0.019-0.018c0.415-0.556,0.935-0.995,1.519-1.304   c0.034-0.018,0.067-0.037,0.102-0.054c0.107-0.053,0.217-0.098,0.327-0.142c0.077-0.03,0.154-0.059,0.232-0.085   c0.091-0.03,0.182-0.059,0.275-0.083c0.111-0.029,0.224-0.052,0.337-0.072c0.072-0.013,0.143-0.029,0.216-0.038   C18.608,16.016,18.802,16,19,16c1.461,0,2.837,0.717,3.682,1.919l0.818,1.164l0.818-1.164C25.163,16.717,26.539,16,28,16   c1.61,0,3.107,0.873,3.909,2.277l1.115,1.955l0.703-2.138C34.336,16.244,36.053,15,38,15c0.232,0,0.458,0.023,0.681,0.058   c0.068,0.01,0.135,0.025,0.202,0.038c0.16,0.032,0.317,0.073,0.471,0.121c0.066,0.021,0.133,0.04,0.198,0.064   c0.203,0.075,0.4,0.16,0.589,0.262c0.037,0.02,0.07,0.046,0.107,0.067c0.151,0.087,0.296,0.183,0.436,0.287   c0.071,0.053,0.139,0.111,0.206,0.168c0.099,0.083,0.193,0.171,0.284,0.262c0.068,0.068,0.136,0.135,0.2,0.208   c0.095,0.108,0.182,0.224,0.266,0.342c0.041,0.057,0.087,0.109,0.125,0.168c0.001,0.002,0.004,0.003,0.005,0.005   c0.265,0.409,0.468,0.866,0.591,1.361l0.145,0.583l0.583,0.145c2.008,0.5,3.411,2.293,3.406,4.435l-0.018,0.631l0.563,0.288   c1.517,0.775,2.46,2.31,2.46,4.007c0,1.461-0.717,2.837-1.919,3.682L46.417,33L47.581,33.818z" />
                    </g>
                  </svg>
                </Icon>
              </a>
              <p className="" style={{ color: 'var(--textSecondary)' }}>
                Cute ui framework for React
              </p>
            </div>
            <Input
              button={<Button>Search</Button>}
              label
              message="hello"
              color="primary"
              startIcon={
                <Icon fontSize={'1rem'}>
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
              }
              className="minw-250px"
              classNameForWrapper="ml-50px"
              placeholder="Search docs"
            />
          </div>

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
                <Icon size="small">
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
              <input hidden accept="image/*" multiple type="file" />
            </Button>
            <Button
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
                  <Icon size="small">
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
                  <Icon size="small">
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
                  <Icon size="small">
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
                  <Icon fontSize={'1rem'}>
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
              position="bottomLeft"
              color="error"
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
              // activeFilled
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
            <Button className="mr-10px mb-10px">Hello</Button>
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
              className="mb-10px"
              checked={checkedSwitch}
              onChange={(e: any) => {
                handleSwitch(e);
                changeTheme(theme == 'dark' ? 'light' : 'dark');
              }}
            />

            <Tabs
              color="neutral"
              value={tabsValue}
              onChange={handleChangeTabs}
              variant="contained"
              labels={['English', 'Russian', 'Swedish']}
              fullWidth
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
                  <Progress
                    duration={1.2}
                    height={2}
                    value={20}
                    className="mt-20px"
                  />
                  <Progress
                    variant={'1'}
                    loader
                    duration={2}
                    // color="success"
                    height={2}
                    value={20}
                    className="mt-20px"
                  />
                  <Progress
                    variant={'2'}
                    loader
                    duration={2}
                    // color="success"
                    height={2}
                    value={20}
                    className="mt-20px"
                  />
                  <Progress
                    variant={'3'}
                    loader
                    duration={2}
                    // color="success"
                    height={2}
                    value={20}
                    className="mt-20px"
                  />
                  <Spinner
                    duration={1}
                    variant={1}
                    size={20}
                    fatness={2}
                    className="mt-20px"
                  />
                  <Spinner
                    duration={1}
                    variant={2}
                    size={20}
                    fatness={2}
                    className="mt-20px"
                  />
                  <Spinner
                    duration={1}
                    variant={3}
                    size={10}
                    fatness={5}
                    className="mt-20px"
                  />
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
                  <IconButton className="mr-10px">
                    <Icon fontSize={20}>
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
                    <Icon fontSize={20}>
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
                  <IconButton variant="contained" className="mr-10px">
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
                  <IconButton color="secondary" className="mr-10px">
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
            </Tabs>
          </div>
        </div>
      </div>
      <Spinner size={200} />
      <div className="df fdc">
        <Button variant="contained">Hello</Button>
        <Button variant="outlined">Hello</Button>
      </div>
      <Tooltip anchorEl={tooltipAnchorEl}>Hello Hello Hello Hello</Tooltip>
    </div>
  );
}

export default App;