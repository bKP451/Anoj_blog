const EleventyFetch = require('@11ty/eleventy-fetch');

/**
 * Get movie information
 *
 * @param {string} url IMDb URL
 * @returns {object} IMDb movie data
 */
module.exports = async url => {
  const imdbId = url.replace(/https:\/\/www.imdb\.com\/title\/(\w*)\/?/, '$1');
  const json = `https://omdbapi.com/?apikey=${process.env.OMDBAPI_TOKEN}&i=${imdbId}`;

  const data = await EleventyFetch(json, {
    duration: '1d',
    type: 'json',
  });

  data.Poster = data.Poster.replace('SX300', 'SX960');

  return data;
};
