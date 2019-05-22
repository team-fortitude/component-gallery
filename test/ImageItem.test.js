import ImageItem from '../src/components/ImageItem.js';

const test = QUnit.test;

QUnit.module('ImageItem');

test('Creates ImageItem from template', (assert) => {
    // Arrange
    const image = {
        'url': 'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg',
        'title': 'UniWhal',
        'description': 'A unicorn and a narwhal nuzzling their horns',
        'keyword': 'narwhal',
        'horns': 1
    };

    const expected = /*html*/`
    <li class="image">
        <h2>UniWhal</h2>
        <img src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg" alt="A unicorn and a narwhal nuzzling their horns">
        <button id="remove">x</button>
    </li>
    `;

    // Act
    const imageItem = new ImageItem({ image });
    const imageItemDOM = imageItem.renderTemplate();
    // Assert
    assert.htmlEqual(imageItemDOM, expected);
});