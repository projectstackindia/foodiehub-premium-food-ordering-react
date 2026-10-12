import React from 'react';
import CartItem from './CartItem';

const Cart = ({ cartItems = [], onUpdateQuantity, onRemoveItem, onPlaceOrder }) => {
  // Calculations
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = Math.round(subtotal * 0.05);
  const deliveryFee = subtotal > 1000 || subtotal === 0 ? 0 : 50;
  const totalAmount = subtotal + tax + deliveryFee;

  const handleIncrease = (item) => onUpdateQuantity(item.id, item.quantity + 1);
  const handleDecrease = (item) => {
    if (item.quantity > 1) onUpdateQuantity(item.id, item.quantity - 1);
  };

  return (
    // WIDENED CARD: w-full aur max-w-5xl/full use kiya hai taaki width badi dikhe aur slider na bane
    <div className="w-full max-w-full bg-white/5 backdrop-blur-3xl rounded-[3rem] shadow-[0_40px_80px_rgba(0,0,0,0.5)] p-8 border border-white/10 group">
      
      {/* HEADER */}
      <h2 className="text-2xl font-black text-white mb-8 flex items-center justify-between uppercase tracking-[0.3em]">
        <span>YOUR BASKET</span>
        <span className="bg-emerald-500 text-black px-3 py-1 rounded-xl text-sm font-medium normal-case tracking-wider">
          {cartItems.length} ITEMS
        </span>
      </h2>

      {cartItems.length === 0 ? (
        <div className="text-center py-20 bg-black/20 rounded-[2rem] border border-dashed border-white/10">
          <span className="text-7xl block mb-6 grayscale opacity-30 animate-pulse">🍱</span>
          <p className="font-black text-gray-400 uppercase tracking-widest text-sm">Basket is Empty</p>
          <p className="text-[10px] mt-4 text-gray-600 uppercase tracking-[0.2em]">Select something legendary</p>
        </div>
      ) : (
        <>
          {/* ITEMS LIST - NO SLIDER: Sare internal scroll aur max-height limits hata diye hain */}
          <div className="space-y-4">
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onIncrease={() => handleIncrease(item)}
                onDecrease={() => handleDecrease(item)}
                onRemove={() => onRemoveItem(item.id)}
              />
            ))}
          </div>

          {/* BILL SUMMARY & TO PAY BUTTON */}
          <div className="mt-10 pt-8 border-t-2 border-white/5 space-y-5">
            
            <div className="flex justify-between items-center text-gray-300">
              <span className="text-sm font-medium uppercase tracking-wider">SUBTOTAL</span>
              <span className="text-white font-semibold text-lg">₹{subtotal}</span>
            </div>

            <div className="flex justify-between items-center text-gray-300">
              <span className="text-sm font-medium uppercase tracking-wider">PLATFORM TAX | 5%</span>
              <span className="text-white font-semibold text-lg">₹{tax}</span>
            </div>

            <div className="flex justify-between items-center text-gray-300">
              <span className="text-sm font-medium uppercase tracking-wider">DELIVERY FEE</span>
              <span className={`font-semibold text-lg ${deliveryFee === 0 ? 'text-emerald-400' : 'text-white'}`}>
                {deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`}
              </span>
            </div>

            {/* FINAL TOTAL */}
            <div className="flex justify-between items-end pt-6 mb-8">
              <div className="flex flex-col">
                <span className="text-emerald-500 text-[10px] font-black uppercase tracking-[0.5em]">TO PAY</span>
                <span className="text-5xl font-black text-white tracking-tighter leading-none">
                  <span className="text-2xl mr-1">₹</span>{totalAmount}
                </span>
              </div>
            </div>
            
            {/* ACTION BUTTON */}
            <button
              onClick={onPlaceOrder}
              className="group/btn relative w-full bg-emerald-600 hover:bg-emerald-500 text-white font-black py-6 px-4 rounded-2xl transition-all shadow-[0_20px_40px_rgba(16,185,129,0.3)] uppercase tracking-[0.4em] text-xs cursor-pointer overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                Confirm Order <span className="text-xl group-hover/btn:translate-x-2 transition-transform">→</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />
            </button>

            <p className="text-center text-[8px] text-gray-600 font-bold uppercase tracking-[0.3em] mt-4">
              SECURE CHECKOUT • 100% AUTHENTIC
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;