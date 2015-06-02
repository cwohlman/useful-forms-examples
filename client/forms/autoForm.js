Forms.mixin(Template.autoForm);

Template.autoForm.helpers({
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
  , fields: function () {
    return [
      {
        name: 'firstName'
        , 'class': 'firstName'
        , title: 'First Name'
        , type: 'text'
      }
      , {
        name: 'lastName'
        , 'class': 'lastName'
        , title: 'First Name'
        , type: 'text'
      }
      , {
        name: 'age'
        , 'class': 'age'
        , title: 'Age'
        , type: 'number'
      }
      , {
        name: 'favoriteColor'
        , 'class': 'favoriteColor'
        , title: 'Favorite Color'
        , type: 'text'
      }
    ];
  }
});

Template.autofield.helpers({
  errorClass: function () {
    return this.form.error(this.field.name) ? 'has-error' : '';
  }
});