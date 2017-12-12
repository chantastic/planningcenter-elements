# Elements
Home of [@planningcenter/elements](https://github.com/planningcenter/elements).

## Develop

#### Scripts
`npm start`: serve project at [localhost:3000](localhost:3000).

#### Environment
`env.css` provides some environment expections:
* `14px` base font-size
* `border-box` all-the-things

## Minutes

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
* `5u`, `40px/16px`
* `6u`, `48px/18px`