const image_sources = [
    "Images/6c4b00556c93154a088eeb317b6096e2.jpg",
    //"Images/TheClimber.jpg",
    "Images/morisan.jpg",
    "Images/Strength.jpg",
    "Images/sweetdecay.jpg",
    "Images/fafka.jpg",
    "Images/fitz.jpg",
    "Images/Vagabond_Graphic_Design.jpg",
    "Images/goal.jpg"
];

const img_count = 2
const img_size = 350;
const placed_pos = []


function isOverlapping(x,y){
    for (let pos of placed_pos) {
        if (!(x + img_size < pos.x || x > pos.x + img_size || y + img_size < pos.y || y > pos.y + img_size)) {
            return true; // overlap
        }

    } return false;
}

for (let i = 0; i < img_count; i++) {
    let x, y;
    let tries = 0;

    // Keep trying until we find a non-overlapping position
    do {
        x = Math.random() * (window.innerWidth - img_size);
        y = Math.random() * (window.innerHeight - img_size);
        tries++;
        if (tries > 100) break;
    } while (isOverlapping(x, y)); // limit tries to avoid infinite loops

    placed_pos.push({ x, y });

    img = document.createElement('img');
    img.src = image_sources[Math.floor(Math.random() * image_sources.length)];
    img.style.position = 'absolute';
    img.style.width = img_size + 'px';
    img.style.left = x + 'px';
    img.style.top = y + 'px';
    document.body.appendChild(img)
}   

// for(let i = 0; i < img_count; i++){
//     const img = document.createElement('img');
//     img.src = image_sources[Math.floor(Math.random() * image_sources.length)];
//     img.style.position = 'absolute';
//     img.style.width = '300px';
//     img.style.height = '300px';
//     img.style.left = Math.random() * (window.innerWidth - 400) + 'px';
//     img.style.right = Math.random() * (window.innerHeight - 400) + 'px';
//     img.style.top = Math.random() * (window.innerHeight - 400) + 'px';
//     document.body.appendChild(img);
// }

