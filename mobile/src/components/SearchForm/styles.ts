import styled, { css } from 'styled-components/native';
import { primaryColor } from '~/styles/colors';
import { opacify } from 'polished';

const shadow = css`
  shadow-color: #000;
  shadow-opacity: 0.2;
  shadow-offset: 4px 4px;
  elevation: 2;
`;

export const Container = styled.View`
  flex-direction: row;
  position: absolute;

  top: 20px;
  left: 20px;
  right: 20px;
  z-index: 5;
`;

export const LoadButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;

  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin-left: 15px;

  background-color: ${primaryColor.active};

  ${shadow}
`;

export const SearchInput = styled.TextInput`
  flex: 1;
  height: 50px;
  border-radius: 25px;
  padding: 0 20px;

  color: ${primaryColor.text};
  background-color: ${opacify(-0.2, primaryColor.bg)};
  font-size: 16px;

  ${shadow}
`;
