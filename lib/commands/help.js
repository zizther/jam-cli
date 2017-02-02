var colors = require('colors');

var helpText = {
  // Each command is an array of strings
  // To print the command, the array is joined into one string, and a line break is added
  // between each item. Basically, each comma you see becomes a line break.
  'default': [
    'Commands:',
    '  new'.cyan + '       Create a new Jam project',
    '  update'.cyan + '    Update an existing Jam project',
    '  watch'.cyan + '     Watch a project\'s files for changes',
    '  build'.cyan + '     Build a project\'s files for production',
    '  help'.cyan + '      Show this screen',
    '  -v'.cyan + '        Display the CLI\'s version',
    '',
    'To learn more about a specific command, type ' + 'jam help <command>'.cyan
  ],
  'new': [
    'Usage:',
    '  jam new ',
    '  jam new ' + '--directory appname',
    '  jam new ' + '--webroot public',
    '  jam new ' + '--vue true',
    '  jam new ' + '--vueroutes home, about, contact',
    '',
    'Creates a new Jam project.',
    'Run the command without any flags to get an interactive setup prompt.',
    'You can also manually supply the framework and folder name using the flags.',
  ],
  'update': [
    'Usage:',
    '  jam update',
    '',
    'Updates an existing Jam project by running "bower update".'
  ],
  'watch': [
    'Usage:',
    '  jam watch',
    '',
    'Assembles your app\'s files and watches for any new changes to the files.',
    'Keep this command running while you work on your project.'
  ],
  'build': [
    'Usage:',
    '  jam build',
    '',
    'Assembles your app\'s files into a production-ready build.'
  ],
  'help': [
    'Okay, don\'t get clever. But seriously:',
    '',
    'Usage:',
    '  jam help',
    '  jam help <command>',
    '',
    'Type ' + 'jam help'.cyan + ' to see a list of every command,',
    'or ' + 'jam help <command>'.cyan + ' to learn how a specific command works.'
  ]
}

module.exports = function(args, options) {
  var say;
  if (typeof args === 'undefined' || args.length === 0) {
    say = 'default'
  }
  else {
    say = args[0]
  }
  // A line break is added before and after the help text for good measure
  say = '\n' + helpText[say].join('\n') + '\n\n'

  process.stdout.write(say);
}
