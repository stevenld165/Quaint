import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { Dropdown } from "react-native-element-dropdown";
import { AntDesign } from "@expo/vector-icons";
import { useFonts } from "expo-font";

const Inter = require('../assets/fonts/Inter/static/Inter_18pt-Medium.ttf');
const InterBold = require('../assets/fonts/Inter/static/Inter_18pt-Bold.ttf');
const InterRegular = require('../assets/fonts/Inter/static/Inter-Regular.ttf');

import { getData } from "@/components/Database"

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
  const [monthData, setMonthData] = useState<{
    water: number; id: string; electricity: number; month: number; budget: number; gas: number;
}[] | undefined >([])

  const [value1, setValue1] = useState<string | null>(null);
  const [value2, setValue2] = useState<string | null>(null);
  const [isFocus1, setIsFocus1] = useState(false);
  const [isFocus2, setIsFocus2] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const retMonthData= await getData()
      setMonthData(retMonthData)
  }
  fetchData()
  }, [])

  console.log(monthData)
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
    let month: number = 0;

    // Example data logic based on dropdown selection
    if (selectedQuarter === "1") {
      newLabels = ["Jan", "Feb", "Mar"];
      newData = [20, 30, 40];
      month = 0;
    } 
    else if (selectedQuarter === "2") 
    {
      newLabels = ["Apr", "May", "Jun"];
      newData = [20, 30, 40];
      month = 3;
    } 
    else if (selectedQuarter === "3") 
    {
      newLabels = ["Jul", "Aug", "Sep"];
      newData = [20, 30, 40];
      month = 6;
    } 
    else if (selectedQuarter === "4") 
    {
      newLabels = ["Oct", "Nov", "Dec"];
      newData = [20, 30, 40];
      month = 9;
    } 
    else 
     {
      newLabels = ["Q 1", "Q 2", "Q 3", "Q 4"];
      newData = [30, 40, 50, 32];
      month = 13;
    }

    if (selectedType === "1") {
      if (month != 13 && monthData)
        newData = [monthData[month].water, monthData[month+1].water, monthData[month+2].water];
      else if (monthData)
        newData = [
          (monthData[0].water + monthData[1].water + monthData[2].water )/3,
          (monthData[3].water + monthData[4].water + monthData[5].water )/3,
          (monthData[6].water + monthData[7].water + monthData[8].water )/3,
          (monthData[9].water + monthData[10].water + monthData[11].water )/3
        ];
    } else if (selectedType === "2") {
      if (month != 13 && monthData)
        newData = [monthData[month].electricity, monthData[month+1].electricity, monthData[month+2].electricity];
      else if (monthData)
        newData = [
          (monthData[0].electricity + monthData[1].electricity + monthData[2].electricity )/3,
          (monthData[3].electricity + monthData[4].electricity + monthData[5].electricity )/3,
          (monthData[6].electricity + monthData[7].electricity + monthData[8].electricity )/3,
          (monthData[9].electricity + monthData[10].electricity + monthData[11].electricity )/3
        ];
    } else if (selectedType === "3") {
      if (month != 13 && monthData)
        newData = [monthData[month].gas, monthData[month+1].gas, monthData[month+2].gas];
      else if (monthData)
        newData = [
          (monthData[0].gas + monthData[1].gas + monthData[2].gas )/3,
          (monthData[3].gas + monthData[4].gas + monthData[5].gas )/3,
          (monthData[6].gas + monthData[7].gas + monthData[8].gas )/3,
          (monthData[9].gas + monthData[10].gas + monthData[11].gas )/3
        ];
    } else if (selectedType === "4") {
      if (month != 13 && monthData)
        newData = [
          monthData[month].gas + monthData[month].water + monthData[month].electricity, 
          monthData[month+1].gas + monthData[month+1].water + monthData[month+1].electricity, 
          monthData[month+2].gas + monthData[month+2].water + monthData[month+2].electricity
        ];
      else if (monthData) {
        const sumMonth = (month:number) => {
          return monthData[month].gas + monthData[month].water + monthData[month].electricity;
        }

        newData = [
          (sumMonth(0) + sumMonth(1) + sumMonth(2) )/3,
          (sumMonth(3) + sumMonth(4) + sumMonth(5) )/3,
          (sumMonth(6) + sumMonth(7) + sumMonth(8) )/3,
          (sumMonth(9) + sumMonth(10) + sumMonth(11))/3
        ];
      }
    }
    else if (selectedType === "5")
    {
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
          onDataPointClick={(data) => {console.log(data)}}
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