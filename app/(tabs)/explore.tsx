import React from 'react';
import { StyleSheet, ScrollView, View, TouchableOpacity, Text } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import ExchangeCard from "@/components/ExchangeCard";
import BalanceCard from "@/components/BalanceCard";

export default function TabTwoScreen() {
  return (
    <ThemedView style={styles.container}>
      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.contentContainer}>
          {/* Fixed BalanceCard Prop Syntax */}
          <BalanceCard
            summary={{
              RevenueSum: 27042,
              ExpenseSum: 23384,
              IncomeSum: 3658,
            }}
          />

          <ExchangeCard 
            transaction={{
              id: 1,
              date: Date.now(),
              description: "Paid light payment",
              amount: 22342,
              type: "Expense",
            }}
          />

          <ExchangeCard 
            transaction={{
              id: 2,
              date: Date.now(),
              description: "Tenant A paid for Nov",
              amount: 21042,
              type: "Revenue",
            }}
          />

          <ExchangeCard 
            transaction={{
              id: 3,
              date: Date.now(),
              description: "Bi-monthly plumber visit",
              amount: 1042,
              type: "Expense",
            }}
          />

          <ExchangeCard 
            transaction={{
              id: 4,
              date: Date.now(),
              description: "Govt environmental incentive",
              amount: 6000,
              type: "Revenue",
            }}
          />
        </View>
      </ScrollView>

      {/* Floating Action Button */}
      <TouchableOpacity style={styles.fab} onPress={() => alert('FAB Clicked!')}>
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingVertical: 16,
  },
  contentContainer: {
    width: '100%',
    paddingHorizontal: 16,
  },
  fab: {
    position: 'absolute',
    right: 16,
    bottom: 16,
    width: 56,
    height: 56,
    backgroundColor: '#BEE3BA',
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5, // For Android shadow
  },
  fabText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
});