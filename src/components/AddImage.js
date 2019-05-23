import Component from './Component.js';

class AddImage extends Component {

    render() {
        const form = this.renderDOM();
        const onAdd = this.props.onAdd;

        form.addEventListener('submit', event => {
            event.preventDefault();

            const formData = new FormData(form);
            const newImage = {
                url: formData.get('link'),
                title: formData.get('title'),
                description: formData.get('description'),
                horns: formData.get('horns')
            };

            onAdd(newImage);

            form.reset();
            document.activeElement.blur();
        });

        return form;
    }
    
    renderTemplate() {
        return /*html*/`
            <form>
                <label>Image Title:
                    <input type="text" name="title" required>
                </label>
                <label>Description:
                    <input type="text" name="description" required>
                </label>
                <label>Link:
                    <input type="text" name="link" required>
                </label>
                <label>Horns:
                    <input type="number" name="horns" required>
                </label>
                <button>You know what to do</button>
            </form>
        `;
    }
}

export default AddImage;