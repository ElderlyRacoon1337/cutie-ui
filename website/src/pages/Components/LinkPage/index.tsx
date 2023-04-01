import { Button, Icon, Link } from 'cutie-ui';
import React, { useRef, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Section } from '../../../components/Section';

export const LinkPage = () => {
  SyntaxHighlighter.supportedLanguages = ['jsx', 'javascript', 'react', 'node'];
  const [isCopied, setIsCopied] = useState(false);
  const timeout = useRef<any>(null);

  return (
    <div>
      <h1 className="m-0px mb-35px" style={{ fontSize: '50px' }}>
        Link
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
            {"import { Link } from 'cutie-ui'"}
          </SyntaxHighlighter>
          <Button
            onClick={() => {
              navigator.clipboard.writeText("import { Link } from 'cutie-ui'");
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
        title="Variant"
        area={
          <div className="mr-20px">
            <Link href="/components/link" className="mr-20px">
              link
            </Link>
            <Link href="/components/link" underlined>
              underlined
            </Link>
          </div>
        }
        code={`<Link href="/components/link" className="mr-20px">
  link
</Link>
<Link href="/components/link" underlined>
  underlined
</Link>`}
      />

      <div className="df jcfe">
        <RouterLink to={'/components/list'}>
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
            List
          </Button>
        </RouterLink>
      </div>
    </div>
  );
};
