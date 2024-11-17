import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

interface Transaction {
  id: number;
  date: number;
  description: string;
  amount: number;
  type: "Expense" | "Revenue";
}

interface TransactionListItemProps {
  transaction: Transaction;
}

export default function ExchangeCard({
  transaction,
}: TransactionListItemProps) {
  const color = transaction.type === "Expense" ? "red" : "green";

  return (
    <View style={styles.card}>
      <View style={styles.row}>
        {/* Amount Section */}
        <View style={styles.amountContainer}>
          <Text style={[styles.amount, { color }]}>{transaction.type === "Expense" ? "-" : "+"}${transaction.amount}</Text>
        </View>

        {/* Transaction Info Section */}
        <View style={styles.infoContainer}>
          <Text style={styles.description}>{transaction.description}</Text>
          <Text style={styles.id}>Transaction #{transaction.id}</Text>
          <Text style={styles.date}>{new Date(transaction.date).toDateString()}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        width: Dimensions.get('window').width - 62,
        borderRadius: 6,
        padding: 16,
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
        elevation: 3,
        marginVertical: 8,
        marginHorizontal: 10,
        
      },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  amountContainer: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "space-between",

  },
  amount: {
    fontSize: 22,
    fontWeight: "bold",
    justifyContent: "space-between",

  },
  infoContainer: {
    flex: 2,
    paddingLeft: 16,
    justifyContent: "space-between",

  },
  description: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },
  id: {
    fontSize: 14,
    color: "gray",
  },
  date: {
    fontSize: 12,
    color: "gray",
  },
});