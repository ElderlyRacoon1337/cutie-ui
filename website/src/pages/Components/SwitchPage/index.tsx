import { Button, Icon, Switch } from 'cutie-ui';
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Section } from '../../../components/Section';

export const SwitchPage = () => {
  SyntaxHighlighter.supportedLanguages = ['jsx', 'javascript', 'react', 'node'];
  const [isCopied, setIsCopied] = useState(false);
  const timeout = useRef<any>(null);

  const [checked, setChecked] = useState(false);

  return (
    <div>
      <h1 className="m-0px mb-35px" style={{ fontSize: '50px' }}>
        Switch
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
            {`import { Switch } from 'cutie-ui'
            
const [checked, setChecked] = useState(false);

<Switch
  checked={checked}
  onChange={(e) => setChecked(e.target.checked)}
/>
            `}
          </SyntaxHighlighter>
          <Button
            onClick={() => {
              navigator.clipboard.writeText(
                `import { Switch } from 'cutie-ui'
            
const [checked, setChecked] = useState(false);

<Switch
  checked={checked}
  onChange={(e) => setChecked(e.target.checked)}
/>
            `
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
        title="Size"
        area={
          <div className="df aic">
            <Switch
              size="small"
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
              className="mr-20px"
            />
            <Switch
              size="medium"
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
              className="mr-20px"
            />
            <Switch
              size="large"
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
              className="mr-20px"
            />
          </div>
        }
        code={`<Switch
  size="small"
  checked={checked}
  onChange={(e) => setChecked(e.target.checked)}
  className="mr-20px"
/>
<Switch
  size="medium"
  checked={checked}
  onChange={(e) => setChecked(e.target.checked)}
  className="mr-20px"
/>
<Switch
  size="large"
  checked={checked}
  onChange={(e) => setChecked(e.target.checked)}
  className="mr-20px"
/>`}
      />

      <Section
        title="Color"
        area={
          <div className="df aic">
            <Switch
              color="primary"
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
              className="mr-20px"
            />
            <Switch
              color="secondary"
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
              className="mr-20px"
            />
            <Switch
              color="orange"
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
              className="mr-20px"
            />
            <Switch
              color="#05fa2e"
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
              className="mr-20px"
            />
          </div>
        }
        code={`<Switch
  color="primary"
  checked={checked}
  onChange={(e) => setChecked(e.target.checked)}
  className="mr-20px"
/>
<Switch
  color="secondary"
  checked={checked}
  onChange={(e) => setChecked(e.target.checked)}
  className="mr-20px"
/>
<Switch
  color="orange"
  checked={checked}
  onChange={(e) => setChecked(e.target.checked)}
  className="mr-20px"
/>
<Switch
  color="#05fa2e"
  checked={checked}
  onChange={(e) => setChecked(e.target.checked)}
  className="mr-20px"
/>`}
      />

      <Section
        title="Disabled"
        area={
          <div className="df aic">
            <Switch disabled />
          </div>
        }
        code={`<Switch checked={checked}
onChange={(e) => setChecked(e.target.checked)} disabled />
      `}
      />
      <div className="df jcfe">
        <Link to={'/components/checkbox'}>
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
            Checkbox
          </Button>
        </Link>
      </div>
    </div>
  );
};
