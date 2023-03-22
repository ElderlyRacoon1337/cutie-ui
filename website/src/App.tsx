import {
  Button,
  Input,
  List,
  ListItem,
  ListItemButton,
  Switch,
  ThemeContext,
  useSwitch,
} from 'cutie-ui';
import { useContext, useEffect, useState } from 'react';
// import SyntaxHighlighter from 'react-syntax-highlighter';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

function App() {
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
  SyntaxHighlighter.supportedLanguages = ['jsx', 'javascript', 'react', 'node'];

  return (
    <div className="App">
      <header className="header h-70px px-15px df aic jcsb">
        <div className="header-left df aic">
          <a href="/" className="headerLogo mr-60px">
            <h1 style={{ margin: 0 }}>Cutie UI</h1>
            <p className="textSecondary">Cute library for react</p>
          </a>
          <Input
            className="minw-400px"
            placeholder="Search docs..."
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
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            }
          />
        </div>
        <div className="headerRight df aic">
          <Button className="mr-10px" variant="outlined">
            About us
          </Button>
          <Button variant="contained">Get started</Button>
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
        <div className="sideBar w-200px ">
          <List>
            <ListItemButton
              className="mb-10px"
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
                    d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                  />
                </svg>
              }
              activeFilled
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
                  stroke="var(--primary)"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
                  />
                </svg>
              }
              className="mb-10px"
            >
              Components
            </ListItemButton>
            <ListItemButton
              startIcon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="var(--primary)"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
                  />
                </svg>
              }
              className="mb-10px"
            >
              Hooks
            </ListItemButton>
            <ListItemButton
              startIcon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="var(--primary)"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
                  />
                </svg>
              }
              className="mb-10px"
            >
              Customization
            </ListItemButton>
            <ListItemButton
              startIcon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="var(--primary)"
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
              Support
            </ListItemButton>
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
            <ListItem className="colorPrimary">Hooks</ListItem>
            <ListItemButton>useAlert</ListItemButton>
            <ListItemButton>useMenu</ListItemButton>
            <ListItemButton>usePopup</ListItemButton>
            <ListItemButton>useSwitch</ListItemButton>
            <ListItemButton>useTabs</ListItemButton>
            <ListItem className="colorPrimary">Customization</ListItem>
            <ListItemButton>Themming</ListItemButton>
            <ListItem className="colorPrimary">Styling</ListItem>
            <ListItemButton>Css shorts</ListItemButton>
          </List>
        </div>
        <div className="content flex container maxw-1000px pt-50px">
          <h1 className="m-0px mb-5px" style={{ fontSize: '50px' }}>
            Getting Started
          </h1>

          <p
            className="colorPrimary mt-30px mb-20px fw-600"
            style={{ fontSize: '22px' }}
          >
            Installation
          </p>
          <SyntaxHighlighter
            customStyle={{
              padding: '20px',
              borderRadius: '10px',
              marginBottom: '20px',
            }}
            language="bash"
            style={vscDarkPlus}
          >
            {'npm install cutie-ui'}
          </SyntaxHighlighter>
          <p>Index.js:</p>
          <SyntaxHighlighter
            language="javascript"
            style={vscDarkPlus}
            customStyle={{
              padding: '20px',
              borderRadius: '10px',
              marginBottom: '20px',
            }}
          >
            {"import 'cutie-ui/cute-styles/index.scss'"}
          </SyntaxHighlighter>
          <p>If all done correctly, this code will work</p>
          <SyntaxHighlighter
            language="jsx"
            style={vscDarkPlus}
            customStyle={{
              padding: '20px',
              borderRadius: '10px',
              marginBottom: '10px',
            }}
          >
            {`import { Button } from "cutie-ui"
            
<Button variant={'contained'}>Hello world!</Button>`}
          </SyntaxHighlighter>
          <div className="df jcfe">
            <Button
              size="large"
              color="secondary"
              className="mt-10px"
              variant="contained"
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
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              }
            >
              Component "Button"
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
