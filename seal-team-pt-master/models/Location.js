var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * Location Model
 * ==================
 */

var Location = new keystone.List('Location', {
	autokey: { from: 'name', path: 'key', unique: true }
});

Location.add(
  {
	  name: { type: String, required: true, initial: true },
  }, 
  "pricing", 
  {
    price: {
      oneMonth: { type: Types.Money, required: true, initial: true },
      sixMonths: { type: Types.Money, required: true, initial: true },
      twelveMonths: { type: Types.Money, required: true, initial: true }
    }
  }
);

Location.relationship({ ref: 'Registration', path: 'location' });

Location.register();
