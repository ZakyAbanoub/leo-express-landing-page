# Leo Express 

Modern shipping and logistics website built with Next.js 13, featuring a bilingual interface (English/Arabic) and optimized for performance and SEO.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fusername%2Fleo-express)

## Features

- Built with Next.js 13 and App Router
- Bilingual support (English/Arabic)
- Modern UI with Tailwind CSS
- Fully responsive design
- SEO optimized
- Performance optimized
- Security headers configured
- Google Analytics ready
- robots.txt and sitemap.xml included

## Tech Stack

- **Framework:** Next.js 13
- **Styling:** Tailwind CSS
- **Icons:** Heroicons
- **Fonts:** Inter, Cairo (for Arabic)
- **Internationalization:** next-intl
- **Deployment:** Vercel

## Getting Started

### Prerequisites

- Node.js 16.8 or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/username/leo-express.git
   cd leo-express
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Create a `.env.local` file:
   ```env
   NEXT_PUBLIC_GA_ID=your-ga-id
   ```

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Internationalization

The website supports both English and Arabic languages. Translations are stored in:
- `/messages/en.json`
- `/messages/ar.json`

To add a new language:
1. Add the locale to `src/i18n.ts`
2. Create a new translation file in `/messages`
3. Update the `generateStaticParams` function in `app/[locale]/layout.tsx`

## Environment Variables

Create a `.env.local` file with the following variables:
```env
NEXT_PUBLIC_GA_ID=your-ga-id
```

## Deployment

The easiest way to deploy is with [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your project to Vercel
3. Add your environment variables
4. Deploy!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Support

For support, email [support@leotech.agency](mailto:support@leotech.agency) or open an issue in this repository.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [next-intl](https://next-intl-docs.vercel.app/)
- [Vercel](https://vercel.com)
