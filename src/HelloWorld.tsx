import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { TextAnimation } from "./examples/textAnimation";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

export const HelloWorld: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  const opacity = interpolate(frame, [0, durationInFrames], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill className="flex items-center justify-center bg-white">
      <TextAnimation
        text={
          <>
            HELLO <span className="text-red-500 font-light">WeBuild</span>
          </>
        }
        createTimeline={({ textRef, tl }) => {
          // Split the text into individual characters using the ref
          const splitText = new SplitText(textRef.current, {
            type: "chars",
            charsClass: "char",
          });

          // Set initial state - characters are invisible and moved down
          gsap.set(splitText.chars, {
            opacity: 0,
            y: 50,
            rotationX: 90,
          });

          // Animate characters appearing with stagger effect
          tl.to(splitText.chars, {
            opacity: 1,
            y: 0,
            rotationX: 0,
            duration: 0.8,
            stagger: 0.05,
            ease: "back.out(1.7)",
          });

          // Optional: Add a subtle hover effect that scales characters
          tl.to(
            splitText.chars,
            {
              scale: 1.1,
              duration: 0.3,
              stagger: 0.02,
              yoyo: true,
              repeat: 1,
              ease: "power2.inOut",
            },
            "+=0.5",
          );

          return tl;
        }}
      />
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
