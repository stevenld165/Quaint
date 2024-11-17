import { ScrollView, StyleSheet, View, Text, Dimensions, SafeAreaView } from "react-native";
import React from "react";
import LineGraph from "@/components/LineGraph";
import StatCard from "@/components/ScrollCard";

const screenWidth = Dimensions.get("window").width;

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.contentContainer} style={styles.scrollView}>
      <SafeAreaView>
        {/* Horizontal ScrollView for cards */}
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
      <View style={styles.list}>
        <Text style={styles.notes}>
          May Notes: yada yada yada yada yada yadadfa
        </Text>
      </View>
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
  list: {
    width: screenWidth - 40,
    padding: 16,
    marginTop: 16,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 8,
  },
  notes: {
    fontWeight: "600",
    fontSize: 15,
    lineHeight: 21,
    color: "black",
  },
});