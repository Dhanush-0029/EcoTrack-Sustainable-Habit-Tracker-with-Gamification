
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { SidebarNav } from '@/components/SidebarNav';
import HabitCard from '@/components/HabitCard';
import ProgressSection from '@/components/ProgressSection';
import DailyChallenge from '@/components/DailyChallenge';
import { toast } from '@/components/ui/use-toast';

const mockHabits = [
  {
    id: '1',
    name: 'Reusable Water Bottle',
    description: 'Use a reusable water bottle instead of buying plastic bottles.',
    streak: 5,
    type: 'water',
    completedToday: false,
    impact: 'Saves 167 plastic bottles yearly'
  },
  {
    id: '2',
    name: 'Turn Off Lights',
    description: 'Remember to turn off lights when leaving a room.',
    streak: 3,
    type: 'energy',
    completedToday: false,
    impact: 'Reduces energy consumption by 5%'
  },
  {
    id: '3',
    name: 'Recycle Paper',
    description: 'Sort and recycle all paper waste properly.',
    streak: 7,
    type: 'waste',
    completedToday: true,
    impact: 'Saves trees and reduces landfill'
  },
  {
    id: '4',
    name: 'Walking/Biking',
    description: 'Choose walking or biking for short trips instead of driving.',
    streak: 0,
    type: 'transport',
    completedToday: false,
    impact: 'Reduces carbon emissions'
  },
  {
    id: '5',
    name: 'Meatless Day',
    description: 'Have at least one completely plant-based day per week.',
    streak: 2,
    type: 'food',
    completedToday: false,
    impact: 'Saves water and reduces emissions'
  }
];

const mockChallenge = {
  id: 'daily-1',
  title: 'Zero Waste Day',
  description: 'Try to go through your entire day without creating any trash that goes to landfill.',
  xpReward: 50,
  completed: false
};

const mockStats = {
  level: 3,
  xp: 240,
  xpNeeded: 500,
  completedToday: 1,
  totalHabits: 5,
  streak: 3,
  treesPlanted: 7
};

const Index = () => {
  const [habits, setHabits] = useState(mockHabits);
  const [stats, setStats] = useState(mockStats);
  const [challenge, setChallenge] = useState(mockChallenge);
  
  const handleCompleteHabit = (habitId: string) => {
    setHabits(prevHabits => 
      prevHabits.map(habit => 
        habit.id === habitId 
          ? { 
              ...habit, 
              completedToday: !habit.completedToday,
              streak: !habit.completedToday ? habit.streak + 1 : habit.streak
            }
          : habit
      )
    );
    
    // Update stats
    setStats(prevStats => {
      const targetHabit = habits.find(h => h.id === habitId);
      const wasCompleted = targetHabit?.completedToday || false;
      
      return {
        ...prevStats,
        completedToday: wasCompleted 
          ? prevStats.completedToday - 1 
          : prevStats.completedToday + 1,
        xp: wasCompleted 
          ? prevStats.xp - 10 
          : prevStats.xp + 10
      };
    });
    
    // Show toast
    if (!habits.find(h => h.id === habitId)?.completedToday) {
      toast({
        title: "Habit completed!",
        description: "You earned 10 XP. Keep up the good work!",
        duration: 3000
      });
    }
  };
  
  const handleCompleteChallenge = (challengeId: string) => {
    if (challenge.completed) return;
    
    setChallenge({
      ...challenge,
      completed: true
    });
    
    // Update stats
    setStats(prevStats => ({
      ...prevStats,
      xp: prevStats.xp + challenge.xpReward,
      treesPlanted: prevStats.treesPlanted + 1
    }));
    
    // Show toast
    toast({
      title: "Challenge completed!",
      description: `You earned ${challenge.xpReward} XP and planted a virtual tree!`,
      duration: 3000
    });
  };
  
  return (
    <SidebarNav>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-1 container py-6 space-y-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Welcome to EcoTrack</h1>
              <p className="text-muted-foreground">Track your sustainable habits and make a difference.</p>
            </div>
            <Button className="bg-eco-leaf hover:bg-eco-forest">
              <Plus className="mr-1 h-4 w-4" /> Add New Habit
            </Button>
          </div>
          
          <ProgressSection stats={stats} />
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-3">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">My Eco Habits</h2>
                <div className="text-sm text-muted-foreground">
                  {stats.completedToday}/{stats.totalHabits} completed today
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {habits.map(habit => (
                  <HabitCard 
                    key={habit.id} 
                    habit={habit} 
                    onComplete={handleCompleteHabit} 
                  />
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <DailyChallenge 
                challenge={challenge}
                onCompleteChallenge={handleCompleteChallenge}
              />
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Environmental Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>CO2 Saved</span>
                      <span className="font-medium">24.5 kg</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Water Saved</span>
                      <span className="font-medium">143 L</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Plastic Avoided</span>
                      <span className="font-medium">3.2 kg</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </SidebarNav>
  );
};

export default Index;
