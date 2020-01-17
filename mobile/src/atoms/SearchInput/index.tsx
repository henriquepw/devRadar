import React, { FC } from 'react';

import { Container } from './styles';

interface Props {
  placeholder: string;
  value: string;
  onChangeText(text: string): void;
}

const SearchInput: FC<Props> = ({ placeholder, value, onChangeText }) => {
  return (
    <Container
      autoCorrect={false}
      autoCapitalize="words"
      placeholderTextColor="#999"
      value={value}
      placeholder={placeholder}
      onChangeText={onChangeText}
    />
  );
};

export default SearchInput;
