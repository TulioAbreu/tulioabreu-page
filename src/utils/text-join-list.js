export function textJoinList(list) {
    if (!list?.length) {
        return '';
    }
    if (list.length === 1) {
        return list[0];
    }
    const initialElements = list.slice(0, -1);
    const lastElement = list[list.length - 1];
    return `${initialElements.join(', ')} e ${lastElement}`;
}
