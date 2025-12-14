/* =====================================================
   🌙 NOCTURNE ENGINE — 2D RENDERER
   ===================================================== */

import { State } from "./state.js";

export const Renderer = {

    init(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
    },

    clear() {
        this.ctx.fillStyle = "#000";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    },

    drawImage(img, x, y, w, h) {
        this.ctx.drawImage(img, x, y, w, h);
    },

    renderFrame() {
        if (!State.isLoaded) return;

        this.clear();

        // Affiche fond
        if (State.assets.backgroundImg)
            this.drawImage(State.assets.backgroundImg, 0, 0, this.canvas.width, this.canvas.height);

        // Affiche orbe
        if (State.assets.orbImg)
            this.drawImage(State.assets.orbImg, this.canvas.width/2 - 64, this.canvas.height/2 - 64, 128, 128);

        // Affiche mascotte
        if (State.assets.mascotteImg)
            this.drawImage(State.assets.mascotteImg, 20, this.canvas.height - 250, 200, 200);

        requestAnimationFrame(() => this.renderFrame());
    }

};
