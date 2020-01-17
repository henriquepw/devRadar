import styled from 'styled-components/native';

import { primaryColor } from '../../styles/colors';

export const Container = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;

  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin-left: 15px;

  background-color: ${primaryColor.active};

  shadow-color: #000;
  shadow-opacity: 0.2;
  shadow-offset: 4px 4px;
  elevation: 2;
`;
