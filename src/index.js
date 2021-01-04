const DOMNodeCollection = require('./dom_node_collection');

function $l(selector){
    if (selector instanceof String) {
            const node = document.querySelectorAll(selector);
            const nodeArr = Array.from(node);
            return new DOMNodeCollection(nodeArr);
    } else if (selector instanceof HTMLElement) {
        return new DOMNodeCollection([selector]);
    }
}


window.$l = $l;