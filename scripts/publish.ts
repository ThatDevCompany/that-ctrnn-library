import {BuildUtils} from 'that-dev-library';

BuildUtils
	.npmPublish('dist', (pkg) => {
		delete pkg.scripts;
	})
	.subscribe();
