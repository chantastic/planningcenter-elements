# Elements
Home of [@planningcenter/elements](https://github.com/planningcenter/elements).

## Usage
Order matters.
Import `blocks.css` before the rest in your app.

### link

#### Build
You can link the built library in your app or codebin:

<link rel="stylesheet" href="https://unpkg.com/@planningcenter/elements@0.0.3/dist/index.css" />

### Packages
Individual packages live in the `/css` directory:

<link rel="stylesheet" href="https://unpkg.com/@planningcenter/elements@0.0.3/css/blocks.css" />
<link rel="stylesheet" href="https://unpkg.com/@planningcenter/elements@0.0.3/css/blocks-action.css" />
<link rel="stylesheet" href="https://unpkg.com/@planningcenter/elements@0.0.3/css/blocks-box.css" />
<link rel="stylesheet" href="https://unpkg.com/@planningcenter/elements@0.0.3/css/blocks-notice.css" />
<link rel="stylesheet" href="https://unpkg.com/@planningcenter/elements@0.0.3/css/blocks-select.css" />
<link rel="stylesheet" href="https://unpkg.com/@planningcenter/elements@0.0.3/css/blocks-text-input.css" />

### Loader
You know what to do...

## Develop

#### Scripts
`npm start`: serve project at [localhost:3000](localhost:3000).
`npm build`: builds `dist/index.css` from `build.css`

#### Environment
`env.css` provides some environment expections:
* `14px` base font-size
* `border-box` all-the-things
* `Lato` font-family with `400` and `700` variants

## Minutes

### 12/13
#### `height` again
Despite it feeling **terrible** to **everyone**, we revisited Dustin's `height`-technique.
It has the best cross-browser support.

Shims for each element type **are required**—a concession we are open to only because the other methods failed.

```css
.blocks-2 { ... }
input[type="text"].blocks-2 { ... }
select.blocks-2 { ... }
button.blocks-2 { ... }
```

#### `blocks`?
With the height-approach, `blocks` matches my mental model of a small library that forces hight on single-line items.
It's a namespace up-for-grabs.

### 12/12
#### Oops!
* The `line-height` approach doesn't work with FF and IE11
  * IE11 just shits the bed
  * FF doesn't allow you to style `selects` with `line-height`, even with `-moz-appearance: none`
* Bootstrap `.form-control`
  * Doesn't support nesting
  * Line-height issues with `Lato`
  * Didn't work well with the added `button` expectation

### 12/11
#### Approach
* `line-height` all the elements
* `14px` acting base (middle) font-size
* Absolute `8px` boundaries
* BEM-style size-modifiers (for now)
* Worry about naming collisions later:
  * `select`
  * Interfaces default `input[*]` styling

#### First run
* input[text]
* input[checkbox]
* button/input[button/submit]/a
* select

#### Scale
* `2u`, `16px/10px`
* `3u`, `24px/12px`
* `4u`, `32px/14px`
* `5u`, `40px/18px`
* `6u`, `48px/20px`
