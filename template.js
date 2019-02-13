const filterTPL = (_cpu) => `
    <div class="ui checked checkbox">
      <input type="checkbox" checked="" data-type='cpu' cpu=${_cpu}>
      <label>${_cpu} </label>
    </div>`;

// String literal $ not working due to conflict with jquery
const callTPL = (_ts, _cpu, _delta, _name) => `
    <tr f-ts=${_ts} f-cpu=${_cpu}>
      <td class="center aligned">${_ts}</td>
      <td class="center aligned">${_cpu}</td>
      <td class="center aligned">${_delta}</td>
      <td><pre>${_name}</pre></td>
    </tr>`;

const classTPL = (_classRows) => `
<table class="ui very compact table">
   <thead>
      <tr>
         <th>Attr</th>
         <th>Value</th>
      </tr>
   </thead>
   <tbody>${_classRows}</tbody>
</table>
`;

const classRowTPL = (k, v, diff) => `
<tr>
   <td class=${diff ? 'negative' : ''}>${k}</td>
   <td class=${diff ? 'negative' : ''}>${v}</td>
</tr>
`;
const diffData = (prev, curr) => {
  if (!_.isNull(prev) && !_.isEqual(_.keys(prev).sort(), _.keys(curr).sort())) {
    alert("ERR: Not same Data");
    return
  }

  let classRows = '';
  _.keys(curr).forEach(k => {
    let val = '', diff = false;
    if (!_.isNull(prev) && !_.isEqual(prev[k], curr[k])) {
      val = `${prev[k]} -> `
      diff = true;
    }
    val += `${curr[k]}`;
    classRows += classRowTPL(k, val, diff)
  });

  return classTPL(classRows)
};
