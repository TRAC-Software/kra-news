# KRA News

A modern news website built with Next.js, TypeScript, and Tailwind CSS, designed for deployment on AWS Amplify.

## Features

- Responsive design that works on all devices
- Dynamic news articles with categories
- Featured news section
- Newsletter signup
- Article detail pages with social sharing
- Category filtering

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: AWS Amplify
- **State Management**: React Hooks
- **Data Fetching**: Server Components (in a real application, this would connect to a backend API)

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/kra-news.git
cd kra-news
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
kra-news/
├── src/
│   ├── app/                  # Next.js App Router
│   │   ├── article/[slug]/   # Article detail page
│   │   ├── categories/[category]/ # Category pages
│   │   ├── layout.tsx        # Root layout
│   │   ├── page.tsx          # Homepage
│   │   └── not-found.tsx     # 404 page
│   ├── components/           # Reusable UI components
│   ├── data/                 # Mock data (would be API calls in production)
│   └── utils/                # Utility functions
├── public/                   # Static assets
├── amplify.yml               # AWS Amplify configuration
└── package.json              # Project dependencies
```

## Deployment on AWS Amplify

1. Push your code to a Git repository (GitHub, GitLab, BitBucket)
2. Log in to the AWS Amplify Console
3. Choose "Host web app"
4. Connect your repository and branch
5. Configure build settings (the amplify.yml file is already set up)
6. Deploy the application

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Images from [Unsplash](https://unsplash.com)
- Icons from [Heroicons](https://heroicons.com)
