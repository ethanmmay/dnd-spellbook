export default class Spell {
    constructor(data) {
        this.name = data.name
        this.description = data.desc || data.description
        this.range = data.range
        this.level = data.level || "No Level Provided"
        this.duration = data.duration 
        this.index = data.index
        this._id = data._id || "dndAPI"

        if (Array.isArray(this.description)) {
            this.description = this.description.join("\n")
        }
    }

    get ActiveTemplate() {
        return /*html*/`
        <div class="col-12 p-2 m-1 bg-warning max-height-30">
        <div class="card-body bg-dark">
            <h3>${this.name}</h3>
            <p>${this.description}</p>
            <p>Range: ${this.range}</p>
            <p>Level: ${this.level}</p>
            <p>Duration: ${this.duration}</p>
            <button class="btn btn-success" onclick="app.SpellsController.saveSpell()">Learn</button>
        </div>
        </div>
        `
    }
}
