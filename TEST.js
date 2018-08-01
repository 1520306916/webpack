
Get 的传参方法
export function parseParam(param, key) {
  let paramStr = '';
  if (typeof param === 'string' || typeof param === 'number' || typeof param === 'boolean') {
    paramStr += `&${key}=${encodeURIComponent(param)}`;
  } else {
    Object.keys(param).forEach((i) => {
      const k = (key == null) ? i : (key + (param instanceof Array ? `[${i}]` : `.${i}`));
      paramStr += `&${parseParam(param[i] ? param[i] : '', k)}`;
    });
  }
  return paramStr.substr(1);
}

export function parseElementCode(pageElement, name) {
  return (pageElement && pageElement[name]) ? pageElement[name].code : '';
}
