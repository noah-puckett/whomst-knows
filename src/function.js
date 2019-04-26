function addPart(parentInnerHTML, colorName) {
    const span = document.createElement('span');
    span.classList.add('part');
    span.classList.add(colorName);

    parentInnerHTML.appendChild(span);
}

export default addPart;