const $ = (selector) => {
    return document.querySelector(selector);
}

const $$ = (selector) => {
    return Array.prototype.slice.call(document.querySelectorAll(selector));
}

export { $, $$ };
