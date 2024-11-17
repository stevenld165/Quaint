import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';
import { ScreenWidth } from 'react-native-elements/dist/helpers';
import PieChart from 'react-native-pie-chart';

export default class TestChart extends Component {
  render() {
    const widthAndHeight = 250;
    const series = [123, 321, 123];
    const sliceColor = ['#90e2a9', '#90c0e2', '#e2d890']; // Dark green, dark blue, and tan
    const labels = ['Water', 'Electricity', 'Gas']; // Updated labels for the legend

    return (
      <View style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.card}>
            <Text style={styles.title}>Monthly Summary</Text>
            <PieChart
              widthAndHeight={widthAndHeight}
              series={series}
              sliceColor={sliceColor}
            />
            {/* Legend Section */}
            <View style={styles.legendContainer}>
              {labels.map((label, index) => (
                <View key={index} style={styles.legendItem}>
                  <View
                    style={[
                      styles.legendColorBox,
                      { backgroundColor: sliceColor[index] },
                    ]}
                  />
                  <Text style={styles.legendText}>{label}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </View>
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
  legendContainer: {
    marginTop: 20,
    alignItems: 'flex-start',
    width: '100%',
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  legendColorBox: {
    width: 20,
    height: 20,
    marginRight: 10,
    borderRadius: 5, // Adds rounded corners to the color box
  },
  legendText: {
    fontSize: 16,
    color: '#333',
  },
});