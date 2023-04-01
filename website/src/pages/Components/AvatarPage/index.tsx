import { Avatar, Button, Icon } from 'cutie-ui';
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Section } from '../../../components/Section';

export const AvatarPage = () => {
  SyntaxHighlighter.supportedLanguages = ['jsx', 'javascript', 'react', 'node'];
  const [isCopied, setIsCopied] = useState(false);
  const timeout = useRef<any>(null);

  return (
    <div>
      <h1 className="m-0px mb-35px" style={{ fontSize: '50px' }}>
        Avatar
      </h1>
      <div className="import">
        <div className="relative">
          <SyntaxHighlighter
            language="tsx"
            style={tomorrow}
            customStyle={{
              backgroundColor: 'var(--codeBg)',
              padding: '20px',
              borderRadius: '10px',
              marginBottom: '20px',
            }}
          >
            {`import { Avatar } from 'cutie-ui'`}
          </SyntaxHighlighter>
          <Button
            onClick={() => {
              navigator.clipboard.writeText(
                `import { Avatar } from 'cutie-ui'`
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
        area={
          <div className="df aic">
            <Avatar
              variant="circular"
              src="https://i1.sndcdn.com/artworks-Tn1YaIJmOfX3FZZr-6RE4Yg-t500x500.jpg"
              className="mr-20px"
            />
            <Avatar
              variant="rounded"
              src="https://i1.sndcdn.com/artworks-Tn1YaIJmOfX3FZZr-6RE4Yg-t500x500.jpg"
              className="mr-20px"
            />
            <Avatar
              variant="square"
              src="https://i1.sndcdn.com/artworks-Tn1YaIJmOfX3FZZr-6RE4Yg-t500x500.jpg"
              className="mr-20px"
            />
          </div>
        }
        code={`<Avatar
  variant="circular"
  src="https://i1.sndcdn.com/artworks-Tn1YaIJmOfX3FZZr-6RE4Yg-t500x500.jpg"
  className="mr-20px"
/>
<Avatar
  variant="rounded"
  src="https://i1.sndcdn.com/artworks-Tn1YaIJmOfX3FZZr-6RE4Yg-t500x500.jpg"
  className="mr-20px"
/>
<Avatar
  variant="square"
  src="https://i1.sndcdn.com/artworks-Tn1YaIJmOfX3FZZr-6RE4Yg-t500x500.jpg"
  className="mr-20px"
/>`}
      />
      <Section
        title="Size"
        area={
          <div className="df aic">
            <Avatar
              width={'2.5rem'}
              className="mr-20px"
              src={
                'https://img.championat.com/news/big/p/y/v-dota-2-poyavilsya-pervyj-chestnyj-igrok-s-grandmasterom-na-marci-viktoriya-bonya_1637747390104987094.jpg'
              }
            />
            <Avatar
              width={'3rem'}
              className="mr-20px"
              src={'https://dota2.ru/img/heroes/anti_mage/portrait.jpg'}
            />
            <Avatar
              width={'4rem'}
              className="mr-20px"
              src={
                'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/wrarcana/wr_portrait.png'
              }
            />
          </div>
        }
        code={`<Avatar
  width={'2.5rem'}
  className="mr-20px"
  src={
    'https://img.championat.com/news/big/p/y/v-dota-2-poyavilsya-pervyj-chestnyj-igrok-s-grandmasterom-na-marci-viktoriya-bonya_1637747390104987094.jpg'
  }
/>
<Avatar
  width={'3rem'}
  className="mr-20px"
  src={'https://dota2.ru/img/heroes/anti_mage/portrait.jpg'}
/>
<Avatar
  width={'4rem'}
  className="mr-20px"
  src={
    'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/wrarcana/wr_portrait.png'
  }
/>`}
      />

      <div className="df jcfe">
        <Link to={'/components/alert'}>
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
            Alert
          </Button>
        </Link>
      </div>
    </div>
  );
};
