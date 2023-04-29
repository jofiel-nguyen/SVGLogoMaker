import inquirer from 'inquirer';
import fs from 'fs';
import * as Shapes from './lib/shapes.cjs';
import { createShape } from './lib/shapes.cjs';
import open from 'open';

inquirer
  .prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters for the logo:',
      validate: function(value) {
        var valid = /^[a-zA-Z0-9]{0,3}$/.test(value);
        return valid || 'Please enter up to three characters (letters or numbers only).';
      }
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter a color keyword or hexadecimal number for the text color:',
      default: '#000000'
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape for the logo:',
      choices: ['circle', 'triangle', 'square']
    },
    {
      type: 'input',
      name: 'shapeSize',
      message: function (answers) {
        switch (answers.shape) {
          case 'circle':
            return 'Enter the radius of the circle in pixels:';
          case 'triangle':
            return 'Enter the base height of the triangle in pixels:';
          case 'square':
            return 'Enter the side length of the square in pixels:';
        }
      },
      default: 50
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter a color keyword or hexadecimal number for the shape color:',
      default: '#FFFFFF'
    }
  ])

  .then(answers => {
    // Create the shape object
    const shape = createShape(answers.shape, answers.shapeColor, answers.textColor,answers.text);

  
  fs.writeFileSync('./examples/logo.svg', shape.draw());

  console.log('Generated logo.svg');
  open('logo.svg');
});
