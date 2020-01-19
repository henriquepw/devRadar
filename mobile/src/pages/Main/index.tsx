import React, { FC, useEffect, useState } from 'react';
import { Region } from 'react-native-maps';
import { NavigationStackProp } from 'react-navigation-stack';

import {
  requestPermissionsAsync,
  getCurrentPositionAsync,
} from 'expo-location';

import Markers from '~/components/Markers';
import SearchForm from '~/components/SearchForm';

import { DevProvider } from '~/context/DevContext';

import { Container } from './styles';

interface Props {
  navigation: NavigationStackProp;
}

const Main: FC<Props> = ({ navigation }) => {
  const [currentRegion, setCurrentRegion] = useState<Region>(null);

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

  function handleRegionChanged(region: Region) {
    setCurrentRegion(region);
  }

  function NavigateToProfile(githubUsername: string) {
    navigation.navigate('Profile', { githubUsername });
  }

  return (
    <DevProvider>
      <Container
        onRegionChangeComplete={handleRegionChanged}
        initialRegion={currentRegion}
      >
        <Markers navigate={NavigateToProfile} />
      </Container>
      <SearchForm
        latitude={currentRegion?.latitude}
        longitude={currentRegion?.longitude}
      />
    </DevProvider>
  );
};

export default Main;
