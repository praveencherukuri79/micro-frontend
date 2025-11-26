# 🚀 Quick Start Guide

Get the Module Federation app running in 5 minutes.

## Prerequisites

- Node.js 18+ installed
- Git (for cloning the repository)

## Option 1: Quick Start (Fastest) ⚡

If remotes are already built:

```powershell
.\start.ps1
```

Opens 4 windows, starts all servers instantly.

## Option 2: With Auto-Rebuild (Recommended) 🔥

For active development:

```powershell
.\start-watch.ps1
```

**Features:**
- ✅ Builds all remotes initially
- ✅ Auto-rebuilds on file changes
- ✅ Opens 4 PowerShell windows
- ✅ Edit → Auto rebuild → Refresh browser

## Option 3: Build + Start

For first-time setup or testing:

```powershell
.\start-preview.ps1
```

**Difference:** No auto-rebuild. Manual rebuild needed after changes.

## 📋 Script Comparison

| Script | Speed | Auto-rebuild? | Use When |
|--------|-------|---------------|----------|
| `start.ps1` | ⚡ Instant | ❌ | Restarting servers |
| `start-watch.ps1` | 🐢 2-3 min | ✅ | Active development |
| `start-preview.ps1` | 🐢 2-3 min | ❌ | First setup |

---

## Manual Setup

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

**With Watch Mode (Recommended):**

Open **4 separate terminals**:

```bash
# Terminal 1
cd remotes/shell
npm run dev:watch

# Terminal 2
cd remotes/products
npm run dev:watch

# Terminal 3
cd remotes/contact
npm run dev:watch

# Terminal 4
cd host
npm run dev
```

**Without Watch Mode:**

```bash
# Terminal 1
cd remotes/shell
npm run preview

# Terminal 2
cd remotes/products
npm run preview

# Terminal 3
cd remotes/contact
npm run preview

# Terminal 4
cd host
npm run dev
```

### Step 4: Open Browser

Navigate to: **http://localhost:5000**

---

## 📋 Verify Setup

All servers should be running:

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

## ⚠️ Important Notes

### Remotes Must Run in Preview Mode

**Why?**

- Vite's dev server doesn't generate `remoteEntry.js` in dev mode
- Module Federation requires this file
- Preview mode serves the built `dist` folder

**What this means:**

- Remotes: `npm run preview` ✅ (serves built files)
- Host: `npm run dev` ✅ (can use dev mode)

### Making Changes

**With Watch Mode:**

- **Host files:** Edit → Auto reload ✅
- **Remote files:** Edit → Auto rebuild → Refresh browser 🔄

**Without Watch Mode:**

- **Host files:** Edit → Auto reload ✅
- **Remote files:** Edit → Run `npm run build` → Refresh browser 🔧

---

## 🐛 Troubleshooting

### Error: "Failed to fetch remoteEntry.js"

**Cause:** Remote not running or in wrong mode

**Fix:**

```bash
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
- Hero section with call-to-action
- Feature cards
- Navigation menu
- Theme toggle (light/dark)

### Products Page (Remote Module)
- Product grid with images
- Search functionality
- Category filters
- Add to cart buttons
- Product ratings

### Contact Page (Remote Module)
- Contact form with validation
- Company contact info
- Map placeholder
- Success notifications

### Header & Footer (Remote Module)
- Navigation links
- Theme switcher
- Shopping cart count
- Responsive design

---

## 🚀 Next Steps

1. ✅ Get it running (you're here!)
2. 🔍 Explore the code:
   - `host/src/App.tsx` - See how remotes are imported
   - `remotes/products/src/ProductsPage.tsx` - Remote component
   - `host/vite.config.ts` - Federation configuration
3. 🎨 Make changes:
   - Edit theme colors in `host/src/theme/theme.ts`
   - Add products in `ProductsPage.tsx`
4. 📖 Read [README.md](README.md) for full documentation
5. 🎨 Try [Web Components](WEB_COMPONENTS.md)

---

## 🆘 Still Having Issues?

**Checklist:**

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
.\start-watch.ps1
```

---

**Happy Coding! 🚀**

Need more details? See [README.md](README.md) or [ARCHITECTURE.md](ARCHITECTURE.md)
