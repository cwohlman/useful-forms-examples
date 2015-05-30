var doc = new ReactiveVar();

Template.registerHelper('item', function () {
  return doc.get();
});

Template.registerHelper('print', function (value) {
  return JSON.stringify(value, null, 2);
});

var events = {
  'documentSubmit': function (e, tmpl) {
    doc.set(e.doc);
  }
};

Template.simpleForm.events(events);
Template.customizedForm.events(events);