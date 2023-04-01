import { Button, Icon, LinearProgress } from 'cutie-ui';
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Section } from '../../../components/Section';

export const LinearProgressPage = () => {
  SyntaxHighlighter.supportedLanguages = ['jsx', 'javascript', 'react', 'node'];
  const [isCopied, setIsCopied] = useState(false);
  const timeout = useRef<any>(null);

  return (
    <div>
      <h1 className="m-0px mb-35px" style={{ fontSize: '50px' }}>
        Linear progress
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
            {"import { LinearProgress } from 'cutie-ui'"}
          </SyntaxHighlighter>
          <Button
            onClick={() => {
              navigator.clipboard.writeText(
                "import { LinearProgress } from 'cutie-ui'"
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
        title="Value"
        area={
          <div className="df aic fdc">
            <LinearProgress value={30} className="mb-50px" />
            <LinearProgress value={80} className="mb-50px" />
            <LinearProgress value={100} className="mb-50px" />
          </div>
        }
        code={`<LinearProgress value={30} className="mb-20px" />
<LinearProgress value={80} className="mb-20px" />
<LinearProgress value={100} className="mb-20px" />`}
      />
      <Section
        title="Color"
        area={
          <div className="df aic fdc">
            <LinearProgress color="purple" value={30} className="mb-50px" />
            <LinearProgress color="orange" value={80} className="mb-50px" />
            <LinearProgress color="success" value={100} className="mb-50px" />
          </div>
        }
        code={`<LinearProgress color="purple" value={30} className="mb-50px" />
<LinearProgress color="orange" value={80} className="mb-50px" />
<LinearProgress color="success" value={100} className="mb-50px" />`}
      />
      <Section
        title="Loader"
        area={
          <div className="df aic fdc">
            <LinearProgress loader variant={1} className="mb-50px" />
            <LinearProgress
              loader
              variant={2}
              className="mb-50px"
              duration={1.4}
            />
            <LinearProgress
              loader
              variant={3}
              className="mb-50px"
              duration={2}
            />
          </div>
        }
        code={`<LinearProgress loader variant={1} className="mb-50px" />
<LinearProgress
  loader
  variant={2}
  className="mb-50px"
  duration={1.4}
/>
<LinearProgress
  loader
  variant={3}
  className="mb-50px"
  duration={2}
/>`}
      />
      <Section
        title="Duration"
        area={
          <div className="df aic fdc">
            <LinearProgress
              duration={3}
              loader
              variant={1}
              className="mb-50px"
            />
            <LinearProgress
              duration={0.7}
              loader
              variant={2}
              className="mb-50px"
            />
            <LinearProgress
              duration={3}
              loader
              variant={3}
              className="mb-50px"
            />
          </div>
        }
        code={`<LinearProgress
  duration={3}
  loader
  variant={1}
  className="mb-50px"
/>
<LinearProgress
  duration={0.7}
  loader
  variant={2}
  className="mb-50px"
/>
<LinearProgress
  duration={3}
  loader
  variant={3}
  className="mb-50px"
/>`}
      />

      <div className="df jcfe">
        <Link to={'/components/skeleton'}>
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
            Skeleton
          </Button>
        </Link>
      </div>
    </div>
  );
};
