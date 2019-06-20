import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  border: 1px solid #fff;
  border-radius: 4px;
`;

export const Header = styled.h2`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 20px 0 15px;
`;

export const WsButton = styled.button`
  margin-top: 20px;
  padding: 10px 15px;

  appearance: none;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: color 0.2s;
  font-size: 16px;

  &:hover {
    color: ${({ isConnected }) => (isConnected ? 'red' : 'green')};
  }
`;

export const ConnectionIndicator = styled.div`
  width: 10px;
  height: 10px;

  margin-left: 20px;

  border-radius: 50px;
  background-color: ${({ isConnected }) => (isConnected ? 'green' : 'red')};
  transition: background-color 0.2s;
`;
