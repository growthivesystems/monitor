// GrowthIve Monitor: opens a clean printable page. On the print screen choose "Save as PDF".
(function () {
  var eh = function (x) { return String(x == null ? '' : x).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); };
  // opts: { title, business, subtitle, summary:[[label,value]], sections:[{heading, note, head:[...], rows:[[...]], foot:[...]}] }
  window.gvPrintReport = function (opts) {
    var w = window.open('', '_blank');
    if (!w) { alert('Your browser blocked the report window. Allow pop-ups for this site and try again.'); return false; }
    var html = '<!doctype html><html><head><meta charset="utf-8"><title>' + eh(opts.title) + '</title><style>' +
      'body{font-family:Arial,Helvetica,sans-serif;color:#111;margin:28px;font-size:13px}h1{margin:0 0 2px;font-size:22px}h2{font-size:15px;margin:22px 0 4px}' +
      '.sub{color:#555;margin-bottom:14px}.sum{display:flex;flex-wrap:wrap;gap:10px;margin:12px 0}.sum div{border:1px solid #ccc;border-radius:6px;padding:8px 12px;min-width:120px}' +
      '.sum b{display:block;font-size:16px;margin-top:2px}.note{color:#666;font-size:12px;margin-bottom:6px}' +
      'table{width:100%;border-collapse:collapse;margin-top:4px}th,td{border:1px solid #ccc;padding:6px 8px;text-align:left}th{background:#f1f1f1}tfoot td{font-weight:700;background:#fafafa}' +
      '.foot{margin-top:22px;color:#777;font-size:11px}@media print{body{margin:12mm}}</style></head><body>' +
      '<h1>' + eh(opts.title) + '</h1><div class="sub">' + eh(opts.business || '') + ' · ' + eh(opts.subtitle || '') + '</div>';
    if (opts.summary && opts.summary.length) html += '<div class="sum">' + opts.summary.map(function (s) { return '<div>' + eh(s[0]) + '<b>' + eh(s[1]) + '</b></div>'; }).join('') + '</div>';
    (opts.sections || []).forEach(function (sec) {
      html += '<h2>' + eh(sec.heading) + '</h2>' + (sec.note ? '<div class="note">' + eh(sec.note) + '</div>' : '');
      html += '<table><thead><tr>' + sec.head.map(function (h) { return '<th>' + eh(h) + '</th>'; }).join('') + '</tr></thead><tbody>' +
        sec.rows.map(function (r) { return '<tr>' + r.map(function (c) { return '<td>' + eh(c) + '</td>'; }).join('') + '</tr>'; }).join('') + '</tbody>' +
        (sec.foot ? '<tfoot><tr>' + sec.foot.map(function (c) { return '<td>' + eh(c) + '</td>'; }).join('') + '</tr></tfoot>' : '') + '</table>';
    });
    html += '<div class="foot">Made with GrowthIve Monitor</div></body></html>';
    w.document.open(); w.document.write(html); w.document.close();
    w.focus(); setTimeout(function () { try { w.print(); } catch (e) {} }, 400);
    return true;
  };
})();
