import { Button, Icon, List, ListItem, ListItemButton } from 'cutie-ui';
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Section } from '../../../components/Section';

export const ListPage = () => {
  SyntaxHighlighter.supportedLanguages = ['jsx', 'javascript', 'react', 'node'];
  const [isCopied, setIsCopied] = useState(false);
  const timeout = useRef<any>(null);

  return (
    <div>
      <h1 className="m-0px mb-35px" style={{ fontSize: '50px' }}>
        List
      </h1>
      <div className="import">
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
            {`import { List, ListItem, ListItemButton } from 'cutie-ui'`}
          </SyntaxHighlighter>
          <Button
            onClick={() => {
              navigator.clipboard.writeText(
                `import { List, ListItem, ListItemButton } from 'cutie-ui'`
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
        title=""
        area={
          <div className="df aic">
            <List>
              <ListItem>ListItem</ListItem>
              <ListItemButton>ListItemButton</ListItemButton>
            </List>
          </div>
        }
        code={`<List>
  <ListItem>ListItem</ListItem>
  <ListItemButton>ListItemButton</ListItemButton>
</List>`}
      />

      <Section
        title="Active and activeFilled"
        area={
          <div className="df aic">
            <List>
              <ListItem active sx={{ marginBottom: '20px' }}>
                ListItem active
              </ListItem>
              <ListItem activeFilled sx={{ marginBottom: '20px' }}>
                ListItem activeFilled
              </ListItem>
              <ListItemButton active sx={{ marginBottom: '20px' }}>
                ListItemButton active
              </ListItemButton>
              <ListItemButton activeFilled sx={{ marginBottom: '20px' }}>
                ListItemButton activeFilled
              </ListItemButton>
            </List>
          </div>
        }
        code={`<List>
  <ListItem active sx={{ marginBottom: '20px' }}>
    ListItem active
  </ListItem>
  <ListItem activeFilled sx={{ marginBottom: '20px' }}>
    ListItem activeFilled
  </ListItem>
  <ListItemButton active sx={{ marginBottom: '20px' }}>
    ListItemButton active
  </ListItemButton>
  <ListItemButton activeFilled sx={{ marginBottom: '20px' }}>
    ListItemButton activeFilled
  </ListItemButton>
</List>`}
      />

      <Section
        title="Color"
        area={
          <div className="df aic">
            <List sx={{ marginRight: '20px' }}>
              <ListItem color="primary" active>
                ListItem active primary
              </ListItem>
              <ListItem color="orange" active>
                ListItem active orange
              </ListItem>
              <ListItem color="pink" activeFilled>
                ListItem activeFilled pink
              </ListItem>
            </List>
            <List>
              <ListItemButton color="error" active>
                ListItemButton active error
              </ListItemButton>
              <ListItemButton color="violet" active>
                ListItemButton active violet
              </ListItemButton>
              <ListItemButton color="blue" activeFilled>
                ListItemButton activeFilled blue
              </ListItemButton>
            </List>
          </div>
        }
        code={`<List sx={{ marginRight: '20px' }}>
  <ListItem color="primary" active>
    ListItem active primary
  </ListItem>
  <ListItem color="orange" active>
    ListItem active orange
  </ListItem>
  <ListItem color="pink" activeFilled>
    ListItem activeFilled pink
  </ListItem>
</List>
<List>
  <ListItemButton color="error" active>
    ListItemButton active error
  </ListItemButton>
  <ListItemButton color="violet" active>
    ListItemButton active violet
  </ListItemButton>
  <ListItemButton color="blue" activeFilled>
    ListItemButton activeFilled blue
  </ListItemButton>
</List>`}
      />

      <Section
        title="Icons"
        area={
          <div className="df aic">
            <List className="minw-200px" sx={{ marginRight: '20px' }}>
              <ListItemButton
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
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                  </Icon>
                }
              >
                startIcon
              </ListItemButton>
              <ListItemButton
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
                        d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                      />
                    </svg>
                  </Icon>
                }
              >
                endIcon
              </ListItemButton>
              <ListItemButton
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
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
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
                        d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                      />
                    </svg>
                  </Icon>
                }
              >
                both
              </ListItemButton>
            </List>
            <List className="minw-200px">
              <ListItem
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
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                  </Icon>
                }
              >
                startIcon
              </ListItem>
              <ListItem
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
                        d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                      />
                    </svg>
                  </Icon>
                }
              >
                endIcon
              </ListItem>
              <ListItem
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
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
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
                        d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                      />
                    </svg>
                  </Icon>
                }
              >
                both
              </ListItem>
            </List>
          </div>
        }
        code={`<List className="minw-200px" sx={{marginRight:'20px'}}>
  <ListItemButton
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
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
          />
        </svg>
      </Icon>
    }
  >
    startIcon
  </ListItemButton>
  <ListItemButton
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
            d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
          />
        </svg>
      </Icon>
    }
  >
    endIcon
  </ListItemButton>
  <ListItemButton
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
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
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
            d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
          />
        </svg>
      </Icon>
    }
  >
    both
  </ListItemButton>
</List>
<List className="minw-200px">
  <ListItem
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
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
          />
        </svg>
      </Icon>
    }
  >
    startIcon
  </ListItem>
  <ListItem
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
            d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
          />
        </svg>
      </Icon>
    }
  >
    endIcon
  </ListItem>
  <ListItem
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
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
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
            d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
          />
        </svg>
      </Icon>
    }
  >
    both
  </ListItem>
</List>`}
      />

      <Section
        title="Square"
        text="The square property can be applied to both the list and the list items"
        area={
          <div className="df aic">
            <List square sx={{ marginRight: '20px' }}>
              <ListItem active>ListItem</ListItem>
              <ListItemButton active>ListItemButton</ListItemButton>
              <ListItemButton>ListItemButton</ListItemButton>
              <ListItemButton activeFilled>ListItemButton</ListItemButton>
            </List>
            <List>
              <ListItem active>ListItem</ListItem>
              <ListItemButton square active>
                ListItemButton square
              </ListItemButton>
              <ListItemButton>ListItemButton</ListItemButton>
              <ListItemButton activeFilled>ListItemButton</ListItemButton>
            </List>
          </div>
        }
        code={`<List square sx={{ marginRight: '20px' }}>
  <ListItem active>ListItem</ListItem>
  <ListItemButton active>ListItemButton</ListItemButton>
  <ListItemButton>ListItemButton</ListItemButton>
  <ListItemButton activeFilled>ListItemButton</ListItemButton>
</List>
<List>
  <ListItem active>ListItem</ListItem>
  <ListItemButton square active>
    ListItemButton square
  </ListItemButton>
  <ListItemButton>ListItemButton</ListItemButton>
  <ListItemButton activeFilled>ListItemButton</ListItemButton>
</List>`}
      />

      <div className="df jcfe">
        <Link to={'/components/menu'}>
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
            Menu
          </Button>
        </Link>
      </div>
    </div>
  );
};
