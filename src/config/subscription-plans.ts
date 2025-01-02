export type SubscriptionPlan = {
  id: string;
  name: string;
  stripePriceId: string;
  price: number;
  features: string[];
};

export const storeSubscriptionPlans: SubscriptionPlan[] = [
  {
    id: "free",
    name: "free",
    stripePriceId: "",
    price: 0,
    features: ["custom-page-image-background", "custom-css"],
  },
  {
    id: "pro",
    name: "Pro",
    stripePriceId: process.env.NEXT_PUBLIC_STRIPE_PRO_PRICE_ID ?? "",
    price: 4.79,
    features: ["custom-page-image-background", "custom-css", "support-rodgrod"],
  },
];
