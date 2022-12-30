import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import Svg, { Path, Rect } from 'react-native-svg';

export const LoginScreen = () => {
  /** Property */
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  /** Function */
  const handleLogin = async () => {};

  const handleSignup = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.log('signUp Error >> ', err.message);
    }
  };

  /** Render */
  return (
    <View style={styles.container}>
      <Svg width={24} height={24} fill="#000">
        <Path
          d="M2 3.75A.75.75 0 012.75 3h.5a.75.75 0 010 1.5h-.5A.75.75 0 012 3.75zm4 0A.75.75 0 016.75 3h6.5a.75.75 0 010 1.5h-6.5A.75.75 0 016 3.75zm-4 4A.75.75 0 012.75 7h.5a.75.75 0 010 1.5h-.5A.75.75 0 012 7.75zm4 0A.75.75 0 016.75 7h6.5a.75.75 0 010 1.5h-6.5A.75.75 0 016 7.75zm-4 4a.75.75 0 01.75-.75h.5a.75.75 0 010 1.5h-.5a.75.75 0 01-.75-.75zm4 0a.75.75 0 01.75-.75h6.5a.75.75 0 010 1.5h-6.5a.75.75 0 01-.75-.75z"
          strokeWidth={5}
        />
      </Svg>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          secureTextEntry={true}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.buttonOutline]}
          onPress={handleSignup}
        >
          <Text style={styles.buttonOutlineText}>Signup</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputContainer: {
    width: '80%',
    marginTop: 15
  },
  input: {
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5
  },
  buttonContainer: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30
  },
  button: {
    backgroundColor: '#000',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center'
  },
  buttonOutline: {
    backgroundColor: '#fff',
    marginTop: 5,
    borderColor: '#000',
    borderWidth: 1
  },
  buttonText: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 16
  },
  buttonOutlineText: {
    color: '#000',
    fontWeight: '500',
    fontSize: 16
  }
});
