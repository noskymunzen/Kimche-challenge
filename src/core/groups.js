export const GROUPS = {
  continent: (country) => country.continent.name,
  language: (country) => country.languages.map((language) => language.name),
};
