import React from "react"
import useId from "../hooks/useId"

const WavesTop: React.FC = (props) => {
  const id = useId()

  return (
    <svg
      fill="none"
      viewBox="0 0 1825 859"
      width="1825"
      height="859"
      preserveAspectRatio="xMaxYMin meet"
      {...props}
    >
      <mask
        id={`top_mask-${id}`}
        width="1825"
        height="859"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
      >
        <path fill="#C4C4C4" d="M0 0h1825v859H0z" />
      </mask>
      <g mask={`url(#top_mask-${id})`}>
        <path
          fill={`url(#top_gradient1-${id})`}
          d="M2615.01 917.26s-390.49 148.08-669.53-4.11c-279.03-152.2-234.85-547.89-456.12-684.6-221.28-136.7-652.27 46.94-886.56 35.71-234.3-11.23-333.72-63.68-561.94-289.95-228.22-226.27 68.91-641.84 68.91-641.84s1007.37 110.17 1115.48 149.48c108.11 39.3 1093.57 442.8 1093.57 442.8L2863.39 241l-248.38 676.26z"
        />
        <path
          fill={`url(#top_gradient2-${id})`}
          d="M2615.01 879.5s-390.49 148.08-669.53-4.11c-279.03-152.2-234.85-547.89-456.12-684.6-221.28-136.7-652.27 46.94-886.56 35.71-234.3-11.23-333.72-63.68-561.94-289.95-228.22-226.27 68.91-641.84 68.91-641.84S1117.14-595.12 1225.25-555.8c108.11 39.3 1093.57 442.8 1093.57 442.8l544.57 316.25-248.38 676.26z"
        />
        <path
          fill={`url(#top_gradient3-${id})`}
          d="M2615.01 897.39s-390.49 148.08-669.53-4.12c-279.03-152.2-234.85-547.88-456.12-684.6-221.28-136.7-652.27 46.95-886.56 35.72C368.5 233.16 269.08 180.7 40.86-45.56c-228.22-226.27 68.91-641.84 68.91-641.84s1007.37 110.17 1115.48 149.48c108.11 39.3 1093.57 442.8 1093.57 442.8l544.57 316.25-248.38 676.26z"
          opacity=".68"
        />
        <path
          fill={`url(#top_gradient4-${id})`}
          d="M1826.79 455.45s-182.14 69.07-312.28-1.92c-130.15-70.98-109.54-255.54-212.75-319.3-103.2-63.76-304.22 21.9-413.5 16.66-109.27-5.24-155.65-29.7-262.09-135.24-106.44-105.54 32.14-299.36 32.14-299.36s469.85 51.38 520.27 69.71c50.43 18.34 567.42 50.5 567.42 50.5l337.5 96-256.71 522.95z"
          opacity=".39"
        />
      </g>
      <defs>
        <linearGradient
          id={`top_gradient1-${id}`}
          x1="310.32"
          x2="945.33"
          y1="-84.55"
          y2="1544.99"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#345EFE" />
          <stop offset=".51" stopColor="#03B8FF" />
          <stop offset="1" stopColor="#00FCFF" />
        </linearGradient>
        <linearGradient
          id={`top_gradient2-${id}`}
          x1="500.6"
          x2="1128.26"
          y1="11.42"
          y2="1481.54"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#345EFE" />
          <stop offset=".51" stopColor="#03B8FF" />
          <stop offset="1" stopColor="#00FCFF" />
        </linearGradient>
        <linearGradient
          id={`top_gradient3-${id}`}
          x1="310.32"
          x2="945.33"
          y1="-104.42"
          y2="1525.11"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#345EFE" />
          <stop offset=".51" stopColor="#03B8FF" />
          <stop offset="1" stopColor="#00FCFF" />
        </linearGradient>
        <linearGradient
          id={`top_gradient4-${id}`}
          x1="930.96"
          x2="1210.61"
          y1="106.95"
          y2="718.31"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#345EFE" />
          <stop offset=".51" stopColor="#03B8FF" />
          <stop offset="1" stopColor="#00FCFF" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default WavesTop
