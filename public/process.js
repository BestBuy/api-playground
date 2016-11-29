/* global superagent, hljs */
var els = document.getElementsByTagName('h4');
var elements = Array.prototype.slice.call(els);

elements.forEach(function (e) {
  var url = e.innerText;
  superagent
    .get(url)
    .set('Accept', 'application/json')
    .end(function (err, res) {
      if (err) console.error(err);
      var obj = JSON.parse(res.text);

      var pre = document.createElement('pre');
      var resp = document.createElement('code');
      pre.appendChild(resp);
      resp.innerHTML = JSON.stringify(obj, null, 4);
      e.parentNode.insertBefore(pre, e.nextSibling);

      hljs.highlightBlock(resp);
    });
});
