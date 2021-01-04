class DOMNodeCollection{
    constructor(nodeArr){
        this.nodeArr = nodeArr;  
    }

    html(arg) {
        if (!arg) {
            this.nodeArr[0].innerHTML;
        } else {
            this.nodeArr.forEach((el) => el.innerHTML = arg);
        }
        return this;
    }

    empty() {
        this.html('');
        return this;
    }

    append(...args) {
        args.forEach((el) => {
            if (el instanceof String) {
                this.html(el);
            } else if (el instanceof HTMLElement) {
                this.html(el.outerHTML);
            } else if (el instanceof DOMNodeCollection) {
                el.nodeArr.forEach((ele) => this.html(ele.outerHTML));
            }
        })
        return this;
    }
    
    attr(name, val) {
        if (!val) {
            return this.nodeArr[0].getAttribute(name);
        } else {
            this.nodeArr.forEach((el) => el.setAttribute(name, val));
            return this;
        }
    }

    addClass(className) {
        this.nodeArr.forEach((el) => {
            let previousClass = el.getAttribute("class")
            el.setAttribute("class", previousClass + " " + className)})
    }
    removeClass(className) {
        this.nodeArr.forEach((el) => {
            let previousClass = el.getAttribute("class")
            el.setAttribute("class", previousClass.replace(className, ""));
        })
    }

    children() {
        let childrenNode = [];
        this.nodeArr.forEach((el) => {
            childrenNode.push(el.children);
        })
        return new DOMNodeCollection(childrenNode);
    }

    parent() {

    }

    find() {

    }
    remove() {

    }
}


module.exports = DOMNodeCollection;