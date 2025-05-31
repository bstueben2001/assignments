axios.get('https://api.vschool.io/pokemon')
    .then(response => { 
        const pokemonList = response.data.objects[0].pokemon
        for(let i = 0; i < pokemonList.length; i++){
            const h1 = document.createElement('h1')
            h1.textContent = pokemonList[i].name
            document.body.appendChild(h1)
        }
})