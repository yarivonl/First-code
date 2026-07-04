# 🌍 AI Trip Planner & Referral Engine

A modern, high-performance trip planning website built with Next.js 14+, TypeScript, and Tailwind CSS. This application aggregates flight and hotel options based on user preferences and generates referral-ready trip packages.

## 🚀 Features

- **Dynamic Search**: Filter by region (West Europe, East Europe, US East Coast), dates, and family size.
- **Quality Tiers**: Choose between "Best Quality" (Top airlines & hotels) and "Budget Friendly".
- **Auto-Aggregation**: Automatically matches flight schedules with hotel availability.
- **Commission Ready**: Built-in support for referral links to monetize your traffic.

## 🛠 Tech Stack

- **Framework**: [Next.js 14+](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Language**: TypeScript

## 🏁 Getting Started

### 1. Prerequisites
- Node.js 18.17 or later
- npm or yarn

### 2. Installation
```bash
npm install
```

### 3. Development
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the site.

## 🌐 Going Live (Production)

### 1. Connect Real APIs
The current version uses mock data located in `src/lib/api.ts`. To go live with real data:
- **Flights**: Sign up for [Amadeus for Developers](https://developers.amadeus.com/) or [Skyscanner API](https://www.travelpayouts.com/).
- **Hotels**: Use [Booking.com API](https://partner.booking.com/) or [Expedia Rapid](https://www.expediagroup.com/partners/lp/expedia-group-connectivity/).
- Update the `searchFlights` and `searchHotels` functions in `src/lib/api.ts` to fetch from these services.

### 2. Set Up Affiliate Links
To earn commissions:
- Replace the `referralUrl` logic in `src/lib/api.ts` with your unique affiliate tracking links.
- Most providers (like Travelpayouts) allow you to append an `ID` or `Marker` to the URL.

### 3. Deploy to Vercel (Recommended)
1. Push your code to a GitHub/GitLab repository.
2. Import the project into [Vercel](https://vercel.com/).
3. It will automatically detect Next.js and deploy your site to a public URL.

## 📁 Project Structure

- `src/app`: Routes and Page layouts.
- `src/components`: UI components (SearchForm, etc.).
- `src/lib`: Core logic (API services, Trip Aggregator, Region Mapping).
- `src/types`: TypeScript interfaces.

---
*Last updated with stable Next.js 15 and React 19 dependencies.*
