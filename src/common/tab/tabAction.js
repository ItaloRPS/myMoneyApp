export function selectTab(tabId){
    console.log("teste")

    return{
        type:'TAB_SELECTED',
        payload:tabId
    }
}

export function showTabs(...tabsIds){
    const showToTabs = {}
    tabsIds.forEach(e => showToTabs[e] = true)
    return{
        type:'TAB_SHOWED',
        payload:showToTabs
    }
}