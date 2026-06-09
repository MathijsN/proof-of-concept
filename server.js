import express, { response } from 'express'
import { Liquid } from 'liquidjs';

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
const engine = new Liquid()
app.engine('liquid', engine.express())
app.set('views', './views')


app.get('/', async function (req, res) {

    const sectionsApiResponse = await fetch('https://fdnd-agency.directus.app/items/teylers_museum_exhibits_sections')
    const sectionsApiResponseJSON = await sectionsApiResponse.json()
    const sectionsList = sectionsApiResponseJSON.data

    const exhibitApiResponse = await fetch('https://fdnd-agency.directus.app/items/teylers_museum_exhibits/1')
    const eexhibitApiResponseJSON = await exhibitApiResponse.json()
    const exhibit = eexhibitApiResponseJSON.data

    const quizApiResponse = await fetch('https://fdnd-agency.directus.app/items/teylers_museum_quiz_questions')
    const quizApiResponseJSON = await quizApiResponse.json()
    const quiz = quizApiResponseJSON.data

    // console.log(quiz)
    console.log(sectionsList)
    res.render('index.liquid', { sectionsList, exhibit, quiz })
})


app.get('/detail/:slug', async function (req, res) {
    const params = new URLSearchParams()
    params.set('filter[slug][_eq]', req.params.slug)

    const sectionsApiResponse = await fetch('https://fdnd-agency.directus.app/items/teylers_museum_exhibits_sections?fields=*.*.*&filter[slug][_eq]=' + req.params.slug)
    const sectionsApiResponseJSON = await sectionsApiResponse.json()
    const sectionsList = sectionsApiResponseJSON.data

    console.log(sectionsList)

    res.render('detail.liquid', { section: sectionsList[0] })
})

app.use((req, res) => {
    res.status(404).render('404.liquid')
})

app.set('port', process.env.PORT || 8010)

app.listen(app.get('port'), function () {
    console.log(`Project draait via http://localhost:${app.get('port')}`)
})