import { Button, Icon, Loader } from 'cutie-ui';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Section } from '../../../components/Section';

const ButtonPage = () => {
  SyntaxHighlighter.supportedLanguages = ['jsx', 'javascript', 'react', 'node'];
  const [isCopied1, setIsCopied1] = useState(false);
  const timeout1 = useRef<any>(null);

  return (
    <div>
      <h1 className="m-0px mb-35px" style={{ fontSize: '50px' }}>
        Button
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
            {"import { Button } from 'cutie-ui'"}
          </SyntaxHighlighter>
          <Button
            onClick={() => {
              navigator.clipboard.writeText(
                "import { Button } from 'cutie-ui'"
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
        title="Variants"
        area={
          <>
            <div className="df aic mb-20px">
              <Button className="mr-20px">text</Button>
              <Button variant="text2" className="mr-20px">
                text2
              </Button>
            </div>
            <div className="df aic mb-20px">
              <Button variant="outlined" className="mr-20px">
                outlined
              </Button>
              <Button variant="outlined2" className="mr-20px">
                outlined2
              </Button>
              <Button variant="outlined3" className="mr-20px">
                outlined3
              </Button>
              <Button variant="outlined4" className="mr-20px">
                outlined4
              </Button>
            </div>
            <div className="df aic">
              <Button variant="contained" className="mr-20px">
                contained
              </Button>
              <Button variant="contained2" className="mr-20px">
                contained2
              </Button>
              <Button variant="contained3" className="mr-20px">
                contained3
              </Button>
              <Button variant="contained4" className="mr-20px">
                contained4
              </Button>
            </div>
          </>
        }
        code='<div className="df aic mb-20px">
  <Button className="mr-20px">text</Button>
  <Button variant="text2" className="mr-20px">
    text2
  </Button>
</div>
<div className="df aic mb-20px">
  <Button variant="outlined" className="mr-20px">
    outlined
  </Button>
  <Button variant="outlined2" className="mr-20px">
    outlined2
  </Button>
  <Button variant="outlined3" className="mr-20px">
    outlined3
  </Button>
  <Button variant="outlined4" className="mr-20px">
    outlined4
  </Button>
</div>
<div className="df aic">
  <Button variant="contained" className="mr-20px">
    contained
  </Button>
  <Button variant="contained2" className="mr-20px">
    contained2
  </Button>
  <Button variant="contained3" className="mr-20px">
    contained3
  </Button>
  <Button variant="contained4" className="mr-20px">
    contained4
  </Button>
</div>'
      />
      <Section
        title="Colors"
        text="Variables as colors"
        area={
          <>
            <div className="df aic mb-20px">
              <Button color="primary" variant="contained" className="mr-20px">
                primary
              </Button>
              <Button color="secondary" variant="contained" className="mr-20px">
                secondary
              </Button>
              <Button color="neutral" variant="contained" className="mr-20px">
                neutral
              </Button>
              <Button color="success" variant="contained" className="mr-20px">
                success
              </Button>
              <Button color="error" variant="contained" className="mr-20px">
                error
              </Button>
              <Button color="warning" variant="contained" className="mr-20px">
                warning
              </Button>
              <Button color="info" variant="contained" className="mr-20px">
                info
              </Button>
              <Button
                color="textPrimary"
                variant="contained"
                className="mr-20px"
              >
                textPrimary
              </Button>
            </div>
            <div className="df aic">
              <Button color="twitter" variant="contained" className="mr-20px">
                twitter
              </Button>
              <Button color="facebook" variant="contained" className="mr-20px">
                facebook
              </Button>
              <Button color="telegram" variant="contained" className="mr-20px">
                telegram
              </Button>
              <Button color="whatsapp" variant="contained" className="mr-20px">
                whatsapp
              </Button>
              <Button color="viber" variant="contained" className="mr-20px">
                viber
              </Button>
              <Button color="vk" variant="contained" className="mr-20px">
                vk
              </Button>
              <Button
                color="odnoklassniki"
                variant="contained"
                className="mr-20px"
              >
                odnoklassniki
              </Button>
              <Button color="youtube" variant="contained" className="mr-20px">
                youtube
              </Button>
            </div>
          </>
        }
        code={`<div className="df aic mb-20px">
  <Button color="primary" variant="contained" className="mr-20px">
    primary
  </Button>
  <Button color="secondary" variant="contained" className="mr-20px">
    secondary
  </Button>
  <Button color="neutral" variant="contained" className="mr-20px">
    neutral
  </Button>
  <Button color="success" variant="contained" className="mr-20px">
    success
  </Button>
  <Button color="error" variant="contained" className="mr-20px">
    error
  </Button>
  <Button color="warning" variant="contained" className="mr-20px">
    warning
  </Button>
  <Button color="info" variant="contained" className="mr-20px">
    info
  </Button>
  <Button color="textPrimary" variant="contained" className="mr-20px">
    textPrimary
  </Button>
</div>
<div className="df aic">
  <Button color="twitter" variant="contained" className="mr-20px">
    twitter
  </Button>
  <Button color="facebook" variant="contained" className="mr-20px">
    facebook
  </Button>
  <Button color="telegram" variant="contained" className="mr-20px">
    telegram
  </Button>
  <Button color="whatsapp" variant="contained" className="mr-20px">
    whatsapp
  </Button>
  <Button color="viber" variant="contained" className="mr-20px">
    viber
  </Button>
  <Button color="vk" variant="contained" className="mr-20px">
    vk
  </Button>
  <Button
    color="odnoklassniki"
    variant="contained"
    className="mr-20px"
  >
    odnoklassniki
  </Button>
  <Button color="youtube" variant="contained" className="mr-20px">
    youtube
  </Button>
</div>`}
      />
      <Section
        text="The color can be anything, and the text color will automatically
          change depending on the tone."
        area={
          <div className="df aic">
            <Button color="hotpink" variant="contained" className="mr-20px">
              hotpink
            </Button>
            <Button color="turquoise" variant="contained" className="mr-20px">
              turquoise
            </Button>
            <Button color="#3aeb34" variant="contained" className="mr-20px">
              #3aeb34
            </Button>
            <Button color="#e332d1" variant="contained" className="mr-20px">
              #e332d1
            </Button>
            <Button
              color="rgb(0, 65, 217)"
              variant="contained"
              className="mr-20px"
            >
              rgb(0, 65, 217)
            </Button>
          </div>
        }
        code={`<Button color="hotpink" variant="contained" className="mr-20px">
  hotpink
</Button>
<Button color="turquoise" variant="contained" className="mr-20px">
  turquoise
</Button>
<Button color="#3aeb34" variant="contained" className="mr-20px">
  #3aeb34
</Button>
<Button color="#e332d1" variant="contained" className="mr-20px">
  #e332d1
</Button>
<Button
  color="rgb(0, 65, 217)"
  variant="contained"
  className="mr-20px"
>
  rgb(0, 65, 217)
</Button>`}
      />
      <Section
        text="Transparent buttons"
        area={
          <span className="relative">
            <img
              width={'350px'}
              height="auto"
              src="https://cdn.oneesports.gg/cdn-data/2021/10/Dota2_NetflixDotaDragonsBlood_Marci_Hero_2.jpg"
            />
            <Button
              className="mr-20px absolute right-60px bottom-80px"
              color="rgba(0,0,0,0.5)"
              variant="contained"
              sx={{
                '&:hover': {
                  backgroundColor: 'rgba(0,0,0,0.7)',
                },
                '&:active': {
                  backgroundColor: 'rgba(0,0,0,0.8)',
                },
              }}
            >
              Button
            </Button>
            <Button
              className="mr-20px absolute right-170px bottom-80px"
              color="rgba(255,255,255,0.5)"
              sx={{
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.7)',
                },
                '&:active': {
                  backgroundColor: 'rgba(255,255,255,0.8)',
                },
              }}
              variant="contained"
            >
              Button
            </Button>
          </span>
        }
        code={`<Button
  className="mr-20px absolute right-60px bottom-80px"
  color="rgba(0,0,0,0.5)"
  variant="contained"
  sx={{
    '&:hover': {
      backgroundColor: 'rgba(0,0,0,0.7)',
    },
    '&:active': {
      backgroundColor: 'rgba(0,0,0,0.8)',
    },
  }}
>
Button
</Button>
<Button
  className="mr-20px absolute right-170px bottom-80px"
  color="rgba(255,255,255,0.5)"
  sx={{
    '&:hover': {
      backgroundColor: 'rgba(255,255,255,0.7)',
    },
    '&:active': {
      backgroundColor: 'rgba(255,255,255,0.8)',
    },
  }}
  variant="contained"
  >
  Button
</Button>`}
      />
      <Section
        title="Sizes"
        area={
          <div className="df aic">
            <Button size="small" variant="contained" className="mr-20px">
              small
            </Button>
            <Button variant="contained" className="mr-20px">
              medium
            </Button>
            <Button size="large" variant="contained" className="mr-20px">
              large
            </Button>
          </div>
        }
        code={`<Button size="small" variant="contained" className="mr-20px">
  small
</Button>
<Button variant="contained" className="mr-20px">
  medium
</Button>
<Button size="large" variant="contained" className="mr-20px">
  large
</Button>`}
      />

      <Section
        title="Disabled"
        area={
          <div className="df aic">
            <Button disabled variant="text" className="mr-20px">
              disabled
            </Button>
            <Button disabled variant="outlined" className="mr-20px">
              disabled
            </Button>
            <Button disabled variant="contained" className="mr-20px">
              disabled
            </Button>
          </div>
        }
        code={`<Button disabled variant="text" className="mr-20px">
  disabled
</Button>
<Button disabled variant="outlined" className="mr-20px">
  disabled
</Button>
<Button disabled variant="contained" className="mr-20px">
  disabled
</Button>`}
      />

      <Section
        title="Icons"
        area={
          <div className="df aic">
            <Button
              className="mr-20px"
              variant="contained"
              startIcon={
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
                      d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                    />
                  </svg>
                </Icon>
              }
            >
              startIcon
            </Button>
            <Button
              variant="contained"
              className="mr-20px"
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
                      d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                    />
                  </svg>
                </Icon>
              }
            >
              endIcon
            </Button>
            <Button
              variant="contained"
              className="mr-20px"
              startIcon={
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
                      d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                    />
                  </svg>
                </Icon>
              }
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
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </Icon>
              }
            >
              both
            </Button>
            <Button
              variant="contained"
              endIcon={
                <Loader
                  size={'0.7rem'}
                  variant={2}
                  fatness={'1.5px'}
                  color="textOpposite"
                />
              }
            >
              loader
            </Button>
          </div>
        }
        code={`<Button
  className="mr-20px"
  variant="contained"
  startIcon={
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
          d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
        />
      </svg>
    </Icon>
  }
>
  startIcon
</Button>
<Button
  variant="contained"
  className="mr-20px"
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
          d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
        />
      </svg>
    </Icon>
  }
>
  endIcon
</Button>
<Button
  variant="contained"
  className="mr-20px"
  startIcon={
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
          d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
        />
      </svg>
    </Icon>
  }
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
          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
        />
      </svg>
    </Icon>
  }
>
  both
</Button>
<Button
  variant="contained"
  endIcon={
    <Loader
      size={'0.7rem'}
      variant={2}
      fatness={'1.5px'}
      color="textOpposite"
    />
  }
>
  loader
</Button>`}
      />

      <div className="df jcfe">
        <Link to={'/components/icon-button'}>
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
            Icon Button
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ButtonPage;
