export default function callHook(vm, hook) {
  const handler = vm.$options[hook]
  if (handler) handler.call(vm)
}