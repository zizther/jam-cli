var fs = require('fs');
var path = require('path');
var path = require('path');

module.exports = function(options) {
  var questions = [];

  if (!options.directory) {
    questions.push({
      type: 'input',
      name: 'directory',
      message: 'What\'s the project called? (no spaces, use dashes)',
      validate: function(input) {
        var folder = path.join(process.cwd(), input);
        if (fs.existsSync(folder)) {
          return 'There\'s already a folder with that name in this directory.';
        }
        if (input.indexOf(" ") != -1) {
          return "The project name should not contain any spaces.";
        }
        return true;
      }
    });
  }

  if (!options.webroot) {
    questions.push({
      type: 'input',
      name: 'webroot',
      message: 'Which directory is your webroot? (Use ' + './'.red + ' for the current directory)',
      default: 'public',
      validate: function(input) {
        if (input.indexOf(" ") != -1) {
          return "The directory name should not contain any spaces.";
        }
        return true;
      }
    });
  }

  if (!options.vue) {
    questions.push({
      type: 'confirm',
      name: 'vue',
      message: 'Would you like to use Vue in this project?'
    });
  }

  if (!options.vueroutes) {
    questions.push({
      type: 'input',
      name: 'vueroutes',
      message: 'List the routes you need (Comma seperated)',
      when: function(answers) {
        return answers.vue == true || options.vue == true;
      }
    });
  }

  return questions;
}
