# Siva Kumar Surasani Portfolio

React portfolio site for projects, skills, research work, resume download, and a Formspree-powered contact form.

## Run Locally

```bash
npm install
npm start
```

The development server runs at `http://localhost:3000`.

## Production Build

```bash
npm run build
```

The optimized static site is generated in the `build` folder.

## Host on Netlify

This repo includes `netlify.toml`, so Netlify can build and publish the app automatically.

1. Push this folder to GitHub.
2. In Netlify, choose **Add new site** then **Import an existing project**.
3. Select the GitHub repository.
4. Use these settings:
   - Build command: `npm run build`
   - Publish directory: `build`
5. Deploy the site.

## Host on Vercel

1. Push this folder to GitHub.
2. In Vercel, choose **Add New Project**.
3. Select the GitHub repository.
4. Vercel should detect Create React App automatically.
5. Deploy with:
   - Build command: `npm run build`
   - Output directory: `build`

## Contact Form

The contact form posts to Formspree. To use a different inbox, replace the endpoint in `src/App.js`.
