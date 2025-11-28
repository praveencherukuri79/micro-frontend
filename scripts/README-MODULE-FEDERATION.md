# Module Federation Scripts Guide

Detailed documentation for all Module Federation PowerShell scripts.

---

## ⚠️ CRITICAL: Vite Module Federation Limitation

**`@originjs/vite-plugin-federation` does NOT work in dev mode!**

- ❌ `npm run dev` → `remoteEntry.js` **NOT** generated → Module Federation **FAILS**
- ✅ `npm run build` + `npm run preview` → `remoteEntry.js` exists → Works!

**For Development:** Use `.\scripts\mf-start-watch.ps1` (auto-rebuild on file change)

---

## Overview

Module Federation allows remotes to be loaded dynamically at runtime. The host application imports remote modules from running remote servers.

**Key Concept:** Remotes must be **BUILT** and run in **preview mode** for Module Federation to work.

---

## Scripts Reference

### Installation

#### `utils-install-all.ps1`

Installs npm dependencies for host, host-webcomponent, and all remotes in parallel.

```powershell
.\scripts\utils-install-all.ps1
```

**When to use:** First time setup, or after adding new dependencies to any package.json

**What it does:**

- Creates parallel PowerShell jobs for each application
- Runs `npm install` in each directory simultaneously
- Shows progress and results for all installations
- Fails if any installation fails

**Duration:** ~2-3 minutes (parallel execution saves ~70% time)

**Output:**

```
Installing dependencies for all applications...

Starting install: host
Starting install: host-webcomponent
Starting install: angular-vite
Starting install: angular-webpack
Starting install: contact
Starting install: products
Starting install: shell
Starting install: vue

Waiting for all installations to complete...

[OK] host
[OK] host-webcomponent
[OK] angular-vite
[OK] angular-webpack
[OK] contact
[OK] products
[OK] shell
[OK] vue

Installation completed in 145.2s
```

---

### Build

#### `mf-build-all.ps1`

Builds all remotes for Module Federation in parallel (production builds).

```powershell
.\scripts\mf-build-all.ps1
```

**When to use:** Before running preview/quick mode, or to create production builds

**What it does:**

- Discovers all remotes using `utils-get-remotes.ps1`
- Runs `npm run build` for each remote in parallel
- Creates `dist/` folder with production-optimized code
- Shows build results for all remotes

**Duration:** ~1.5-2 minutes (parallel execution)

**Output:**

```
Building all remotes for Module Federation...

Found 6 remotes:
  - angular-vite (angular-vite) on port 5006
  - angular-webpack (angular-webpack) on port 5004
  - contact (react-vite) on port 5002
  - products (react-vite) on port 5001
  - shell (react-vite) on port 5003
  - vue (vue-vite) on port 5005

Starting build: angular-vite...
Starting build: angular-webpack...
Starting build: contact...
Starting build: products...
Starting build: shell...
Starting build: vue...

Waiting for all builds to complete...

[OK] angular-vite
[OK] angular-webpack
[OK] contact
[OK] products
[OK] shell
[OK] vue

Build completed: 6 remotes in 81.5s
```

---

### Start Scripts

#### ⚠️ Why There's No `mf-start-dev.ps1` (True Dev Mode)

**CRITICAL LIMITATION:** `@originjs/vite-plugin-federation` does **NOT** generate `remoteEntry.js` in Vite dev mode!

**What Actually Happens:**

```powershell
# If you run: npm run dev (vite --port 5003)
# Then try: http://localhost:5003/assets/remoteEntry.js
# Result: Returns HTML (404 fallback), NOT JavaScript
# Module Federation: FAILS - host cannot load remote
```

**The Reality:**

- Vite Module Federation **REQUIRES** remotes to be **BUILT** first
- `remoteEntry.js` is only generated during `npm run build`
- Remotes MUST run in **preview mode** (serving `dist/` folder)
- There is **NO** true hot-reload dev mode for Vite Module Federation

**For Development:** Use `mf-start-watch.ps1` instead (auto-rebuild on file changes)

---

#### `mf-start-preview.ps1` - Production Preview

Builds all remotes, then starts them in preview mode serving production builds.

```powershell
.\scripts\mf-start-preview.ps1
```

**When to use:** Testing production builds locally, or first-time setup

**What it does:**

1. Kills all existing Node processes
2. **Builds all remotes** using `mf-build-all.ps1` (~1.5 min)
3. Starts each remote with `npm run preview` (serves `dist/` folder)
4. Starts host with `npm run dev`

**How it works:**

- **Remotes:** Serve static files from `dist/` folder
- **Host:** Runs in dev mode, imports built remotes
- **No auto-reload:** Must rebuild manually to see changes

**Duration:** 🚀 ~3-4 minutes (build + start)

**Advantages:**

- ✅ Tests production builds
- ✅ Production-like behavior
- ✅ Verifies build output

**Disadvantages:**

- ❌ Slower startup (builds first)
- ❌ No auto-reload on code changes

---

#### `mf-start-watch.ps1` - Watch Mode (Auto-Rebuild)

Builds remotes initially, then watches for changes and auto-rebuilds.

```powershell
.\scripts\mf-start-watch.ps1
```

**When to use:** Development when you want production builds that auto-update

**What it does:**

1. Kills all existing Node processes
2. **Initial build** of all remotes using `mf-build-all.ps1`
3. Starts each remote with `npm run dev:watch` (build --watch + preview)
4. Starts host with `npm run dev`

**How it works:**

- **Remotes:** Run `vite build --watch` + `vite preview` concurrently
- **On file change:** Vite rebuilds automatically
- **After rebuild:** Refresh browser to see changes
- **Best of both worlds:** Production builds + auto-rebuild

**Duration:** 🚀 ~3-4 minutes initial, then auto-rebuild on change

**Advantages:**

- ✅ Production-like builds
- ✅ Auto-rebuilds on file changes
- ✅ Good for testing Module Federation behavior

**Disadvantages:**

- ❌ Slower than dev mode (rebuilds take ~5-10 seconds)
- ❌ Must refresh browser manually after rebuild

---

#### `mf-start-quick.ps1` - Quick Start (No Build)

Instantly starts all applications using existing builds.

```powershell
.\scripts\mf-start-quick.ps1
```

**Prerequisites:**

- Dependencies installed (`utils-install-all.ps1`)
- Remotes already built (`mf-build-all.ps1`)

**When to use:** Restarting servers when remotes are already built

**What it does:**

1. Kills all existing Node processes
2. **Validates** that all remotes have `dist/` folders (fails if missing)
3. Starts each remote with `npm run preview` (serves existing builds)
4. Starts host with `npm run dev`

**Duration:** ⚡ ~5 seconds (fastest!)

**Advantages:**

- ✅ Instant startup
- ✅ Perfect for quick restarts

**Disadvantages:**

- ❌ Fails if remotes not built
- ❌ Serves old builds (must rebuild to see changes)

---

## Utility Scripts

### `utils-get-remotes.ps1`

Auto-discovers all remotes by reading `package.json` metadata.

```powershell
$remotes = & ".\scripts\utils-get-remotes.ps1"
$remotes | Format-Table Name, Type, Port
```

**What it does:**

- Scans `remotes/` directory
- Reads `microfrontend` metadata from each `package.json`
- Returns array of remote objects with name, type, port, etc.
- Falls back to auto-detection if metadata missing

**Used by:** All other scripts to discover remotes dynamically

**Benefits:**

- No hardcoded remote names
- Add new remote → scripts automatically find it
- Single source of truth (package.json)

---

### `utils-kill-ports.ps1`

Kills all Node.js processes to free up ports.

```powershell
& ".\scripts\utils-kill-ports.ps1"
```

**What it does:**

- Finds all running Node processes
- Stops them forcefully
- Waits 2 seconds for ports to be released

**Used by:** All start scripts before launching servers

**Why needed:** Prevents "port already in use" errors

---

## Workflow Examples

### First Time Setup

```powershell
# 1. Install dependencies
.\scripts\utils-install-all.ps1

# 2. Build all remotes
.\scripts\mf-build-all.ps1

# 3. Start everything
.\scripts\mf-start-quick.ps1
```

**Duration:** ~5-7 minutes total

---

### Daily Development (Hot-Reload)

```powershell
# Start in dev mode - fastest feedback
.\scripts\mf-start-dev.ps1
```

**Workflow:**

1. Edit code in remotes or host
2. Save file
3. Changes appear instantly (no refresh needed)

**Best for:** UI development, rapid iteration

---

### Daily Development (Production-Like)

```powershell
# Start in watch mode - auto-rebuild
.\scripts\mf-start-watch.ps1
```

**Workflow:**

1. Edit code in remotes
2. Save file
3. Wait ~5-10 seconds for rebuild
4. Refresh browser to see changes

**Best for:** Testing Module Federation behavior

---

### Testing Production Builds

```powershell
# Build and preview
.\scripts\mf-start-preview.ps1
```

**Workflow:**

1. Make code changes
2. Stop servers (Ctrl+C in all PowerShell windows)
3. Re-run `mf-start-preview.ps1` to rebuild and restart

**Best for:** Testing before deployment, verifying build output

---

## Port Configuration

| Application     | Port | URL                   |
| --------------- | ---- | --------------------- |
| Host            | 5000 | http://localhost:5000 |
| Products Remote | 5001 | http://localhost:5001 |
| Contact Remote  | 5002 | http://localhost:5002 |
| Shell Remote    | 5003 | http://localhost:5003 |
| Angular Webpack | 5004 | http://localhost:5004 |
| Vue Remote      | 5005 | http://localhost:5005 |
| Angular Vite    | 5006 | http://localhost:5006 |

**Configured in:** Each remote's `package.json` → `microfrontend.port`

---

## Remote Entry Points

**Vite remotes** (React, Vue, Angular-Vite):

```
http://localhost:XXXX/assets/remoteEntry.js
```

**Webpack remotes** (Angular-Webpack):

```
http://localhost:5004/remoteEntry.js
```

**Note:** Webpack serves at root, Vite serves in `/assets/`

---

## Troubleshooting

### Error: "Script 'dev' not found"

**Cause:** Remote missing `dev` script in package.json  
**Fix:** Add `"dev": "vite --port XXXX"` or `"dev": "ng serve"`

### Error: "Port already in use"

**Cause:** Node process already running on that port  
**Fix:** Run `utils-kill-ports.ps1` or manually kill Node processes

### Error: "Failed to fetch remoteEntry.js"

**Cause:** Remote not running or not built  
**Fix:** Ensure remote is running (check PowerShell window)

### Error: "Dependencies not installed"

**Cause:** `node_modules` missing  
**Fix:** Run `utils-install-all.ps1`

### Error: "Remotes not built"

**Cause:** `dist/` folder missing (for preview/quick modes)  
**Fix:** Run `mf-build-all.ps1`

---

## Technical Details

### How Module Federation Works in Dev Mode

**Vite Remotes:**

1. `vite --port XXXX` starts dev server
2. `@originjs/vite-plugin-federation` plugin active
3. Plugin generates `remoteEntry.js` **in-memory** (no disk file)
4. Host requests `http://localhost:XXXX/assets/remoteEntry.js`
5. Vite serves it from memory
6. Module Federation loads remote code

**Angular Webpack:**

1. `ng serve` starts Angular dev server (Webpack)
2. `@angular-architects/module-federation` plugin active
3. Plugin generates `remoteEntry.js` **in-memory**
4. Host requests `http://localhost:5004/remoteEntry.js`
5. Webpack serves it from memory
6. Module Federation loads remote code

**Key point:** No `dist/` folder needed in dev mode!

---

### How Module Federation Works in Preview Mode

1. `npm run build` creates `dist/` folder with:
   - Application code (minified, optimized)
   - `remoteEntry.js` (Module Federation entry point)
   - Shared dependencies
2. `npm run preview` starts static file server
3. Serves files from `dist/` folder
4. Host imports `remoteEntry.js` from running preview server

---

## Script Comparison

| Feature           | preview         | watch                   | quick              |
| ----------------- | --------------- | ----------------------- | ------------------ |
| Build first       | ✅              | ✅                      | ❌ (uses existing) |
| Auto-rebuild      | ❌              | ✅ (on file change)     | ❌                 |
| Production builds | ✅              | ✅                      | ✅                 |
| Startup time      | 🚀 3-4min       | 🚀 3-4min initial       | ⚡ 5s              |
| Use case          | Test prod       | **Active development**  | Quick restart      |
| **RECOMMENDED**   | First time only | **✅ USE THIS FOR DEV** | After builds exist |
