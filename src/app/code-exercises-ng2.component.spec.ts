import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { CodeExercisesNg2AppComponent } from '../app/code-exercises-ng2.component';

beforeEachProviders(() => [CodeExercisesNg2AppComponent]);

describe('App: CodeExercisesNg2', () => {
  it('should create the app',
      inject([CodeExercisesNg2AppComponent], (app: CodeExercisesNg2AppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'code-exercises-ng2 works!\'',
      inject([CodeExercisesNg2AppComponent], (app: CodeExercisesNg2AppComponent) => {
    expect(app.title).toEqual('code-exercises-ng2 works!');
  }));
});
