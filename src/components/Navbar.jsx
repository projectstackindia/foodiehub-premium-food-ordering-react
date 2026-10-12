import React from 'react'

const Navbar = ({ cartCount }) => {
  return (
    // NAVBAR: Glassmorphic blur aur solid border tracking-wider design ke saath (Clean Layout)
    <nav className="sticky top-0 z-50 bg-black/40 backdrop-blur-3xl border-b border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
      <div className="container mx-auto px-6 py-5 max-w-[1600px] flex justify-between items-center">
        
        {/* --- SECTION 1: LOGO (MASSIVE & BOLD) --- */}
        <h1 className="text-3xl font-black text-white tracking-[0.2em] uppercase shrink-0">
          🍽️ Foodie<span className="text-emerald-500 drop-shadow-[0_0_15px_rgba(16,185,129,0.5)]">Hub</span>
        </h1>

        {/* --- SECTION 2: THE MONSTER CART TRIGGER --- */}
        <div className="relative cursor-pointer group shrink-0 p-2">
          <div className="bg-white/5 hover:bg-emerald-500/10 border border-white/10 hover:border-emerald-500/30 p-4 rounded-2xl transition-all duration-300 shadow-xl group-hover:scale-105">
            <span className="text-2xl block transition-transform group-hover:rotate-12">🛒</span>
          </div>
          
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-2 bg-emerald-500 text-black text-[11px] font-black px-2.5 py-1 rounded-xl shadow-[0_5px_15px_rgba(16,185,129,0.4)] border border-black/20 uppercase tracking-tighter">
              {cartCount}
            </span>
          )}
        </div>

      </div>
    </nav>
  )
}

export default Navbar