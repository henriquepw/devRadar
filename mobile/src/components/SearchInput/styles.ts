import styled from 'styled-components/native';
import { primaryColor } from '~/styles/colors';
import { opacify } from 'polished';

export const Container = styled.TextInput`
  flex: 1;
  height: 50px;
  border-radius: 25px;
  padding: 0 20px;

  color: ${primaryColor.text};
  background-color: ${opacify(-0.2, primaryColor.bg)};
  font-size: 16px;

  shadow-color: #000;
  shadow-opacity: 0.2;
  shadow-offset: 4px 4px;
  elevation: 2;
`;
