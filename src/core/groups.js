/**
 *Indexed group-by callbacks by name

 *@type <Record<string, Function>>
 */
export const GROUPS = {
  continent: (country) => country.continent.name,
  language: (country) => country.languages.map((language) => language.name),
};
