
module.exports = {
    helpers: {
      raw: options => options.fn(this)
    },
    skipInterpolation: [
      "**/*.vue",
      ".circleci/*.*"
    ],
    prompts: {
      name: {
        'type': 'string',
        'required': true,
        'message': 'NPM package name'
      },
      description: {
        'type': 'string',
        'message': 'Project description',
      },
      github: {
        'type': 'string',
        'message': 'Github repository (user/repo)'
      },
      author: {
        'type': 'string',
        'message': 'Author'
      },
    },
    completeMessage: '{{#inPlace}}To get started:\n\n  npm i \n  npm run dev{{else}}To get started:\n\n  cd {{destDirName}}\n  npm i \n  npm run dev{{/inPlace}}'
  };