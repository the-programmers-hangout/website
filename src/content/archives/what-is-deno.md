---
authors:
  - "denoer#8886"
  - "HeccinTech#0001"
created_at: "2021/06/08"
title: What is Deno?
---

## What is Deno?
Deno is a modern and secure runtime, and toolchain for JavaScript and TypeScript. It uses V8 and is built in Rust.

## History
Deno was created by Ryan Dahl, the creator of Node.js to fix some of his regrets with the now over a decade old javascript runtime which can be found in his talk: '10 Things I Regret About Node.js' <https://www.youtube.com/watch?v=M3BM9TB-8yA>

## What benefits does Deno have?
* TypeScript support out of the box.
* Support for Inbuilt tooling which is available without configuring or installing anything: 
    * Format
    * Test
    * Lint
    * Bundle
    * Compile
    * Generate documentation 
* Browser compatibility through support for ES modules and Web APIs;  which makes it easy to pick up.
* Secure sandbox, access to the filesystem, environment or the network has to be explicitly given.
* No node_modules folder. Dependencies are declared as direct urls. All dependencies are fetched, compiled, and stored in a centralized DENO_DIR folder.
* Explicit import mechanism makes the module system more robust and easy to use.
* Modular and easily extendable.
* Focuses on embeddable architecture.
* Standard library which is available at <https://deno.land/std@0.97.0>
* Faster HTTP, TypeScript compile time and common tooling. Say goodbye to long CI times.

## Architecture
Unlike node, deno is built to be modular and is a collection of rust crates. These crates can be tested, used, and worked on independently.

* Rusty_v8 provides zero-cost rust bindings to v8.
* Deno_core contains: 
    * ES module loading infrastructure.
    * JsRuntime which can be used with an event loop implementation. This is a single execution context for javascript.
    * Resource table infrastructure. A resource is similar to a file descriptor. They are integers that are allocated by the privileged side of Deno which refer to various rust objects that need to be persisted between ops. 
    * Ops interface (Deno’s operating system bindings) to bind rust functions to the javascript side. This centralized binding interface allows you to monitor global metrics and state reliably.
    * Extension interface.
* Deno_runtime is built on deno core and contains ops to implement the Deno namespace (APIs for FS, I/O, net tcp/udp and similar).
* Extensions folder contain implementation of web specs such as fetch, timers, websocket, webusb, and others. 
* Cli is built on deno_runtime and contains.
    * Infrastructure to compile and typecheck typescript.
    * Infrastructure for code analysis and module graph.
    * Inbuilt tooling such as lint, docs, or format. Those tools are built using rust crates such as deno_lint, deno_doc, and dprint.
    * Extensions
    * LSP (Language Server Protocol)
    
## Deno Sandbox
Deno embraces browsers in providing a sandbox. By default, no permissions are given to the scripts.

```sh
# Can access nothing
deno run script.ts

# Can only read from /tmp
deno run --allow-read=/tmp script.ts

# Can only access deno.land
deno run --allow-net=deno.land  script.ts

# Can only access DISCORD_TOKEN and BAN environment variables.
deno run --allow-env=DISCORD_TOKEN,BAN script.ts

# Can only write to /tmp and specific relative directories
deno run --allow-write=/tmp,./some_relative_directory script.ts

# Can write to everything. No check option ignores type checking typescript and speeds up startup time. 
deno run --allow-write --no-check script.ts

# Can access everything. Reload flag reload dependencies instead of using cache.
deno run -A --reload script.ts

# Prompt for necessary permissions and run the code
deno run --prompt script.ts

# Install a cli with all permissions named aleph (react-next-alternative for deno)
deno install --unstable -A -n aleph https://deno.land/x/aleph@v0.2.28/cli.ts
```
Note: Higher level permissions will override lower level perms. If you give access to /tmp, it will automatically give access to /tmp/file, /tmp/test/file.

## Permissions API
Code can ask for permissions to be granted dynamically using the Deno.permissions API. 

```ts
// We will use utility functions from deno’s standard library to query and prompt for permissions.
import {  grant, grantOrThrow } from "https://deno.land/std@0.92.0/permissions/mod.ts"

// grantOrThrow will throw if permissions are not given. 

const permissions = await grant([{
    name: "env"
}, {
    name: "write",
    path: "/tmp"
}])

// Once prompted and denied, you cannot prompt for permissions again. Any subsequent call will return the previous state.

console.log(permissions)
```

## Web Compatibility
Node’s incompatibility with the web is a huge burden on everyone. Here are few common pain points:

Polyfill browser APIs such as fetch or window.
Build and maintain native packages for web APIs such as USB, GPU, and others. 
Maintain two module systems. (See is-promise incident).
Deal with ambiguous and complex situations when transpiling and bundling. 
Relearn node-specific way to achieve what can be done through web APIs. 

Deno avoids above and future problems by committing to strong compatibility with web standards.

### 1. Web Worker
Web workers are used to write multithreaded code on the web. They are available in Deno with one notable change. You can enable deno namespace for workers and enforce permissions. 

```ts
// Worker will inherit permission of the parent unless you explicitly set permissions.
const worker = new Worker(new URL("./worker.ts", import.meta.url).href, {
  type: "module",
  deno: {
    namespace: true,
    permissions: {
      net: [“deno.land”], // will only be able to access deno.land website.
    },
  },
});
```

### 2. Web GPU
WebGPU API provides a low level, high performance, and cross platform way to program GPU hardware. The spec isn’t finalized. Deno and most browsers support it through an experimental flag. 

<https://github.com/gpuweb/gpuweb/wiki/Implementation-Status>

```sh

# Let’s run an example.
deno run --unstable https://deno.com/v1.8/webgpu_discover.ts
# If you have a supported GPU, this script will tell you.

# Let’s run another example. This script will render a cube and save it to a PNG file.
deno run  --unstable --allow-write=.  https://crux.land/4KtnG8

# Open it
./output.png
```
You can open the URL in the browser to see what the code looks like. More examples can be found in this repo: <https://github.com/crowlKats/webgpu-examples>

Note: WSL2 users will need to be on insider and have graphics drivers for wsl installed.

### 3. Local Storage And Session Storage
Deno supports local storage and session storage. Persistence is achieved using sqlite behind the scenes.  
```ts
localStorage.setItem('deno', 'good dinosaur')
console.log(localStorage.getItem('deno'))
localStorage.removeItem('deno')
localStorage.clear()
```
```sh
# Set location. 
deno run --location=https://myapp script.ts
```

### 4. Import Map
Import map lets you rewire your code imports.  

```json
{
    "imports": {
        "std/": "https://deno.land/std@0.97.0/",
        "npm/": "https://esm.sh/"
    }
}

```

```ts
// Only for illustration purposes. Don’t use this approach.
import { VERSION } from "std/version.ts"

import Markdown from "npm/markdown-it"
const md = new Markdown()

console.log(md.render(`# Hello, I am using std@${VERSION}`))
```
```sh
deno run --import-map=./import_map.json script.ts
```

More: <https://docs.google.com/document/d/1vFQzbmxg9ilpg8CT_P8roEYcpTfZ06Q5N4J9-ZQqqZo/edit>

You can look inside extensions to see which web standards are supported: <https://github.com/denoland/deno/tree/main/extensions>

## Tooling
```sh
# lint the code.
deno lint

# format the code.
deno fmt

# bundle the code
deno bundle script.ts script.js

# bundle the code into an executable
deno compile script.ts

# test the code. By default, it will run files ending with {*_,*.,}test.{js,mjs,ts,jsx,tsx} in the current directory. Doc flag will type check examples in comments of your code.
deno test --jobs=4 --doc

# inspect the dependencies
deno info script.ts

# Inspect global cache settings
deno info

# watch the code and restart on changes.
deno run --watch script.ts

# generate docs
deno doc
```

## How do I use my existing node packages?
Use a cdn such as esm.sh or skypack.dev. They will convert npm packages to work with deno. Node modules are polyfilled through <https://deno.land/std/node/>. If your package uses an unavailable node module, it won’t work with deno. You can make a PR to add it in the std.

```ts
import React from "https://esm.sh/react"
// we need ?dts flag to get `X-Typescript-Types` header on skypack.
import ReactDom from "https://cdn.skypack.dev/react-dom@17.0.2?dts"
```

## How do I get auto completion for url imports?
Add this to your vscode config to get import intellisense for your favorite registry (any registry will work as long as they support registry protocol: <https://github.com/denoland/vscode_deno/blob/main/docs/ImportCompletions.md#module-registry-completions>

```json
   "deno.suggest.imports.hosts": {
        "https://deno.land/": true,
        "https://nest.land/": true
   }
```
You should be able to configure this for your favorite editor since it’s implemented inside LSP.

## Isn’t it insecure to import from urls? What if they change code?
No, deno caches any dependencies in DENO_DIR on running any command on the source code. It will use cache for subsequent runs. You can generate a lock file which can later be used to check subresource integrity.

```sh
# Create or update a lockfile
deno cache --lock=deno.lockfile --lock-write deps.ts

# Use lockfile when running a script
deno run --lock=deno.lockfile script.ts
```
Unless you pass `--reload`, deno won’t refetch any of the urls. 

## How do type declarations for external modules work?
This is usually handled by registries by providing a specific header `X-Typescript-Types` in the requests. Deno will automatically fetch types from that. 

You can explicitly provide deno a type declaration file by commenting `@deno-types=path_to_file`.

```ts
// @deno-types=”./some_module.d.ts”
// Remote files are supported as well.
import someModule from "./some_module.js"
```

## How do you use private modules with deno?
Deno will request a file using an Authorization header set to Bearer [TOKEN]. You have to set these in the `DENO_AUTH_TOKENS` environment variable.

```
DENO_AUTH_TOKENS=[token]@deno.land
DENO_AUTH_TOKENS=[token]@deno.land;[token]@example.land:5000
```

## I want a script runner.
Use make, denon, velociraptor or others.  
1. <https://www.gnu.org/software/make/>
2. <https://github.com/denosaurs/denon>
3. <https://velociraptor.run/>

## Which companies use deno?
Github, netlify, fly.io,  appwrite, and many others.

## Code examples

### Http Server
```ts
const body = new TextEncoder().encode("Hello World");

async function handler(conn: Deno.Conn) {
   for await (const { respondWith } of Deno.serveHttp(conn)) {
      respondWith(new Response(body));
    }
}
for await (const conn of Deno.listen({ port: 4000 })) {
   handler(conn)
}
```
```sh
# We will run it with prompt and unstable since native http isn’t stable yet
deno run --unstable --prompt http.ts

# Grant it the perm 
⚠️  ️Deno requests net access to "0.0.0.0:4000". Grant? [g/d (g = grant, d = deny)] g

# Now open browser window and go to http://0.0.0.0:4000
```

### Cat
```ts
const filenames = Deno.args;
for (const filename of filenames) {
  const file = await Deno.open(filename);
  await Deno.copy(file, Deno.stdout);
  file.close();
}
```

### Testing
```ts
import {
  assert,
  assertEquals,
  assertMatch,
  assertStrictEquals,
} from "https://deno.land/std@0.93.0/testing/asserts.ts";
import { v4 } from "https://deno.land/std@0.93.0/uuid/mod.ts";

function square(num: number) {
  return num * num;
}

Deno.test("Test assert functions", () => {
  // Can pass any expression to resolve to truthy or falsey value.
  assert(10 === 10);

  // General equalness between primitives and objects.
  assertEquals(square(4), 16);
  assertEquals({ test: true }, { test: false }, "Test property is not false.");
});

Deno.test("Test more assert functions", () => {
  // let's generate uuid v4 and check with regex if it's valid.
  assertMatch(
    v4.generate(),
    /^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i
  );

  // Strict equality similar to ===. It will fail if references are not equal.
  assertStrictEquals({ test: true }, { test: true }, "Different objects.");
});
```

```sh
# The jobs flag will run test modules in parallel. --job=4. Since we only have a single file, we are okay with default jobs=1. You can split above into multiple to run them in parallel.

deno test --coverage=cov test.ts
```

Shell Tool: <https://deno.land/x/dzx@0.2.3>

## Resources

* Website: https://deno.land/
* Documentation viewer for modules: <https://doc.deno.land/>
* Code and dep visualizer: <https://deno-visualizer.danopia.net/>
* Manual: <https://deno.land/manual>
* Runtime APIs: <https://doc.deno.land/builtin/stable>
* Deno lint rules: <https://lint.deno.land/>
* Standard Library: <https://deno.land/std>
* Benchmark: <https://deno.land/benchmarks>
* Testing: <https://deno.land/manual@v1.10.2/testing>
* FAQs for typescript in deno: <https://deno.land/manual@v1.8.1/typescript/faqs>
* Editor: <https://deno.land/manual@v1.9.0/getting_started/setup_your_environment#editors-and-ides> (Note: jetbrains plugin is broken.)
* Debugging: <https://deno.land/manual@v1.9.0/getting_started/debugging_your_code>
* Deno walkthrough series on youtube: <https://www.youtube.com/channel/UCjg3RCjC2punepJwGYFW7RQ>
* Pastebin for deno: <https://crux.land/>
* Docker Image: <https://github.com/denoland/deno_docker>
* Web platform compat status: <https://wpt.deno.land/>