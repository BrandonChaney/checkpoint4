import ImageService from "../services/image-service.js";
import store from "../store.js";

function _drawImage() {
  let image = store.State.images
  document.getElementById("bg-image").style.backgroundImage = `url('${image}')`
}
export default class ImageController {
  constructor() {
    store.subscribe("images", _drawImage)
  }
}
