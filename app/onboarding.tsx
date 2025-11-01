import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

const socialPlatforms = [
  { id: 'instagram', name: 'Instagram', icon: 'logo-instagram', color: '#E4405F' },
  { id: 'youtube', name: 'YouTube', icon: 'logo-youtube', color: '#FF0000' },
  { id: 'linkedin', name: 'LinkedIn', icon: 'logo-linkedin', color: '#0077B5' },
  { id: 'tiktok', name: 'TikTok', icon: 'logo-tiktok', color: '#000000' },
  { id: 'twitter', name: 'X (Twitter)', icon: 'logo-twitter', color: '#1DA1F2' },
  { id: 'facebook', name: 'Facebook', icon: 'logo-facebook', color: '#1877F2' },
];

const niches = [
  'Fashion & Beauty',
  'Tech & Gadgets',
  'Fitness & Health',
  'Food & Cooking',
  'Travel & Lifestyle',
  'Business & Finance',
  'Gaming & Entertainment',
  'Education & Learning',
];

const goals = [
  { id: 'followers', title: 'Grow Followers', icon: 'people' },
  { id: 'engagement', title: 'Boost Engagement', icon: 'heart' },
  { id: 'reach', title: 'Increase Reach', icon: 'trending-up' },
  { id: 'conversions', title: 'Drive Conversions', icon: 'cash' },
];

const plans = [
  {
    id: 'free',
    name: 'Free',
    price: '$0',
    features: ['1 Social Account', 'Basic Analytics', '10 AI Suggestions/month'],
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '$29',
    features: ['5 Social Accounts', 'Advanced Analytics', 'Unlimited AI Suggestions', 'Content Scheduler'],
    popular: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: '$99',
    features: ['Unlimited Accounts', 'Team Collaboration', 'White Label Reports', 'Priority Support'],
  },
];

export default function OnboardingScreen() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const [selectedNiche, setSelectedNiche] = useState('');
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
  const [selectedPlan, setSelectedPlan] = useState('pro');

  const togglePlatform = (id: string) => {
    setSelectedPlatforms((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  const toggleGoal = (id: string) => {
    setSelectedGoals((prev) =>
      prev.includes(id) ? prev.filter((g) => g !== id) : [...prev, id]
    );
  };

  const handleNext = () => {
    if (step < 5) {
      setStep(step + 1);
    } else {
      router.replace('/features' as any);
    }
  };

  const handleSkip = () => {
    router.replace('/dashboard');
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <View style={styles.stepContainer}>
            <View style={styles.iconCircle}>
              <Ionicons name="rocket" size={48} color="#a855f7" />
            </View>
            <Text style={styles.stepTitle}>Welcome to SocialGrow! 🚀</Text>
            <Text style={styles.stepDescription}>
              Your AI-powered social media analytics platform. Let&apos;s set up your account in just a few steps.
            </Text>
          </View>
        );

      case 2:
        return (
          <View style={styles.stepContainer}>
            <Text style={styles.stepTitle}>Connect Your Accounts</Text>
            <Text style={styles.stepDescription}>
              Select the social media platforms you want to track
            </Text>
            <View style={styles.platformsGrid}>
              {socialPlatforms.map((platform) => (
                <TouchableOpacity
                  key={platform.id}
                  style={[
                    styles.platformCard,
                    selectedPlatforms.includes(platform.id) && styles.platformCardSelected,
                  ]}
                  onPress={() => togglePlatform(platform.id)}
                  activeOpacity={0.8}
                >
                  <Ionicons name={platform.icon as any} size={32} color={platform.color} />
                  <Text style={styles.platformName}>{platform.name}</Text>
                  {selectedPlatforms.includes(platform.id) && (
                    <View style={styles.checkmark}>
                      <Ionicons name="checkmark-circle" size={20} color="#10b981" />
                    </View>
                  )}
                </TouchableOpacity>
              ))}
            </View>
          </View>
        );

      case 3:
        return (
          <View style={styles.stepContainer}>
            <Text style={styles.stepTitle}>Choose Your Niche</Text>
            <Text style={styles.stepDescription}>
              What type of content do you create?
            </Text>
            <View style={styles.nichesContainer}>
              {niches.map((niche) => (
                <TouchableOpacity
                  key={niche}
                  style={[
                    styles.nicheChip,
                    selectedNiche === niche && styles.nicheChipSelected,
                  ]}
                  onPress={() => setSelectedNiche(niche)}
                  activeOpacity={0.8}
                >
                  <Text
                    style={[
                      styles.nicheText,
                      selectedNiche === niche && styles.nicheTextSelected,
                    ]}
                  >
                    {niche}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        );

      case 4:
        return (
          <View style={styles.stepContainer}>
            <Text style={styles.stepTitle}>Set Your Goals</Text>
            <Text style={styles.stepDescription}>
              What do you want to achieve? (Select all that apply)
            </Text>
            <View style={styles.goalsGrid}>
              {goals.map((goal) => (
                <TouchableOpacity
                  key={goal.id}
                  style={[
                    styles.goalCard,
                    selectedGoals.includes(goal.id) && styles.goalCardSelected,
                  ]}
                  onPress={() => toggleGoal(goal.id)}
                  activeOpacity={0.8}
                >
                  <Ionicons
                    name={goal.icon as any}
                    size={32}
                    color={selectedGoals.includes(goal.id) ? '#a855f7' : '#666'}
                  />
                  <Text
                    style={[
                      styles.goalTitle,
                      selectedGoals.includes(goal.id) && styles.goalTitleSelected,
                    ]}
                  >
                    {goal.title}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        );

      case 5:
        return (
          <View style={styles.stepContainer}>
            <Text style={styles.stepTitle}>Choose Your Plan</Text>
            <Text style={styles.stepDescription}>
              Select the plan that fits your needs
            </Text>
            <View style={styles.plansContainer}>
              {plans.map((plan) => (
                <TouchableOpacity
                  key={plan.id}
                  style={[
                    styles.planCard,
                    selectedPlan === plan.id && styles.planCardSelected,
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
                  <Text style={styles.planPrice}>{plan.price}<Text style={styles.planPeriod}>/mo</Text></Text>
                  <View style={styles.featuresContainer}>
                    {plan.features.map((feature, index) => (
                      <View key={index} style={styles.featureRow}>
                        <Ionicons name="checkmark-circle" size={16} color="#10b981" />
                        <Text style={styles.featureText}>{feature}</Text>
                      </View>
                    ))}
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        );

      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Setup Your Account</Text>
        <TouchableOpacity onPress={handleSkip}>
          <Text style={styles.skipText}>Skip for now</Text>
        </TouchableOpacity>
      </View>

      {/* Progress Bar */}
      <View style={styles.progressContainer}>
        <View style={styles.progressBar}>
          <LinearGradient
            colors={['#a855f7', '#ec4899']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={[styles.progressFill, { width: `${(step / 5) * 100}%` }]}
          />
        </View>
        <Text style={styles.progressText}>Step {step} of 5</Text>
      </View>

      {/* Content */}
      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {renderStep()}
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        {step > 1 && (
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => setStep(step - 1)}
            activeOpacity={0.8}
          >
            <Ionicons name="arrow-back" size={20} color="#fff" />
            <Text style={styles.backText}>Back</Text>
          </TouchableOpacity>
        )}
        
        <TouchableOpacity
          style={[styles.nextButton, step === 1 && styles.nextButtonFull]}
          onPress={handleNext}
          activeOpacity={0.8}
        >
          <LinearGradient
            colors={['#a855f7', '#ec4899']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.nextGradient}
          >
            <Text style={styles.nextText}>
              {step === 5 ? 'Get Started' : 'Continue'}
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
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  skipText: {
    fontSize: 14,
    color: '#a855f7',
    fontWeight: '600',
  },
  progressContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  progressBar: {
    height: 6,
    backgroundColor: '#2a2a2a',
    borderRadius: 3,
    overflow: 'hidden',
    marginBottom: 8,
  },
  progressFill: {
    height: '100%',
    borderRadius: 3,
  },
  progressText: {
    fontSize: 12,
    color: '#888',
    textAlign: 'center',
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  stepContainer: {
    alignItems: 'center',
  },
  iconCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'rgba(168, 85, 247, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  stepTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 12,
  },
  stepDescription: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 32,
  },
  platformsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
  },
  platformCard: {
    width: '48%',
    backgroundColor: '#1a1a1a',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    marginBottom: 16,
    borderWidth: 2,
    borderColor: '#2a2a2a',
  },
  platformCardSelected: {
    borderColor: '#a855f7',
    backgroundColor: 'rgba(168, 85, 247, 0.1)',
  },
  platformName: {
    fontSize: 14,
    color: '#fff',
    marginTop: 12,
    fontWeight: '600',
  },
  checkmark: {
    position: 'absolute',
    top: 8,
    right: 8,
  },
  nichesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
  },
  nicheChip: {
    backgroundColor: '#1a1a1a',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 12,
    margin: 6,
    borderWidth: 1,
    borderColor: '#2a2a2a',
  },
  nicheChipSelected: {
    backgroundColor: 'rgba(168, 85, 247, 0.2)',
    borderColor: '#a855f7',
  },
  nicheText: {
    fontSize: 14,
    color: '#888',
    fontWeight: '600',
  },
  nicheTextSelected: {
    color: '#a855f7',
  },
  goalsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
  },
  goalCard: {
    width: '48%',
    backgroundColor: '#1a1a1a',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    marginBottom: 16,
    borderWidth: 2,
    borderColor: '#2a2a2a',
  },
  goalCardSelected: {
    borderColor: '#a855f7',
    backgroundColor: 'rgba(168, 85, 247, 0.1)',
  },
  goalTitle: {
    fontSize: 14,
    color: '#888',
    marginTop: 12,
    fontWeight: '600',
    textAlign: 'center',
  },
  goalTitleSelected: {
    color: '#fff',
  },
  plansContainer: {
    width: '100%',
  },
  planCard: {
    backgroundColor: '#1a1a1a',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    borderWidth: 2,
    borderColor: '#2a2a2a',
    position: 'relative',
  },
  planCardSelected: {
    borderColor: '#a855f7',
    backgroundColor: 'rgba(168, 85, 247, 0.05)',
  },
  popularBadge: {
    position: 'absolute',
    top: -10,
    right: 20,
    backgroundColor: '#a855f7',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  popularText: {
    fontSize: 10,
    color: '#fff',
    fontWeight: 'bold',
  },
  planName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  planPrice: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 16,
  },
  planPeriod: {
    fontSize: 16,
    color: '#888',
  },
  featuresContainer: {
    gap: 12,
  },
  featureRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  featureText: {
    fontSize: 14,
    color: '#ccc',
  },
  footer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingBottom: 40,
    paddingTop: 20,
    gap: 12,
  },
  backButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2a2a2a',
    borderRadius: 12,
    paddingVertical: 16,
    gap: 8,
  },
  backText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  nextButton: {
    flex: 2,
    borderRadius: 12,
    overflow: 'hidden',
  },
  nextButtonFull: {
    flex: 1,
  },
  nextGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    gap: 8,
  },
  nextText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
});
