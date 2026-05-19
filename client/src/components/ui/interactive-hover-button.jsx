'use client'

import React, { useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import "./GlassButton.css"

function cn(...inputs) { return twMerge(clsx(inputs)) }

export default function InteractiveHoverButton({
  text = 'Button',
  loadingText = 'Processing...',
  successText = 'Complete!',
  classes,
  onClick,
  ...props
}) {
  const [status, setStatus] = useState('idle')

  const isIdle = status === 'idle'

  const handleClick = async () => {
    if (status !== 'idle') return

    setStatus('loading')
    
    if (onClick) {
        try {
            await onClick();
        } catch (error) {
            console.error("Button action failed:", error);
            setStatus('idle');
            return;
        }
    }

    setTimeout(() => {
      setStatus('success')
      setTimeout(() => {
        setStatus('idle')
      }, 3000)
    }, 1500)
  }

  return (
    <div className={cn("glass-button-wrap group", classes)}>
      <motion.button
        className={cn(
          'glass-button relative flex min-w-48 items-center justify-center overflow-hidden rounded-full border p-2 px-8 py-4 font-bold transition-all',
          status === 'loading' && 'px-6',
        )}
        onClick={handleClick}
        layout
        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        {...props}
      >
        <AnimatePresence mode='popLayout' initial={false}>
          <motion.div
            key={status}
            className='flex items-center gap-2'
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -10 }}
          >
            {status === 'idle' && (
              <div className="flex items-center gap-3">
                <div className='bg-[#6C63FF] h-2.5 w-2.5 rounded-full shadow-[0_0_10px_rgba(108,99,255,0.4)] transition-all duration-500 group-hover:scale-[60]' />
                <span className='inline-block transition-all duration-500 group-hover:translate-x-32 group-hover:opacity-0 glass-button-text'>
                  {text}
                </span>
                <div className='text-white absolute top-0 left-1/2 -translate-x-[200%] md:-translate-x-[250%] z-10 flex h-full w-full items-center justify-center gap-3 opacity-0 transition-all duration-500 group-hover:translate-x-[-45%] md:group-hover:translate-x-[-35%] group-hover:opacity-100'>
                  <span className="font-bold tracking-tight">{text}</span>
                  <ArrowRight className='h-5 w-5' />
                </div>
              </div>
            )}

            {status === 'loading' && (
              <div className='flex items-center gap-3'>
                <div className='border-[#6C63FF] border-t-transparent h-5 w-5 animate-spin rounded-full border-2' />
                <span className='text-[#3D4852] text-sm font-bold'>{loadingText}</span>
              </div>
            )}

            {status === 'success' && (
              <div className='flex items-center gap-3'>
                <div className="nm-well p-1 rounded-full bg-green-500/10">
                  <Check className='h-5 w-5 text-green-600' />
                </div>
                <span className='text-green-600 text-sm font-bold'>{successText}</span>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </motion.button>
      <div className="glass-button-shadow rounded-full"></div>
    </div>
  )
}
