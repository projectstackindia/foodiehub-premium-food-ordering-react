import React from 'react';

const CartItem = ({ item, onIncrease, onDecrease, onRemove }) => {
  return (
    <div className="w-full p-4 mb-4 bg-white/10 rounded-[2rem] border border-white/10 shadow-2xl overflow-hidden">
      {/* Main content - no scroll */}
      <div className="flex flex-wrap items-center gap-4">
        {/* IMAGE - with hand cursor and hover effect */}
        <div className="w-20 h-20 flex-shrink-0 cursor-pointer group">
          <img 
            src={item.image} 
            alt={item.name} 
            className="w-full h-full object-cover rounded-2xl border border-white/10 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg"
          />
        </div>
        
        {/* TEXT DETAILS */}
        <div className="flex-1 min-w-[120px]">
          <h4 className="font-black text-xl text-white tracking-[0.1em] uppercase">
            {item.name}
          </h4>
          <p className="text-emerald-400 font-black text-2xl mt-1">
            ₹{item.price}
          </p>
        </div>

        {/* NESTED BOX - Contains + - and bucket value */}
        <div className="bg-black/40 p-3 rounded-2xl border border-white/20 backdrop-blur-sm">
          <div className="flex items-center gap-4">
            <button
              onClick={onDecrease}
              className="w-10 h-10 rounded-xl bg-white/10 hover:bg-rose-500/70 text-white font-black flex items-center justify-center text-2xl cursor-pointer transition-all"
              disabled={item.quantity <= 1}
            >
              −
            </button>
            
            <span className="text-white font-black text-xl min-w-[30px] text-center">
              {item.quantity}
            </span>
            
            <button
              onClick={onIncrease}
              className="w-10 h-10 rounded-xl bg-white/10 hover:bg-emerald-500/70 text-white font-black flex items-center justify-center text-2xl cursor-pointer transition-all"
            >
              +
            </button>

            {/* Bucket Value / Trash Icon */}
            <button
              onClick={onRemove}
              className="w-10 h-10 rounded-xl bg-white/10 hover:bg-rose-500/70 text-rose-400 hover:text-white flex items-center justify-center text-xl cursor-pointer transition-all"
            >
              🗑️
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;


