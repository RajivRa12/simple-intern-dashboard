/**
 * Shared code between client and server
 * API types for the Intern Portal application
 */

export interface InternProfile {
  id: string;
  name: string;
  email: string;
  referralCode: string;
  totalDonationsRaised: number;
  avatar?: string;
  joinedDate: string;
}

export interface Reward {
  id: string;
  title: string;
  description: string;
  requiredAmount: number;
  unlocked: boolean;
  icon: string;
}

export interface LeaderboardEntry {
  id: string;
  name: string;
  totalDonationsRaised: number;
  rank: number;
  avatar?: string;
}

export interface DashboardData {
  intern: InternProfile;
  rewards: Reward[];
  recentAchievements: string[];
}

export interface LeaderboardResponse {
  leaderboard: LeaderboardEntry[];
  currentUserRank: number;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface SignupRequest {
  name: string;
  email: string;
  password: string;
}

export interface AuthResponse {
  success: boolean;
  intern?: InternProfile;
  message?: string;
}
