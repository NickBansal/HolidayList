export const alphaSort = (a, b) => {
    var nameA = a.title.toLowerCase(), nameB = b.title.toLowerCase();
    if (nameA < nameB) 
        return -1;
    if (nameA > nameB)
        return 1;
    return 0; 
}