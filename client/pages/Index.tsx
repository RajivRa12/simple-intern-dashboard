import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Trophy, DollarSign, ArrowRight, Star, Target, Zap } from "lucide-react";

export default function Index() {
  const navigate = useNavigate();

  const handleDemoLogin = () => {
    // Set demo account data in localStorage
    const demoIntern = {
      id: "1",
      name: "Krishna Kumar",
      email: "demo@internportal.com",
      referralCode: "krishna2025",
      totalDonationsRaised: 15750,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      joinedDate: "2024-01-15"
    };
    localStorage.setItem("intern", JSON.stringify(demoIntern));
    navigate("/dashboard");
  };

  const stats = [
    { label: "Total Raised", value: "$127,450", icon: DollarSign, color: "text-green-600" },
    { label: "Active Interns", value: "156", icon: Users, color: "text-blue-600" },
    { label: "Achievements Unlocked", value: "48", icon: Trophy, color: "text-yellow-600" },
    { label: "Growth This Month", value: "+32%", icon: TrendingUp, color: "text-purple-600" },
  ];

  const features = [
    {
      icon: Target,
      title: "Track Your Impact",
      description: "Monitor your fundraising progress with real-time dashboards and detailed analytics"
    },
    {
      icon: Trophy,
      title: "Earn Rewards",
      description: "Unlock achievements and rewards as you reach new fundraising milestones"
    },
    {
      icon: Users,
      title: "Build Your Network",
      description: "Share your referral code and grow your network of fellow changemakers"
    },
    {
      icon: Zap,
      title: "Make a Difference",
      description: "Every dollar raised directly supports causes that matter to your community"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-50 via-purple-50 to-blue-50">
      {/* Background Pattern */}
      <div className={"absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23a855f7\" fill-opacity=\"0.03\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"4\"/%3E%3C/g%3E%3C/svg%3E')] opacity-70"}></div>
      
      {/* Header */}
      <header className="relative z-10 container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-r from-brand-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-brand-600 to-purple-600 bg-clip-text text-transparent">
              Intern Portal
            </span>
          </div>
          
          <div className="flex items-center gap-3">
            <Button variant="outline" onClick={handleDemoLogin}>
              Try Demo
            </Button>
            <Button variant="outline" asChild>
              <Link to="/login">Sign In</Link>
            </Button>
            <Button asChild className="bg-gradient-to-r from-brand-500 to-purple-600 hover:from-brand-600 hover:to-purple-700 shadow-lg">
              <Link to="/signup">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <Badge className="mb-6 bg-brand-100 text-brand-700 border-brand-200 hover:bg-brand-200">
            🎉 New: Unlock rewards as you fundraise!
          </Badge>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-brand-600 via-purple-600 to-blue-600 bg-clip-text text-transparent leading-tight">
            Fundraise. Compete. 
            <br />Make an Impact.
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Join our community of passionate interns raising funds for causes that matter. 
            Track your progress, compete with peers, and unlock rewards along the way.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" asChild className="bg-gradient-to-r from-brand-500 to-purple-600 hover:from-brand-600 hover:to-purple-700 shadow-xl text-lg px-8 py-3">
              <Link to="/signup">
                Start Fundraising <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg px-8 py-3 border-brand-200 hover:bg-brand-50">
              <Link to="/leaderboard">
                View Leaderboard <Trophy className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white/60 backdrop-blur-sm border-brand-200/50 hover:bg-white/80 transition-all hover:shadow-lg">
              <CardContent className="p-6 text-center">
                <div className={`w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-r from-${stat.color.split('-')[1]}-100 to-${stat.color.split('-')[1]}-200 flex items-center justify-center`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-brand-600 to-purple-600 bg-clip-text text-transparent">
            Everything you need to succeed
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our platform provides all the tools and motivation you need to maximize your fundraising impact
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white/60 backdrop-blur-sm border-brand-200/50 hover:bg-white/80 transition-all hover:shadow-lg group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-brand-100 to-purple-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <feature.icon className="w-8 h-8 text-brand-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 container mx-auto px-4 py-16">
        <Card className="bg-gradient-to-r from-brand-500 to-purple-600 border-none shadow-2xl">
          <CardContent className="p-12 text-center text-white">
            <div className="max-w-2xl mx-auto">
              <Star className="w-16 h-16 mx-auto mb-6 text-yellow-300" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to make your mark?
              </h2>
              <p className="text-xl text-brand-100 mb-8">
                Join hundreds of interns who are already making a difference. Start your fundraising journey today.
              </p>
              <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-3 bg-white text-brand-600 hover:bg-brand-50">
                <Link to="/signup">
                  Create Your Account <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="relative z-10 container mx-auto px-4 py-8 border-t border-brand-200/50">
        <div className="text-center text-muted-foreground">
          <p>&copy; 2024 Intern Portal. Empowering the next generation of changemakers.</p>
        </div>
      </footer>
    </div>
  );
}
