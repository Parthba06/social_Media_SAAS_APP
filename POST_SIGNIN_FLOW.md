# Social Media Analytics SaaS - Post Sign-In Flow

## 🎯 Complete User Journey

This document outlines the complete post-sign-in flow for the Social Media Analytics SaaS application.

---

## 📱 Flow Overview

```
Sign In/Sign Up → Onboarding (new users) → Dashboard → All Features
```

---

## 🚀 Screens & Features

### 1. **Sign-In Success** (`/login`)
- Email and password authentication
- Eye icon to toggle password visibility
- Social login options (Google, Instagram, X, TikTok)
- Routes to:
  - `/dashboard` for existing users
  - `/onboarding` for new users (via signup)

### 2. **Onboarding Wizard** (`/onboarding`)
A 5-step wizard for new users:

#### Step 1: Welcome
- Introduction to SocialGrow platform
- Rocket icon animation
- Skip option available

#### Step 2: Connect Social Accounts
- Select platforms: Instagram, YouTube, LinkedIn, TikTok, Twitter, Facebook
- Multi-select with visual feedback
- Platform icons with brand colors

#### Step 3: Choose Your Niche
- Content type selection
- Options: Fashion, Tech, Fitness, Food, Travel, Business, Gaming, Education
- Single selection chips

#### Step 4: Set Growth Goals
- Multi-select goals:
  - Grow Followers
  - Boost Engagement
  - Increase Reach
  - Drive Conversions

#### Step 5: Choose Plan
- Free: 1 account, basic analytics, 10 AI suggestions/month
- Pro (Popular): 5 accounts, advanced analytics, unlimited AI suggestions
- Enterprise: Unlimited accounts, team collaboration, white label

**Features:**
- Progress bar (Step X of 5)
- Back/Continue navigation
- Skip for now option
- Gradient accent buttons

---

### 3. **Main Dashboard** (`/dashboard`)

**Header:**
- Personalized greeting (Good Morning 👋)
- User name display
- Notification bell with badge
- Plan indicator (PRO badge)

**Quick Stats Cards:**
- Followers: 24.5K (+12.5%)
- Engagement: 8.2% (+3.2%)
- Reach: 156K (+18.7%)
- Impressions: 342K (+25.3%)

**AI Growth Score:**
- Score: 87/100 (Excellent)
- Visual progress bar with gradient
- AI-generated insight text

**AI Suggestions (Top 3):**
- Post about trending topics
- Best time to post
- Hashtag recommendations
- Each with engagement prediction
- "See All" link to AI Suggestions page

**Growth Overview Chart:**
- Line chart placeholder
- Followers & Engagement trends
- Last 30 days data

**Trending Topics Widget:**
- Top 3 trending topics with viral scores
- Progress bars with custom colors
- "Use this trend" CTA buttons

**Recent Posts Carousel:**
- Horizontal scroll
- Post thumbnails with platform icons
- Engagement metrics
- Post date

**Quick Action Buttons:**
- Create Post (gradient button)
- Schedule (secondary button)
- View Analytics (secondary button)

---

### 4. **AI Suggestions Page** (`/ai-suggestions`)

**Tabs:**
- Captions
- Hashtags
- Templates

**Captions Tab:**
- AI-generated caption ideas
- Engagement prediction (92%, 88%, etc.)
- Best time to post
- Platform compatibility icons
- "Use in Optimizer" button

**Hashtags Tab:**
- Trending hashtags with flame icon
- Reach statistics (2.5M, 1.8M, etc.)
- Competition level (Low/Medium/High)
- Copy button for quick use

**Templates Tab:**
- Content templates with gradient cards
- Template types (Carousel, Reel, Post)
- Engagement prediction
- Color-coded by category

---

### 5. **Content Optimizer** (`/optimizer`)

**Platform Selector:**
- Instagram, YouTube, LinkedIn, TikTok
- Single selection with visual feedback

**Media Upload:**
- Drag & drop area
- Image/video upload
- Max size: 10MB

**Caption Input:**
- Multi-line text area
- Character counter (0/2200)

**Hashtags Input:**
- Dedicated hashtag field
- Purple text styling

**AI Tools (4 options):**
- Generate Caption
- Suggest Hashtags
- Add CTA
- Optimize Text

**Preview Section:**
- Platform-specific preview
- User avatar and name
- Post image placeholder
- Caption and hashtags display

**Action Buttons:**
- Save Draft
- Schedule (routes to scheduler)
- Publish (gradient button)

---

### 6. **Scheduler / Calendar** (`/scheduler`)

**View Toggle:**
- List view (default)
- Calendar view (coming soon)

**Best Times to Post:**
- Monday 6:00 PM (94%)
- Wednesday 12:00 PM (91%)
- Friday 9:00 AM (89%)

**Scheduled Posts:**
- Date and time display
- Platform icon
- Status badge (Scheduled/Draft)
- Caption preview
- Engagement prediction
- Edit and delete actions

**Floating Action Button:**
- Quick access to create new post
- Gradient circle with + icon

---

### 7. **Analytics Page** (`/analytics`)

**AI Insight Card:**
- Gradient background
- Weekly summary
- Actionable recommendations

**Filters:**
- Platform filter (All, Instagram, YouTube, LinkedIn, TikTok)
- Time range (7 Days, 30 Days, 90 Days, Year)

**Stats Cards:**
- Total Followers
- Engagement Rate
- Total Reach
- Impressions

**Charts:**
- Follower Growth Chart
- Engagement Trends Chart
- Chart placeholders with icons

**Top Performing Posts:**
- Post title
- Platform icon
- Engagement and reach metrics
- Click to view details

**Export Options:**
- PDF Report
- CSV Data
- PowerPoint Presentation

---

### 8. **Trends & Viral Predictor** (`/trends`)

**Viral Score Info:**
- Explanation card with gradient
- AI-powered prediction methodology

**Trending Topics:**
- Ranked list (#1, #2, #3, etc.)
- Topic name and category badge
- Reach and engagement stats
- Viral score bar (0-100)
- Color-coded by score
- "Use" button to create post

**Content Type Predictions:**
- Behind-the-scenes content (92%)
- Educational carousels (89%)
- Short-form videos (87%)
- Best platform recommendations

**Trending Hashtags:**
- Chip-style layout
- Flame icon for trending
- Quick copy functionality

---

### 9. **Settings / Profile** (`/settings`)

**Profile Section:**
- User avatar
- Name and email
- Edit profile option

**Connected Accounts:**
- Instagram, YouTube, LinkedIn, TikTok
- Connection status
- Username display
- Connect/Disconnect buttons

**Plan & Billing:**
- Current plan (Pro - $29/month)
- Payment method
- Billing history

**Notifications:**
- Push Notifications (toggle)
- Email Reports (toggle)
- AI Suggestions (toggle)

**General:**
- Help & Support
- Terms & Privacy
- About

**Logout:**
- Red logout button
- Confirmation dialog

---

## 🎨 Design System

### Color Palette (Dark Theme)
- **Background:** #0a0a0a (deep black)
- **Cards:** #1a1a1a (dark gray)
- **Borders:** #2a2a2a (medium gray)
- **Primary:** #a855f7 (purple)
- **Secondary:** #ec4899 (pink)
- **Accent:** #f59e0b (orange)
- **Success:** #10b981 (green)
- **Error:** #ef4444 (red)
- **Text Primary:** #ffffff (white)
- **Text Secondary:** #888888 (gray)

### Typography
- **Headers:** 24-28px, Bold
- **Section Titles:** 20px, Bold
- **Body:** 14-16px, Regular
- **Captions:** 12-13px, Medium

### Components
- **Rounded corners:** 12-16px
- **Gradient buttons:** Purple to Pink
- **Cards:** Dark background with subtle borders
- **Icons:** Ionicons library
- **Badges:** Rounded with background opacity

---

## 🔄 Navigation Flow

### Bottom Navigation (5 tabs)
1. **Dashboard** - Home icon
2. **Analytics** - Stats chart icon
3. **Create** - Add circle icon (center, larger)
4. **Schedule** - Calendar icon
5. **Profile** - Person icon

### Route Structure
```
/login → /dashboard
/signup → /onboarding → /dashboard
/dashboard → /ai-suggestions
/dashboard → /optimizer
/dashboard → /scheduler
/dashboard → /analytics
/dashboard → /trends
/dashboard → /settings
```

---

## ✨ Key Features

### AI-Powered Insights
- Content suggestions with engagement predictions
- Best time to post recommendations
- Viral score predictions
- Hashtag suggestions
- Caption generation

### Analytics
- Real-time stats tracking
- Growth charts
- Performance metrics
- Export capabilities

### Content Management
- Multi-platform support
- Scheduling system
- Draft saving
- Preview functionality

### User Experience
- Dark theme throughout
- Smooth transitions
- Loading states
- Error handling
- Confirmation dialogs

---

## 🚀 Getting Started

1. **Sign Up:** Create account with email/password
2. **Onboarding:** Complete 5-step setup wizard
3. **Dashboard:** View your analytics and insights
4. **Create Content:** Use AI tools to optimize posts
5. **Schedule:** Plan your content calendar
6. **Analyze:** Track performance and growth
7. **Optimize:** Use trends and predictions

---

## 📝 Notes

- All screens use dark theme (#0a0a0a background)
- Gradient accents (purple/pink/orange) for CTAs
- Consistent card design with rounded corners
- Bottom navigation on all main screens
- AI features integrated throughout
- Mobile-first responsive design
- Smooth animations and transitions

---

**Built with:** React Native, Expo Router, TypeScript, Linear Gradient
**Design Style:** Modern, Clean, Dark Theme, Gradient Accents
