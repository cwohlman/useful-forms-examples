Forms.mixin(Template.simpleForm);

Template.simpleForm.helpers({
  schema: function () {
    return {
      firstName: function (val) {
        if (!val)
          return 'required';
        else
          return (_.isString(val) && val.length > 3) || 'minimum length 3';
      }
      , lastName: function (val) {
        return !val || (_.isString(val) && val.length > 3) || 'minimum length 3';
      }
      , age: function (val) {
        return !val || _.isFinite(val) || 'enter a number';
      }
      , favoriteColor: function (val) {
        return !val || val === 'blue' || 'allowed values: "blue" ';
      }
    };
  }
});