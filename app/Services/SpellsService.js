import { ProxyState } from "../AppState.js";
import Spell from "../Models/Spell.js";
import { api, sandboxAPI } from "../Services/AxiosService.js"

class SpellsService {
  
  constructor() {
    this.getSpells()
  }

  async getActiveSpell(index) {
    try {
      const res = await api.get('spells/' + index)
      ProxyState.activeSpell = new Spell(res.data)
    } catch (error) {
      console.error(error)
    }
  }

  async getSpells() {
    try {
      const res = await api.get('spells')
      ProxyState.spells = res.data.results.map(s => new Spell(s))
    } catch (error) {
      console.error(error)
    }
  }

  async getSavedSpells() {
    try {
      const res = await sandboxAPI.get('class/spells')
      ProxyState.savedSpells = res.data.map(s => new Spell(s))
    } catch (error) {
      console.error(error)
    }
  }

  async saveSpell() {
    try {
      let res = await sandboxAPI.post('class/spells', ProxyState.activeSpell)
      console.log(res)
      this.getSavedSpells()
    } catch (error) {
      console.error(error)
    }
  }
}

export const spellsService = new SpellsService();

