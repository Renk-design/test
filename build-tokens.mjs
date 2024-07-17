import StyleDictionary from 'style-dictionary';
import { register } from '@tokens-studio/sd-transforms';

// sd-transforms, 2nd parameter for options can be added
// See docs: https://github.com/tokens-studio/sd-transforms
register(StyleDictionary);

const sd = new StyleDictionary({
  source: ['studio.json', 'build/js/variables.js'],
  preprocessors: ['tokens-studio'],
  platforms: {
    css: {
      transformGroup: 'tokens-studio',
      prefix: 'sd',
      buildPath: 'build/css/',
      files: [
        {
          destination: '_variables.css',
          format: 'css/variables',
        },
      ],
    },
  },
});
// optionally, cleanup files first..
await sd.cleanAllPlatforms();
await sd.buildAllPlatforms();
