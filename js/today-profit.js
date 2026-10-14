// GrowthIve Monitor: "Today" card on the dashboard. Plain words, no charts.
(function () {
  'use strict';
  var money = function (n) { return (typeof formatCurrency === 'function') ? formatCurrency(n) : '₦' + Number(n || 0).toFixed(2); };
  var esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]; }); };

  window.renderTodayProfit = async function (userId) {
    try {
      var main = document.querySelector('.main');
      var anchor = document.querySelector('.month-nav');
      if (!main || document.getElementById('today-profit')) return;
      var today = new Date().toLocaleDateString('en-CA');

      var res = await Promise.all([
        _supabase.from('sales').select('total_amount').eq('user_id', userId).eq('date', today),
        _supabase.from('purchase_transactions').select('total_amount, items').eq('user_id', userId).eq('date', today),
        _supabase.from('expenses').select('amount').eq('user_id', userId).eq('date', today),
        _supabase.from('inventory').select('*').eq('user_id', userId).is('deleted_at', null)
      ]);
      var sales = res[0].data || [], txns = res[1].data || [], exps = res[2].data || [], inv = res[3].data || [];
      var sum = function (rows, k) { return rows.reduce(function (s, r) { return s + Number(r[k] || 0); }, 0); };

      // Sold today: the Daily Sales row (manual + POS + services). If it is missing, fall back to today's POS sales.
      var sold = sales.length ? sum(sales, 'total_amount') : sum(txns, 'total_amount');
      var spent = sum(exps, 'amount');
      var left = sold - spent;

      // Profit on goods sold: uses "I bought it for" prices, only for items that have one.
      var costById = {}, costByName = {};
      inv.forEach(function (i) { if (Number(i.cost_price) > 0) { costById[i.id] = Number(i.cost_price); costByName[String(i.item_name).toLowerCase()] = Number(i.cost_price); } });
      var withCost = 0, cogs = 0, missing = {};
      txns.forEach(function (t) {
        (Array.isArray(t.items) ? t.items : []).forEach(function (it) {
          var c = costById[it.id] || costByName[String(it.name || '').toLowerCase()];
          var sub = Number(it.subtotal || (Number(it.price || 0) * Number(it.qty || 0)));
          if (c) { withCost += sub; cogs += c * Number(it.qty || 0); } else { missing[it.name || 'item'] = 1; }
        });
      });
      var goodsProfit = withCost - cogs, missingN = Object.keys(missing).length;

      var box = function (label, val, color) {
        return '<div style="padding:14px 16px;background:var(--dark3);border-radius:var(--radius-sm);">' +
          '<div class="card-title" style="margin:0 0 4px;">' + label + '</div>' +
          '<div class="card-value ' + (color || '') + '" style="font-size:1.35rem;">' + val + '</div></div>';
      };
      var goods = '';
      if (txns.length) {
        if (withCost > 0) {
          goods = '<div style="margin-top:12px;font-size:0.88rem;">Profit on the items you sold today: <strong style="color:' + (goodsProfit >= 0 ? 'var(--success)' : 'var(--danger)') + ';">' + money(goodsProfit) + '</strong>' +
            (missingN ? ' <span style="color:var(--muted);">(' + missingN + ' item' + (missingN > 1 ? 's' : '') + ' sold ha' + (missingN > 1 ? 've' : 's') + ' no "I bought it for" price yet)</span>' : '') + '</div>';
        } else {
          goods = '<div style="margin-top:12px;font-size:0.82rem;color:var(--muted);">Add an "I bought it for" price to your items (in Inventory) to see your profit on each sale.</div>';
        }
      }
      var card = document.createElement('div');
      card.id = 'today-profit'; card.className = 'card'; card.style.marginBottom = '20px';
      card.innerHTML =
        '<div class="modal-title" style="font-size:1.05rem;margin-bottom:12px;">📅 <span>Today</span></div>' +
        '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:12px;">' +
        box('You sold', money(sold), 'gold') + box('You spent', money(spent), 'danger') +
        box('Money left', money(left), left >= 0 ? 'success' : 'danger') + '</div>' + goods +
        '<div style="margin-top:8px;font-size:0.74rem;color:var(--muted);">"You spent" is the expenses you recorded today, including supplies you restocked.</div>';
      if (anchor && anchor.parentNode) anchor.parentNode.insertBefore(card, anchor); else main.appendChild(card);
    } catch (e) { console.warn('Today card failed:', e); }
  };
})();
