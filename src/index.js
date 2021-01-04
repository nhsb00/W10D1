const DOMNodeCollection = require('./dom_node_collection');

function $l(selector){
    switch(typeof selector ){
        case 'string':
            if(selector instanceof HTMLElement)
            const node = document.querySelectorAll(selector);
            const nodeArr = Array.from(node);
            return new DOMNodeCollection(nodeArr);
        case 'HTMLElement':
            

    }
        
}

window.$l = $l;