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

const tabs = ['Captions', 'Hashtags', 'Templates'];

const captionIdeas = [
  {
    id: 1,
    caption: 'Transform your social media game with AI-powered insights 🚀',
    engagement: '92%',
    bestTime: '6:00 PM',
    platforms: ['instagram', 'linkedin'],
  },
  {
    id: 2,
    caption: 'Behind the scenes of creating viral content 📸',
    engagement: '88%',
    bestTime: '12:00 PM',
    platforms: ['instagram', 'tiktok'],
  },
  {
    id: 3,
    caption: 'The secret to consistent growth? Data-driven decisions 📊',
    engagement: '85%',
    bestTime: '9:00 AM',
    platforms: ['linkedin', 'twitter'],
  },
];

const hashtagSuggestions = [
  {
    id: 1,
    hashtag: '#SocialMediaMarketing',
    reach: '2.5M',
    competition: 'Medium',
    trending: true,
  },
  {
    id: 2,
    hashtag: '#ContentCreator',
    reach: '1.8M',
    competition: 'High',
    trending: true,
  },
  {
    id: 3,
    hashtag: '#DigitalMarketing2024',
    reach: '890K',
    competition: 'Low',
    trending: false,
  },
];

const templates = [
  {
    id: 1,
    name: 'Product Showcase',
    type: 'Carousel',
    engagement: '94%',
    color: '#a855f7',
  },
  {
    id: 2,
    name: 'Behind the Scenes',
    type: 'Reel',
    engagement: '89%',
    color: '#ec4899',
  },
  {
    id: 3,
    name: 'Educational Thread',
    type: 'Post',
    engagement: '86%',
    color: '#f59e0b',
  },
];

export default function AISuggestionsScreen() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('Captions');

  const renderContent = () => {
    switch (activeTab) {
      case 'Captions':
        return captionIdeas.map((idea) => (
          <View key={idea.id} style={styles.ideaCard}>
            <View style={styles.ideaHeader}>
              <View style={styles.engagementBadge}>
                <Ionicons name="trending-up" size={14} color="#10b981" />
                <Text style={styles.engagementText}>{idea.engagement} predicted</Text>
              </View>
              <Text style={styles.bestTime}>Best: {idea.bestTime}</Text>
            </View>
            
            <Text style={styles.captionText}>{idea.caption}</Text>
            
            <View style={styles.ideaFooter}>
              <View style={styles.platformIcons}>
                {idea.platforms.map((platform) => (
                  <View key={platform} style={styles.platformIcon}>
                    <Ionicons name={`logo-${platform}` as any} size={16} color="#a855f7" />
                  </View>
                ))}
              </View>
              
              <TouchableOpacity
                style={styles.useButton}
                onPress={() => router.push('/optimizer' as any)}
                activeOpacity={0.8}
              >
                <Text style={styles.useButtonText}>Use in Optimizer</Text>
                <Ionicons name="arrow-forward" size={14} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
        ));

      case 'Hashtags':
        return hashtagSuggestions.map((hashtag) => (
          <View key={hashtag.id} style={styles.hashtagCard}>
            <View style={styles.hashtagLeft}>
              <View style={styles.hashtagHeader}>
                <Text style={styles.hashtagText}>{hashtag.hashtag}</Text>
                {hashtag.trending && (
                  <View style={styles.trendingBadge}>
                    <Ionicons name="flame" size={12} color="#f59e0b" />
                    <Text style={styles.trendingText}>Trending</Text>
                  </View>
                )}
              </View>
              <View style={styles.hashtagStats}>
                <View style={styles.statItem}>
                  <Ionicons name="eye" size={14} color="#666" />
                  <Text style={styles.statText}>{hashtag.reach} reach</Text>
                </View>
                <View style={styles.statItem}>
                  <Ionicons name="flash" size={14} color="#666" />
                  <Text style={styles.statText}>{hashtag.competition} competition</Text>
                </View>
              </View>
            </View>
            
            <TouchableOpacity style={styles.copyButton}>
              <Ionicons name="copy-outline" size={20} color="#a855f7" />
            </TouchableOpacity>
          </View>
        ));

      case 'Templates':
        return templates.map((template) => (
          <TouchableOpacity
            key={template.id}
            style={styles.templateCard}
            activeOpacity={0.8}
          >
            <LinearGradient
              colors={[template.color, `${template.color}80`]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.templateGradient}
            >
              <View style={styles.templateContent}>
                <View>
                  <Text style={styles.templateName}>{template.name}</Text>
                  <Text style={styles.templateType}>{template.type}</Text>
                </View>
                <View style={styles.templateRight}>
                  <View style={styles.templateEngagement}>
                    <Ionicons name="trending-up" size={14} color="#fff" />
                    <Text style={styles.templateEngagementText}>{template.engagement}</Text>
                  </View>
                  <Ionicons name="chevron-forward" size={20} color="#fff" />
                </View>
              </View>
            </LinearGradient>
          </TouchableOpacity>
        ));

      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>AI Suggestions</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Tabs */}
      <View style={styles.tabsContainer}>
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[styles.tab, activeTab === tab && styles.tabActive]}
            onPress={() => setActiveTab(tab)}
            activeOpacity={0.8}
          >
            <Text style={[styles.tabText, activeTab === tab && styles.tabTextActive]}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Content */}
      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {renderContent()}
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
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  tabsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 20,
    gap: 12,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#2a2a2a',
  },
  tabActive: {
    backgroundColor: 'rgba(168, 85, 247, 0.1)',
    borderColor: '#a855f7',
  },
  tabText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '600',
  },
  tabTextActive: {
    color: '#a855f7',
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 20,
  },
  ideaCard: {
    backgroundColor: '#1a1a1a',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#2a2a2a',
  },
  ideaHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  engagementBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(16, 185, 129, 0.1)',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    gap: 4,
  },
  engagementText: {
    fontSize: 12,
    color: '#10b981',
    fontWeight: '600',
  },
  bestTime: {
    fontSize: 12,
    color: '#888',
  },
  captionText: {
    fontSize: 15,
    color: '#fff',
    lineHeight: 22,
    marginBottom: 16,
  },
  ideaFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  platformIcons: {
    flexDirection: 'row',
    gap: 8,
  },
  platformIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(168, 85, 247, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  useButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#a855f7',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    gap: 6,
  },
  useButtonText: {
    fontSize: 12,
    color: '#fff',
    fontWeight: '600',
  },
  hashtagCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#2a2a2a',
  },
  hashtagLeft: {
    flex: 1,
  },
  hashtagHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    gap: 8,
  },
  hashtagText: {
    fontSize: 16,
    color: '#a855f7',
    fontWeight: '600',
  },
  trendingBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(245, 158, 11, 0.1)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    gap: 4,
  },
  trendingText: {
    fontSize: 10,
    color: '#f59e0b',
    fontWeight: '600',
  },
  hashtagStats: {
    flexDirection: 'row',
    gap: 16,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  statText: {
    fontSize: 12,
    color: '#666',
  },
  copyButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(168, 85, 247, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  templateCard: {
    borderRadius: 16,
    marginBottom: 16,
    overflow: 'hidden',
  },
  templateGradient: {
    padding: 20,
  },
  templateContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  templateName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  templateType: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  templateRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  templateEngagement: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  templateEngagementText: {
    fontSize: 14,
    color: '#fff',
    fontWeight: '600',
  },
});
