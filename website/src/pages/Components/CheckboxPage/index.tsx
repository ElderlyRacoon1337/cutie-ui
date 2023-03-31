import { Button, Checkbox, Icon, Switch } from 'cutie-ui';
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Section } from '../../../components/Section';

export const CheckboxPage = () => {
  SyntaxHighlighter.supportedLanguages = ['jsx', 'javascript', 'react', 'node'];
  const [isCopied, setIsCopied] = useState(false);
  const timeout = useRef<any>(null);

  const [checked, setChecked] = useState(false);

  return (
    <div>
      <h1 className="m-0px mb-35px" style={{ fontSize: '50px' }}>
        Checkbox
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
            {`import { Checkbox } from 'cutie-ui'

const [checked, setChecked] = useState(false);

<Checkbox
  checked={checked}
  onChange={(e) => setChecked(e.target.checked)}
/>`}
          </SyntaxHighlighter>
          <Button
            onClick={() => {
              navigator.clipboard.writeText(
                `import { Checkbox } from 'cutie-ui'

const [checked, setChecked] = useState(false);

<Checkbox
  checked={checked}
  onChange={(e) => setChecked(e.target.checked)}
/>`
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
        title="Color"
        area={
          <div className="df aic">
            <Checkbox
              color="primary"
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
              className={'mr-20px'}
            />
            <Checkbox
              color="secondary"
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
              className={'mr-20px'}
            />
            <Checkbox
              color="purple"
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
              className={'mr-20px'}
            />
          </div>
        }
        code={`<Checkbox
  color="primary"
  checked={checked}
  onChange={(e) => setChecked(e.target.checked)}
  className={'mr-20px'}
/>
<Checkbox
  color="secondary"
  checked={checked}
  onChange={(e) => setChecked(e.target.checked)}
  className={'mr-20px'}
/>
<Checkbox
  color="purple"
  checked={checked}
  onChange={(e) => setChecked(e.target.checked)}
  className={'mr-20px'}
/>`}
      />

      <Section
        title="Size"
        area={
          <div className="df aic">
            <Checkbox
              size="small"
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
              className={'mr-20px'}
            />
            <Checkbox
              size="medium"
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
              className={'mr-20px'}
            />
            <Checkbox
              size="large"
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
              className={'mr-20px'}
            />
          </div>
        }
        code={`<Checkbox
  size="small"
  checked={checked}
  onChange={(e) => setChecked(e.target.checked)}
  className={'mr-20px'}
/>
<Checkbox
  size="medium"
  checked={checked}
  onChange={(e) => setChecked(e.target.checked)}
  className={'mr-20px'}
/>
<Checkbox
  size="large"
  checked={checked}
  onChange={(e) => setChecked(e.target.checked)}
  className={'mr-20px'}
/>`}
      />

      <Section
        title="Custom size"
        text='The custom size is set via the "width" property"'
        area={
          <div className="df aic">
            <Checkbox
              width="2rem"
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
              className={'mr-20px'}
            />
          </div>
        }
        code={`<Checkbox
  width="2rem"
  checked={checked}
  onChange={(e) => setChecked(e.target.checked)}
/>`}
      />
      <Section
        title="Disabled"
        area={
          <div className="df aic">
            <Checkbox disabled className="mr-20px" />
            <Checkbox checked={true} disabled />
          </div>
        }
        code={`<Checkbox disabled className="mr-20px" />
<Checkbox checked={true} disabled />`}
      />
      <Section
        title="Label"
        area={
          <div className="df aic">
            <Checkbox
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
              label="Agree with terms"
            />
          </div>
        }
        code={`<Checkbox
  checked={checked}
  onChange={(e) => setChecked(e.target.checked)}
  label="Agree with terms"
/>`}
      />
      <div className="df jcfe">
        <Link to={'/components/radio'}>
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
            Radio
          </Button>
        </Link>
      </div>
    </div>
  );
};
