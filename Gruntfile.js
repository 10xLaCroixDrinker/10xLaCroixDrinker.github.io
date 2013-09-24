module.exports = function(grunt) {

  grunt.initConfig({
  	pkg: grunt.file.readJSON('package.json'),

    exec: {
      delete_out: {
        cmd: 'rm -r ./out'
      },

      generate: {
        cmd: './node_modules/.bin/docpad generate --env=production'
      },

      run: {
        cmd: './node_modules/.bin/docpad run'
      },

      deploy: {
        cmd: './node_modules/.bin/docpad deploy-gh-pages'
      }
    }
  });

  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-node-version');

  grunt.registerTask('run', ['node_version','exec:run']);
  grunt.registerTask('gen', ['exec:delete_out','node_version','exec:generate']);
  grunt.registerTask('deploy', ['node_version', 'exec:deploy']);
};
