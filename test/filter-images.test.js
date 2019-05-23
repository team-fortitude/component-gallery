import filterImages from '../src/filter-images.js';

const test = QUnit.test;

QUnit.module('Filter Images');

const images = [
    {
        'url': 'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg',
        'title': 'UniWhal',
        'description': 'A unicorn and a narwhal nuzzling their horns',
        'keyword': 'narwhal',
        'horns': 1
    },
    {
        'url': 'https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80',
        'title': 'Rhino Family',
        'description': 'Mother (or father) rhino with two babies',
        'keyword': 'rhino',
        'horns': 2
    },
    {
        'url': 'https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg',
        'title': 'Unicorn Head',
        'description': 'Someone wearing a creepy unicorn head mask',
        'keyword': 'unicorn',
        'horns': 1
    }
];

test('Searches based on text in title', (assert) => {
    // Arrange
    const filter = 'rH';
    // Act
    // now built in as custom assert
    const result = filterImages(filter, images);
    // Assert
    assert.deepEqual(result, [images[1]]);
});

test('Searches based on number of horns', (assert) => {
    // Arrange
    const filter = '2';
    // Act
    // now built in as custom assert
    const result = filterImages(filter, images);
    // Assert
    assert.deepEqual(result, [images[1]]);
});

test('Searches and gets nothing for horns', (assert) => {
    // Arrange
    const filter = '4';
    // Act
    // now built in as custom assert
    const result = filterImages(filter, images);
    // Assert
    assert.deepEqual(result, []);
});

test('Searches and gets nothing for title', (assert) => {
    // Arrange
    const filter = 'asdf';
    // Act
    // now built in as custom assert
    const result = filterImages(filter, images);
    // Assert
    assert.deepEqual(result, []);
});



