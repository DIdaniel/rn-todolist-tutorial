import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput
} from 'react-native';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/slices/todoSlice';

export const InputForm = () => {
  /** Property */
  const dispatch = useDispatch();

  const [curValue, setCurValue] = useState('');

  /** Function */
  const handleChange = (e) => {
    setCurValue(e.nativeEvent.text);
  };

  const handleSubmit = () => {
    if (curValue !== '') {
      dispatch(addTodo(curValue));
      setCurValue('');
    }
  };

  /** Render */
  return (
    <KeyboardAvoidingView
      style={styles.addFormContainer}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TextInput
        style={styles.inputField}
        placeholder="Enter your todo list"
        value={curValue}
        onChange={(e) => handleChange(e)}
        onSubmitEditing={handleSubmit}
      />
      <Pressable style={styles.addButton} onPress={handleSubmit}>
        <Text style={styles.addButtonText}>+</Text>
      </Pressable>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  addFormContainer: {
    flexDirection: 'row',
    marginTop: 'auto',
    marginBottom: 30,
    paddingHorizontal: 20,
    backgroundColor: '#F7F8FA'
  },
  inputField: {
    flex: 1,
    height: 42,
    padding: 5,
    marginRight: 25,
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    borderWidth: 1,
    color: '#000000',
    fontSize: 15,
    textAlignVertical: 'center'
  },
  addButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 42,
    height: 42,
    borderRadius: 4,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    shadowColor: '#000000',
    shadowOpacity: 0.14,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 4
    }
  },
  addButtonText: {
    color: '#ffffff',
    fontSize: 25
  }
});
