(function () {

  function submit_results() {
    results.errors = errors;
    var form = document.createElement('form');
    var input = document.createElement("input");
    form.method = "POST";
    form.action = window.location.href;
    input.type = 'hidden';
    input.name = 'data';
    input.value = JSON.stringify(results);
    form.appendChild(input);
    document.body.appendChild(form);
    form.submit();
  }

  var errors = [];
  var results = {};
  try {
    var parse_obj = function (browser_property) {
      if ("object" === typeof browser_property && null !== browser_property) {

        var save_results = function (item) {
          try {
            var item_value = browser_property[item];
            switch (typeof item_value) {
              case "object":
                if (null === item_value) {
                  break;
                }
              case 'function':
                item_value = item_value.toString();
            }
            result[item] = item_value;
          } catch (exception) {
            errors.push(exception.message);
          }
        };
        
        var result = {};
        var property;
        for (property in browser_property) save_results(property);
        try {
          var property_names = Object.getOwnPropertyNames(browser_property);
          for (property = 0x0; property < property_names.length; ++property) {
            save_results(property_names[property]);
          }
          result['!!'] = property_names;
        } catch (exception) {
          errors.push(exception.message);
        }
        return result;
      }
    };
    results.screen = parse_obj(window.screen);
    results.window = parse_obj(window);
    results.navigator = parse_obj(window.navigator);
    results.location = parse_obj(window.location);
    results.console = parse_obj(window.console);
    
    results.documentElement = function (element) {
      try {
        var element_results = {};
        element = element.attributes;
        for (var attribute in element) {
          attribute = element[attribute];
          element_results[attribute.nodeName] = attribute.nodeValue;
        }
        return element_results;
      } catch (exception) {
        errors.push(exception.message);
      }
    }(document.documentElement);

    results.document = parse_obj(document);

    try {
      results.timezoneOffset = new Date().getTimezoneOffset();
    } catch (exception) {
      errors.push(exception.message);
    }

    try {
      results.closure = function () { }.toString();
    } catch (exception) {
      errors.push(exception.message);
    }

    try {
      results.touchEvent = document.createEvent("TouchEvent").toString();
    } catch (exception) {
      errors.push(exception.message);
    }

    try {
      parse_obj = function () { };
      var counter = 0x0;
      parse_obj.toString = function () {
        ++counter;
        return '';
      };
      console.log(parse_obj);
      results.tostring = counter;
    } catch (exception) {
      errors.push(exception.message);
    }
    
    window.navigator.permissions.query({
      'name': "notifications"
    }).then(function (permission) {
      results.permissions = [window.Notification.permission, permission.state];
      submit_results();
    }, submit_results);
    try {
      var webgl = document.createElement('canvas').getContext('webgl');
      var renderer = webgl.getExtension('WEBGL_debug_renderer_info');
      results.webgl = {
        'vendor': webgl.getParameter(renderer.UNMASKED_VENDOR_WEBGL),
        'renderer': webgl.getParameter(renderer.UNMASKED_RENDERER_WEBGL)
      };
    } catch (exception) {
      errors.push(exception.message);
    }
  } catch (exception) {
    errors.push(exception.message);
    submit_results();
  }
})();