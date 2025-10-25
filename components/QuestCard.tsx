'use client';

import { Quest } from '@/lib/types';
import { Trophy, CheckCircle2, Circle } from 'lucide-react';

interface QuestCardProps {
  quest: Quest;
}

export function QuestCard({ quest }: QuestCardProps) {
  const completedTasks = quest.tasks.filter(t => t.completed).length;
  const totalTasks = quest.tasks.length;
  const progress = (completedTasks / totalTasks) * 100;

  return (
    <div className="card">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-start gap-3">
          <Trophy className="w-6 h-6 text-accent mt-1" />
          <div>
            <h3 className="text-lg font-semibold mb-1">{quest.name}</h3>
            <p className="text-sm text-muted">{quest.description}</p>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex items-center justify-between text-sm mb-2">
          <span className="text-muted">Progress</span>
          <span className="font-semibold">{completedTasks}/{totalTasks} tasks</span>
        </div>
        <div className="w-full h-2 bg-surface rounded-full overflow-hidden">
          <div 
            className="h-full bg-accent transition-smooth"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="space-y-3">
        {quest.tasks.map((task) => (
          <div 
            key={task.taskId}
            className="flex items-start gap-3 p-3 rounded-lg bg-surface bg-opacity-50"
          >
            {task.completed ? (
              <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
            ) : (
              <Circle className="w-5 h-5 text-muted mt-0.5 flex-shrink-0" />
            )}
            <div className="flex-1">
              <p className="text-sm font-medium">{task.description}</p>
              <p className="text-xs text-muted mt-1">{task.requirement}</p>
            </div>
          </div>
        ))}
      </div>

      {progress === 100 && (
        <button className="btn-primary w-full mt-4">
          Claim Rewards
        </button>
      )}
    </div>
  );
}
