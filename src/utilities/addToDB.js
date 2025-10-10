import { toast } from "react-toastify";

const getInstalledApp = () => {

    const installedAppSTR = localStorage.getItem("readList")
    if ( installedAppSTR ) {
        const installedAppData = JSON.parse(installedAppSTR);
        return installedAppData;
    } else {
        return [];
    }
}
const addToStoreDB = (id) => {

    const installedAppData = getInstalledApp();

    if (installedAppData.includes(id)){
        toast("This app already exist !")
    }
    else{
        installedAppData.push(id);
        const data = JSON.stringify(installedAppData)
        localStorage.setItem("readList", data)
        
    }
}

export {addToStoreDB, getInstalledApp};
