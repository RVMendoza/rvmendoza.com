var Metalsmith = require('metalsmith');
var markdown   = require('metalsmith-markdown');
var templates   = require('metalsmith-templates');


Metalsmith(__dirname)
	.source('./src')
	.use(markdown())
	.use(templates('handlebars'))
	.destination('./build')
	.build(function(err, files) {
				console.log('built')
				if (err) { throw err; }
			});
