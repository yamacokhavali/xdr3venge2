module.exports = {
    onLoad(api) {
        console.log("[MicBassBoost] PLUGIN YÜKLENDİ");

        if (!api) {
            console.log("[MicBassBoost] API GELMEDİ");
            return;
        }

        console.log("[MicBassBoost] API OK");
        console.log("[MicBassBoost] API KEYS:", Object.keys(api));
    },

    onUnload() {
        console.log("[MicBassBoost] PLUGIN KAPANDI");
    }
};
