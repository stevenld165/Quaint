import { ScrollView, StyleSheet, View, Text, Dimensions, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
//import LineGraph from "@/components/LineGraph";
//import StatCard from "@/components/ScrollCard";

import LineGraph from "@/components/LineGraph";
import StatCard from "@/components/ScrollCard";
import TestChart from "@/components/piechart";

const screenWidth = Dimensions.get("window").width;

import { getData, getMonthSentences } from "@/components/Database"

export default function HomeScreen() {
  const [monthData, setMonthData] = useState<{
    water: number; id: string; electricity: number; month: number; budget: number; gas: number;
}[] | undefined >([])


  useEffect(() => {
    const fetchData = async () => {
      const retMonthData= await getData();
      setMonthData(retMonthData);
  }
  fetchData()
  }, [])

  
  

  const sumMonth = (month:number) => {
    if (monthData)
      return monthData[month].gas + monthData[month].water + monthData[month].electricity;
    else
      return 0;
  }

  

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
            value={"$" + (monthData?.length == 12 ? (sumMonth(11)+sumMonth(10)+sumMonth(9)+sumMonth(8)+sumMonth(7)+sumMonth(6)+sumMonth(5)+sumMonth(4)+sumMonth(3)+sumMonth(2)+sumMonth(1)+sumMonth(0)) : 0) + ""}
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
      <TestChart />
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