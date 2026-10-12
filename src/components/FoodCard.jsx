import React from 'react'

const FoodCard = ({ item, onAddToCart }) => {
  const { name, price, category, rating, image, description } = item

  const categoryStyle = {
    Veg: 'border-emerald-500/50 text-emerald-400 bg-emerald-500/10',
    Drinks: 'border-purple-500/50 text-purple-400 bg-purple-500/10',
    NonVeg: 'border-rose-500/50 text-rose-400 bg-rose-500/10'
  }

  // Description se saare commas hatane ka logic
  const cleanDescription = description ? description.replace(/,/g, '') : "";

  return (
    <div className="group relative w-full bg-white/5 backdrop-blur-3xl rounded-[3rem] border border-white/10 overflow-hidden hover:border-emerald-500/40 transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:shadow-emerald-900/30 p-4 md:p-6">
      
      <div className="flex flex-col md:flex-row gap-8 items-center">
        
        {/* --- SECTION 1: FLOATING ROUNDED IMAGE --- */}
        <div className="relative w-full md:w-[400px] h-[300px] shrink-0 overflow-hidden rounded-[2.5rem] shadow-2xl border border-white/5">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          
          <div className={`absolute bottom-6 left-6 px-6 py-2 rounded-2xl text-xs font-black uppercase tracking-[0.2em] border backdrop-blur-2xl shadow-2xl ${categoryStyle[category] || 'border-blue-500/50 text-blue-400 bg-blue-500/10'}`}>
            {category}
          </div>
        </div>

        {/* --- SECTION 2: MASSIVE CONTENT AREA --- */}
        <div className="flex-1 w-full py-4 px-2">
          
          <div className="mb-6">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-4">
              {/* FOOD NAME: Fixed font style (No italic, Wider spacing) */}
              <h3 className="text-4xl md:text-5xl font-black text-white tracking-[0.15em] uppercase group-hover:text-emerald-400 transition-colors drop-shadow-2xl">
                {name}
              </h3>
              
              <div className="flex items-center gap-3 bg-white/5 px-5 py-2.5 rounded-2xl border border-white/10 shadow-xl self-start md:self-center">
                <span className="text-yellow-500 text-2xl">⭐</span>
                <span className="text-white font-black text-xl tracking-tighter">{rating}</span>
              </div>
            </div>

            {/* DESCRIPTION: Commas removed and clean spacing */}
            <p className="text-gray-400 text-lg leading-relaxed mb-8 font-medium max-w-2xl border-l-4 border-emerald-500/30 pl-6 py-2 tracking-wide uppercase">
              {cleanDescription || "A MASTERCLASS IN CULINARY EXCELLENCE WE COMBINE RARE AUTHENTIC SPICES WITH HAND PICKED PREMIUM INGREDIENTS SLOW COOKED FOR 12 HOURS TO DELIVER A TASTE THAT IS NOT JUST FOOD BUT A LEGACY ON YOUR PLATE"}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-10">
              <div className="bg-black/20 p-4 rounded-2xl border border-white/5">
                <span className="block text-gray-500 text-[10px] font-black uppercase tracking-widest mb-2">Preparation Time</span>
                <span className="text-white text-lg font-black flex items-center gap-2">⏱️ 20-25 <span className="text-[10px] text-gray-400 uppercase tracking-widest">min</span></span>
              </div>
              <div className="bg-black/20 p-4 rounded-2xl border border-white/5">
                <span className="block text-gray-500 text-[10px] font-black uppercase tracking-widest mb-2">Nutritional Value</span>
                <span className="text-white text-lg font-black flex items-center gap-2">🔥 420 <span className="text-[10px] text-gray-400 uppercase tracking-widest">kcal</span></span>
              </div>
              <div className="bg-black/20 p-4 rounded-2xl border border-white/5 hidden md:block">
                <span className="block text-gray-500 text-[10px] font-black uppercase tracking-widest mb-2">Standard Serving</span>
                <span className="text-white text-lg font-black flex items-center gap-2">🍽️ FULL <span className="text-[10px] text-gray-400 uppercase tracking-widest">meal</span></span>
              </div>
            </div>
          </div>

          {/* --- SECTION 3: THE MONSTER TRIGGER --- */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-8 pt-8 border-t border-white/10">
            
            <div className="flex flex-col items-center sm:items-start">
              <span className="text-gray-500 text-xs font-black uppercase tracking-[0.4em] mb-2">Grand Total</span>
              <div className="flex items-start gap-2">
                <span className="text-emerald-500 font-black text-2xl mt-1">₹</span>
                <span className="text-6xl font-black text-white tracking-tighter leading-none">{price}</span>
              </div>
            </div>

            <button
              onClick={() => onAddToCart(item)}
              className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white px-16 py-6 rounded-[2rem] font-black uppercase text-sm tracking-[0.3em] transition-all transform active:scale-90 shadow-[0_15px_40px_rgba(16,185,129,0.4)] cursor-pointer relative overflow-hidden group/btn"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                Grab This Dish <span className="text-2xl">→</span>
              </span>
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default FoodCard