import Donation from "@/pages/donation";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "MS-Steam",
  description: "MS-Stream is new area of donation",
  dashboardItems: [
    {
      label: "Analytics",
      href: "/",
    },
    {
      label: "My Acount",
      href: "/acount",
    },
    {
      label: "Events",
      href: "/myevents",
    },
  ],
  donations: [
    {
      label: "Donation Page",
      href: "/donation-page",
    },
    {
      label: "Subscription",
      href: "/subscription",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "History",
      href: "/history",
    },
    {
      label: "Bank Transfers",
      href: "/bank-transfers",
    },
  ],
  widgets: [
    {
      label: "Alert Box",
      href: "/alert-box",
    },
    {
      label: "Top & Last",
      href: "/top-last",
    },
    {
      label: "Goals",
      href: "/goals",
    },
    {
      label: "Counters & Totals",
      href: "/counter",
    },
    {
      label: "Image Manager",
      href: "/my-media",
    },
    {
      label: "Others",
      href: "/others",
    },
  ],
  help: [
    {
      label: "Help Center",
      href: "/help-center",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ],
  links: {
    github: "https://github.com/tsundgerhen",
  },
};
