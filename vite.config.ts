import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig} from 'vite';

function photoApiPlugin() {
  return {
    name: 'photo-api',
    configureServer(server: any) {
      server.middlewares.use('/api/list-who-photos', (_req: any, res: any) => {
        try {
          const publicBlok3 = path.resolve('public/blok3');
          const blok3 = path.resolve('blok3');
          const files = new Set<string>();
          if (fs.existsSync(publicBlok3)) {
            fs.readdirSync(publicBlok3).forEach(f => files.add(f));
          }
          if (fs.existsSync(blok3)) {
            fs.readdirSync(blok3).forEach(f => files.add(f));
          }
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ files: Array.from(files) }));
        } catch (err: any) {
          res.writeHead(500, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: err.message }));
        }
      });

      server.middlewares.use('/api/upload-who-photo', (req: any, res: any) => {
        if (req.method === 'POST') {
          let body = '';
          req.on('data', (chunk: any) => { body += chunk; });
          req.on('end', () => {
            try {
              const data = JSON.parse(body);
              const { filename, base64 } = data;
              if (!filename || !base64) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Missing filename or base64' }));
                return;
              }
              const cleanBase64 = base64.replace(/^data:image\/\w+;base64,/, '');
              const buffer = Buffer.from(cleanBase64, 'base64');
              const publicBlok3 = path.resolve('public/blok3');
              const blok3 = path.resolve('blok3');
              if (!fs.existsSync(publicBlok3)) fs.mkdirSync(publicBlok3, { recursive: true });
              if (!fs.existsSync(blok3)) fs.mkdirSync(blok3, { recursive: true });
              fs.writeFileSync(path.join(publicBlok3, filename), buffer);
              fs.writeFileSync(path.join(blok3, filename), buffer);
              res.writeHead(200, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ success: true, filename, url: `./blok3/${filename}` }));
            } catch (err: any) {
              res.writeHead(500, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ error: err.message }));
            }
          });
        } else {
          res.writeHead(405).end();
        }
      });

      // Blok 2: Интересные события
      server.middlewares.use('/api/list-events-photos', (_req: any, res: any) => {
        try {
          const publicBlok2 = path.resolve('public/blok2');
          const blok2 = path.resolve('blok2');
          const files = new Set<string>();
          if (fs.existsSync(publicBlok2)) {
            fs.readdirSync(publicBlok2).forEach(f => files.add(f));
          }
          if (fs.existsSync(blok2)) {
            fs.readdirSync(blok2).forEach(f => files.add(f));
          }
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ files: Array.from(files) }));
        } catch (err: any) {
          res.writeHead(500, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: err.message }));
        }
      });

      server.middlewares.use('/api/upload-event-photo', (req: any, res: any) => {
        if (req.method === 'POST') {
          let body = '';
          req.on('data', (chunk: any) => { body += chunk; });
          req.on('end', () => {
            try {
              const data = JSON.parse(body);
              const { filename, base64 } = data;
              if (!filename || !base64) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Missing filename or base64' }));
                return;
              }
              const cleanBase64 = base64.replace(/^data:image\/\w+;base64,/, '');
              const buffer = Buffer.from(cleanBase64, 'base64');
              const publicBlok2 = path.resolve('public/blok2');
              const blok2 = path.resolve('blok2');
              if (!fs.existsSync(publicBlok2)) fs.mkdirSync(publicBlok2, { recursive: true });
              if (!fs.existsSync(blok2)) fs.mkdirSync(blok2, { recursive: true });
              fs.writeFileSync(path.join(publicBlok2, filename), buffer);
              fs.writeFileSync(path.join(blok2, filename), buffer);
              res.writeHead(200, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ success: true, filename, url: `./blok2/${filename}` }));
            } catch (err: any) {
              res.writeHead(500, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ error: err.message }));
            }
          });
        } else {
          res.writeHead(405).end();
        }
      });

      // Blok 4: Смешные моменты (7 фото)
      server.middlewares.use('/api/list-humor-photos', (_req: any, res: any) => {
        try {
          const publicBlok4 = path.resolve('public/blok4');
          const blok4 = path.resolve('blok4');
          const files = new Set<string>();
          if (fs.existsSync(publicBlok4)) {
            fs.readdirSync(publicBlok4).forEach(f => files.add(f));
          }
          if (fs.existsSync(blok4)) {
            fs.readdirSync(blok4).forEach(f => files.add(f));
          }
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ files: Array.from(files) }));
        } catch (err: any) {
          res.writeHead(500, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: err.message }));
        }
      });

      server.middlewares.use('/api/upload-humor-photo', (req: any, res: any) => {
        if (req.method === 'POST') {
          let body = '';
          req.on('data', (chunk: any) => { body += chunk; });
          req.on('end', () => {
            try {
              const data = JSON.parse(body);
              const { filename, base64 } = data;
              if (!filename || !base64) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Missing filename or base64' }));
                return;
              }
              const cleanBase64 = base64.replace(/^data:image\/\w+;base64,/, '');
              const buffer = Buffer.from(cleanBase64, 'base64');
              const publicBlok4 = path.resolve('public/blok4');
              const blok4 = path.resolve('blok4');
              const distBlok4 = path.resolve('dist/blok4');
              if (!fs.existsSync(publicBlok4)) fs.mkdirSync(publicBlok4, { recursive: true });
              if (!fs.existsSync(blok4)) fs.mkdirSync(blok4, { recursive: true });
              fs.writeFileSync(path.join(publicBlok4, filename), buffer);
              fs.writeFileSync(path.join(blok4, filename), buffer);
              if (fs.existsSync(distBlok4)) {
                fs.writeFileSync(path.join(distBlok4, filename), buffer);
              }
              res.writeHead(200, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ success: true, filename, url: `./blok4/${filename}` }));
            } catch (err: any) {
              res.writeHead(500, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ error: err.message }));
            }
          });
        } else {
          res.writeHead(405).end();
        }
      });

      server.middlewares.use('/api/upload-video', (req: any, res: any) => {
        if (req.method === 'POST') {
          try {
            const urlObj = new URL(req.url, 'http://localhost');
            const type = urlObj.searchParams.get('type') || 'intro';
            const origName = urlObj.searchParams.get('name') || `${type}_video.mp4`;
            const ext = path.extname(origName) || '.mp4';
            const filename = `${type}_video${ext}`;

            const publicVideos = path.resolve('public/videos');
            const videosDir = path.resolve('videos');
            const distVideos = path.resolve('dist/videos');

            if (!fs.existsSync(publicVideos)) fs.mkdirSync(publicVideos, { recursive: true });
            if (!fs.existsSync(videosDir)) fs.mkdirSync(videosDir, { recursive: true });
            if (!fs.existsSync(distVideos)) fs.mkdirSync(distVideos, { recursive: true });

            const targetPath = path.join(publicVideos, filename);
            const videosPath = path.join(videosDir, filename);
            const distPath = path.join(distVideos, filename);

            const writeStream = fs.createWriteStream(targetPath);
            req.pipe(writeStream);

            writeStream.on('finish', () => {
              try {
                fs.copyFileSync(targetPath, videosPath);
                if (fs.existsSync(path.resolve('dist'))) {
                  fs.copyFileSync(targetPath, distPath);
                }
              } catch (_) {}
              res.writeHead(200, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ 
                success: true, 
                filename, 
                url: `./videos/${filename}` 
              }));
            });

            writeStream.on('error', (err: any) => {
              res.writeHead(500, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ error: err.message }));
            });
          } catch (err: any) {
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: err.message }));
          }
        } else {
          res.writeHead(405).end();
        }
      });
    }
  };
}

export default defineConfig(() => {
  return {
    base: './',
    plugins: [react(), tailwindcss(), photoApiPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(import.meta.dirname || '.', '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});

