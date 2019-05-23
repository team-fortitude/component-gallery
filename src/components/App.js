import Component from './Component.js';
import Header from './Header.js';
import ImageList from './ImageList.js';
import images from '../../data/images.js';
import AddImage from './AddImage.js';
import Filter from './Filter.js';
import filterImages from '../filter-images.js';

class App extends Component {

    render() {
        const dom = this.renderDOM();

        const header = new Header();
        const headerDOM = header.render();
        
        const filter = new Filter({
            onFilter: (filter) => {
                const newImages = filterImages(filter, images);
                imageList.update({ images: newImages });
            }
        });

        const filterDOM = filter.render();

        const imageList = new ImageList({ 
            images,
            onRemove: (imageToRemove) => {
                const index = images.indexOf(imageToRemove);

                images.splice(index, 1);
                imageList.update({ images });
            }
        });

        const imageListDOM = imageList.render();

        const addImage = new AddImage({
            onAdd: newImage => {
                images.unshift(newImage);
                imageList.update({ images });
                filter.update();
            }
        });

        const addImageDOM = addImage.render();

        const main = dom.querySelector('main');
        main.appendChild(filterDOM);

        main.appendChild(addImageDOM);

        main.appendChild(imageListDOM);

        dom.insertBefore(headerDOM, main);

        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <div>
                <main></main>
            </div>
        `;
    }
}

export default App;