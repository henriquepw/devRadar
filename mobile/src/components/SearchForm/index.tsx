import React, { FC, useContext, useState } from 'react';

import { Feather } from '@expo/vector-icons';

import DevContext from '~/context/DevContext';

import { primaryColor } from '~/styles/colors';
import { Container, LoadButton, SearchInput } from './styles';

interface Props {
  latitude: number;
  longitude: number;
}

const SearchForm: FC<Props> = ({ latitude, longitude }) => {
  const { loadDevs } = useContext(DevContext);
  const [techs, setTechs] = useState('');

  function handlePress() {
    console.log('handlePress', { latitude, longitude, techs });
    loadDevs({ latitude, longitude, techs });
  }

  return (
    <Container>
      <SearchInput
        value={techs}
        onChangeText={setTechs}
        placeholder="Find dev by techs"
        placeholderTextColor="#999"
        autoCapitalize="words"
        autoCorrect={false}
      />
      <LoadButton onPress={handlePress}>
        <Feather name="arrow-right" size={24} color={primaryColor.text} />
      </LoadButton>
    </Container>
  );
};

export default SearchForm;
