'use strict';

module.exports = function (grunt) {

  // Load all grunt tasks
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      gruntfile: {
        src: 'Gruntfile.js'
      }
    },
    less: {
      src: {
        files: {
          'css/main.css': 'less/_build.less'
        }
      },
      site: {
        files: {
          '_site/css/main.css': 'less/_build.less'
        }
      }
    },
    shell: {
      jekyll: {
        command: 'jekyll build'
      }
    },
    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      watch: {
        files: ['_layouts/**', '_posts/**', 'css/**'],
        tasks: ['shell:jekyll']
      },
      less: {
        files: 'less/*.less',
        tasks: ['less']
      }
    }
  });

  // Default task.
  grunt.registerTask('default', ['less', 'watch']);

};
