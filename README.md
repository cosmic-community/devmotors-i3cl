# Devmotors

![App Preview](https://imgix.cosmicjs.com/1bfdee70-6386-11f1-ac8c-330ac011d850-autopilot-photo-1500648767791-00dcc994a43e-1780956307094.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A modern, responsive company website for **Devmotors** — a professional automotive services company. Built with Next.js 16 and powered by [Cosmic](https://www.cosmicjs.com), it showcases services, team members, case studies, and client testimonials with a sleek, professional design.

## Features

- 🏠 **Dynamic Homepage** — Hero section, featured services, top case studies, and rotating testimonials
- 🔧 **Services Catalog** — Browse all services with pricing, descriptions, and detail pages
- 👤 **Team Directory** — Meet the team with photos, roles, and bios
- 📊 **Case Studies** — In-depth project showcases with results and related services
- 💬 **Client Testimonials** — Star ratings and quotes from happy clients
- 📱 **Fully Responsive** — Beautiful on mobile, tablet, and desktop
- ⚡ **Server-Rendered** — Fast loads with Next.js App Router and server components
- 🎨 **Modern UI** — Tailwind CSS with a clean, automotive-inspired aesthetic

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=6a273c357da35436b10af700&clone_repository=6a273d407da35436b10b09ec)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for a professional services company with services offered, team members (including photos and bios), case studies, and client testimonials.
>
> User instructions: Devmotors"

### Code Generation Prompt

> Build a Next.js application for a company website called "Devmotors". The content is managed in Cosmic CMS with the following object types: services, team-members, case-studies, testimonials. Create a beautiful, modern, responsive design with a homepage and pages for each content type.
>
> User instructions: Devmotors

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS**
- **Cosmic** ([SDK](https://www.cosmicjs.com/docs))

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) or Node.js 18+
- A Cosmic account and bucket with the content types: `services`, `team-members`, `case-studies`, `testimonials`

### Installation

1. Clone the repository
2. Install dependencies:

```bash
bun install
```

3. Set up your environment variables (these are provided automatically when cloning in Cosmic):

```
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

4. Run the development server:

```bash
bun run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

## Cosmic SDK Examples

```typescript
import { cosmic } from '@/lib/cosmic'

// Fetch all services
const { objects: services } = await cosmic.objects
  .find({ type: 'services' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)

// Fetch a single case study with related service
const { object: caseStudy } = await cosmic.objects
  .findOne({ type: 'case-studies', slug })
  .depth(1)
```

## Cosmic CMS Integration

This application uses [Cosmic](https://www.cosmicjs.com/docs) as a headless CMS. The content types used are:

- **services** — service offerings with pricing and descriptions
- **team-members** — staff profiles with photos and bios
- **case-studies** — project showcases linked to services
- **testimonials** — client reviews with star ratings

Connected objects (like a case study's related service) are fetched using the `depth` parameter for efficient single-query retrieval.

## Deployment Options

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Add your environment variables
4. Deploy

### Netlify

1. Push your code to GitHub
2. Import the project in [Netlify](https://netlify.com)
3. Add your environment variables
4. Deploy

<!-- README_END -->