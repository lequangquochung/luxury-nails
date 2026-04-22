import { spawn } from 'child_process';
import path from 'path';

const projectPath = '/vercel/share/v0-project';
const pnpmPath = 'pnpm';

console.log('[v0] Starting Vite dev server...');

const dev = spawn(pnpmPath, ['dev'], {
  cwd: projectPath,
  stdio: 'inherit',
  shell: true
});

dev.on('error', (err) => {
  console.error('[v0] Error starting dev server:', err);
  process.exit(1);
});

dev.on('exit', (code) => {
  console.log('[v0] Dev server exited with code:', code);
});

process.on('SIGINT', () => {
  dev.kill();
  process.exit(0);
});
