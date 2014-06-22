module.exports = function (grunt) {
  grunt.initConfig({
    compass: {                  // Task
      dist: {                   // Target
        options: {              // Target options
          sassDir: 'sass',
          cssDir: 'css',
          environment: 'production'
        }
      }
    },
    watch: {
      options: {
        livereload: true
      },
      css: {
        files: ['sass/*.scss'],
        tasks: ['compass']
      }
    }
    /*,
     dev: {                    // Another target
     options: {
     sassDir: 'sass',
     cssDir: 'css'
     }
     }*/

  });

  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['compass', 'watch']);
}


