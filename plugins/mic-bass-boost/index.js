// plugins/mic-bass-boost/index.ts
var audioCtx = null;
var bassFilter = null;
var lowPassFilter = null;
var mic_bass_boost_default = {
  onLoad: () => {
    try {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (!AudioContextClass)
        return;
      audioCtx = new AudioContextClass();
      bassFilter = audioCtx.createBiquadFilter();
      bassFilter.type = "lowshelf";
      bassFilter.frequency.value = 180;
      bassFilter.gain.value = 25;
      lowPassFilter = audioCtx.createBiquadFilter();
      lowPassFilter.type = "lowpass";
      lowPassFilter.frequency.value = 1200;
      bassFilter.connect(lowPassFilter);
      console.log("[MicBassBoost] Bo\u011Fuk & A\u011F\u0131r Bass Boost aktif edildi!");
    } catch (e) {
      console.error("[MicBassBoost] Hata:", e);
    }
  },
  onUnload: () => {
    if (audioCtx) {
      audioCtx.close();
      audioCtx = null;
    }
    console.log("[MicBassBoost] Eklenti kapat\u0131ld\u0131.");
  }
};
export {
  mic_bass_boost_default as default
};
