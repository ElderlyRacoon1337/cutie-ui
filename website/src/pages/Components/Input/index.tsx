import { Button, Icon, IconButton, Input } from 'cutie-ui';
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Section } from '../../../components/Section';

export const InputPage = () => {
  SyntaxHighlighter.supportedLanguages = ['jsx', 'javascript', 'react', 'node'];
  const [isCopied, setIsCopied] = useState(false);
  const timeout = useRef<any>(null);

  return (
    <div>
      <h1 className="m-0px mb-35px" style={{ fontSize: '50px' }}>
        Input
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
            {"import { Input } from 'cutie-ui'"}
          </SyntaxHighlighter>
          <Button
            onClick={() => {
              navigator.clipboard.writeText("import { Input } from 'cutie-ui'");
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
        title="Variants"
        area={
          <div className="df aic">
            <Input variant="basic" placeholder="basic" className="mr-20px" />
            <Input
              variant="outlined"
              placeholder="outlined"
              className="mr-20px"
            />
            <Input
              variant="underlined"
              placeholder="underlined"
              className="mr-20px"
            />
            <Input variant="filled" placeholder="filled" className="mr-20px" />
          </div>
        }
        code={`<Input variant="basic" placeholder="basic" className="mr-20px" />
<Input
  variant="outlined"
  placeholder="outlined"
  className="mr-20px"
/>
<Input
  variant="underlined"
  placeholder="underlined"
  className="mr-20px"
/>
<Input variant="filled" placeholder="filled" className="mr-20px" />`}
      />

      <Section
        title="Colors"
        area={
          <div className="df aic">
            <Input color="primary" placeholder="primary" className="mr-20px" />
            <Input
              color="secondary"
              placeholder="secondary"
              className="mr-20px"
            />
            <Input color="neutral" placeholder="neutral" className="mr-20px" />
            <Input color="red" placeholder="red" className="mr-20px" />
          </div>
        }
        code={`<Input color="primary" placeholder="primary" className="mr-20px" />
<Input
  color="secondary"
  placeholder="secondary"
  className="mr-20px"
/>
<Input color="neutral" placeholder="neutral" className="mr-20px" />
<Input color="red" placeholder="red" className="mr-20px" />`}
      />

      <Section
        title="Icons"
        area={
          <div className="df aic">
            <Input
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
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </Icon>
              }
              placeholder="startIcon"
              className="mr-20px"
            />
            <Input
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
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </Icon>
              }
              placeholder="endIcon"
              className="mr-20px"
            />
            <Input
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
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </Icon>
              }
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
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </Icon>
              }
              placeholder="both"
              className="mr-20px"
            />
          </div>
        }
        code={`<Input
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
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
    </Icon>
  }
  placeholder="startIcon"
  className="mr-20px"
/>
<Input
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
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </Icon>
  }
  placeholder="endIcon"
  className="mr-20px"
/>
<Input
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
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
    </Icon>
  }
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
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </Icon>
  }
  placeholder="both"
  className="mr-20px"
/>`}
      />

      <Section
        title="Sizes"
        area={
          <div className="df aic">
            <Input placeholder="small" size="small" className="mr-20px" />
            <Input placeholder="medium" size="medium" className="mr-20px" />
            <Input placeholder="large" size="large" className="mr-20px" />
          </div>
        }
        code={`<Input placeholder="small" size="small" className="mr-20px" />
        <Input placeholder="medium" size="medium" className="mr-20px" />
        <Input placeholder="large" size="large" className="mr-20px" />`}
      />

      <Section
        title="Button"
        area={
          <div className="df aic">
            <Input
              placeholder="Input with button"
              button={<Button>Search</Button>}
              className="mr-20px"
            />
            <Input
              placeholder="Input with iconButton"
              button={
                <IconButton>
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
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </Icon>
                </IconButton>
              }
            />
          </div>
        }
        code={`<Input
  placeholder="Input with button"
  button={<Button>Search</Button>}
  className="mr-20px"
/>
<Input
  placeholder="Input with iconButton"
  button={
    <IconButton>
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
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </Icon>
    </IconButton>
  }
/>`}
      />

      <div className="df jcfe">
        <Link to={'/components/switch'}>
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
            Switch
          </Button>
        </Link>
      </div>
    </div>
  );
};
