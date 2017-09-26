import { DarwinUiDataviewerPage } from './app.po';

describe('darwin-ui-dataviewer App', function() {
  let page: DarwinUiDataviewerPage;

  beforeEach(() => {
    page = new DarwinUiDataviewerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
