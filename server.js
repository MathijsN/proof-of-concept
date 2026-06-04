import express, { response } from 'express'
import { Liquid } from 'liquidjs';

const app = express()

app.use(express.urlencoded({ extended: true }))

app.use(express.static('public'))

const engine = new Liquid()
app.engine('liquid', engine.express())

app.set('views', './views')

// Gebruikers id Anne-Fleur Pietersen

app.get('/', async function (request, response) {

    const sectionsApiResponse = await fetch('https://fdnd-agency.directus.app/items/teylers_museum_exhibits_sections')
    const sectionsApiResponseJSON = await sectionsApiResponse.json()
    const sectionsList = sectionsApiResponseJSON.data

    const exhibitApiResponse = await fetch('https://fdnd-agency.directus.app/items/teylers_museum_exhibits/1')
    const eexhibitApiResponseJSON = await exhibitApiResponse.json()
    const exhibit = eexhibitApiResponseJSON.data

    response.render('index.liquid', { sectionsList, exhibit })
})


app.use((req, res) => {
    res.status(404).render('404.liquid')
})

app.set('port', process.env.PORT || 8010)

app.listen(app.get('port'), function () {
    console.log(`Project draait via http://localhost:${app.get('port')}`)
})