import { Icon, List, ListItem, ListItemButton } from 'cutie-ui';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  return (
    <List>
      <Link to={'/getting-started'}>
        <ListItemButton
          className="mb-10px"
          activeFilled={location.pathname == '/getting-started'}
          startIcon={
            <Icon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke={
                  location.pathname == '/getting-started'
                    ? 'var(--primaryText)'
                    : 'var(--primary)'
                }
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                />
              </svg>
            </Icon>
          }
        >
          Getting started
        </ListItemButton>
      </Link>
      <Link to={'/components'}>
        <ListItemButton
          activeFilled={location.pathname.split('/')[1] == 'components'}
          startIcon={
            <Icon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke={
                  location.pathname.split('/')[1] == 'components'
                    ? 'var(--primaryText)'
                    : 'var(--primary)'
                }
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
          className="mb-10px"
        >
          Components
        </ListItemButton>
      </Link>
      <ListItemButton
        activeFilled={location.pathname == '/hooks'}
        startIcon={
          <Icon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke={
                location.pathname == '/hooks'
                  ? 'var(--primaryText)'
                  : 'var(--primary)'
              }
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
              />
            </svg>
          </Icon>
        }
        className="mb-10px"
      >
        Hooks
      </ListItemButton>
      <ListItemButton
        activeFilled={location.pathname == '/customization'}
        startIcon={
          <Icon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke={
                location.pathname == '/customization'
                  ? 'var(--primaryText)'
                  : 'var(--primary)'
              }
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
              />
            </svg>
          </Icon>
        }
        className="mb-10px"
      >
        Customization
      </ListItemButton>
      <ListItemButton
        activeFilled={location.pathname == '/support'}
        startIcon={
          <Icon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke={
                location.pathname == '/support'
                  ? 'var(--primaryText)'
                  : 'var(--primary)'
              }
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
        Support
      </ListItemButton>
      {location.pathname.split('/')[1] == 'components' && (
        <>
          <ListItem className="colorPrimary">Components</ListItem>
          <ListItemButton active>Button</ListItemButton>
          <ListItemButton>IconButton</ListItemButton>
          <ListItemButton>Icon</ListItemButton>
          <ListItemButton>Input</ListItemButton>
          <ListItemButton>Switch</ListItemButton>
          <ListItemButton>Link</ListItemButton>
          <ListItemButton>List</ListItemButton>
          <ListItemButton>Menu</ListItemButton>
          <ListItemButton>Tabs</ListItemButton>
          <ListItemButton>Avatar</ListItemButton>
          <ListItemButton>Alert</ListItemButton>
          <ListItemButton>Popup</ListItemButton>
          <ListItemButton>Gradient text</ListItemButton>
          <ListItemButton>Loader</ListItemButton>
          <ListItemButton>Gradient text</ListItemButton>
        </>
      )}
      {location.pathname == '/hooks' && (
        <>
          <ListItem className="colorPrimary">Hooks</ListItem>
          <ListItemButton>useAlert</ListItemButton>
          <ListItemButton>useMenu</ListItemButton>
          <ListItemButton>usePopup</ListItemButton>
          <ListItemButton>useSwitch</ListItemButton>
          <ListItemButton>useTabs</ListItemButton>
        </>
      )}
      {location.pathname == '/customization' && (
        <>
          <ListItem className="colorPrimary">Customization</ListItem>
          <ListItemButton>Themming</ListItemButton>
        </>
      )}
      {location.pathname == '/styling' && (
        <>
          <ListItem className="colorPrimary">Styling</ListItem>
          <ListItemButton>Css shorts</ListItemButton>
        </>
      )}
    </List>
  );
};

export default Sidebar;
