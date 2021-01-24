const domen = 'http://module2/'

export default {

  callApi(query, params) {
    return async () => {
      let response = await fetch(query, {
        method: 'GET'
      });
    
      let data = await response.json();
      return data
    }
  },

  getFlights(param) {
    let result = this.callApi(`${domen}api/flight/${param}`)
    let data  = result()
    return data
  },

  getAirports(param) {
    let result = this.callApi(`${domen}api/airport${param}`)
    let data  = result()
    return data
  }
}
