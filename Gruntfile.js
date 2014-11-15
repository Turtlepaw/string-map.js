module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    'pkg': grunt.file.readJSON('package.json'),

    'banner': '/*! <%= pkg.name %> v<%= pkg.version %> <https://github.com/luizbills/string-map.js>\n'
            + ' *  Copyright 2014 Luiz "Bills" <luizpbills@gmail.com>\n'
            + ' *  Licensed under MIT License\n'
            + ' */\n',

    '6to5': {
      options: {
        //modules: 'common'
      },
      'dist': {
        files: {
          'dist/<%= pkg.name %>.js': 'src/index.js'
        }
      }
    },

    'uglify': {
      options: {
        banner: '<%= banner %>'
      },
      dist: {
        files: {
          'dist/<%= pkg.name %>.min.js': ['dist/<%= pkg.name %>.js']
        }
      }
    },

    'concat': {
      options: {
        banner: '<%= banner %>'
      },
      dist: {
        src: ['src/intro.js', 'dist/<%= pkg.name %>.js', 'src/outro.js'],
        dest: 'dist/<%= pkg.name %>.js',
      },
    }
  });

  grunt.registerTask('default', ['6to5', 'concat', 'uglify']);

};
