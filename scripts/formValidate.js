var page_settings = {
    'langs': {
        'ua': 'ukrainian'
        , 'it': 'italian'
        , 'de': 'german'
    }
    , 'regexps': {
        'name': '^[a-zA-Z ]{2,30}$'
        ,
        'email': '[^\s@]+@[^\s@]+\.[^\s@]'
        ,
        'subject': '[a-zA-Z0-9]{1,255}'
        ,
        'message': '[a-zA-Z0-9]{1,500}'
    }
};

var settings = {
    data: {},
    init: function (oSelector) {
        settings.data = oSelector;
        if (Object.keys(settings.data).length) {
            console.log('Settings init OK:' + Object.keys(settings.data).length);

        } else {
            console.log('Error Settings init ' + Object.keys(settings.data).length);
        }
    },
    get: function (sSelector) {
        return settings.data[sSelector];
    }
};

function Form_checker(sSelector) {
    var f = this;

    f.check = function (event, showParam) {
        var slideToggle = false;

        var checkThis = function (event, showParam) {
            var self = event;

            var currFieldVal = self.val();
            var curFieldName = self.attr('name');
            var patt = new RegExp(settings.get('regexps')[curFieldName]);
            var res = patt.test(currFieldVal);
            //console.log(res);

            self.toggleClass('b-textfield_error', !res);
            self.toggleClass('b-textfield_ok', res);

            if (!res && showParam == 'all') {
                slideToggle = true;
            }
            ;
        };

        if (showParam == 'single') {
            checkThis(event, showParam);
        }
        if (showParam == 'all') {
            f.textFields.each(function () {
                checkThis($(this), 'all');
            });        }

        // f.errorMessage.toggleClass('b-form__message_error', slideToggle);
        slideToggle ? f.errorMessage.stop().fadeIn("slow", "linear") : f.errorMessage.stop().fadeOut("slow", "linear");
    };

    f.main = function (sSelector) {
        console.log('f.main()');
        settings.init(page_settings);
        f.init(sSelector);

        f.errorMessage = f.find('.b-form__message');
        f.textFields = f.find('.b-textfield');
        f.button = f.find('.b-form__ok-button');
        //f.icon = f.find('.fa');

        f.button.click(function (event) {
            event.preventDefault();
            f.check('', 'all');
        });

        /*f.textFields.blur(function (event) {
         f.check($(event.target), 'single');
         });*/
    };
};


