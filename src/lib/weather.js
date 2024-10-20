const API_URL = 'https://api.open-meteo.com/v1/forecast';

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * @typedef {Object} Forecast
 * @property {string} time
 * @property {number} temperature
 * @property {number} precipitation
 */

/**
 * Tekur við gögnum frá Open Meteo og skilar fylki af spám í formi Forecast.
 * @param {unknown} data Gögn frá Open Meteo.
 * @returns {Array<Forecast>}
 */
function parseResponse(data) {
  // TODO útfæra
}

/**
 * Framkvæmir leit að veðurspám fyrir gefna staðsetningu.
 * @param {number} lat
 * @param {number} lng
 * @returns {Promise<Array<Forecast>>} Fylki af spám fyrir staðsetningu.
 */
export async function weatherSearch(lat, lng) {
  // Querystring sem við viljum senda með leit
  // latitude={lat}&longitude={lng}}&hourly=temperature_2m,precipitation&timezone=GMT&forecast_days=1

  // TODO útfæra
  // Hér ætti að nota URL og URLSearchParams
}
