#!/usr/bin/env python3
import subprocess
import os
import sys

os.chdir('/vercel/share/v0-project')
print("[v0] Starting Vite development server...")

try:
    result = subprocess.run(['pnpm', 'dev'], check=False)
    sys.exit(result.returncode)
except Exception as e:
    print(f"[v0] Error: {e}")
    sys.exit(1)
