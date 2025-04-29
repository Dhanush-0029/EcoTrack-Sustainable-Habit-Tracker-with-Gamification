
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

type ProgressSectionProps = {
  stats: {
    level: number;
    xp: number;
    xpNeeded: number;
    completedToday: number;
    totalHabits: number;
    streak: number;
    treesPlanted: number;
  }
}

const ProgressSection = ({ stats }: ProgressSectionProps) => {
  const xpProgress = (stats.xp / stats.xpNeeded) * 100;
  const habitProgress = (stats.completedToday / stats.totalHabits) * 100;
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center gap-2">
            <span className="w-8 h-8 flex items-center justify-center rounded-full bg-eco-leaf/20 text-eco-forest">🌱</span>
            Level {stats.level}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-1">
            <div className="flex justify-between text-xs">
              <span>XP: {stats.xp}</span>
              <span>{stats.xpNeeded}</span>
            </div>
            <Progress value={xpProgress} className="h-2" />
            <p className="text-sm text-muted-foreground pt-1">
              {Math.ceil(stats.xpNeeded - stats.xp)} XP to level {stats.level + 1}
            </p>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center gap-2">
            <span className="w-8 h-8 flex items-center justify-center rounded-full bg-eco-water/20 text-eco-water">🔥</span>
            Daily Progress
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-1">
            <div className="flex justify-between text-xs">
              <span>Completed: {stats.completedToday}</span>
              <span>{stats.totalHabits}</span>
            </div>
            <Progress value={habitProgress} className="h-2" />
            <p className="text-sm text-muted-foreground pt-1">
              {stats.completedToday === stats.totalHabits 
                ? "All habits completed today!" 
                : `${stats.totalHabits - stats.completedToday} habits left today`}
            </p>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center gap-2">
            <span className="w-8 h-8 flex items-center justify-center rounded-full bg-eco-forest/20 text-eco-forest">🌳</span>
            Impact
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm">Current Streak:</span>
            <span className="font-semibold">{stats.streak} days</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm">Virtual Trees Planted:</span>
            <span className="font-semibold">{stats.treesPlanted}</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProgressSection;
