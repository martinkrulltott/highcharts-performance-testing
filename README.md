# Highcharts performance

### Installation

```
npm install
```

### Start Dev Server

```
npm start
```


### Configuring the tests
- Go to `src/scripts/index.js`
- `POINTS` sets the number of points to generate
- `TURBO` toggles the turbo mode on/off

- The `boost module` can be toggled with the following line in `src/index.html`: `<script src="https://code.highcharts.com/modules/boost.js"></script>`

### Viewing the results
- Run the dev server and open the console
- The results will be shown in the console, where ´scatter´ represents the timer
- Example output:
```
------------------------------
Turbo: on
2000 points
scatter: 3140.81396484375 ms
------------------------------
```
