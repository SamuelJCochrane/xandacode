import game1 from '../../assets/game1.jpg';
import game2 from '../../assets/game2.jpg';
import game3 from '../../assets/game3.jpg';
import game4 from '../../assets/game4.jpg';
import uuid from 'uuid/v1'

export class Game {
    constructor(title, blurb, image, price) {
        this.title = title;
        this.blurb = blurb;
        this.image = image;
        this.price = price;
        this.id = uuid();
        this.selected = false;

        this.toggleSelected = this.toggleSelected.bind(this);
    } 

    toggleSelected() {
        this.selected = !this.selected;
    }
}

const battlefront = new Game(
    'Star Wars: Battlefront', 
    "Immerse yourself in the Ultimate Star War's Experience",
    game1,
    300
)

const dyinglight = new Game(
    "Dying Light",
    "Dying Light is an open world first person survival horror action-adventure video game developed by Techland",
    game2,
    500
)

const bloodborne = new Game(
    "Bloodborne",
    "Bloodborne is an action role-playing video game developed by FromSoftware",
    game3,
    9999
)

const evolve = new Game(
    "Evolve",
    "Evolve is a first-person shooter video game developed by Turtle Rock Studios",
    game4,
    150
)

export const gamesArr = [battlefront, dyinglight, bloodborne, evolve]