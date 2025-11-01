import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  Alert,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import BottomNav from '../components/BottomNav';
import { useAuth } from '../contexts/AuthContext';

const connectedAccounts = [
  { id: 'instagram', name: 'Instagram', username: '@sarahjohnson', connected: true },
  { id: 'youtube', name: 'YouTube', username: 'Sarah Johnson', connected: true },
  { id: 'linkedin', name: 'LinkedIn', username: 'Sarah Johnson', connected: true },
  { id: 'tiktok', name: 'TikTok', username: '@sarahj', connected: false },
];

export default function SettingsScreen() {
  const router = useRouter();
  const { logout } = useAuth();
  const [notifications, setNotifications] = React.useState(true);
  const [emailReports, setEmailReports] = React.useState(true);
  const [aiSuggestions, setAiSuggestions] = React.useState(true);

  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Logout',
          style: 'destructive',
          onPress: async () => {
            await logout();
            router.replace('/login' as any);
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Settings</Text>
      </View>

      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Profile Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Profile</Text>
          <View style={styles.profileCard}>
            <View style={styles.avatar}>
              <Ionicons name="person" size={32} color="#a855f7" />
            </View>
            <View style={styles.profileInfo}>
              <Text style={styles.profileName}>Sarah Johnson</Text>
              <Text style={styles.profileEmail}>sarah.johnson@email.com</Text>
            </View>
            <TouchableOpacity>
              <Ionicons name="chevron-forward" size={24} color="#666" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Connected Accounts */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Connected Accounts</Text>
          {connectedAccounts.map((account) => (
            <View key={account.id} style={styles.accountCard}>
              <View style={styles.accountLeft}>
                <View style={styles.accountIcon}>
                  <Ionicons
                    name={`logo-${account.id}` as any}
                    size={24}
                    color="#a855f7"
                  />
                </View>
                <View>
                  <Text style={styles.accountName}>{account.name}</Text>
                  {account.connected && (
                    <Text style={styles.accountUsername}>{account.username}</Text>
                  )}
                </View>
              </View>
              {account.connected ? (
                <View style={styles.connectedBadge}>
                  <Ionicons name="checkmark-circle" size={16} color="#10b981" />
                  <Text style={styles.connectedText}>Connected</Text>
                </View>
              ) : (
                <TouchableOpacity style={styles.connectButton}>
                  <Text style={styles.connectText}>Connect</Text>
                </TouchableOpacity>
              )}
            </View>
          ))}
        </View>

        {/* Plan & Billing */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Plan & Billing</Text>
          <TouchableOpacity style={styles.menuCard}>
            <View style={styles.menuLeft}>
              <View style={styles.menuIcon}>
                <Ionicons name="diamond" size={20} color="#a855f7" />
              </View>
              <View>
                <Text style={styles.menuTitle}>Current Plan</Text>
                <Text style={styles.menuSubtitle}>Pro - $29/month</Text>
              </View>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#666" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuCard}>
            <View style={styles.menuLeft}>
              <View style={styles.menuIcon}>
                <Ionicons name="card" size={20} color="#a855f7" />
              </View>
              <Text style={styles.menuTitle}>Payment Method</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#666" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuCard}>
            <View style={styles.menuLeft}>
              <View style={styles.menuIcon}>
                <Ionicons name="receipt" size={20} color="#a855f7" />
              </View>
              <Text style={styles.menuTitle}>Billing History</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#666" />
          </TouchableOpacity>
        </View>

        {/* Notifications */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Notifications</Text>
          
          <View style={styles.settingCard}>
            <View style={styles.settingLeft}>
              <View style={styles.settingIcon}>
                <Ionicons name="notifications" size={20} color="#a855f7" />
              </View>
              <View>
                <Text style={styles.settingTitle}>Push Notifications</Text>
                <Text style={styles.settingSubtitle}>Get notified about trends and insights</Text>
              </View>
            </View>
            <Switch
              value={notifications}
              onValueChange={setNotifications}
              trackColor={{ false: '#2a2a2a', true: '#a855f7' }}
              thumbColor="#fff"
            />
          </View>

          <View style={styles.settingCard}>
            <View style={styles.settingLeft}>
              <View style={styles.settingIcon}>
                <Ionicons name="mail" size={20} color="#a855f7" />
              </View>
              <View>
                <Text style={styles.settingTitle}>Email Reports</Text>
                <Text style={styles.settingSubtitle}>Weekly analytics summary</Text>
              </View>
            </View>
            <Switch
              value={emailReports}
              onValueChange={setEmailReports}
              trackColor={{ false: '#2a2a2a', true: '#a855f7' }}
              thumbColor="#fff"
            />
          </View>

          <View style={styles.settingCard}>
            <View style={styles.settingLeft}>
              <View style={styles.settingIcon}>
                <Ionicons name="sparkles" size={20} color="#a855f7" />
              </View>
              <View>
                <Text style={styles.settingTitle}>AI Suggestions</Text>
                <Text style={styles.settingSubtitle}>Daily content ideas</Text>
              </View>
            </View>
            <Switch
              value={aiSuggestions}
              onValueChange={setAiSuggestions}
              trackColor={{ false: '#2a2a2a', true: '#a855f7' }}
              thumbColor="#fff"
            />
          </View>
        </View>

        {/* General */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>General</Text>
          
          <TouchableOpacity style={styles.menuCard}>
            <View style={styles.menuLeft}>
              <View style={styles.menuIcon}>
                <Ionicons name="help-circle" size={20} color="#a855f7" />
              </View>
              <Text style={styles.menuTitle}>Help & Support</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#666" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuCard}>
            <View style={styles.menuLeft}>
              <View style={styles.menuIcon}>
                <Ionicons name="document-text" size={20} color="#a855f7" />
              </View>
              <Text style={styles.menuTitle}>Terms & Privacy</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#666" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuCard}>
            <View style={styles.menuLeft}>
              <View style={styles.menuIcon}>
                <Ionicons name="information-circle" size={20} color="#a855f7" />
              </View>
              <Text style={styles.menuTitle}>About</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#666" />
          </TouchableOpacity>
        </View>

        {/* Logout Button */}
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={handleLogout}
          activeOpacity={0.8}
        >
          <Ionicons name="log-out" size={20} color="#ef4444" />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>

        <View style={{ height: 100 }} />
      </ScrollView>

      <BottomNav />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0a',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 20,
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 16,
  },
  profileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#2a2a2a',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'rgba(168, 85, 247, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  profileEmail: {
    fontSize: 14,
    color: '#888',
  },
  accountCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#2a2a2a',
  },
  accountLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  accountIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(168, 85, 247, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  accountName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 4,
  },
  accountUsername: {
    fontSize: 13,
    color: '#888',
  },
  connectedBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(16, 185, 129, 0.1)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    gap: 4,
  },
  connectedText: {
    fontSize: 12,
    color: '#10b981',
    fontWeight: '600',
  },
  connectButton: {
    backgroundColor: '#a855f7',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  connectText: {
    fontSize: 12,
    color: '#fff',
    fontWeight: '600',
  },
  menuCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#2a2a2a',
  },
  menuLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  menuIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(168, 85, 247, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  menuTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#fff',
  },
  menuSubtitle: {
    fontSize: 13,
    color: '#888',
    marginTop: 2,
  },
  settingCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#2a2a2a',
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginRight: 12,
  },
  settingIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(168, 85, 247, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  settingTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 4,
  },
  settingSubtitle: {
    fontSize: 12,
    color: '#888',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#ef4444',
    gap: 8,
  },
  logoutText: {
    fontSize: 16,
    color: '#ef4444',
    fontWeight: '600',
  },
});
