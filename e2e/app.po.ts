export class CodeExercisesNg2Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('code-exercises-ng2-app h1')).getText();
  }
}
