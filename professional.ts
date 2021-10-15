   export class Professional {
    public name: string;
    public age: number;
    public gnere: string;
    public weight: number;
    public hairColor: string;
    public height:number;
    public eyeColor: string;
    public race: string;
    public isRetired: boolean;
    public nacionality: string;
    public oscarsNumber: number;
    public profession:string;
     constructor(name:string, age:number, gnere:string, weight:number, 
        height:number, hairColor: string, eyeColor:string, race: string, isRetired: boolean,
        nacionality: string, oscarsNumber:number,profession:string)
        {
            this.name= name;
            this.age= age;
            this.gnere= gnere;
            this.weight = weight;
            this.height = height;
            this.hairColor = hairColor;
            this.eyeColor = eyeColor;
            this.race = race;
            this.isRetired = isRetired;
            this.nacionality = nacionality;
            this.oscarsNumber = oscarsNumber;
            this.profession = profession;

        }


        public persona (Professional)

        { 
           console.log(Professional)
        }




}
