import { Button, Icon, Menu, MenuItem } from 'cutie-ui';
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Section } from '../../../components/Section';

export const MenuPage = () => {
  SyntaxHighlighter.supportedLanguages = ['jsx', 'javascript', 'react', 'node'];
  const [isCopied, setIsCopied] = useState(false);
  const timeout = useRef<any>(null);

  const [ancorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(ancorEl);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    setAnchorEl(e.currentTarget);
  };

  const [ancorEl2, setAnchorEl2] = useState<HTMLElement | null>(null);
  const open2 = Boolean(ancorEl2);
  const handleClose2 = () => {
    setAnchorEl2(null);
  };
  const handleClick2 = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    setAnchorEl2(e.currentTarget);
  };

  const [ancorEl3, setAnchorEl3] = useState<HTMLElement | null>(null);
  const open3 = Boolean(ancorEl3);
  const handleClose3 = () => {
    setAnchorEl3(null);
  };
  const handleClick3 = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    setAnchorEl3(e.currentTarget);
  };
  // (event: MouseEvent<any, MouseEvent>)
  return (
    <div>
      <h1 className="m-0px mb-35px" style={{ fontSize: '50px' }}>
        Menu
      </h1>
      <div className="import">
        <div className="relative">
          <SyntaxHighlighter
            language="tsx"
            style={tomorrow}
            customStyle={{
              backgroundColor: 'var(--codeBg)',
              padding: '20px',
              borderRadius: '10px',
              marginBottom: '20px',
            }}
          >
            {`import { Menu, MenuItem } from 'cutie-ui'
            
const [ancorEl, setAnchorEl] = useState<HTMLElement | null>(null);
const open = Boolean(ancorEl);
const handleClose = () => {
  setAnchorEl(null);
};
const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
  setAnchorEl(e.currentTarget);
};`}
          </SyntaxHighlighter>
          <Button
            onClick={() => {
              navigator.clipboard.writeText(
                `import { Menu, MenuItem } from 'cutie-ui'`
              );
              setIsCopied(true);
              clearTimeout(timeout.current);
              timeout.current = setTimeout(() => {
                setIsCopied(false);
              }, 2000);
            }}
            size="small"
            variant="contained"
            color={!isCopied ? 'primary' : 'success'}
            className="absolute top-10px right-10px"
          >
            {!isCopied ? 'Copy' : 'Copied'}
          </Button>
        </div>
      </div>

      <Section
        title="Usage"
        area={
          <div className="df aic">
            <Button
              onClick={handleClick}
              variant="contained"
              size="large"
              endIcon={
                <Icon fontSize={'1.2rem'}>
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
                      d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>
                </Icon>
              }
            >
              Menu
            </Button>
            <Menu anchorEl={ancorEl} onClose={handleClose} open={open}>
              <MenuItem onClose={handleClose}>MenuItem</MenuItem>
              <MenuItem onClose={handleClose}>MenuItem</MenuItem>
              <MenuItem onClose={handleClose}>MenuItem</MenuItem>
            </Menu>
          </div>
        }
        code={`<Button
  onClick={handleClick}
  variant="contained"
  endIcon={
    <Icon fontSize={'1.2rem'}>
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
          d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
        />
      </svg>
    </Icon>
  }
>
  Menu
</Button>
<Menu anchorEl={ancorEl} onClose={handleClose} open={open}>
  <MenuItem onClose={handleClose}>MenuItem</MenuItem>
  <MenuItem onClose={handleClose}>MenuItem</MenuItem>
  <MenuItem onClose={handleClose}>MenuItem</MenuItem>
</Menu>`}
      />

      <Section
        title="Full width"
        area={
          <div className="df aic">
            <Button
              onClick={handleClick2}
              variant="outlined"
              sx={{ padding: '20px 100px' }}
            >
              fullWidth
            </Button>
            <Menu
              fullWidth
              anchorEl={ancorEl2}
              onClose={handleClose2}
              open={open2}
            >
              <MenuItem onClose={handleClose2}>MenuItem</MenuItem>
              <MenuItem onClose={handleClose2}>MenuItem</MenuItem>
              <MenuItem onClose={handleClose2}>MenuItem</MenuItem>
            </Menu>
          </div>
        }
        code={`<Button
  onClick={handleClick}
  variant="outlined"
  sx={{ padding: '20px 100px' }}
>
  fullWidth
</Button>
<Menu
  fullWidth
  anchorEl={ancorEl}
  onClose={handleClose}
  open={open}
>
  <MenuItem onClose={handleClose}>MenuItem</MenuItem>
  <MenuItem onClose={handleClose}>MenuItem</MenuItem>
  <MenuItem onClose={handleClose}>MenuItem</MenuItem>
</Menu>`}
      />

      <Section
        title="Icons"
        area={
          <div className="df aic">
            <Button onClick={handleClick3} size="large" variant="outlined">
              Icons
            </Button>
            <Menu anchorEl={ancorEl3} onClose={handleClose3} open={open3}>
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
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                      />
                    </svg>
                  </Icon>
                }
                onClose={handleClose3}
              >
                Start Icon
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
                        d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                      />
                    </svg>
                  </Icon>
                }
                onClose={handleClose3}
              >
                End Icon
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
                        d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
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
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </Icon>
                }
                onClose={handleClose3}
              >
                Start and end icons
              </MenuItem>
            </Menu>
          </div>
        }
        code={`<Button onClick={handleClick} size="large" variant="outlined">
  Icons
</Button>
<Menu anchorEl={ancorEl} onClose={handleClose} open={open}>
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
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
          />
        </svg>
      </Icon>
    }
    onClose={handleClose}
  >
    Start Icon
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
            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
          />
        </svg>
      </Icon>
    }
    onClose={handleClose}
  >
    End Icon
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
            d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
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
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          />
        </svg>
      </Icon>
    }
    onClose={handleClose}
  >
    Start and end icons
  </MenuItem>
</Menu>`}
      />

      <div className="df jcfe">
        <Link to={'/components/tabs'}>
          <Button
            size="large"
            color="secondary"
            variant="contained"
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
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </Icon>
            }
          >
            Tabs
          </Button>
        </Link>
      </div>
    </div>
  );
};
