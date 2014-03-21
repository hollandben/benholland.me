'use strict';

module.exports = function(grunt) {

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
            options: {
                compress: true
            },
            src: {
                files: {
                    '_includes/main.css': 'less/_build.less'
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
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    useShortDoctype: true,
                    collapseWhitespace: true
                },
                files: [{
                    expand: true,  
                    cwd: '_site/',
                    src: ['**/*.html'],
                    dest: '_site/'
                }]
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
