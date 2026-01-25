# Opulence Tools

A modern e-commerce platform for luxury jewelry-making tools and equipment. Built for jewelers, by jewelers.

> **Note:** This project is currently in active development.

## Tech Stack

- **Framework:** Next.js 16.1.1 (App Router)
- **UI Library:** React 19.2.3
- **Styling:** Tailwind CSS 4.x
- **Database:** PostgreSQL with Prisma 7.2.0
- **Authentication:** NextAuth.js 5.0.0-beta.30
- **Validation:** Zod 4.3.5
- **UI Components:** shadcn/ui (Radix UI)
- **Language:** TypeScript 5.x

## Features

### Current
- User authentication (sign in with credentials)
- Responsive navigation with mobile sheet menu
- Product catalog with filtering
- Product detail pages
- User dropdown menu with account options
- Modern, accessible UI components

### In Progress
- **User Registration** - Sign-up form and model exist, completing functionality

### Planned
- **Admin Dashboard** - Product management, order tracking, analytics
- **Shopping Cart** - Add/remove items, quantity management
- **Checkout Flow** - Secure payment processing
- **Order Management** - Order history, tracking, status updates
- **Dropshipping Integration** - Supplier connections, automated fulfillment
- **Inventory Management** - Stock tracking, low-stock alerts

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL database
- npm or pnpm

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/aleyna-cintron/opulence-tools.git
   cd opulence-tools
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Set up environment variables
   ```bash
   cp .env.example .env
   ```

   Configure the following in `.env`:
   ```
   DATABASE_URL="postgresql://..."
   AUTH_SECRET="your-auth-secret"
   ```

4. Set up the database
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. Run the development server
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000)

## Demo Account

For testing purposes, you can use:

| Email | Password |
|-------|----------|
| demo@example.com | password123 |

> **Note:** Create this account manually via database seeding during development.

## Project Structure

```
opulence-tools/
├── app/
│   ├── (auth)/          # Authentication pages (sign-in, sign-up)
│   ├── (root)/          # Main site pages (home, shop, products)
│   └── layout.tsx       # Root layout
├── components/
│   ├── ui/              # shadcn/ui components
│   ├── Navbar.tsx       # Navigation component
│   └── Footer.tsx       # Footer component
├── lib/
│   ├── actions/         # Server actions
│   └── validators.ts    # Zod schemas
├── db/
│   └── client.ts        # Prisma client
└── prisma/
    └── schema.prisma    # Database schema
```

## License

This project is private and not licensed for public use.

---

Built with Next.js and Tailwind CSS
