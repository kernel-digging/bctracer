const filterTPL = (_cpu) => `
    <div class="ui checked checkbox">
      <input type="checkbox" checked="" data-cpu=${_cpu}>
      <label>${_cpu}</label>
    </div>`;

const callTPL = (_ts, _cpu, _delta, _name) => `
    <tr f-cpu=${_cpu}>
      <td class="center aligned" f-ts=${_ts}>${_ts}</td>
      <td class="center aligned">${_cpu}</td>
      <td class="center aligned">${_delta}</td>
      <td><pre>${_name}</pre></td>
    </tr>`;

const sample =
  `26428.375252 |   7)   0.444 us    |                          enqueue_hrtimer();
26428.375253 |   7)   0.093 us    |                          __remove_hrtimer();
26428.375253 |   7)               |                          intel_uncore_fw_release_timer [i915]() {
26428.375254 |   7)   0.066 us    |                            _raw_spin_lock_irqsave();
26428.375255 |   7)   0.061 us    |                            fw_domains_put [i915]();
26428.375256 |   7)   0.061 us    |                            _raw_spin_unlock_irqrestore();
26428.375256 |   7)   2.677 us    |                          }
26428.375257 |   7)   0.061 us    |                          _raw_spin_lock();
26428.375257 |   7)   8.642 us    |                        }
26428.375258 |   7)               |                        tick_program_event() {
26428.375258 |   7)               |                          clockevents_program_event() {
26428.375258 |   7)   0.089 us    |                            ktime_get();
26428.375259 |   7)   0.162 us    |                            lapic_next_deadline();
26428.375260 |   7)   1.741 us    |                          }
26428.375261 |   7)   2.680 us    |                        }
CPU:4 [LOST 51128 EVENTS]
26428.375914 |   4)   0.063 us    |          } /* ldsem_up_read */
26428.375915 |   4)   1.506 us    |        } /* tty_ldisc_deref */
26428.375915 |   4) + 14.985 us   |      } /* tty_port_default_receive_buf */
26428.375915 |   4)               |      tty_port_default_receive_buf() {
26428.375916 |   4)               |        tty_ldisc_ref() {
26428.375916 |   4)   0.041 us    |          ldsem_down_read_trylock();
26428.375916 |   4)   0.556 us    |        }
26428.375917 |   4)               |        tty_ldisc_receive_buf() {
26428.375917 |   4)               |          n_tty_receive_buf2() {
26428.375917 |   4)               |            n_tty_receive_buf_common() {
26428.375918 |   4)               |              down_read() {
26428.375918 |   4)               |                _cond_resched() {
26428.375918 |   4)   0.042 us    |                  rcu_all_qs();
26428.375919 |   4)   0.615 us    |                }`;

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


const sampleData = {
  "26428.375252": {
    'magic': '1',
    'sequence': '1',
    'time': '2',
    'sector': '3',
    'bytes': '4',
    'action': '5',
    'pid': '6',
    'device': '7',
    'cpu': '7',
    'error': '0',
    'pdu_len': '8'
  },
  "26428.375257": {
    'magic': '2',
    'sequence': '1',
    'time': '21',
    'sector': '3',
    'bytes': '44',
    'action': '5',
    'pid': '6',
    'device': '7',
    'cpu': '7',
    'error': '0',
    'pdu_len': '8'
  },
  "26428.375260": {
    'magic': '13',
    'sequence': '1',
    'time': '29',
    'sector': '3',
    'bytes': '49',
    'action': '5',
    'pid': '6',
    'device': '7',
    'cpu': '7',
    'error': '0',
    'pdu_len': '8'
  },
};
