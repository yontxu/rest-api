import { Angular2RestServicePage } from './app.po';

describe('angular2-rest-service App', function() {
  let page: Angular2RestServicePage;

  beforeEach(() => {
    page = new Angular2RestServicePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
