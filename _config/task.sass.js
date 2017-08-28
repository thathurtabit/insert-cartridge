/* jshint node: true */

'use strict';

function getTaskConfig(projectConfig) {

	var taskConfig = {
		files: {
			main: {
				src: projectConfig.paths.src.sass + '/main.scss',
				partials: [
					projectConfig.paths.src.sass + '/_settings/*.scss',
					projectConfig.paths.src.sass + '/_tools/_tools.mixins.scss',
					projectConfig.paths.src.sass + '/_tools/_tools.functions.scss',
					projectConfig.paths.src.sass + '/_tools/*.scss',
					projectConfig.paths.src.sass + '/_scope/*.scss',
					projectConfig.paths.src.sass + '/_generic/*.scss',
					projectConfig.paths.src.sass + '/_elements/*.scss',
					projectConfig.paths.src.sass + '/_objects/*.scss',
					projectConfig.paths.src.sass + '/_components/*.scss',
					projectConfig.paths.src.components + '**/*.scss',
					projectConfig.paths.src.sass + '/_trumps/*.scss'
				]
			}
		},
		watch: [
			projectConfig.paths.src.sass + '**/*.scss',
			projectConfig.paths.src.components + '**/*.scss'
		],
		defaultConfig: {
			autoprefixer: {
				browsers: ['>5%']
			},
			mqpacker: {
				sort: true
			},
			pxtorem: {
				replace:   false,
				rootValue: 16
			},
			stylelint: {
				failAfterError: false,
				reporters: [
					{
						formatter: 'string',
						save: projectConfig.dirs.src + '/stylelint.log',
						console: true
					}
				]
			}
		}

	};

	return taskConfig;
}

module.exports = getTaskConfig;
