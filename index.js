var Metalsmith = require('metalsmith');
var markdown   = require('metalsmith-markdown');
var templates   = require('metalsmith-templates');
var watch   = require('metalsmith-watch');


Metalsmith(__dirname)
	.source('./src')
	.use(markdown())
	.use(templates('handlebars'))
	.destination('./build')
	.use(watch({
		pattern : '**/*',
		livereload: true
	}))
	.build(function(err, files) {
				console.log('built')
				if (err) { throw err; }
			});
