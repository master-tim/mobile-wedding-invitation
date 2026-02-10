# 💒 Wedding Invitation Website

A beautiful, mobile-responsive wedding invitation website featuring smooth GSAP animations, Kakao Map integration, photo gallery, venue details, and transport information. Built with Next.js 15, TypeScript, and Tailwind CSS.

모던하고 반응형 모바일 웨딩 청첩장 웹사이트입니다. GSAP 애니메이션, 카카오맵 연동, 포토 갤러리, 오시는 길 안내 기능을 제공합니다. Next.js 15, TypeScript, Tailwind CSS로 제작되었습니다.

## ✨ Features

- 🎨 **Smooth Animations**: GSAP-powered scroll animations and transitions
- 📱 **Responsive Design**: Looks perfect on all devices
- 🗺️ **Interactive Map**: Integrated Kakao Maps for venue location
- 🖼️ **Photo Gallery**: Beautiful gallery to showcase your wedding photos
- 🎯 **RSVP System**: Contact section for guests to respond
- 🚌 **Transport Information**: Detailed directions via subway, bus, and car

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ or higher
- pnpm (recommended) / npm / yarn

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd wedding-invite
```

2. Install dependencies:

```bash
pnpm install
# or
npm install
```

3. Set up environment variables:

```bash
cp .env.example .env
```

4. Get a Kakao Maps API key from [Kakao Developers](https://developers.kakao.com/) and add it to `.env`:

```env
NEXT_PUBLIC_KAKAO_APP_KEY=your_kakao_app_key_here
```

5. Run the development server:

```bash
pnpm dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Customization

### 1. Update Wedding Data

Edit [`data/wedding-data.ts`](data/wedding-data.ts) with your wedding information:

- Bride and groom names
- Parents' names and contact information
- Wedding date and time
- Venue details and coordinates
- Bank account information for gifts
- Transportation directions

### 2. Update Images

Replace the Unsplash URLs in [`messages/kr/images.json`](messages/kr/images.json)

You can either:

- Use your own images (place them in `public/gallery/`)
- Use Unsplash URLs (free stock photos)
- Use any other image hosting service

### 3. Customize Translations

Update the text in the message files in [`messages/kr/`](messages/kr/):

- `en.json` - English translations
- `ko.json` - Korean translations
- `images.json` - Image URLs

### 4. Adjust Map Coordinates

Update the venue coordinates in [`data/wedding-data.ts`](data/wedding-data.ts):

```typescript
coordinates: {
  lat: YOUR_LATITUDE,
  lng: YOUR_LONGITUDE
}
```

## 🌐 Language

The template is configured for Korean language. The messages are loaded from [`messages/kr/ko.json`](messages/kr/ko.json).

## 🎨 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: GSAP (GreenSock)
- **Internationalization**: next-intl
- **Maps**: Kakao Maps API

## 📦 Project Structure

```
wedding-invite/
├── app/
│   ├── layout.tsx            # Root layout
│   ├── page.tsx              # Main page
│   └── globals.css           # Global styles
├── components/               # React components
│   ├── AnimatedSection.tsx
│   ├── ContactSection.tsx
│   ├── CountrySwitcher.tsx
│   ├── FooterSection.tsx
│   ├── GallerySection.tsx
│   ├── HeroSection.tsx
│   ├── IntroSection.tsx
│   ├── LanguageSwitcher.tsx
│   ├── MapSection.tsx
│   ├── Navigation.tsx
│   ├── SmoothScroll.tsx
│   ├── TransportSection.tsx
│   ├── VenueSection.tsx
│   └── gsap/
│       └── ScrollSection.tsx
├── data/
│   └── wedding-data.ts        # Wedding information
├── hooks/
│   └── useGSAP.ts            # GSAP hooks
├── i18n/
│   ├── request.ts            # i18n request handler
│   └── routing.ts            # Routing configuration
├── lib/
│   └── gsap/                 # GSAP configuration
├── messages/                  # Translation files
│   └── kr/                   # Korea translations
├── public/
│   └── gallery/              # Wedding photos
└── .env                      # Environment variables
```

## 🛠️ Development

### Build for Production

```bash
pnpm build
```

### Run Production Build

```bash
pnpm start
```

### Lint Code

```bash
pnpm lint
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Add your environment variables
4. Deploy!

### Other Platforms

This Next.js app can be deployed to any platform that supports Node.js:

- Netlify
- AWS Amplify
- Cloudflare Pages
- Your own VPS

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 💝 Credits

- Wedding photos from [Unsplash](https://unsplash.com)
- Built with [Next.js](https://nextjs.org/)
- Animations powered by [GSAP](https://greensock.com/gsap/)

## 📧 Support

If you have any questions or need help customizing the template, please open an issue or reach out!

---

Made with ❤️ for your special day
