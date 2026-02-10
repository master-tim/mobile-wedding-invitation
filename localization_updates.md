# Localization Updates Implementation Plan

The following changes have been made to fully localize the wedding invitation application, addressing hardcoded strings including "신랑/신부" (Groom/Bride) labels.

## 1. Message Files Updated
Added new keys to `ko.json`, `en.json`, and `ky.json`:
- **Intro Namespace**: `groomLabel`, `brideLabel` (for "신랑", "신부" text above names)
- **Gallery Namespace**: `close`, `photoAlt` (for Gallery UI elements)
- **Navigation Namespace**: `menu`, `close`, `appTitle` (for Navigation menu)

## 2. Components Updated

### `components/IntroSection.tsx`
- Replaced hardcoded "신랑" and "신부" with `{t('groomLabel')}` and `{t('brideLabel')}`.

### `components/ContactSection.tsx`
- Replaced hardcoded "계좌번호가" string in the copy-to-clipboard alert with `t('account')` for proper localization.

### `components/GallerySection.tsx`
- Replaced hardcoded "Close" button text with `{t('close')}`.
- Updated image `alt` text to use `{t('photoAlt')}` combined with the image index.

### `components/FooterSection.tsx`
- Replaced hardcoded "Temirlan & Seulki" names in the copyright notice with `{tHero('groom')}` and `{tHero('bride')}` to use the localized names from the Hero namespace.

### `components/Navigation.tsx`
- Replaced hardcoded "Menu" and "Close" button text with `{t('menu')}` and `{t('close')}`.
- Replaced hardcoded "Wedding Invitation" text with `{t('appTitle')}`.

## Verification
- All UI elements identified as having hardcoded strings now use the `next-intl` translation system.
- Strings are available in Korean, English, and Kyrgyz.
