import { publicFn as fn, publicVal as val } from "./moduleA.js";
fn();
fn();
fn();
// moduleA.publicVal;
console.log(val.prop++);
console.log(val.prop++);
fn();
