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
          uglify: {
              my_target: {
                files: {
                    'client/dist/scripts.min.js': [
                      'client/js/*',
                      'client/utils/*.js',
                      'client/module/home/*.js',
                      'client/module/badrequest/*.js',
                      'client/module/search/*.js',
                      'client/module/searchByProvince/*.js'
                    ]
                }
              }
          }
        }
  });


  grunt.registerTask('default', ['watch']);
};