import { ShoppingListAngularjsPage } from './app.po';

describe('shopping-list-angularjs App', () => {
  let page: ShoppingListAngularjsPage;

  beforeEach(() => {
    page = new ShoppingListAngularjsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
