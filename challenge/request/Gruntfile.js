module.exports = function( grunt ) {
	'use strict';

	var pathCSS = '/' ,
		pathLESS = 'assets/less/';

	// Load all grunt tasks
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	// Project configuration
	grunt.initConfig({
		pkg:    grunt.file.readJSON( 'package.json' ),
		jshint: {
			browser: {
				all: [
					'assets/js/**/*.js'
				],
				options: {
					jshintrc: '.jshintrc'
				}
			},
			grunt: {
				all: [
					'Gruntfile.js'
				],
				options: {
					jshintrc: '.gruntjshintrc'
				}
			}
		},

		less: {
			dev: {
				options: {
					path: pathCSS,
					cleancss: true
				},
				files: {
					'main.css' : 'assets/less/styles.less'
				}
			},
			prod: {
				options: {
					path: pathLESS,
					compress: true,
					cleancss: true
				}
			}
		},

		watch:  {
			dev: {
				files: pathLESS + '*',
				options: {
					reload: true,
					livereload: false
				},
				tasks: [ 'less:dev' ]
			},
			configFiles: {
				files: ['Gruntfile.js'],
				options: {
					reload: true
				}
			}
		},

	});

	// Default task.

	grunt.registerTask( 'default', ['watch:dev'] );


	grunt.util.linefeed = '\n';
}
