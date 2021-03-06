module.exports = [
  '$filter',
  function(
    $filter
  ) {
    return function(text, key) {
      try {
        var translate = $filter('translate');
        // Allow translating by field key which helps with large blocks of html.
        if (key) {
          var result = translate(key);
          if (result === key) {
            result = translate(text);
          }
          return result;
        }
        else {
          return translate(text);
        }
      }
      catch (e) {
        return text;
      }
    };
  }
];
