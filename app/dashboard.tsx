import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import BottomNav from '../components/BottomNav';
import StatCard from '../components/StatCard';
import { useAuth } from '../contexts/AuthContext';

const aiSuggestions = [
  {
    id: 1,
    title: 'Post about trending topic: AI in Marketing',
    prediction: '85% engagement boost',
    icon: 'bulb',
  },
  {
    id: 2,
    title: 'Best time to post: Today at 6 PM',
    prediction: '2.3x more reach',
    icon: 'time',
  },
  {
    id: 3,
    title: 'Use hashtag: #DigitalMarketing2024',
    prediction: '+450 impressions',
    icon: 'pricetag',
  },
];

const trendingTopics = [
  { id: 1, topic: 'AI Content Creation', score: 95, color: '#a855f7' },
  { id: 2, topic: 'Social Media Trends 2024', score: 88, color: '#ec4899' },
  { id: 3, topic: 'Influencer Marketing', score: 82, color: '#f59e0b' },
];

const recentPosts = [
  {
    id: 1,
    image: 'https://picsum.photos/400/400?random=1',
    platform: 'instagram',
    engagement: '12.5K',
    date: '2 hours ago',
  },
  {
    id: 2,
    image: 'https://picsum.photos/400/400?random=2',
    platform: 'youtube',
    engagement: '8.2K',
    date: '5 hours ago',
  },
  {
    id: 3,
    image: 'https://picsum.photos/400/400?random=3',
    platform: 'linkedin',
    engagement: '5.8K',
    date: '1 day ago',
  },
];

export default function DashboardScreen() {
  const router = useRouter();
  const { user } = useAuth();

  // Check if user has subscription and connected accounts
  React.useEffect(() => {
    if (!user) return;

    if (!user.hasSubscription) {
      // No subscription, redirect to features page
      router.replace('/features' as any);
      return;
    }

    if (!user.connectedAccounts || user.connectedAccounts.length === 0) {
      // Has subscription but no connected accounts
      router.replace('/connect-accounts' as any);
      return;
    }
  }, [user, router]);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Good Morning 👋</Text>
          <Text style={styles.userName}>{user?.name || 'User'}</Text>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="notifications-outline" size={24} color="#fff" />
            <View style={styles.badge}>
              <Text style={styles.badgeText}>3</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.planBadge}>
            <Text style={styles.planText}>PRO</Text>
          </View>
        </View>
      </View>

      <ScrollView
        style={styles.content}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
        {/* Stats Cards */}
        <View style={styles.statsContainer}>
          <StatCard
            title="Followers"
            value="24.5K"
            change="+12.5%"
            icon="people"
            isPositive={true}
          />
          <StatCard
            title="Engagement"
            value="8.2%"
            change="+3.2%"
            icon="heart"
            isPositive={true}
          />
        </View>
        <View style={styles.statsContainer}>
          <StatCard
            title="Reach"
            value="156K"
            change="+18.7%"
            icon="trending-up"
            isPositive={true}
          />
          <StatCard
            title="Impressions"
            value="342K"
            change="+25.3%"
            icon="eye"
            isPositive={true}
          />
        </View>

        {/* AI Growth Score */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>AI Growth Score</Text>
          <View style={styles.scoreCard}>
            <LinearGradient
              colors={['#2a2a2a', '#1f1f1f']}
              style={styles.scoreGradient}
            >
              <View style={styles.scoreHeader}>
                <Text style={styles.scoreValue}>87/100</Text>
                <View style={styles.scoreLabel}>
                  <Ionicons name="trending-up" size={16} color="#10b981" />
                  <Text style={styles.scoreLabelText}>Excellent</Text>
                </View>
              </View>
              <View style={styles.scoreBar}>
                <LinearGradient
                  colors={['#a855f7', '#ec4899', '#f59e0b']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={[styles.scoreBarFill, { width: '87%' }]}
                />
              </View>
              <Text style={styles.scoreDescription}>
                Your content performance is above average. Keep posting consistently!
              </Text>
            </LinearGradient>
          </View>
        </View>

        {/* AI Suggestions */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>AI Suggestions</Text>
            <TouchableOpacity onPress={() => router.push('/ai-suggestions' as any)}>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>
          {aiSuggestions.map((suggestion) => (
            <TouchableOpacity
              key={suggestion.id}
              style={styles.suggestionCard}
              activeOpacity={0.8}
            >
              <View style={styles.suggestionIcon}>
                <Ionicons name={suggestion.icon as any} size={20} color="#a855f7" />
              </View>
              <View style={styles.suggestionContent}>
                <Text style={styles.suggestionTitle}>{suggestion.title}</Text>
                <Text style={styles.suggestionPrediction}>{suggestion.prediction}</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#666" />
            </TouchableOpacity>
          ))}
        </View>

        {/* Analytics Chart */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Growth Overview</Text>
          <View style={styles.chartCard}>
            <LinearGradient
              colors={['#2a2a2a', '#1f1f1f']}
              style={styles.chartGradient}
            >
              <View style={styles.chartHeader}>
                <View style={styles.chartLegend}>
                  <View style={styles.legendItem}>
                    <View style={[styles.legendDot, { backgroundColor: '#a855f7' }]} />
                    <Text style={styles.legendText}>Followers</Text>
                  </View>
                  <View style={styles.legendItem}>
                    <View style={[styles.legendDot, { backgroundColor: '#ec4899' }]} />
                    <Text style={styles.legendText}>Engagement</Text>
                  </View>
                </View>
              </View>
              <View style={styles.chartPlaceholder}>
                <Text style={styles.chartPlaceholderText}>📈 Chart Visualization</Text>
                <Text style={styles.chartSubtext}>Last 30 days performance</Text>
              </View>
            </LinearGradient>
          </View>
        </View>

        {/* Trending Topics */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Trending Topics</Text>
            <TouchableOpacity onPress={() => router.push('/trends' as any)}>
              <Text style={styles.seeAllText}>View All</Text>
            </TouchableOpacity>
          </View>
          {trendingTopics.map((trend) => (
            <View key={trend.id} style={styles.trendCard}>
              <View style={styles.trendLeft}>
                <Text style={styles.trendTopic}>{trend.topic}</Text>
                <View style={styles.trendScoreBar}>
                  <View
                    style={[
                      styles.trendScoreFill,
                      { width: `${trend.score}%`, backgroundColor: trend.color },
                    ]}
                  />
                </View>
              </View>
              <TouchableOpacity style={styles.useTrendButton}>
                <Text style={styles.useTrendText}>Use</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>

        {/* Recent Posts */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recent Posts</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>View All</Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.postsScroll}
          >
            {recentPosts.map((post) => (
              <TouchableOpacity key={post.id} style={styles.postCard} activeOpacity={0.8}>
                <Image source={{ uri: post.image }} style={styles.postImage} />
                <View style={styles.postOverlay}>
                  <View style={styles.postPlatform}>
                    <Ionicons name={`logo-${post.platform}` as any} size={16} color="#fff" />
                  </View>
                  <View style={styles.postStats}>
                    <Ionicons name="heart" size={14} color="#fff" />
                    <Text style={styles.postEngagement}>{post.engagement}</Text>
                  </View>
                </View>
                <Text style={styles.postDate}>{post.date}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Quick Actions */}
        <View style={styles.quickActions}>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => router.push('/optimizer' as any)}
            activeOpacity={0.8}
          >
            <LinearGradient
              colors={['#a855f7', '#ec4899']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.actionGradient}
            >
              <Ionicons name="create" size={24} color="#fff" />
              <Text style={styles.actionText}>Create Post</Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => router.push('/scheduler' as any)}
            activeOpacity={0.8}
          >
            <View style={styles.actionSecondary}>
              <Ionicons name="calendar" size={24} color="#a855f7" />
              <Text style={styles.actionTextSecondary}>Schedule</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => router.push('/analytics' as any)}
            activeOpacity={0.8}
          >
            <View style={styles.actionSecondary}>
              <Ionicons name="stats-chart" size={24} color="#a855f7" />
              <Text style={styles.actionTextSecondary}>Analytics</Text>
            </View>
          </TouchableOpacity>
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
  greeting: {
    fontSize: 14,
    color: '#888',
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 4,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  iconButton: {
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: -4,
    right: -4,
    backgroundColor: '#ef4444',
    borderRadius: 8,
    width: 16,
    height: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    fontSize: 10,
    color: '#fff',
    fontWeight: 'bold',
  },
  planBadge: {
    backgroundColor: 'rgba(168, 85, 247, 0.2)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#a855f7',
  },
  planText: {
    fontSize: 12,
    color: '#a855f7',
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    marginBottom: 12,
    marginHorizontal: -6,
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  seeAllText: {
    fontSize: 14,
    color: '#a855f7',
    fontWeight: '600',
  },
  scoreCard: {
    borderRadius: 16,
    overflow: 'hidden',
  },
  scoreGradient: {
    padding: 20,
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 16,
  },
  scoreHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  scoreValue: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
  },
  scoreLabel: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(16, 185, 129, 0.1)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    gap: 4,
  },
  scoreLabelText: {
    fontSize: 12,
    color: '#10b981',
    fontWeight: '600',
  },
  scoreBar: {
    height: 8,
    backgroundColor: '#1a1a1a',
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: 12,
  },
  scoreBarFill: {
    height: '100%',
    borderRadius: 4,
  },
  scoreDescription: {
    fontSize: 14,
    color: '#888',
    lineHeight: 20,
  },
  suggestionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#2a2a2a',
  },
  suggestionIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(168, 85, 247, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  suggestionContent: {
    flex: 1,
  },
  suggestionTitle: {
    fontSize: 14,
    color: '#fff',
    fontWeight: '600',
    marginBottom: 4,
  },
  suggestionPrediction: {
    fontSize: 12,
    color: '#10b981',
  },
  chartCard: {
    borderRadius: 16,
    overflow: 'hidden',
  },
  chartGradient: {
    padding: 20,
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 16,
  },
  chartHeader: {
    marginBottom: 16,
  },
  chartLegend: {
    flexDirection: 'row',
    gap: 20,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  legendDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  legendText: {
    fontSize: 12,
    color: '#888',
  },
  chartPlaceholder: {
    height: 180,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
  },
  chartPlaceholderText: {
    fontSize: 24,
    marginBottom: 8,
  },
  chartSubtext: {
    fontSize: 12,
    color: '#666',
  },
  trendCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#2a2a2a',
  },
  trendLeft: {
    flex: 1,
    marginRight: 12,
  },
  trendTopic: {
    fontSize: 14,
    color: '#fff',
    fontWeight: '600',
    marginBottom: 8,
  },
  trendScoreBar: {
    height: 4,
    backgroundColor: '#2a2a2a',
    borderRadius: 2,
    overflow: 'hidden',
  },
  trendScoreFill: {
    height: '100%',
    borderRadius: 2,
  },
  useTrendButton: {
    backgroundColor: 'rgba(168, 85, 247, 0.1)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#a855f7',
  },
  useTrendText: {
    fontSize: 12,
    color: '#a855f7',
    fontWeight: '600',
  },
  postsScroll: {
    paddingRight: 20,
  },
  postCard: {
    marginRight: 12,
    width: 140,
  },
  postImage: {
    width: 140,
    height: 140,
    borderRadius: 12,
    backgroundColor: '#1a1a1a',
  },
  postOverlay: {
    position: 'absolute',
    top: 8,
    left: 8,
    right: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  postPlatform: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderRadius: 8,
    padding: 6,
  },
  postStats: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderRadius: 8,
    padding: 6,
    gap: 4,
  },
  postEngagement: {
    fontSize: 12,
    color: '#fff',
    fontWeight: '600',
  },
  postDate: {
    fontSize: 12,
    color: '#666',
    marginTop: 8,
  },
  quickActions: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 24,
  },
  actionButton: {
    flex: 1,
    borderRadius: 12,
    overflow: 'hidden',
  },
  actionGradient: {
    alignItems: 'center',
    paddingVertical: 16,
    gap: 8,
  },
  actionText: {
    fontSize: 14,
    color: '#fff',
    fontWeight: '600',
  },
  actionSecondary: {
    alignItems: 'center',
    paddingVertical: 16,
    backgroundColor: '#1a1a1a',
    borderWidth: 1,
    borderColor: '#2a2a2a',
    borderRadius: 12,
    gap: 8,
  },
  actionTextSecondary: {
    fontSize: 14,
    color: '#a855f7',
    fontWeight: '600',
  },
});
