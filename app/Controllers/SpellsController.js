import { ProxyState } from "../AppState.js";
import { spellsService } from "../Services/SpellsService.js";
import Spell from "../Models/Spell.js";

function _drawApiSpells() {
  let spells = ProxyState.spells;
  let template = ''
  spells.forEach(s => template += `<li onclick="app.SpellsController.getActiveSpell('${s.index}')">${s.name}</li>`)
  document.getElementById("api-spells").innerHTML = template
}

function _drawActiveSpell() {
  document.getElementById("active-spell").innerHTML = ProxyState.activeSpell.ActiveTemplate
}

function _drawSavedSpells() {
  let savedSpells = ProxyState.savedSpells
  let template = ''
  savedSpells.forEach(s => template += `<li onclick="app.SpellsController.getActiveSpell()">${s.name}</li>`)
  document.getElementById("saved-spells").innerHTML = template
}

//Public
export default class SpellsController {
  constructor() {
    ProxyState.on("spells", _drawApiSpells);
    ProxyState.on("activeSpell", _drawActiveSpell);
    ProxyState.on("savedSpells", _drawSavedSpells);
    _drawApiSpells()
    this.getSavedSpells()
  }

  getActiveSpell(index) {
    spellsService.getActiveSpell(index)
  }

  getSpells() {
    spellsService.getSpells()
  }

  getSavedSpells() {
    spellsService.getSavedSpells()
  }

  saveSpell() {
    spellsService.saveSpell()
  }

}
