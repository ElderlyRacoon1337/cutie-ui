import { Button, Icon, Skeleton } from 'cutie-ui';
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Section } from '../../../components/Section';

export const SkeletonPage = () => {
  SyntaxHighlighter.supportedLanguages = ['jsx', 'javascript', 'react', 'node'];
  const [isCopied, setIsCopied] = useState(false);
  const timeout = useRef<any>(null);

  return (
    <div>
      <h1 className="m-0px mb-35px" style={{ fontSize: '50px' }}>
        Skeleton
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
            {"import { Skeleton } from 'cutie-ui'"}
          </SyntaxHighlighter>
          <Button
            onClick={() => {
              navigator.clipboard.writeText(
                "import { Skeleton } from 'cutie-ui'"
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
        title="Variant"
        text='Size is set by properties "width" and "height"'
        area={
          <div className="df fdc">
            <Skeleton
              variant="circle"
              width={'5rem'}
              height={'5rem'}
              className="mb-20px"
            />
            <Skeleton
              variant="square"
              width={'15rem'}
              height={'2rem'}
              className="mb-20px"
            />
            <Skeleton variant="rounded" width={'15rem'} height={'5rem'} />
          </div>
        }
        code={`<Skeleton
  variant="circle"
  width={'5rem'}
  height={'5rem'}
  className="mb-20px"
/>
<Skeleton
  variant="square"
  width={'15rem'}
  height={'2rem'}
  className="mb-20px"
/>
<Skeleton
  variant="rounded"
  width={'15rem'}
  height={'5rem'}
  className="mb-20px"
/>`}
      />
    </div>
  );
};
