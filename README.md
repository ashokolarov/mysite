# Personal Blog

A clean, minimal personal website built with Next.js featuring a blog with markdown support, mathematical formulas, and category filtering.

## Features

- **Clean Homepage** - Simple, distraction-free design with name, email, and navigation links
- **Blog Posts** - Write posts in Markdown with YAML frontmatter for metadata
- **Mathematical Formulas** - Full KaTeX support for inline and display math equations
- **Category Filtering** - Filter blog posts by tags/topics
- **Responsive Design** - Beautiful on all screen sizes
- **Fast & Static** - Pre-rendered static HTML for optimal performance
- **Dark Mode Ready** - Clean, minimal aesthetic that works everywhere

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Creating Blog Posts

Blog posts are stored in `app/blog/posts/` as Markdown files (`.md`).

### Post Structure

Each post should include YAML frontmatter at the top:

```markdown
---
title: "Post Title"
date: "2025-01-15"
summary: "A short summary of the post that appears in the blog list"
tags: ["tag1", "tag2"]
---

# Post Title

Your content here...
```

### Frontmatter Fields

- **title** (required): The title of your blog post
- **date** (required): Publication date in ISO format (YYYY-MM-DD)
- **summary** (required): A brief summary shown in the blog listing
- **tags** (optional): Array of topic tags for filtering

### Writing Content

Blog posts support:

- **Markdown formatting** - Headers, bold, italic, lists, etc.
- **Code blocks** - Syntax highlighting with language specifiers
- **LaTeX math** - Inline: `$x^2 + y^2 = z^2$` or display: `$$equation$$`
- **Images** - Standard Markdown image syntax: `![alt text](url)`
- **Links** - Standard Markdown links: `[text](url)`

### Math Examples

**Inline math**: This is an inline equation $e^{i\pi} + 1 = 0$.

**Display math**:
$$
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
$$

## Project Structure

```
mysite/
├── app/
│   ├── blog/
│   │   ├── posts/              # Markdown blog posts
│   │   │   ├── post-id.md
│   │   │   └── ...
│   │   ├── [id]/
│   │   │   └── page.tsx        # Individual post page
│   │   └── page.tsx            # Blog listing with filters
│   ├── components/
│   │   ├── Navigation.tsx      # Top navigation bar
│   │   └── BlogList.tsx        # Blog listing component
│   ├── lib/
│   │   └── blog.ts             # Blog post utilities
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Homepage
│   └── globals.css             # Global styles
├── package.json
├── next.config.js
├── tailwind.config.ts
└── tsconfig.json
```

## Customization

### Update Homepage Information

Edit `app/page.tsx` to update:
- Your name
- Email address
- Navigation links (Publications, Code, etc.)

### Styling

The site uses Tailwind CSS. To customize colors and styles:
- Modify `tailwind.config.ts`
- Update `app/globals.css` for custom styles

### Add Navigation Links

Edit `app/components/Navigation.tsx` to add or modify navigation items.

## Building for Production

```bash
# Build the static site
npm run build

# Start production server
npm start
```

The site is pre-rendered as static HTML for maximum performance and can be deployed to any static hosting service (Vercel, Netlify, GitHub Pages, etc.).

## Deployment

### Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

### Other Platforms

The built output in `.next/out` contains static HTML and can be deployed to any static hosting:

- GitHub Pages
- Netlify
- AWS S3 + CloudFront
- Any web server

## Dependencies

- **Next.js** - React framework
- **gray-matter** - Parse YAML frontmatter from markdown
- **remark** - Markdown processor
- **rehype-katex** - Render LaTeX math
- **KaTeX** - Mathematical typesetting
- **Tailwind CSS** - Styling

## License

Open source - feel free to use as a template for your own site!
