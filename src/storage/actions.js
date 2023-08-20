// only common actions should be written here module specific actions should be written in the specific modules

export const saveSidebar = (sidebarShow) => ({
    type: 'SAVE_SIDEBAR',
    sidebarShow
})