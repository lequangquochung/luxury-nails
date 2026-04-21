import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Clock3,
  GlassWater,
  HandHelping,
  MapPin,
  Scissors,
  ShieldCheck,
  Sparkles,
  Star,
  Wine,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";

type PackageItem = {
  name: string;
  regular?: string;
  gel?: string;
  regularLabel?: string;
  gelLabel?: string;
  description?: string;
  includes: string[];
  massage?: string;
  image?: string;
  imageAlt?: string;
};

type SimpleService = {
  name: string;
  price: string;
  details?: string[];
};

type SplitPriceService = {
  name: string;
  regular: string;
  gel: string;
};

const pedicurePackages: PackageItem[] = [
  {
    name: "Luxury Slaye",
    regular: "$90",
    gel: "$110",
    description: "Full signature pedicure with the most complete restorative ritual in the menu.",
    image: "/imgs/slaye.jpg",
    imageAlt: "Luxury Slaye pedicure service",
    includes: [
      "6-step package",
      "Trim, shape, and cuticle treatment",
      "Sugar scrub and fresh orange treatment",
      "Lotion massage and callus treatment",
      "Wooden foot roller massage",
      "Oil candle massage and stone massage",
      "Collagen or paraffin treatment",
      "Neck wrap and hot towel",
      "Polish finish",
    ],
    massage: "20 min massage",
  },
  {
    name: "Deluxe",
    regular: "$73",
    gel: "$93",
    image: "/imgs/deluxe.jpg",
    imageAlt: "Deluxe pedicure service",
    includes: [
      "Trim, shape, and cuticle treatment",
      "Sugar scrub and fresh orange treatment",
      "Lotion massage and callus treatment",
      "Stone massage and oil candle massage",
      "Wooden foot roller massage",
      "Collagen socks",
      "Neck wrap and hot towel",
      "Polish finish",
    ],
    massage: "14 min massage",
  },
  {
    name: "Organic",
    regular: "$59",
    gel: "$79",
    image: "/imgs/organic.jpg",
    imageAlt: "Organic pedicure service",
    includes: [
      "Trim, shape, and cuticle treatment",
      "Sugar scrub and fresh orange treatment",
      "Lotion massage and hot towel",
      "Callus treatment",
      "Stone massage",
      "Neck wrap",
      "Polish finish",
    ],
    massage: "10 min massage",
  },
  {
    name: "Collagen",
    regular: "$49",
    gel: "$69",
    image: "/imgs/collagen.jpg",
    imageAlt: "Collagen pedicure service",
    includes: [
      "Trim, shape, and cuticle treatment",
      "Sugar scrub and fresh orange treatment",
      "Lotion massage",
      "Hot towel",
      "Polish finish",
    ],
    massage: "5 min massage",
  },
  {
    name: "Regular",
    regular: "$39",
    gel: "$59",
    image: "/gallery-4.jpg",
    imageAlt: "Regular pedicure service",
    includes: [
      "Trim, shape, and cuticle treatment",
      "Sugar scrub and fresh orange treatment",
      "Lotion massage",
      "Hot towel",
      "Polish finish",
    ],
    massage: "4 min massage",
  },
];

const manicurePackages: PackageItem[] = [
  {
    name: "Signature Manicure",
    regular: "$47",
    gel: "$60",
    gelLabel: "Gel Polish $60",
    includes: [
      "Trim and shape",
      "Cuticle care",
      "Sugar scrub and fresh orange treatment",
      "Lotion massage",
      "Hot towel",
      "Paraffin or collagen gloves",
    ],
    massage: "5 min massage",
  },
  {
    name: "Gel Manicure",
    regular: "$43",
    regularLabel: "Price",
    includes: [
      "Trim and shape",
      "Cuticle care",
      "Lotion massage",
      "Hot towel",
      "Gel color finish",
    ],
  },
  {
    name: "Regular Manicure",
    regular: "$28",
    regularLabel: "Price",
    includes: ["Trim and shape", "Cuticle care", "Lotion massage", "Hot towel"],
  },
];

const nailEnhancements: Array<{ title: string; items: SimpleService[] }> = [
  {
    title: "Dipping Powder",
    items: [
      { name: "Dipping w/ Natural Nails", price: "$50+" },
      { name: "Dipping w/ Tip", price: "$60+" },
      { name: "Dipping w/ Removal and Redo", price: "$55+" },
    ],
  },
  {
    title: "Gel X",
    items: [
      { name: "Full Set", price: "$65+" },
      { name: "Refill", price: "$55+" },
      { name: "Removal and Redo", price: "$10+" },
      { name: "Soak Off Only", price: "$20+" },
    ],
  },
  {
    title: "Builder Gel / Liquid Gel",
    items: [
      { name: "Full Set", price: "$65+" },
      { name: "Refill", price: "$55+" },
      { name: "Removal and Redo", price: "$15+" },
      { name: "Soak Off Only", price: "$20+" },
    ],
  },
  {
    title: "Acrylic Gel Powder",
    items: [
      { name: "Full Set Gel Polish", price: "$65+" },
      { name: "Full Set Regular Polish", price: "$55+" },
      { name: "Refill", price: "$55+" },
      { name: "Toes Full Set", price: "$75+" },
      { name: "Toes Refill", price: "$65+" },
      { name: "2 Big Toes New", price: "$20" },
      { name: "2 Big Toes Refill", price: "$15" },
      { name: "Soak Off Only", price: "$20+" },
    ],
  },
];

const addOns: SimpleService[] = [
  { name: "Special Shape", price: "$5+" },
  { name: "Extra Length", price: "$5+" },
  { name: "Cut Down", price: "$5+" },
  { name: "French", price: "$10+" },
  { name: "Deep French", price: "$20+" },
  { name: "Chrome", price: "$15+" },
  { name: "Cat Eye", price: "$15+" },
  { name: "Ombre", price: "$15+" },
  { name: "Buffing Shine", price: "$7+" },
  { name: "Collagen", price: "$10+" },
  { name: "Paraffin", price: "$10+" },
  { name: "Callus Treatment", price: "$10+" },
  { name: "Extra Massage 10 Minutes", price: "$15+" },
  { name: "Repair / Removal / Nail Art", price: "Ask for price" },
];

const polishChanges: SplitPriceService[] = [
  { name: "Hands", regular: "Regular $18", gel: "Gel $28 | Gel w/ Removal $33" },
  { name: "Feet", regular: "Regular $18", gel: "Gel $28 | Gel w/ Removal $33" },
];

const waxingServices: SimpleService[] = [
  { name: "Eyebrows", price: "$15+" },
  { name: "Lips", price: "$10+" },
  { name: "Chin", price: "$15+" },
  { name: "Face", price: "$45+" },
  { name: "Full Arms", price: "$45+" },
  { name: "Half Arms", price: "$30+" },
  { name: "Neck", price: "$15+" },
  { name: "Underarms", price: "$25+" },
  { name: "Full Legs", price: "$65+" },
  { name: "Half Legs", price: "$45+" },
  { name: "Toes", price: "$10+" },
  { name: "Fingers", price: "$10+" },
];

const kidsServices: SimpleService[] = [
  { name: "Manicure", price: "$20", details: ["Gel add-on: +$15"] },
  { name: "Pedicure", price: "$30", details: ["Gel add-on: +$15"] },
  { name: "Kid Polish Change Regular", price: "$12" },
  { name: "Kid Polish Change Gel", price: "$20" },
];

const complimentaryDrinks = [
  "Water",
  "Sparkling Water",
  "Wine",
  "Beer",
  "Coffee",
  "Tea",
  "Chocolate",
  "Candy",
];

const experiencePromises = [
  "Consultation before shaping or color selection",
  "Cuticle work and prep included where listed",
  "Massage timing clearly shown for premium pedicure tiers",
  "Add-ons available to personalize finish and wear",
];

const policyNotes = [
  "Prices are subject to change without notice. Final pricing may vary based on nail length, shape, design, and overall service complexity. We recommend confirming all details with your technician prior to the service.",
  "Appointments are highly recommended and will be given priority. Walk-in guests are welcome and will be accommodated based on availability. A 10-minute grace period is provided for scheduled appointments.",
  "To ensure a seamless experience, technician assignments may be adjusted when necessary. We are committed to delivering consistent, high-quality service in a relaxing and professional environment.",
  "All services are non-refundable. However, we are happy to provide complimentary fixes within 7 days of your original service for issues resulting from workmanship, such as lifting, chipping, or premature breakage under normal wear. Repairs due to accidental damage, improper care, or external factors are not included.",
  "Your satisfaction is our priority, and we sincerely appreciate your trust and continued support.",
];

function PackageCard({
  item,
  featured = false,
  expandable = false,
}: {
  item: PackageItem;
  featured?: boolean;
  expandable?: boolean;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isImageOpen, setIsImageOpen] = useState(false);
  const [hasPreviewImage, setHasPreviewImage] = useState(Boolean(item.image));
  const suppressExpandUntilRef = useRef(0);

  const showDetails = !expandable || isExpanded;
  const showSignatureGelPrice = item.name === "Signature Manicure" && Boolean(item.gel);
  const isSinglePriceCard = !showSignatureGelPrice;
  const useCompactDesktopSinglePrice = isSinglePriceCard && item.name.toLowerCase().includes("manicure");
  const useFullHeightDesktopSinglePrice = isSinglePriceCard && Boolean(item.image) && !useCompactDesktopSinglePrice;
  const showTopRating = item.name === "Luxury Slaye";
  const showPopular = item.name === "Deluxe";
  const packageBadge = showTopRating ? (
    <div className="inline-flex shrink-0 items-center gap-0.5 rounded-full border border-primary/20 bg-primary/10 px-2 py-1 text-primary sm:gap-1 sm:px-3 sm:py-1.5">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={`${item.name}-top-rating-${index}`} className="h-3 w-3 fill-current sm:h-3.5 sm:w-3.5" />
      ))}
    </div>
  ) : showPopular ? (
    <div className="inline-flex shrink-0 items-center rounded-full border border-primary/20 bg-primary/10 px-2 py-1 text-primary sm:px-3 sm:py-1.5">
      <span className="text-[8px] font-semibold uppercase tracking-[0.18em] text-primary/85 sm:text-[10px] sm:tracking-[0.24em]">Popular</span>
    </div>
  ) : null;

  useEffect(() => {
    setHasPreviewImage(Boolean(item.image));
  }, [item.image]);

  const suppressExpandTemporarily = () => {
    suppressExpandUntilRef.current = Date.now() + 250;
  };
  const toggleExpanded = () => {
    if (isImageOpen) {
      return;
    }

    if (Date.now() < suppressExpandUntilRef.current) {
      return;
    }

    setIsExpanded((current) => !current);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45 }}
      onClick={expandable ? toggleExpanded : undefined}
      onKeyDown={expandable ? (event) => {
        if (isImageOpen) {
          return;
        }

        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          toggleExpanded();
        }
      } : undefined}
      role={expandable ? "button" : undefined}
      tabIndex={expandable && !isImageOpen ? 0 : undefined}
      aria-expanded={expandable ? isExpanded : undefined}
      className={[
        "rounded-[1.75rem] border p-5 sm:p-7",
        expandable && !isImageOpen ? "cursor-pointer" : "",
        isImageOpen ? "pointer-events-none" : "",
        featured
          ? "border-border/80 bg-card/70"
          : "border-border/80 bg-card/70",
      ].join(" ")}
    >
      <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
        <div className="min-w-0 flex-1">
          {expandable ? (
            <div className="min-w-0 flex-1">
              <div className="flex flex-nowrap items-center gap-2 sm:gap-3">
                <h3 className="min-w-0 shrink text-[clamp(1.5rem,6vw,2.4rem)] leading-[1.1] text-foreground whitespace-nowrap">
                  {item.name}
                </h3>
                {packageBadge}
              </div>
              {item.description ? <p className="mt-3 max-w-xl text-sm leading-6 text-foreground/68">{item.description}</p> : null}
              <div className="mt-4 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-primary/80">
                <ChevronDown className={[
                  "h-3.5 w-3.5 transition-transform duration-300",
                  isExpanded ? "rotate-180" : "rotate-0",
                ].join(" ")} />
                {isExpanded ? "Hide service steps" : "View service steps"}
              </div>
            </div>
          ) : (
            <>
              <div className="flex flex-nowrap items-center gap-2 sm:gap-3">
                <h3 className="min-w-0 shrink text-[clamp(1.5rem,6vw,2.4rem)] leading-[1.1] text-foreground whitespace-nowrap">
                  {item.name}
                </h3>
                {packageBadge}
              </div>
              {item.description ? <p className="mt-3 max-w-xl text-sm leading-6 text-foreground/68">{item.description}</p> : null}
            </>
          )}
        </div>
        {hasPreviewImage && item.image ? (
          <>
            <button
              type="button"
              onClick={(event) => {
                event.preventDefault();
                event.stopPropagation();
                suppressExpandTemporarily();
                setIsImageOpen(true);
              }}
              className="relative h-[108px] w-[108px] overflow-hidden rounded-xl border border-primary/20 bg-background/70 self-start text-left transition-transform duration-300 hover:-translate-y-0.5 sm:h-[116px] sm:w-[116px] lg:mx-4 lg:h-[136px] lg:w-[136px] lg:shrink-0"
              aria-label={`Open preview image for ${item.name}`}
            >
            <img
              src={item.image}
              alt={item.imageAlt ?? item.name}
              className="h-full w-full object-cover transition-transform duration-500"
              onError={() => {
                setHasPreviewImage(false);
                setIsImageOpen(false);
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/65 via-background/10 to-transparent" />
            <div className="absolute left-1/2 top-2 inline-flex min-w-[4.75rem] -translate-x-1/2 items-center justify-center whitespace-nowrap rounded-full border border-white/15 bg-background/65 px-3 py-1 text-center text-[9px] font-medium uppercase tracking-[0.18em] text-primary">
              Preview
            </div>
            </button>

            <Dialog open={isImageOpen} onOpenChange={(open) => {
              if (!open) {
                suppressExpandTemporarily();
              }

              setIsImageOpen(open);
            }}>
              <DialogContent className="w-[calc(100vw-1.5rem)] max-w-3xl overflow-hidden border-white/10 bg-black/95 p-0 shadow-2xl sm:rounded-[1.5rem] [&>button]:rounded-full [&>button]:border [&>button]:border-primary/30 [&>button]:bg-black/55 [&>button]:text-primary [&>button]:opacity-100 hover:[&>button]:bg-black/75 hover:[&>button]:text-primary focus:[&>button]:text-primary data-[state=open]:[&>button]:bg-black/55 data-[state=open]:[&>button]:text-primary">
                <DialogTitle className="sr-only">{item.name} image preview</DialogTitle>
                <DialogDescription className="sr-only">
                  Enlarged preview image for {item.name}.
                </DialogDescription>
                <div className="flex items-center justify-center bg-black p-3 sm:p-4">
                  <div className="aspect-square w-full max-w-[min(80vw,32rem)] overflow-hidden rounded-full border border-white/10">
                    <img
                      src={item.image}
                      alt={item.imageAlt ?? item.name}
                      className="h-full w-full object-cover"
                      onError={() => {
                        setHasPreviewImage(false);
                        setIsImageOpen(false);
                      }}
                    />
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </>
        ) : null}
        <div className={[
          "grid gap-3 sm:grid-cols-1 lg:ml-6 lg:flex-1 lg:justify-end",
          expandable ? "sm:grid-cols-1 lg:max-w-[200px]" : "",
        ].join(" ")}>
          <div className={[
            "flex w-full min-w-0 items-center rounded-2xl border border-primary/20 bg-background/70 px-4 sm:px-5 lg:px-4",
            useCompactDesktopSinglePrice
              ? "py-3 min-h-[72px] sm:min-h-[76px] lg:min-h-[68px] lg:py-3"
              : useFullHeightDesktopSinglePrice
                ? "py-3 min-h-[72px] sm:min-h-[76px] lg:min-h-[136px] lg:py-4"
                : isSinglePriceCard
                ? "py-3 min-h-[72px] sm:min-h-[76px] lg:min-h-[68px] lg:py-4"
                : "py-4 sm:py-4 sm:min-h-[124px] lg:min-h-[136px]",
          ].join(" ")}>
            <div className={showSignatureGelPrice ? "w-full space-y-3" : "w-full lg:text-center"}>
              <div className={[
                "grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-3 gap-y-1",
                "lg:grid-cols-1 lg:gap-y-2",
                isSinglePriceCard ? "lg:justify-items-center lg:text-center" : "lg:items-start",
              ].join(" ")}>
                <div className="text-xs uppercase tracking-[0.18em] text-foreground/58 lg:whitespace-nowrap">{item.regularLabel ?? "Regular polish"}</div>
                <div className={[
                  "text-2xl font-semibold text-primary",
                  isSinglePriceCard ? "justify-self-end lg:justify-self-center" : "justify-self-end lg:justify-self-start",
                ].join(" ")}>{item.regular ?? "Ask"}</div>
              </div>
              {showSignatureGelPrice ? (
                <div className="border-t border-primary/15 pt-3">
                  <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-3 gap-y-1 lg:grid-cols-1 lg:items-start lg:gap-y-2">
                    <div className="text-xs uppercase tracking-[0.18em] text-foreground/58 lg:whitespace-nowrap">Gel polish</div>
                    <div className="justify-self-end text-2xl font-semibold text-primary lg:justify-self-start">{item.gel}</div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
          {item.gel && !expandable ? (
            <div className="w-full min-w-0 rounded-2xl border border-primary/20 bg-background/70 p-4 lg:min-w-[116px]">
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-3 gap-y-1 lg:grid-cols-1 lg:items-start lg:gap-y-2">
                <div className="text-xs uppercase tracking-[0.18em] text-foreground/58">Gel</div>
                <div className="justify-self-end text-2xl font-semibold text-primary lg:justify-self-start">{item.gel}</div>
              </div>
            </div>
          ) : null}
        </div>
      </div>

      <AnimatePresence initial={false}>
        {showDetails ? (
          <motion.div
            key="details"
            initial={expandable ? { height: 0, opacity: 0, y: -8 } : false}
            animate={{ height: "auto", opacity: 1, y: 0 }}
            exit={{ height: 0, opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {item.includes.map((entry) => (
                <div key={entry} className="flex items-center gap-3 rounded-2xl border border-border/70 bg-background/55 px-4 py-3 text-sm text-foreground/80">
                  <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary/12 text-primary">
                    <Check className="h-3 w-3" />
                  </span>
                  <span>{entry}</span>
                </div>
              ))}
            </div>

            {item.massage || item.gel ? (
              <div className="mt-6 flex flex-wrap gap-3">
                {item.massage ? (
                  <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 p-3 text-xs font-medium uppercase text-primary">
                    <Clock3 className="h-4 w-4" />
                    {item.massage}
                  </div>
                ) : null}
                {item.gel && !showSignatureGelPrice ? (
                  <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background/70 p-3 text-xs font-medium uppercase text-primary">
                    <Sparkles className="h-4 w-4" />
                    {item.gelLabel ?? "Gel +$20"}
                  </div>
                ) : null}
              </div>
            ) : null}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.article>
  );
}

function PriceListCard({ title, items }: { title: string; items: SimpleService[] }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45 }}
      className="rounded-[1.75rem] border border-border/80 bg-card/70 p-6"
    >
      <h3 className="text-2xl text-foreground">{title}</h3>
      <div className="mt-6 space-y-4">
        {items.map((item) => (
          <div key={`${title}-${item.name}`} className="rounded-2xl border border-border/70 bg-background/55 p-4">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0 text-sm font-medium text-foreground">{item.name}</div>
              <div className="shrink-0 text-right text-sm font-semibold text-primary">{item.price}</div>
            </div>
            {item.details?.length ? (
              <div className="mt-2 space-y-1 text-sm text-foreground/65">
                {item.details.map((detail) => (
                  <div key={detail}>{detail}</div>
                ))}
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </motion.article>
  );
}

export default function OurServices() {
  const [activePackageSection, setActivePackageSection] = useState<"pedicure" | "manicure">("pedicure");

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="relative overflow-hidden border-b border-border/70">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-background lg:block" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs uppercase tracking-[0.28em] text-primary">
              <Sparkles className="h-4 w-4" />
              Service Menu
            </div>

            <h1 className="mt-6 max-w-xl text-3xl leading-[0.95] text-foreground sm:text-5xl lg:text-7xl">
              The full menu, organized for real booking decisions.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-foreground/72 sm:text-lg">
              Explore the full salon menu with clearly organized packages, enhancements, add-ons,
              and in-studio extras designed to make booking simple.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a
                href="https://customer.fozito.com/store/242b63c6-3466-447a-8b00-0941827b8a9b/booking-v3"
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_45px_rgba(212,175,55,0.2)] sm:w-auto"
              >
                Book Appointment
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/#contact"
                className="inline-flex w-full items-center justify-center rounded-md border border-primary/35 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-foreground transition-colors duration-300 hover:bg-primary/10 sm:w-auto"
              >
                Visit the salon
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative flex min-h-[360px] items-end overflow-hidden rounded-[2rem] border border-primary/20 bg-card shadow-[0_30px_80px_rgba(0,0,0,0.35)] sm:min-h-[440px]"
          >
            <img
              src="/imgs/gallery-6.jpg"
              alt="Luxury pedicure and manicure services"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-background/70" />
            <div className="relative z-10 w-full p-6 sm:p-8">
              <div className="mb-5 flex items-center gap-2 text-primary">
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
              </div>
              <p className="max-w-sm text-2xl leading-snug text-white sm:text-3xl">
                Real prices, real service steps, and a cleaner path from browsing to booking.
              </p>
              <div className="mt-6 grid gap-3 text-sm text-white/80 sm:grid-cols-2">
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">Pedicure massage times shown</div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">Women-only waxing note included</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-border/70 bg-muted/30 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center gap-6">
            <div className="text-center">
              <p className="text-xl font-bold uppercase tracking-[0.28em] text-primary">Service Categories</p>
            </div>

            <div className="inline-flex w-full flex-col gap-3 rounded-[1.5rem] border border-primary/20 bg-background/85 p-3 sm:flex-row">
              <button
                type="button"
                onClick={() => setActivePackageSection("pedicure")}
                className={[
                  "flex-1 rounded-[1.1rem] px-5 py-4 text-sm font-semibold uppercase tracking-[0.22em] transition-all duration-300",
                  activePackageSection === "pedicure"
                    ? "bg-primary text-primary-foreground shadow-[0_18px_45px_rgba(212,175,55,0.18)]"
                    : "border border-primary/15 bg-background text-foreground hover:bg-primary/10",
                ].join(" ")}
                aria-pressed={activePackageSection === "pedicure"}
              >
                Pedicure Packages
              </button>
              <button
                type="button"
                onClick={() => setActivePackageSection("manicure")}
                className={[
                  "flex-1 rounded-[1.1rem] px-5 py-4 text-sm font-semibold uppercase tracking-[0.22em] transition-all duration-300",
                  activePackageSection === "manicure"
                    ? "bg-primary text-primary-foreground shadow-[0_18px_45px_rgba(212,175,55,0.18)]"
                    : "border border-primary/15 bg-background text-foreground hover:bg-primary/10",
                ].join(" ")}
                aria-pressed={activePackageSection === "manicure"}
              >
                Manicure Packages
              </button>
            </div>
          </div>

          {activePackageSection === "pedicure" ? (
            <div className="mt-10 grid gap-6">
              {pedicurePackages.map((item, index) => (
                <PackageCard key={item.name} item={item} featured={index === 0} expandable />
              ))}
            </div>
          ) : (
            <>
              <div className="mt-10 grid gap-4">
                <div className="flex h-full flex-col justify-center rounded-[1.75rem] border border-primary/20 bg-background p-6 sm:p-8 lg:order-2">
                  <div className="space-y-4">
                    {experiencePromises.map((item, index) => (
                      <div
                        key={item}
                        className={[
                          "flex items-center gap-4 py-2 text-sm leading-6 text-foreground/80",
                          index < experiencePromises.length - 1 ? "border-b border-border/60 pb-4" : "",
                        ].join(" ")}
                      >
                        <div className="mt-0.5 rounded-full bg-primary/12 p-2 text-primary">
                          <ShieldCheck className="h-4 w-4" />
                        </div>
                        <p>{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 grid gap-4 lg:grid-cols-2">
                {manicurePackages.map((item, index) => (
                  <PackageCard key={item.name} item={item} featured={index === 0} expandable />
                ))}

                <div className="rounded-[1.75rem] border border-primary/20 bg-background p-6">
                  <div className="text-xl uppercase text-center tracking-[0.26em] text-primary font-bold">Polish Change</div>
                  <div className="mt-5 grid gap-4 sm:grid-cols-1 xl:grid-cols-2">
                    {polishChanges.map((item) => (
                      <div key={item.name} className="rounded-2xl border border-border/70 bg-background/60 p-4 text-sm">
                        <div className="font-semibold text-foreground">{item.name}</div>
                        <div className="mt-2 text-foreground/72">{item.regular}</div>
                        <div className="mt-1 text-foreground/72">{item.gel}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between justify-center">
            <div className="w-full">
              <p className="text-xl text-center font-bold uppercase tracking-[0.28em] text-primary">Nail Enhancement</p>
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {nailEnhancements.map((group) => (
              <PriceListCard key={group.title} title={group.title} items={group.items} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border/70 bg-muted/45 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-3">
            <PriceListCard title="Add-ons" items={addOns} />
            <PriceListCard title="Waxing" items={waxingServices} />
            <PriceListCard title="Kids Services" items={kidsServices} />
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="rounded-[1.75rem] border border-border/80 bg-card/70 p-6 sm:p-7">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-rose-500">
                <Scissors className="h-4 w-4" />
                Waxing Note
              </div>
              <p className="mt-4 text-lg leading-7 text-foreground/78">
                Bikini and Brazilian waxing services are not offered. Waxing services are limited to women only.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-primary/20 bg-background p-6 sm:p-7">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-primary/85">
                <GlassWater className="h-4 w-4" />
                Complimentary Drinks
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                {complimentaryDrinks.map((drink) => (
                  <span key={drink} className="rounded-full border border-primary/20 bg-background/70 px-4 py-2 text-sm text-foreground/82">
                    {drink === "Wine" || drink === "Beer" ? <Wine className="mr-2 inline h-4 w-4 text-primary" /> : null}
                    {drink}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="rounded-[2rem] border border-primary/20 bg-background p-8 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
              <div>
                <div className="text-lg uppercase tracking-[0.3em] text-primary">Plan Your Visit</div>
                <h2 className="mt-4 text-3xl text-foreground sm:text-5xl">Choose your package, then personalize with shape, color, finish, or extras in salon.</h2>
              </div>
              <div className="space-y-4 text-sm text-foreground/75">
                <div className="flex items-start gap-3">
                  <Clock3 className="h-4 w-4 text-primary" />
                  Mon - Sat: 9:30 AM - 7:00 PM, Sun: 10:30 AM - 5:00 PM
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-primary" />
                  11702 Retail Dr, Wake Forest, NC 27587, United States
                </div>
              </div>
            </div>
          </div>

          <a
            href="https://customer.fozito.com/store/242b63c6-3466-447a-8b00-0941827b8a9b/booking-v3"
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-14 w-full items-center justify-center rounded-full border border-primary bg-primary px-8 text-sm font-semibold uppercase tracking-[0.22em] text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_45px_rgba(212,175,55,0.22)] lg:w-auto"
          >
            Reserve Now
          </a>
        </div>
      </section>
    </main>
  );
}