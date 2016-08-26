module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({});
  grunt.registerTask('default', []);

  grunt.initConfig({
    jade: {
      compile: {
        options: {
          pretty: true,
        },
        files: {
          'views/dist/offers.html': 'views/offers.jade',
          'views/dist/index.html': 'views/layout.jade'
        }
      }
    },
    watch: {
      grunt: { files: ['Gruntfile.js'] },
      jade: {
        files: 'views/*.jade',
        tasks: ['jade']
      }
    }
  });
  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jade');
  // Default task.
  grunt.registerTask('build', 'Convert Jade templates into html templates', ['jade']);
};