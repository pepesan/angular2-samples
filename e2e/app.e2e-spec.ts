import { Angular2SamplesPage } from './app.po';

describe('angular2-samples App', function() {
  let page: Angular2SamplesPage;

  beforeEach(() => {
    page = new Angular2SamplesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
