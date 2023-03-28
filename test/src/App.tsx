import React, { useContext, useEffect, useState } from 'react';
import {
  Alert,
  Button,
  GradientText,
  Input,
  Menu,
  MenuItem,
  Switch,
  Tab,
  Tabs,
  ThemeContext,
  Tooltip,
  useAlert,
  useMenu,
  useSwitch,
  useTabs,
} from 'cutie-ui';

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
  }, [checkedSwitch, document.documentElement.dataset.theme]);
  const { menuAnchorEl, menuOpen, handleClickMenu, handleCloseMenu } =
    useMenu();
  const [tooltipAnchorEl, setTooltipAnchorEl] = useState(null);
  const { tabsValue, handleChangeTabs } = useTabs(2);
  const { alertOpen, handleClickAlert, handleCloseAlert } = useAlert();

  return (
    <div className="App df aic jcc fdc">
      <Button>Hello</Button>
      <Switch
        size="medium"
        checked={checkedSwitch}
        onChange={(e: any) => {
          handleSwitch(e);
          changeTheme(theme == 'dark' ? 'light' : 'dark');
        }}
      />
      <Button
        onClick={handleClickMenu}
        variant="contained"
        color="sky"
        className="mt-100px mb-50px"
      >
        Hello
      </Button>
      <Menu anchorEl={menuAnchorEl} onClose={handleCloseMenu} open={menuOpen}>
        <MenuItem onClose={handleCloseMenu}>Hello world!</MenuItem>
        <MenuItem onClose={handleCloseMenu}>Hello world!</MenuItem>
        <MenuItem onClose={handleCloseMenu}>Hello world!</MenuItem>
      </Menu>
      <Input
        placeholder="hello"
        className="w-200px"
        classNameForWrapper="mb-40px"
        variant="underlined"
        button={<Button onClick={handleClickAlert}>Search</Button>}
      />
      <Alert open={alertOpen} onClose={handleCloseAlert} duration={60000}>
        Warning!
      </Alert>
      <Button
        other={{
          onMouseEnter: (e: any) => setTooltipAnchorEl(e.currentTarget),
          onMouseLeave: (e: any) => setTooltipAnchorEl(null),
        }}
        variant="outlined"
        color="#0795FE"
      >
        Bebro
      </Button>
      <Tooltip position="top" anchorEl={tooltipAnchorEl}>
        Tooltipchik!!!
      </Tooltip>
      <Tabs
        className="w-400px"
        fullWidth
        color="orange"
        value={tabsValue}
        onChange={handleChangeTabs}
        labels={['One', 'Two', 'Three']}
      >
        <Tab>Hello</Tab>
        <Tab>World</Tab>
        <Tab>###3333</Tab>
      </Tabs>
      <GradientText
        fontSize={'4rem'}
        fontWeight="600"
        rotate={30}
        firstColor="purple"
        secondColor="turquoise"
        className=""
      >
        Hello world
      </GradientText>
      <div className="df">
        <Button
          variant="contained"
          color="white"
          onClick={() => changeTheme('light')}
        >
          light
        </Button>
        <Button
          color="black"
          variant="contained"
          onClick={() => changeTheme('dark')}
        >
          dark
        </Button>
        <Button
          color="sky"
          variant="contained"
          onClick={() => changeTheme('system')}
        >
          system
        </Button>
      </div>
    </div>
  );
}

export default App;
