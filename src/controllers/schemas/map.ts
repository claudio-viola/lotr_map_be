import { SchemaObject } from './interfaces';

export const mapPlaySchema: SchemaObject = {
  $id: '/map/play',
  additionalProperties: false,
  properties: {
    movements: {
      pattern: '^([n|s|e|w])(([,][n|s|e|w])*)$',
      type: 'string',
    },
  },
  required: [ 'movements' ],
  type: 'object',
};
