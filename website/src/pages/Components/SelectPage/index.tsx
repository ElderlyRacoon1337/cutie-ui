import { Button, Icon, Select } from 'cutie-ui';
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Section } from '../../../components/Section';

export const SelectPage = () => {
  SyntaxHighlighter.supportedLanguages = ['jsx', 'javascript', 'react', 'node'];
  const [isCopied, setIsCopied] = useState(false);
  const timeout = useRef<any>(null);
  const [value, setValue] = useState('One');

  return (
    <div>
      <h1 className="m-0px mb-35px" style={{ fontSize: '50px' }}>
        Select
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
            {`import { Select } from 'cutie-ui'
            
const [value, setValue] = useState();

<Select onChange={(e) => setValue(e.target.value)}>
  <option value="someValue">someValue</option>
  <option value="someValue">someValue</option>
  <option value="someValue">someValue</option>
</Select>`}
          </SyntaxHighlighter>
          <Button
            onClick={() => {
              navigator.clipboard.writeText(
                "import { Select } from 'cutie-ui'"
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
        area={
          <div className="df aic">
            <Select onChange={(e) => setValue(e.target.value)}>
              <option value="One">One</option>
              <option value="Two">Two</option>
              <option value="Three">Three</option>
            </Select>
            <p className="ml-20px">{value}</p>
          </div>
        }
        code={`const [value, setValue] = useState('One');

<Select onChange={(e) => setValue(e.target.value)}>
  <option value="One">One</option>
  <option value="Two">Two</option>
  <option value="Three">Three</option>
</Select>`}
      />

      <div className="df jcfe">
        <Link to={'/components/tooltip'}>
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
            Tooltip
          </Button>
        </Link>
      </div>
    </div>
  );
};
