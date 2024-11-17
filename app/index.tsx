import { StyleSheet, TextInput } from 'react-native';
import { router } from 'expo-router';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { useState } from 'react';
import React from 'react';

export default function LoginScreen() {
  const [showForm, setShowForm] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passkey, setPasskey] = useState('');

  const handleLogin = () => {
    if (showForm) {
      router.replace('/(tabs)/dashboard');
    } else {
      setShowForm(true);
    }
  };

  if (!showForm) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        
        <View style={styles.content}>
          <Text style={styles.title}>Quaint</Text>
          
          <Text style={styles.subtitle}>
            Welcome to Quaint, your clean and simple{'\n'}
            dashboard for managing all properties and assets!
          </Text>

          <TouchableOpacity 
            style={styles.loginButton}
            onPress={handleLogin}
          >
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>

          <Text style={styles.continueText}>Continue with</Text>
          <View style={styles.socialButtons}>
            <TouchableOpacity
              style={styles.socialButton}
              onPress={() => setShowForm(true)}
              accessible={true}
              accessibilityLabel="Login with Google"
            />
            <TouchableOpacity
              style={styles.socialButton}
              onPress={() => setShowForm(true)}
              accessible={true}
              accessibilityLabel="Login with Facebook"
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      <View style={styles.formContent}>
        <Text style={styles.title}>Quaint</Text>
        
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          
          <Text style={styles.orText}>Or</Text>
          
          <Text style={styles.label}>Passkey</Text>
          <TextInput
            style={styles.input}
            value={passkey}
            onChangeText={setPasskey}
          />

          <TouchableOpacity 
            style={[styles.loginButton, { marginTop: 20 }]}
            onPress={handleLogin}
          >
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
} 


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  formContent: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
    lineHeight: 22,
    marginBottom: 40,
  },
  inputContainer: {
    width: '100%',
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 16,
    color: '#000',
    marginBottom: 8,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 20,
  },
  orText: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
    marginVertical: 16,
  },
  loginButton: {
    backgroundColor: '#E1F5E9',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    width: '100%',
    alignItems: 'center',
    marginBottom: 30,
  },
  loginButtonText: {
    fontSize: 16,
    color: '#000',
  },
  continueText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 15,
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
  },
  socialButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#EAEAEA',
  },
});