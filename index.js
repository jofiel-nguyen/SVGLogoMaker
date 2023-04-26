import inquirer from 'inquirer';
import fs from 'fs';
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
      name: 'shapeColor',
      message: 'Enter a color keyword or hexadecimal number for the shape color:',
      default: '#FFFFFF'
    }
  ])
  .then(answers => {
    const svgCode = `
      <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="${answers.textColor}" />
        <${answers.shape} cx="150" cy="100" r="80" fill="${answers.shapeColor}" stroke="${answers.textColor}" stroke-width="5" />
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="60" fill="${answers.textColor}">${answers.text}</text>
      </svg>
    `;

    fs.writeFileSync('./examples/logo.svg', svgCode);

    console.log('Generated logo.svg');
    open('logo.svg');
  });
