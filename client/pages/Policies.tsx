import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeAlert,
  CalendarClock,
  CreditCard,
  Gift,
  HandHelping,
  HeartPulse,
  ShieldCheck,
  Sparkles,
  UserCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

type PolicyGroup = {
  label?: string;
  items: string[];
};

type PolicySectionData = {
  title: string;
  paragraphs: string[];
  groups?: PolicyGroup[];
};

const policyHighlights = [
  {
    title: "Client-first care",
    description:
      "Open communication, clear expectations, and immediate adjustments whenever possible.",
    icon: HandHelping,
  },
  {
    title: "7-day workmanship coverage",
    description:
      "Qualified lifting, chipping, peeling, and application issues can be reviewed by our team.",
    icon: ShieldCheck,
  },
  {
    title: "Clean and safe service",
    description:
      "Strict sanitation procedures help protect both clients and technicians at all times.",
    icon: HeartPulse,
  },
];

const policySections: Array<PolicySectionData & { icon: typeof ShieldCheck }> =
  [
    {
      title: "Our Commitment To You",
      icon: Sparkles,
      paragraphs: [
        "At SLAYE Nail Bar, we are committed to providing a clean, safe, and luxurious experience with the highest standards of hygiene and customer care.",
        "Our goal is to ensure that every client leaves feeling confident and satisfied. To achieve this, we encourage open communication throughout your service. Please feel comfortable speaking with your technician at any time so we can make adjustments and meet your expectations.",
      ],
    },
    {
      title: "Appointments & Arrival Policy",
      icon: CalendarClock,
      paragraphs: [
        "Appointments are highly recommended and will be prioritized over walk-in clients. Walk-ins are always welcome based on availability.",
        "We allow a 10-minute grace period for all appointments. If you arrive later than 10 minutes:",
        "Services may be adjusted or modified based on the remaining time available.",
        "Please arrive on time to ensure the best possible service experience.",
      ],
      groups: [
        {
          items: [
            "Your service may be shortened",
            "Your appointment may be rescheduled",
            "Or your slot may be released",
          ],
        },
      ],
    },
    {
      title: "Cancellation, Rescheduling & No-Show Policy",
      icon: BadgeAlert,
      paragraphs: [
        "We respectfully request that all cancellations or rescheduling be made at least 24 hours in advance.",
        "Late cancellations and missed appointments affect our schedule and other clients. As a result:",
        "We appreciate your understanding and respect for our team’s time.",
      ],
      groups: [
        {
          items: [
            "Repeated late cancellations may limit future booking privileges",
            "No-shows may result in restricted or declined future appointments",
          ],
        },
      ],
    },
    {
      title: "Payment Policy",
      icon: CreditCard,
      paragraphs: [
        "All services must be paid in full at the time of service.",
        "A processing fee may be applied to card payments.",
        "Prices are subject to change without notice.",
        "We reserve the right to decline any form of payment at our discretion.",
        "For gratuities, we encourage cash tips for our talented technicians, though tips can also be added via card.",
      ],
      groups: [
        {
          label: "We accept",
          items: ["Cash", "Major credit/debit cards"],
        },
        {
          label: "We do not accept",
          items: ["Personal checks", "Venmo", "Zelle", "Cash App"],
        },
      ],
    },
    {
      title: "No Refund Policy",
      icon: ShieldCheck,
      paragraphs: [
        "All services are final and non-refundable.",
        "If you are not satisfied with your service, you must notify us before leaving the salon so we have the opportunity to correct the issue immediately.",
        "Once you leave the salon, it is understood that you have accepted the service as completed.",
      ],
    },
    {
      title: "7-Day Service Guarantee (Fix Policy)",
      icon: ShieldCheck,
      paragraphs: [
        "We stand behind the quality of our work and offer a 7-day service guarantee for issues related to workmanship.",
        "Repairs requested after 7 days will be treated as a new service.",
      ],
      groups: [
        {
          label: "Eligible issues may include",
          items: [
            "Lifting",
            "Chipping",
            "Peeling",
            "Uneven polish or application",
          ],
        },
        {
          label: "To qualify",
          items: [
            "You must contact us within 7 days of your service",
            "The original set must still be intact",
            "The issue must be assessed by our team",
          ],
        },
      ],
    },
    {
      title: "Exclusions To Guarantee",
      icon: BadgeAlert,
      paragraphs: ["This guarantee does not apply to:"],
      groups: [
        {
          items: [
            "Change of mind (color, shape, length, or design preference)",
            "Normal wear and tear",
            "Damage caused by work, lifestyle, or accidents",
            "Improper aftercare or neglect",
            "Services performed by another salon",
          ],
        },
      ],
    },
    {
      title: "Service Adjustments & Redo Policy",
      icon: Sparkles,
      paragraphs: [
        "Any changes requested after the service has been completed will be treated as a new service.",
        "Removal and redo services are considered separate services.",
        "We are not responsible for dissatisfaction based on personal preference once the service has been completed.",
      ],
      groups: [
        {
          items: ["Color changes", "Shape adjustments", "Design modifications"],
        },
      ],
    },
    {
      title: "Health & Safety Policy",
      icon: HeartPulse,
      paragraphs: [
        "For the safety of both clients and staff, we reserve the right to refuse or discontinue service at any time in the following situations:",
        "We follow strict sanitation procedures to ensure a safe environment at all times.",
      ],
      groups: [
        {
          items: [
            "Open wounds or cuts",
            "Signs of infection or fungal conditions",
            "Contagious skin or nail conditions",
            "Any condition that may compromise sanitation or safety",
          ],
        },
      ],
    },
    {
      title: "Client Responsibility",
      icon: UserCheck,
      paragraphs: [
        "Clients are responsible for:",
        "Proper aftercare is required to maintain results.",
        "We are not responsible for issues caused by improper care.",
      ],
      groups: [
        {
          items: [
            "Informing technicians of any allergies, sensitivities, or medical conditions",
            "Clearly communicating preferences before and during the service",
            "Inspecting nails before leaving the salon",
          ],
        },
      ],
    },
    {
      title: "Children & Age Policy",
      icon: UserCheck,
      paragraphs: [
        "For the safety, comfort, and relaxation of all clients:",
        "SLAYE Nail Bar is not responsible for accidents or injuries involving unattended children.",
      ],
      groups: [
        {
          items: [
            "We do not provide services for children under the age of 12",
            "Clients under 18 must be accompanied by a parent or legal guardian",
            "Children must be supervised at all times",
            "Only clients receiving services should be seated at technician stations",
          ],
        },
      ],
    },
    {
      title: "Personal Belongings",
      icon: HandHelping,
      paragraphs: [
        "Please keep all personal belongings with you at all times.",
        "SLAYE Nail Bar is not responsible for lost, stolen, or damaged items.",
      ],
    },
    {
      title: "Gift Card Policy",
      icon: Gift,
      paragraphs: ["Please treat gift cards as cash."],
      groups: [
        {
          items: [
            "Gift cards are non-refundable and cannot be exchanged for cash",
            "Gift cards must be presented at the time of service",
            "Lost or stolen gift cards will not be replaced",
          ],
        },
      ],
    },
    {
      title: "Right To Refuse Service",
      icon: BadgeAlert,
      paragraphs: [
        "We reserve the right to refuse service to anyone who:",
        "Our goal is to maintain a peaceful and professional environment for everyone.",
      ],
      groups: [
        {
          items: [
            "Is disrespectful to staff or other clients",
            "Displays inappropriate or disruptive behavior",
            "Fails to follow salon policies",
          ],
        },
      ],
    },
    {
      title: "Policy Updates",
      icon: Sparkles,
      paragraphs: ["Policies are subject to change without prior notice."],
    },
  ];

function PolicySection({
  title,
  paragraphs,
  groups,
  icon: Icon,
}: PolicySectionData & { icon: typeof ShieldCheck }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.45 }}
      className="rounded-[1.75rem] border border-border/80 bg-card/70 p-6 sm:p-7"
    >
      <div className="space-y-5">
        <div className="flex items-center gap-4">
          <div className="shrink-0 rounded-xl border border-primary/20 bg-primary/10 p-2 text-primary">
            <Icon className="block h-5 w-5" />
          </div>
          <h2 className="min-w-0 text-2xl leading-tight text-foreground sm:text-[1.7rem]">
            {title}
          </h2>
        </div>
        <div className="space-y-4 text-sm leading-7 text-foreground/76 sm:text-base">
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        {groups?.length ? (
          <div className="space-y-4">
            {groups.map((group) => (
              <div key={`${title}-${group.label ?? group.items[0]}`}>
                {group.label ? (
                  <div className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-primary/80">
                    {group.label}
                  </div>
                ) : null}
                <div className="grid gap-3">
                  {group.items.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-2xl border border-border/70 bg-background/60 px-4 py-3 text-sm text-foreground/82"
                    >
                      <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-primary" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </motion.article>
  );
}

export default function Policies() {
  const bookingUrl =
    "https://customer.fozito.com/store/242b63c6-3466-447a-8b00-0941827b8a9b/booking-v3";

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="relative overflow-hidden border-b border-border/70">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.16),transparent_36%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs uppercase tracking-[0.28em] text-primary">
                <ShieldCheck className="h-4 w-4" />
                Salon Policies
              </div>
              <h1 className="mt-6 text-3xl leading-[0.95] text-foreground sm:text-5xl lg:text-7xl">
                SLAYE Nail Bar policies, written clearly and designed for real
                expectations.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-foreground/72 sm:text-lg">
                This page brings together our service standards, booking
                expectations, payment terms, guarantee details, and in-salon
                safety rules so every client knows what to expect before sitting
                down.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <a
                  href={bookingUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_45px_rgba(212,175,55,0.2)] sm:w-auto"
                >
                  Book Appointment
                  <ArrowRight className="h-4 w-4" />
                </a>
                <Link
                  to="/our-services"
                  className="inline-flex w-full items-center justify-center rounded-md border border-primary/35 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-foreground transition-colors duration-300 hover:bg-primary/10 sm:w-auto"
                >
                  View Full Menu
                </Link>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {policyHighlights.map(({ title, description, icon: Icon }) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45 }}
                  className="rounded-[1.6rem] border border-border/80 bg-card/65 p-5 backdrop-blur"
                >
                  <div className="inline-flex rounded-2xl border border-primary/20 bg-primary/10 p-3 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="mt-4 text-lg font-semibold text-foreground">
                    {title}
                  </div>
                  <p className="mt-2 text-sm leading-6 text-foreground/70">
                    {description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-6 xl:grid-cols-2">
          {policySections.map((section) => (
            <PolicySection key={section.title} {...section} />
          ))}
        </div>
      </section>

      <section className="border-t border-border/70 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-primary/20 bg-card/65 p-6 sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-xs uppercase tracking-[0.26em] text-primary">
                <ShieldCheck className="h-4 w-4" />
                Final Agreement
              </div>
              <h2 className="mt-5 text-3xl leading-tight text-foreground sm:text-4xl">
                By receiving services at SLAYE Nail Bar, you acknowledge and
                agree to all policies listed above.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-foreground/72">
                Policies are in place to protect your experience, support our
                technicians, and keep the salon calm, clean, and consistent for
                every appointment.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-border/80 bg-background/70 p-6">
              <div className="text-sm font-semibold uppercase tracking-[0.22em] text-primary/80">
                Need help before booking?
              </div>
              <div className="mt-4 space-y-4 text-sm leading-7 text-foreground/74">
                <p>
                  Call, email, or ask our front desk team if you want
                  clarification on timing, eligibility for fixes, or service
                  suitability before your visit.
                </p>
                <p>
                  We would rather align expectations early than rush decisions
                  at check-in.
                </p>
              </div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={bookingUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-primary bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_45px_rgba(212,175,55,0.22)]"
                >
                  Reserve Now
                  <ArrowRight className="h-4 w-4" />
                </a>
                <Link
                  to="/#contact"
                  className="inline-flex items-center justify-center rounded-full border border-primary/30 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-foreground transition-colors duration-300 hover:bg-primary/10"
                >
                  Contact Salon
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
