import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  cursor: pointer;
  border: 2px solid;
  border-radius: 4px;
  text-decoration: none;
  overflow: hidden;
  color: white;
  flex: 0 0 298px;
  width: 298px;
  height: 167px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  position: relative;
  display: inline-block;
  align-items: flex-end;
  padding: 16px;

  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .5;
  }
  
  &:not(:first-child) {
    margin-left: 20px;
  }
`;
