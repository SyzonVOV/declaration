export function checkExtension(file: string, ext: 'txt' | 'pic') {
    switch (ext) {
        case 'txt':
            return /\.(txt)$/i.test(file)
        case 'pic':
            return /\.(jpe?g|png|gif)$/i.test(file)
        default:
            break;
    }

};

export function removeExtraSpaces(string: string) {
    return string.replace(/\s+/g, ' ').trim()
};

export function createPersonObject(string: string) {
    let personArr = string.split(' ');
    return { 'surname': personArr[0], 'name': personArr[1], 'fathername': personArr[2] }
};