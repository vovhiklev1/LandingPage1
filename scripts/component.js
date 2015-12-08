/**
 * Created by Vova on 08.12.2015.
 */
function Component(sSelector) {
    var elem;
    this.init = function (sSelector) {
        elem = $(sSelector);
        if (!elem.length) {
            console.log('error init')
        }
    }
    this.find = function (sSelector) {
        this.find_result = elem.find(sSelector);
        if (this.find_result.length) {
            return this.find_result;
        }
        else {
            console.log('error find_result: ' + sSelector)
        }
    }
};