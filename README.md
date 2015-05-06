# pixl.js
*Greatly reduce the resolution of your images today!*

`pixl.js` is a jQuery plugin that will dynamicaly generate a pixel grid from any image that you supply. The plugin will inject the pixel grid into a `<div>` of your choosing, and will give you programmatic access to the individual pixels in the grid. 

## Basic Usage

1. Include the stylesheet in your page

  ```
  <head>
    <link rel="stylesheet" href="pixl.css">
  </head>
  ```

2. Include the javascript file in your page **after** including jQuery

  ```
  <head>
    <script src="pixl.js"></script>
  </head>
  ```

3. Establish a div that you would like to use for your pixel grid

  ```
  <div id="pixl-grid"></div>
  ```

4. Instantiate pixl however you'd like

  ```
  $( "#pixl-grid" ).pixl(<pixel_grid_width>, <pixel_grid_height>, <pixel_size>, <path_to_image>);
  ```

The parameters are explained below:

**pixel_grid_width**: Desired width of your pixel grid

**pixel_grid_height**: Desired width of your pixel grid

**pixel_size**: Integer between 1-4, 1 being the smallest (10x10) pixel size, 4 being the largest (40x40)

**path_to_image**: Self explanatory
