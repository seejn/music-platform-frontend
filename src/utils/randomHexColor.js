export const getRandomColors = (numberOfColor) => {
    let generatedColor = []

    for(let i = 0; i < numberOfColor; i++){
        let colorHex = `#${(Math.random() * 0xfffff * 1000000).toString(16).slice(0, 6)}`;
        
        if(!generatedColor.includes(colorHex)){
            generatedColor.push(colorHex)
        }else{
            numberOfColor++
        }
    }

    return generatedColor;
};