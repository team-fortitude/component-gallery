import Component from './Component.js';

class App extends Component {

    render() {
        const dom = this.renderDOM();

        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <div>
                <main>this is placeholder text</main>
            </div>
        `;
    }
}

export default App;