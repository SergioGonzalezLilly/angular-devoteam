import { browser, by, element } from 'protractor';

export class TasksPage {
  navigateTo() {
    return browser.get('/tasks');
  }

  getParrafoInicialText() {
    return element(by.css('app-tasks p')).getText();
  }
}
