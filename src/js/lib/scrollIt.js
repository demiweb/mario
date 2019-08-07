export default class scrollIt {
  constructor(destination, options) {
    if (options === undefined) {
      options = {};
      options.duration = 800;
      options.easing = 'linear';
      options.callback = null;
      options.offset = 0;
    };

    if (options !== undefined) {
      if (!options.duration) {
        options.duration = 800;
      };
      if (!options.easing) {
        options.easing = 'linear';
      };
      if (!options.callback) {
        options.callback = null;
      };
      if (!options.offset) {
        options.offset = 0;
      };
    };
    this.options = options;
    this.destination = destination;
  };

  init() {
    this._scroll();
  };  

  get easings() {
    return {
      linear(t) {
        return t;
      },
      easeInQuad(t) {
        return t * t;
      },
      easeOutQuad(t) {
        return t * (2 - t);
      },
      easeInOutQuad(t) {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      },
      easeInCubic(t) {
        return t * t * t;
      },
      easeOutCubic(t) {
        return (--t) * t * t + 1;
      },
      easeInOutCubic(t) {
        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
      },
      easeInQuart(t) {
        return t * t * t * t;
      },
      easeOutQuart(t) {
        return 1 - (--t) * t * t * t;
      },
      easeInOutQuart(t) {
        return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t;
      },
      easeInQuint(t) {
        return t * t * t * t * t;
      },
      easeOutQuint(t) {
        return 1 + (--t) * t * t * t * t;
      },
      easeInOutQuint(t) {
        return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t;
      }
    };
  };

  get startParameters() {
    const start = window.pageYOffset;
    const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();
    const documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
    const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
    if (this.options.offset > this.destination.offsetTop) {
      this.options.offset = 0;
    };
    const destinationOffset = typeof this.destination === 'number' ? this.destination : this.destination.offsetTop - this.options.offset;
    const destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight ? documentHeight - windowHeight : destinationOffset);

    return {
      start,
      startTime,
      destinationOffsetToScroll
    };
  };

  setScroll({start, startTime, destinationOffsetToScroll}) {
    if ('requestAnimationFrame' in window === false) {
      window.scroll(0, destinationOffsetToScroll);
      if (this.options.callback) {
        this.options.callback();
      };
      return;
    };

    const scroll = () => {
      const now = 'now' in window.performance ? performance.now() : new Date().getTime();
      const time = Math.min(1, ((now - startTime) / this.options.duration));
      const timeFunction = this.easings[this.options.easing](time);
      window.scroll(0, Math.ceil((timeFunction * (destinationOffsetToScroll - start)) + start));

      // if (Math.ceil(window.pageYOffset) === destinationOffsetToScroll || (window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      if (Math.ceil(window.pageYOffset) === destinationOffsetToScroll) {
        if (this.options.callback) {
          this.options.callback();
        }
        return;
      }

      requestAnimationFrame(scroll);
    };
    scroll();
  };

  _scroll() {
    this.setScroll({
      start: this.startParameters.start,
      startTime: this.startParameters.startTime,
      destinationOffsetToScroll: this.startParameters.destinationOffsetToScroll
    });    
  };
};
