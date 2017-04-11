import { AngBeerRaterPage } from './app.po';

describe('ang-beer-rater App', () => {
  let page: AngBeerRaterPage;

  beforeEach(() => {
    page = new AngBeerRaterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
