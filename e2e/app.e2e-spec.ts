import { DateandtimepickerPage } from './app.po';

describe('dateandtimepicker App', () => {
  let page: DateandtimepickerPage;

  beforeEach(() => {
    page = new DateandtimepickerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
