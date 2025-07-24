# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

**Start develpackageManager": "bun@1.0.0",opment server (Remotion Studio):**

```bash
npm run dev
```

**Build the video bundle:**

```bash
npm run build
```

**Lint and type check:**

```bash
npm run lint
```

**Fix linting and formatting issues:**

```bash
npm run lint:fix
npm run fix
```

**Type check only:**

```bash
npm run type-check
```

**Render specific composition to video:**

```bash
npx remotion render src/index.ts <composition-id> out/video.mp4
```

**Upgrade Remotion version:**

```bash
npm run upgrade
```

## Project Architecture

This is a **Remotion video project** that creates programmatic videos using React components.

### Core Structure

- **Entry point**: `src/index.ts` - registers the root component
- **Root component**: `src/Root.tsx` - defines all video compositions
- **Main composition**: `src/HelloWorld.tsx` - primary video template with GSAP animations
- **Base components**: `src/baseComponents/` - reusable video components (TextAnimation)
- **Custom hooks**: `src/hooks/` - Remotion/GSAP integration hooks (useGsapTimeline)

### Video Compositions

The project defines compositions in `src/Root.tsx`:

- `HelloWorld` - Main animated video with customizable text and colors provided as an example

### Key Patterns

- **GSAP Integration**: Uses `useGsapTimeline` hook to sync GSAP animations with Remotion's frame system
- **Text Animation**: `TextAnimation` component with `SplitText` plugin for character-based animations
- **Animation primitives**: Uses Remotion's `useCurrentFrame()` for frame-based animations
- **AbsoluteFill**: Remotion's equivalent of absolutely positioned divs
- **Component composition**: Reusable animation components with timeline factory patterns

### Configuration

- **Package manager**: Uses Bun (enforced via `preinstall` script)
- **Remotion config**: `remotion.config.ts` - video format settings and Tailwind integration
- **Video format**: JPEG images, overwrite enabled
- **Styling**: TailwindCSS v4 enabled via `@remotion/tailwind-v4`
- **TypeScript**: Strict mode enabled with React JSX transform
- **Animation libraries**: GSAP with SplitText plugin, Lucide React icons

### GSAP Integration

The project uses a custom `useGsapTimeline` hook that:

- Syncs GSAP timeline playback with Remotion's frame progression
- Provides proper cleanup with `gsap.context()`
- Enables complex animations while maintaining Remotion's deterministic rendering

Example pattern:

```typescript
const tl = gsap.timeline();
tl.to(target, { opacity: 1, duration: 1 });
return tl; // Hook handles frame synchronization
```
