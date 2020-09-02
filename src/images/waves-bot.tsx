import React from "react"
import useId from "../hooks/useId"

const WavesBot: React.FC = (props) => {
  const id = useId()

  return (
    <svg
      fill="none"
      preserveAspectRatio="xMaxYMax slice"
      viewBox="0 0 1825 862"
      {...props}
    >
      <g mask={`url(#bot_mask-${id})`}>
        <path
          fill={`url(#bot_gradient1-${id})`}
          d="M-339.72 271.98S-38.1 54.63 236.91 121.17c275 66.53 328.23 416.94 550.01 483.48 221.78 66.53 550.01-190.73 754.05-235.09 204.04-44.35 301.62-22.18 550.02 119.76 248.39 141.94 88.71 567.76 88.71 567.76s-891.56 137.5-993.58 128.63c-102.01-8.87-1042.36-128.63-1042.36-128.63l-541.14-146.37 57.66-638.73z"
          opacity=".64"
        />
        <path
          fill={`url(#bot_gradient2-${id})`}
          d="M-339.72 313.71S-38.1 96.37 236.91 162.91c275 66.53 328.23 416.94 550.01 483.47 221.78 66.54 550.01-190.73 754.05-235.08 204.04-44.36 301.62-22.18 550.02 119.76 248.39 141.94 88.71 567.75 88.71 567.75s-891.56 137.5-993.58 128.64c-102.01-8.87-1042.36-128.64-1042.36-128.64l-541.14-146.37 57.66-638.73z"
          opacity=".18"
        />
        <path
          fill={`url(#bot_gradient3-${id})`}
          d="M-556.34 194.47S-254.72-22.87 20.3 43.67c275 66.53 328.23 416.94 550.01 483.47 221.78 66.54 550.02-190.73 754.05-235.08 204.04-44.36 301.62-22.18 550.02 119.76 248.39 141.94 88.71 567.75 88.71 567.75s-891.56 137.5-993.57 128.64C867.49 1099.34-72.86 979.57-72.86 979.57L-614 833.2l57.66-638.73z"
          opacity=".18"
        />
        <path
          fill={`url(#bot_gradient4-${id})`}
          d="M-323.82 379.3S-22.2 161.94 252.8 228.47c275 66.54 328.23 416.95 550.01 483.48 221.78 66.54 550.01-190.73 754.05-235.08 204.04-44.36 301.62-22.18 550.01 119.76 248.4 141.94 88.72 567.75 88.72 567.75s-891.56 137.5-993.58 128.64c-102.02-8.87-1042.36-128.64-1042.36-128.64l-541.14-146.37 57.66-638.73z"
          opacity=".91"
        />
        <path
          fill={`url(#bot_gradient5-${id})`}
          d="M-494.73 403.14S-193.11 185.8 81.9 252.34c275 66.53 328.23 416.94 550.01 483.47 221.78 66.54 550.01-190.73 754.05-235.08 204.04-44.36 301.62-22.18 550.01 119.76 248.4 141.93 88.72 567.75 88.72 567.75s-891.56 137.5-993.58 128.63C929.1 1308.01-11.25 1188.24-11.25 1188.24l-541.14-146.37 57.66-638.73z"
        />
      </g>
      <defs>
        <linearGradient
          id={`bot_gradient1-${id}`}
          x1="1872.87"
          x2="573.95"
          y1="602.05"
          y2="-141.38"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9423FC" />
          <stop offset=".51" stopColor="#FF70A5" />
          <stop offset="1" stopColor="#FEAF6D" />
        </linearGradient>
        <linearGradient
          id={`bot_gradient2-${id}`}
          x1="1872.87"
          x2="573.95"
          y1="643.79"
          y2="-99.64"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9423FC" />
          <stop offset=".51" stopColor="#FF70A5" />
          <stop offset="1" stopColor="#FEAF6D" />
        </linearGradient>
        <linearGradient
          id={`bot_gradient3-${id}`}
          x1="1574.79"
          x2="448.43"
          y1="459.89"
          y2="-207.89"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9423FC" />
          <stop offset=".51" stopColor="#FF70A5" />
          <stop offset="1" stopColor="#FEAF6D" />
        </linearGradient>
        <linearGradient
          id={`bot_gradient4-${id}`}
          x1="1993.87"
          x2="1553.41"
          y1="1147.96"
          y2="-218.23"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9423FC" />
          <stop offset=".51" stopColor="#FF70A5" />
          <stop offset="1" stopColor="#FEAF6D" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default WavesBot
