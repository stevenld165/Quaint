import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

interface TransactionSummary {
  RevenueSum: number;
  ExpenseSum: number;
  IncomeSum: number;
}

const BalanceCard = ({ summary }: { summary: TransactionSummary }) => {

    const currentDate = new Date();
  const month = currentDate.toLocaleString("default", { month: "long" }); // Full month name
  const year = currentDate.getFullYear();

  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{`${month} ${year} Summary`}</Text>

        {/* Revenueeee Section */} 
      <View style={styles.row}>
        <Text style={styles.label}>Revenue:</Text>
        <Text style={styles.value}>${summary.RevenueSum}</Text>
      </View>

      {/* Expense Section */}
      <View style={styles.row}>
        <Text style={styles.label}>Expenses:</Text>
        <Text style={styles.value}>${summary.ExpenseSum}</Text>
      </View>

      {/* Income Section */}
      <View style={styles.row}>
        <Text style={styles.incomeLabel}>Net Income:</Text>
        <Text style={styles.incomeValue}>${summary.IncomeSum}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    width: Dimensions.get("window").width - 62,
    borderRadius: 6,
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    marginVertical: 8,
    marginHorizontal: 10,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "gray",
  },

  incomeLabel: {
    fontSize: 16,
    fontWeight: "800",
    color: "black",
  },
  value: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },

  incomeValue: {
    fontSize: 16,
    fontWeight: "bold",
    color: "green",
  },
});

export default BalanceCard;