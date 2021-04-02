## What is Svelte? 
Svelte is a front-end technology similar in use to React, Vue, Angular, and the like. However, instead of loading a framework on the client-side, Svelte wires everything up during the build step, meaning it doesn't have to interpret any additional information at runtime. However, it's still in its relative infancy.

## When should you use Svelte?

- If you want to try out a framework that builds into an app, rather one that uses a framework at runtime.
- If you feel like React, Vue, Angular, etc. might be too "heavy".
- If you like trying new things.

## When should you not use Svelte?

- If you need an extremely battle-tested, extremely community supported framework.
- If you don't need interactivity/data binding.

## Examples
### Styling a component

```html
<style>
  p {
    color: purple;
    font-family: "Comic Sans MS", cursive;
    font-size: 2em;
  }
</style>

<p>Styled!</p>
```

https://svelte.dev/examples#styling

### Bound Text Input

```js
<script>
    let name = '';
</script>

<input bind:value={name} placeholder="enter your name">
<p>Hello {name || 'stranger'}!</p>
```

https://svelte.dev/examples#text-inputs

### Reactive statement on a button

```js
<script>
    let count = 0;

    $: if (count >= 10) {
        alert(`count is dangerously high!`);
        count = 9;
    }

    function handleClick() {
        count += 1;
    }
</script>

<button on:click={handleClick}>
    Clicked {count} {count === 1 ? 'time' : 'times'}
</button>
```

https://svelte.dev/examples#reactive-statements

### CSS class bindings

```html
<script>
  let current = "foo";
</script>

<style>
  button {
    display: block;
  }

  .active {
    background-color: #ff3e00;
    color: white;
  }
</style>

<button class:active="{current === 'foo'}" on:click="{() => current = 'foo'}">
  foo
</button>

<button class:active="{current === 'bar'}" on:click="{() => current = 'bar'}">
  bar
</button>

<button class:active="{current === 'baz'}" on:click="{() => current = 'baz'}">
  baz
</button>
```

https://svelte.dev/examples#classes

### Built-in animation transitions

```html
<script>
  import { fade, fly } from "svelte/transition";
  let visible = true;
</script>

<label>
  <input type="checkbox" bind:checked="{visible}" />
  visible
</label>

{#if visible}
<p in:fly="{{ y: 200, duration: 2000 }}" out:fade>
  Flies in, fades out
</p>
{/if}
```

https://svelte.dev/examples#in-and-out

## Other resources

- https://svelte.dev/
- https://svelte.dev/tutorial/basics
- https://egghead.io/playlists/getting-started-with-svelte-3-05a8541a
- https://github.com/sveltejs/svelte
- https://github.com/sveltejs/svelte/wiki/FAQ
- https://snipcart.com/blog/svelte-js-framework-tutorial
- https://blog.logrocket.com/how-to-build-a-simple-svelte-js-app/
- https://alligator.io/svelte/getting-started-with-svelte/
- https://codeburst.io/svelte-comparison-with-other-frameworks-e895c45567de
