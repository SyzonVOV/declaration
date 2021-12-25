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

export function createPersonObject(string: string): IMember {

    let personArr = string.split(' ');
    return {
        'surname': personArr[0],
        'name': personArr[1],
        'fathername': personArr[2],
        'status': 'none'
    }
};

// type TResultCreatePersonObject = ReturnType<typeof createPersonObject>

// export interface IMember extends TResultCreatePersonObject {
//     status: 'none'|'good'|'bad'
// }

export interface IMember {
    surname: string
    name: string
    fathername: string
    status: 'none' | 'good' | 'bad'
}