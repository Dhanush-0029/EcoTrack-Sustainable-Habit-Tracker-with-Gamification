
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

type HabitCardProps = {
  habit: {
    id: string;
    name: string;
    description: string;
    streak: number;
    type: string;
    completedToday: boolean;
    impact: string;
  };
  onComplete: (id: string) => void;
}

const HabitCard = ({ habit, onComplete }: HabitCardProps) => {
  const getHabitIcon = (type: string) => {
    switch (type) {
      case 'water':
        return '💧';
      case 'energy':
        return '⚡';
      case 'waste':
        return '♻️';
      case 'transport':
        return '🚲';
      case 'food':
        return '🌱';
      default:
        return '🌿';
    }
  };

  return (
    <Card className={cn(
      "transition-all duration-300 border-l-4",
      habit.completedToday ? "border-l-eco-forest bg-eco-moss/10" : "border-l-eco-sand"
    )}>
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-lg">
          <span className="text-xl">{getHabitIcon(habit.type)}</span>
          {habit.name}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-sm">{habit.description}</p>
        <div className="mt-3 flex items-center gap-2">
          <div className="text-xs bg-eco-moss/20 text-eco-forest px-2 py-1 rounded-full">
            {habit.impact}
          </div>
          {habit.streak > 0 && (
            <div className="text-xs bg-eco-water/20 text-eco-water px-2 py-1 rounded-full">
              🔥 {habit.streak} day streak
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          variant={habit.completedToday ? "outline" : "default"}
          className={cn(
            "w-full gap-2",
            habit.completedToday 
              ? "border-eco-forest text-eco-forest hover:bg-eco-forest/10" 
              : "bg-eco-leaf hover:bg-eco-forest"
          )}
          onClick={() => onComplete(habit.id)}
        >
          {habit.completedToday 
            ? <>
                <Check className="h-4 w-4" /> 
                <span>Completed</span>
              </>
            : "Complete Today"
          }
        </Button>
      </CardFooter>
    </Card>
  );
};

export default HabitCard;
