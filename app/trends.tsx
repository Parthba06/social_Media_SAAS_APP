import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import BottomNav from '../components/BottomNav';

const trendingTopics = [
  {
    id: 1,
    topic: 'AI Content Creation',
    viralScore: 95,
    reach: '2.5M',
    engagement: '12.8%',
    color: '#a855f7',
    category: 'Technology',
  },
  {
    id: 2,
    topic: 'Social Media Trends 2024',
    viralScore: 88,
    reach: '1.8M',
    engagement: '10.2%',
    color: '#ec4899',
    category: 'Marketing',
  },
  {
    id: 3,
    topic: 'Influencer Marketing',
    viralScore: 82,
    reach: '1.2M',
    engagement: '9.5%',
    color: '#f59e0b',
    category: 'Business',
  },
  {
    id: 4,
    topic: 'Video Marketing Tips',
    viralScore: 78,
    reach: '950K',
    engagement: '8.7%',
    color: '#10b981',
    category: 'Content',
  },
  {
    id: 5,
    topic: 'Personal Branding',
    viralScore: 75,
    reach: '820K',
    engagement: '7.9%',
    color: '#3b82f6',
    category: 'Career',
  },
];

const viralPredictions = [
  {
    id: 1,
    content: 'Behind-the-scenes content',
    score: 92,
    bestPlatform: 'instagram',
  },
  {
    id: 2,
    content: 'Educational carousels',
    score: 89,
    bestPlatform: 'linkedin',
  },
  {
    id: 3,
    content: 'Short-form videos',
    score: 87,
    bestPlatform: 'tiktok',
  },
];

export default function TrendsScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Trends & Viral Predictor</Text>
        <TouchableOpacity>
          <Ionicons name="funnel-outline" size={24} color="#a855f7" />
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Viral Score Info */}
        <View style={styles.infoCard}>
          <LinearGradient
            colors={['#a855f7', '#ec4899']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.infoGradient}
          >
            <Ionicons name="flame" size={32} color="#fff" />
            <View style={styles.infoContent}>
              <Text style={styles.infoTitle}>Viral Score Explained</Text>
              <Text style={styles.infoText}>
                AI-powered prediction of content virality based on current trends and engagement patterns
              </Text>
            </View>
          </LinearGradient>
        </View>

        {/* Trending Topics */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Trending Topics</Text>
          {trendingTopics.map((trend, index) => (
            <TouchableOpacity
              key={trend.id}
              style={styles.trendCard}
              activeOpacity={0.8}
            >
              <View style={styles.trendRank}>
                <Text style={styles.trendRankText}>#{index + 1}</Text>
              </View>
              
              <View style={styles.trendContent}>
                <View style={styles.trendHeader}>
                  <Text style={styles.trendTopic}>{trend.topic}</Text>
                  <View style={[styles.categoryBadge, { backgroundColor: `${trend.color}20` }]}>
                    <Text style={[styles.categoryText, { color: trend.color }]}>
                      {trend.category}
                    </Text>
                  </View>
                </View>
                
                <View style={styles.trendStats}>
                  <View style={styles.trendStat}>
                    <Ionicons name="eye" size={14} color="#666" />
                    <Text style={styles.trendStatText}>{trend.reach}</Text>
                  </View>
                  <View style={styles.trendStat}>
                    <Ionicons name="heart" size={14} color="#666" />
                    <Text style={styles.trendStatText}>{trend.engagement}</Text>
                  </View>
                </View>
                
                <View style={styles.viralScoreContainer}>
                  <Text style={styles.viralScoreLabel}>Viral Score</Text>
                  <View style={styles.viralScoreBar}>
                    <LinearGradient
                      colors={[trend.color, `${trend.color}80`]}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 0 }}
                      style={[styles.viralScoreFill, { width: `${trend.viralScore}%` }]}
                    />
                  </View>
                  <Text style={[styles.viralScoreValue, { color: trend.color }]}>
                    {trend.viralScore}/100
                  </Text>
                </View>
              </View>
              
              <TouchableOpacity
                style={styles.useButton}
                onPress={() => router.push('/optimizer' as any)}
                activeOpacity={0.8}
              >
                <Text style={styles.useButtonText}>Use</Text>
                <Ionicons name="arrow-forward" size={16} color="#fff" />
              </TouchableOpacity>
            </TouchableOpacity>
          ))}
        </View>

        {/* Viral Predictions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Content Type Predictions</Text>
          <Text style={styles.sectionSubtitle}>
            What type of content is likely to go viral
          </Text>
          
          {viralPredictions.map((prediction) => (
            <View key={prediction.id} style={styles.predictionCard}>
              <View style={styles.predictionLeft}>
                <View style={styles.predictionIcon}>
                  <Ionicons name="trending-up" size={24} color="#10b981" />
                </View>
                <View style={styles.predictionInfo}>
                  <Text style={styles.predictionContent}>{prediction.content}</Text>
                  <View style={styles.predictionPlatform}>
                    <Ionicons
                      name={`logo-${prediction.bestPlatform}` as any}
                      size={14}
                      color="#a855f7"
                    />
                    <Text style={styles.predictionPlatformText}>
                      Best on {prediction.bestPlatform}
                    </Text>
                  </View>
                </View>
              </View>
              
              <View style={styles.predictionScore}>
                <Text style={styles.predictionScoreValue}>{prediction.score}%</Text>
                <Text style={styles.predictionScoreLabel}>Success</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Hashtag Trends */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Trending Hashtags</Text>
          <View style={styles.hashtagsContainer}>
            {['#AIMarketing', '#ContentCreator', '#SocialMedia2024', '#DigitalGrowth', '#InfluencerTips', '#VideoMarketing'].map((hashtag, index) => (
              <TouchableOpacity
                key={index}
                style={styles.hashtagChip}
                activeOpacity={0.8}
              >
                <Text style={styles.hashtagText}>{hashtag}</Text>
                <Ionicons name="flame" size={14} color="#f59e0b" />
              </TouchableOpacity>
            ))}
          </View>
        </View>

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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  infoCard: {
    borderRadius: 16,
    marginBottom: 24,
    overflow: 'hidden',
  },
  infoGradient: {
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
    gap: 16,
  },
  infoContent: {
    flex: 1,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 6,
  },
  infoText: {
    fontSize: 13,
    color: 'rgba(255, 255, 255, 0.9)',
    lineHeight: 18,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: '#888',
    marginBottom: 16,
  },
  trendCard: {
    flexDirection: 'row',
    backgroundColor: '#1a1a1a',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#2a2a2a',
    alignItems: 'flex-start',
  },
  trendRank: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#2a2a2a',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  trendRankText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#a855f7',
  },
  trendContent: {
    flex: 1,
  },
  trendHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    gap: 8,
  },
  trendTopic: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    flex: 1,
  },
  categoryBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  categoryText: {
    fontSize: 10,
    fontWeight: '600',
  },
  trendStats: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 12,
  },
  trendStat: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  trendStatText: {
    fontSize: 12,
    color: '#666',
  },
  viralScoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  viralScoreLabel: {
    fontSize: 12,
    color: '#888',
    width: 70,
  },
  viralScoreBar: {
    flex: 1,
    height: 6,
    backgroundColor: '#2a2a2a',
    borderRadius: 3,
    overflow: 'hidden',
  },
  viralScoreFill: {
    height: '100%',
    borderRadius: 3,
  },
  viralScoreValue: {
    fontSize: 12,
    fontWeight: 'bold',
    width: 50,
    textAlign: 'right',
  },
  useButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#a855f7',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    gap: 4,
    marginLeft: 12,
  },
  useButtonText: {
    fontSize: 12,
    color: '#fff',
    fontWeight: '600',
  },
  predictionCard: {
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
  predictionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  predictionIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(16, 185, 129, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  predictionInfo: {
    flex: 1,
  },
  predictionContent: {
    fontSize: 14,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 6,
  },
  predictionPlatform: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  predictionPlatformText: {
    fontSize: 12,
    color: '#888',
  },
  predictionScore: {
    alignItems: 'center',
  },
  predictionScoreValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#10b981',
  },
  predictionScoreLabel: {
    fontSize: 10,
    color: '#666',
  },
  hashtagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  hashtagChip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    gap: 6,
    borderWidth: 1,
    borderColor: '#2a2a2a',
  },
  hashtagText: {
    fontSize: 14,
    color: '#a855f7',
    fontWeight: '600',
  },
});
