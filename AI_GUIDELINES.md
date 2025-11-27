# AI Assistant Guidelines & Recommendations

> **Important:** This document contains strict guidelines that MUST be followed by any AI assistant working on this project.

## 🚨 CRITICAL RULES

### 1. Git Workflow

**❌ NEVER commit or push to git without explicit user permission**

- Always wait for user approval before running `git commit`
- Always wait for user approval before running `git push`
- Show the user what changes will be committed first
- Let the user review and approve

**Example workflow:**
```bash
# ✅ CORRECT
git add .
git status  # Show user what will be committed
# WAIT for user approval
# User says "ok commit it" or "push it"
# THEN commit and push

# ❌ WRONG
git add . && git commit -m "..." && git push  # Too automated!
```

### 2. Error Checking

**❌ ALWAYS check for errors 2-3 times before proposing changes**

**Required checks:**
1. Run `read_lints` on all modified files
2. Check TypeScript compilation
3. Verify imports are correct
4. Test logic thoroughly

**Example:**
```typescript
// Before proposing ANY code changes:
1. Read the file
2. Make changes
3. Run read_lints to check for errors
4. Fix any errors found
5. Run read_lints AGAIN to verify
6. Only then show to user
```

**Never say "it works" without actually checking for errors!**

### 3. Code Quality Standards

#### Avoid Over-Engineering

**❌ DON'T:**
- Create complex base classes for simple tasks
- Use abstract classes when functions suffice
- Add unnecessary layers of abstraction
- Mix JSX in `.ts` files (use `.tsx` for JSX)

**✅ DO:**
- Keep it simple
- Use utility functions over complex classes
- Prefer composition over inheritance
- Use proper file extensions (`.ts` for TypeScript, `.tsx` for JSX)

#### Code Duplication

**For micro-frontends: Duplication is acceptable when:**
- Code is small (< 100 lines)
- Code is stable (doesn't change often)
- It maintains independence between remotes
- It avoids build-time coupling

**Example:**
```typescript
// ✅ ACCEPTABLE: Small utility duplicated across 3 remotes
// Better than creating complex shared dependency

// ❌ NOT ACCEPTABLE: 1000+ lines of identical code
// Should be extracted to npm package
```

### 4. Architecture Preferences

#### Micro-Frontend Principles

**✅ Preferred:**
- Independent remotes (each can deploy separately)
- Runtime sharing (Module Federation)
- Minimal build-time dependencies
- Team autonomy

**❌ Avoid:**
- Shared code folders without proper package setup
- Build-time coupling between remotes
- Monorepo complexity (unless explicitly requested)

#### File Organization

**Utils Structure:**
```
host/src/utils/          # Host-specific utilities
remotes/*/src/utils/     # Remote-specific utilities
```

**NOT:**
```
shared/utils/            # ❌ Causes dependency issues
```

### 5. Documentation Standards

**Keep documentation:**
- Concise (no fluff)
- Scannable (tables, bullets, headings)
- Practical (real examples)
- Up-to-date (remove outdated info immediately)

**Documentation files:**
- `README.md` - Main project overview
- `QUICKSTART.md` - How to run (simple)
- `ARCHITECTURE.md` - System design (focused)
- `WEB_COMPONENTS.md` - Integration guide
- `AI_GUIDELINES.md` - This file

**❌ NEVER create:**
- Redundant READMEs in every folder
- Summary files that duplicate content
- Overly verbose explanations
- Unnecessary documentation files (SUMMARY.md, FINAL_FIX.md, etc.)

**✅ ONLY edit existing docs when needed:**
- Update `README.md` for project changes
- Update `QUICKSTART.md` for new run commands
- Keep changes minimal - only what's required

### 6. Communication Style

**When responding:**
- ✅ Be direct and concise
- ✅ Admit mistakes immediately
- ✅ Always verify before claiming something works
- ✅ Wait for approval on destructive operations
- ❌ Don't over-explain or be verbose
- ❌ Don't commit without permission
- ❌ Don't say "no errors" without actually checking
- ❌ Don't create README bullshit - edit existing docs only when necessary

## 📋 Project-Specific Guidelines

### TypeScript/React

**Imports:**
```typescript
// ✅ Consistent double quotes (project preference)
import { something } from "module";

// ❌ Don't mix quotes
import { something } from 'module';
```

**File Extensions:**
```typescript
// ✅ CORRECT
webComponent.ts     // Pure TypeScript, no JSX
webcomponent.tsx    // Contains JSX

// ❌ WRONG
webComponent.ts     // Contains JSX - will cause errors!
```

### HTML & CSS Separation (Angular/Vue Remotes)

**❌ CRITICAL RULE: For Angular and Vue remotes, ALWAYS keep HTML and CSS in separate files from TypeScript**

**✅ CORRECT Structure:**
```
remotes/angular/src/
├── components/
│   └── analytics/
│       ├── analytics.component.ts    ✅ TypeScript logic only
│       ├── analytics.component.html  ✅ HTML template
│       └── analytics.component.css   ✅ CSS styles
├── analytics-remote.ts               ✅ Module Federation entry point
└── app.module.ts

remotes/vue/src/
├── components/
│   └── settings/
│       ├── SettingsPage.vue         ✅ Vue SFC (template, script, style)
│       └── SettingsPage.css         ✅ Optional external CSS
├── settings-remote.ts                ✅ Module Federation entry point
└── main.ts
```

**File Naming Convention:**
- `[component-name]-remote.ts` - Module Federation entry point (e.g., `analytics-remote.ts`, `settings-remote.ts`)
- `[component-name].component.ts/html/css` - Angular components
- `[ComponentName].vue` - Vue components (PascalCase for SFC)

**❌ WRONG - DON'T DO THIS:**
```typescript
// ❌ NEVER inline HTML in TypeScript files
export default function mount(container: HTMLElement) {
  container.innerHTML = `
    <div class="my-component">
      <!-- HTML here -->
    </div>
  `;
}

// ❌ NEVER inline CSS in TypeScript
const styles = `
  .my-component { /* CSS */ }
`;
```

**✅ CORRECT - Proper Angular Component:**
```typescript
// analytics.component.ts
@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',  ✅
  styleUrls: ['./analytics.component.css']    ✅
})
export class AnalyticsComponent {
  // TypeScript logic only
}
```

**✅ CORRECT - Proper Vue Component:**
```vue
<!-- SettingsPage.vue -->
<template>
  <!-- HTML here -->
</template>

<script setup lang="ts">
// TypeScript logic
</script>

<style scoped src="./SettingsPage.css"></style>
```

**Why this matters:**
- **Framework standards** - Follows Angular/Vue best practices
- **Separation of concerns** - Logic, presentation, and style are separate  
- **Maintainability** - Easy to find and edit HTML/CSS
- **Readability** - TypeScript files focus on logic only
- **IDE support** - Proper syntax highlighting and autocomplete
- **Team collaboration** - Designers can edit templates without touching TS

### State Management

**Zustand stores should have:**
- Persistence (for user preferences)
- Logging (for debugging)
- Validation (max values, bounds)
- Type safety (constants over magic strings)

### Error Handling

**Web components must:**
- Handle errors gracefully
- Show user-friendly error UI
- Log errors to console
- Clean up resources on unmount

**Example:**
```typescript
disconnectedCallback() {
  try {
    unmountReactRoot(this.root);
    this.root = null;
  } catch (error) {
    console.error('Error during cleanup:', error);
  }
}
```

## 🔄 Workflow Checklist

Before ANY code changes:
- [ ] Understand the request fully
- [ ] Check existing code
- [ ] Plan the changes
- [ ] Make changes
- [ ] **Run linter 2-3 times**
- [ ] Show user the changes
- [ ] Wait for approval
- [ ] THEN commit (if approved)

## 🎓 Lessons Learned

### From This Session

1. **Don't create `shared/` folders** without proper npm package setup
   - Causes linting errors
   - Breaks independence

2. **Don't overengineer utilities**
   - Base classes aren't always the answer
   - Simple functions > complex inheritance

3. **Always check for errors multiple times**
   - Run read_lints before AND after changes
   - Don't assume code works

4. **Wait for permission to commit**
   - User wants control over git operations
   - Show changes first, commit second

5. **Duplication in micro-frontends is OK**
   - Small duplicated code is better than coupling
   - Independence > DRY principle

## 🚀 Quick Reference

### Good Patterns ✅

```typescript
// Simple utility functions
export const getThemeMode = (mode: string): ThemeMode => {
  return mode && isValidThemeMode(mode) ? mode : "light";
};

// State persistence
export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({ /* state */ }),
    { name: 'theme-storage' }
  )
);

// Error boundaries with fallbacks
<ErrorBoundary fallback={<CustomError />}>
  <App />
</ErrorBoundary>
```

### Bad Patterns ❌

```typescript
// ❌ Complex base class for simple task
export abstract class WebComponentBase extends HTMLElement {
  // 100+ lines of abstraction for 3 components
}

// ❌ JSX in .ts file
// webComponent.ts
const element = <div>Hello</div>;  // Syntax error!

// ❌ Magic strings
mode === 'light'  // Use constants: THEME_MODE.LIGHT
```

## 📝 Summary

**Core Principles:**
1. ✅ Check errors 2-3 times
2. ✅ Wait for permission to commit
3. ✅ Keep it simple
4. ✅ Maintain independence
5. ✅ Be direct and honest

**Remember:**
> "The user knows best. When in doubt, ask. Never assume."

---

**Last Updated:** 2025-11-27  
**Version:** 1.1  
**Status:** Active - MUST be followed by all AI assistants

