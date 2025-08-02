import { RequestHandler } from "express";
import { DashboardData, InternProfile, Reward } from "@shared/api";

// Dummy data for intern profiles
const dummyInterns: InternProfile[] = [
  {
    id: "1",
    name: "Krishna Kumar",
    email: "krishna@example.com",
    referralCode: "krishna2025",
    totalDonationsRaised: 15750,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    joinedDate: "2024-01-15"
  },
  {
    id: "2", 
    name: "Sarah Chen",
    email: "sarah@example.com",
    referralCode: "sarah2025",
    totalDonationsRaised: 22300,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face",
    joinedDate: "2024-01-10"
  },
  {
    id: "3",
    name: "Alex Rodriguez", 
    email: "alex@example.com",
    referralCode: "alex2025",
    totalDonationsRaised: 18950,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    joinedDate: "2024-01-20"
  }
];

// Dummy rewards data
const rewards: Reward[] = [
  {
    id: "1",
    title: "First Steps",
    description: "Raise your first $100",
    requiredAmount: 100,
    unlocked: true,
    icon: "🏆"
  },
  {
    id: "2", 
    title: "Rising Star",
    description: "Raise $1,000 in donations",
    requiredAmount: 1000,
    unlocked: true,
    icon: "⭐"
  },
  {
    id: "3",
    title: "Top Performer",
    description: "Raise $5,000 in donations",
    requiredAmount: 5000,
    unlocked: true,
    icon: "🚀"
  },
  {
    id: "4",
    title: "Elite Fundraiser",
    description: "Raise $10,000 in donations",
    requiredAmount: 10000,
    unlocked: true,
    icon: "💎"
  },
  {
    id: "5",
    title: "Legendary",
    description: "Raise $25,000 in donations",
    requiredAmount: 25000,
    unlocked: false,
    icon: "👑"
  }
];

export const getInternDashboard: RequestHandler = (req, res) => {
  // For demo purposes, return the first intern's data
  // In a real app, this would be based on authenticated user
  const intern = dummyInterns[0];
  
  // Calculate which rewards are unlocked based on donations raised
  const userRewards = rewards.map(reward => ({
    ...reward,
    unlocked: intern.totalDonationsRaised >= reward.requiredAmount
  }));

  const recentAchievements = [
    "Unlocked Elite Fundraiser badge",
    "Referred 3 new volunteers this month",
    "Completed donation drive campaign"
  ];

  const dashboardData: DashboardData = {
    intern,
    rewards: userRewards,
    recentAchievements
  };

  res.json(dashboardData);
};

export const getInternProfile: RequestHandler = (req, res) => {
  const internId = req.params.id;
  const intern = dummyInterns.find(i => i.id === internId) || dummyInterns[0];
  res.json(intern);
};
