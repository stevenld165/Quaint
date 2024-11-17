import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';
import { ScreenWidth } from 'react-native-elements/dist/helpers';
import PieChart from 'react-native-pie-chart';

export default class TestChart extends Component {
  render() {
    const widthAndHeight = 250;
    const series = [123, 321, 123];
    const sliceColor = ['#004d40', '#1a237e', '#d2b48c']; // Dark green, dark blue, and tan

    return (
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.card}>
            <Text style={styles.title}>Monthly Summary</Text>
            <PieChart widthAndHeight={widthAndHeight} series={series} sliceColor={sliceColor} />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 5, // For Android shadow
    padding: 20,
    alignItems: 'center',
    width: ScreenWidth - 40,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
});