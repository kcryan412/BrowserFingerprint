(function () {
    function _0x35e938() {
      _0x476666.errors = _0x2f3428;
      var _0x54cc8d = document.createElement('form');
      var _0x2b8107 = document.createElement("input");
      _0x54cc8d.method = "POST";
      _0x54cc8d.action = window.location.href;
      _0x2b8107.type = 'hidden';
      _0x2b8107.name = 'data';
      _0x2b8107.value = JSON.stringify(_0x476666);
      _0x54cc8d.appendChild(_0x2b8107);
      document.body.appendChild(_0x54cc8d);
      _0x54cc8d.submit();
    }
    var _0x2f3428 = [];
    var _0x476666 = {};
    try {
      var _0x8a9e81 = function (_0x337739) {
        if ("object" === typeof _0x337739 && null !== _0x337739) {
          var _0x37d7a9 = function (_0x288df2) {
            try {
              var _0x22e625 = _0x337739[_0x288df2];
              switch (typeof _0x22e625) {
                case "object":
                  if (null === _0x22e625) {
                    break;
                  }
                case 'function':
                  _0x22e625 = _0x22e625.toString();
              }
              _0x376308[_0x288df2] = _0x22e625;
            } catch (_0x212d54) {
              _0x2f3428.push(_0x212d54.message);
            }
          };
          var _0x376308 = {};
          var _0x46d9cf;
          for (_0x46d9cf in _0x337739) _0x37d7a9(_0x46d9cf);
          try {
            var _0x1c6748 = Object.getOwnPropertyNames(_0x337739);
            for (_0x46d9cf = 0x0; _0x46d9cf < _0x1c6748.length; ++_0x46d9cf) {
              _0x37d7a9(_0x1c6748[_0x46d9cf]);
            }
            _0x376308['!!'] = _0x1c6748;
          } catch (_0x332f46) {
            _0x2f3428.push(_0x332f46.message);
          }
          return _0x376308;
        }
      };
      _0x476666.screen = _0x8a9e81(window.screen);
      _0x476666.window = _0x8a9e81(window);
      _0x476666.navigator = _0x8a9e81(window.navigator);
      _0x476666.location = _0x8a9e81(window.location);
      _0x476666.console = _0x8a9e81(window.console);
      _0x476666.documentElement = function (_0x54fcb4) {
        try {
          var _0xb1e1bf = {};
          _0x54fcb4 = _0x54fcb4.attributes;
          for (var _0x491abf in _0x54fcb4) {
            _0x491abf = _0x54fcb4[_0x491abf];
            _0xb1e1bf[_0x491abf.nodeName] = _0x491abf.nodeValue;
          }
          return _0xb1e1bf;
        } catch (_0x2be3db) {
          _0x2f3428.push(_0x2be3db.message);
        }
      }(document.documentElement);
      _0x476666.document = _0x8a9e81(document);
      try {
        _0x476666.timezoneOffset = new Date().getTimezoneOffset();
      } catch (_0x80d09e) {
        _0x2f3428.push(_0x80d09e.message);
      }
      try {
        _0x476666.closure = function () {}.toString();
      } catch (_0x1045f4) {
        _0x2f3428.push(_0x1045f4.message);
      }
      try {
        _0x476666.touchEvent = document.createEvent("TouchEvent").toString();
      } catch (_0x4b79ee) {
        _0x2f3428.push(_0x4b79ee.message);
      }
      try {
        _0x8a9e81 = function () {};
        var _0x373d9f = 0x0;
        _0x8a9e81.toString = function () {
          ++_0x373d9f;
          return '';
        };
        console.log(_0x8a9e81);
        _0x476666.tostring = _0x373d9f;
      } catch (_0x259307) {
        _0x2f3428.push(_0x259307.message);
      }
      window.navigator.permissions.query({
        'name': "notifications"
      }).then(function (_0xff6da6) {
        _0x476666.permissions = [window.Notification.permission, _0xff6da6.state];
        _0x35e938();
      }, _0x35e938);
      try {
        var _0x2525cd = document.createElement('canvas').getContext('webgl');
        var _0x371795 = _0x2525cd.getExtension('WEBGL_debug_renderer_info');
        _0x476666.webgl = {
          'vendor': _0x2525cd.getParameter(_0x371795.UNMASKED_VENDOR_WEBGL),
          'renderer': _0x2525cd.getParameter(_0x371795.UNMASKED_RENDERER_WEBGL)
        };
      } catch (_0x2b4a69) {
        _0x2f3428.push(_0x2b4a69.message);
      }
    } catch (_0x13cce5) {
      _0x2f3428.push(_0x13cce5.message);
      _0x35e938();
    }
  })();