export class Restaurant {
    public id = -1;
    public name: string;
    public description: string;
    public imageURL: string;

    constructor (name: string, description: string, imageURL: string ) {
        this.name = name;
        this.description = description;
        this.imageURL = imageURL;
    }
}
