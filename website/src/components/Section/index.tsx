import { Button, Icon } from 'cutie-ui';
import React from 'react';
import styles from './Section.module.scss';
import { useRef, useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface SectionProps {
  title?: string;
  text?: string;
  area: React.ReactNode;
  code: string;
}

export const Section: React.FC<SectionProps> = ({
  title,
  area,
  code,
  text,
}) => {
  const [isCopied, setIsCopied] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const timeout = useRef<any>(null);

  return (
    <div className={styles.section}>
      <p className="mt-50px mb-20px fw-600" style={{ fontSize: '22px' }}>
        {title}
      </p>

      {text && <p className={styles.text + ' mb-15px fslg'}>{text}</p>}
      <div className={styles.area}>{area}</div>
      <Button
        className={isShow ? 'mb-15px' : ''}
        color="textPrimary"
        variant="outlined"
        onClick={() => setIsShow(!isShow)}
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
                d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
              />
            </svg>
          </Icon>
        }
      >
        {!isShow ? 'Show code' : 'Hide code'}
      </Button>
      {isShow && (
        <div className="relative">
          <SyntaxHighlighter
            customStyle={{
              backgroundColor: 'var(--codeBg)',
              padding: '20px',
              borderRadius: '10px',
              marginBottom: '20px',
              lineHeight: '1.3rem',
              margin: 0,
            }}
            language="jsx"
            style={tomorrow}
          >
            {code}
          </SyntaxHighlighter>
          <Button
            onClick={() => {
              navigator.clipboard.writeText(code);
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
      )}
    </div>
  );
};
