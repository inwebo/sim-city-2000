import {Vector2D} from "@inwebo/vector";

export default class ChunkFactory {
  /**
   * @param {Vector2D} origin
   * @param {number} dimension
   */
  constructor (origin, dimension) {
    this._origin    = origin;
    this._dimension = dimension;
  }

  getChunk() {
    const chunk = new Chunk(new Vector2D(this._dimension, this._dimension));
  }
}