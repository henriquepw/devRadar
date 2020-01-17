import React from 'react';
import { NavigationStackProp } from 'react-navigation-stack';

import { Container } from './styles';

interface Props {
  navigation: NavigationStackProp;
}

function Profile({ navigation }: Props) {
  const githubUsername = navigation.getParam('githubUsername');

  return <Container source={{ uri: `https://github.com/${githubUsername}` }} />;
}

export default Profile;
