export const navTypes = {
    OPEN_SURVEYS_TOGGLE: 'OPEN_SURVEYS_TOGGLE',
    CLOSED_SURVEYS_TOGGLE: 'CLOSED_SURVEYS_TOGGLE'
}

export const openSurveysToggle = () => {
    return {
        payload: {},
        type: navTypes.OPEN_SURVEYS_TOGGLE
    }
}

export const closedSurveysToggle = () => {
    return {
        payload: {},
        type: navTypes.CLOSED_SURVEYS_TOGGLE
    }
}