# Steps to get a matrix of 1

Given a matrix of 1s and 0s, return the number of steps to make them all 1s.
How a 0 converts to 1? if there's a 1 near (cross type: left, right, up or down) it can be converted to 1.

Given:

```js
[
  [1,0,0,0],
  [0,1,0,0],
  [0,0,1,0],
  [0,0,0,1]
]
```

First step:

```js
[
  [1,1,0,0],
  [1,1,1,0],
  [0,1,1,1],
  [0,0,1,1]
]
```

Second step:

```js
[
  [1,1,1,0],
  [1,1,1,1],
  [1,1,1,1],
  [0,1,1,1]
]
```

Third step:

```js
[
  [1,1,1,1],
  [1,1,1,1],
  [1,1,1,1],
  [1,1,1,1]
]
```

So the result would be 3.
