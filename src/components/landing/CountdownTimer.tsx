"use client";

import { useState, useEffect } from 'react';
import { TimerIcon } from 'lucide-react';

interface CountdownTimerProps {
  initialHours?: number;
  initialMinutes?: number;
  initialSeconds?: number;
}

export function CountdownTimer({ initialHours = 1, initialMinutes = 59, initialSeconds = 59 }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    hours: initialHours,
    minutes: initialMinutes,
    seconds: initialSeconds,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        let { hours, minutes, seconds } = prevTime;

        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              // Timer reached zero
              clearInterval(timer);
              return { hours: 0, minutes: 0, seconds: 0 };
            }
          }
        }
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time: number) => String(time).padStart(2, '0');

  return (
    <div className="flex flex-col items-center my-8 p-6 bg-destructive/10 border border-destructive rounded-lg shadow-md max-w-md mx-auto">
      <div className="flex items-center text-destructive mb-3">
        <TimerIcon className="h-8 w-8 mr-3" />
        <p className="font-headline text-xl md:text-2xl font-semibold">
          Oferta disponível somente hoje!
        </p>
      </div>
      <div className="font-mono text-4xl md:text-5xl font-bold text-destructive tracking-wider">
        <span>{formatTime(timeLeft.hours)}</span>:
        <span>{formatTime(timeLeft.minutes)}</span>:
        <span>{formatTime(timeLeft.seconds)}</span>
      </div>
    </div>
  );
}
