import ReactGA from 'react-ga';

export const analytics = {
  init: (trackingId, options = {}) => {
    ReactGA.initialize(trackingId, options);
  },
  event: ({ category, action }) => {
    ReactGA.event({
      category,
      action,
    });
  },
  pageView: (page) => {
    ReactGA.pageview(page);
  },
};
