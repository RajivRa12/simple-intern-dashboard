import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { DashboardData } from "@shared/api";
import { Copy, Share2, Trophy, TrendingUp, Users, DollarSign } from "lucide-react";
import { toast } from "@/hooks/use-toast";

export default function Dashboard() {
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const response = await fetch("/api/dashboard");
      const data: DashboardData = await response.json();
      setDashboardData(data);
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const copyReferralCode = () => {
    if (dashboardData?.intern.referralCode) {
      navigator.clipboard.writeText(dashboardData.intern.referralCode);
      toast({
        title: "Copied!",
        description: "Referral code copied to clipboard",
      });
    }
  };

  const shareProfile = () => {
    const shareUrl = `${window.location.origin}/referral/${dashboardData?.intern.referralCode}`;
    navigator.clipboard.writeText(shareUrl);
    toast({
      title: "Link copied!",
      description: "Your referral link has been copied to clipboard",
    });
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

  if (!dashboardData) {
    return (
      <Layout>
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold text-muted-foreground">Failed to load dashboard</h2>
        </div>
      </Layout>
    );
  }

  const { intern, rewards, recentAchievements } = dashboardData;
  const nextReward = rewards.find(r => !r.unlocked);
  const progressToNext = nextReward 
    ? Math.min((intern.totalDonationsRaised / nextReward.requiredAmount) * 100, 100)
    : 100;

  return (
    <Layout>
      <div className="space-y-6">
        {/* Welcome Header */}
        <div className="bg-gradient-to-r from-brand-500 to-purple-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Welcome back, {intern.name}! 👋</h1>
              <p className="text-brand-100 mt-2">
                You've raised ${intern.totalDonationsRaised.toLocaleString()} for amazing causes
              </p>
            </div>
            <div className="text-right">
              <div className="text-sm text-brand-100">Member since</div>
              <div className="text-lg font-semibold">
                {new Date(intern.joinedDate).toLocaleDateString('en-US', { 
                  month: 'short', 
                  year: 'numeric' 
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-success" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Total Raised</p>
                  <p className="text-2xl font-bold">${intern.totalDonationsRaised.toLocaleString()}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-brand-600" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Rewards Earned</p>
                  <p className="text-2xl font-bold">{rewards.filter(r => r.unlocked).length}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Referral Code</p>
                  <p className="text-lg font-bold">{intern.referralCode}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">This Month</p>
                  <p className="text-2xl font-bold">+$2,450</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Referral Section */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Share2 className="w-5 h-5" />
                Share Your Referral Code
              </CardTitle>
              <CardDescription>
                Invite others to join and earn rewards when they start fundraising
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2 p-4 bg-brand-50 rounded-lg">
                <code className="flex-1 text-lg font-mono font-bold text-brand-700">
                  {intern.referralCode}
                </code>
                <Button size="sm" variant="outline" onClick={copyReferralCode}>
                  <Copy className="w-4 h-4 mr-2" />
                  Copy
                </Button>
              </div>
              
              <Button onClick={shareProfile} className="w-full">
                <Share2 className="w-4 h-4 mr-2" />
                Share Referral Link
              </Button>
            </CardContent>
          </Card>

          {/* Recent Achievements */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="w-5 h-5" />
                Recent Achievements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentAchievements.map((achievement, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-success/10 rounded-lg">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span className="text-sm">{achievement}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Rewards Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="w-5 h-5" />
              Rewards & Achievements
            </CardTitle>
            <CardDescription>
              Unlock rewards by reaching donation milestones
            </CardDescription>
          </CardHeader>
          <CardContent>
            {nextReward && (
              <div className="mb-6 p-4 bg-brand-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">Next Reward: {nextReward.title}</span>
                  <span className="text-sm text-muted-foreground">
                    ${intern.totalDonationsRaised.toLocaleString()} / ${nextReward.requiredAmount.toLocaleString()}
                  </span>
                </div>
                <Progress value={progressToNext} className="mb-2" />
                <p className="text-sm text-muted-foreground">{nextReward.description}</p>
              </div>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {rewards.map((reward) => (
                <div
                  key={reward.id}
                  className={`p-4 rounded-lg border transition-all ${
                    reward.unlocked
                      ? "bg-success/10 border-success/20"
                      : "bg-muted/50 border-border opacity-60"
                  }`}
                >
                  <div className="text-center space-y-2">
                    <div className="text-3xl">{reward.icon}</div>
                    <h3 className="font-semibold">{reward.title}</h3>
                    <p className="text-sm text-muted-foreground">{reward.description}</p>
                    <div className="flex items-center justify-center">
                      {reward.unlocked ? (
                        <Badge variant="outline" className="bg-success/10 text-success border-success/20">
                          Unlocked
                        </Badge>
                      ) : (
                        <Badge variant="outline">
                          ${reward.requiredAmount.toLocaleString()}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
