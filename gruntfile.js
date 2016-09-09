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
                  'client/module/home/*.js',
                  'client/module/badrequest/*.js',
                  'client/module/search/*.js',
                  'client/module/searchByProvince/*.js',],
          tasks: ['concat']
      }
    },
    concat:{
      js:{
        src:[
                'client/js/*',
                'client/utils/*.js',
                'client/module/home/*.js',
                'client/module/badrequest/*.js',
                'client/module/search/*.js',
                'client/module/searchByProvince/*.js'
              ],
          dest:'client/dist/scripts.min.js'
      }
    },
          uglify: {
              my_target: {
                files: {
                    'client/dist/scripts.min.js': [
                      'client/js/*',
                      // 'client/utils/*.js',
                      // 'client/module/home/*.js',
                      // 'client/module/badrequest/*.js',
                      // 'client/module/search/*.js',
                      // 'client/module/searchByProvince/*.js'
                    ]
                }
              }
          }
        
  });


  grunt.registerTask('default', ['watch']);
};