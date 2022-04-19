let weather = {

    API_KEY: 'a38e08c1d0c454e1f038701c75354ee8',

    init: function(){
        this.events();
    },

    getWeather: function(cityName){

        console.log(cityName)

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${this.API_KEY}`)
            .then((response) => response.json())
            .then(response => console.log(response))

    },

    events: function(){

        let self = this;

        //search click
        document.getElementById('js-search').addEventListener('click',function(event){
            self.getWeather('Lviv');
        });

        //edit click

        //make default click

    }

};

weather.init();