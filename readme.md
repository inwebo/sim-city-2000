# Sprite.js

## [See the doc !](https://inwebo.github.io/Sprite.js/index.html)

[javascript](https://github.com/topics/javascript), [es6-javascript](https://github.com/topics/es6-javascript), [es6](https://github.com/topics/es6), [sprite](https://github.com/topics/sprite), [spritesheet](https://github.com/topics/spritesheet)

Javascript library to manage sprites sheet, sprites, animated sprites and color transparency sprite with ease.

## Installation

### NPM
```shell script
npm install @inwebo/sprite.js
```

## Dependencies
* [Render.js](https://github.com/inwebo/Render.js) : Render to canvas utility class, abstract the boring parts. (not required)
* [Vector](https://github.com/inwebo/Vector) : Vector manipulation needed for RGB representation. (required)

## Class
* [Sprite.js](./src/Sprite/Sprite.js) : Representation of a sprite as ImageData object. May manipulate pixels to apply transparency to one color.
* [Rgb.js](./src/Rgb/Rgb.js) : Utility class, representation of RGB color.
* [AnimatedSprite.js](./src/AnimatedSprite/AnimatedSprite.js) : Sprite collection to animate, may have a duration (ms).
* [SpriteMap.js](./src/SpriteMap/SpriteMap.js) : Utility class, will build animated sprites from a json file map. [See](docs/doom.json) as example file.
* [RenderSheet.js](./src/RenderSheet/RenderSheet.js) : Utility class to draw image on canvas.
* [RenderSprite.js](./src/RenderSprite/RenderSprite.js) : Utility class to draw image on canvas, may use Sprite transparency.

## Recipe, how to
- Need a sprite sheet as input.
- Need a canvas to [draw image](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage).
- Need coordinate and dimensions of each canvas's sprites. Read [ImageData](https://developer.mozilla.org/en-US/docs/Web/API/ImageData) with [getImageData()](https://developer.mozilla.org/fr/docs/Web/API/CanvasRenderingContext2D/getImageData) at given coordinate.
- May apply transparency to given color of pixel. 
- Need to render ImageData from [Sprite](./src/Sprite/Sprite.js) object on a canvas with [putImageData](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/putImageData).

## Demo

See [index.html](https://inwebo.github.io/Sprite.js/), [demo.js](docs/demo.js), [index.html](docs/index.html.bak).