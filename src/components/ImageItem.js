import Component from './Component.js';

class ImageItem extends Component {
        
    renderTemplate() {
        const image = this.props.image;
        return /*html*/`
            <li class="image">
                <h2>${image.title}</h2>
                <img src="${image.url}" alt="${image.description}">
            </li>
        `;
    }

}

export default ImageItem;