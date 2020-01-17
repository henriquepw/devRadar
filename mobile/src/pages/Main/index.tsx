import React, { useEffect, useState } from 'react';
import { Marker } from 'react-native-maps';
import { NavigationStackProp } from 'react-navigation-stack';

import {
  requestPermissionsAsync,
  getCurrentPositionAsync,
} from 'expo-location';

import Avatar from '../../atoms/Avatar';
import CalloutView from '../../molecules/CalloutView';

import { Container } from './styles';

interface Props {
  navigation: NavigationStackProp;
}

const dev = {
  name: 'Henrique',
  bio: 'biooooooo',
  techs: ['ReactJS', 'React Native'],
};

function Main({ navigation }: Props) {
  const [currentRegion, setCurrentRegion] = useState(null);

  useEffect(() => {
    async function loadInitialPosition() {
      const { granted } = await requestPermissionsAsync();

      if (granted) {
        const { coords } = await getCurrentPositionAsync({
          enableHighAccuracy: true,
        });

        const { latitude, longitude } = coords;

        setCurrentRegion({
          latitude,
          longitude,
          latitudeDelta: 0.04,
          longitudeDelta: 0.04,
        });
      }
    }

    loadInitialPosition();
  }, []);

  function NavigateToProfile() {
    navigation.navigate('Profile', { githubUsername: 'henry-ns' });
  }

  return (
    currentRegion && (
      <Container initialRegion={currentRegion}>
        <Marker coordinate={{ latitude: -7.084707, longitude: -35.952778 }}>
          <Avatar uri="https://api.adorable.io/avatars/285/adorable.png" />

          <CalloutView onPress={NavigateToProfile} dev={dev} />
        </Marker>
      </Container>
    )
  );
}

export default Main;
