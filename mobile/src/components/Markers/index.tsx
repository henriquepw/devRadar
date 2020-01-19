import React, { FC, useContext } from 'react';
import { Marker } from 'react-native-maps';

import CalloutView from '~/components/CalloutView';

import DevContext from '~/context/DevContext';

import { Avatar } from './styles';

interface Props {
  navigate(username: string): void;
}

const Markers: FC<Props> = ({ navigate }) => {
  const { devs } = useContext(DevContext);

  return (
    <>
      {devs.map(dev => (
        <Marker
          key={dev._id}
          coordinate={{
            longitude: dev.location.coordinates[0],
            latitude: dev.location.coordinates[1],
          }}
        >
          <Avatar source={{ uri: dev.avatar_url }} />
          <CalloutView
            onPress={() => navigate(dev.github_username)}
            dev={dev}
          />
        </Marker>
      ))}
    </>
  );
};

export default Markers;
