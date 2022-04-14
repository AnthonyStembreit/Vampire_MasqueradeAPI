const { Clan } = require('../models');
function createClans(disciplines){

const clansData = [
    {
        name: "Brujah",
        disciplines: disciplines.map(item => {
            const {primary_name } =item 
            if(primary_name === "Potence" ||  primary_name === "Celerity"|| primary_name === "Presence"){
                return item._id 
            }
        }),
        description: "Malcontents, punks, rebels and revolutionaries of all stripes make up the ranks of the Brujah. Though the Brujah are certainly a motley rabble with no unifying agenda behind their rebellious actions, they back their ideals with fiery passion matched by few other vampires. Their elders are philosophers and teachers, well-versed in debate and oratory. Their youth are often passionately idealistic, from gangbangers who despise “the Man” to hackers and social workers. Whatever the cause, a Brujah will defend it to the doorstep of Hell. Elders tell of the days when the Brujah were revered as warrior-scholars and philosopher kings. In the modern era, many Brujah band together behind charismatic speakers and leaders of the clan, seeking to rebuild these lost times. Others simply follow for the opportunity to indulge in a little random violence. While the Rabble band together to tear down the strictures of society, they can agree only rarely on what should replace it. When the dust settles from their latest crusade, they disperse back to their disparate lifestyles. As a former clan of warriors, Brujah are often front and center of any force the Camarilla musters to defend its cities. The stereotypical Brujah is seen as an armed-to-the-teeth leather-clad punk with dangerous hair and too many piercings. In fact, Brujah look however they damn well please — from the tweed suits of scholarly elders to grunge and everything in between. Because Brujah are expected to be rebellious, many can get away with outrageous behavior that would not be tolerated among other clans. Many use such underestimation to their advantage to further their causes and surprise more shortsighted clans.",    
    },
    {
        name: "",
        disciplines: [],
        description: "",
        role_play_hints: ""
    },
    {
        name: "",
        disciplines: [],
        description: ""
    },
    {
        name: "",
        disciplines: [],
        description: ""
    },
    {
        name: "",
        disciplines: [],
        description: ""
    },
    {
        name: "",
        disciplines: [],
        description: ""
    },
    {
        name: "",
        disciplines: [],
        description: ""
    },
    {
        name: "",
        disciplines: [],
        description: ""
    },
    {
        name: "",
        disciplines: [],
        description: ""
    },
    {
        name: "",
        disciplines: [],
        description: ""
    },
]
Clan.collection.insertMany(clansData)
}

const seedClans = createClans;

module.exports = {seedClans};