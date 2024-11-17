import { ScrollView, StyleSheet, View, Text, Dimensions, SafeAreaView } from "react-native";
import React from "react";
//import LineGraph from "@/components/LineGraph";
//import StatCard from "@/components/ScrollCard";

import LineGraph from "@/components/LineGraph";
import StatCard from "@/components/ScrollCard";

const screenWidth = Dimensions.get("window").width;

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.contentContainer} style={styles.scrollView}>
      <SafeAreaView>
        <ScrollView 
          horizontal 
          contentContainerStyle={styles.cardsContainer}
          showsHorizontalScrollIndicator={false}
        >
          <StatCard
            title="Total Energy Used"
            value="$45,678.90"
            change="+20%"
            changeDescription="month over month"
          />
          <StatCard
            title="Energy Saved"
            value="$12,345.67"
            change="+10%"
            changeDescription="month over month"
          />
          <StatCard
            title="Current Usage"
            value="$78.90"
            change="+5%"
            changeDescription="day over day"
          />
        </ScrollView>
      </SafeAreaView>
      <LineGraph />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1, // Ensure it takes up the full screen
    backgroundColor: "#FFFFFF", // White background for the entire screen
  },
  contentContainer: {
    padding: 16,
    width: "100%",
    backgroundColor: "#FFFFFF", // Background color for the content area
  },
  cardsContainer: {
    flexDirection: "row", // Arrange cards in a row
    paddingVertical: 16,
    gap: 8, // Add spacing between cards
  },
  
});