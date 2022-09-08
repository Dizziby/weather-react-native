export function getCurrentTime(): string {
    const date = new Date(Date.now())

    return `${date.getHours()} : ${date.getMinutes()}`
}