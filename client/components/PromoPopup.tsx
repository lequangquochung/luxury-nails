import React, { useEffect, useState } from "react";

const registerUrl = "https://customer.fozito.com/store/242b63c6-3466-447a-8b00-0941827b8a9b/coupon-receive-v2";
const bookingUrl = "https://customer.fozito.com/store/242b63c6-3466-447a-8b00-0941827b8a9b/booking-v3";

export default function PromoPopup() {
  // For debugging: open by default so popup is visible immediately
  const [open, setOpen] = useState(true);

  const close = () => setOpen(false);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        e.preventDefault();
        e.stopPropagation();
      }
    }
    if (open) {
      document.addEventListener("keydown", onKey, true);
      return () => document.removeEventListener("keydown", onKey, true);
    }
  }, [open]);

  return (
    <>
      

      {/* Fallback modal in case Dialog isn't visible due to CSS/z-index issues */}
      {open && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={close} />
          <div className="relative z-10 max-w-3xl w-full mx-4 p-6 bg-background text-foreground border border-gold/10 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
              <div>
                <img src="/imgs/slaye.jpg" alt="promo" className="w-full rounded-md object-cover max-h-64 shadow-lg" />
              </div>
              <div>
                <h3 className="text-2xl font-logo-slaye text-gold mb-2">Special Offer</h3>
                <p className="text-sm text-foreground/70 mb-4">Register now to receive exclusive coupons and updates about our signature services. It's quick and you'll get immediate offers for new customers.</p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                  <a href={registerUrl} target="_blank" rel="noreferrer" className="w-full sm:w-auto rounded-lg bg-gold-dark px-6 py-3 text-sm font-semibold text-primary-foreground text-center">Register</a>
                  <a href={bookingUrl} target="_blank" rel="noreferrer" className="w-full sm:w-auto rounded-lg border-2 border-gold-dark px-6 py-3 text-sm font-semibold text-gold-dark text-center">Book Now</a>
                </div>
              </div>
            </div>

            <button onClick={close} className="absolute right-6 bottom-6 md:right-8 md:bottom-8 rounded-lg bg-gold-dark px-5 py-2 text-sm font-semibold text-primary-foreground">Close</button>
          </div>
        </div>
      )}
    </>
  );
}
