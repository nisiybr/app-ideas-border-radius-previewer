import React, {
  useState,
  useMemo,
  useRef,
  useCallback,
  MutableRefObject,
} from 'react';
import { FaCopy } from 'react-icons/fa';

import {
  Container,
  Header,
  Body,
  Top,
  Down,
  Footer,
  RectangleSection,
  Rectangle,
  Field,
  CssViewer,
  CssViewerHeader,
} from './styles';

const Main: React.FC = () => {
  const [topLeft, setTopLeft] = useState('0');
  const [topRight, setTopRight] = useState('0');
  const [bottomLeft, setBottomLeft] = useState('0');
  const [bottomRight, setBottomRight] = useState('0');
  const [css, setCss] = useState('');

  const textAreaRef = useRef() as MutableRefObject<HTMLTextAreaElement>;

  const handleCopyCss = useCallback(() => {
    textAreaRef.current.select();
    document.execCommand('copy');
    alert('Código CSS copiado para a área de transferência!');
  }, []);

  useMemo(() => {
    const cssParsed = `border-top-left-radius: ${topLeft}px;\nborder-top-right-radius: ${topRight}px;\nborder-bottom-left-radius: ${bottomLeft}px;\nborder-bottom-right-radius: ${bottomRight}px;`;

    setCss(cssParsed);
  }, [topLeft, topRight, bottomLeft, bottomRight]);

  return (
    <Container>
      <Header>
        <h1>Border Radius Previewer</h1>
      </Header>
      <Body>
        <RectangleSection>
          <Top>
            <Field>
              <strong>border-top-left-radius</strong>
              <input
                name="top-left"
                type="text"
                placeholder="Enter pixels"
                onChange={e => setTopLeft(e.target.value)}
              />
            </Field>
            <Field>
              <strong>border-top-right-radius</strong>
              <input
                name="top-right"
                type="text"
                placeholder="Enter pixels"
                onChange={e => setTopRight(e.target.value)}
              />
            </Field>
          </Top>
          <Rectangle
            topLeft={topLeft}
            topRight={topRight}
            bottomLeft={bottomLeft}
            bottomRight={bottomRight}
          />
          <Down>
            <Field>
              <strong>border-bottom-left-radius</strong>
              <input
                name="bottom-left"
                type="text"
                placeholder="Enter pixels"
                onChange={e => setBottomLeft(e.target.value)}
              />
            </Field>
            <Field>
              <strong>border-bottom-right-radius</strong>
              <input
                name="bottom-right"
                type="text"
                placeholder="Enter pixels"
                onChange={e => setBottomRight(e.target.value)}
              />
            </Field>
          </Down>
        </RectangleSection>
        <CssViewer>
          <CssViewerHeader>
            <h1>Css Viewer</h1>
            <button type="button" onClick={handleCopyCss}>
              <FaCopy color="#fff" size={24} />
            </button>
          </CssViewerHeader>
          <textarea ref={textAreaRef} name="css" rows={5} value={css} />
        </CssViewer>
      </Body>
      <Footer>
        <p>Developed by Guilherme Nisiyama</p>
        <a href="https://github.com/nisiybr">https://github.com/nisiybr</a>
      </Footer>
    </Container>
  );
};

export default Main;
