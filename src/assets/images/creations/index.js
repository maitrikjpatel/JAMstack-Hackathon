
import { importAll } from '../../../utilities/js/index'

let AllFullImages = importAll(require.context('./fulls', true, /\.(png|jpe?g|svg)$/));
let AllThumbImages = importAll(require.context('./thumbs', true, /\.(png|jpe?g|svg)$/));

let images = [];
let totalImagesNumber = 58;

for(let i = 1; i < totalImagesNumber; i++) {

    let imgObj;
    
    imgObj = {
        id: i, 
        src: AllFullImages[`Full${[i]}.jpg`], 
        thumbnail: AllThumbImages[`Thumb${[i]}.jpg`],  
        caption: `Cake${[i]}`,  
        description: `Cake${[i]}`, 
    }
    
    images.push(imgObj)
}

export default images