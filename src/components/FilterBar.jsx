import React from 'react'

const FilterBar = ({ selectedCategory, onCategoryChange, searchQuery, onSearchChange }) => {
  
  // FoodCard se match karta hua custom styling categories ke liye
  const categories = [
    { id: 'All', label: 'ALL DISHES', style: 'hover:border-emerald-500/40 hover:text-emerald-400' },
    { id: 'Veg', label: 'VEG ONLY', style: 'hover:border-emerald-500/40 hover:text-emerald-400' },
    { id: 'Drinks', label: 'DRINKS', style: 'hover:border-purple-500/40 hover:text-purple-400' }
  ]

  return (
    // MAIN CONTAINER: FoodCard jaisa glassmorphism border aur shadow effect
    <div className="w-full bg-white/5 backdrop-blur-3xl rounded-[3rem] border border-white/10 p-6 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] space-y-8">
      
      {/* --- SECTION 1: MONSTER GLASS SEARCH BAR --- */}
      <div className="relative w-full group">
        {/* Floating Search Icon */}
        <span className="absolute left-6 top-1/2 -translate-y-1/2 text-2xl text-gray-400 group-focus-within:text-emerald-400 transition-colors duration-300">
          🔍
        </span>
        
        <input
          type="text"
          placeholder="SEARCH FOR DISHES... (SOMETHING LEGENDARY)"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          // Input styling upgraded to match premium card layout
          className="w-full bg-black/40 border border-white/10 rounded-[2rem] py-5 pl-16 pr-6 text-white font-black uppercase text-sm tracking-[0.2em] placeholder-gray-500 focus:outline-none focus:border-emerald-500/50 focus:bg-black/60 transition-all duration-300 shadow-inner"
        />
      </div>

      {/* --- SECTION 2: HIGH-END PREMIUM BUTTONS --- */}
      <div className="flex flex-wrap gap-4 items-center">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.id
          
          return (
            <button
              key={cat.id}
              onClick={() => onCategoryChange(cat.id)}
              // Ultra wide tracking, premium padding, active glow effects
              className={`px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-[0.3em] border transition-all duration-300 cursor-pointer transform active:scale-95 ${
                isActive
                  ? 'border-emerald-500 text-emerald-400 bg-emerald-500/10 shadow-[0_0_25px_rgba(16,185,129,0.25)] scale-105'
                  : `border-white/5 text-gray-400 bg-black/20 ${cat.style}`
              }`}
            >
              {cat.label}
            </button>
          )
        })}
      </div>

    </div>
  )
}

export default FilterBar