import { computed } from '@ember/object';
import DS from 'ember-data';
import { expandAttributeMeta } from 'vault/utils/field-to-attrs';
import fieldToAttrs from 'vault/utils/field-to-attrs';
import AuthConfig from '../../auth-config';

const { attr } = DS;

export default AuthConfig.extend({
  safetyBuffer: attr({
    defaultValue: '72h',
    editType: 'ttl',
  }),

  disablePeriodicTidy: attr('boolean', {
    defaultValue: false,
  }),

  attrs: computed(function() {
    return expandAttributeMeta(this, ['safetyBuffer', 'disablePeriodicTidy']);
  }),

  fieldGroups: computed(function() {
    const groups = [{ default: ['safetyBuffer', 'disablePeriodicTidy'] }];
    debugger; // eslint-disable-line
    return fieldToAttrs(this, groups);
  }),
});
