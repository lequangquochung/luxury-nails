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
      <DialogContent className="max-w-xl p-0 overflow-hidden bg-gradient-to-b from-[#f8e7d2] to-[#fffbe9] shadow-2xl flex flex-col items-center">
        <div className="p-2 rounded-2xl overflow-hidden">
          <video
            src="/preview.mp4"
            controls
            autoPlay
            loop
            className="mx-auto rounded-xl shadow-lg max-h-[80vh] object-contain bg-white"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </DialogContent>
    </Dialog>
  );
}
