import { Button, Icon, Radio, ThemeContext } from 'cutie-ui';
import React, { useContext, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Section } from '../../../components/Section';

export const RadioPage = () => {
  SyntaxHighlighter.supportedLanguages = ['jsx', 'javascript', 'react', 'node'];
  const [isCopied, setIsCopied] = useState(false);
  const timeout = useRef<any>(null);

  const { changeTheme } = useContext(ThemeContext);
  const [currentValue, setCurrentValue] = useState(
    window.localStorage.getItem('theme') || 'system'
  );

  return (
    <div>
      <h1 className="m-0px mb-35px" style={{ fontSize: '50px' }}>
        Radio
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
            {`import { Radio } from 'cutie-ui'
            
const [currentValue, setCurrentValue] = useState();

<Radio
  currentValue={currentValue}
  value="someValue"
  onChange={(e) => {
    setCurrentValue(e.target.value);
  }}
/>`}
          </SyntaxHighlighter>
          <Button
            onClick={() => {
              navigator.clipboard.writeText(`import { Radio } from 'cutie-ui'
            
const [currentValue, setCurrentValue] = useState();

<Radio
  currentValue={currentValue}
  value="someValue"
  onChange={(e) => {
    setCurrentValue(e.target.value);
  }}
/>`);
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
          <div className="df fdc">
            <Radio
              currentValue={currentValue}
              value="light"
              onChange={(e) => {
                setCurrentValue(e.target.value);
                changeTheme(e.target.value);
              }}
              label="light"
              className="mb-20px"
            />
            <Radio
              currentValue={currentValue}
              value="dark"
              onChange={(e: any) => {
                setCurrentValue(e.target.value);
                changeTheme(e.target.value);
              }}
              label="dark"
              className="mb-20px"
            />
            <Radio
              currentValue={currentValue}
              value="system"
              label="system"
              onChange={(e: any) => {
                setCurrentValue(e.target.value);
                changeTheme(e.target.value);
              }}
            />
          </div>
        }
        code={`const { changeTheme } = useContext(ThemeContext);
const [currentValue, setCurrentValue] = useState(
  window.localStorage.getItem('theme') || 'system'
);

<Radio
  currentValue={currentValue}
  value="light"
  onChange={(e: any) => {
    setCurrentValue(e.target.value);
    changeTheme(e.target.value);
  }}
  label="light"
  className="mb-20px"
/>
<Radio
  currentValue={currentValue}
  value="dark"
  onChange={(e: any) => {
    setCurrentValue(e.target.value);
    changeTheme(e.target.value);
  }}
  label="dark"
  className="mb-20px"
/>
<Radio
  currentValue={currentValue}
  value="system"
  label="system"
  onChange={(e: any) => {
    setCurrentValue(e.target.value);
    changeTheme(e.target.value);
  }}
/>`}
      />

      <Section
        title="Color"
        area={
          <div className="df aic">
            <Radio color="primary" />
            <Radio color="secondary" />
            <Radio color="neutral" />
            <Radio color="skyblue" />
            <Radio color="hotpink" />
            <Radio color="#32a8a2" />
          </div>
        }
        code={`<Radio color="primary" />
<Radio color="secondary" />
<Radio color="neutral" />
<Radio color="skyblue" />
<Radio color="hotpink" />
<Radio color="#32a8a2" />`}
      />

      <Section
        title="Disabled"
        area={
          <div className="df aic">
            <Radio disabled currentValue="1" />
            <Radio disabled />
          </div>
        }
        code={`<Radio disabled currentValue="1" />
<Radio disabled />`}
      />
      <Section
        title="Label"
        area={
          <div className="df aic">
            <Radio label="Label" />
          </div>
        }
        code={`<Radio label="Label" />`}
      />
      <div className="df jcfe">
        <Link to={'/components/select'}>
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
            Select
          </Button>
        </Link>
      </div>
    </div>
  );
};
