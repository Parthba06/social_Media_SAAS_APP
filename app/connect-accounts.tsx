import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useAuth } from '../contexts/AuthContext';

const socialPlatforms = [
  { 
    id: 'instagram', 
    name: 'Instagram', 
    icon: 'logo-instagram', 
    color: '#E4405F',
    description: 'Connect your Instagram account',
  },
  { 
    id: 'youtube', 
    name: 'YouTube', 
    icon: 'logo-youtube', 
    color: '#FF0000',
    description: 'Connect your YouTube channel',
  },
  { 
    id: 'linkedin', 
    name: 'LinkedIn', 
    icon: 'logo-linkedin', 
    color: '#0077B5',
    description: 'Connect your LinkedIn profile',
  },
  { 
    id: 'tiktok', 
    name: 'TikTok', 
    icon: 'logo-tiktok', 
    color: '#000000',
    description: 'Connect your TikTok account',
  },
  { 
    id: 'twitter', 
    name: 'X (Twitter)', 
    icon: 'logo-twitter', 
    color: '#1DA1F2',
    description: 'Connect your X account',
  },
  { 
    id: 'facebook', 
    name: 'Facebook', 
    icon: 'logo-facebook', 
    color: '#1877F2',
    description: 'Connect your Facebook page',
  },
];

export default function ConnectAccountsScreen() {
  const router = useRouter();
  const { user, connectAccount } = useAuth();
  const [connecting, setConnecting] = useState<string | null>(null);

  const handleConnectAccount = async (platformId: string, platformName: string) => {
    if (!user?.hasSubscription) {
      Alert.alert(
        'Subscription Required',
        'Please select a subscription plan before connecting social accounts.',
        [
          { text: 'OK', onPress: () => router.back() }
        ]
      );
      return;
    }

    setConnecting(platformId);
    
    // Simulate OAuth connection
    setTimeout(async () => {
      await connectAccount(platformId);
      setConnecting(null);
      Alert.alert(
        'Success!',
        `${platformName} account connected successfully.`
      );
    }, 1500);
  };

  const handleContinue = () => {
    if (!user?.connectedAccounts || user.connectedAccounts.length === 0) {
      Alert.alert(
        'Connect at least one account',
        'Please connect at least one social media account to continue.',
        [{ text: 'OK' }]
      );
      return;
    }

    router.replace('/dashboard' as any);
  };

  const handleSkipForNow = () => {
    Alert.alert(
      'Skip Account Connection?',
      'You can connect your accounts later from settings. However, you won\'t be able to use most features without connected accounts.',
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Skip Anyway', 
          style: 'destructive',
          onPress: () => router.replace('/dashboard' as any)
        }
      ]
    );
  };

  const isConnected = (platformId: string) => {
    return user?.connectedAccounts?.includes(platformId) || false;
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Connect Accounts</Text>
        <TouchableOpacity onPress={handleSkipForNow}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.content}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
        {/* Info Section */}
        <View style={styles.infoSection}>
          <View style={styles.iconCircle}>
            <Ionicons name="link" size={32} color="#a855f7" />
          </View>
          <Text style={styles.title}>Connect Your Social Accounts</Text>
          <Text style={styles.subtitle}>
            Connect your social media accounts to start managing all your content in one place
          </Text>
          
          {user?.subscriptionPlan && (
            <View style={styles.planBadge}>
              <Ionicons name="checkmark-circle" size={16} color="#10b981" />
              <Text style={styles.planText}>
                {user.subscriptionPlan.toUpperCase()} Plan Active
              </Text>
            </View>
          )}
        </View>

        {/* Platforms Grid */}
        <View style={styles.platformsContainer}>
          {socialPlatforms.map((platform) => {
            const connected = isConnected(platform.id);
            const isConnecting = connecting === platform.id;

            return (
              <TouchableOpacity
                key={platform.id}
                style={[
                  styles.platformCard,
                  connected && styles.platformCardConnected,
                ]}
                onPress={() => !connected && handleConnectAccount(platform.id, platform.name)}
                disabled={connected || isConnecting}
                activeOpacity={0.7}
              >
                <View style={[styles.platformIcon, { backgroundColor: `${platform.color}20` }]}>
                  <Ionicons 
                    name={platform.icon as any} 
                    size={32} 
                    color={platform.color} 
                  />
                </View>
                
                <View style={styles.platformInfo}>
                  <Text style={styles.platformName}>{platform.name}</Text>
                  <Text style={styles.platformDescription}>{platform.description}</Text>
                </View>

                {connected ? (
                  <View style={styles.connectedBadge}>
                    <Ionicons name="checkmark-circle" size={24} color="#10b981" />
                  </View>
                ) : isConnecting ? (
                  <View style={styles.connectingBadge}>
                    <Text style={styles.connectingText}>Connecting...</Text>
                  </View>
                ) : (
                  <View style={styles.connectButton}>
                    <Text style={styles.connectButtonText}>Connect</Text>
                  </View>
                )}
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Connected Count */}
        {user?.connectedAccounts && user.connectedAccounts.length > 0 && (
          <View style={styles.connectedCount}>
            <Ionicons name="checkmark-circle" size={20} color="#10b981" />
            <Text style={styles.connectedCountText}>
              {user.connectedAccounts.length} {user.connectedAccounts.length === 1 ? 'account' : 'accounts'} connected
            </Text>
          </View>
        )}

        <View style={{ height: 120 }} />
      </ScrollView>

      {/* Bottom CTA */}
      <View style={styles.bottomCTA}>
        <TouchableOpacity
          style={styles.continueButton}
          onPress={handleContinue}
          activeOpacity={0.8}
        >
          <LinearGradient
            colors={['#a855f7', '#ec4899']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.continueGradient}
          >
            <Text style={styles.continueText}>
              Continue to Dashboard
            </Text>
            <Ionicons name="arrow-forward" size={20} color="#fff" />
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0a',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#1a1a1a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  skipText: {
    fontSize: 14,
    color: '#a855f7',
    fontWeight: '600',
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 20,
  },
  infoSection: {
    alignItems: 'center',
    marginBottom: 32,
  },
  iconCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(168, 85, 247, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 16,
  },
  planBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(16, 185, 129, 0.1)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    gap: 8,
  },
  planText: {
    fontSize: 12,
    color: '#10b981',
    fontWeight: '600',
  },
  platformsContainer: {
    gap: 16,
  },
  platformCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
    borderRadius: 16,
    padding: 16,
    borderWidth: 2,
    borderColor: '#2a2a2a',
  },
  platformCardConnected: {
    borderColor: '#10b981',
    backgroundColor: 'rgba(16, 185, 129, 0.05)',
  },
  platformIcon: {
    width: 56,
    height: 56,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  platformInfo: {
    flex: 1,
  },
  platformName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  platformDescription: {
    fontSize: 13,
    color: '#888',
  },
  connectedBadge: {
    marginLeft: 12,
  },
  connectingBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: '#2a2a2a',
    borderRadius: 8,
  },
  connectingText: {
    fontSize: 12,
    color: '#888',
  },
  connectButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#a855f7',
    borderRadius: 8,
  },
  connectButtonText: {
    fontSize: 14,
    color: '#fff',
    fontWeight: '600',
  },
  connectedCount: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginTop: 24,
    padding: 16,
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#2a2a2a',
  },
  connectedCountText: {
    fontSize: 14,
    color: '#10b981',
    fontWeight: '600',
  },
  bottomCTA: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    backgroundColor: '#0a0a0a',
    borderTopWidth: 1,
    borderTopColor: '#2a2a2a',
  },
  continueButton: {
    borderRadius: 12,
    overflow: 'hidden',
  },
  continueGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    gap: 8,
  },
  continueText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});
