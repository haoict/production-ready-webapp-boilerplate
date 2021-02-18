import { VisualRegressionTest } from '../../../../../lib/test/visual-regression-test';

// pass elementClassName selector as null to capture the whole html
new VisualRegressionTest(__dirname, null).run();
