export function listData(list, out) {
  out.innerHTML = "";
  let output = "";
  for (let item of list) {
      output += `${item.name}`
  }
  if (output) {
      out.innerHTML = output;
  } else {
      out.innerHTML = "<li>Nothing to list here</li>"
  }
}