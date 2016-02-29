var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * MembershipType Model
 * ==================
 */

var MembershipType = new keystone.List('MembershipType', {
	autokey: { from: 'name', path: 'key', unique: true }
});

MembershipType.add(
  {
	  name: { type: String, required: true, initial: true },
    price: { type: Types.Money, required: true, initial: true }
  }
);

MembershipType.register();
