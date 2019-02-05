import Component from '../../component.js';

export default class Tabs extends Component {
  constructor({
    element,
    tabs = [],
  }) {
    super({ element });
    this._element = element;
    this._tabs = tabs;
    this.startContent = this._tabs[0].content;
    this._render();

    this.on('click', 'tab-link', (event) => {
      this.emit('tab-selected', event.target.dataset.link);
    });
  }


  _render() {
    this._element.innerHTML = `
      <div>
        <nav class="tabs__navigation">
          ${this._tabs.map(tab => `
            <a class="tabs__link show" href="#" 
            data-link="${tab.title}" 
            data-element="tab-link">
            ${tab.title}
            </a>
          `)}
        </nav>
        <section class="tabs__wrapper">
            <div
            data-element="tab-content">
              <p>${this.startContent}</p>
            </div>          
        </section>
      </div>
    `;
  }

  setTab(selectedTabLink) {
    this.startContent = this._tabs.find(tab => tab.title === selectedTabLink).content;
    this._render();
  }
}
