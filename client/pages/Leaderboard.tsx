import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { LeaderboardResponse } from "@shared/api";
import { Trophy, Medal, Award, Crown } from "lucide-react";

export default function Leaderboard() {
  const [leaderboardData, setLeaderboardData] = useState<LeaderboardResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchLeaderboardData();
  }, []);

  const fetchLeaderboardData = async () => {
    try {
      const response = await fetch("/api/leaderboard");
      const data: LeaderboardResponse = await response.json();
      setLeaderboardData(data);
    } catch (error) {
      console.error("Error fetching leaderboard data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="w-6 h-6 text-yellow-500" />;
      case 2:
        return <Medal className="w-6 h-6 text-gray-400" />;
      case 3:
        return <Award className="w-6 h-6 text-amber-600" />;
      default:
        return <Trophy className="w-6 h-6 text-muted-foreground" />;
    }
  };

  const getRankBadge = (rank: number) => {
    switch (rank) {
      case 1:
        return <Badge className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white">🥇 Champion</Badge>;
      case 2:
        return <Badge className="bg-gradient-to-r from-gray-300 to-gray-500 text-white">🥈 Runner-up</Badge>;
      case 3:
        return <Badge className="bg-gradient-to-r from-amber-400 to-amber-600 text-white">🥉 Third Place</Badge>;
      default:
        return <Badge variant="outline">#{rank}</Badge>;
    }
  };

  if (isLoading) {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-brand-500"></div>
        </div>
      </Layout>
    );
  }

  if (!leaderboardData) {
    return (
      <Layout>
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold text-muted-foreground">Failed to load leaderboard</h2>
        </div>
      </Layout>
    );
  }

  const { leaderboard, currentUserRank } = leaderboardData;
  const topThree = leaderboard.slice(0, 3);
  const remaining = leaderboard.slice(3);

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-brand-600 to-purple-600 bg-clip-text text-transparent">
            🏆 Leaderboard
          </h1>
          <p className="text-lg text-muted-foreground mt-2">
            See how you rank against other top fundraisers
          </p>
          <div className="mt-4">
            <Badge variant="outline" className="text-lg px-4 py-2">
              Your Rank: #{currentUserRank}
            </Badge>
          </div>
        </div>

        {/* Top 3 Podium */}
        <Card className="overflow-hidden">
          <CardHeader>
            <CardTitle className="text-center text-2xl">🏆 Top Performers</CardTitle>
            <CardDescription className="text-center">
              Our highest achieving fundraisers this period
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {topThree.map((entry, index) => (
                <div key={entry.id} className="text-center">
                  <div className={`relative p-6 rounded-xl ${
                    index === 0 ? 'bg-gradient-to-b from-yellow-50 to-yellow-100 border-2 border-yellow-200' :
                    index === 1 ? 'bg-gradient-to-b from-gray-50 to-gray-100 border-2 border-gray-200' :
                    'bg-gradient-to-b from-amber-50 to-amber-100 border-2 border-amber-200'
                  }`}>
                    {index === 0 && (
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                        <div className="bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                          CHAMPION
                        </div>
                      </div>
                    )}
                    
                    <div className="relative">
                      <Avatar className="w-20 h-20 mx-auto mb-4 border-4 border-white shadow-lg">
                        <AvatarImage src={entry.avatar} alt={entry.name} />
                        <AvatarFallback className="text-lg font-bold">
                          {entry.name.split(" ").map(n => n[0]).join("").toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      
                      <div className="absolute -top-2 -right-2">
                        {getRankIcon(entry.rank)}
                      </div>
                    </div>
                    
                    <h3 className="font-bold text-lg mb-2">{entry.name}</h3>
                    <div className="mb-3">{getRankBadge(entry.rank)}</div>
                    <div className="text-2xl font-bold text-success">
                      ${entry.totalDonationsRaised.toLocaleString()}
                    </div>
                    <div className="text-sm text-muted-foreground">raised</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Full Rankings */}
        <Card>
          <CardHeader>
            <CardTitle>Full Rankings</CardTitle>
            <CardDescription>
              Complete leaderboard of all participants
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {leaderboard.map((entry) => (
                <div
                  key={entry.id}
                  className={`flex items-center gap-4 p-4 rounded-lg transition-all hover:bg-accent/50 ${
                    entry.rank === currentUserRank ? 'bg-brand-50 border-2 border-brand-200' : 'bg-card'
                  }`}
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-muted">
                    <span className="font-bold text-lg">#{entry.rank}</span>
                  </div>
                  
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={entry.avatar} alt={entry.name} />
                    <AvatarFallback>
                      {entry.name.split(" ").map(n => n[0]).join("").toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold">{entry.name}</h3>
                      {entry.rank === currentUserRank && (
                        <Badge variant="outline" className="text-xs bg-brand-100 text-brand-700 border-brand-300">
                          YOU
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      ${entry.totalDonationsRaised.toLocaleString()} raised
                    </p>
                  </div>
                  
                  <div className="text-right">
                    {entry.rank <= 3 && getRankIcon(entry.rank)}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Achievement Callout */}
        <Card className="bg-gradient-to-r from-brand-500 to-purple-600 text-white">
          <CardContent className="p-6 text-center">
            <Trophy className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Keep Climbing!</h3>
            <p className="text-brand-100">
              Every donation brings you closer to the top. Share your referral code and unlock new achievements!
            </p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
