import { Button } from 'cutie-ui';
import { useRef, useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styles from './ButtonPage.module.scss';

const ButtonPage = () => {
  SyntaxHighlighter.supportedLanguages = ['jsx', 'javascript', 'react', 'node'];
  const [isCopied1, setIsCopied1] = useState(false);
  const timeout = useRef<any>(null);

  return (
    <>
      <h1 className="m-0px mb-35px" style={{ fontSize: '50px' }}>
        Button
      </h1>
      <div className="relative">
        <SyntaxHighlighter
          language="javascript"
          style={tomorrow}
          customStyle={{
            backgroundColor: 'var(--codeBg)',
            padding: '20px',
            borderRadius: '10px',
            marginBottom: '20px',
            fontSize: 'var(--fontSizeLarge)',
          }}
        >
          {"import { Button } from 'cutie-ui'"}
        </SyntaxHighlighter>
        <Button
          style={{ transition: 'none' }}
          onClick={() => {
            navigator.clipboard.writeText("import { Button } from 'cutie-ui'");
            setIsCopied1(true);
            clearTimeout(timeout.current);
            timeout.current = setTimeout(() => {
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
      <p className="mt-30px mb-20px fw-600" style={{ fontSize: '22px' }}>
        Variants
      </p>
      <div className={styles.area}>
        <div className="df aic">
          <Button className="mr-20px">Text</Button>
          <Button variant="outlined" className="mr-20px">
            Outlined
          </Button>
          <Button variant="contained" className="mr-20px">
            Contained
          </Button>
        </div>
      </div>
      <div className="relative">
        <SyntaxHighlighter
          customStyle={{
            backgroundColor: 'var(--codeBg)',
            padding: '20px',
            borderRadius: '10px',
            marginBottom: '20px',
            fontSize: 'var(--fontSizeLarge)',
            lineHeight: '1.3rem',
          }}
          language="jsx"
          style={tomorrow}
        >
          {`<Button className="mr-20px">Text</Button>
<Button variant="outlined" className="mr-20px">
    Outlined
</Button>
<Button variant="contained" className="mr-20px">
    Contained
</Button>`}
        </SyntaxHighlighter>
        <Button
          style={{ transition: 'none' }}
          onClick={() => {
            navigator.clipboard.writeText("import { Button } from 'cutie-ui'");
            setIsCopied1(true);
            setTimeout(() => {
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
      <p className="mt-30px mb-20px fw-600" style={{ fontSize: '22px' }}>
        Colors
      </p>
      <div className={styles.area}>
        <div className="df aic">
          <Button color="primary" variant="contained" className="mr-20px">
            Primary
          </Button>
          <Button color="secondary" variant="contained" className="mr-20px">
            Secondary
          </Button>
          <Button color="neutral" variant="contained" className="mr-20px">
            Neutral
          </Button>
          <Button color="success" variant="contained" className="mr-20px">
            Success
          </Button>
          <Button color="error" variant="contained" className="mr-20px">
            Error
          </Button>
          <Button color="text" variant="contained" className="mr-20px">
            Text
          </Button>
          <Button color="white" variant="contained" className="mr-20px">
            White
          </Button>
          <Button color="black" variant="contained" className="mr-20px">
            Black
          </Button>
        </div>
      </div>
      <div className="relative">
        <SyntaxHighlighter
          customStyle={{
            backgroundColor: 'var(--codeBg)',
            padding: '20px',
            borderRadius: '10px',
            marginBottom: '20px',
            fontSize: 'var(--fontSizeLarge)',
            lineHeight: '1.3rem',
          }}
          language="jsx"
          style={tomorrow}
        >
          {`<Button color="primary" variant="contained" className="mr-20px">
    Primary
</Button>
<Button color="secondary" variant="contained" className="mr-20px">
    Secondary
</Button>
<Button color="neutral" variant="contained" className="mr-20px">
    Neutral
</Button>
<Button color="success" variant="contained" className="mr-20px">
    Success
</Button>
<Button color="error" variant="contained" className="mr-20px">
    Error
</Button>
<Button color="text" variant="contained" className="mr-20px">
    Text
</Button>
<Button color="white" variant="contained" className="mr-20px">
    White
</Button>
<Button color="black" variant="contained" className="mr-20px">
    Black
</Button>`}
        </SyntaxHighlighter>
        <Button
          style={{ transition: 'none' }}
          onClick={() => {
            navigator.clipboard.writeText("import { Button } from 'cutie-ui'");
            setIsCopied1(true);
            setTimeout(() => {
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
      <p className="mt-30px mb-20px fw-600" style={{ fontSize: '22px' }}>
        Sizes
      </p>
      <div className={styles.area}>
        <div className="df aic">
          <Button size="small" variant="contained" className="mr-20px">
            Small
          </Button>
          <Button size="medium" variant="contained" className="mr-20px">
            Medium
          </Button>
          <Button size="large" variant="contained" className="mr-20px">
            Large
          </Button>
        </div>
      </div>
      <div className="relative">
        <SyntaxHighlighter
          language="jsx"
          style={tomorrow}
          customStyle={{
            backgroundColor: 'var(--codeBg)',
            padding: '20px',
            borderRadius: '10px',
            marginBottom: '20px',
            fontSize: 'var(--fontSizeLarge)',
          }}
        >
          {`<Button size="small" variant="contained" className="mr-20px">
    Small
</Button>
<Button size="medium" variant="contained" className="mr-20px">
    Medium
</Button>
<Button size="large" variant="contained" className="mr-20px">
    Large
</Button>`}
        </SyntaxHighlighter>
        <Button
          style={{ transition: 'none' }}
          onClick={() => {
            navigator.clipboard.writeText("import { Button } from 'cutie-ui'");
            setIsCopied1(true);
            clearTimeout(timeout.current);
            timeout.current = setTimeout(() => {
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
      <p className="mt-30px mb-20px fw-600" style={{ fontSize: '22px' }}>
        Square
      </p>
      <div className={styles.area}>
        <Button square className="mr-20px">
          Square
        </Button>
        <Button square variant="outlined" className="mr-20px">
          Square
        </Button>
        <Button square variant="contained" className="mr-20px">
          Square
        </Button>
      </div>
      <div className="relative">
        <SyntaxHighlighter
          language="jsx"
          style={tomorrow}
          customStyle={{
            backgroundColor: 'var(--codeBg)',
            padding: '20px',
            borderRadius: '10px',
            marginBottom: '20px',
            fontSize: 'var(--fontSizeLarge)',
          }}
        >
          {`<Button square className="mr-20px">
    Square
</Button>
<Button square variant="outlined" className="mr-20px">
    Square
</Button>
<Button square variant="contained" className="mr-20px">
    Square
</Button>`}
        </SyntaxHighlighter>
        <Button
          style={{ transition: 'none' }}
          onClick={() => {
            navigator.clipboard.writeText("import { Button } from 'cutie-ui'");
            setIsCopied1(true);
            clearTimeout(timeout.current);
            timeout.current = setTimeout(() => {
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
      <p className="mt-30px mb-20px fw-600" style={{ fontSize: '22px' }}>
        Icons
      </p>
      <div className={styles.area}>
        <div className="df aic">
          <Button
            startIcon={
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
                  d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                />
              </svg>
            }
            variant="contained"
            className="mr-20px"
          >
            Start-icon
          </Button>
          <Button
            endIcon={
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
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            }
            variant="contained"
            className="mr-20px"
          >
            End-icon
          </Button>
          <Button
            startIcon={
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
                  d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            }
            endIcon={
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
            }
            variant="contained"
            className="mr-20px"
          >
            Both
          </Button>
        </div>
      </div>
      <p className="mt-30px mb-20px fw-600" style={{ fontSize: '22px' }}>
        Disabled
      </p>
      <div className={styles.area}>
        <div className="df aic">
          <Button disabled className="mr-20px">
            Disabled
          </Button>
          <Button disabled variant="outlined" className="mr-20px">
            Disabled
          </Button>
          <Button disabled variant="contained" className="mr-20px">
            Disabled
          </Button>
        </div>
      </div>
      <div className="relative">
        <SyntaxHighlighter
          customStyle={{
            backgroundColor: 'var(--codeBg)',
            padding: '20px',
            borderRadius: '10px',
            marginBottom: '20px',
            fontSize: 'var(--fontSizeLarge)',
            lineHeight: '1.3rem',
          }}
          language="jsx"
          style={tomorrow}
        >
          {`<Button disabled className="mr-20px">
    Disabled
</Button>
<Button disabled variant="outlined" className="mr-20px">
    Disabled
</Button>
<Button disabled variant="contained" className="mr-20px">
    Disabled
</Button>`}
        </SyntaxHighlighter>
        <Button
          style={{ transition: 'none' }}
          onClick={() => {
            navigator.clipboard.writeText("import { Button } from 'cutie-ui'");
            setIsCopied1(true);
            setTimeout(() => {
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
      <div className="df jcfe">
        <Button
          size="large"
          color="secondary"
          variant="contained"
          endIcon={
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
          }
        >
          Icon Button
        </Button>
      </div>
    </>
  );
};

export default ButtonPage;