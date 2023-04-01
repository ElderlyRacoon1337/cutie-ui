import { Button, Icon, Tooltip } from 'cutie-ui';
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Section } from '../../../components/Section';

export const TooltipPage = () => {
  SyntaxHighlighter.supportedLanguages = ['jsx', 'javascript', 'react', 'node'];
  const [isCopied, setIsCopied] = useState(false);
  const timeout = useRef<any>(null);

  const [anchorEl, setAnchorEl] = useState<React.ReactNode | null>(null);

  const [anchorElTop, setAnchorElTop] = useState(null);
  const [anchorElRight, setAnchorElRight] = useState(null);
  const [anchorElBottom, setAnchorElBottom] = useState(null);
  const [anchorElLeft, setAnchorElLeft] = useState(null);
  return (
    <div>
      <h1 className="m-0px mb-35px" style={{ fontSize: '50px' }}>
        Tooltip
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
            {"import { Tooltip } from 'cutie-ui'"}
          </SyntaxHighlighter>
          <Button
            onClick={() => {
              navigator.clipboard.writeText(
                "import { Tooltip } from 'cutie-ui'"
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
          <div className="df aic pt-10px">
            <Button
              variant="contained"
              other={{
                onMouseEnter: (e) => setAnchorEl(e.currentTarget),
                onMouseLeave: () => setAnchorEl(null),
              }}
            >
              Hover me
            </Button>
            <Tooltip anchorEl={anchorEl}>Tooltip</Tooltip>
          </div>
        }
        code={`const [anchorEl, setAnchorEl] = useState<React.ReactNode | null>(null);

<Button
  variant="contained"
  other={{
    onMouseEnter: (e) => setAnchorEl(e.currentTarget),
    onMouseLeave: () => setAnchorEl(null),
  }}
>
  Hover me
</Button>
<Tooltip anchorEl={anchorEl}>Tooltip</Tooltip>`}
      />

      <Section
        title="Position"
        area={
          <div className="df aic">
            <Button
              other={{
                onMouseEnter: (e) => setAnchorElTop(e.currentTarget),
                onMouseLeave: () => setAnchorElTop(null),
              }}
              variant="outlined"
              className="mr-20px"
            >
              top
            </Button>
            <Button
              other={{
                onMouseEnter: (e) => setAnchorElRight(e.currentTarget),
                onMouseLeave: () => setAnchorElRight(null),
              }}
              variant="outlined"
              className="mr-20px"
            >
              right
            </Button>
            <Button
              other={{
                onMouseEnter: (e) => setAnchorElBottom(e.currentTarget),
                onMouseLeave: () => setAnchorElBottom(null),
              }}
              variant="outlined"
              className="mr-20px"
            >
              bottom
            </Button>
            <Button
              other={{
                onMouseEnter: (e) => setAnchorElLeft(e.currentTarget),
                onMouseLeave: () => setAnchorElLeft(null),
              }}
              variant="outlined"
              className="mr-20px"
            >
              left
            </Button>
            <Tooltip position="top" anchorEl={anchorElTop}>
              top
            </Tooltip>
            <Tooltip position="right" anchorEl={anchorElRight}>
              right
            </Tooltip>
            <Tooltip position="bottom" anchorEl={anchorElBottom}>
              bottom
            </Tooltip>
            <Tooltip position="left" anchorEl={anchorElLeft}>
              left
            </Tooltip>
          </div>
        }
        code={`<Button
  other={{
    onMouseEnter: (e) => setAnchorElTop(e.currentTarget),
    onMouseLeave: () => setAnchorElTop(null),
  }}
  variant="outlined"
  className="mr-20px"
>
  top
</Button>
<Button
  other={{
    onMouseEnter: (e) => setAnchorElRight(e.currentTarget),
    onMouseLeave: () => setAnchorElRight(null),
  }}
  variant="outlined"
  className="mr-20px"
>
  right
</Button>
<Button
  other={{
    onMouseEnter: (e) => setAnchorElBottom(e.currentTarget),
    onMouseLeave: () => setAnchorElBottom(null),
  }}
  variant="outlined"
  className="mr-20px"
>
  bottom
</Button>
<Button
  other={{
    onMouseEnter: (e) => setAnchorElLeft(e.currentTarget),
    onMouseLeave: () => setAnchorElLeft(null),
  }}
  variant="outlined"
  className="mr-20px"
>
  left
</Button>
<Tooltip position="top" anchorEl={anchorElTop}>
  top
</Tooltip>
<Tooltip position="right" anchorEl={anchorElRight}>
  right
</Tooltip>
<Tooltip position="bottom" anchorEl={anchorElBottom}>
  bottom
</Tooltip>
<Tooltip position="left" anchorEl={anchorElLeft}>
  left
</Tooltip>`}
      />

      <div className="df jcfe">
        <Link to={'/components/link'}>
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
            Link
          </Button>
        </Link>
      </div>
    </div>
  );
};
