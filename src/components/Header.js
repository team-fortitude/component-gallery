import Component from './Component.js';

class Header extends Component {
    renderTemplate() {
        return /*html*/`
            <header>
                <h1>Horned Animals Gallery</h1>
            </header>
        `;
    }
}

export default Header;