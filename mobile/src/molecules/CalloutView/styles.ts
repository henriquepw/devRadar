import styled from 'styled-components/native';

import { secundaryColor } from '../../styles/colors';

export const Container = styled.View`
  width: 260px;
`;

export const DevName = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;

export const DevBio = styled.Text`
  color: ${secundaryColor.text};
  margin-top: 6px;
`;

export const DevTechs = styled.Text`
  margin-top: 6px;
`;
