import * as yup from 'yup';

export const defaultTerrains = [
  'jungle',
  'rainforests',
  'tundra',
  'ice caves',
  'mountain ranges',
  'desert',
];

const requiredMessage = (prop) => `Property ${prop} is required.`;

const stringTypeError = (prop) => `Property ${prop} should be string.`;

const numberTypeError = (prop) => `Property ${prop} should be number.`;

const schema = yup.object({
  name: yup.string()
    .trim()
    .required(requiredMessage('name'))
    .typeError(stringTypeError('name')),
  rotation_period: yup.number()
    .required(requiredMessage('rotation period'))
    .typeError(numberTypeError('rotation period')),
  orbital_period: yup.number()
    .required(requiredMessage('orbital period'))
    .typeError(numberTypeError('orbital period')),
  diameter: yup.number()
    .required(requiredMessage('diameter'))
    .typeError(numberTypeError('diameter')),
  climate: yup.string()
    .trim().required(requiredMessage('climate'))
    .typeError(stringTypeError('climate')),
  gravity: yup.string()
    .trim()
    .required(requiredMessage('gravity'))
    .typeError(stringTypeError('gravity')),
  surface_water: yup.number()
    .required(requiredMessage('surface water'))
    .typeError(numberTypeError('surface water')),
  terrain: yup.string()
    .trim()
    .oneOf(defaultTerrains, 'This terrain is wrong.')
    .required(requiredMessage('terrain'))
    .typeError(stringTypeError('terrain')),
});

export default schema;
