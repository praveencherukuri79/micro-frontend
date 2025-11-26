# 🚀 Quick Start Guide

Get the Module Federation app running in 5 minutes.

## Prerequisites

- Node.js 18+ installed
- Windows (PowerShell scripts) or Mac/Linux (adapt commands)

## Option 1: Quick Start (Fastest)

```powershell
# Just start servers (assumes already built)
.\start.ps1
```

**Requirements:** Remotes must be already built
**Use when:** Just restarting servers, everything already built

---

## Option 2: With Watch Mode (Recommended for Development)

```powershell
# AUTO-REBUILDS on file changes!
.\start-watch.ps1
```

This will:

1. ✅ Build all 3 remotes
2. ✅ Start remotes in **watch mode** (auto-rebuild on changes)
3. ✅ Start preview servers (ports 5001, 5002, 5003)
4. ✅ Start host in dev mode (port 5000)
5. ✅ Open 4 PowerShell windows (one per app)

**Benefits:** Edit remote files → Auto rebuilds → Just refresh browser!

---

## Option 3: Build + Start (No Watch)

```powershell
# One-time build (requires manual rebuild after changes)
.\start-preview.ps1
```

**Use when:** First time setup or don't need auto-rebuild

### 📋 Script Comparison

| Script              | Speed      | Builds? | Watch Mode? | Use When               |
| ------------------- | ---------- | ------- | ----------- | ---------------------- |
| `start.ps1`         | ⚡ Instant | ❌      | ❌          | Restarting servers     |
| `start-watch.ps1`   | 🐢 2-3 min | ✅      | ✅          | Active development     |
| `start-preview.ps1` | 🐢 2-3 min | ✅      | ❌          | First setup or testing |

---

## Option 4: Manual Setup

### Step 1: Install Dependencies

```bash
# Install in each folder
cd host
npm install

cd ../remotes/shell
npm install

cd ../products
npm install

cd ../contact
npm install
```

### Step 2: Build Remotes

```bash
# Build each remote
cd remotes/shell
npm run build

cd ../products
npm run build

cd ../contact
npm run build
```

### Step 3: Start Servers

#### Option A: With Watch Mode (Recommended)

Open **4 separate terminals** and run:

**Terminal 1 - Shell Remote (watch + preview combined):**

```bash
cd remotes/shell
npm run dev:watch
# Runs build:watch + preview in one command
```

**Terminal 2 - Products Remote (watch + preview combined):**

```bash
cd remotes/products
npm run dev:watch
# Runs build:watch + preview in one command
```

**Terminal 3 - Contact Remote (watch + preview combined):**

```bash
cd remotes/contact
npm run dev:watch
# Runs build:watch + preview in one command
```

**Terminal 4 - Host:**

```bash
cd host
npm run dev
```

#### Option B: Without Watch Mode

Open **4 separate terminals** and run:

**Terminal 1 - Shell Remote:**

```bash
cd remotes/shell
npm run preview
```

**Terminal 2 - Products Remote:**

```bash
cd remotes/products
npm run preview
```

**Terminal 3 - Contact Remote:**

```bash
cd remotes/contact
npm run preview
```

**Terminal 4 - Host:**

```bash
cd host
npm run dev
```

### Step 4: Open Browser

Navigate to: **http://localhost:5000**

---

## 📋 Important Notes

### ⚠️ Remotes Must Run in Preview Mode

**Why?**

- Vite's dev server doesn't generate `remoteEntry.js` in dev mode
- Module Federation requires this file
- Preview mode serves the built `dist` folder which includes it

**What this means:**

- Remotes: `npm run preview` ✅ (serves built files)
- Host: `npm run dev` ✅ (can use dev mode)

### 🔄 Making Changes

**With Watch Mode (start-watch.ps1):**

- **Host files:** Edit → Auto reload ✅
- **Remote files:** Edit → Auto rebuild → Refresh browser 🔄

**Without Watch Mode (start-preview.ps1):**

- **Host files:** Edit → Auto reload ✅
- **Remote files:** Edit → Run `npm run build` → Refresh browser 🔧

---

## 🎯 Verify Setup

All servers should be running on these ports:

| Application     | Port | URL                   | Mode    |
| --------------- | ---- | --------------------- | ------- |
| Host            | 5000 | http://localhost:5000 | Dev     |
| Shell Remote    | 5003 | http://localhost:5003 | Preview |
| Products Remote | 5001 | http://localhost:5001 | Preview |
| Contact Remote  | 5002 | http://localhost:5002 | Preview |

Check PowerShell output for:

```
VITE v5.x.x ready at http://localhost:XXXX
```

---

## 🐛 Troubleshooting

### Error: "Failed to fetch remoteEntry.js"

**Cause:** Remote not running or in wrong mode

**Fix:**

```bash
# Stop the remote
# Then rebuild and preview:
cd remotes/shell
npm run build
npm run preview
```

### Error: Port Already in Use

**Find and kill process:**

```powershell
# Find process on port 5000
netstat -ano | findstr :5000

# Kill it (replace PID with actual process ID)
Stop-Process -Id PID -Force
```

### Error: Module Not Found

**Fix:** Check TypeScript declarations in `host/src/remotes.d.ts`

### Changes Not Showing

**Remote changes:** Rebuild the remote

```bash
cd remotes/products
npm run build
# Refresh browser
```

**Host changes:** Should auto-reload. If not, restart dev server.

---

## 🎨 What You'll See

### Home Page

- Hero section
- Feature cards
- Navigation menu
- Theme toggle (light/dark)

### Products Page (Remote Module)

- Product grid
- Search & filters
- Add to cart
- Cart counter updates

### Contact Page (Remote Module)

- Contact form
- Company info
- Form validation

### Header & Footer (Remote Module)

- Navigation links
- Theme switcher
- Shopping cart count
- Responsive design

---

## 🔧 Stopping Servers

**Automated script:** Close the PowerShell windows or press Ctrl+C in each

**Manual:** Press Ctrl+C in each terminal

---

## 📚 Next Steps

1. ✅ **Get it running** (you're here!)
2. 🔍 **Explore the code:**
   - `host/src/App.tsx` - See how remotes are imported
   - `remotes/products/src/ProductsPage.tsx` - Remote component
   - `host/vite.config.ts` - Federation configuration
3. 🎨 **Make changes:**
   - Edit theme colors in `host/src/theme/theme.ts`
   - Add products in `ProductsPage.tsx`
4. 📖 **Read [README.md](README.md)** for full documentation

---

## 🆘 Still Having Issues?

Check that:

- [ ] All 4 servers are running
- [ ] Remotes are in **preview** mode (not dev)
- [ ] No port conflicts
- [ ] Dependencies installed in all folders
- [ ] Remotes are built (`npm run build`)

**Quick reset:**

```powershell
# Kill all node processes
taskkill /F /IM node.exe

# Restart with the script
.\start-preview.ps1
```

---

**Happy Coding! 🚀**

Need more details? See [README.md](README.md)
