/**
 * @param {int} a Min int
 * @param {int} b Max int
 * @return {number}
 */
const rand = (a,b) => a+(b-a+1)*crypto.getRandomValues(new Uint32Array(1))[0]/2**32|0;

export default rand;