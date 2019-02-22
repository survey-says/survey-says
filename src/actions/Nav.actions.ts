export const navTypes = {
    CHANGE_CURRENT_PATH: 'CHANGE_CURRENT_PATH'
}

export const changeCurrentPath = () => {
    return {
        payload: {},
        type: navTypes.CHANGE_CURRENT_PATH
    }
}