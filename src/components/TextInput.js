import React from 'react';
import { TextInput, View} from 'react-native';

/**
 * to be wrapped with redux-form Field component
 */
export default function RTextInput(props) {
  const {input, meta, ...inputProps } = props;

  return (
    <View>
      <TextInput
        {...inputProps}
        onChangeText={input.onChange}
        onBlur={input.onBlur}
        onFocus={input.onFocus}
        value={input.value}
      />
    </View>
  );
}