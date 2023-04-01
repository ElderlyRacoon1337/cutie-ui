import { Button, Icon, Loader } from 'cutie-ui';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Section } from '../../../components/Section';

export const LoaderPage = () => {
  SyntaxHighlighter.supportedLanguages = ['jsx', 'javascript', 'react', 'node'];
  const [isCopied1, setIsCopied1] = useState(false);
  const timeout1 = useRef<any>(null);

  return (
    <div>
      <h1 className="m-0px mb-35px" style={{ fontSize: '50px' }}>
        Loader
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
            {"import { Loader } from 'cutie-ui'"}
          </SyntaxHighlighter>
          <Button
            onClick={() => {
              navigator.clipboard.writeText(
                "import { Loader } from 'cutie-ui'"
              );
              setIsCopied1(true);
              clearTimeout(timeout1.current);
              timeout1.current = setTimeout(() => {
                setIsCopied1(false);
              }, 2000);
            }}
            size="small"
            variant="contained"
            color={!isCopied1 ? 'primary' : 'success'}
            className="absolute top-10px right-10px"
          >
            {!isCopied1 ? 'Copy' : 'Copied'}
          </Button>
        </div>
      </div>

      <Section
        title="Variant"
        area={
          <div className="df aic">
            <Loader variant={1} className="mr-20px" />
            <Loader variant={2} className="mr-20px" />
            <Loader variant={3} fatness="5" size={'1rem'} className="mr-20px" />
          </div>
        }
        code={`<Loader variant={1} className="mr-20px" />
<Loader variant={2} className="mr-20px" />
<Loader variant={3} fatness="5" size={'1rem'} className="mr-20px" />`}
      />

      <Section
        title="Size"
        area={
          <div className="df aic">
            <Loader size={'2rem'} variant={1} className="mr-20px" />
            <Loader size={'2rem'} variant={2} className="mr-20px" />
            <Loader size={'1rem'} variant={3} fatness="5" className="mr-20px" />
          </div>
        }
        code={`<Loader size={'2rem'} variant={1} className="mr-20px" />
<Loader size={'2rem'} variant={2} className="mr-20px" />
<Loader size={'1rem'} variant={3} fatness="5" className="mr-20px" />`}
      />

      <Section
        title="Fatness"
        area={
          <div className="df aic">
            <Loader fatness={'5px'} variant={1} className="mr-20px" />
            <Loader fatness={'10px'} variant={2} className="mr-20px" />
            <Loader
              fatness={'10px'}
              size={'1rem'}
              variant={3}
              className="mr-20px"
            />
          </div>
        }
        code={`<Loader fatness={'5px'} variant={1} className="mr-20px" />
<Loader fatness={'10px'} variant={2} className="mr-20px" />
<Loader
  fatness={'10px'}
  size={'1rem'}
  variant={3}
  className="mr-20px"
/>`}
      />

      <Section
        title="Color"
        area={
          <div className="df aic">
            <Loader color="primary" variant={1} className="mr-20px" />
            <Loader color="secondary" variant={2} className="mr-20px" />
            <Loader
              color="orange"
              size={'1rem'}
              variant={3}
              fatness="5"
              className="mr-20px"
            />
          </div>
        }
        code={`<Loader color="primary" variant={1} className="mr-20px" />
<Loader color="secondary" variant={2} className="mr-20px" />
<Loader
  color="orange"
  size={'1rem'}
  variant={3}
  fatness="5"
  className="mr-20px"
/>`}
      />

      <div className="df jcfe">
        <Link to={'/components/linear-progress'}>
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
            Linear progress
          </Button>
        </Link>
      </div>
    </div>
  );
};
