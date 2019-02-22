export const navTypes = {
    ROOT_LINK_CLICKED: 'ROOT_LINK_CLICKED',
}

export const changeRootPath = (path: string) => {
    return {
        payload: {
            path: path
        },
        type: navTypes.ROOT_LINK_CLICKED
    }
}