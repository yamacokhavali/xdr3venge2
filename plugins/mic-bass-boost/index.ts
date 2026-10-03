let audioCtx: AudioContext | null = null;
let bassFilter: BiquadFilterNode | null = null;
let lowPassFilter: BiquadFilterNode | null = null;

export default {
  onLoad: () => {
    try {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContextClass) return;

      audioCtx = new AudioContextClass();

      // 1. Derin ve Ağır Bass Yükseltme Filtresi
      bassFilter = audioCtx.createBiquadFilter();
      bassFilter.type = "lowshelf";
      bassFilter.frequency.value = 180; // Tok ve ağır bass frekansı
      bassFilter.gain.value = 25;       // +25dB güçlü bass boost

      // 2. Boğuklaştırma Filtresi (Tiz Sesleri Kısma)
      lowPassFilter = audioCtx.createBiquadFilter();
      lowPassFilter.type = "lowpass";
      lowPassFilter.frequency.value = 1200; // Tizleri keserek sesi boğuklaştırır

      // Filtreleri birbirine bağla
      bassFilter.connect(lowPassFilter);

      console.log("[MicBassBoost] Boğuk & Ağır Bass Boost aktif edildi!");
    } catch (e) {
      console.error("[MicBassBoost] Hata:", e);
    }
  },

  onUnload: () => {
    if (audioCtx) {
      audioCtx.close();
      audioCtx = null;
    }
    console.log("[MicBassBoost] Eklenti kapatıldı.");
  }
};
