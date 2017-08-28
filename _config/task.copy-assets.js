/* jshint node: true */

'use strict';

function getTaskConfig(projectConfig) {
	var taskConfig = {
		// build: {
		// 	src: projectConfig.dirs.dest,
		// 	dest: projectConfig.dirs.build
		// }
	};

	return taskConfig;
}

module.exports = getTaskConfig;
