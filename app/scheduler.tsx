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

const scheduledPosts = [
  {
    id: 1,
    date: '2024-01-15',
    time: '18:00',
    platform: 'instagram',
    caption: 'Transform your social media game...',
    engagement: '92%',
    status: 'scheduled',
  },
  {
    id: 2,
    date: '2024-01-16',
    time: '12:00',
    platform: 'linkedin',
    caption: 'The secret to consistent growth...',
    engagement: '88%',
    status: 'scheduled',
  },
  {
    id: 3,
    date: '2024-01-17',
    time: '09:00',
    platform: 'youtube',
    caption: 'Behind the scenes of creating...',
    engagement: '85%',
    status: 'draft',
  },
];

const bestTimes = [
  { day: 'Monday', time: '6:00 PM', engagement: '94%' },
  { day: 'Wednesday', time: '12:00 PM', engagement: '91%' },
  { day: 'Friday', time: '9:00 AM', engagement: '89%' },
];

export default function SchedulerScreen() {
  const router = useRouter();
  const [view, setView] = useState<'list' | 'calendar'>('list');

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Scheduler</Text>
        <View style={styles.headerRight}>
          <TouchableOpacity
            style={[styles.viewButton, view === 'list' && styles.viewButtonActive]}
            onPress={() => setView('list')}
          >
            <Ionicons name="list" size={20} color={view === 'list' ? '#a855f7' : '#666'} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.viewButton, view === 'calendar' && styles.viewButtonActive]}
            onPress={() => setView('calendar')}
          >
            <Ionicons name="calendar" size={20} color={view === 'calendar' ? '#a855f7' : '#666'} />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Best Times to Post */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Best Times to Post</Text>
          <View style={styles.bestTimesContainer}>
            {bestTimes.map((item, index) => (
              <View key={index} style={styles.bestTimeCard}>
                <View style={styles.bestTimeLeft}>
                  <Text style={styles.bestTimeDay}>{item.day}</Text>
                  <Text style={styles.bestTimeTime}>{item.time}</Text>
                </View>
                <View style={styles.bestTimeRight}>
                  <Ionicons name="trending-up" size={16} color="#10b981" />
                  <Text style={styles.bestTimeEngagement}>{item.engagement}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Scheduled Posts */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Scheduled Posts</Text>
            <TouchableOpacity onPress={() => router.push('/optimizer' as any)}>
              <Ionicons name="add-circle" size={28} color="#a855f7" />
            </TouchableOpacity>
          </View>

          {scheduledPosts.map((post) => (
            <View key={post.id} style={styles.postCard}>
              <View style={styles.postHeader}>
                <View style={styles.postPlatform}>
                  <Ionicons name={`logo-${post.platform}` as any} size={20} color="#a855f7" />
                </View>
                <View style={styles.postDateTime}>
                  <Text style={styles.postDate}>{post.date}</Text>
                  <Text style={styles.postTime}>{post.time}</Text>
                </View>
                <View style={[
                  styles.statusBadge,
                  post.status === 'draft' && styles.statusBadgeDraft,
                ]}>
                  <Text style={[
                    styles.statusText,
                    post.status === 'draft' && styles.statusTextDraft,
                  ]}>
                    {post.status}
                  </Text>
                </View>
              </View>

              <Text style={styles.postCaption} numberOfLines={2}>
                {post.caption}
              </Text>

              <View style={styles.postFooter}>
                <View style={styles.postEngagement}>
                  <Ionicons name="trending-up" size={14} color="#10b981" />
                  <Text style={styles.postEngagementText}>{post.engagement} predicted</Text>
                </View>
                <View style={styles.postActions}>
                  <TouchableOpacity style={styles.actionIcon}>
                    <Ionicons name="create-outline" size={20} color="#a855f7" />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.actionIcon}>
                    <Ionicons name="trash-outline" size={20} color="#ef4444" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}
        </View>

        {/* Calendar View Placeholder */}
        {view === 'calendar' && (
          <View style={styles.calendarPlaceholder}>
            <Ionicons name="calendar-outline" size={64} color="#666" />
            <Text style={styles.calendarText}>Calendar View</Text>
            <Text style={styles.calendarSubtext}>Visual calendar coming soon</Text>
          </View>
        )}

        <View style={{ height: 100 }} />
      </ScrollView>

      {/* Floating Action Button */}
      <TouchableOpacity
        style={styles.fab}
        onPress={() => router.push('/optimizer' as any)}
        activeOpacity={0.8}
      >
        <LinearGradient
          colors={['#a855f7', '#ec4899']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.fabGradient}
        >
          <Ionicons name="add" size={28} color="#fff" />
        </LinearGradient>
      </TouchableOpacity>

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
  headerRight: {
    flexDirection: 'row',
    gap: 8,
  },
  viewButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#1a1a1a',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#2a2a2a',
  },
  viewButtonActive: {
    backgroundColor: 'rgba(168, 85, 247, 0.1)',
    borderColor: '#a855f7',
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 20,
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
    marginBottom: 16,
  },
  bestTimesContainer: {
    gap: 12,
  },
  bestTimeCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#2a2a2a',
  },
  bestTimeLeft: {
    flex: 1,
  },
  bestTimeDay: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 4,
  },
  bestTimeTime: {
    fontSize: 14,
    color: '#888',
  },
  bestTimeRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  bestTimeEngagement: {
    fontSize: 14,
    color: '#10b981',
    fontWeight: '600',
  },
  postCard: {
    backgroundColor: '#1a1a1a',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#2a2a2a',
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    gap: 12,
  },
  postPlatform: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(168, 85, 247, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  postDateTime: {
    flex: 1,
  },
  postDate: {
    fontSize: 14,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 2,
  },
  postTime: {
    fontSize: 12,
    color: '#888',
  },
  statusBadge: {
    backgroundColor: 'rgba(16, 185, 129, 0.1)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  statusBadgeDraft: {
    backgroundColor: 'rgba(245, 158, 11, 0.1)',
  },
  statusText: {
    fontSize: 12,
    color: '#10b981',
    fontWeight: '600',
    textTransform: 'capitalize',
  },
  statusTextDraft: {
    color: '#f59e0b',
  },
  postCaption: {
    fontSize: 14,
    color: '#ccc',
    lineHeight: 20,
    marginBottom: 12,
  },
  postFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  postEngagement: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  postEngagementText: {
    fontSize: 12,
    color: '#10b981',
    fontWeight: '600',
  },
  postActions: {
    flexDirection: 'row',
    gap: 12,
  },
  actionIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#2a2a2a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  calendarPlaceholder: {
    alignItems: 'center',
    paddingVertical: 60,
  },
  calendarText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 16,
  },
  calendarSubtext: {
    fontSize: 14,
    color: '#666',
    marginTop: 8,
  },
  fab: {
    position: 'absolute',
    bottom: 100,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    overflow: 'hidden',
    elevation: 8,
    shadowColor: '#a855f7',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  fabGradient: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
