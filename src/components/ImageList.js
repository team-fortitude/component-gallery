import Component from './Component.js';

class ImageList extends Component {
    renderTemplate() {
        return /*html*/`
            <ul id="image-list"></ul>
        `;
    }
}

export default ImageList;