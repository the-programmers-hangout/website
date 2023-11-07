---
authors:
  - "Thias#8888"
  - "jun_ok#0001"
  - "shan#6094"
  - "propagandalf#0001"
created_at: "2023/09/10"
title: What is Tailwind?
---

Tailwind
**What is Tailwind CSS?**

Tailwind is an open-source CSS framework that provides utility-like classes such as `flex`, `w-1/4`, `m-5` and `hover:font-bold`. Tailwind enables developers to quickly build expressive user interfaces and responsive websites using its low-level CSS classes.

**Why should I use Tailwind?**

- Sensible and consistent defaults
- Easy to customize and extend to your liking. All the styles are customizable and adding new variants is easy
- Extremely lightweight in production
  - Tailwind’s build system produces a minimal size CSS bundle that only contains the classes actually used in your HTML, making it lighter than alternatives
- Enables quick iteration and fast prototyping

You may still be wondering "Okay, but why Tailwind? It goes against what I've learned." You can read Adam Wathan's (author of Tailwind) blog post here https://adamwathan.me/css-utility-classes-and-separation-of-concerns But tldr you've probably learned a way that basically creates a 1:1 mapping of HTML elements to CSS classes. It's painful to work in such a codebase and your CSS file is needlessly huge. A major problem with this is that it doesn't allow for easy reuse of styles to build more complex or similar components.

Utility classes are content agnostic and sane to compose (use together to build something greater). In Wathan's words: "amazing thing about this is that before you know it, you can build entirely new UI components without writing any new CSS". Your utility classes can be composed in a way that aligns to your design system, allowing you to move faster and stay aligned with designs. We'll take a look at this later.

**What does code using Tailwind look like?**

Let’s say you want to create a Toast that looks like: 

![Image of Toast Component](https://i.imgur.com/srVxaLa.png)

In Tailwind that would look like this:

```html
<div
  class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4"
>
  <div class="flex-shrink-0">
    <img class="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo" />
  </div>
  <div>
    <div class="text-xl font-medium text-black">ChitChat</div>
    <p class="text-gray-500">You have a new message!</p>
  </div>
</div>
```

If you were to make this component using custom CSS it would look something like this:

```html
<div class="chat-notification">
  <div class="chat-notification-logo-wrapper">
    <img
      class="chat-notification-logo"
      src="/img/logo.svg"
      alt="ChitChat Logo"
    />
  </div>
  <div class="chat-notification-content">
    <h4 class="chat-notification-title">ChitChat</h4>
    <p class="chat-notification-message">You have a new message!</p>
  </div>
</div>

<style>
  .chat-notification {
    display: flex;
    max-width: 24rem;
    margin: 0 auto;
    padding: 1.5rem;
    border-radius: 0.5rem;
    background-color: #fff;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
  .chat-notification-logo-wrapper {
    flex-shrink: 0;
  }
  .chat-notification-logo {
    height: 3rem;
    width: 3rem;
  }
  .chat-notification-content {
    margin-left: 1.5rem;
    padding-top: 0.25rem;
  }
  .chat-notification-title {
    color: #1a202c;
    font-size: 1.25rem;
    line-height: 1.25;
  }
  .chat-notification-message {
    color: #718096;
    font-size: 1rem;
    line-height: 1.5;
  }
</style>
```

**How do I set up Tailwind for my project?**

Tailwind provides a comprehensive installation guide for your preferred project setup, whether that’s Laravel, Ruby on Rails, React, or even if you just want a simple cdn to plug and play https://tailwindcss.com/docs/installation. We recommend using PostCSS, which is compatible with most framework guides as well. Tailwind does rely a bit on your build system, so the steps vary, but we’ll explain the core concept shared between all the variations:


Firstly, when working with designers, you’ll want to set up variants based on the design system. You can use CVA to create variants. Let’s look at an example
Tailwind is a step between easy DX and code your browsers understand. If you look at the docs for padding https://tailwindcss.com/docs/padding for example, you’ll notice that `px-0` is equal to the properties

```css
padding-left: 0px;
padding-right: 0px;
```

Your browser doesn’t understand `px-0` but it does understand the properties `padding-left` and `padding-right`. You can easily create new mappings of shorthand classes to CSS properties or override current ones via the tailwind config. Classes being mapped to the properties still need to be outputted to CSS files for usage in browsers when viewing a page. We need to add Tailwind’s custom CSS directives into a CSS file which will be processed by PostCSS when we build our site. These `@tailwind` blocks are special and they’ll be picked up by the Tailwind plugins to insert Tailwind’s generated styles (you can read more about them here https://tailwindcss.com/docs/functions-and-directives).

```css
// File: styles.css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

The above CSS code is obviously invalid CSS, and it’s unable to do anything useful on its own. To finalize our installation, we need to ‘build’ the CSS. The installation guides’ processes scan your files to find classnames you use and keep only those for the outputted CSS file in the build steps. This is why Tailwind requires the full string without string interpolation.

The outputted CSS files are what get used in your project.

The reason we recommend PostCSS is because you can transform your CSS after it’s been built. This sounds strange but it’s a powerful concept, eg because then you can use Autoprefixer https://github.com/postcss/autoprefixer which can add prefixes like webkit or moz to properties to ensure they work cross-browser, eg

```css
.example {
  appearance: none;
}
```

becomes

```css
.example {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
```

You can poke around for other PostCSS plugins, they range from useful (autoprefixer, cssnano, etc) to useless but fun (Australian anyone? https://github.com/dp-lewis/postcss-australian-stylesheets).

**How do I use Tailwind?**

Let's go through how to "build entirely new UI components without writing any new CSS". We'll zero in on React for this part, but generally, most frameworks have equivalent composable elements and styling. We'll try making a button (sounds simple, but is it?)

In React, a basic concept is components. They’re composable by nature, and are supposed to be self-contained and reusable. This is the perfect place to use tailwind styles. In this example we'll also use the CVA library (https://cva.style/docs), to abstract away the variant conditions and provide type safety.

```js
export const foobarVariants = cva(
  "<class1> <class2>", // classes you want for all variants
  {
    variants: {
      variant: {
        a: "<class3> <class4>",
        b: "<class5>",
        c: "<class6> <class7>",
      },
      // other variants that are agnostic of the previous defined variants
    },
    defaultVariants: {
      variant: "a", // optional but this is the active variant when none/ null are passed in
    },
  }
);
```

Let's create some variants for a button:

```js
export const buttonVariants = cva("text-white font-bold py-2 px-4 rounded-md", {
  variants: {
    variant: {
      default: "bg-blue-500 hover:bg-blue-700",
      success: "bg-green-500 hover:bg-green-700",
      destructive: "bg-red-500 hover:bg-red-700",
      neutral: "bg-gray-500 hover:bg-gray-700",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});
```

Let's just say for funsies that your website sometimes has very round or less round buttons. We can add that in too:

```diff
+ export const buttonVariants = cva("text-white font-bold py-2 px-4", {
  variants: {
    variant: {
      default: "bg-blue-500 hover:bg-blue-700",
      success: "bg-green-500 hover:bg-green-700",
      destructive: "bg-red-500 hover:bg-red-700",
      neutral: "bg-gray-500 hover:bg-gray-700",
    },
+    isRound: {
+      true: "rounded-full",
+      false: "rounded-md",
+    },
  },
  defaultVariants: {
    variant: "default",
+    isRound: false,
  },
});
```

Now this is what the actual button component looks like:

```jsx
export const Button = ({
  variant = "default",
  isRound = false,
  className,
  ...props
}) => (
  <button
    className={buttonVariants({ variant, isRound, className })}
    {...props}
  />
);
```

Sprinkling in types for the cool typescript users:

```jsx
export type ButtonVariants = VariantProps<typeof buttonVariants>
export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & ButtonVariants

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "default", isRound = false, className, ...props }, ref) => (
    <button
      className={buttonVariants({ variant, isRound, className })}
      ref={ref}
      {...props}
    />
  )
)
Button.displayName = "Button"
```

Now you can freely use the `Button` component like `<Button />` or `<Button variant="neutral" isRound={true} />`.

You're now able to make a more complex element, that may reuse the button component, eg

```jsx
export const ConfirmDialog = ({ children }) => (
  <div>
    <span className="text-gray-700">{children}</span>
    <span className="text-gray-700 text-sm">
      You will lose any unsaved progress.
    </span>

    <div className="flex flex-row">
      <Button variant="destructive">Cancel</Button>
      <Button variant="success">Confirm</Button>
    </div>
  </div>
);
```


**Still, so many classes seems like a mess and a pain to work with**

At some point, when you’re using tailwind extensively, your file is going to be filled up with inline styles, which can be a bit of a nuisance to read, or even more important: keeping track of what’s what and where.

Yep, we also thought it’d be a pain in the beginning and slept on Tailwind for a while. However, the community and support is crazily extensive.

Tailwind itself is an opinionated CSS framework, and so naturally it has some guidance/opinions on how you should handle this, which can be read up on at reusing styles (https://tailwindcss.com/docs/reusing-styles) and adding custom styles https://tailwindcss.com/docs/adding-custom-styles. The general tendency and advice is to go with inline styling rather than declaring custom styles (because it’ll keep your bundle size small and increase reusability).

There are several tools which can help you organize this inline CSS, to better keep track of it such as automatically sorting your styling, which is very helpful as you start adding complex styling such as responsiveness, states such as hover, focus etc. 
Such plugins exist for tools like https://prettier.io, namely https://github.com/tailwindlabs/prettier-plugin-tailwindcss.
There are also other tools that achieve the same, such as a VSCode extension: https://github.com/heybourn/headwind.
With these tools you’ll easily be able to streamline your stylings, and not worry about which order they’re being applied in, or customize it to your heart's content.

The tailwind blog https://tailwindcss.com/blog/automatic-class-sorting-with-prettier outlines why the sort order is very very powerful: it’s the same order that Tailwind orders them in your CSS. This means you can actually predict which classes will override or complement which classes by just reading the order instead of trying it out and account for edge cases like css load time (2 min example of a headache inducing issue this resolves https://youtu.be/QBajvZaWLXs?t=316) 

In addition, colocation of styles with the actual component makes so much sense. You no longer have to jump between 2, 3, or however many n files you did before (eg button.tsx -> button.css.ts -> global.css.ts). If you want to update a button, you generally go to the file you declared the button (button.tsx) and that’s it.

**How to extend Tailwind**

You’re probably (hopefully) hyped up at this point. A question that may be lingering in your mind may be, how do I really customize it to my design system and branding?

The customizing is as easy editing your `tailwind.config.js` file. You can extend or override the default (https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/config.full.js). Keys missing in your config fallback to the default config. If you declare a key like `colors` under theme, it’ll replace the default config with your colors config. If you declare the key `colors` under extend under theme, it’ll merge the tailwind default config with your config for that. 

So this:

```js
export default {
  theme: {
    zIndex: {
      hide: "-1",
      auto: "auto",
      docked: "10",
      dropdown: "1000",
      sticky: "1100",
      banner: "1200",
      overlay: "1300",
      modal: "1400",
      popover: "1500",
      skipLink: "1600",
      toast: "1700",
      tooltip: "1800",
      0: "0",
      1: "1",
      2: "2",
    },
  },
}
```

Will completely replace the default zIndex, whereas

```js
export default {
  theme: {
    extend: {
      zIndex: {
        docked: "10",
        dropdown: "1000",
        sticky: "1100",
        banner: "1200",
        overlay: "1300",
        modal: "1400",
        popover: "1500",
        skipLink: "1600",
        toast: "1700",
        tooltip: "1800",
      },
    },
  },
}
```
Will result in a merge like

```js
{
  theme: {
    zIndex: {
      auto: 'auto',
      0: '0',
      10: '10',
      20: '20',
      30: '30',
      40: '40',
      50: '50',

      docked: "10",
      dropdown: "1000",
      sticky: "1100",
      banner: "1200",
      overlay: "1300",
      modal: "1400",
      popover: "1500",
      skipLink: "1600",
      toast: "1700",
      tooltip: "1800",
    },
  },
}
```

Again, the tailwind docs are super comprehensive! Check them out https://tailwindcss.com/docs/configuration

**Where can I try Tailwind CSS?**

Tailwind has a dedicated sandbox environment where you can test all its features (including the build system). The sandbox is available at https://play.tailwindcss.com/


**Resources**

- Tailwind website: https://tailwindcss.com
- Tailwind Labs youtube: https://www.youtube.com/tailwindlabs
- awesome-tailwindcss: https://github.com/aniftyco/awesome-tailwindcss
- Component examples: https://tailwindcomponents.com
- Twind (Tailwind in JS): https://github.com/tw-in-js/twind
- CVA: https://cva.style/docs
- Prettier plugin tailwindcss: https://github.com/tailwindlabs/prettier-plugin-tailwindcss
- Headwind: https://github.com/heybourn/headwind

Cheers! Happy tailwind-ing?
