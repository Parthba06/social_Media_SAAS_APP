import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { useAuth } from '../contexts/AuthContext';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen() {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Logout',
          style: 'destructive',
          onPress: async () => {
            await logout();
            router.replace('/welcome');
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header with Greeting */}
        <View style={styles.header}>
          <Text style={styles.greeting}>Good morning,</Text>
          <Text style={styles.userName}>{user?.name || 'User'}!</Text>
          <TouchableOpacity style={styles.settingsButton} onPress={handleLogout}>
            <Text style={styles.settingsIcon}>⚙️</Text>
          </TouchableOpacity>
        </View>

        {/* Progress Circle Card */}
        <LinearGradient
          colors={['#e8f5e9', '#f1f8e9']}
          style={styles.progressCard}
        >
          <Text style={styles.progressTitle}>Keep up your</Text>
          <Text style={styles.progressSubtitle}>daily routine and</Text>
          <Text style={styles.progressSubtitle}>you&apos;ll shine!</Text>
          
          <View style={styles.circleContainer}>
            <View style={styles.progressCircle}>
              <Text style={styles.progressPercentage}>75%</Text>
            </View>
          </View>
        </LinearGradient>

        {/* Today's Plan Section */}
        <View style={styles.planSection}>
          <View style={styles.planHeader}>
            <Text style={styles.planTitle}>Today&apos;s plan</Text>
            <Text style={styles.planTime}>(7 Min)</Text>
            <TouchableOpacity>
              <Text style={styles.editButton}>Edit</Text>
            </TouchableOpacity>
          </View>

          {/* Plan Items */}
          <View style={styles.planItem}>
            <View style={styles.planIcon}>
              <Text style={styles.planEmoji}>📊</Text>
            </View>
            <View style={styles.planContent}>
              <Text style={styles.planItemTitle}>Check analytics dashboard</Text>
              <Text style={styles.planItemTag}>ANALYTICS</Text>
            </View>
          </View>

          <View style={styles.planItem}>
            <View style={styles.planIcon}>
              <Text style={styles.planEmoji}>📈</Text>
            </View>
            <View style={styles.planContent}>
              <Text style={styles.planItemTitle}>Review engagement metrics</Text>
              <Text style={styles.planItemTag}>ENGAGEMENT</Text>
            </View>
          </View>

          <View style={styles.planItem}>
            <View style={styles.planIcon}>
              <Text style={styles.planEmoji}>🎯</Text>
            </View>
            <View style={styles.planContent}>
              <Text style={styles.planItemTitle}>Track trending content</Text>
              <Text style={styles.planItemTag}>TRENDS</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    paddingTop: 60,
  },
  header: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  greeting: {
    fontSize: 16,
    color: '#666',
    marginBottom: 4,
  },
  userName: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1a1a1a',
  },
  settingsButton: {
    position: 'absolute',
    top: 0,
    right: 24,
  },
  settingsIcon: {
    fontSize: 24,
  },
  progressCard: {
    marginHorizontal: 24,
    borderRadius: 24,
    padding: 32,
    marginBottom: 32,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 8,
  },
  progressTitle: {
    fontSize: 20,
    color: '#2e7d32',
    fontWeight: '600',
  },
  progressSubtitle: {
    fontSize: 20,
    color: '#2e7d32',
    fontWeight: '300',
  },
  circleContainer: {
    alignItems: 'center',
    marginTop: 24,
  },
  progressCircle: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 12,
    borderColor: '#66bb6a',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  progressPercentage: {
    fontSize: 32,
    fontWeight: '700',
    color: '#2e7d32',
  },
  planSection: {
    paddingHorizontal: 24,
    marginBottom: 32,
  },
  planHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  planTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1a1a1a',
  },
  planTime: {
    fontSize: 14,
    color: '#999',
    marginLeft: 8,
  },
  editButton: {
    fontSize: 16,
    color: '#4a90e2',
    marginLeft: 'auto',
    fontWeight: '600',
  },
  planItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  planIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  planEmoji: {
    fontSize: 24,
  },
  planContent: {
    flex: 1,
  },
  planItemTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  planItemTag: {
    fontSize: 11,
    color: '#999',
    fontWeight: '600',
    letterSpacing: 0.5,
  },
});
