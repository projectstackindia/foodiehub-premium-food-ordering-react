import React, { useEffect } from 'react'

const Toast = ({ message, type = 'success', onClose, duration = 3000 }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose()
    }, duration)

    return () => clearTimeout(timer)
  }, [duration, onClose])

  // FoodCard jaisa dynamic styling success aur error ke liye
  const toastStyle = type === 'success' 
    ? {
        border: 'border-emerald-500/40',
        text: 'text-emerald-400',
        bg: 'bg-emerald-950/40',
        shadow: 'shadow-[0_15px_40px_rgba(16,185,129,0.25)]',
        icon: '🎉'
      }
    : {
        border: 'border-rose-500/40',
        text: 'text-rose-400',
        bg: 'bg-rose-950/40',
        shadow: 'shadow-[0_15px_40px_rgba(244,63,94,0.25)]',
        icon: '🚨'
      };

  return (
    // MAIN TOAST CONTAINER: Full Glassmorphism, Rounded, with Cyberpunk Glow Aura
    <div className={`fixed bottom-8 right-8 z-50 p-1 rounded-[2rem] bg-gradient-to-r from-white/10 to-transparent backdrop-blur-3xl border ${toastStyle.border} ${toastStyle.shadow} animate-bounce-short`}>
      <div className={`flex items-center gap-6 ${toastStyle.bg} px-8 py-5 rounded-[1.9rem]`}>
        
        {/* ICON CONTAINER */}
        <span className="text-2xl shrink-0 select-none">
          {toastStyle.icon}
        </span>
        
        {/* MESSAGE: Massive Uppercase & Tracking Wide Style */}
        <p className={`font-black uppercase tracking-[0.2em] text-xs ${toastStyle.text} min-w-[200px]`}>
          {message}
        </p>
        
        {/* CLOSE BUTTON */}
        <button 
          onClick={onClose} 
          className="ml-4 w-8 h-8 rounded-xl bg-white/5 hover:bg-white/10 text-white/60 hover:text-white flex items-center justify-center font-black text-sm transition-all border border-white/5 cursor-pointer transform active:scale-90"
        >
          ✕
        </button>

      </div>
    </div>
  )
}

export default Toast