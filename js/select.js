import {listData, collection, out} from "./utils.js";

const getPokemonByType = async (type) => {
    const filtered = collection.filter((item)=>{
        //console.log(item.types, type, item.types.includes(type));
        return item.types.includes(type);
    });
    listData(filtered, out);
}

const selectElement = document.getElementById("type");

    selectElement.addEventListener("change", () => {
        //console.log("hello")
        const chosenOne = selectElement.value;
        //console.log(chosenOne);
        if (chosenOne !== "none") {
            getPokemonByType(chosenOne);
        } else {
            listData(collection);
        }
    })

    //console.log(collection);