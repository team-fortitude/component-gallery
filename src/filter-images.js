function filterImages(filter, images) {

    const lowerCaseFilter = filter.toLowerCase();

    const filteredTitles = images.filter(image => {
        const lowerCaseTitle = image.title.toLowerCase();

        const textFilter = lowerCaseTitle.includes(lowerCaseFilter);
        const hornFilter = image.horns.toString() === lowerCaseFilter;

        return textFilter || hornFilter;
    });
    
    return filteredTitles;
}

export default filterImages;