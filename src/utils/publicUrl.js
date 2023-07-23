export function getPublicUrl(filePath) {
    if (process.env.PUBLIC_URL) {
        return `${process.env.PUBLIC_URL}${filePath}`
    } else {
        return `.${filePath}`
    }
}
