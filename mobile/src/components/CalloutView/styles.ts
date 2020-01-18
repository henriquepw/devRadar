import styled from 'styled-components/native';

import { primaryColor } from '../../styles/colors';
import { opacify } from 'polished';

export const Container = styled.View`
  width: 260px;
  background-color: ${opacify(-0.2, primaryColor.bg)};
  border-radius: 8px;

  padding: 12px;
  margin-bottom: 24px;
`;

export const DevName = styled.Text`
  color: ${primaryColor.text};
  font-weight: bold;
  font-size: 16px;
`;

export const DevBio = styled.Text`
  color: ${primaryColor.text};
  margin-top: 6px;
  opacity: 0.7;
`;

export const DevTechs = styled.Text`
  color: ${primaryColor.active};
  margin-top: 6px;
`;
