import React, { FC, useState } from 'react';
import { Feather } from '@expo/vector-icons';

import SearchInput from '~/atoms/SearchInput';
import LoadButton from '~/atoms/LoadButton';

import { primaryColor } from '~/styles/colors';
import { Container } from './styles';

interface Props {
  onPress(): void;
}

const SearchForm: FC<Props> = ({ onPress }) => {
  const [techs, setTechs] = useState('');

  return (
    <Container>
      <SearchInput
        placeholder="Find dev by techs"
        value={techs}
        onChangeText={setTechs}
      />
      <LoadButton onPress={onPress}>
        <Feather name="arrow-right" size={24} color={primaryColor.text} />
      </LoadButton>
    </Container>
  );
};

export default SearchForm;
