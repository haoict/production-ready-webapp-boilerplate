import assert from 'assert';
import path from 'path';
import fs from 'fs';
import ip from 'ip';

const STORYBOOK_PORT = 9090;

export class VisualRegressionTest {
  constructor(path, elementClassName) {
    this.componentFilePath = path;
    this.fileNames = this.getTestCaseNames();
    this.componentName = this.getComponentFileName();
    this.elementClassName = elementClassName;
  }

  run() {
    describe(`visual regression for "${this.componentName}"`, () => {
      const expectedDirPath = `${this.componentFilePath}/expected`;
      const actualDirPath = `${this.componentFilePath}/actual`;
      const diffDirPath = `${this.componentFilePath}/diff`;

      this.fileNames.forEach((testCase) => {
        it(`should return the screenshot of "${testCase}"`, async () => {
          await this.openTestCase(testCase);
          /*
           * Why?
           ** The storybook started and generate the class name with hash (A)
           ** The test runs, it imports the style and generate the class name hash (B)
           ** (A) !== (B)
           * Solution
           ** Use the "^=" to get the prefix matched
           */
          // const prefixElementContainer = this.elementClassName && this.elementClassName.split('--')[0];
          const screenshotName = `${this.componentName}-${testCase}`;
          const element = await this.getElement();
        

          // Documentation
          // https://github.com/wswebcreation/webdriver-image-comparison/blob/master/docs/OPTIONS.md#method-options
          const methodOptions = {
            actualFolder: actualDirPath,
            // The baseline folder and the file name
            baselineFolder: expectedDirPath,
            // This following folder is optional and only if there is a mismatch
            // The folder that holds the diffs and the file name
            diffFolder: diffDirPath,
          };
          const actual = await browser.checkElement(element, screenshotName, methodOptions)
          assert.equal(actual, 0);
        });
      });
    });
  }

  async openTestCase(name) {
    await browser.url(
      `http://${ip.address()}:${STORYBOOK_PORT}/iframe.html?id=${this.componentName}--${name}`
    );
  }

  async getElement() {
    return await this.elementClassName ? $(`[class="${this.elementClassName}"]`) : $('html');
  }

  getTestCaseNames() {
    return fs
      .readdirSync(path.dirname(`${this.componentFilePath}`))
      .filter((item) => item.includes('.story.jsx'))
      .map((item) => path.basename(item, '.story.jsx'));
  }

  getComponentFileName() {
    return path.basename(path.dirname(path.dirname(this.componentFilePath)));
  }
}