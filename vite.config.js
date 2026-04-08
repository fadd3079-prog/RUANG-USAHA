import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: './',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'pages/about.html'),
        solutions: resolve(__dirname, 'pages/features.html'),
        cariKreator: resolve(__dirname, 'pages/cari-kreator.html'),
        creatorProfile: resolve(__dirname, 'pages/creator-profile.html'),
        portfolioDetail: resolve(__dirname, 'pages/portfolio-detail.html'),
        marketplace: resolve(__dirname, 'pages/marketplace.html'),
        marketplaceDetail: resolve(__dirname, 'pages/marketplace-detail.html'),
        pricing: resolve(__dirname, 'pages/pricing.html'),
        blog: resolve(__dirname, 'pages/blog.html'),
        blogPost: resolve(__dirname, 'pages/blog-post.html'),
        contact: resolve(__dirname, 'pages/contact.html'),
        login: resolve(__dirname, 'pages/login.html'),
        register: resolve(__dirname, 'pages/register.html'),
        faq: resolve(__dirname, 'pages/faq.html'),
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});
