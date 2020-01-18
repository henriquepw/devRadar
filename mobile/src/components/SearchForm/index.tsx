import React, { FC, useContext, useState } from 'react';
import { Feather } from '@expo/vector-icons';

import SearchInput from '~/components/SearchInput';
import LoadButton from '~/components/LoadButton';

import { primaryColor } from '~/styles/colors';
import { Container } from './styles';

import DevContext from '~/context/DevContext';

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
        placeholder="Find dev by techs"
        value={techs}
        onChangeText={setTechs}
      />
      <LoadButton onPress={handlePress}>
        <Feather name="arrow-right" size={24} color={primaryColor.text} />
      </LoadButton>
    </Container>
  );
};

export default SearchForm;
