const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const plants = {
    'succulent': {
        'name': 'succulent',
        'light': '6 hours of sun per day depending on the type.',
        'rotate': 'rotate them often',
        'water': 'test the soil with a finger, when the top 1.25 inches are dry grab your watering can and water them',
    },
    'cactus': {
        'name': 'cactus',
        'light': 'direct light all day, they like temps above 50 degrees F',
        'rotate': 'rotate every now and then',
        'water': 'check soil every few weeks, if the first 2-3 inches of soil are dry its time to water'
    },
    'monstera': {
        'name' : 'monstera',
        'light' : 'bright to medium indirect light',
        'rotate' : 'a quarter turn everywhere from every 3 days to every 2 weeks depending on how much the plant is leaning',
        'water' : 'water every 1-2 weeks, allow soil to dry out between waterings'
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')

})

app.get('/api/:plantName', (request, response) => {
    const plantsName = request.params.plantName.toLowerCase()
    if(plants[plantsName]){
        response.json(plants[plantsName])
    }else {
        response.json(plants['non-plant'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log('Server is running.');
})
