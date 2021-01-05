let activeEffect = null
function effect(fn){
  console.log('reactive-effect-activeEffect',fn);
  activeEffect = fn
}
// console.log('tamesiteeeeeeee efect',effect);
function trigger(){
  console.log('reactive-trigger-activeEffect',activeEffect);
  activeEffect()
}
export { effect, trigger}