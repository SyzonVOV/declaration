export function checkExtension(file: string, ext: 'txt' | 'pic') {
    switch (ext) {
        case 'txt':
            return /\.(txt)$/i.test(file)
        case 'pic':
            return /\.(jpe?g|png|gif)$/i.test(file)
        default:
            break;
    }

}