import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

export const HelloWorld: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  const opacity = interpolate(frame, [0, durationInFrames], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill className="flex items-center justify-center bg-white">
      <h1
        style={{
          opacity,
        }}
        className="text-4xl font-bold"
      >
        Hello World
      </h1>
    </AbsoluteFill>
  );
};
