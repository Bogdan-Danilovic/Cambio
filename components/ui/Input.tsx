'use client';

import { InputHTMLAttributes, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, className = '', ...props }, ref) => (
    <div className="w-full">
      {label && <label className="block text-xs font-medium text-slate-400 mb-1.5 tracking-wide uppercase">{label}</label>}
      <input
        ref={ref}
        suppressHydrationWarning
        className={`w-full rounded-xl bg-white/[0.05] border border-white/10 px-4 py-3.5 text-sm text-white min-h-[44px] placeholder:text-slate-500 focus:outline-none focus:border-emerald-500/60 focus:ring-2 focus:ring-emerald-500/25 transition-all duration-150 ${className}`}
        {...props}
      />
    </div>
  )
);
Input.displayName = 'Input';
