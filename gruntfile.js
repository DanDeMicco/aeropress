'use strict'

module.exports = function (grunt) {
	grunt.initConfig({
		watch: {
			files: ['public/**/*.html', 'public/**/*.js'],
			tasks: ['less:development'],
			options: {
				livereload: true,
			},
		},
		less: {
			development: {
				files: {
					"assets/combined.css": "public/css/*.less"
				},
				compress: true
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.registerTask('default', ['less:development']);

};