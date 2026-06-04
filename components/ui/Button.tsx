'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { forwardRef } from 'react';

type Variant = 'primary' | 'secondary' | 'danger' | 'ghost';

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'ref'> {
  variant?: Variant;
  fullWidth?: boolean;
}

const variants: Record<Variant, string> = {
  primary: 'bg-emerald-500 text-black hover:bg-emerald-400 active:bg-emerald-600',
  secondary: 'bg-transparent text-emerald-400 border border-emerald-500/40 hover:border-emerald-400 hover:text-emerald-300',
  danger: 'bg-red-600/20 text-red-400 border border-red-500/30 hover:bg-red-600/30',
  ghost: 'bg-transparent text-slate-300 hover:text-white hover:bg-white/5',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', fullWidth, className = '', children, disabled, ...props }, ref) => (
    <motion.button
      ref={ref}
      whileHover={disabled ? undefined : { scale: 1.02 }}
      whileTap={disabled ? undefined : { scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      className={`inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold tracking-wide transition-colors duration-150 min-h-[44px] disabled:opacity-40 disabled:pointer-events-none focus-visible:outline-2 focus-visible:outline-emerald-500/70 focus-visible:outline-offset-2 ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </motion.button>
  )
);
Button.displayName = 'Button';
