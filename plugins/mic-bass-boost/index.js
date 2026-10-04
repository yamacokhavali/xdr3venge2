module.exports = {
    onLoad() {
        console.log("[MicBassDebug] ===== BAŞLADI =====");

        try {
            const metro = bunny.api?.metro;

            if (!metro) {
                console.log("[MicBassDebug] Metro API YOK");
                return;
            }

            console.log("[MicBassDebug] Metro bulundu");

            const props = [
                "setInputVolume",
                "setAudioInputVolume",
                "setMicrophoneVolume",
                "setInputDevice",
                "setVoiceSettings",
                "getInputVolume",
                "getAudioInputVolume",
                "startRecording",
                "stopRecording"
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
                } catch (e) {
                    console.log(
                        "[MicBassDebug] İsim arama hatası:",
                        name,
                        String(e)
                    );
                }
            }

            console.log("[MicBassDebug] ===== TEST HAZIR =====");
            console.log("[MicBassDebug] Ses kanalına gir.");
            console.log("[MicBassDebug] Mikrofonu kapat/aç.");

        } catch (e) {
            console.error("[MicBassDebug] ANA HATA:", e);
        }
    },

    onUnload() {
        console.log("[MicBassDebug] ===== DURDU =====");
    }
};
