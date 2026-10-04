(function () {
    return {
        onLoad: function () {
            console.log("[MicBassDebug] === BAŞLADI ===");

            try {
                const metro = bunny.api.metro;

                if (!metro) {
                    console.log("[MicBassDebug] Metro API bulunamadı!");
                    return;
                }

                const props = [
                    "setInputVolume",
                    "setAudioInputVolume",
                    "setMicrophoneVolume",
                    "setInputDevice",
                    "setVoiceSettings",
                    "setLocalMute",
                    "setSelfMute",
                    "getInputVolume",
                    "getAudioInputVolume"
                ];

                for (const prop of props) {
                    try {
                        const mod = metro.findByProps(prop);

                        if (mod) {
                            console.log(
                                "[MicBassDebug] BULUNDU:",
                                prop,
                                Object.keys(mod)
                            );
                        }
                    } catch (e) {
                        console.log(
                            "[MicBassDebug] Arama hatası:",
                            prop,
                            String(e)
                        );
                    }
                }

                // İsim üzerinden olası voice/audio modüllerini dene
                const names = [
                    "MediaEngine",
                    "MediaEngineStore",
                    "VoiceEngine",
                    "RTCConnection",
                    "AudioManager",
                    "AudioModule"
                ];

                for (const name of names) {
                    try {
                        const mod = metro.findByName(name, false);

                        if (mod) {
                            console.log(
                                "[MicBassDebug] İSİM BULUNDU:",
                                name,
                                Object.keys(mod)
                            );
                        }
                    } catch (e) {}
                }

                console.log(
                    "[MicBassDebug] Şimdi Discord'da bir sesli kanala gir."
                );
                console.log(
                    "[MicBassDebug] Mikrofonu aç/kapat ve bu logları kontrol et."
                );

            } catch (e) {
                console.error("[MicBassDebug] ANA HATA:", e);
            }
        },

        onUnload: function () {
            console.log("[MicBassDebug] === DURDU ===");
        }
    };
})();
