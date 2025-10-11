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

const removeFromDB = (id) => {
    const installedAppData = getInstalledApp();
    const filteredData = installedAppData.filter(existingId => existingId !== id);
    const data = JSON.stringify(filteredData);
    localStorage.setItem("readList", data);
    toast("App uninstalled successfully!");
}

export {addToStoreDB, getInstalledApp, removeFromDB};
