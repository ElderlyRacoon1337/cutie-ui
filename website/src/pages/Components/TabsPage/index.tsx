import { Button, Icon, Tab, Tabs } from 'cutie-ui';
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Section } from '../../../components/Section';

export const TabsPage = () => {
  SyntaxHighlighter.supportedLanguages = ['jsx', 'javascript', 'react', 'node'];
  const [isCopied, setIsCopied] = useState(false);
  const timeout = useRef<any>(null);

  const [value, setValue] = useState(1);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <h1 className="m-0px mb-35px" style={{ fontSize: '50px' }}>
        Tabs
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
            {`import { Tabs, Tab } from 'cutie-ui'

const [value, setValue] = useState(1);

const handleChange = (event: React.SyntheticEvent, newValue: number) => {
  setValue(newValue);
};`}
          </SyntaxHighlighter>
          <Button
            onClick={() => {
              navigator.clipboard.writeText(
                `import { Tabs, Tab } from 'cutie-ui'`
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
        title="Usage"
        area={
          <div className="df aic">
            <Tabs
              value={value}
              onChange={handleChange}
              labels={['English', 'Russian', 'Swedish']}
            >
              <Tab className="py-20px">Hello World!</Tab>
              <Tab className="py-20px">Привет Мир!</Tab>
              <Tab className="py-20px">Hej Världen!</Tab>
            </Tabs>
          </div>
        }
        code={`<Tabs
  value={value}
  onChange={handleChange}
  labels={['English', 'Russian', 'Swedish']}
>
  <Tab className="py-20px">Hello World!</Tab>
  <Tab className="py-20px">Привет Мир!</Tab>
  <Tab className="py-20px">Hej Världen!</Tab>
</Tabs>`}
      />
      <Section
        title="Variant"
        area={
          <div className="df aic">
            <Tabs
              variant="contained"
              value={value}
              onChange={handleChange}
              labels={['Variant', 'Contained']}
              className="mr-20px"
            >
              <Tab className="py-20px">I want pizza</Tab>
              <Tab className="py-20px">Second tab</Tab>
            </Tabs>
            <Tabs
              variant="underlined"
              value={value}
              onChange={handleChange}
              labels={['Variant', 'Underlined']}
            >
              <Tab className="py-20px">I want pizza</Tab>
              <Tab className="py-20px">Second tab</Tab>
            </Tabs>
          </div>
        }
        code={`<Tabs
  variant="contained"
  value={value}
  onChange={handleChange}
  labels={['Variant', 'Contained']}
  className="mr-20px"
>
  <Tab className="py-20px">I want pizza</Tab>
  <Tab className="py-20px">Second tab</Tab>
</Tabs>
<Tabs
  variant="underlined"
  value={value}
  onChange={handleChange}
  labels={['Variant', 'Underlined']}
>
  <Tab className="py-20px">I want pizza</Tab>
  <Tab className="py-20px">Second tab</Tab>
</Tabs>`}
      />

      <Section
        title="Color"
        area={
          <div className="df aic">
            <Tabs
              color="primary"
              value={value}
              onChange={handleChange}
              labels={['primary', 'primary']}
              variant="contained"
              className="mr-20px"
            >
              <Tab className="py-20px">primary</Tab>
              <Tab className="py-20px">primary</Tab>
            </Tabs>
            <Tabs
              color="secondary"
              value={value}
              onChange={handleChange}
              labels={['secondary', 'secondary']}
              variant="contained"
              className="mr-20px"
            >
              <Tab className="py-20px">secondary</Tab>
              <Tab className="py-20px">secondary</Tab>
            </Tabs>
            <Tabs
              color="purple"
              value={value}
              onChange={handleChange}
              labels={['purple', 'purple']}
              variant="contained"
              className="mr-20px"
            >
              <Tab className="py-20px">purple</Tab>
              <Tab className="py-20px">purple</Tab>
            </Tabs>
            <Tabs
              color="#4287f5"
              value={value}
              onChange={handleChange}
              labels={['#4287f5', '#4287f5']}
              variant="contained"
            >
              <Tab className="py-20px">#4287f5</Tab>
              <Tab className="py-20px">#4287f5</Tab>
            </Tabs>
          </div>
        }
        code={`<Tabs
  color="primary"
  value={value}
  onChange={handleChange}
  labels={['primary', 'primary']}
  variant="contained"
  className="mr-20px"
>
  <Tab className="py-20px">primary</Tab>
  <Tab className="py-20px">primary</Tab>
</Tabs>
<Tabs
  color="secondary"
  value={value}
  onChange={handleChange}
  labels={['secondary', 'secondary']}
  variant="contained"
  className="mr-20px"
>
  <Tab className="py-20px">secondary</Tab>
  <Tab className="py-20px">secondary</Tab>
</Tabs>
<Tabs
  color="purple"
  value={value}
  onChange={handleChange}
  labels={['purple', 'purple']}
  variant="contained"
  className="mr-20px"
>
  <Tab className="py-20px">purple</Tab>
  <Tab className="py-20px">purple</Tab>
</Tabs>
<Tabs
  color="#4287f5"
  value={value}
  onChange={handleChange}
  labels={['#4287f5', '#4287f5']}
  variant="contained"
>
  <Tab className="py-20px">#4287f5</Tab>
  <Tab className="py-20px">#4287f5</Tab>
</Tabs>`}
      />

      <Section
        title="Size"
        area={
          <div className="df aic">
            <Tabs
              size="small"
              value={value}
              onChange={handleChange}
              labels={['size', 'small']}
              variant="contained"
              className="mr-20px"
            >
              <Tab className="py-20px">123</Tab>
              <Tab className="py-20px">456</Tab>
            </Tabs>
            <Tabs
              size="medium"
              value={value}
              onChange={handleChange}
              labels={['size', 'medium']}
              variant="contained"
              className="mr-20px"
            >
              <Tab className="py-20px">123</Tab>
              <Tab className="py-20px">456</Tab>
            </Tabs>
            <Tabs
              size="large"
              value={value}
              onChange={handleChange}
              labels={['size', 'large']}
              variant="contained"
              className="mr-20px"
            >
              <Tab className="py-20px">123</Tab>
              <Tab className="py-20px">456</Tab>
            </Tabs>
          </div>
        }
        code={`<Tabs
  size="small"
  value={value}
  onChange={handleChange}
  labels={['size', 'small']}
  variant="contained"
  className="mr-20px"
>
  <Tab className="py-20px">123</Tab>
  <Tab className="py-20px">456</Tab>
</Tabs>
<Tabs
  size="medium"
  value={value}
  onChange={handleChange}
  labels={['size', 'medium']}
  variant="contained"
  className="mr-20px"
>
  <Tab className="py-20px">123</Tab>
  <Tab className="py-20px">456</Tab>
</Tabs>
<Tabs
  size="large"
  value={value}
  onChange={handleChange}
  labels={['size', 'large']}
  variant="contained"
  className="mr-20px"
>
  <Tab className="py-20px">123</Tab>
  <Tab className="py-20px">456</Tab>
</Tabs>`}
      />

      <Section
        title="Rounded"
        area={
          <div className="df aic">
            <Tabs
              rounded
              value={value}
              onChange={handleChange}
              labels={['rounded', 'rounded']}
              variant="contained"
              className="mr-20px"
            >
              <Tab className="py-20px">123</Tab>
              <Tab className="py-20px">456</Tab>
            </Tabs>
            <Tabs
              circle
              value={value}
              onChange={handleChange}
              labels={['circle', 'circle']}
              variant="contained"
              className="mr-20px"
            >
              <Tab className="py-20px">123</Tab>
              <Tab className="py-20px">456</Tab>
            </Tabs>
          </div>
        }
        code={`<Tabs
  rounded
  value={value}
  onChange={handleChange}
  labels={['rounded', 'rounded']}
  variant="contained"
  className="mr-20px"
>
  <Tab className="py-20px">123</Tab>
  <Tab className="py-20px">456</Tab>
</Tabs>
<Tabs
  circle
  value={value}
  onChange={handleChange}
  labels={['circle', 'circle']}
  variant="contained"
  className="mr-20px"
>
  <Tab className="py-20px">123</Tab>
  <Tab className="py-20px">456</Tab>
</Tabs>`}
      />

      <Section
        title="Full width"
        area={
          <div className="df aic">
            <Tabs
              fullWidth
              value={value}
              onChange={handleChange}
              labels={['fullWidth', 'fullWidth']}
              variant="contained"
              className="w-500px"
            >
              <Tab className="py-20px">123</Tab>
              <Tab className="py-20px">456</Tab>
            </Tabs>
          </div>
        }
        code={`<Tabs
  fullWidth
  value={value}
  onChange={handleChange}
  labels={['fullWidth', 'fullWidth']}
  variant="contained"
  className="w-500px"
>
  <Tab className="py-20px">123</Tab>
  <Tab className="py-20px">456</Tab>
</Tabs>`}
      />

      <div className="df jcfe">
        <Link to={'/components/avatar'}>
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
            Avatar
          </Button>
        </Link>
      </div>
    </div>
  );
};
