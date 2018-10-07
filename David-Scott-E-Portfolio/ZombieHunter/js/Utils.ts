/*
module Utils {
export interface FullscreenListener {
        onFullscreenChange(aFullscreenOn: boolean): void;
    }
    export class FullscreenUtils {
        // game in fullscreen?
        private static _fullscreen: boolean = false;
        listener
        private static _listener: (aFullscreenOn: boolean) => void = null;
        private static _listenerContext: any = null
        // -------------------------------------------------------------------------
        public static supported(): boolean {
            var game: Phaser.Game = Woodventure.Global.game;
            return (game.scale.compatibility.supportsFullScreen);
        }
        // -------------------------------------------------------------------------
        public static isFullscreen(): boolean {
            return Woodventure.Global.game.scale.isFullScreen;
        }
        // -------------------------------------------------------------------------
        public static changeFullscreen() {
            var game: Phaser.Game = Woodventure.Global.game;
            if (!FullscreenUtils._fullscreen) {
                game.scale.startFullScreen(false, false);
            }
            else {
                game.scale.stopFullScreen();
            }
        }
        // -------------------------------------------------------------------------
        public static onEnterFullscreen() {
            FullscreenUtils._fullscreen = true;
            console.log("Fullscreen = TRUE");
            if (FullscreenUtils._listener !== null) {
                FullscreenUtils._listener.call(FullscreenUtils._listenerContext, true);
            }
        }
        // -------------------------------------------------------------------------
        public static onLeaveFullscreen() {
            FullscreenUtils._fullscreen = false;
            console.log("Fullscreen = FALSE");
            if (FullscreenUtils._listener !== null) {
                FullscreenUtils._listener.call(FullscreenUtils._listenerContext, false);
            }
        }
        // -------------------------------------------------------------------------
        public static setListener(aListener: (aFullScreen: boolean) => void, aListenerContext: any): void {
            FullscreenUtils._listener = aListener;
            FullscreenUtils._listenerContext = aListenerContext;
        }
        // -------------------------------------------------------------------------
        public static removeListener(): void
        {
            FullscreenUtils._listener = null;
            FullscreenUtils._listenerContext = null;}
    }
}
*/
