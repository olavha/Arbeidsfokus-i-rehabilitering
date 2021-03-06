/**
* For development
*/
module.exports = function(grunt) {
    grunt.registerTask('dev', 'Creates a developer-friendly build of the course', [
        '_log-vars',
        'check-json',
        'copy',
        'less:dev',
        'handlebars',
        'create-json-config',
        'schema-defaults',
        'tracking-insert',
        'javascript:dev',
        'watch'
    ]);
}
