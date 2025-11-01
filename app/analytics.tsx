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
import BottomNav from '../components/BottomNav';
import StatCard from '../components/StatCard';

const platforms = ['All', 'Instagram', 'YouTube', 'LinkedIn', 'TikTok'];
const timeRanges = ['7 Days', '30 Days', '90 Days', 'Year'];

const topPosts = [
  {
    id: 1,
    title: 'AI Marketing Tips',
    engagement: '12.5K',
    reach: '45.2K',
    platform: 'instagram',
  },
  {
    id: 2,
    title: 'Growth Strategy 2024',
    engagement: '8.9K',
    reach: '32.1K',
    platform: 'linkedin',
  },
  {
    id: 3,
    title: 'Behind the Scenes',
    engagement: '6.7K',
    reach: '28.4K',
    platform: 'youtube',
  },
];

export default function AnalyticsScreen() {
  const router = useRouter();
  const [selectedPlatform, setSelectedPlatform] = useState('All');
  const [selectedRange, setSelectedRange] = useState('30 Days');

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Analytics</Text>
        <TouchableOpacity>
          <Ionicons name="download-outline" size={24} color="#a855f7" />
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* AI Insight */}
        <View style={styles.insightCard}>
          <LinearGradient
            colors={['#a855f7', '#ec4899']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.insightGradient}
          >
            <View style={styles.insightIcon}>
              <Ionicons name="sparkles" size={24} color="#fff" />
            </View>
            <View style={styles.insightContent}>
              <Text style={styles.insightTitle}>AI Insight</Text>
              <Text style={styles.insightText}>
                Your engagement increased 23% this week! Keep posting at 6 PM for best results.
              </Text>
            </View>
          </LinearGradient>
        </View>

        {/* Platform Filter */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filterScroll}
        >
          {platforms.map((platform) => (
            <TouchableOpacity
              key={platform}
              style={[
                styles.filterChip,
                selectedPlatform === platform && styles.filterChipActive,
              ]}
              onPress={() => setSelectedPlatform(platform)}
              activeOpacity={0.8}
            >
              <Text
                style={[
                  styles.filterText,
                  selectedPlatform === platform && styles.filterTextActive,
                ]}
              >
                {platform}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Time Range Filter */}
        <View style={styles.timeRangeContainer}>
          {timeRanges.map((range) => (
            <TouchableOpacity
              key={range}
              style={[
                styles.timeRangeChip,
                selectedRange === range && styles.timeRangeChipActive,
              ]}
              onPress={() => setSelectedRange(range)}
              activeOpacity={0.8}
            >
              <Text
                style={[
                  styles.timeRangeText,
                  selectedRange === range && styles.timeRangeTextActive,
                ]}
              >
                {range}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Stats Cards */}
        <View style={styles.statsContainer}>
          <StatCard
            title="Total Followers"
            value="24.5K"
            change="+12.5%"
            icon="people"
            isPositive={true}
          />
          <StatCard
            title="Engagement Rate"
            value="8.2%"
            change="+3.2%"
            icon="heart"
            isPositive={true}
          />
        </View>
        <View style={styles.statsContainer}>
          <StatCard
            title="Total Reach"
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

        {/* Growth Chart */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Follower Growth</Text>
          <View style={styles.chartCard}>
            <LinearGradient
              colors={['#2a2a2a', '#1f1f1f']}
              style={styles.chartGradient}
            >
              <View style={styles.chartPlaceholder}>
                <Ionicons name="bar-chart" size={48} color="#666" />
                <Text style={styles.chartText}>Growth Chart</Text>
                <Text style={styles.chartSubtext}>+2,450 followers this month</Text>
              </View>
            </LinearGradient>
          </View>
        </View>

        {/* Engagement Chart */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Engagement Trends</Text>
          <View style={styles.chartCard}>
            <LinearGradient
              colors={['#2a2a2a', '#1f1f1f']}
              style={styles.chartGradient}
            >
              <View style={styles.chartPlaceholder}>
                <Ionicons name="pulse" size={48} color="#666" />
                <Text style={styles.chartText}>Engagement Chart</Text>
                <Text style={styles.chartSubtext}>Peak engagement at 6 PM</Text>
              </View>
            </LinearGradient>
          </View>
        </View>

        {/* Top Performing Posts */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Top Performing Posts</Text>
          {topPosts.map((post) => (
            <View key={post.id} style={styles.postCard}>
              <View style={styles.postLeft}>
                <View style={styles.postPlatform}>
                  <Ionicons name={`logo-${post.platform}` as any} size={20} color="#a855f7" />
                </View>
                <View style={styles.postInfo}>
                  <Text style={styles.postTitle}>{post.title}</Text>
                  <View style={styles.postStats}>
                    <View style={styles.postStat}>
                      <Ionicons name="heart" size={14} color="#666" />
                      <Text style={styles.postStatText}>{post.engagement}</Text>
                    </View>
                    <View style={styles.postStat}>
                      <Ionicons name="eye" size={14} color="#666" />
                      <Text style={styles.postStatText}>{post.reach}</Text>
                    </View>
                  </View>
                </View>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#666" />
            </View>
          ))}
        </View>

        {/* Export Options */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Export Report</Text>
          <View style={styles.exportContainer}>
            <TouchableOpacity style={styles.exportButton} activeOpacity={0.8}>
              <Ionicons name="document-text" size={24} color="#a855f7" />
              <Text style={styles.exportText}>PDF</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.exportButton} activeOpacity={0.8}>
              <Ionicons name="grid" size={24} color="#10b981" />
              <Text style={styles.exportText}>CSV</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.exportButton} activeOpacity={0.8}>
              <Ionicons name="easel" size={24} color="#f59e0b" />
              <Text style={styles.exportText}>PPT</Text>
            </TouchableOpacity>
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
  insightCard: {
    borderRadius: 16,
    marginBottom: 20,
    overflow: 'hidden',
  },
  insightGradient: {
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
  },
  insightIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  insightContent: {
    flex: 1,
  },
  insightTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 6,
  },
  insightText: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.9)',
    lineHeight: 20,
  },
  filterScroll: {
    paddingRight: 20,
    marginBottom: 20,
  },
  filterChip: {
    backgroundColor: '#1a1a1a',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginRight: 12,
    borderWidth: 1,
    borderColor: '#2a2a2a',
  },
  filterChipActive: {
    backgroundColor: 'rgba(168, 85, 247, 0.2)',
    borderColor: '#a855f7',
  },
  filterText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '600',
  },
  filterTextActive: {
    color: '#a855f7',
  },
  timeRangeContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    gap: 8,
  },
  timeRangeChip: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    paddingVertical: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#2a2a2a',
  },
  timeRangeChipActive: {
    backgroundColor: 'rgba(168, 85, 247, 0.1)',
    borderColor: '#a855f7',
  },
  timeRangeText: {
    fontSize: 12,
    color: '#666',
    fontWeight: '600',
  },
  timeRangeTextActive: {
    color: '#a855f7',
  },
  statsContainer: {
    flexDirection: 'row',
    marginBottom: 12,
    marginHorizontal: -6,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 16,
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
  chartPlaceholder: {
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
  },
  chartText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    marginTop: 12,
  },
  chartSubtext: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  postCard: {
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
  postLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  postPlatform: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(168, 85, 247, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  postInfo: {
    flex: 1,
  },
  postTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 6,
  },
  postStats: {
    flexDirection: 'row',
    gap: 16,
  },
  postStat: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  postStatText: {
    fontSize: 12,
    color: '#666',
  },
  exportContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  exportButton: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#2a2a2a',
  },
  exportText: {
    fontSize: 12,
    color: '#fff',
    fontWeight: '600',
    marginTop: 8,
  },
});
