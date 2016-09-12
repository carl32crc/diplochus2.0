module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.initConfig({
   
      watch: {
            options: {
              livereload: true
            },
            js: {
          files: ['client/js/*',
                  'client/utils/*.js',
                  'client/js/module/home/*.js',
                  'client/js/module/badrequest/*.js',
                  'client/js/module/search/*.js',
                  'client/js/module/searchByProvince/*.js',],
          tasks: ['concat']
      }
    },
    concat:{
      js:{
        src:[
                'client/js/*',
                'client/js/utils/*',
                'client/js/module/home/*',
                'client/js/module/badrequest/*',
                'client/js/module/search/*',
                'client/js/module/searchByProvince/*'
              ],
          dest:'client/dist/scripts.min.js'
      }
    },
          uglify: {
              my_target: {
                files: {
                    'client/dist/scripts.min.js': [
                      'client/js/*',
                      'client/js/utils/*.js',
                      'client/js/module/home/*.js',
                      'client/js/module/badrequest/*.js',
                      'client/js/module/search/*.js',
                      'client/js/module/searchByProvince/*.js'
                    ]
                }
              }
          }
        
  });


  grunt.registerTask('default', ['watch']);
};