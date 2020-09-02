import React from "react"
import useId from "../hooks/useId"

const JetbrainsLogo: React.FC = (props) => {
  const id = useId()

  return (
    <svg fill="none" viewBox="0 0 121 131" {...props}>
      <path
        fill={`url(#jetbrains1-${id})`}
        d="M118.62 71.8a4.68 4.68 0 00-6.2-7l-83.8 45.9a10.07 10.07 0 00-1.1 18c3.4 2 7.5 1.8 10.7-.2.2-.2.5-.3.7-.5l78-54.8c.4-.3 1.5-1.1 1.7-1.4z"
      />
      <path
        fill={`url(#jetbrains2-${id})`}
        d="M118.82 65.1L55.02 2.5A7.7 7.7 0 1043.72 13c.4.4.8.7 1.2 1l67.4 57.7c.8.7 1.8 1.2 3 1.3 2.6.1 4.7-1.8 4.9-4.4a5 5 0 00-1.4-3.5z"
      />
      <path
        fill={`url(#jetbrains3-${id})`}
        d="M57.12 59.5c-.1 0-39.4-31-40.2-31.5l-1.8-.9a11.18 11.18 0 00-9.8 20c.7.4 1.3.7 2 .9.4.2 45.4 18.8 45.4 18.8a4.3 4.3 0 004.4-7.3z"
      />
      <path
        fill={`url(#jetbrains4-${id})`}
        d="M49.32 0c-1.7 0-3.3.6-4.6 1.5L4.92 28.3c-.1.1-.2.1-.2.2h-.1A11.14 11.14 0 007.32 48c3.6 1.4 7.5.7 10.4-1.4.7-.5 1.3-1 1.8-1.6l34.6-31.2c1.8-1.4 3-3.6 3-6.1 0-4.2-3.5-7.7-7.8-7.7z"
      />
      <path fill="#000" d="M85.62 37.4h-51v51h51v-51z" />
      <path
        fill="#fff"
        d="M58.12 78.8h-19.1V82h19.1v-3.2zM38.82 50.8l1.5-1.4c.4.5.8.8 1.3.8.6 0 .9-.4.9-1.2v-5.3h2.3V49c0 1-.3 1.8-.8 2.3-.5.5-1.3.8-2.3.8-1.5.1-2.3-.5-2.9-1.3zM45.32 43.8h6.7v1.9h-4.4V47h4v1.8h-4v1.3h4.5v2h-6.7l-.1-8.3zM55.02 45.8h-2.5v-2h7.3v2h-2.5v6.3h-2.3v-6.3zM39.02 54h4.3c1 0 1.8.3 2.3.7.3.3.5.8.5 1.4 0 1-.5 1.5-1.3 1.9 1 .3 1.6.9 1.6 2 0 1.4-1.2 2.3-3.1 2.3h-4.3V54zm4.8 2.6c0-.5-.4-.7-1-.7h-1.5v1.5h1.4c.7-.1 1.1-.3 1.1-.8zm-.8 2.4h-1.8v1.5h1.8c.7 0 1.1-.3 1.1-.8s-.4-.7-1.1-.7zM46.82 54h3.9c1.3 0 2.1.3 2.7.9.5.5.7 1.1.7 1.9 0 1.3-.7 2.1-1.7 2.6l2 2.9h-2.6l-1.7-2.5h-1v2.5h-2.3V54zm3.8 4c.8 0 1.2-.4 1.2-1 0-.7-.5-1-1.2-1h-1.5v2h1.5z"
      />
      <path
        fill="#fff"
        d="M56.82 54h2.2l3.5 8.4h-2.5l-.6-1.5h-3.2l-.6 1.5h-2.4l3.6-8.4zm2 5l-.9-2.3-.9 2.3h1.8zM62.82 54h2.3v8.3h-2.3V54zM65.72 54h2.1l3.4 4.4V54h2.3v8.3h-2l-3.5-4.5v4.6h-2.3V54zM73.72 61.1l1.3-1.5c.8.7 1.7 1 2.7 1 .6 0 1-.2 1-.6 0-.4-.3-.5-1.4-.8-1.8-.4-3.1-.9-3.1-2.6 0-1.5 1.2-2.7 3.2-2.7 1.4 0 2.5.4 3.4 1.1l-1.2 1.6c-.8-.5-1.6-.8-2.3-.8-.6 0-.8.2-.8.5 0 .4.3.5 1.4.8 1.9.4 3.1 1 3.1 2.6 0 1.7-1.3 2.7-3.4 2.7-1.5.1-2.9-.4-3.9-1.3z"
      />
      <defs>
        <linearGradient
          id={`jetbrains1-${id}`}
          x1="31.86"
          x2="110.26"
          y1="120.56"
          y2="73.24"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FCEE39" />
          <stop offset="1" stopColor="#F37B3D" />
        </linearGradient>
        <linearGradient
          id={`jetbrains2-${id}`}
          x1="48.38"
          x2="119.94"
          y1="6.91"
          y2="69.55"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EF5A6B" />
          <stop offset=".57" stopColor="#F26F4E" />
          <stop offset="1" stopColor="#F37B3D" />
        </linearGradient>
        <linearGradient
          id={`jetbrains3-${id}`}
          x1="52.97"
          x2="10.56"
          y1="63.64"
          y2="37.16"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#7C59A4" />
          <stop offset=".39" stopColor="#AF4C92" />
          <stop offset=".77" stopColor="#DC4183" />
          <stop offset=".96" stopColor="#ED3D7D" />
        </linearGradient>
        <linearGradient
          id={`jetbrains4-${id}`}
          x1="52.2"
          x2="10.79"
          y1="3.7"
          y2="37.9"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EF5A6B" />
          <stop offset=".36" stopColor="#EE4E72" />
          <stop offset="1" stopColor="#ED3D7D" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default JetbrainsLogo
