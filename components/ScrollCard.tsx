import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const StatCard = ({ title, value, change, changeDescription }: StatCardProps) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.change}>{change}</Text>
      <Text style={styles.changeDescription}>{changeDescription}</Text>
    </View>
  );
};

type StatCardProps = {
  title: string;
  value: string;
  change: string;
  changeDescription: string;
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    width: Dimensions.get('window').width - 92,
    borderRadius: 6,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    marginVertical: 8,
    marginHorizontal: 10,
    
  },
  title: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
  },
  value: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  change: {
    fontSize: 14,
    color: '#2e7d32', // Green color for positive change
    marginTop: 4,
  },
  changeDescription: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
});

export default StatCard;