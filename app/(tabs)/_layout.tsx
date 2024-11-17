import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

import { Icon } from 'react-native-elements';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet } from '@fortawesome/free-solid-svg-icons';


export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
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
      }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarShowLabel: false,
          title: 'Home',
          tabBarIcon: ({ color }) => <Icon name="home" type='font-awesome' color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => <Icon name="exchange" type='font-awesome' color={color} />,
        }}
      />
      <Tabs.Screen
        name="wallet"
        options={{
          title: 'wallet',
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => <FontAwesomeIcon icon={faWallet} style={{color: color}}/>,
        }}
      />
    </Tabs>
    


    
  );
}
