const baseHeaders = ['created', 'edited', 'url'];

export const filmsHeaders = [
  ...baseHeaders,
  'species',
  'vehicles',
  'starships',
  'planets',
  'characters',
];

export const residentsHeaders = [
  ...baseHeaders,
  'films',
  'species',
  'vehicles',
  'starships',
  'homeworld',
];

export const planetDetailsHeaders = [
  ...baseHeaders,
  'residentsLink',
  'residents',
  'filmsLink',
  'films',
];

export const planetsHeaders = (withCount) => (!withCount ? [...baseHeaders, 'residents', 'films'] : baseHeaders);

export const getHeaders = (headers) => (value) => headers.indexOf(value) === -1;
