import styled from 'styled-components';

interface RectangleProps {
  topLeft?: string;
  topRight?: string;
  bottomLeft?: string;
  bottomRight?: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  flex: 1;
`;
export const Header = styled.header`
  display: flex;
  align-items: center;
  background-color: #fc7070;
  min-height: 100px;
  width: 100%;

  h1 {
    font-size: 72px;
    font-weight: bold;
    margin-left: 90px;
    color: #ffe7e7;
  }
`;
export const Body = styled.div`
  flex: 1;
  width: 900px;
  input {
    border-radius: 5px;
    border: 1px solid #000;
    height: 30px;
    width: 100px;
    padding: 5px 10px;
    margin-top: 10px;
  }
`;
export const RectangleSection = styled.section`
  padding: 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Top = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;
export const Rectangle = styled.div<RectangleProps>`
  height: 200px;
  width: 400px;
  background-color: #a31e1e;
  border: 2px #000 solid;
  border-top-left-radius: ${props => `${props.topLeft}px`};
  border-top-right-radius: ${props => `${props.topRight}px`};
  border-bottom-left-radius: ${props => `${props.bottomLeft}px`};
  border-bottom-right-radius: ${props => `${props.bottomRight}px`};
`;
export const Down = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const CssViewer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 20px;
  align-items: center;
  margin-bottom: 20px;

  textarea {
    margin-top: 10px;
    width: 400px;
    padding: 10px;
  }
`;
export const CssViewerHeader = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;

  h1 {
    margin-right: 20px;
  }
  button {
    margin-left: 20px;
    background-color: #53da3d;
    border: 0px;
    height: 48px;
    width: 48px;
    border-radius: 14px;
  }
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  background-color: #fc7070;
  min-height: 100px;
  width: 100%;

  p,
  a {
    font-size: 20px;
    margin-right: 30px;
  }
  a {
    text-decoration: none;
    color: #ffe7e7;
    font-weight: bold;
  }
`;
