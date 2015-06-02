Forms.mixin(Template.customizedForm);

Template.customizedForm.helpers({
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

Template.customizedForm.events({
  'keyup': function (e, tmpl) {
    Forms.change(e, tmpl);
    Forms.validate(Forms.call('doc'), Forms.call('schema'));
  }
  , change: function (e, tmpl) {
    Forms.submit(e, tmpl);
  }
  , submit: function (e, tmpl) {
    var doc = e.doc || {};
    doc.attempts = (doc.attempts || 0) + 1;
    tmpl.doc.set(doc);
  }
});