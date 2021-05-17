import PropTypes from 'prop-types';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import go from 'react-syntax-highlighter/dist/esm/languages/hljs/go';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';

SyntaxHighlighter.registerLanguage('go', go);

export const CodeHighlight = ({ children }) => (
  <SyntaxHighlighter language="go" style={github} wrapLines>
    {children}
  </SyntaxHighlighter>
);

CodeHighlight.propTypes = {
  children: PropTypes.node.isRequired,
};
