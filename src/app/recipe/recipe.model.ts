export class recipe {
    public name: string;
    public description: string;
    public imagePath: string;

    constructor(recipename: string, desc: string, imgpath: string) {
        this.name = recipename;
        this.description = desc;
        this.imagePath = imgpath;
    }

}

