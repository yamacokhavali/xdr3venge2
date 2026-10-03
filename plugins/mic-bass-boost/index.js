export default {
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
