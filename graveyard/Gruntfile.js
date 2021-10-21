module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['jshint']);

};

//adding grunt-bump for easier versioning
grunt.loadNpmTasks('grunt-bump');

//options and defaults for grunt-bump config
grunt.initConfig({
  bump: {
    options: {
      files: ['package.json'],
      updateConfigs: [],
      commit: true,
      commitMessage: 'Release v%VERSION%',
      commitFiles: ['package.json'],
      createTag: true,
      tagName: 'v%VERSION%',
      tagMessage: 'Version %VERSION%',
      push: true,
      pushTo: 'upstream',
      gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d',
      globalReplace: false,
      prereleaseName: false,
      metadata: '',
      regExp: false
    }
  },
})

//incorporating babel
grunt.initConfig({
  babel: {
    options: {
      sourceMap: true,
      presets: ["@babel/preset-env"],
    },
    dist: {
      files: {
        "dist/app.js": "src/app.js",
      },
    },
  },
});

grunt.loadNpmTasks('grunt-babel');

grunt.registerTask("default", ["babel"]);