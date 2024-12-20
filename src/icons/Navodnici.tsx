import { type FC, type SVGAttributes } from "react";

export const Navodnici: FC<SVGAttributes<SVGElement>> = (properties) => (
  <svg
    width={186}
    height={165}
    viewBox="0 0 186 165"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...properties}
  >
    <path fill="url(#pattern0_140_87)" d="M0 0H186V165H0z" />
    <defs>
      <pattern
        id="pattern0_140_87"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use
          xlinkHref="#image0_140_87"
          transform="matrix(.0023 0 0 .0026 -.001 0)"
        />
      </pattern>
      <image
        id="image0_140_87"
        width={436}
        height={386}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAbQAAAGCCAYAAACIFzb2AAAACXBIWXMAAAsSAAALEgHS3X78AAAP1UlEQVR4nO3d7XEc15WA4e4t/V9nIGawdATiRmA6goUjWCgCQxEsGMESGRARGMgAiGCJDIgIemuoO+SIIogB0Kf7ntPPU6VylX9YRIPX7/2annEYhlfDMJwMwDBN01mmpzCO40kbw7B1V7ugvRmG4V9bfxIw/B60MdODGMfxahiGXzr4o8Dafvs3vwIAKhA0AEoQNABKEDQAShA0AEoQNABKEDQAShA0AEoQNABKEDQAShA0AEoQNABKEDQAShA0AEoQNABKEDQAShA0AEoQNABKEDQAShA0AEoQNABKEDQAShA0AEoQNABKEDQAShA0AEoQNABKEDQAShA0AEoQNABKEDQAShA0AEoQNABKEDQAShA0AEoQNABKEDQAShA0AEoQNABKEDQAShA0AEoQNABKEDQAShA0AEoQNABKEDQAShA0AEoQNABKEDQAShA0AEoQNABKEDQAShA0AEoQNABKEDQAShA0AEoQNABKEDQAShA0AEoQNABKEDQAShA0AEoQNABKEDQAShA0AEoQNABKEDQAShA0AEoQNABKEDQAShA0AEoQNABKEDQAShA0AEoQNABKEDQAShA0AEoQNABKEDQAShA0AEoQNABKEDQAShA0AEoQNABKEDQAShA0AEoQNABKEDQAShA0AEoQNABKEDQAShA0AEoQNABKEDQAShA0AEoQNABKEDQAShA0AEoQNABKEDQAShA0AEoQNABKEDQAShA0AEoQNABKEDQAShA0AEoQNABKEDQAShA0AEoQNABKEDQAShA0AEoQNABKEDQAShA0AEoQNABKEDQAShA0AEoQNABKEDQAShA0AEoQNABKEDQAShA0AEoQNABKEDQAShA0AEoQNABKEDQAShA0AEoQNABKEDQAShA0AEoQNABKEDQAShA0AEoQNABKEDQAShA0AEoQNABKEDQAShA0AEoQNABKEDQAShA0AEoQNABKEDQAShA0AEoQNABKEDQAShA0AEoQNABKEDQAShA0AEoQNABKEDQAShA0AEoQNABKEDQAShA0AEoQNABKEDQAShA0AEoQNABKEDQAShA0AEoQNABKEDQAShA0AEoQNABKEDQAShA0AEoQNABKEDQAShA0AEoQ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"
      />
    </defs>
  </svg>
);
