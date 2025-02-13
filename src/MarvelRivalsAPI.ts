const axios = require('axios');

class MarvelRivalsApi {
    apikey: string;
    apiUrl = `https://marvelrivalsapi.com/api/v1/`;
    constructor(apikey: string){
        this.apikey = apikey;
    }

    private async _makeRequest(endpoint?: string, query?: string, details?: string){
        let request = axios.get(`${this.apiUrl}${endpoint ? endpoint +'/' : ''}${query ? query + '/' : ''}${details ? details + '/': ''}`,{headers: { 'x-api-key': this.apikey }})
        .then( 
            (response: any) => {return response.data})
        .catch((error: any) => {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log('Error', error.message);
            }
            console.log(error.config);
        });
        return request; 
    }

    async checkAPIStatus(){
        this._makeRequest()
    }

    async getPlayerData(playerToFind:string){
        this._makeRequest('player',playerToFind,'update');
        await new Promise(resolve => setTimeout(resolve, 1000));
        return this._makeRequest('player',playerToFind);
    }
}

export {MarvelRivalsApi}