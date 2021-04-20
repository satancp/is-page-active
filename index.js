const init = () => {
  let hidden, visibilityState, visibilityChange;
  if (typeof document.hidden !== "undefined") {
    (hidden = "hidden"),
      (visibilityChange = "visibilitychange"),
      (visibilityState = "visibilityState");
  } else if (typeof document.mozHidden !== "undefined") {
    (hidden = "mozHidden"),
      (visibilityChange = "mozvisibilitychange"),
      (visibilityState = "mozVisibilityState");
  } else if (typeof document.msHidden !== "undefined") {
    (hidden = "msHidden"),
      (visibilityChange = "msvisibilitychange"),
      (visibilityState = "msVisibilityState");
  } else if (typeof document.webkitHidden !== "undefined") {
    (hidden = "webkitHidden"),
      (visibilityChange = "webkitvisibilitychange"),
      (visibilityState = "webkitVisibilityState");
  }
  return {
    hidden,
    visibilityChange,
    visibilityState,
  };
};

const onActiveChange = (callback) => {
  const patams = init();
  if (isSupported()) {
    document.addEventListener(
      patams.visibilityChange,
      () => {
        if (document[patams.visibilityState] === "visible") {
          if (callback) callback(true);
        } else if (document[patams.visibilityState] === "hidden") {
          if (callback) callback(false);
        }
      },
      false
    );
  }
};

const isActive = () => {
  const patams = init();
  if (document[patams.visibilityState] === "visible") return true;
  return false;
};

const isSupported = () => {
  const patams = init();
  if (
    typeof document.addEventListener === "undefined" ||
    typeof params.hidden === "undefined"
  ) {
    return false;
  }
  return true;
};

export default { onActiveChange, isActive, isSupported };
