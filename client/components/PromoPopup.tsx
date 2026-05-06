import React, { useEffect, useState } from "react";
import { Dialog, DialogContent } from "../components/ui/dialog";
import { Button } from "../components/ui/button";

export default function PromoPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={val => { if (!val) handleClose(); else setOpen(val); }}>
      <DialogContent className="max-w-xl p-0 overflow-hidden rounded-2xl border-4 border-[#d4b07a] bg-gradient-to-b from-[#f8e7d2] to-[#fffbe9] shadow-2xl">
        <img
          src={`https://res.cloudinary.com/dqfnfcopj/image/upload/q_auto/f_auto/main-promo.png?v=${Date.now()}`}
          alt="Slayenail Promotion"
          className="mx-auto rounded-xl shadow-lg max-h-[80vh] object-contain border border-[#e7cfa3] bg-white"
        />
      </DialogContent>
    </Dialog>
  );
}
