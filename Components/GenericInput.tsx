import React, { useState, useEffect } from 'react';
import { TextInput, StyleSheet, View, Text } from 'react-native';

interface Props {
  placeholder: string;
  onInputChange: (value: string) => void;
  validation?: (value: string) => boolean;
}

const GenericInput: React.FC<Props> = ({ placeholder, onInputChange, validation }) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [isValid, setIsValid] = useState<boolean>(true);

  useEffect(() => {
    if (validation) {
      setIsValid(validation(inputValue));
    }
  }, [inputValue, validation]);

  const onChangeText = (text: string) => {
    setInputValue(text);
    onInputChange(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, !isValid && inputValue !== "" && styles.invalidInput]}
        placeholder={placeholder}
        value={inputValue}
        onChangeText={onChangeText}
        keyboardType="numeric"
        maxLength={3}
      />
      {!isValid && inputValue !== "" &&<Text style={styles.errorText}>Valor Invalido</Text>}
    </View>
  );
};


export default GenericInput;

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  input: {
    borderBottomWidth: 1,
    paddingVertical: 8,
  },
  invalidInput: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    marginTop: 4,
  },
});
