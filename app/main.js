import SpellsController from "./Controllers/SpellsController.js";

class App {
  SpellsController = new SpellsController();
}

window["app"] = new App();
