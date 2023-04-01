import { Alert, Button, Icon } from 'cutie-ui';
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Section } from '../../../components/Section';

export const AlertPage = () => {
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

  const [open2, setOpen2] = useState(false);
  const handleClick2 = () => {
    setOpen2(true);
  };
  const handleClose2 = () => {
    setOpen2(false);
  };

  const [open3, setOpen3] = useState(false);
  const handleClick3 = () => {
    setOpen3(true);
  };
  const handleClose3 = () => {
    setOpen3(false);
  };

  const [open4, setOpen4] = useState(false);
  const handleClick4 = () => {
    setOpen4(true);
  };
  const handleClose4 = () => {
    setOpen4(false);
  };

  const [open5, setOpen5] = useState(false);
  const handleClick5 = () => {
    setOpen5(true);
  };
  const handleClose5 = () => {
    setOpen5(false);
  };

  const [open6, setOpen6] = useState(false);
  const handleClick6 = () => {
    setOpen6(true);
  };
  const handleClose6 = () => {
    setOpen6(false);
  };

  const [open7, setOpen7] = useState(false);
  const handleClick7 = () => {
    setOpen7(true);
  };
  const handleClose7 = () => {
    setOpen7(false);
  };

  const [open8, setOpen8] = useState(false);
  const handleClick8 = () => {
    setOpen8(true);
  };
  const handleClose8 = () => {
    setOpen8(false);
  };

  const [open9, setOpen9] = useState(false);
  const handleClick9 = () => {
    setOpen9(true);
  };
  const handleClose9 = () => {
    setOpen9(false);
  };

  const [open10, setOpen10] = useState(false);
  const handleClick10 = () => {
    setOpen10(true);
  };
  const handleClose10 = () => {
    setOpen10(false);
  };

  const [open11, setOpen11] = useState(false);
  const handleClick11 = () => {
    setOpen11(true);
  };
  const handleClose11 = () => {
    setOpen11(false);
  };

  const [open12, setOpen12] = useState(false);
  const handleClick12 = () => {
    setOpen12(true);
  };
  const handleClose12 = () => {
    setOpen12(false);
  };

  const [open13, setOpen13] = useState(false);
  const handleClick13 = () => {
    setOpen13(true);
  };
  const handleClose13 = () => {
    setOpen13(false);
  };

  const [open14, setOpen14] = useState(false);
  const handleClick14 = () => {
    setOpen14(true);
  };
  const handleClose14 = () => {
    setOpen14(false);
  };

  return (
    <div>
      <h1 className="m-0px mb-35px" style={{ fontSize: '50px' }}>
        Alert
      </h1>
      <div className="import">
        <div className="relative">
          <SyntaxHighlighter
            language="javascript"
            style={tomorrow}
            customStyle={{
              backgroundColor: 'var(--codeBg)',
              padding: '20px',
              borderRadius: '10px',
              marginBottom: '20px',
            }}
          >
            {`import { Alert } from 'cutie-ui'
            
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
              navigator.clipboard.writeText(`import { Alert } from 'cutie-ui'
            
const [open, setOpen] = useState(false);
const handleClick = () => {
  setOpen(true);
};
const handleClose = () => {
  setOpen(false);
};`);
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
            <Alert onClose={handleClose} open={open}>
              Hello i am alert
            </Alert>
          </div>
        }
        code={`<Button onClick={handleClick} variant="contained" size="large">
  Click me
</Button>
<Alert onClose={handleClose} open={open}>
  Hello i am alert
</Alert>`}
      />

      <Section
        title="Color"
        area={
          <div className="df aic">
            <Button
              color="primary"
              onClick={handleClick2}
              variant="contained"
              size="large"
              className="mr-20px"
            >
              primary
            </Button>
            <Alert color="primary" onClose={handleClose2} open={open2}>
              Primary color
            </Alert>
            <Button
              color="secondary"
              onClick={handleClick3}
              variant="contained"
              size="large"
              className="mr-20px"
            >
              secondary
            </Button>
            <Alert color="secondary" onClose={handleClose3} open={open3}>
              secondary color
            </Alert>
            <Button
              color="success"
              onClick={handleClick4}
              variant="contained"
              size="large"
              className="mr-20px"
            >
              success
            </Button>
            <Alert color="success" onClose={handleClose4} open={open4}>
              success color
            </Alert>
            <Button
              color="error"
              onClick={handleClick5}
              variant="contained"
              size="large"
              className="mr-20px"
            >
              error
            </Button>
            <Alert color="error" onClose={handleClose5} open={open5}>
              error color
            </Alert>
          </div>
        }
        code={`<Button
  color="primary"
  onClick={handleClick}
  variant="contained"
  size="large"
  className="mr-20px"
>
  primary
</Button>
<Alert color="primary" onClose={handleClose} open={open}>
  Primary color
</Alert>
<Button
  color="secondary"
  onClick={handleClick}
  variant="contained"
  size="large"
  className="mr-20px"
>
  secondary
</Button>
<Alert color="secondary" onClose={handleClose} open={open}>
  secondary color
</Alert>
<Button
  color="success"
  onClick={handleClick}
  variant="contained"
  size="large"
  className="mr-20px"
>
  success
</Button>
<Alert color="success" onClose={handleClose} open={open}>
  success color
</Alert>
<Button
  color="error"
  onClick={handleClick}
  variant="contained"
  size="large"
  className="mr-20px"
>
  error
</Button>
<Alert color="error" onClose={handleClose} open={open}>
  error color
</Alert>`}
      />
      <Section
        title="Start icon"
        area={
          <div className="df aic">
            <Button onClick={handleClick6} variant="contained" size="large">
              Click me
            </Button>
            <Alert
              startIcon={
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
                      d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                    />
                  </svg>
                </Icon>
              }
              onClose={handleClose6}
              open={open6}
            >
              Hello i am alert with start icon
            </Alert>
          </div>
        }
        code={`<Button onClick={handleClick} variant="contained" size="large">
  Click me
</Button>
<Alert
  startIcon={
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
          d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
        />
      </svg>
    </Icon>
  }
  onClose={handleClose}
  open={open}
>
  Hello i am alert
</Alert>`}
      />
      <Section
        title="Position"
        area={
          <>
            <div className="df aic mb-20px">
              <Button
                onClick={handleClick7}
                variant="contained"
                size="large"
                className="mr-20px"
              >
                topLeft
              </Button>
              <Alert position="topLeft" onClose={handleClose7} open={open7}>
                topLeft alert
              </Alert>
              <Button
                onClick={handleClick8}
                variant="contained"
                size="large"
                className="mr-20px"
              >
                topCenter
              </Button>
              <Alert position="topCenter" onClose={handleClose8} open={open8}>
                topCenter alert
              </Alert>
              <Button
                onClick={handleClick9}
                variant="contained"
                size="large"
                className="mr-20px"
              >
                topRight
              </Button>
              <Alert position="topRight" onClose={handleClose9} open={open9}>
                topRight alert
              </Alert>
            </div>
            <div className="df aic">
              <Button
                onClick={handleClick10}
                variant="contained"
                size="large"
                className="mr-20px"
              >
                bottomLeft
              </Button>
              <Alert
                position="bottomLeft"
                onClose={handleClose10}
                open={open10}
              >
                bottomLeft alert
              </Alert>
              <Button
                onClick={handleClick11}
                variant="contained"
                size="large"
                className="mr-20px"
              >
                bottomCenter
              </Button>
              <Alert
                position="bottomCenter"
                onClose={handleClose11}
                open={open11}
              >
                bottomCenter alert
              </Alert>
              <Button
                onClick={handleClick12}
                variant="contained"
                size="large"
                className="mr-20px"
              >
                bottomRight
              </Button>
              <Alert
                position="bottomRight"
                onClose={handleClose12}
                open={open12}
              >
                bottomRight alert
              </Alert>
            </div>
          </>
        }
        code={`<Button
  onClick={handleClick}
  variant="contained"
  size="large"
  className="mr-20px"
>
  topLeft
</Button>
<Alert position="topLeft" onClose={handleClose} open={open}>
  topLeft alert
</Alert>
<Button
  onClick={handleClick}
  variant="contained"
  size="large"
  className="mr-20px"
>
  topCenter
</Button>
<Alert position="topCenter" onClose={handleClose} open={open}>
  topCenter alert
</Alert>
<Button
  onClick={handleClick}
  variant="contained"
  size="large"
  className="mr-20px"
>
  topRight
</Button>
<Alert position="topRight" onClose={handleClose} open={open}>
  topRight alert
</Alert>
<Button
  onClick={handleClick}
  variant="contained"
  size="large"
  className="mr-20px"
>
  bottomLeft
</Button>
<Alert
  position="bottomLeft"
  onClose={handleClose}
  open={open}
>
  bottomLeft alert
</Alert>
<Button
  onClick={handleClick}
  variant="contained"
  size="large"
  className="mr-20px"
>
  bottomCenter
</Button>
<Alert
  position="bottomCenter"
  onClose={handleClose}
  open={open}
>
  bottomCenter alert
</Alert>
<Button
  onClick={handleClick}
  variant="contained"
  size="large"
  className="mr-20px"
>
  bottomRight
</Button>
<Alert
  position="bottomRight"
  onClose={handleClose}
  open={open}
>
  bottomRight alert
</Alert>`}
      />
      <Section
        title="Without button"
        area={
          <div className="df aic">
            <Button onClick={handleClick13} variant="contained" size="large">
              withioutButton
            </Button>
            <Alert withioutButton onClose={handleClose13} open={open13}>
              Hello i am alert withiout button
            </Alert>
          </div>
        }
        code={`<Button onClick={handleClick} variant="contained" size="large">
  withioutButton
</Button>
<Alert withioutButton onClose={handleClose} open={open}>
  Hello i am alert withiout button
</Alert>`}
      />
      <Section
        title="Duration"
        area={
          <div className="df aic">
            <Button onClick={handleClick14} variant="contained" size="large">
              Duration
            </Button>
            <Alert duration={5000} onClose={handleClose14} open={open14}>
              Hello i am alert with duration 5000 = 5 sec
            </Alert>
          </div>
        }
        code={`<Button onClick={handleClick} variant="contained" size="large">
  Duration
</Button>
<Alert duration={5000} onClose={handleClose} open={open}>
  Hello i am alert with duration 5000 = 5 sec
</Alert>`}
      />
    </div>
  );
};
