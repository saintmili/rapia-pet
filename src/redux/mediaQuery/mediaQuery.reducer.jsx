
function checkMediaQuery() {
    const mediaQueries = {
        phone: "(max-width: 600px)",
        tablet: "(min-width: 600px)",
        desktop: "(min-width: 992px)",
        largeDesktop: "(min-width: 1200px)"
    }
    if (window.matchMedia(mediaQueries.phone).matches) return "phone";
    else if (window.matchMedia(mediaQueries.largeDesktop).matches) return "largeDesktop";
    else if (window.matchMedia(mediaQueries.desktop).matches) return "desktop";
    else if (window.matchMedia(mediaQueries.tablet).matches) return "tablet";

}

const INITIAL_STATE = {
    mediaQuery: checkMediaQuery()
}

const mediaQueryReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_MEDIA_QUERY':
            return ({
                ...state,
                mediaQuery: action.payload
            });
        default:
            return state;
    }
}

export default mediaQueryReducer;