
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Target } from 'lucide-react';

type DailyChallengeProps = {
  challenge: {
    id: string;
    title: string;
    description: string;
    xpReward: number;
    completed: boolean;
  };
  onCompleteChallenge: (id: string) => void;
}

const DailyChallenge = ({ challenge, onCompleteChallenge }: DailyChallengeProps) => {
  return (
    <Card className="border-t-4 border-t-eco-water">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center gap-2">
          <Target className="h-5 w-5 text-eco-water" />
          Daily Challenge
        </CardTitle>
      </CardHeader>
      <CardContent>
        <h3 className="font-medium text-base">{challenge.title}</h3>
        <p className="text-sm text-muted-foreground mt-1">{challenge.description}</p>
        <div className="mt-2 text-xs bg-eco-water/20 text-eco-water px-2 py-1 rounded-full inline-block">
          +{challenge.xpReward} XP
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          variant={challenge.completed ? "outline" : "default"}
          className="w-full bg-eco-water hover:bg-eco-water/80 text-white"
          onClick={() => onCompleteChallenge(challenge.id)}
          disabled={challenge.completed}
        >
          {challenge.completed ? "Completed" : "Mark as Complete"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default DailyChallenge;
