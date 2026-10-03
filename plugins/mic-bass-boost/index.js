(() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  var plugin_exports = {};
  __export(plugin_exports, {
    default: () => plugin
  });

  var plugin = {
    onLoad: () => {
      try {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (!AudioContextClass) return;

        const audioCtx = new AudioContextClass();

        const bassFilter = audioCtx.createBiquadFilter();
        bassFilter.type = "lowshelf";
        bassFilter.frequency.value = 180;
        bassFilter.gain.value = 25;

        const lowPassFilter = audioCtx.createBiquadFilter();
        lowPassFilter.type = "lowpass";
        lowPassFilter.frequency.value = 1200;

        bassFilter.connect(lowPassFilter);

        console.log("[MicBassBoost] Bass Boost aktif!");
      } catch (e) {
        console.error("[MicBassBoost] Hata:", e);
      }
    },
    onUnload: () => {
      console.log("[MicBassBoost] Pasif!");
    }
  };

  return __toCommonJS(plugin_exports);
})();
