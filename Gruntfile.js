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
            site: {
                files: {
                    '_includes/main.css': 'less/_build.less'
                }
            }
        },
        imagemin: {
            png: {
                options: {
                    optimizationLevel: 7
                },
                files: [{
                    expand: true,
                    cwd: 'assets/',
                    src: ['**/*.png'],
                    dest: 'assets/',
                    ext: '.png'
                }]
            },
            jpg: {
                options: {
                    progressive: true
                },
                files: [{
                    expand: true,
                    cwd: 'assets/',
                    src: ['**/*.jpg'],
                    dest: 'assets/',
                    ext: '.jpg'
                }]
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
    grunt.registerTask('build', ['htmlmin', 'imagemin']);
};
