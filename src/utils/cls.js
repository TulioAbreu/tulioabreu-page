export function cls(...args) {
    return args?.filter((x) => x).join(" ") ?? "";
}
