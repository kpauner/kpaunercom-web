import {
  Clapperboard,
  Tv,
  Music,
  HelpCircle,
  Settings,
  Home,
  BookCheck,
  CreditCard,
  BadgeCheck,
} from "lucide-react";

export const navConfig = {
  main: [
    {
      title: "dashboard.title",
      url: "/",
      icon: Home,
    },
    {
      title: "tests.title",
      url: "/tests",
      icon: BookCheck,
    },
  ],

  media: [
    {
      title: "movies.title",
      url: "/movies",
      icon: Clapperboard,
    },
    {
      title: "tvShows.title",
      url: "/tv-shows",
      icon: Tv,
    },
    {
      title: "music.title",
      url: "/music",
      icon: Music,
    },
  ],

  secondary: [
    {
      title: "settings.title",
      url: "/settings",
      icon: Settings,
    },
    {
      title: "help.title",
      url: "/help",
      icon: HelpCircle,
    },
  ],

  user: [
    {
      title: "user.account",
      url: "/account",
      icon: BadgeCheck,
    },
    {
      title: "user.billing",
      url: "/billing",
      icon: CreditCard,
    },
    {
      title: "user.appearance",
      url: "/appearance",
      icon: Settings,
    },
  ],
};

export const footerConfig = [
  {
    title: "privacy.title",
    url: "/privacy",
  },
  {
    title: "terms.title",
    url: "/terms",
  },
];
