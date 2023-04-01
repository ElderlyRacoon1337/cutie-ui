import { Button, Icon, Popup } from 'cutie-ui';
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Section } from '../../../components/Section';

export const PopupPage = () => {
  SyntaxHighlighter.supportedLanguages = ['jsx', 'javascript', 'react', 'node'];
  const [isCopied, setIsCopied] = useState(false);
  const timeout = useRef<any>(null);

  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <h1 className="m-0px mb-35px" style={{ fontSize: '50px' }}>
        Popup
      </h1>
      <div className="import">
        <div className="relative">
          <SyntaxHighlighter
            language="jsx"
            style={tomorrow}
            customStyle={{
              backgroundColor: 'var(--codeBg)',
              padding: '20px',
              borderRadius: '10px',
              marginBottom: '20px',
            }}
          >
            {`import { Popup } from 'cutie-ui'
            
const [open, setOpen] = useState(false);
const handleClick = () => {
  setOpen(true);
};
const handleClose = () => {
  setOpen(false);
};`}
          </SyntaxHighlighter>
          <Button
            onClick={() => {
              navigator.clipboard.writeText(`import { Popup } from 'cutie-ui'`);
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
            <Button onClick={handleClick} variant="contained" size="large">
              Click me
            </Button>
            <Popup open={open} onClose={handleClose} className={'df aic jcc'}>
              <h2>Hello! im popup!</h2>
            </Popup>
          </div>
        }
        code={`const [open, setOpen] = useState(false);
const handleClick = () => {
  setOpen(true);
};
const handleClose = () => {
  setOpen(false);
};

<Button onClick={handleClick} variant="contained" size="large">
  Click me
</Button>
<Popup open={open} onClose={handleClose} className={'df aic jcc'}>
  <h2>Hello! im popup!</h2>
</Popup>`}
      />

      <div className="df jcfe">
        <Link to={'/components/gradient-text'}>
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
            Gradient text
          </Button>
        </Link>
      </div>
    </div>
  );
};
