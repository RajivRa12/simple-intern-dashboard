import { RequestHandler } from "express";
import { LeaderboardResponse, LeaderboardEntry } from "@shared/api";

// Dummy leaderboard data
const leaderboardData: LeaderboardEntry[] = [
  {
    id: "2",
    name: "Sarah Chen",
    totalDonationsRaised: 22300,
    rank: 1,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: "3", 
    name: "Alex Rodriguez",
    totalDonationsRaised: 18950,
    rank: 2,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: "1",
    name: "Krishna Kumar", 
    totalDonationsRaised: 15750,
    rank: 3,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: "4",
    name: "Emily Johnson",
    totalDonationsRaised: 14200,
    rank: 4,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: "5",
    name: "Michael Park",
    totalDonationsRaised: 12800,
    rank: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: "6",
    name: "Jessica Williams",
    totalDonationsRaised: 11650,
    rank: 6,
    avatar: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: "7",
    name: "David Thompson",
    totalDonationsRaised: 10400,
    rank: 7,
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: "8",
    name: "Lisa Zhang",
    totalDonationsRaised: 9850,
    rank: 8,
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face"
  }
];

export const getLeaderboard: RequestHandler = (req, res) => {
  // For demo purposes, assume current user is Krishna Kumar (rank 3)
  const currentUserRank = 3;
  
  const response: LeaderboardResponse = {
    leaderboard: leaderboardData,
    currentUserRank
  };

  res.json(response);
};
