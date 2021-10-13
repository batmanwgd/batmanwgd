import Blob from "cross-blob"
 
new Blob([])
//=> Blob {size: 0, type: ""}
 
// Global patch (to support external modules like is-blob).
globalThis.Blob = Blob


// OR

import { Blob } from "node:buffer"

new Blob([])
//=> Blob {size: 0, type: ""}

// OR

let buffer = Buffer.from(arraybuffer);
let arraybuffer = Uint8Array.from(buffer).buffer;