# Intern Portal - Full Stack Application

A modern full-stack React application for intern fundraising management, featuring dashboard analytics, leaderboards, and reward systems.

![Intern Portal](https://images.unsplash.com/photo-1553484771-371a605b060b?w=1200&h=300&fit=crop)

## 🚀 Features

### Frontend
- **Modern UI**: Beautiful gradient-based design with glassmorphic effects
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Dashboard**: Comprehensive intern dashboard with fundraising metrics
- **Leaderboards**: Competitive rankings with achievements
- **Authentication**: Login/signup flows (mock implementation)
- **Rewards System**: Gamified achievements and progress tracking
- **Referral System**: Share codes and track referrals

### Backend
- **REST API**: Express.js server with TypeScript
- **Mock Data**: Comprehensive dummy data for development
- **CORS Enabled**: Ready for cross-origin requests
- **Type Safety**: Shared TypeScript interfaces

## 🛠 Tech Stack

- **Frontend**: React 18, TypeScript, Vite, TailwindCSS
- **Backend**: Express.js, TypeScript, Node.js
- **UI Components**: Radix UI + Custom Components
- **Styling**: TailwindCSS 3 with custom design system
- **Icons**: Lucide React
- **State Management**: React hooks + localStorage
- **Build Tool**: Vite
- **Package Manager**: npm

## 📁 Project Structure

```
├── client/                     # React frontend
│   ├── components/
│   │   ├── ui/                # Reusable UI components (Radix-based)
│   │   └── Layout.tsx         # Main layout component
│   ├── pages/                 # Route components
│   │   ├── Index.tsx          # Landing page
│   │   ├── Login.tsx          # Login page
│   │   ├── Signup.tsx         # Signup page
│   │   ├── Dashboard.tsx      # Main dashboard
│   │   ├── Leaderboard.tsx    # Rankings page
│   │   └── NotFound.tsx       # 404 page
│   ├── hooks/                 # Custom React hooks
│   ├── lib/                   # Utility functions
│   ├── App.tsx                # App entry point with routing
│   └── global.css             # Global styles and CSS variables
├── server/                     # Express backend
│   ├── routes/                # API route handlers
│   │   ├── auth.ts            # Authentication endpoints
│   │   ├── intern.ts          # Intern profile endpoints
│   │   ├── leaderboard.ts     # Leaderboard endpoints
│   │   └── demo.ts            # Demo/example endpoint
│   └── index.ts               # Server setup and configuration
├── shared/                     # Shared TypeScript types
│   └── api.ts                 # API interfaces and types
└── public/                     # Static assets
```

## 🚦 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd intern-portal
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   
   This starts both frontend and backend on http://localhost:8080

### Available Scripts

```bash
# Development
npm run dev          # Start dev server (client + server)

# Building
npm run build        # Build for production
npm run build:client # Build client only
npm run build:server # Build server only

# Production
npm start           # Start production server

# Testing & Quality
npm test            # Run tests
npm run typecheck   # TypeScript validation
npm run format.fix  # Format code with Prettier
```

## 🌐 API Documentation

### Authentication Endpoints

#### POST `/api/auth/login`
Login with email and password (mock - any credentials work)

**Request:**
```json
{
  "email": "user@example.com",
  "password": "password"
}
```

**Response:**
```json
{
  "success": true,
  "intern": {
    "id": "1",
    "name": "Krishna Kumar",
    "email": "user@example.com",
    "referralCode": "krishna2025",
    "totalDonationsRaised": 15750,
    "avatar": "https://...",
    "joinedDate": "2024-01-15"
  },
  "message": "Login successful"
}
```

#### POST `/api/auth/signup`
Create new account

**Request:**
```json
{
  "name": "Full Name",
  "email": "user@example.com", 
  "password": "password"
}
```

### Dashboard Endpoints

#### GET `/api/dashboard`
Get dashboard data for current user

**Response:**
```json
{
  "intern": { /* InternProfile */ },
  "rewards": [ /* Reward[] */ ],
  "recentAchievements": [ /* string[] */ ]
}
```

### Leaderboard Endpoints

#### GET `/api/leaderboard`
Get leaderboard rankings

**Response:**
```json
{
  "leaderboard": [ /* LeaderboardEntry[] */ ],
  "currentUserRank": 3
}
```

### Other Endpoints

#### GET `/api/ping`
Health check endpoint

#### GET `/api/demo`
Demo endpoint from starter template

## 🎨 Design System

### Color Palette
The app uses a modern purple-based color scheme:

- **Primary**: Purple gradients (`brand-500` to `brand-600`)
- **Success**: Green for achievements and positive metrics
- **Warning**: Orange for alerts
- **Muted**: Gray tones for secondary content

### Typography
- Headings: Bold, gradient text effects for impact
- Body: Clean, readable text with proper contrast
- Code: Monospace font for referral codes

### Components
All UI components are built on Radix UI primitives with custom styling:
- Buttons with gradient effects
- Cards with subtle borders and shadows
- Badges for status indicators
- Progress bars for achievements
- Toast notifications
- Dropdown menus and avatars

## 🔧 Development Guide

### Adding New Pages

1. Create component in `client/pages/`
2. Add route in `client/App.tsx`
3. Update navigation in `client/components/Layout.tsx`

### Adding New API Endpoints

1. Create handler in `server/routes/`
2. Define types in `shared/api.ts`
3. Register route in `server/index.ts`

### Styling Guidelines

- Use TailwindCSS utilities
- Follow existing color scheme (`brand-*`, `success`, etc.)
- Use the `cn()` utility for conditional classes
- Maintain responsive design patterns

### State Management

- Authentication: localStorage (for demo purposes)
- API data: React state with useEffect
- UI state: Local component state
- Forms: Controlled components

## 🚀 Deployment

### Build Process
```bash
npm run build
```
Creates optimized production build in `dist/`

### Production Server
```bash
npm start
```
Serves the built application

### Environment Variables
The app supports environment variables:
- `PING_MESSAGE`: Custom ping response
- Standard Node.js environment variables

## 🧪 Testing

Currently uses Vitest for testing. Run tests with:
```bash
npm test
```

## 📝 Mock Data

The application includes comprehensive mock data:
- 8 sample intern profiles with realistic data
- Achievement system with 5 reward tiers
- Leaderboard rankings
- Recent achievements and activities

## 🔮 Future Enhancements

- Real authentication system
- Database integration
- File upload for avatars
- Email notifications
- Advanced analytics
- Social sharing features
- Mobile app version

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For questions or issues:
1. Check the existing documentation
2. Review the code structure and comments
3. Create an issue in the repository

---

**Built with ❤️ for intern fundraising success**
