import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, View, Text, Image, StyleSheet } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

import { Icon } from 'react-native-elements';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet } from '@fortawesome/free-solid-svg-icons';

// Top Bar Component
const TopBar = () => {
  return (
    <View style={styles.topBar}>
      <View style={styles.profileSection}>
        <Text style={styles.quaintText}>Quaint</Text>
        <View style={styles.profileImageWrapper}>
          <Image
            source={require('@/assets/images/react-logo.png')} // Use the correct local image path
            style={styles.profileImage}
          />
        </View>
      </View>
    </View>
  );
};



export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <>
      {/* Add TopBar at the top */}
      <TopBar />
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
          headerShown: false,
          tabBarButton: HapticTab,
          tabBarBackground: TabBarBackground,
          tabBarStyle: Platform.select({
            ios: {
              // Use a transparent background on iOS to show the blur effect
              position: 'absolute',
            },
            default: {},
          }),
        }}
      >
        <Tabs.Screen
          name="dashboard"
          options={{
            tabBarShowLabel: false,
            title: 'Home',
            tabBarIcon: ({ color }) => <Icon name="home" type="font-awesome" color={color} />,
          }}
        />
        <Tabs.Screen
          name="explore"
          options={{
            title: 'Explore',
            tabBarShowLabel: false,
            tabBarIcon: ({ color }) => <Icon name="exchange" type="font-awesome" color={color} />,
          }}
        />
        <Tabs.Screen
          name="wallet"
          options={{
            title: 'wallet',
            tabBarShowLabel: false,
            tabBarIcon: ({ color }) => <FontAwesomeIcon icon={faWallet} style={{ color }} />,
          }}
        />
      </Tabs>
    </>
  );
}

// Styles
// Updated Styles
const styles = StyleSheet.create({
  topBar: {
    paddingHorizontal: 16,
    paddingTop: 18,
    paddingBottom: 16,
    backgroundColor: '#fff', // Match your theme
    borderBottomWidth: 1,
    borderBottomColor: '#eaeaea',
    flexDirection: 'row',
    justifyContent: 'space-between', // Space between left and right content
    alignItems: 'center',
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1, // Takes up available space
  },
  quaintText: {
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1, // Pushes the image to the right
    color: '#014421'
  },
  profileImageWrapper: {
    justifyContent: 'flex-end',
    flexDirection: 'row', // Ensures the profile image aligns to the right
    flex: 1,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});