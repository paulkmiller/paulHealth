import { c as create_ssr_component, h as createEventDispatcher, d as each, v as validate_component, e as escape, o as onDestroy, a as add_attribute } from "./index3.js";
import easyReactive from "easy-reactive";
const Dot_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ":root{--sc-dot-size:6px;--sc-active-dot-size:8px;--sc-dot-size-animation-time:250ms}.sc-carousel-dot__dot.svelte-yu7247{background-color:var(--sc-color-rgb-light);border-radius:50%;display:inline-block;opacity:0.5;transition:opacity 100ms ease,\r\n      height var(--sc-dot-size-animation-time) ease,\r\n      width var(--sc-dot-size-animation-time) ease;cursor:pointer;-webkit-tap-highlight-color:transparent;height:var(--sc-dot-size);width:var(--sc-dot-size)}.sc-carousel-dot__dot.svelte-yu7247:hover{opacity:0.9}.sc-carousel-dot__dot_active.svelte-yu7247{opacity:0.7;height:var(--sc-active-dot-size);width:var(--sc-active-dot-size)}",
  map: null
};
const Dot = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { active = false } = $$props;
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  $$result.css.add(css$4);
  return `<button class="${[
    "sc-carousel-button sc-carousel-dot__dot svelte-yu7247",
    active ? "sc-carousel-dot__dot_active" : ""
  ].join(" ").trim()}"></button>`;
});
const Dots_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".sc-carousel-dots__container.svelte-1oj5bge{display:flex;align-items:center;justify-content:center;flex-wrap:wrap;padding:0 30px}.sc-carousel-dots__dot-container.svelte-1oj5bge{height:calc(var(--sc-dot-size) + 14px);width:calc(var(--sc-dot-size) + 10px);display:flex;align-items:center;justify-content:center}",
  map: null
};
const Dots = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { pagesCount = 1 } = $$props;
  let { currentPageIndex = 0 } = $$props;
  if ($$props.pagesCount === void 0 && $$bindings.pagesCount && pagesCount !== void 0)
    $$bindings.pagesCount(pagesCount);
  if ($$props.currentPageIndex === void 0 && $$bindings.currentPageIndex && currentPageIndex !== void 0)
    $$bindings.currentPageIndex(currentPageIndex);
  $$result.css.add(css$3);
  return `<div class="sc-carousel-dots__container svelte-1oj5bge">${each(Array(pagesCount), (_, pageIndex) => {
    return `<div class="sc-carousel-dots__dot-container svelte-1oj5bge">${validate_component(Dot, "Dot").$$render($$result, { active: currentPageIndex === pageIndex }, {}, {})}
    </div>`;
  })}  
</div>`;
});
const PREV = "prev";
const NEXT = "next";
const Arrow_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ":root{--sc-arrow-size:2px}.sc-carousel-arrow__circle.svelte-9ztt4p{width:20px;height:20px;border-radius:50%;background-color:var(--sc-color-rgb-light-50p);display:flex;align-items:center;justify-content:center;transition:opacity 100ms ease;cursor:pointer;-webkit-tap-highlight-color:transparent}.sc-carousel-arrow__circle.svelte-9ztt4p:hover{opacity:0.9}.sc-carousel-arrow__arrow.svelte-9ztt4p{border:solid var(--sc-color-hex-dark);border-width:0 var(--sc-arrow-size) var(--sc-arrow-size) 0;padding:var(--sc-arrow-size);position:relative}.sc-carousel-arrow__arrow-next.svelte-9ztt4p{transform:rotate(-45deg);left:calc(var(--sc-arrow-size) / -2)}.sc-carousel-arrow__arrow-prev.svelte-9ztt4p{transform:rotate(135deg);right:calc(var(--sc-arrow-size) / -2)}.sc-carousel-arrow__circle_disabled.svelte-9ztt4p,.sc-carousel-arrow__circle_disabled.svelte-9ztt4p:hover{opacity:0.5}",
  map: null
};
const Arrow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { direction = NEXT } = $$props;
  let { disabled = false } = $$props;
  if ($$props.direction === void 0 && $$bindings.direction && direction !== void 0)
    $$bindings.direction(direction);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  $$result.css.add(css$2);
  return `<button class="${[
    "sc-carousel-button sc-carousel-arrow__circle svelte-9ztt4p",
    disabled ? "sc-carousel-arrow__circle_disabled" : ""
  ].join(" ").trim()}"><i class="${[
    "sc-carousel-arrow__arrow svelte-9ztt4p",
    (direction === NEXT ? "sc-carousel-arrow__arrow-next" : "") + " " + (direction === PREV ? "sc-carousel-arrow__arrow-prev" : "")
  ].join(" ").trim()}"></i>
</button>`;
});
const Progress_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".sc-carousel-progress__indicator.svelte-nuyenl{height:100%;background-color:var(--sc-color-hex-dark-50p)}",
  map: null
};
const MAX_PERCENT = 100;
const Progress = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let width;
  let { value = 0 } = $$props;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  $$result.css.add(css$1);
  width = Math.min(Math.max(value * MAX_PERCENT, 0), MAX_PERCENT);
  return `<div class="sc-carousel-progress__indicator svelte-nuyenl" style="${"width: " + escape(width, true) + "%;"}"></div>`;
});
function getValueInRange(min, value, max) {
  return Math.max(min, Math.min(value, max));
}
function _getCurrentPageIndexByCurrentParticleIndexInfinite({
  currentParticleIndex,
  particlesCount,
  clonesCountHead,
  clonesCountTotal,
  particlesToScroll
}) {
  if (currentParticleIndex === particlesCount - clonesCountHead)
    return 0;
  if (currentParticleIndex === 0)
    return _getPagesCountByParticlesCountInfinite({
      particlesCountWithoutClones: particlesCount - clonesCountTotal,
      particlesToScroll
    }) - 1;
  return Math.floor((currentParticleIndex - clonesCountHead) / particlesToScroll);
}
function _getCurrentPageIndexByCurrentParticleIndexLimited({
  currentParticleIndex,
  particlesToScroll
}) {
  return Math.ceil(currentParticleIndex / particlesToScroll);
}
function getCurrentPageIndexByCurrentParticleIndex({
  currentParticleIndex,
  particlesCount,
  clonesCountHead,
  clonesCountTotal,
  infinite,
  particlesToScroll
}) {
  return infinite ? _getCurrentPageIndexByCurrentParticleIndexInfinite({
    currentParticleIndex,
    particlesCount,
    clonesCountHead,
    clonesCountTotal,
    particlesToScroll
  }) : _getCurrentPageIndexByCurrentParticleIndexLimited({
    currentParticleIndex,
    particlesToScroll
  });
}
function _getPagesCountByParticlesCountInfinite({
  particlesCountWithoutClones,
  particlesToScroll
}) {
  return Math.ceil(particlesCountWithoutClones / particlesToScroll);
}
function _getPagesCountByParticlesCountLimited({
  particlesCountWithoutClones,
  particlesToScroll,
  particlesToShow
}) {
  const partialPageSize = getPartialPageSize({
    particlesCountWithoutClones,
    particlesToScroll,
    particlesToShow
  });
  return Math.ceil(particlesCountWithoutClones / particlesToScroll) - partialPageSize;
}
function getPagesCountByParticlesCount({
  infinite,
  particlesCountWithoutClones,
  particlesToScroll,
  particlesToShow
}) {
  return infinite ? _getPagesCountByParticlesCountInfinite({
    particlesCountWithoutClones,
    particlesToScroll
  }) : _getPagesCountByParticlesCountLimited({
    particlesCountWithoutClones,
    particlesToScroll,
    particlesToShow
  });
}
function _getParticleIndexByPageIndexInfinite({
  pageIndex,
  clonesCountHead,
  clonesCountTail,
  particlesToScroll,
  particlesCount
}) {
  return getValueInRange(
    0,
    Math.min(clonesCountHead + pageIndex * particlesToScroll, particlesCount - clonesCountTail),
    particlesCount - 1
  );
}
function _getParticleIndexByPageIndexLimited({
  pageIndex,
  particlesToScroll,
  particlesCount,
  particlesToShow
}) {
  return getValueInRange(
    0,
    Math.min(pageIndex * particlesToScroll, particlesCount - particlesToShow),
    particlesCount - 1
  );
}
function getParticleIndexByPageIndex({
  infinite,
  pageIndex,
  clonesCountHead,
  clonesCountTail,
  particlesToScroll,
  particlesCount,
  particlesToShow
}) {
  return infinite ? _getParticleIndexByPageIndexInfinite({
    pageIndex,
    clonesCountHead,
    clonesCountTail,
    particlesToScroll,
    particlesCount
  }) : _getParticleIndexByPageIndexLimited({
    pageIndex,
    particlesToScroll,
    particlesCount,
    particlesToShow
  });
}
function applyParticleSizes({
  particlesContainerChildren,
  particleWidth
}) {
  for (let particleIndex = 0; particleIndex < particlesContainerChildren.length; particleIndex++) {
    particlesContainerChildren[particleIndex].style.minWidth = `${particleWidth}px`;
    particlesContainerChildren[particleIndex].style.maxWidth = `${particleWidth}px`;
  }
}
function getPartialPageSize({
  particlesToScroll,
  particlesToShow,
  particlesCountWithoutClones
}) {
  const overlap = particlesToScroll - particlesToShow;
  let particlesCount = particlesToShow;
  while (true) {
    const diff = particlesCountWithoutClones - particlesCount - overlap;
    if (diff < particlesToShow) {
      return Math.max(diff, 0);
    }
    particlesCount += particlesToShow + overlap;
  }
}
function createResizeObserver(onResize) {
  return new ResizeObserver((entries) => {
    onResize({
      width: entries[0].contentRect.width
    });
  });
}
function getClonesCount({
  infinite,
  particlesToShow,
  partialPageSize
}) {
  const clonesCount = infinite ? {
    // need to round with ceil as particlesToShow, particlesToShow can be floating (e.g. 1.5, 3.75)
    head: Math.ceil(partialPageSize || particlesToShow),
    tail: Math.ceil(particlesToShow)
  } : {
    head: 0,
    tail: 0
  };
  return {
    ...clonesCount,
    total: clonesCount.head + clonesCount.tail
  };
}
const get = (object, fieldName, defaultValue) => {
  if (object && object.hasOwnProperty(fieldName)) {
    return object[fieldName];
  }
  if (defaultValue === void 0) {
    throw new Error(`Required arg "${fieldName}" was not provided`);
  }
  return defaultValue;
};
const switcher = (description) => (key) => {
  description[key] && description[key]();
};
function getIndexesOfParticlesWithoutClonesInPage({
  pageIndex,
  particlesToShow,
  particlesToScroll,
  particlesCount
}) {
  const overlap = pageIndex === 0 ? 0 : particlesToShow - particlesToScroll;
  const from = pageIndex * particlesToShow - pageIndex * overlap;
  const to = from + Math.max(particlesToShow, particlesToScroll) - 1;
  const indexes = [];
  for (let i = from; i <= Math.min(particlesCount - 1, to); i++) {
    indexes.push(i);
  }
  return indexes;
}
function getAdjacentIndexes({
  infinite,
  pageIndex,
  pagesCount,
  particlesCount,
  particlesToShow,
  particlesToScroll
}) {
  const _pageIndex = getValueInRange(0, pageIndex, pagesCount - 1);
  let rangeStart = _pageIndex - 1;
  let rangeEnd = _pageIndex + 1;
  rangeStart = infinite ? rangeStart < 0 ? pagesCount - 1 : rangeStart : Math.max(0, rangeStart);
  rangeEnd = infinite ? rangeEnd > pagesCount - 1 ? 0 : rangeEnd : Math.min(pagesCount - 1, rangeEnd);
  const pageIndexes = [.../* @__PURE__ */ new Set([
    rangeStart,
    _pageIndex,
    rangeEnd,
    // because of these values outputs for infinite/non-infinites are the same
    0,
    // needed to clone first page particles
    pagesCount - 1
    // needed to clone last page particles
  ])].sort((a, b) => a - b);
  const particleIndexes = pageIndexes.flatMap(
    (pageIndex2) => getIndexesOfParticlesWithoutClonesInPage({
      pageIndex: pageIndex2,
      particlesToShow,
      particlesToScroll,
      particlesCount
    })
  );
  return {
    pageIndexes,
    particleIndexes: [...new Set(particleIndexes)].sort((a, b) => a - b)
  };
}
const setIntervalImmediate = (fn, ms) => {
  fn();
  return setInterval(fn, ms);
};
const STEP_MS = 35;
const MAX_VALUE = 1;
class ProgressManager {
  constructor({ onProgressValueChange }) {
    this._onProgressValueChange = onProgressValueChange;
    this._autoplayDuration;
    this._onProgressValueChange;
    this._interval;
    this._paused = false;
  }
  setAutoplayDuration(autoplayDuration) {
    this._autoplayDuration = autoplayDuration;
  }
  start(onFinish) {
    return new Promise((resolve) => {
      this.reset();
      const stepMs = Math.min(STEP_MS, Math.max(this._autoplayDuration, 1));
      let progress = -stepMs;
      this._interval = setIntervalImmediate(async () => {
        if (this._paused) {
          return;
        }
        progress += stepMs;
        const value = progress / this._autoplayDuration;
        this._onProgressValueChange(value);
        if (value > MAX_VALUE) {
          this.reset();
          await onFinish();
          resolve();
        }
      }, stepMs);
    });
  }
  pause() {
    this._paused = true;
  }
  resume() {
    this._paused = false;
  }
  reset() {
    clearInterval(this._interval);
    this._onProgressValueChange(MAX_VALUE);
  }
}
function createCarousel(onChange) {
  const progressManager = new ProgressManager({
    onProgressValueChange: (value) => {
      onChange("progressValue", 1 - value);
    }
  });
  const reactive = easyReactive(
    {
      data: {
        particlesCountWithoutClones: 0,
        particlesToShow: 1,
        // normalized
        particlesToShowInit: 1,
        // initial value
        particlesToScroll: 1,
        // normalized
        particlesToScrollInit: 1,
        // initial value
        particlesCount: 1,
        currentParticleIndex: 1,
        infinite: false,
        autoplayDuration: 1e3,
        clonesCountHead: 0,
        clonesCountTail: 0,
        clonesCountTotal: 0,
        partialPageSize: 1,
        currentPageIndex: 1,
        pagesCount: 1,
        pauseOnFocus: false,
        focused: false,
        autoplay: false,
        autoplayDirection: "next",
        disabled: false,
        // disable page change while animation is in progress
        durationMsInit: 1e3,
        durationMs: 1e3,
        offset: 0,
        particleWidth: 0,
        loaded: []
      },
      watch: {
        setLoaded({ data: data2 }) {
          data2.loaded = getAdjacentIndexes({
            infinite: data2.infinite,
            pageIndex: data2.currentPageIndex,
            pagesCount: data2.pagesCount,
            particlesCount: data2.particlesCountWithoutClones,
            particlesToShow: data2.particlesToShow,
            particlesToScroll: data2.particlesToScroll
          }).particleIndexes;
        },
        setCurrentPageIndex({ data: data2 }) {
          data2.currentPageIndex = getCurrentPageIndexByCurrentParticleIndex({
            currentParticleIndex: data2.currentParticleIndex,
            particlesCount: data2.particlesCount,
            clonesCountHead: data2.clonesCountHead,
            clonesCountTotal: data2.clonesCountTotal,
            infinite: data2.infinite,
            particlesToScroll: data2.particlesToScroll
          });
        },
        setPartialPageSize({ data: data2 }) {
          data2.partialPageSize = getPartialPageSize({
            particlesToScroll: data2.particlesToScroll,
            particlesToShow: data2.particlesToShow,
            particlesCountWithoutClones: data2.particlesCountWithoutClones
          });
        },
        setClonesCount({ data: data2 }) {
          const { head, tail } = getClonesCount({
            infinite: data2.infinite,
            particlesToShow: data2.particlesToShow,
            partialPageSize: data2.partialPageSize
          });
          data2.clonesCountHead = head;
          data2.clonesCountTail = tail;
          data2.clonesCountTotal = head + tail;
        },
        setProgressManagerAutoplayDuration({ data: data2 }) {
          progressManager.setAutoplayDuration(data2.autoplayDuration);
        },
        toggleProgressManager({ data: { pauseOnFocus, focused } }) {
          if (pauseOnFocus) {
            if (focused) {
              progressManager.pause();
            } else {
              progressManager.resume();
            }
          }
        },
        initDuration({ data: data2 }) {
          data2.durationMs = data2.durationMsInit;
        },
        applyAutoplay({ data: data2, methods: { _applyAutoplayIfNeeded } }) {
          data2.autoplay && _applyAutoplayIfNeeded(data2.autoplay);
        },
        setPagesCount({ data: data2 }) {
          data2.pagesCount = getPagesCountByParticlesCount({
            infinite: data2.infinite,
            particlesCountWithoutClones: data2.particlesCountWithoutClones,
            particlesToScroll: data2.particlesToScroll,
            particlesToShow: data2.particlesToShow
          });
        },
        setParticlesToShow({ data: data2 }) {
          data2.particlesToShow = getValueInRange(
            1,
            data2.particlesToShowInit,
            data2.particlesCountWithoutClones
          );
        },
        setParticlesToScroll({ data: data2 }) {
          data2.particlesToScroll = getValueInRange(
            1,
            data2.particlesToScrollInit,
            data2.particlesCountWithoutClones
          );
        }
      },
      methods: {
        _prev({ data: data2 }) {
          data2.currentParticleIndex = getParticleIndexByPageIndex({
            infinite: data2.infinite,
            pageIndex: data2.currentPageIndex - 1,
            clonesCountHead: data2.clonesCountHead,
            clonesCountTail: data2.clonesCountTail,
            particlesToScroll: data2.particlesToScroll,
            particlesCount: data2.particlesCount,
            particlesToShow: data2.particlesToShow
          });
        },
        _next({ data: data2 }) {
          data2.currentParticleIndex = getParticleIndexByPageIndex({
            infinite: data2.infinite,
            pageIndex: data2.currentPageIndex + 1,
            clonesCountHead: data2.clonesCountHead,
            clonesCountTail: data2.clonesCountTail,
            particlesToScroll: data2.particlesToScroll,
            particlesCount: data2.particlesCount,
            particlesToShow: data2.particlesToShow
          });
        },
        _moveToParticle({ data: data2 }, particleIndex) {
          data2.currentParticleIndex = getValueInRange(
            0,
            particleIndex,
            data2.particlesCount - 1
          );
        },
        toggleFocused({ data: data2 }) {
          data2.focused = !data2.focused;
        },
        async _applyAutoplayIfNeeded({ data: data2, methods: methods2 }) {
          if (!data2.infinite && (data2.autoplayDirection === NEXT && data2.currentParticleIndex === data2.particlesCount - 1 || data2.autoplayDirection === PREV && data2.currentParticleIndex === 0)) {
            progressManager.reset();
            return;
          }
          if (data2.autoplay) {
            const onFinish = () => switcher({
              [NEXT]: async () => methods2.showNextPage(),
              [PREV]: async () => methods2.showPrevPage()
            })(data2.autoplayDirection);
            await progressManager.start(onFinish);
          }
        },
        // makes delayed jump to 1st or last element
        async _jumpIfNeeded({ data: data2, methods: methods2 }) {
          let jumped = false;
          if (data2.infinite) {
            if (data2.currentParticleIndex === 0) {
              await methods2.showParticle(
                data2.particlesCount - data2.clonesCountTotal,
                {
                  animated: false
                }
              );
              jumped = true;
            } else if (data2.currentParticleIndex === data2.particlesCount - data2.clonesCountTail) {
              await methods2.showParticle(data2.clonesCountHead, {
                animated: false
              });
              jumped = true;
            }
          }
          return jumped;
        },
        async changePage({ data: data2, methods: methods2 }, updateStoreFn, options) {
          progressManager.reset();
          if (data2.disabled)
            return;
          data2.disabled = true;
          updateStoreFn();
          await methods2.offsetPage({ animated: get(options, "animated", true) });
          data2.disabled = false;
          const jumped = await methods2._jumpIfNeeded();
          !jumped && methods2._applyAutoplayIfNeeded();
        },
        async showNextPage({ data: data2, methods: methods2 }, options) {
          if (data2.disabled)
            return;
          await methods2.changePage(methods2._next, options);
        },
        async showPrevPage({ data: data2, methods: methods2 }, options) {
          if (data2.disabled)
            return;
          await methods2.changePage(methods2._prev, options);
        },
        async showParticle({ methods: methods2 }, particleIndex, options) {
          await methods2.changePage(
            () => methods2._moveToParticle(particleIndex),
            options
          );
        },
        _getParticleIndexByPageIndex({ data: data2 }, pageIndex) {
          return getParticleIndexByPageIndex({
            infinite: data2.infinite,
            pageIndex,
            clonesCountHead: data2.clonesCountHead,
            clonesCountTail: data2.clonesCountTail,
            particlesToScroll: data2.particlesToScroll,
            particlesCount: data2.particlesCount,
            particlesToShow: data2.particlesToShow
          });
        },
        async showPage({ methods: methods2 }, pageIndex, options) {
          const particleIndex = methods2._getParticleIndexByPageIndex(pageIndex);
          await methods2.showParticle(particleIndex, options);
        },
        offsetPage({ data: data2 }, options) {
          const animated = get(options, "animated", true);
          return new Promise((resolve) => {
            data2.durationMs = animated ? data2.durationMsInit : 0;
            data2.offset = -data2.currentParticleIndex * data2.particleWidth;
            setTimeout(() => {
              resolve();
            }, data2.durationMs);
          });
        }
      }
    },
    {
      onChange
    }
  );
  const [data, methods] = reactive;
  return [{ data, progressManager }, methods, reactive._internal];
}
const Carousel_svelte_svelte_type_style_lang = "";
const css = {
  code: ":root{--sc-color-rgb-light-50p:rgba(93, 93, 93, 0.5);--sc-color-rgb-light:#5d5d5d;--sc-color-hex-dark-50p:rgba(30, 30, 30, 0.5);--sc-color-hex-dark:#1e1e1e}.sc-carousel__carousel-container.svelte-uwo0yk{display:flex;width:100%;flex-direction:column;align-items:center}.sc-carousel__content-container.svelte-uwo0yk{position:relative;display:flex;width:100%}.sc-carousel__pages-window.svelte-uwo0yk{flex:1;display:flex;overflow:hidden;box-sizing:border-box;position:relative}.sc-carousel__pages-container.svelte-uwo0yk{width:100%;display:flex;transition-property:transform}.sc-carousel__arrow-container.svelte-uwo0yk{padding:5px;box-sizing:border-box;display:flex;align-items:center;justify-content:center}.sc-carousel-progress__container.svelte-uwo0yk{width:100%;height:5px;background-color:var(--sc-color-rgb-light-50p);position:absolute;bottom:0}.sc-carousel-button{all:unset;cursor:pointer}.sc-carousel-button:focus{outline:5px auto}",
  map: null
};
const Carousel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let loaded = [];
  let currentPageIndex;
  let progressValue;
  let offset = 0;
  let durationMs = 0;
  let pagesCount = 1;
  const [{ data, progressManager }, methods, service] = createCarousel((key, value) => {
    switcher({
      "currentPageIndex": () => currentPageIndex = value,
      "progressValue": () => progressValue = value,
      "offset": () => offset = value,
      "durationMs": () => durationMs = value,
      "pagesCount": () => pagesCount = value,
      "loaded": () => loaded = value
    })(key);
  });
  const dispatch = createEventDispatcher();
  let { timingFunction = "ease-in-out" } = $$props;
  let { arrows = true } = $$props;
  let { infinite = true } = $$props;
  let { initialPageIndex = 0 } = $$props;
  let { duration = 500 } = $$props;
  let { autoplay = false } = $$props;
  let { autoplayDuration = 3e3 } = $$props;
  let { autoplayDirection = NEXT } = $$props;
  let { pauseOnFocus = false } = $$props;
  let { autoplayProgressVisible = false } = $$props;
  let { dots = true } = $$props;
  let { swiping = true } = $$props;
  let { particlesToShow = 1 } = $$props;
  let { particlesToScroll = 1 } = $$props;
  async function goTo(pageIndex, options) {
    const animated = get(options, "animated", true);
    if (typeof pageIndex !== "number") {
      throw new Error("pageIndex should be a number");
    }
    await methods.showPage(pageIndex, { animated });
  }
  async function goToPrev(options) {
    const animated = get(options, "animated", true);
    await methods.showPrevPage({ animated });
  }
  async function goToNext(options) {
    const animated = get(options, "animated", true);
    await methods.showNextPage({ animated });
  }
  let pageWindowWidth = 0;
  let pageWindowElement;
  let particlesContainer;
  const pageWindowElementResizeObserver = createResizeObserver(({ width }) => {
    pageWindowWidth = width;
    data.particleWidth = pageWindowWidth / data.particlesToShow;
    applyParticleSizes({
      particlesContainerChildren: particlesContainer.children,
      particleWidth: data.particleWidth
    });
    methods.offsetPage({ animated: false });
  });
  onDestroy(() => {
    pageWindowElementResizeObserver.disconnect();
    progressManager.reset();
  });
  async function handlePageChange(pageIndex) {
    await methods.showPage(pageIndex, { animated: true });
  }
  if ($$props.timingFunction === void 0 && $$bindings.timingFunction && timingFunction !== void 0)
    $$bindings.timingFunction(timingFunction);
  if ($$props.arrows === void 0 && $$bindings.arrows && arrows !== void 0)
    $$bindings.arrows(arrows);
  if ($$props.infinite === void 0 && $$bindings.infinite && infinite !== void 0)
    $$bindings.infinite(infinite);
  if ($$props.initialPageIndex === void 0 && $$bindings.initialPageIndex && initialPageIndex !== void 0)
    $$bindings.initialPageIndex(initialPageIndex);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
    $$bindings.duration(duration);
  if ($$props.autoplay === void 0 && $$bindings.autoplay && autoplay !== void 0)
    $$bindings.autoplay(autoplay);
  if ($$props.autoplayDuration === void 0 && $$bindings.autoplayDuration && autoplayDuration !== void 0)
    $$bindings.autoplayDuration(autoplayDuration);
  if ($$props.autoplayDirection === void 0 && $$bindings.autoplayDirection && autoplayDirection !== void 0)
    $$bindings.autoplayDirection(autoplayDirection);
  if ($$props.pauseOnFocus === void 0 && $$bindings.pauseOnFocus && pauseOnFocus !== void 0)
    $$bindings.pauseOnFocus(pauseOnFocus);
  if ($$props.autoplayProgressVisible === void 0 && $$bindings.autoplayProgressVisible && autoplayProgressVisible !== void 0)
    $$bindings.autoplayProgressVisible(autoplayProgressVisible);
  if ($$props.dots === void 0 && $$bindings.dots && dots !== void 0)
    $$bindings.dots(dots);
  if ($$props.swiping === void 0 && $$bindings.swiping && swiping !== void 0)
    $$bindings.swiping(swiping);
  if ($$props.particlesToShow === void 0 && $$bindings.particlesToShow && particlesToShow !== void 0)
    $$bindings.particlesToShow(particlesToShow);
  if ($$props.particlesToScroll === void 0 && $$bindings.particlesToScroll && particlesToScroll !== void 0)
    $$bindings.particlesToScroll(particlesToScroll);
  if ($$props.goTo === void 0 && $$bindings.goTo && goTo !== void 0)
    $$bindings.goTo(goTo);
  if ($$props.goToPrev === void 0 && $$bindings.goToPrev && goToPrev !== void 0)
    $$bindings.goToPrev(goToPrev);
  if ($$props.goToNext === void 0 && $$bindings.goToNext && goToNext !== void 0)
    $$bindings.goToNext(goToNext);
  $$result.css.add(css);
  {
    {
      dispatch("pageChange", currentPageIndex);
    }
  }
  {
    {
      data.infinite = infinite;
    }
  }
  {
    {
      data.durationMsInit = duration;
    }
  }
  {
    {
      data.autoplay = autoplay;
    }
  }
  {
    {
      data.autoplayDuration = autoplayDuration;
    }
  }
  {
    {
      data.autoplayDirection = autoplayDirection;
    }
  }
  {
    {
      data.pauseOnFocus = pauseOnFocus;
    }
  }
  {
    {
      data.particlesToShowInit = particlesToShow;
    }
  }
  {
    {
      data.particlesToScrollInit = particlesToScroll;
    }
  }
  return `<div class="sc-carousel__carousel-container svelte-uwo0yk"><div class="sc-carousel__content-container svelte-uwo0yk">${arrows ? `${slots.prev ? slots.prev({
    showPrevPage: methods.showPrevPage,
    loaded,
    currentPageIndex
  }) : `
        <div class="sc-carousel__arrow-container svelte-uwo0yk">${validate_component(Arrow, "Arrow").$$render(
    $$result,
    {
      direction: "prev",
      disabled: !infinite && currentPageIndex === 0
    },
    {},
    {}
  )}</div>
      `}` : ``}
    <div class="sc-carousel__pages-window svelte-uwo0yk"${add_attribute("this", pageWindowElement, 0)}><div class="sc-carousel__pages-container svelte-uwo0yk" style="${"transform: translateX(" + escape(offset, true) + "px); transition-duration: " + escape(durationMs, true) + "ms; transition-timing-function: " + escape(timingFunction, true) + ";"}"${add_attribute("this", particlesContainer, 0)}>${slots.default ? slots.default({ loaded, currentPageIndex }) : ``}</div>
      ${autoplayProgressVisible ? `<div class="sc-carousel-progress__container svelte-uwo0yk">${validate_component(Progress, "Progress").$$render($$result, { value: progressValue }, {}, {})}</div>` : ``}</div>
    ${arrows ? `${slots.next ? slots.next({
    showNextPage: methods.showNextPage,
    loaded,
    currentPageIndex
  }) : `
        <div class="sc-carousel__arrow-container svelte-uwo0yk">${validate_component(Arrow, "Arrow").$$render(
    $$result,
    {
      direction: "next",
      disabled: !infinite && currentPageIndex === pagesCount - 1
    },
    {},
    {}
  )}</div>
      `}` : ``}</div>
  ${dots ? `${slots.dots ? slots.dots({
    currentPageIndex,
    pagesCount,
    showPage: handlePageChange,
    loaded
  }) : `
      ${validate_component(Dots, "Dots").$$render($$result, { pagesCount, currentPageIndex }, {}, {})}
    `}` : ``}
</div>`;
});
export {
  Carousel as C
};
