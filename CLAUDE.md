# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

**Start development server (Remotion Studio):**

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
- **Main composition**: `src/HelloWorld.tsx` - primary video template with props schema
- **Component library**: `src/HelloWorld/` - reusable video components (Logo, Title, Subtitle, Arc, Atom)

### Video Compositions

The project defines compositions in `src/Root.tsx`:

- `HelloWorld` - Main animated video with customizable text and colors provided as an example

### Key Patterns

- **Zod schemas** for type-safe props validation (`myCompSchema`, `myCompSchema2`)
- **Animation primitives**: Uses Remotion's `spring()`, `interpolate()`, and `useCurrentFrame()` for animations
- **Sequence timing**: Components use `<Sequence>` for precise timing control
- **AbsoluteFill**: Remotion's equivalent of absolutely positioned divs

### Configuration

- **Remotion config**: `remotion.config.ts` - video format settings and Tailwind integration
- **Video format**: JPEG images, overwrite enabled
- **Styling**: TailwindCSS v4 enabled via `@remotion/tailwind-v4`
- **TypeScript**: Strict mode enabled with React JSX transform
