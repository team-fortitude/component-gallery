import Component from './Component.js';

class Filter extends Component {
    render() {
        const dom = this.renderDOM();
        const input = dom.querySelector('input');

        const onFilter = this.props.onFilter;

        input.addEventListener('input', () => {
            onFilter(input.value);
        });

        return dom;
    }

    renderTemplate() {
        return /*html*/`
        <section>
            <input type="text" name="filter">
        </section>
        `;
    }
}

export default Filter;