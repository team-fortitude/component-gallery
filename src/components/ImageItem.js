import Component from './Component.js';

class ImageItem extends Component {
    render() {
        const image = this.renderDOM();
        const removeButton = image.querySelector('button');

        const onRemove = this.props.onRemove;
        const imageToRemove = this.props.image;
    
        removeButton.addEventListener('click', () => {
            onRemove(imageToRemove);
        });
        return image;
    }

    renderTemplate() {
        const image = this.props.image;
        return /*html*/`
            <li class="image">
                <h2>${image.title}</h2>
                <img src="${image.url}" alt="${image.description}">
                <button>x</button>
            </li>
        `;
    }

}

export default ImageItem;