import React, { useState } from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { Dropdown } from "react-native-element-dropdown";
import { AntDesign } from "@expo/vector-icons";
import { useFonts } from "expo-font";

const Inter = require('../assets/fonts/Inter/static/Inter_18pt-Medium.ttf');
const InterBold = require('../assets/fonts/Inter/static/Inter_18pt-Bold.ttf');
const InterRegular = require('../assets/fonts/Inter/static/Inter-Regular.ttf');

const screenWidth = Dimensions.get("window").width;

// Dropdown data
const dropQ = [
  { label: "Quarter 1", value: "1" },
  { label: "Quarter 2", value: "2" },
  { label: "Quarter 3", value: "3" },
  { label: "Quarter 4", value: "4" },
  { label: "Year", value: "5" },
];

const dropType = [
  { label: "Water", value: "1" },
  { label: "Electricity", value: "2" },
  { label: "Gas", value: "3" },
  { label: "All", value: "4" },
];

const LineGraph = () => {
  const [value1, setValue1] = useState<string | null>(null);
  const [value2, setValue2] = useState<string | null>(null);
  const [isFocus1, setIsFocus1] = useState(false);
  const [isFocus2, setIsFocus2] = useState(false);

  // State for dynamic chart data
  const [chartData, setChartData] = useState({
    labels: ["Apr", "May", "Jun"], // Initial X-axis labels
    datasets: [
      {
        data: [30, 40, 50], // Initial Y-axis data points
        color: (opacity = 1) => `rgba(45, 110, 255, ${opacity})`,
        strokeWidth: 2,
      },
    ],
  });

  const Dot = ({ onClick }) => (
    <div
      style={{
        width: "20px",
        height: "20px",
        borderRadius: "50%",
        backgroundColor: "#FFFFFF",
        border: "2px solid #FFFFFF",
        display: "inline-block",
        cursor: "pointer",
      }}
      onClick={onClick}
    />
  );

  // Function to update chart data
  const updateChartData = (selectedQuarter: string | null, selectedType: string | null) => {
    let newLabels: string[] = [];
    let newData: number[] = [];

    // Example data logic based on dropdown selection
    if (selectedQuarter === "1") {
      newLabels = ["Jan", "Feb", "Mar"];
      newData = [20, 30, 40];
    } else if (selectedQuarter === "2") {
      newLabels = ["Apr", "May", "Jun"];
      newData = [20, 30, 40];
    } else if (selectedQuarter === "3") {
      newLabels = ["Jul", "Aug", "Sep"];
      newData = [20, 30, 40];
    } else if (selectedQuarter === "4") {
      newLabels = ["Oct", "Nov", "Dec"];
      newData = [20, 30, 40];
    } else {
      newLabels = ["Q1", "Q2", "Q3", "Q4"];
      newData = [30, 40, 50, 32];
    }

    if (selectedType === "1") {
      newData = [20, 30, 40];
    } else if (selectedType === "2") {
      newData = [23, 34, 40];
    } else if (selectedType === "3") {
      newData = [27, 38, 36];
    } else if (selectedType === "4") {
      newData = [32, 31, 35];
    } else if (selectedType === "5") {
      newData = [30, 40, 50, 32];
    }

    // Update chart data
    setChartData({
      labels: newLabels,
      datasets: [
        {
          data: newData,
          color: (opacity = 1) => `rgba(45, 110, 255, ${opacity})`,
          strokeWidth: 2,
        },
      ],
    });
  };
  
  return (
    <View style={styles.container}>
      {/* Dropdowns in a row */}
      <View style={styles.row}>
        <Dropdown
          style={[styles.dropdown, isFocus1 && { borderColor: "blue" }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          data={dropQ}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus1 ? "Select Quarter" : "..."}
          value={value1}
          onFocus={() => setIsFocus1(true)}
          onBlur={() => setIsFocus1(false)}
          onChange={(item) => {
            setValue1(item.value);
            updateChartData(item.value, value2); // Update chart based on selection
          }}
          renderRightIcon={() => (
            <AntDesign
              name={isFocus1 ? "up" : "down"}
              size={16}
              color="gray"
            />
          )}
        />
        <Dropdown
          style={[styles.dropdown, isFocus2 && { borderColor: "blue" }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          data={dropType}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus2 ? "Select Type" : "..."}
          value={value2}
          onFocus={() => setIsFocus2(true)}
          onBlur={() => setIsFocus2(false)}
          onChange={(item) => {
            setValue2(item.value);
            updateChartData(value1, item.value); // Update chart based on selection
          }}
          renderRightIcon={() => (
            <AntDesign
              name={isFocus2 ? "up" : "down"}
              size={16}
              color="gray"
            />
          )}
        />
      </View>
      <View style={styles.card}>
        {/* Title */}
        <Text style={styles.title}>Energy Usage in Dollars</Text>

        {/* Chart */}
        <LineChart
          data={chartData}
          width={screenWidth - 80}
          height={220}
          chartConfig={{
            backgroundGradientFrom: "#FFFFFF",
            backgroundGradientTo: "#FFFFFF",
            color: (opacity = 1) => `rgba(45, 110, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(51, 51, 51, ${opacity})`,
            fillShadowGradient: "rgba(45, 110, 255, 0.15)",
            fillShadowGradientOpacity: 1,
            propsForDots: {
              r: "10",
              strokeWidth: "2",
              stroke: "#FFFFFF",
            },
            propsForLabels:{
              fontFamily: InterRegular,
            },
          
          }}
          withInnerLines={false}
          withOuterLines={false}
          style={styles.chart}
        />
      </View>
      <View style={styles.list}>
        <Text style={styles.notes}>
          May Notes: yada yada yada yada yada yadadfa
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: screenWidth - 40,
    marginBottom: 16,
  },
  card: {
    width: screenWidth - 40,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "gray",
    padding: 16,
  },
  dropdown: {
    height: 50,
    width: screenWidth / 2 - 30,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 30,
    paddingHorizontal: 12,
  },
  placeholderStyle: {
    fontSize: 16,
    fontFamily: Inter,
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
  selectedTextStyle: {
    fontSize: 16,
    fontFamily: Inter,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    fontFamily: InterBold,
    color: "#000",
    textAlign: "center",
    marginBottom: 16,
  },
  chart: {
    borderRadius: 8,
    fontFamily: Inter,
  },
});

export default LineGraph;