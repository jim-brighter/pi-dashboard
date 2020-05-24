const $ = (selector, node=null) => {
    node = node || document;
    return node.querySelector(selector);
}

const $$ = (selector, node=null) => {
    node = node || document;
    return Array.prototype.slice.call(node.querySelectorAll(selector));
}

export { $, $$ };
