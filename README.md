# AI Hosting Application

A full-stack, production-ready AI content generation and hosting platform built with Next.js, TypeScript, Drizzle ORM, PostgreSQL, and Tailwind CSS. This application allows users to generate, manage, and host AI-generated content with authentication, dashboard, billing, and template management features.

---

## Features

- **AI Content Generation:** Generate content using integrated AI models (Google Generative AI, etc.).
- **User Authentication:** Secure sign-up/sign-in flows powered by Clerk.
- **Dashboard:** Manage generated content, view history, and access billing.
- **Template System:** Create and use content templates for various use cases.
- **Database Integration:** Uses PostgreSQL with Drizzle ORM for robust data storage.
- **Modern UI:** Built with Tailwind CSS and Radix UI for a responsive, accessible interface.
- **Billing:** (If enabled) Manage subscriptions and payments.
- **TypeScript:** End-to-end type safety.

---

## Folder Structure

```
AI-Hosting-Application/
├── app/                # Next.js app directory (routing, pages, layouts)
│   ├── dashboard/      # User dashboard (content, history, billing)
│   ├── (auth)/         # Authentication (sign-in, sign-up)
│   ├── (context)/      # React context providers
│   ├── (data)/         # Data fetching and template logic
│   └── ...             # Other app routes and components
├── components/         # Reusable UI components
├── lib/                # Utility functions
├── public/             # Static assets (SVGs, images)
├── utils/              # Database schema and helpers
├── drizzle.config.js   # Drizzle ORM config
├── tailwind.config.ts  # Tailwind CSS config
├── tsconfig.json       # TypeScript config
├── package.json        # Dependencies and scripts
└── ...                 # Other config and setup files
```

---

## Getting Started

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd AIContent/AI-Hosting-Application
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Configure Environment Variables

Create a `.env.local` file in the root with the following (example):

```
NEXT_PUBLIC_DRIZZLE_DATABASE_URL=postgresql://user:password@host:port/dbname
CLERK_SECRET_KEY=your_clerk_secret
CLERK_PUBLISHABLE_KEY=your_clerk_publishable
# Add any other required API keys (Google, OpenAI, etc.)
```

### 4. Set Up the Database

Push the schema to your PostgreSQL database:

```bash
npm run db:push
```

(Optional) Open Drizzle Studio for DB management:

```bash
npm run db:studio
```

### 5. Run the Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the app.

---

## Deployment

- Deploy easily to Vercel or any platform supporting Next.js.
- Set all required environment variables in your deployment environment.

---

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Drizzle ORM** (PostgreSQL)
- **Clerk** (Authentication)
- **Google Generative AI** (or other AI providers)
- **Radix UI, Lucide, Toast UI** (UI/UX)

---

## Customization

- Add or modify templates in `app/(data)/Templates.tsx`.
- Update database schema in `utils/schema.tsx`.
- Add new UI components in `components/ui/`.

---

## License

MIT (or your chosen license)
