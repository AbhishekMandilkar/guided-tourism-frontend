const BASE_URL = "https://final-year-backend.herokuapp.com";
export const getMetrics = "/getMetrics";

const requests = {
  getDistanceMetrics: `${BASE_URL}/get-metrics`,
  getHotels: `${BASE_URL}/get-hotels`,
  payment: `${BASE_URL}/payment`,
};
export default requests;
