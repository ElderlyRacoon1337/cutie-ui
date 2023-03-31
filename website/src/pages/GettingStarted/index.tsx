import { Button, Icon } from 'cutie-ui';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

const GettingStarted = () => {
  const [isCopied1, setIsCopied1] = useState(false);
  const [isCopied2, setIsCopied2] = useState(false);
  const [isCopied3, setIsCopied3] = useState(false);
  SyntaxHighlighter.supportedLanguages = ['jsx', 'javascript', 'react', 'node'];
  const navigate = useNavigate();
  const timeout1 = useRef<any>(null);
  const timeout2 = useRef<any>(null);
  const timeout3 = useRef<any>(null);

  return (
    <div className="pb-100px">
      <h1 className="m-0px mb-5px" style={{ fontSize: '50px' }}>
        Getting Started
      </h1>
      <p className="mt-30px mb-20px fw-600" style={{ fontSize: '22px' }}>
        Installation
      </p>
      <p className="mt-30px mb-15px fslg">1. Install npm packege</p>
      <div className="relative">
        <SyntaxHighlighter
          customStyle={{
            backgroundColor: 'var(--codeBg)',
            padding: '20px',
            borderRadius: '10px',
            marginBottom: '20px',
          }}
          language="bash"
          style={tomorrow}
        >
          {'npm install cutie-ui'}
        </SyntaxHighlighter>
        <Button
          style={{ transition: 'none' }}
          onClick={() => {
            navigator.clipboard.writeText('npm install cutie-ui');
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
      <p className="mt-30px mb-15px fslg">
        2. Wrap your app in a "ThemeProvider" to make the components colorize
      </p>
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
          {`import { ThemeProvider } from 'cutie-ui';

<ThemeProvider>
  <App />
</ThemeProvider>`}
        </SyntaxHighlighter>

        <Button
          style={{ transition: 'none' }}
          onClick={() => {
            navigator.clipboard.writeText(
              `import { ThemeProvider } from 'cutie-ui';

<ThemeProvider>
  <App />
</ThemeProvider>`
            );
            setIsCopied2(true);
            clearTimeout(timeout2.current);
            timeout2.current = setTimeout(() => {
              setIsCopied2(false);
            }, 2000);
          }}
          size="small"
          variant="contained"
          color={!isCopied2 ? 'primary' : 'success'}
          className="absolute top-10px right-10px"
        >
          {!isCopied2 ? 'Copy' : 'Copied'}
        </Button>
      </div>
      <p className="mt-30px mb-15px fslg">
        3. Add "CssBaseline" to add basic styles, theme change functionality,
        and the ability to use variables
      </p>
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
          {`import { CssBaseline, ThemeProvider } from 'cutie-ui';

<ThemeProvider>
  <CssBaseline />
  <App />
</ThemeProvider>`}
        </SyntaxHighlighter>

        <Button
          style={{ transition: 'none' }}
          onClick={() => {
            navigator.clipboard.writeText(
              `import { CssBaseline, ThemeProvider } from 'cutie-ui';

<ThemeProvider>
  <CssBaseline />
  <App />
</ThemeProvider>`
            );
            setIsCopied3(true);
            clearTimeout(timeout2.current);
            timeout3.current = setTimeout(() => {
              setIsCopied3(false);
            }, 2000);
          }}
          size="small"
          variant="contained"
          color={!isCopied3 ? 'primary' : 'success'}
          className="absolute top-10px right-10px"
        >
          {!isCopied3 ? 'Copy' : 'Copied'}
        </Button>
      </div>
      <div className="df jcfe">
        <Button
          size="large"
          onClick={() => navigate('/components')}
          color="secondary"
          variant="contained"
          endIcon={
            <Icon fontSize={'1rem'}>
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
          Components
        </Button>
      </div>
    </div>
  );
};

export default GettingStarted;
