import { CodeExercisesNg2Page } from './app.po';

describe('code-exercises-ng2 App', function() {
  let page: CodeExercisesNg2Page;

  beforeEach(() => {
    page = new CodeExercisesNg2Page();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('code-exercises-ng2 works!');
  });
});
