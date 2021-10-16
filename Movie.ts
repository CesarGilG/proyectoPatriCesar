export class movie{
    private title:string;
    private releaseYear:number;
    private actors:string[];
    private nacionality:string;
    private director:string;
    private writer:string;
    private language:string;
    private plataform:string;
    private isMCU:boolean;
    private mainCharacterName:string;
    private producer:string;
    private distributor:string;
    private genre:string;

    constructor(title:string,releaseYear:number,nacionality:string,genre:string){
        this.title = title;
        this.releaseYear = releaseYear;
        this.nacionality = nacionality;
        this.genre = genre;
        this.actors = [];
        this.director = "";
        this.writer = "";
        this.language = "";
        this.plataform = "";
        this.mainCharacterName = "";
        this.producer = "";
        this.distributor = "";
}

        getTitle():string{
            return this.title
        }
        setTitle(titulo:string){
            this.title = titulo
        }
        getReleaseYear():number{
            return this.releaseYear
        }
        setReleaseYear(anyo:number){
            this.releaseYear = anyo
        }
        getActors():string[]{
        return this.actors 
        }
        setNewActor(newActor:string){
            this.actors.push(newActor)
        }
        setActors(actores:string[]){
            this.actors = actores
        }
        getNacionality():string{
            return this.nacionality
        }
        setNacionality(nacionalidad:string){
            this.nacionality = nacionalidad
        }
        getDirector():string{
            return this.director
        }
        setDirector(newDirector:string){
            this.director = newDirector
        }
        getWriter():string{
            return this.writer
        }
        setWriter(escritor:string){
            this.writer = escritor
        }
        getLanguage():string{
            return this.language
        }
        setLanguage(idioma:string){
            this.language = idioma
        }
        getPlataform():string{
            return this.plataform
        }
        setPlataform(plataforma:string){
            this.plataform = plataforma
        }
        getIsMCU():boolean{
            return this.isMCU
        }
        IsMCUasString():string{
            let resultado:string = "";
            if (this.isMCU === true){
                resultado = "Si"
            }else{
                resultado = "No"
            }
            return resultado
        }
        setIsMCU(marvel:boolean){
            this.isMCU = marvel
        }
        getMainCharacterName():string{
            return this.mainCharacterName
        }
        setMainCharacterName(newName:string){
            this.mainCharacterName = newName
        }
        getProducer():string{
            return this.producer
        }
        setProducer(productor:string){
            this.producer = productor
        }
        getDistributor():string{
            return this.distributor
        }
        setDistributor(distribuidor:string){
            this.distributor = distribuidor
        }
        getGenre():string{
            return this.genre
        }
        setGenre(genero:string){
            this.genre = genero
        }
        toPrint(){
            let actores:string = ""
            this.actors.forEach(element => actores = actores + (" " + element))
            console.log( "\n" + "Título: " + this.title + "\n" +
            "Año: " + this.releaseYear + "\n"+
            "Actores: " + actores + "\n"+
            "País: " + this.nacionality + "\n" +
            "Dirigida por: " + this.director + "\n" +
            "Escrita por: " + this.writer + "\n" +
            "Idioma: " + this.language + "\n" +
            "Plataforma: " + this.plataform + "\n" +
            "Es del Universo Marvel: " + this.IsMCUasString() + "\n" +
            "Personaje principal: " + this.mainCharacterName + "\n" + 
            "Producida por: " + this.producer + "\n" +
            "Distribuída por: " + this.distributor + "\n" +
            "Género: " + this.genre);
        }
}