/**
 * @author fengweifeng
 * @version 1.0
 */
var WF = function(id){
    return document.getElementById(id);
};

WF.U = {
    hasClassName: function(elem, className){
        var cname = elem.className || '';
        return cname.length > 0 && (cname == className || new RegExp('(^|\\s)' + className + '(\\s|$)').test(cname));
    },
    addClassName: function(elem, className){
        if (!this.hasClassName(elem, className)) {
            elem.className += (elem.className ? ' ' : '') + className;
        }
    },
    removeClassName: function(elem, className){
        if (this.hasClassName(elem, className)) {
        	elem.className = 
        }
    }
};
