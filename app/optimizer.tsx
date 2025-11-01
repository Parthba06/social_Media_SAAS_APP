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
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import BottomNav from '../components/BottomNav';

const platforms = [
  { id: 'instagram', name: 'Instagram', icon: 'logo-instagram' },
  { id: 'youtube', name: 'YouTube', icon: 'logo-youtube' },
  { id: 'linkedin', name: 'LinkedIn', icon: 'logo-linkedin' },
  { id: 'tiktok', name: 'TikTok', icon: 'logo-tiktok' },
];

const aiTools = [
  { id: 'caption', title: 'Generate Caption', icon: 'text' },
  { id: 'hashtags', title: 'Suggest Hashtags', icon: 'pricetag' },
  { id: 'cta', title: 'Add CTA', icon: 'megaphone' },
  { id: 'optimize', title: 'Optimize Text', icon: 'sparkles' },
];

export default function OptimizerScreen() {
  const router = useRouter();
  const [selectedPlatform, setSelectedPlatform] = useState('instagram');
  const [caption, setCaption] = useState('');
  const [hashtags, setHashtags] = useState('');

  const handleGenerate = (tool: string) => {
    switch (tool) {
      case 'caption':
        setCaption('Transform your social media game with AI-powered insights! 🚀 Discover how data-driven decisions can boost your engagement by 3x.');
        break;
      case 'hashtags':
        setHashtags('#SocialMediaMarketing #ContentCreator #DigitalMarketing #AIMarketing #GrowthHacking');
        break;
      case 'cta':
        setCaption(caption + '\n\n👉 Link in bio to learn more!');
        break;
      case 'optimize':
        Alert.alert('AI Optimization', 'Your content has been optimized for maximum engagement!');
        break;
    }
  };

  const handlePublish = () => {
    Alert.alert('Success', 'Your post has been published!');
  };

  const handleSchedule = () => {
    router.push('/scheduler' as any);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="close" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Create Post</Text>
        <TouchableOpacity>
          <Ionicons name="ellipsis-horizontal" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Platform Selector */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Select Platform</Text>
          <View style={styles.platformsContainer}>
            {platforms.map((platform) => (
              <TouchableOpacity
                key={platform.id}
                style={[
                  styles.platformButton,
                  selectedPlatform === platform.id && styles.platformButtonActive,
                ]}
                onPress={() => setSelectedPlatform(platform.id)}
                activeOpacity={0.8}
              >
                <Ionicons
                  name={platform.icon as any}
                  size={24}
                  color={selectedPlatform === platform.id ? '#a855f7' : '#666'}
                />
                <Text
                  style={[
                    styles.platformName,
                    selectedPlatform === platform.id && styles.platformNameActive,
                  ]}
                >
                  {platform.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Media Upload */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Media</Text>
          <TouchableOpacity style={styles.uploadBox} activeOpacity={0.8}>
            <Ionicons name="cloud-upload-outline" size={48} color="#666" />
            <Text style={styles.uploadText}>Tap to upload image or video</Text>
            <Text style={styles.uploadSubtext}>Max size: 10MB</Text>
          </TouchableOpacity>
        </View>

        {/* Caption Input */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Caption</Text>
          <TextInput
            style={styles.captionInput}
            placeholder="Write your caption here..."
            placeholderTextColor="#666"
            multiline
            numberOfLines={6}
            value={caption}
            onChangeText={setCaption}
            textAlignVertical="top"
          />
          <View style={styles.captionFooter}>
            <Text style={styles.charCount}>{caption.length} / 2200</Text>
          </View>
        </View>

        {/* Hashtags Input */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Hashtags</Text>
          <TextInput
            style={styles.hashtagInput}
            placeholder="#hashtag1 #hashtag2 #hashtag3"
            placeholderTextColor="#666"
            value={hashtags}
            onChangeText={setHashtags}
          />
        </View>

        {/* AI Tools */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>AI Tools</Text>
          <View style={styles.aiToolsGrid}>
            {aiTools.map((tool) => (
              <TouchableOpacity
                key={tool.id}
                style={styles.aiToolCard}
                onPress={() => handleGenerate(tool.id)}
                activeOpacity={0.8}
              >
                <View style={styles.aiToolIcon}>
                  <Ionicons name={tool.icon as any} size={20} color="#a855f7" />
                </View>
                <Text style={styles.aiToolText}>{tool.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Preview */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Preview</Text>
          <View style={styles.previewCard}>
            <View style={styles.previewHeader}>
              <View style={styles.previewUser}>
                <View style={styles.previewAvatar}>
                  <Ionicons name="person" size={20} color="#666" />
                </View>
                <View>
                  <Text style={styles.previewUsername}>Your Account</Text>
                  <Text style={styles.previewTime}>Just now</Text>
                </View>
              </View>
            </View>
            
            <View style={styles.previewImage}>
              <Ionicons name="image-outline" size={48} color="#666" />
            </View>
            
            {caption ? (
              <Text style={styles.previewCaption}>{caption}</Text>
            ) : null}
            
            {hashtags ? (
              <Text style={styles.previewHashtags}>{hashtags}</Text>
            ) : null}
          </View>
        </View>

        <View style={{ height: 100 }} />
      </ScrollView>

      {/* Action Buttons */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.saveDraftButton}
          activeOpacity={0.8}
        >
          <Ionicons name="bookmark-outline" size={20} color="#a855f7" />
          <Text style={styles.saveDraftText}>Save Draft</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.scheduleButton}
          onPress={handleSchedule}
          activeOpacity={0.8}
        >
          <Ionicons name="calendar-outline" size={20} color="#fff" />
          <Text style={styles.scheduleText}>Schedule</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.publishButton}
          onPress={handlePublish}
          activeOpacity={0.8}
        >
          <LinearGradient
            colors={['#a855f7', '#ec4899']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.publishGradient}
          >
            <Ionicons name="send" size={20} color="#fff" />
            <Text style={styles.publishText}>Publish</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>

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
  content: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 20,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 12,
  },
  platformsContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  platformButton: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#2a2a2a',
  },
  platformButtonActive: {
    borderColor: '#a855f7',
    backgroundColor: 'rgba(168, 85, 247, 0.1)',
  },
  platformName: {
    fontSize: 12,
    color: '#666',
    marginTop: 8,
    fontWeight: '600',
  },
  platformNameActive: {
    color: '#a855f7',
  },
  uploadBox: {
    backgroundColor: '#1a1a1a',
    borderRadius: 16,
    padding: 40,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#2a2a2a',
    borderStyle: 'dashed',
  },
  uploadText: {
    fontSize: 14,
    color: '#fff',
    marginTop: 12,
    fontWeight: '600',
  },
  uploadSubtext: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  captionInput: {
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    padding: 16,
    fontSize: 15,
    color: '#fff',
    borderWidth: 1,
    borderColor: '#2a2a2a',
    minHeight: 120,
  },
  captionFooter: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 8,
  },
  charCount: {
    fontSize: 12,
    color: '#666',
  },
  hashtagInput: {
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    padding: 16,
    fontSize: 15,
    color: '#a855f7',
    borderWidth: 1,
    borderColor: '#2a2a2a',
  },
  aiToolsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  aiToolCard: {
    width: '48%',
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#2a2a2a',
  },
  aiToolIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(168, 85, 247, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  aiToolText: {
    fontSize: 12,
    color: '#fff',
    fontWeight: '600',
    textAlign: 'center',
  },
  previewCard: {
    backgroundColor: '#1a1a1a',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#2a2a2a',
  },
  previewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  previewUser: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  previewAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#2a2a2a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  previewUsername: {
    fontSize: 14,
    fontWeight: '600',
    color: '#fff',
  },
  previewTime: {
    fontSize: 12,
    color: '#666',
  },
  previewImage: {
    height: 200,
    backgroundColor: '#2a2a2a',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  previewCaption: {
    fontSize: 14,
    color: '#fff',
    lineHeight: 20,
    marginBottom: 8,
  },
  previewHashtags: {
    fontSize: 14,
    color: '#a855f7',
  },
  footer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingBottom: 20,
    paddingTop: 12,
    gap: 12,
    backgroundColor: '#0a0a0a',
    borderTopWidth: 1,
    borderTopColor: '#1a1a1a',
  },
  saveDraftButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    paddingVertical: 14,
    gap: 6,
    borderWidth: 1,
    borderColor: '#2a2a2a',
  },
  saveDraftText: {
    fontSize: 14,
    color: '#a855f7',
    fontWeight: '600',
  },
  scheduleButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2a2a2a',
    borderRadius: 12,
    paddingVertical: 14,
    gap: 6,
  },
  scheduleText: {
    fontSize: 14,
    color: '#fff',
    fontWeight: '600',
  },
  publishButton: {
    flex: 1,
    borderRadius: 12,
    overflow: 'hidden',
  },
  publishGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    gap: 6,
  },
  publishText: {
    fontSize: 14,
    color: '#fff',
    fontWeight: '600',
  },
});
