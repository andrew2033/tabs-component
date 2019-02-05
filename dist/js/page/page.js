import Tabs from './components/tabs.js';
import bdService from './services/bd-service.js';

export default class Page {
  constructor({ element }) {
    this._element = element;

    this.tabsComponent = new Tabs({
      element: this._element.querySelector('[data-component="tabs"]'),
      tabs: bdService.getAll()
    });

    this.tabsComponent.subscribe(
      'tab-selected', 
      (selectedTabLink) => { 
        this.tabsComponent.setTab(selectedTabLink);
    });
  }
}
