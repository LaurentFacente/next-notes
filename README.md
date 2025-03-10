# Next Notes

Next Notes is a Next.js application that allows creating, reading, updating, and deleting (CRUD) notes. This project serves as an experimental playground for testing various technologies and features.

## 🚀 Tech Stack

- **Framework**: Next.js 15
- **Database**: Prisma SQLite
- **UI**: Tailwind CSS and Shadcn
- **Development Tools**: TypeScript, ESLint, PostCSS

## 📦 Installation

Clone the project and install dependencies:

```bash
git clone https://github.com/your-username/next-notes.git
cd next-notes
npm install
```

## 🛠 Database Setup

1. Install Prisma:

   ```bash
   npm install prisma --save-dev
   ```

2. Initialize Prisma with SQLite:

   ```bash
   prisma init --datasource-provider sqlite
   ```

3. Create the local database and apply migrations:

   ```bash
   prisma migrate dev --name init
   ```

4. To visualize the database, use Prisma Studio:

   ```bash
   prisma studio
   ```

## 🔧 Useful Commands

### Development

```bash
npm run dev  # Start the development server
```

## 📜 Features

- Create, read, update, and delete notes
- Minimalist UI with Tailwind CSS
