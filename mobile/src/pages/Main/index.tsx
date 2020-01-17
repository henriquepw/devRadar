import React, { FC, useEffect, useState } from 'react';
import { Marker, Region } from 'react-native-maps';
import { NavigationStackProp } from 'react-navigation-stack';

import {
  requestPermissionsAsync,
  getCurrentPositionAsync,
} from 'expo-location';

import Avatar from '~/atoms/Avatar';

import CalloutView from '~/molecules/CalloutView';
import SearchForm from '~/molecules/SearchForm';

import api from '~/services/api';

import { Container } from './styles';

interface Props {
  navigation: NavigationStackProp;
}

const Main: FC<Props> = ({ navigation }) => {
  const [devs, setDevs] = useState([]);
  const [currentRegion, setCurrentRegion] = useState(null);
  const [techs, setTechs] = useState('');

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

  async function loadDevs() {
    const { latitude, longitude } = currentRegion;

    const response = await api.get('/search', {
      params: { latitude, longitude, techs },
    });

    setDevs(response.data.devs);
  }

  function handleRegionChanged(region: Region) {
    setCurrentRegion(region);
  }

  function NavigateToProfile() {
    navigation.navigate('Profile', { githubUsername: 'henry-ns' });
  }

  return (
    currentRegion && (
      <>
        <Container
          onRegionChangeComplete={handleRegionChanged}
          initialRegion={currentRegion}
        >
          {devs.map(dev => (
            <Marker
              key={dev._id}
              coordinate={{
                longitude: dev.location.coordinates[0],
                latitude: dev.location.coordinates[1],
              }}
            >
              <Avatar uri={dev.avatar_url} />
              <CalloutView onPress={NavigateToProfile} dev={dev} />
            </Marker>
          ))}
        </Container>
        <SearchForm onPress={loadDevs} />
      </>
    )
  );
}

export default Main;
