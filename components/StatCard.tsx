import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  icon: keyof typeof Ionicons.glyphMap;
  isPositive?: boolean;
}

export default function StatCard({ title, value, change, icon, isPositive = true }: StatCardProps) {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#2a2a2a', '#1f1f1f']}
        style={styles.gradient}
      >
        <View style={styles.header}>
          <View style={styles.iconContainer}>
            <Ionicons name={icon} size={20} color="#a855f7" />
          </View>
          <Text style={styles.title}>{title}</Text>
        </View>
        
        <Text style={styles.value}>{value}</Text>
        
        <View style={styles.changeContainer}>
          <Ionicons
            name={isPositive ? 'trending-up' : 'trending-down'}
            size={14}
            color={isPositive ? '#10b981' : '#ef4444'}
          />
          <Text style={[styles.change, isPositive ? styles.positive : styles.negative]}>
            {change}
          </Text>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minWidth: 150,
    margin: 6,
  },
  gradient: {
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#333',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  iconContainer: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: 'rgba(168, 85, 247, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  title: {
    fontSize: 13,
    color: '#888',
    fontWeight: '500',
  },
  value: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  changeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  change: {
    fontSize: 12,
    fontWeight: '600',
    marginLeft: 4,
  },
  positive: {
    color: '#10b981',
  },
  negative: {
    color: '#ef4444',
  },
});
