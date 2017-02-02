var colors       = require('colors')
var multiline    = require('multiline');
var paint        = require('paint-by-number');
var stringLength = require('string-length');

var family = {};
var colors = {};
var palette = {
  0: 'red',
  1: 'cyan',
  2: 'magenta',
  3: 'yellow'
}

module.exports = mascot;

// This function takes an array of text messages and places them next to the ASCII mascot
function mascot(mascot, text) {
  // if (!mascot.match(/^(sites|apps|emails)$/)) {
  //   mascot = 'jam';
  // }

  if (typeof text === 'string') {
    text = text.split('\n');
  }

  var colorScheme = colors[mascot].split('\n');

  // The mascot image is split into an array of lines, and colored
  var shape = family[mascot];
  shape = shape.split('\n');
  shape = paint(shape, colorScheme, palette);

  // Distance between the mascot and the text
  var baseTextOffset = 5;
  // Number of lines in the mascot image
  var shapeHeight  = shape.length - 1;
  // Number of lines in the message
  var textHeight  = text.length;
  // Vertical offset for message
  var textOffset  = Math.floor((shapeHeight - textHeight) / 2);
  // Longest line length in the mascot image
  var longestLine = getLongestLine(shape);

  // Prepend a newline to each line of the mascot image
  for (var i in shape) {
    shape[i] = '\n ' + shape[i];
  }

  // Append each line of the text message to the mascot image
  for (var i = 0; i < text.length; i++) {
    var offset = textOffset + i;
    var newLine = i > 0 ? '\n' : '';
    var spaceCount = longestLine - stringLength(shape[offset]) + baseTextOffset;

    shape[offset] = shape[offset] + repeatChar(' ', spaceCount) + text[i];
  }

  return shape.join('') + '\n';
}

// Find the longest line in an array of strings
function getLongestLine(shape) {
  var highest = 0;
  for (var i = 0; i < shape.length; i++) {
    var len = stringLength(shape[i]);
    if (len > highest) highest = len;
  }
  return highest;
}

// Thank you: http://stackoverflow.com/a/5450113/492553
function repeatChar(pattern, count) {
  if (count < 1) return '';
  var result = '';
  while (count > 1) {
    if (count & 1) result += pattern;
    count >>= 1, pattern += pattern;
  }
  return result + pattern;
}

// Mascots!
family.jam = multiline(function() {/*

                ######
                ######
                ######
                ######
                ######
                ######
                ######
                ######
                ######
        ###    #######
       ##############
       #############
         ########

*/});

colors.jam = multiline(function() {/*

                000000
                000000
                000000
                000000
                000000
                000000
                000000
                000000
                000000
        000   00000000
       00000000000000
       0000000000000
         00000000

*/});
