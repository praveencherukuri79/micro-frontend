# Angular Hosts Setup - 50-Step Process

Complete step-by-step guide to set up Angular hosts (MF and WC) matching React host functionality.

## Prerequisites

- Node.js v18+ installed
- npm v9+ installed
- PowerShell 5.1+ (Windows)
- Git repository cloned

---

## Phase 1: Initial Setup (Steps 1-5)

### Step 1: Verify Project Structure
- [ ] Confirm `host-angular-mf/` exists
- [ ] Confirm `host-angular-wc/` exists
- [ ] Confirm `remotes/` directory exists with all 6 remotes
- [ ] Confirm `scripts/` directory structure (MF/, WC/, utils/)

### Step 2: Install Dependencies
```powershell
.\scripts\utils\install-all.ps1
```
- [ ] Verify all applications have `node_modules/`
- [ ] Check for installation errors

### Step 3: Verify Remotes Discovery
```powershell
.\scripts\utils\get-remotes.ps1
```
- [ ] Should show 6 remotes: products, contact, shell, angular-webpack, angular-vite, vue
- [ ] Verify ports: 5001, 5002, 5003, 5004, 5005, 5006

### Step 4: Clean Ports
```powershell
.\scripts\utils\kill-ports.ps1 -Context All
```
- [ ] Verify no Node.js processes on ports 5000-5011

### Step 5: Verify React Host Works (Baseline)
```powershell
.\scripts\MF\start-react-preview.ps1
```
- [ ] React host loads at http://localhost:5000
- [ ] All remotes load correctly
- [ ] Navigation works
- [ ] Theme toggle works
- [ ] **STOP and verify React host before proceeding**

---

## Phase 2: Theme Service Setup (Steps 6-7)

### Step 6: Create ThemeService for Angular MF Host
**File**: `host-angular-mf/src/app/services/theme.service.ts`
- [ ] Create service with `BehaviorSubject<ThemeMode>`
- [ ] Implement `toggleTheme()`, `setTheme()`, `initTheme()`
- [ ] Add localStorage persistence
- [ ] Export `ThemeMode` type: `'light' | 'dark'`

### Step 7: Create ThemeService for Angular WC Host
**File**: `host-angular-wc/src/app/services/theme.service.ts`
- [ ] Same implementation as MF host
- [ ] Ensure consistency between both hosts

---

## Phase 3: App Component Setup (Steps 8-11)

### Step 8: Fix Angular MF AppComponent - Separate Files
**Files to create**:
- `host-angular-mf/src/app/app.component.html`
- `host-angular-mf/src/app/app.component.css`
- `host-angular-mf/src/app/app.component.ts` (update)

**Requirements**:
- [ ] Remove inline template/styles
- [ ] Use `templateUrl` and `styleUrls`
- [ ] Add Shell Header/Footer web components
- [ ] Integrate ThemeService
- [ ] Match React host layout structure
- [ ] Add loading states for Shell widget

### Step 9: Fix Angular WC AppComponent - Separate Files
**Files to create**:
- `host-angular-wc/src/app/app.component.html`
- `host-angular-wc/src/app/app.component.css`
- `host-angular-wc/src/app/app.component.ts` (update)

**Requirements**:
- [ ] Remove inline template/styles
- [ ] Use `templateUrl` and `styleUrls`
- [ ] Add Shell Header/Footer web components
- [ ] Integrate ThemeService
- [ ] Match React host layout structure

### Step 10: Update Angular MF AppModule
**File**: `host-angular-mf/src/app/app.module.ts`
- [ ] Add `CUSTOM_ELEMENTS_SCHEMA` for web components
- [ ] Add `CommonModule` for `*ngIf`, `*ngFor`
- [ ] Add `RouterModule.forRoot(routes)`
- [ ] Add all page components to declarations
- [ ] Add ThemeService to providers

### Step 11: Update Angular WC AppModule
**File**: `host-angular-wc/src/app/app.module.ts`
- [ ] Add `CUSTOM_ELEMENTS_SCHEMA` for web components
- [ ] Add `CommonModule` for `*ngIf`, `*ngFor`
- [ ] Add `RouterModule.forRoot(routes)`
- [ ] Add all page components to declarations
- [ ] Add ThemeService to providers

---

## Phase 4: Home Page Component (Steps 12-13)

### Step 12: Create HomePage for Angular MF
**Files to create**:
- `host-angular-mf/src/app/pages/home.component.html`
- `host-angular-mf/src/app/pages/home.component.css`
- `host-angular-mf/src/app/pages/home.component.ts` (update)

**Requirements**:
- [ ] Match React host HomePage design exactly
- [ ] Hero section with title and buttons
- [ ] Features section with 3 cards
- [ ] CTA section with gradient background
- [ ] Use Router for navigation
- [ ] Responsive design

### Step 13: Create HomePage for Angular WC
**Files to create**:
- `host-angular-wc/src/app/pages/home.component.html`
- `host-angular-wc/src/app/pages/home.component.css`
- `host-angular-wc/src/app/pages/home.component.ts` (update)

**Requirements**:
- [ ] Same as MF host HomePage
- [ ] Ensure consistency

---

## Phase 5: Module Federation Pages (Steps 14-19)

### Step 14: Create ProductsPage for Angular MF
**Files to create**:
- `host-angular-mf/src/app/pages/products-page.component.html`
- `host-angular-mf/src/app/pages/products-page.component.css`
- `host-angular-mf/src/app/pages/products-page.component.ts`

**Requirements**:
- [ ] Use `loadRemoteModule()` to load Products remote
- [ ] **Note**: Products remote exposes `./ProductsPage` (React component), not mount function
- [ ] For Angular MF, we need to use web component version OR create mount wrapper
- [ ] For now, show error message explaining limitation
- [ ] Add loading state
- [ ] Add error fallback UI

### Step 15: Create ContactPage for Angular MF
**Files to create**:
- `host-angular-mf/src/app/pages/contact-page.component.html`
- `host-angular-mf/src/app/pages/contact-page.component.css`
- `host-angular-mf/src/app/pages/contact-page.component.ts`

**Requirements**:
- [ ] Same as ProductsPage
- [ ] Contact remote exposes `./ContactPage` (React component)
- [ ] Show appropriate message or use web component

### Step 16: Create AngularWebpackPage for Angular MF
**Files to create**:
- `host-angular-mf/src/app/pages/angular-webpack-page.component.html`
- `host-angular-mf/src/app/pages/angular-webpack-page.component.css`
- `host-angular-mf/src/app/pages/angular-webpack-page.component.ts`

**Requirements**:
- [ ] Use `loadRemoteModule()` with `remoteEntry: 'http://localhost:5004/assets/remoteEntry.js'`
- [ ] Exposed module: `'./App'` (mount function)
- [ ] Use `AfterViewInit` and `ViewChild` with `static: false`
- [ ] Handle async mount function: `Promise<() => void>`
- [ ] Add loading state
- [ ] Add error fallback UI
- [ ] Cleanup in `ngOnDestroy`

### Step 17: Create AngularVitePage for Angular MF
**Files to create**:
- `host-angular-mf/src/app/pages/angular-vite-page.component.html`
- `host-angular-mf/src/app/pages/angular-vite-page.component.css`
- `host-angular-mf/src/app/pages/angular-vite-page.component.ts`

**Requirements**:
- [ ] Use `loadRemoteModule()` with `remoteEntry: 'http://localhost:5005/assets/remoteEntry.js'`
- [ ] Exposed module: `'./App'` (mount function)
- [ ] Same pattern as AngularWebpackPage
- [ ] Handle theme updates from ThemeService

### Step 18: Create VuePage for Angular MF
**Files to create**:
- `host-angular-mf/src/app/pages/vue-page.component.html`
- `host-angular-mf/src/app/pages/vue-page.component.css`
- `host-angular-mf/src/app/pages/vue-page.component.ts`

**Requirements**:
- [ ] Use `loadRemoteModule()` with `remoteEntry: 'http://localhost:5006/assets/remoteEntry.js'`
- [ ] Exposed module: `'./App'` (mount function)
- [ ] **Note**: Vue mount function is synchronous (returns `() => void`, not `Promise`)
- [ ] Handle both sync and async mount functions
- [ ] Add loading state
- [ ] Add error fallback UI

### Step 19: Add Routes to Angular MF AppModule
**File**: `host-angular-mf/src/app/app.module.ts`
- [ ] Add route: `{ path: '', component: HomeComponent }`
- [ ] Add route: `{ path: 'products', component: ProductsPageComponent }`
- [ ] Add route: `{ path: 'contact', component: ContactPageComponent }`
- [ ] Add route: `{ path: 'angular-webpack', component: AngularWebpackPageComponent }`
- [ ] Add route: `{ path: 'angular-vite', component: AngularVitePageComponent }`
- [ ] Add route: `{ path: 'vue', component: VuePageComponent }`

---

## Phase 6: Web Component Pages (Steps 20-23)

### Step 20: Fix ProductsPage for Angular WC
**Files to update**:
- `host-angular-wc/src/app/pages/products-page.component.html` (create)
- `host-angular-wc/src/app/pages/products-page.component.css` (create)
- `host-angular-wc/src/app/pages/products-page.component.ts` (update)

**Requirements**:
- [ ] Remove inline template/styles
- [ ] Load `/widgets/products-widget.js` with `type="module"`
- [ ] Wait for `customElements.whenDefined('products-widget')`
- [ ] Subscribe to ThemeService for theme updates
- [ ] Update widget theme attribute on theme change
- [ ] Add loading state
- [ ] Add error handling

### Step 21: Fix ContactPage for Angular WC
**Files to update**:
- `host-angular-wc/src/app/pages/contact-page.component.html` (create)
- `host-angular-wc/src/app/pages/contact-page.component.css` (create)
- `host-angular-wc/src/app/pages/contact-page.component.ts` (update)

**Requirements**:
- [ ] Same pattern as ProductsPage
- [ ] Load `/widgets/contact-widget.js`
- [ ] Wait for `customElements.whenDefined('contact-widget')`

### Step 22: Create Additional WC Pages (Optional)
**Files to create** (if needed):
- `host-angular-wc/src/app/pages/angular-webpack-page.component.*`
- `host-angular-wc/src/app/pages/angular-vite-page.component.*`
- `host-angular-wc/src/app/pages/vue-page.component.*`

**Requirements**:
- [ ] Load respective web components
- [ ] Follow same pattern as Products/Contact

### Step 23: Add Routes to Angular WC AppModule
**File**: `host-angular-wc/src/app/app.module.ts`
- [ ] Add all routes for pages
- [ ] Ensure RouterModule is imported

---

## Phase 7: Shell Integration (Steps 24-26)

### Step 24: Implement Shell Widget Loading in Angular MF AppComponent
**File**: `host-angular-mf/src/app/app.component.ts`
- [ ] Add `loadShellWidget()` method
- [ ] Load `/widgets/shell-widget.js` with `type="module"`
- [ ] Wait for `customElements.whenDefined('shell-widget')`
- [ ] Set `shellLoaded = true` when ready
- [ ] Handle theme toggle events from Shell
- [ ] Handle navigation events from Shell

### Step 25: Implement Shell Widget Loading in Angular WC AppComponent
**File**: `host-angular-wc/src/app/app.component.ts`
- [ ] Same implementation as MF host
- [ ] Ensure consistency

### Step 26: Update Angular.json for Widget Assets
**Files**: 
- `host-angular-mf/angular.json`
- `host-angular-wc/angular.json`

**Requirements**:
- [ ] Add assets configuration:
  ```json
  {
    "glob": "**/*",
    "input": "public/widgets",
    "output": "/widgets"
  }
  ```

---

## Phase 8: Error Handling Components (Steps 27-28)

### Step 27: Create ErrorBoundary Component for Angular MF
**Files to create**:
- `host-angular-mf/src/app/components/error-boundary.component.html`
- `host-angular-mf/src/app/components/error-boundary.component.css`
- `host-angular-mf/src/app/components/error-boundary.component.ts`

**Requirements**:
- [ ] Implement Angular error handler
- [ ] Match React ErrorBoundary UI
- [ ] Show error message in dev mode
- [ ] Provide "Try Again" and "Go to Home" buttons

### Step 28: Create RemoteErrorFallback Component
**Files to create**:
- `host-angular-mf/src/app/components/remote-error-fallback.component.html`
- `host-angular-mf/src/app/components/remote-error-fallback.component.css`
- `host-angular-mf/src/app/components/remote-error-fallback.component.ts`

**Requirements**:
- [ ] Match React RemoteErrorFallback UI
- [ ] Accept inputs: `remoteName`, `port`, `error`
- [ ] Show user-friendly error message
- [ ] Show port information
- [ ] Show error details in dev mode

---

## Phase 9: Styling and Theming (Steps 29-31)

### Step 29: Create Global Styles for Angular MF
**File**: `host-angular-mf/src/styles.css`
- [ ] Add CSS variables for theme colors
- [ ] Add dark theme styles
- [ ] Add light theme styles
- [ ] Match React host styling approach
- [ ] Add responsive breakpoints

### Step 30: Create Global Styles for Angular WC
**File**: `host-angular-wc/src/styles.css`
- [ ] Same as MF host
- [ ] Ensure consistency

### Step 31: Add Component-Specific Styles
**Requirements**:
- [ ] All components have separate `.css` files
- [ ] No inline styles in TypeScript
- [ ] Use CSS variables for theming
- [ ] Responsive design

---

## Phase 10: TypeScript Compilation (Steps 32-34)

### Step 32: Verify Angular MF TypeScript Compilation
```powershell
cd host-angular-mf
npx tsc --noEmit --project tsconfig.app.json
```
- [ ] No TypeScript errors
- [ ] All imports resolve correctly
- [ ] All components compile

### Step 33: Verify Angular WC TypeScript Compilation
```powershell
cd host-angular-wc
npx tsc --noEmit --project tsconfig.app.json
```
- [ ] No TypeScript errors
- [ ] All imports resolve correctly
- [ ] All components compile

### Step 34: Run Linter on All Modified Files
```powershell
# Check all Angular host files
Get-ChildItem -Path "host-angular-*" -Filter "*.ts" -Recurse | ForEach-Object {
  Write-Host "Checking: $($_.FullName)"
  # Run linter
}
```
- [ ] No linting errors
- [ ] Fix any warnings
- [ ] Verify code style consistency

---

## Phase 11: Build Verification (Steps 35-37)

### Step 35: Build Angular MF Host
```powershell
cd host-angular-mf
npm run build
```
- [ ] Build succeeds without errors
- [ ] Check `dist/host-angular-mf/` output
- [ ] Verify assets are copied correctly
- [ ] Verify widgets are in `dist/host-angular-mf/widgets/`

### Step 36: Build Angular WC Host
```powershell
cd host-angular-wc
npm run build
```
- [ ] Build succeeds without errors
- [ ] Check `dist/host-angular-wc/` output
- [ ] Verify assets are copied correctly
- [ ] Verify widgets are in `dist/host-angular-wc/widgets/`

### Step 37: Verify React Host Still Works
```powershell
.\scripts\MF\start-react-preview.ps1
```
- [ ] React host loads correctly
- [ ] All remotes load
- [ ] Navigation works
- [ ] **CRITICAL**: No regressions in React host

---

## Phase 12: Integration Testing (Steps 38-42)

### Step 38: Test Angular MF Host - Preview Mode
```powershell
.\scripts\MF\start-angular-preview.ps1
```
- [ ] Angular MF host loads at http://localhost:5007
- [ ] Shell Header/Footer appear
- [ ] Home page displays correctly
- [ ] Navigation works
- [ ] Theme toggle works

### Step 39: Test Angular MF Host - Remote Loading
- [ ] Angular Webpack page loads remote
- [ ] Angular Vite page loads remote
- [ ] Vue page loads remote
- [ ] Products/Contact pages show appropriate message or work
- [ ] Error states display correctly

### Step 40: Test Angular WC Host - Preview Mode
```powershell
.\scripts\WC\start-angular-preview.ps1
```
- [ ] Angular WC host loads at http://localhost:5011
- [ ] Shell Header/Footer appear
- [ ] Home page displays correctly
- [ ] Navigation works
- [ ] Theme toggle works

### Step 41: Test Angular WC Host - Widget Loading
- [ ] Products widget loads and displays
- [ ] Contact widget loads and displays
- [ ] Theme changes update widgets
- [ ] Widgets respond to theme changes

### Step 42: Cross-Host Verification
- [ ] React MF host still works (http://localhost:5000)
- [ ] React WC host still works (http://localhost:5010)
- [ ] Angular MF host works (http://localhost:5007)
- [ ] Angular WC host works (http://localhost:5011)
- [ ] All hosts can run simultaneously
- [ ] No port conflicts

---

## Phase 13: Documentation (Steps 43-45)

### Step 43: Update ANGULAR-HOSTS-SETUP.md
**File**: `ANGULAR-HOSTS-SETUP.md`
- [ ] Add section on separate HTML/CSS requirement
- [ ] Add section on matching React host structure
- [ ] Update code examples
- [ ] Add troubleshooting for common issues
- [ ] Add checklist for verification

### Step 44: Create Component Structure Reference
**File**: `ANGULAR-COMPONENT-STRUCTURE.md` (optional)
- [ ] Document component file structure
- [ ] Show examples of proper separation
- [ ] List common mistakes to avoid

### Step 45: Update Main README
**File**: `README.md`
- [ ] Add Angular hosts to project overview
- [ ] Update ports table
- [ ] Add links to Angular setup guide

---

## Phase 14: Final Verification (Steps 46-50)

### Step 46: Code Review Checklist
- [ ] All components have separate HTML/CSS files
- [ ] No inline templates or styles
- [ ] All imports are correct
- [ ] All routes are configured
- [ ] ThemeService is integrated
- [ ] Shell integration works
- [ ] Error handling is in place

### Step 47: Functionality Checklist
- [ ] Home page matches React host
- [ ] Navigation works
- [ ] Theme toggle works
- [ ] Remote loading works (MF host)
- [ ] Widget loading works (WC host)
- [ ] Error states display correctly
- [ ] Loading states display correctly

### Step 48: Performance Check
- [ ] No console errors
- [ ] No memory leaks (check cleanup functions)
- [ ] Fast initial load
- [ ] Smooth theme transitions
- [ ] No unnecessary re-renders

### Step 49: Browser Compatibility
- [ ] Test in Chrome
- [ ] Test in Firefox
- [ ] Test in Edge
- [ ] Verify web components work
- [ ] Verify Module Federation works

### Step 50: Final Sign-off
- [ ] All 49 previous steps completed
- [ ] React host verified working
- [ ] Angular MF host verified working
- [ ] Angular WC host verified working
- [ ] Documentation updated
- [ ] No regressions
- [ ] Ready for production

---

## Critical Reminders

1. **Never use inline templates/styles** - Always separate HTML/CSS files
2. **Match React host exactly** - Same layout, same functionality
3. **Don't break React host** - Verify after every major change
4. **Don't touch remotes** - Only modify Angular hosts
5. **Follow AI guidelines** - Check errors 2-3 times, no lazy work
6. **Test thoroughly** - Each step should be verified before moving on

---

## Troubleshooting

### Issue: TypeScript compilation errors
- Check all imports are correct
- Verify file paths in `templateUrl` and `styleUrls`
- Ensure all components are declared in `app.module.ts`

### Issue: Template not found
- Verify HTML files exist in same directory as `.ts` file
- Check `templateUrl` path is relative and correct
- Ensure file names match exactly

### Issue: Styles not applying
- Verify CSS files exist
- Check `styleUrls` path is relative and correct
- Ensure CSS selectors match component structure

### Issue: Remote not loading
- Verify remote is running on correct port
- Check `remoteEntry.js` path is correct
- Verify exposed module name matches
- Check browser console for errors

### Issue: Shell widget not loading
- Verify widget file exists in `public/widgets/`
- Check `angular.json` assets configuration
- Ensure script is loaded with `type="module"`
- Wait for `customElements.whenDefined()`

---

**Last Updated**: Based on current requirements
**Status**: Ready for implementation

