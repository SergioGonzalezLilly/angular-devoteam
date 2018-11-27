import { HomePage } from './home.po';
import { TasksPage } from './tasks.po';
import { AboutPage } from './about.po';

describe('Homepage de la app', () => {
  let page: HomePage;

  beforeEach(() => {
    page = new HomePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Saludos angular-devoteam!');
  });
});

describe('TasksPage', () => {
  let page: TasksPage;
  beforeEach( () => {
    page = new TasksPage();
  });

  it('inicialmente aparece el párrafo por defecto', () => {
    page.navigateTo();
    expect(page.getParrafoInicialText()).toEqual('tasks works!');
  });

});

describe('AboutPage', () => {
  let page: AboutPage;
  beforeEach( () => {
    page = new AboutPage();
  });

  it('inicialmente aparece el párrafo por defecto', () => {
    page.navigateTo();
    expect(page.getParrafoInicialText()).toEqual('about works!');
  });

});