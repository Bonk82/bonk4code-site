import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { cn } from '@/lib/utils';

type Theme = 'light' | 'dark';

export default function ThemeToggle({ className }: { className?: string }) {
  const [theme, setTheme] = useState<Theme>('dark');

  // useEffect(() => {
  //   const current = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
  //   setTheme(current);
  // }, []);

  const toggle = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    if (next === 'dark') document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', next);
    setTheme(next);
  };

  return (
    <button
      onClick={toggle}
      aria-label="Cambiar tema"
      className={cn(
        'relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/60 text-foreground transition-all hover:border-primary/60 hover:text-primary hover:shadow-[0_0_0_4px_hsl(var(--primary)/0.12)]',
        className
      )}
    >
      <Sun
        className={cn(
          'h-5 w-5 transition-all duration-500',
          theme === 'dark' ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
        )}
      />
      <Moon
        className={cn(
          'absolute h-5 w-5 transition-all duration-500',
          theme === 'dark' ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'
        )}
      />
    </button>
  );
}
