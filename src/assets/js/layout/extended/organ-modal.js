"use strict";

var AddModalJS = function() {
    // Private properties
    var _element;
    var _offcanvasObject;

    // Private functions
    var _init = function() {
        var header = KTUtil.find(_element, '.offcanvas-header');
        var content = KTUtil.find(_element, '.offcanvas-content');

        _offcanvasObject = new KTOffcanvas(_element, {
            overlay: true,
            baseClass: 'offcanvas',
            placement: 'right',
            closeBy: 'organ-modal-close',
            closeBytwo: 'organ-modal-close-two',
            closeBythree: 'organ-modal-close-three',
            closeByfour: 'organ-modal-close-four',
            toggleBy: 'organ-modal-toggle'
        });

        KTUtil.scrollInit(content, {
            disableForMobile: true,
            resetHeightOnDestroy: true,
            handleWindowResize: true,
            height: function() {
                var height = parseInt(KTUtil.getViewPort().height);

                if (header) {
                    height = height - parseInt(KTUtil.actualHeight(header));
                    height = height - parseInt(KTUtil.css(header, 'marginTop'));
                    height = height - parseInt(KTUtil.css(header, 'marginBottom'));
                }

                if (content) {
                    height = height - parseInt(KTUtil.css(content, 'marginTop'));
                    height = height - parseInt(KTUtil.css(content, 'marginBottom'));
                }

                height = height - parseInt(KTUtil.css(_element, 'paddingTop'));
                height = height - parseInt(KTUtil.css(_element, 'paddingBottom'));

                height = height - 2;

                return height;
            }
        });
    }

    // Public methods
    return {
        init: function(id) {
            _element = KTUtil.getById(id);

            if (!_element) {
                return;
            }

            // Initialize
            _init();
        },

        getElement: function() {
            return _element;
        }
    };
}();



export default AddModalJS;