

module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    particles: {
      install: {
        options: {
          runServices: ['svc|sequence!install/install']
        }
      }
    }
  });

  //Auto load grunt plugins.
  require('glob').sync("grunt-*", {cwd: 'node_modules'}).filter(function(name) {
    return name !== "grunt" && name !== "grunt-cli";
  }).forEach(grunt.loadNpmTasks);


  grunt.registerTask('build', ['particles-build']);
  grunt.registerTask('rebuild', ['particles-rebuild']);
  grunt.registerTask('watch-assets', ['particles-watch']);
  grunt.registerTask('install', ['particles:install']);
  grunt.registerTask('dev', ['particles-develop']);

  grunt.registerTask('default', ['rebuild']); 
};
