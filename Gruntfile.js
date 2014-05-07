'use strict';

module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Watch for changes and trigger compass with livereload on CSS files.
    watch: {
      scss: {
        options: {
          livereload: false
        },
        files: ['css/scss/*.scss'],
        tasks: ['compass','concat']
      },
      css: {
        files: ['css/*.css'],
        options: {
          livereload: true
        }
      },
      html: {
        files: ['*.html'],
        options: {
          livereload: true
        }
      },
      js: {
        files: ['js/*.js'],
        options: {
          livereload: true
        }
      }
    },
    concat: {
      css: {
        src: 'css/*.css',
        dest: 'all.css'
      }
    },

    // Compass and SCSS
    compass: {
      options: {
        httpPath: '/',
        cssDir: 'css',
        sassDir: 'css/scss',
        imagesDir: 'images',
        javascriptsDir: 'scripts',
        fontsDir: 'css/fonts',
        assetCacheBuster: 'none',
        environment: 'production',
        outputStyle: 'compact',
        force: true,
      },
      prod: {
        options: {
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('build', [
    'compass:prod',
    'concat'
  ]);

  grunt.registerTask('default', [
    'watch','concat'
  ]);
};
