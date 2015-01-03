'use strict';

module.exports = function (grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Configurable paths for the application
    var appConfig = {
        app: 'src',
        dist: 'dist'
    };

    grunt.initConfig({
        // Project settings
        pkg: grunt.file.readJSON('package.json'),
        appConfig: appConfig,
        // Empties folders to start fresh
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '<%= appConfig.dist %>/{,*/}*'
                    ]
                }]
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                '<%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            minimize: {
                options: {
                    beautify: false,
                    compress: true,
                    sourceMap: true
                },
                files: {
                    '<%= appConfig.dist %>/locationpicker.jquery.min.js': ['<%= appConfig.app %>/*.js']
                }
            },
            beautify: {
                options: {
                    beautify: {
                        width: 80,
                        beautify: true
                    },
                    compress: false,
                    sourceMap: false,
                    mangle: false
                },
                files: {
                    '<%= appConfig.dist %>/locationpicker.jquery.js': ['<%= appConfig.app %>/*.js']
                }
            }
        }
    });

    grunt.registerTask('build', [
        'clean:dist',
        'uglify:minimize',
        'uglify:beautify'
    ]);

};