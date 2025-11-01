import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useAuth } from '../contexts/AuthContext';

const features = [
  {
    id: 1,
    icon: 'bulb',
    title: 'AI Content Generator',
    description: 'Generate engaging captions, hashtags, and post ideas powered by advanced AI',
    color: '#a855f7',
  },
  {
    id: 2,
    icon: 'stats-chart',
    title: 'Advanced Analytics',
    description: 'Track performance metrics, engagement rates, and audience insights in real-time',
    color: '#ec4899',
  },
  {
    id: 3,
    icon: 'calendar',
    title: 'Smart Scheduler',
    description: 'Schedule posts at optimal times across all platforms with AI recommendations',
    color: '#f59e0b',
  },
  {
    id: 4,
    icon: 'trending-up',
    title: 'Viral Predictor',
    description: 'Predict content performance with 90%+ accuracy using machine learning',
    color: '#10b981',
  },
  {
    id: 5,
    icon: 'people',
    title: 'Multi-Platform Support',
    description: 'Manage Instagram, YouTube, TikTok, LinkedIn, Twitter, and Facebook in one place',
    color: '#3b82f6',
  },
  {
    id: 6,
    icon: 'flash',
    title: 'Trend Insights',
    description: 'Stay ahead with real-time trending topics and hashtag recommendations',
    color: '#8b5cf6',
  },
];

const pricingPlans = [
  {
    id: 'free',
    name: 'Free',
    price: '$0',
    period: 'forever',
    features: [
      '1 Social Account',
      'Basic Analytics',
      '10 Scheduled Posts/month',
      'AI Suggestions (Limited)',
    ],
    popular: false,
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '$29',
    period: 'per month',
    features: [
      '5 Social Accounts',
      'Advanced Analytics',
      'Unlimited Scheduled Posts',
      'Full AI Features',
      'Viral Predictor',
      'Priority Support',
    ],
    popular: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: '$99',
    period: 'per month',
    features: [
      'Unlimited Accounts',
      'Team Collaboration',
      'White Label Reports',
      'API Access',
      'Dedicated Manager',
      'Custom Integrations',
    ],
    popular: false,
  },
];

const screenshots = [
  {
    id: 1,
    title: 'Dashboard',
    image: 'https://picsum.photos/300/600?random=1',
  },
  {
    id: 2,
    title: 'Analytics',
    image: 'https://picsum.photos/300/600?random=2',
  },
  {
    id: 3,
    title: 'Content Creator',
    image: 'https://picsum.photos/300/600?random=3',
  },
];

export default function FeaturesScreen() {
  const router = useRouter();
  const { updateSubscription } = useAuth();
  const [selectedPlan, setSelectedPlan] = useState('pro');

  const handleGetStarted = async () => {
    if (!selectedPlan) {
      Alert.alert('Select a Plan', 'Please select a subscription plan to continue.');
      return;
    }

    // Update user's subscription
    await updateSubscription(selectedPlan);
    
    // Redirect to connect accounts page
    router.push('/connect-accounts' as any);
  };

  const handleViewDemo = () => {
    // In production, this would open a video player or modal
    Alert.alert('Demo Video', 'Demo video player would open here. This will show a walkthrough of all features.');
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
        <Text style={styles.headerTitle}>SocialGrow Features</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView
        style={styles.content}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
        {/* Hero Section */}
        <View style={styles.heroSection}>
          <LinearGradient
            colors={['#a855f7', '#ec4899', '#f59e0b']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.heroGradient}
          >
            <Text style={styles.heroTitle}>
              Grow Your Social Media{'\n'}with AI Power 🚀
            </Text>
            <Text style={styles.heroSubtitle}>
              Everything you need to dominate social media in one powerful platform
            </Text>
            
            {/* Demo Video Button */}
            <TouchableOpacity
              style={styles.demoButton}
              onPress={handleViewDemo}
              activeOpacity={0.8}
            >
              <View style={styles.playIconContainer}>
                <Ionicons name="play" size={24} color="#a855f7" />
              </View>
              <Text style={styles.demoButtonText}>View Demo Video</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>

        {/* Features Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Powerful Features</Text>
          <Text style={styles.sectionSubtitle}>
            Everything you need to succeed on social media
          </Text>

          <View style={styles.featuresGrid}>
            {features.map((feature) => (
              <View key={feature.id} style={styles.featureCard}>
                <View style={[styles.featureIcon, { backgroundColor: `${feature.color}20` }]}>
                  <Ionicons name={feature.icon as any} size={28} color={feature.color} />
                </View>
                <Text style={styles.featureTitle}>{feature.title}</Text>
                <Text style={styles.featureDescription}>{feature.description}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Screenshots Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>See It In Action</Text>
          <Text style={styles.sectionSubtitle}>
            Beautiful, intuitive interface designed for creators
          </Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.screenshotsContainer}
          >
            {screenshots.map((screenshot) => (
              <View key={screenshot.id} style={styles.screenshotCard}>
                <Image
                  source={{ uri: screenshot.image }}
                  style={styles.screenshotImage}
                />
                <View style={styles.screenshotOverlay}>
                  <Text style={styles.screenshotTitle}>{screenshot.title}</Text>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* Pricing Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Choose Your Plan</Text>
          <Text style={styles.sectionSubtitle}>
            Flexible pricing for creators of all sizes
          </Text>

          <View style={styles.pricingContainer}>
            {pricingPlans.map((plan) => (
              <TouchableOpacity
                key={plan.id}
                style={[
                  styles.pricingCard,
                  selectedPlan === plan.id && styles.pricingCardSelected,
                ]}
                onPress={() => setSelectedPlan(plan.id)}
                activeOpacity={0.8}
              >
                {plan.popular && (
                  <View style={styles.popularBadge}>
                    <Text style={styles.popularText}>POPULAR</Text>
                  </View>
                )}

                <Text style={styles.planName}>{plan.name}</Text>
                <View style={styles.priceContainer}>
                  <Text style={styles.price}>{plan.price}</Text>
                  <Text style={styles.period}>/{plan.period}</Text>
                </View>

                <View style={styles.featuresContainer}>
                  {plan.features.map((feature, index) => (
                    <View key={index} style={styles.featureItem}>
                      <Ionicons name="checkmark-circle" size={20} color="#10b981" />
                      <Text style={styles.featureText}>{feature}</Text>
                    </View>
                  ))}
                </View>

                {selectedPlan === plan.id && (
                  <View style={styles.selectedIndicator}>
                    <Ionicons name="checkmark-circle" size={24} color="#a855f7" />
                  </View>
                )}
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Stats Section */}
        <View style={styles.statsSection}>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>50K+</Text>
            <Text style={styles.statLabel}>Active Users</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>1M+</Text>
            <Text style={styles.statLabel}>Posts Created</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>95%</Text>
            <Text style={styles.statLabel}>Satisfaction</Text>
          </View>
        </View>

        {/* CTA Section */}
        <View style={styles.ctaSection}>
          <Text style={styles.ctaTitle}>Ready to Grow?</Text>
          <Text style={styles.ctaSubtitle}>
            Join thousands of creators who are already growing their social media presence
          </Text>
          
          <TouchableOpacity
            style={styles.getStartedButton}
            onPress={handleGetStarted}
            activeOpacity={0.8}
          >
            <LinearGradient
              colors={['#a855f7', '#ec4899']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.getStartedGradient}
            >
              <Text style={styles.getStartedText}>Get Started Now</Text>
              <Ionicons name="arrow-forward" size={20} color="#fff" />
            </LinearGradient>
          </TouchableOpacity>
        </View>

        <View style={{ height: 40 }} />
      </ScrollView>
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
  content: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 20,
  },
  heroSection: {
    marginHorizontal: 20,
    marginBottom: 32,
    borderRadius: 24,
    overflow: 'hidden',
  },
  heroGradient: {
    padding: 32,
    alignItems: 'center',
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 12,
  },
  heroSubtitle: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    opacity: 0.9,
    marginBottom: 24,
  },
  demoButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 12,
    gap: 12,
  },
  playIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f3e8ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  demoButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0a0a0a',
  },
  section: {
    marginBottom: 40,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
    paddingHorizontal: 20,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: '#888',
    marginBottom: 24,
    paddingHorizontal: 20,
  },
  featuresGrid: {
    paddingHorizontal: 20,
  },
  featureCard: {
    backgroundColor: '#1a1a1a',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#2a2a2a',
  },
  featureIcon: {
    width: 56,
    height: 56,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  featureDescription: {
    fontSize: 14,
    color: '#888',
    lineHeight: 20,
  },
  screenshotsContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    gap: 16,
  },
  screenshotCard: {
    width: 200,
    height: 400,
    borderRadius: 20,
    overflow: 'hidden',
    marginRight: 16,
    backgroundColor: '#1a1a1a',
  },
  screenshotImage: {
    width: '100%',
    height: '100%',
  },
  screenshotOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  screenshotTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  pricingContainer: {
    paddingHorizontal: 20,
  },
  pricingCard: {
    backgroundColor: '#1a1a1a',
    borderRadius: 20,
    padding: 24,
    marginBottom: 16,
    borderWidth: 2,
    borderColor: '#2a2a2a',
    position: 'relative',
  },
  pricingCardSelected: {
    borderColor: '#a855f7',
    backgroundColor: 'rgba(168, 85, 247, 0.05)',
  },
  popularBadge: {
    position: 'absolute',
    top: -12,
    right: 20,
    backgroundColor: '#a855f7',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  popularText: {
    fontSize: 10,
    color: '#fff',
    fontWeight: 'bold',
  },
  planName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: 24,
  },
  price: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
  },
  period: {
    fontSize: 14,
    color: '#888',
    marginLeft: 4,
  },
  featuresContainer: {
    gap: 12,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  featureText: {
    fontSize: 14,
    color: '#ccc',
    flex: 1,
  },
  selectedIndicator: {
    position: 'absolute',
    top: 24,
    right: 24,
  },
  statsSection: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    gap: 12,
    marginBottom: 40,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#2a2a2a',
  },
  statNumber: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#a855f7',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#888',
    textAlign: 'center',
  },
  ctaSection: {
    marginHorizontal: 20,
    backgroundColor: '#1a1a1a',
    borderRadius: 24,
    padding: 32,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#2a2a2a',
  },
  ctaTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 12,
    textAlign: 'center',
  },
  ctaSubtitle: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 20,
  },
  getStartedButton: {
    width: '100%',
    borderRadius: 12,
    overflow: 'hidden',
  },
  getStartedGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    gap: 8,
  },
  getStartedText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});
