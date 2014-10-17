module.exports = {
  case1: {
    src: 'from/*.js',
    dest: 'to/'
  },
  case2: {
    files: [
      { expand: true, cwd: "from/", src: "app.js", dest: "to/" }
    ]
  }
};
