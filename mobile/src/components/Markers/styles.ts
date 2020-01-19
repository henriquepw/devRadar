import styled from 'styled-components/native';

import { primaryColor } from '~/styles/colors';

export const Avatar = styled.Image`
  width: 54px;
  height: 54px;

  border-radius: 4px;
  border-width: 4px;
  border-color: ${primaryColor.bg};
`;
