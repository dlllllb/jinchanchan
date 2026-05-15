// 金铲铲之战 S17星神赛季 应用逻辑 v3
// 参考网易阵容大师设计：混合符文选择+英雄专属符文匹配+一图流

// ==================== 全局变量 ====================
let selectedHexes = [null, null, null];  // 3个符文位，每个可任选银/金/彩
let selectedConstellation = null;
let selectedStarGods = { first: null, second: null };
let selectedChampions = [];
const HEX_TIER_NAMES = { silver: '白银', gold: '黄金', prismatic: '彩色' };
const HEX_TIER_CLASS = { silver: 'silver', gold: 'gold', prismatic: 'prismatic' };

// 合并后的全部符文列表（含等级标识）
let allHexes = [];

// ==================== 页面初始化 ====================
document.addEventListener('DOMContentLoaded', function() {
    initApp();
});

function initApp() {
    console.log("初始化金铲铲之战 S17阵容推荐助手 v3...");
    // 合并所有符文（银+金+彩）
    buildAllHexes();
    // 加载3个混合下拉
    for (let i = 1; i <= 3; i++) loadHexSelect(i);
    // 其他下拉
    loadConstellationSelect();
    loadStarGodSelect('stargod-1');
    loadStarGodSelect('stargod-2');
    loadChampions();
    loadCompositions();
    loadItems();
    console.log("初始化完成！共加载 " + allHexes.length + " 个强化符文");
}

function buildAllHexes() {
    allHexes = [];
    ['silver', 'gold', 'prismatic'].forEach(tier => {
        (hexes[tier] || []).forEach(h => {
            allHexes.push({ ...h, hexTier: tier });
        });
    });
}

// ==================== 标签切换（修复版）====================
function switchTab(tabName) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
    document.getElementById(tabName + '-page').classList.add('active');
    // 不使用全局event，直接通过tabName匹配
    document.querySelectorAll('.nav-tab').forEach(t => {
        if (t.getAttribute('onclick') && t.getAttribute('onclick').includes("'" + tabName + "'")) {
            t.classList.add('active');
        }
    });
}

// ==================== 强化符文混合下拉 ====================
function loadHexSelect(slot) {
    const select = document.getElementById('hex-' + slot);
    if (!select) return;
    select.innerHTML = '<option value="">符文 ' + slot + ' — 未选择</option>';
    // 按等级分组显示
    ['silver', 'gold', 'prismatic'].forEach(tier => {
        const group = document.createElement('optgroup');
        group.label = '━━ ' + HEX_TIER_NAMES[tier] + ' ━━';
        (hexes[tier] || []).forEach((hex, idx) => {
            const globalIdx = allHexes.findIndex(h => h.name === hex.name && h.hexTier === tier);
            if (globalIdx === -1) return;
            const opt = document.createElement('option');
            opt.value = globalIdx;
            opt.textContent = '[' + HEX_TIER_NAMES[tier] + '] ' + hex.name;
            group.appendChild(opt);
        });
        select.appendChild(group);
    });
}

function onHexSelect(slot) {
    const select = document.getElementById('hex-' + slot);
    const detail = document.getElementById('hex-detail');
    const val = select.value;
    if (val === '') {
        selectedHexes[slot - 1] = null;
        detail.style.display = 'none';
        updateSelectionSummary();
        return;
    }
    const hex = allHexes[parseInt(val)];
    selectedHexes[slot - 1] = hex;

    // 显示详情
    const tierColor = hex.hexTier === 'silver' ? '#C0C0C0' : hex.hexTier === 'gold' ? '#FFD700' : '#E8EAF6';
    detail.style.display = 'block';
    detail.innerHTML = `
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px;">
            <strong>${hex.name}</strong>
            <span style="padding:2px 10px;border-radius:12px;font-size:11px;font-weight:bold;background:${tierColor};color:#333;">${HEX_TIER_NAMES[hex.hexTier]}</span>
            <span style="font-size:11px;color:var(--text-secondary);">${getHexTypeName(hex.type)}</span>
        </div>
        <div style="font-size:13px;line-height:1.6;">${hex.effect}</div>
        ${hex.forChamp ? `<div style="margin-top:6px;font-size:13px;color:var(--primary);"><i class="fas fa-bolt"></i> 专属英雄：${hex.forChamp}</div>` : ''}
    `;
    updateSelectionSummary();
}

function getHexTypeName(type) {
    const map = { hero: '英雄强化', economic: '经济运营', equipment: '装备神器', combat: '战斗增益', special: '特殊机制', gamble: '赌注随机', other: '其他' };
    return map[type] || type;
}

// ==================== 观星者星座下拉 ====================
function loadConstellationSelect() {
    const sel = document.getElementById('constellation-select');
    if (!sel || !constellations) return;
    sel.innerHTML = '<option value="">未选择（推荐所有阵容）</option>';
    constellations.forEach((c, i) => {
        const opt = document.createElement('option');
        opt.value = i;
        opt.textContent = c.name + ' — ' + c.effect;
        sel.appendChild(opt);
    });
}

function onConstellationSelect() {
    const sel = document.getElementById('constellation-select');
    const detail = document.getElementById('constellation-detail');
    if (sel.value === '') { selectedConstellation = null; detail.style.display = 'none'; updateSelectionSummary(); return; }
    selectedConstellation = constellations[parseInt(sel.value)];
    detail.style.display = 'block';
    detail.innerHTML = `<strong>${selectedConstellation.name}</strong><div style="margin-top:6px;font-size:13px;color:var(--text-secondary);">${selectedConstellation.description}</div>
        <div style="margin-top:6px;">适合：${selectedConstellation.suitableFor.map(s => `<span style="display:inline-block;padding:2px 8px;background:#333;border-radius:10px;font-size:12px;color:var(--primary);margin:2px;">${s}</span>`).join('')}</div>`;
    updateSelectionSummary();
}

// ==================== 星神赐福2个下拉 ====================
function loadStarGodSelect(selId) {
    const sel = document.getElementById(selId);
    if (!sel || !starGods) return;
    sel.innerHTML = '<option value="">未选择</option>';
    starGods.forEach((g, i) => {
        const opt = document.createElement('option');
        opt.value = i;
        opt.textContent = g.icon + ' ' + g.name + ' (' + g.title + ')';
        sel.appendChild(opt);
    });
}

function onStarGodSelect() {
    const s1 = document.getElementById('stargod-1');
    const s2 = document.getElementById('stargod-2');
    const tip = document.getElementById('stargod-tip');
    const detail = document.getElementById('stargod-detail');

    selectedStarGods.first = s1.value !== '' ? starGods[parseInt(s1.value)] : null;
    selectedStarGods.second = s2.value !== '' ? starGods[parseInt(s2.value)] : null;

    const isMain = selectedStarGods.first && selectedStarGods.second && selectedStarGods.first.id === selectedStarGods.second.id;
    tip.style.display = isMain ? 'block' : 'none';

    const gods = [selectedStarGods.first, selectedStarGods.second].filter(Boolean);
    if (gods.length === 0) { detail.style.display = 'none'; updateSelectionSummary(); return; }
    detail.style.display = 'block';
    detail.innerHTML = '<strong>已选星神：</strong><br>';
    gods.forEach((g, i) => {
        const isMainGod = isMain && g.id === selectedStarGods.first.id;
        detail.innerHTML += `<div style="margin-top:8px;padding:10px;background:#333;border-radius:8px;${isMainGod?'border:2px solid var(--primary);':''}">
            <div>${g.icon} ${g.name} (${g.title}) ${isMainGod ? '<span style="color:var(--primary);font-weight:bold;">👑 主神</span>' : ''}</div>
            <div style="font-size:12px;color:var(--text-secondary);margin-top:4px;">${g.description}</div>
            ${g.rewards.ultimate ? `<div style="font-size:12px;color:var(--warning);margin-top:4px;">终极恩赐：${g.rewards.ultimate.effect}</div>` : ''}
        </div>`;
    });
    updateSelectionSummary();
}

// ==================== 英雄选择 ====================
function loadChampions() {
    const grid = document.getElementById('champion-grid');
    if (!grid || !champions) return;
    grid.innerHTML = '';
    champions.forEach(champ => {
        const cc = ['#808080', '#1e88e5', '#8e24aa', '#ff9800', '#f44336'][champ.cost - 1];
        const card = document.createElement('div');
        card.className = 'champion-card';
        card.onclick = () => toggleChampion(champ);
        card.innerHTML = `<div class="champion-cost" style="background:${cc}">${champ.cost}费</div><div class="champion-name">${champ.name}</div>`;
        grid.appendChild(card);
    });
}

function toggleChampion(champ) {
    const idx = selectedChampions.findIndex(c => c.name === champ.name);
    idx > -1 ? selectedChampions.splice(idx, 1) : selectedChampions.push(champ);
    updateChampionUI();
    updateSelectionSummary();
}

function updateChampionUI() {
    const container = document.getElementById('selected-champions');
    if (!container) return;
    container.innerHTML = '';
    if (selectedChampions.length === 0) { container.innerHTML = '<p style="color:var(--text-secondary);font-size:13px;">未选择英雄</p>'; return; }
    selectedChampions.forEach(champ => {
        const cc = ['#808080', '#1e88e5', '#8e24aa', '#ff9800', '#f44336'][champ.cost - 1];
        const tag = document.createElement('div');
        tag.className = 'selected-champ-tag';
        tag.innerHTML = `<span style="color:${cc};font-weight:bold">${champ.cost}费</span><span>${champ.name}</span><span class="remove-champ" onclick="removeChampion('${champ.name}')">&times;</span>`;
        container.appendChild(tag);
    });
    const grid = document.getElementById('champion-grid');
    if (grid) grid.querySelectorAll('.champion-card').forEach(c => {
        const n = c.querySelector('.champion-name').textContent;
        c.classList.toggle('selected', selectedChampions.some(x => x.name === n));
    });
}

function removeChampion(name) {
    event.stopPropagation();
    selectedChampions = selectedChampions.filter(c => c.name !== name);
    updateChampionUI();
    updateSelectionSummary();
}

function filterChampions() {
    const q = document.getElementById('champion-search').value.toLowerCase();
    const grid = document.getElementById('champion-grid');
    if (!grid) return;
    grid.querySelectorAll('.champion-card').forEach(c => {
        c.style.display = c.querySelector('.champion-name').textContent.toLowerCase().includes(q) ? '' : 'none';
    });
}

// ==================== 选择概要 ====================
function updateSelectionSummary() {
    const sum = document.getElementById('selection-summary');
    if (!sum) return;
    let parts = [];
    selectedHexes.forEach((h, i) => {
        if (h) {
            const cls = { silver: 'silver', gold: 'gold', prismatic: 'prismatic' }[h.hexTier];
            parts.push(`<span class="trait-tag" style="border-left:3px solid ${h.hexTier==='silver'?'#C0C0C0':h.hexTier==='gold'?'#FFD700':'#E8EAF6'}">符文${i+1}: ${h.name}</span>`);
        }
    });
    if (selectedConstellation) parts.push(`<span class="trait-tag">⭐${selectedConstellation.name}</span>`);
    if (selectedStarGods.first) parts.push(`<span class="trait-tag">${selectedStarGods.first.icon}${selectedStarGods.first.name}</span>`);
    if (selectedStarGods.second) parts.push(`<span class="trait-tag">${selectedStarGods.second.icon}${selectedStarGods.second.name}</span>`);
    if (selectedStarGods.first && selectedStarGods.second && selectedStarGods.first.id === selectedStarGods.second.id)
        parts.push(`<span class="trait-tag" style="background:rgba(255,152,0,0.3);color:var(--primary);font-weight:bold;">👑 主神已激活</span>`);
    if (selectedChampions.length > 0) parts.push(`<span class="trait-tag">👤 ${selectedChampions.length}位英雄</span>`);
    sum.innerHTML = parts.length > 0 ? parts.join(' ') : '<span style="color:var(--text-secondary);font-size:13px;">暂无选择条件</span>';
}

// ==================== 改进版推荐算法 ====================
function generateRecommendation() {
    if (!compositions || compositions.length === 0) { alert('暂无阵容数据！'); return; }

    const chosenHexes = selectedHexes.filter(Boolean);

    // 扫描所有符文，找出哪个英雄有专属符文被选中
    let heroLockComp = null;  // 如果选了专属符文，锁定包含该英雄的阵容
    chosenHexes.forEach(h => {
        if (h.forChamp) {
            // 找到包含该英雄的阵容
            const matched = compositions.filter(c =>
                c.mainChampions && c.mainChampions.some(mc => mc.includes(h.forChamp))
            );
            if (matched.length > 0 && !heroLockComp) {
                heroLockComp = h.forChamp;
            }
        }
    });

    const scored = compositions.map(comp => {
        let score = 0;
        const reasons = [];

        // 1. 英雄专属符文锁定（强力匹配）
        if (heroLockComp) {
            const hasHero = comp.mainChampions && comp.mainChampions.some(mc => mc.includes(heroLockComp));
            if (hasHero) {
                score += 40;
                reasons.push('🎯 专属英雄 ' + heroLockComp);
            }
        }

        // 2. 符文关键词匹配（20分）
        if (chosenHexes.length > 0) {
            let hits = 0;
            chosenHexes.forEach(h => {
                const keywords = [h.name.replace(/[+\- ]/g, ''), h.type];
                if (comp.hexes && comp.hexes.some(ch => keywords.some(kw => ch.includes(kw)))) {
                    hits++;
                }
                // 匹配符文类型
                if (h.type === 'economic' && comp.hexes && comp.hexes.some(ch => ['DD街区','后期收益','新纪元'].some(kw => ch.includes(kw)))) hits += 0.5;
                if (h.type === 'combat' && comp.hexes && comp.hexes.some(ch => ['飞升','珠光莲花','复苏之风'].some(kw => ch.includes(kw)))) hits += 0.5;
            });
            if (hits > 0) {
                score += Math.min(20, hits * 10);
                reasons.push(`符文匹配`);
            }
        }

        // 3. 星座匹配（15分，可选）
        if (selectedConstellation && comp.constellation === selectedConstellation.name) {
            score += 15;
            reasons.push('⭐星座匹配');
        }

        // 4. 星神匹配（15分，含主神加成）
        const gods = [selectedStarGods.first, selectedStarGods.second].filter(Boolean);
        if (gods.length > 0) {
            let gHits = gods.filter(g => comp.starGod === g.name).length;
            if (gHits > 0) {
                score += 15 * (gHits / gods.length);
                reasons.push(`星神${gHits}/${gods.length}`);
            }
            if (gods.length === 2 && gods[0].id === gods[1].id && comp.starGod === gods[0].name) {
                score += 10;
                reasons.push('👑主神');
            }
        }

        // 5. 已有英雄匹配（20分）
        if (selectedChampions.length > 0) {
            let cHits = selectedChampions.filter(c =>
                comp.mainChampions && comp.mainChampions.some(mc => c.name.includes(mc.replace(/[（(].*/,'')) || mc.includes(c.name.replace(/[（(].*/,'')))
            ).length;
            if (cHits > 0) {
                score += 20 * (cHits / selectedChampions.length);
                reasons.push(`英雄${cHits}/${selectedChampions.length}`);
            }
        }

        // 6. 梯度加分
        if (comp.tier === 'T0') { score += 10; reasons.push('T0强势'); }
        else if (comp.tier === 'T0.5') { score += 7; }
        else if (comp.tier === 'T1') { score += 4; }

        return { comp, score: Math.round(score), reasons };
    });

    // 如果选了专属符文，把包含该英雄的阵容提到最前
    if (heroLockComp) {
        scored.sort((a, b) => {
            const aHas = a.comp.mainChampions && a.comp.mainChampions.some(mc => mc.includes(heroLockComp));
            const bHas = b.comp.mainChampions && b.comp.mainChampions.some(mc => mc.includes(heroLockComp));
            if (aHas && !bHas) return -1;
            if (!aHas && bHas) return 1;
            return b.score - a.score;
        });
    } else {
        scored.sort((a, b) => b.score - a.score);
    }

    displayResults(scored.slice(0, 6));
}

function displayResults(list) {
    const container = document.getElementById('recommendation-list');
    if (!container) return;
    container.innerHTML = '';
    if (list.length === 0) { container.innerHTML = '<p style="text-align:center;color:var(--text-secondary);padding:40px;">未找到匹配的阵容</p>'; return; }

    const frag = document.createDocumentFragment();
    list.forEach((item, idx) => {
        const card = document.createElement('div');
        card.className = 'composition-card';
        card.style.cursor = 'pointer';

        const tClass = item.comp.tier.replace('.', '');
        const tierBg = item.comp.tier === 'T0' ? '#f44336' : item.comp.tier === 'T0.5' ? '#FF9800' : '#2196F3';

        card.innerHTML = `
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
                <div style="font-size:18px;font-weight:bold;color:var(--text-primary);">${item.comp.name}</div>
                <div style="padding:4px 14px;border-radius:16px;font-size:13px;font-weight:bold;color:white;background:${tierBg};">${item.comp.tier}</div>
            </div>
            <div style="font-size:12px;color:var(--text-secondary);margin-bottom:8px;">难度：${item.comp.difficulty}</div>
            <div style="font-size:13px;color:var(--text-secondary);line-height:1.6;margin-bottom:10px;">${item.comp.description || ''}</div>
            <div style="display:flex;flex-wrap:wrap;gap:5px;margin-bottom:10px;">
                ${item.comp.traits.map(t => `<span class="trait-tag">${getTraitName(t)}</span>`).join('')}
            </div>
            <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 12px;background:rgba(255,152,0,0.1);border-radius:8px;margin-bottom:10px;">
                <span style="font-size:16px;font-weight:bold;color:var(--primary);">匹配度 ${item.score}%</span>
                <span style="font-size:12px;color:var(--text-secondary);">${item.reasons.join(' · ')}</span>
            </div>
            <button class="btn-primary" style="width:100%;padding:10px;font-size:14px;" onclick="showDetail('${item.comp.id}')">
                <i class="fas fa-info-circle"></i> 查看阵容详情
            </button>
        `;
        frag.appendChild(card);
    });
    container.appendChild(frag);
    container.scrollIntoView({ behavior: 'smooth' });
}

// ==================== 一图流阵容详情 ====================
function showDetail(compId) {
    const comp = compositions.find(c => c.id === compId);
    if (!comp) return;
    const modal = document.getElementById('composition-detail');
    const body = document.getElementById('modal-body');

    // ===== 完整英雄列表（从站位数据提取阵容全部英雄，去重） =====
    let allChamps = [];
    if (comp.position) {
        const seen = new Set();
        ['front', 'middle', 'back'].forEach(row => {
            (comp.position[row] || []).forEach(c => {
                if (!seen.has(c)) { seen.add(c); allChamps.push(c); }
            });
        });
    }
    
    // 完整阵容显示
    let fullRosterHTML = '';
    if (allChamps.length > 0) {
        fullRosterHTML = '<div style="margin:12px 0;"><div style="font-size:15px;font-weight:bold;margin-bottom:8px;"><i class="fas fa-users"></i> 完整阵容（' + allChamps.length + '人）</div><div style="display:flex;flex-wrap:wrap;gap:6px;">';
        allChamps.forEach(c => {
            const cd = champions.find(x => x.name === c || c.includes(x.name));
            const cc = cd ? ['#808080','#1e88e5','#8e24aa','#ff9800','#f44336'][cd.cost-1] : '#808080';
            const costLabel = cd ? cd.cost : '?';
            fullRosterHTML += '<span style="display:inline-flex;align-items:center;gap:4px;padding:5px 10px;background:#2a2a2a;border-radius:8px;border:2px solid ' + cc + ';font-size:13px;"><span style="display:inline-flex;align-items:center;justify-content:center;width:20px;height:20px;border-radius:50%;background:' + cc + ';color:#fff;font-size:11px;font-weight:bold;">' + costLabel + '</span> ' + c + '</span>';
        });
        fullRosterHTML += '</div></div>';
    }

    // ===== 羁绊详情 =====
    let traitsHTML = '';
    if (comp.traits && comp.traits.length > 0 && typeof traits !== 'undefined') {
        traitsHTML = '<div style="margin:12px 0;"><div style="font-size:15px;font-weight:bold;margin-bottom:10px;"><i class="fas fa-link"></i> 羁绊详情</div><div style="display:flex;flex-wrap:wrap;gap:8px;">';
        comp.traits.forEach(tid => {
            const t = traits.find(x => x.id === tid);
            if (t) {
                const desc = t.description || '';
                const levels = t.levels ? t.levels.join('/') : '';
                const typeLabel = t.type === 'class' ? '职业' : '种族';
                traitsHTML += '<div style="background:#222;border-radius:8px;padding:10px;flex:1;min-width:160px;border:1px solid rgba(255,255,255,0.08);">';
                traitsHTML += '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;">';
                traitsHTML += '<span style="font-weight:bold;color:var(--primary);font-size:14px;">' + t.name + '</span>';
                traitsHTML += '<span style="font-size:11px;color:var(--text-secondary);background:rgba(255,255,255,0.05);padding:2px 8px;border-radius:4px;">' + typeLabel + '</span>';
                traitsHTML += '</div>';
                if (levels) traitsHTML += '<div style="font-size:11px;color:#ff9800;margin-bottom:4px;">羁绊等级: ' + levels + '</div>';
                if (desc) traitsHTML += '<div style="font-size:12px;color:var(--text-secondary);line-height:1.5;">' + desc + '</div>';
                traitsHTML += '</div>';
            } else {
                traitsHTML += '<span class="trait-tag">' + tid + '</span>';
            }
        });
        traitsHTML += '</div></div>';
    }

    // ===== 核心英雄标记 =====
    let champsHTML = '';
    if (comp.mainChampions) {
        champsHTML = '<div style="margin:10px 0;"><strong>⭐ 核心英雄：</strong>';
        comp.mainChampions.forEach(c => {
            const cd = champions.find(x => x.name === c || c.includes(x.name));
            const cc = cd ? ['#808080','#1e88e5','#8e24aa','#ff9800','#f44336'][cd.cost-1] : '#808080';
            champsHTML += '<span style="display:inline-block;padding:5px 12px;background:#333;border-radius:8px;margin:3px;border:2px solid ' + cc + ';"><span style="color:' + cc + ';font-weight:bold;">' + (cd ? cd.cost : '?') + '费</span> ' + c + '</span>';
        });
        champsHTML += '</div>';
    }

    // ===== 站位—棋盘风格可视化 =====
    let posHTML = '';
    if (comp.position) {
        const rows = [
            { key: 'front', label: '🛡️ 前排（坦克/承伤）', color: 'rgba(244,67,54,0.15)', border: '#f44336' },
            { key: 'middle', label: '⚔️ 中排（战士/控制）', color: 'rgba(255,152,0,0.15)', border: '#ff9800' },
            { key: 'back', label: '🏹 后排（C位/输出）', color: 'rgba(33,150,243,0.15)', border: '#2196f3' }
        ];
        posHTML = '<div style="background:var(--bg-dark);border-radius:12px;padding:15px;margin:12px 0;border:1px solid rgba(255,255,255,0.05);">';
        posHTML += '<div style="font-size:15px;font-weight:bold;margin-bottom:10px;"><i class="fas fa-chess-board"></i> 站位一图流</div>';
        rows.forEach(r => {
            const items = comp.position[r.key];
            if (!items || items.length === 0) return;
            posHTML += '<div style="background:' + r.color + ';border-left:3px solid ' + r.border + ';border-radius:6px;padding:10px 12px;margin-bottom:8px;">';
            posHTML += '<div style="font-size:11px;color:' + r.border + ';font-weight:bold;text-transform:uppercase;margin-bottom:6px;">' + r.label + '</div>';
            posHTML += '<div style="display:flex;flex-wrap:wrap;gap:6px;">';
            items.forEach(champ => {
                const cd = champions.find(x => x.name === champ);
                const cc = cd ? ['#808080','#1e88e5','#8e24aa','#ff9800','#f44336'][cd.cost-1] : '#808080';
                const costLabel = cd ? cd.cost : '';
                posHTML += '<span style="display:inline-flex;align-items:center;gap:4px;padding:4px 10px;background:#222;border-radius:6px;border:1px solid ' + cc + ';font-size:13px;"><span style="display:inline-flex;align-items:center;justify-content:center;width:18px;height:18px;border-radius:50%;background:' + cc + ';color:#fff;font-size:10px;font-weight:bold;">' + costLabel + '</span> ' + champ + '</span>';
            });
            posHTML += '</div></div>';
        });
        posHTML += '</div>';
    }

    // ===== C位装备推荐 =====
    let eqHTML = '';
    if (comp.equipment) {
        eqHTML = '<div style="margin:12px 0;"><div style="font-size:15px;font-weight:bold;margin-bottom:10px;"><i class="fas fa-shield-alt"></i> C位装备推荐</div>';
        Object.entries(comp.equipment).forEach(([champ, eqs]) => {
            eqHTML += '<div style="background:#222;border-radius:8px;padding:10px;margin-bottom:8px;border:1px solid rgba(255,255,255,0.05);"><div style="font-weight:bold;margin-bottom:6px;color:var(--primary);">' + champ + '</strong></div><div style="display:flex;flex-wrap:wrap;gap:6px;">';
            eqs.forEach(eq => {
                eqHTML += '<span style="padding:4px 10px;background:rgba(255,152,0,0.12);border-radius:6px;font-size:13px;color:#ff9800;border:1px solid rgba(255,152,0,0.3);">' + eq + '</span>';
            });
            eqHTML += '</div></div>';
        });
        eqHTML += '</div>';
    }

    // ===== 运营策略 =====
    let opHTML = '';
    if (comp.earlyGame || comp.midGame || comp.lateGame) {
        opHTML = '<div style="margin:12px 0;"><div style="font-size:15px;font-weight:bold;margin-bottom:10px;"><i class="fas fa-chess"></i> 运营策略</div><div style="background:#222;border-radius:8px;padding:12px;border:1px solid rgba(255,255,255,0.05);">';
        if (comp.earlyGame) opHTML += '<div style="margin-bottom:8px;"><span style="display:inline-block;padding:2px 10px;border-radius:4px;background:rgba(76,175,80,0.2);color:#4CAF50;font-size:12px;font-weight:bold;">前期</span><span style="margin-left:8px;font-size:13px;">' + comp.earlyGame + '</span></div>';
        if (comp.midGame) opHTML += '<div style="margin-bottom:8px;"><span style="display:inline-block;padding:2px 10px;border-radius:4px;background:rgba(255,152,0,0.2);color:#FF9800;font-size:12px;font-weight:bold;">中期</span><span style="margin-left:8px;font-size:13px;">' + comp.midGame + '</span></div>';
        if (comp.lateGame) opHTML += '<div><span style="display:inline-block;padding:2px 10px;border-radius:4px;background:rgba(244,67,54,0.2);color:#f44336;font-size:12px;font-weight:bold;">后期</span><span style="margin-left:8px;font-size:13px;">' + comp.lateGame + '</span></div>';
        opHTML += '</div></div>';
    }

    // ===== 推荐星神/星座/符文 =====
    let extraHTML = '';
    const extras = [];
    if (comp.starGod) extras.push('<span style="color:#e040fb;">🌟 推荐星神：</span>' + comp.starGod);
    if (comp.constellation) extras.push('<span style="color:#7c4dff;">⭐ 推荐星座：</span>' + comp.constellation);
    if (comp.hexes && comp.hexes.length > 0) extras.push('<span style="color:#ff9800;">📜 推荐符文：</span>' + comp.hexes.join('、'));
    if (extras.length > 0) {
        extraHTML = '<div style="margin:12px 0;padding:12px;background:#222;border-radius:8px;font-size:13px;color:var(--text-secondary);line-height:1.8;border:1px solid rgba(255,255,255,0.05);">' + extras.join('<br>') + '</div>';
    }

    // ===== 优劣势 =====
    let advHTML = '';
    if (comp.advantages || comp.disadvantages) {
        advHTML = '<div style="margin:12px 0;display:grid;grid-template-columns:1fr 1fr;gap:10px;">';
        if (comp.advantages) advHTML += '<div style="padding:10px;background:rgba(76,175,80,0.08);border-radius:8px;font-size:13px;border:1px solid rgba(76,175,80,0.2);"><div style="color:#4CAF50;font-weight:bold;margin-bottom:4px;">✔ 优势</div><div style="color:var(--text-secondary);">' + comp.advantages.join('、') + '</div></div>';
        if (comp.disadvantages) advHTML += '<div style="padding:10px;background:rgba(244,67,54,0.08);border-radius:8px;font-size:13px;border:1px solid rgba(244,67,54,0.2);"><div style="color:#f44336;font-weight:bold;margin-bottom:4px;">✘ 劣势</div><div style="color:var(--text-secondary);">' + comp.disadvantages.join('、') + '</div></div>';
        advHTML += '</div>';
    }

    body.innerHTML = `
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:5px;">
            <h2 style="margin:0;">${comp.name}</h2>
            <span style="padding:5px 15px;border-radius:20px;font-size:14px;font-weight:bold;color:white;background:${comp.tier==='T0'?'#f44336':comp.tier==='T0.5'?'#FF9800':'#2196F3'};">${comp.tier}</span>
        </div>
        <div style="font-size:13px;color:var(--text-secondary);margin-bottom:10px;">难度：${comp.difficulty} | 来源：${comp.source || '未知'} | 更新：${comp.updateTime || '未知'}</div>
        ${comp.description ? '<p style="font-size:14px;line-height:1.8;color:var(--text-secondary);margin-bottom:10px;padding:10px;background:#222;border-radius:8px;">' + comp.description + '</p>' : ''}
        <div style="margin:10px 0;">${comp.traits.map(t => '<span class="trait-tag">' + getTraitName(t) + '</span>').join(' ')}</div>
        ${traitsHTML}
        ${fullRosterHTML}
        ${champsHTML}
        ${posHTML}
        ${eqHTML}
        ${opHTML}
        ${extraHTML}
        ${advHTML}
    `;
    modal.classList.add('active');
}

// ==================== 阵容查询 ====================
function loadCompositions() {
    displayCompositionList(compositions);
    loadTraitFilters();
}

function displayCompositionList(list) {
    const container = document.getElementById('composition-list');
    if (!container) return;
    container.innerHTML = '';
    if (!list || list.length === 0) { container.innerHTML = '<p style="text-align:center;color:var(--text-secondary);padding:40px;">未找到阵容</p>'; return; }
    const frag = document.createDocumentFragment();
    list.forEach(c => {
        const card = document.createElement('div');
        card.className = 'composition-card';
        card.onclick = () => showDetail(c.id);
        const tBg = c.tier === 'T0' ? '#f44336' : c.tier === 'T0.5' ? '#FF9800' : '#2196F3';
        card.innerHTML = `
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
                <div style="font-size:18px;font-weight:bold;">${c.name}</div>
                <div style="padding:4px 14px;border-radius:16px;font-size:13px;font-weight:bold;color:white;background:${tBg};">${c.tier}</div>
            </div>
            <div style="font-size:12px;color:var(--text-secondary);margin-bottom:6px;">难度：${c.difficulty}</div>
            <p style="font-size:13px;color:var(--text-secondary);line-height:1.6;margin-bottom:8px;">${c.description || ''}</p>
            <div style="display:flex;flex-wrap:wrap;gap:4px;margin-bottom:8px;">${c.traits.map(t => `<span class="trait-tag">${getTraitName(t)}</span>`).join('')}</div>
            <button class="btn-primary" style="width:100%;padding:8px;font-size:13px;" onclick="event.stopPropagation();showDetail('${c.id}')"><i class="fas fa-info-circle"></i> 一图流</button>
        `;
        frag.appendChild(card);
    });
    container.appendChild(frag);
}

function loadTraitFilters() {
    ['racial-traits', 'class-traits'].forEach(id => {
        const c = document.getElementById(id);
        if (!c || !traits) return;
        const isRacial = id === 'racial-traits';
        c.innerHTML = '';
        traits.filter(t => t.type === (isRacial ? 'racial' : 'class')).forEach(t => {
            const label = document.createElement('label');
            label.className = 'trait-checkbox';
            label.innerHTML = `<input type="checkbox" value="${t.id}" onchange="filterCompositions()"><span>${t.name}</span>`;
            c.appendChild(label);
        });
    });
}

function filterCompositions() {
    if (!compositions) return;
    const search = document.getElementById('comp-search')?.value.toLowerCase() || '';
    const tier = document.getElementById('tier-filter')?.value || '';
    const diff = document.getElementById('difficulty-filter')?.value || '';
    const racial = Array.from(document.querySelectorAll('#racial-traits input:checked')).map(cb => cb.value);
    const cls = Array.from(document.querySelectorAll('#class-traits input:checked')).map(cb => cb.value);
    const all = [...racial, ...cls];
    displayCompositionList(compositions.filter(c => {
        if (search && !c.name.toLowerCase().includes(search) && !c.description.toLowerCase().includes(search) &&
            !(c.mainChampions && c.mainChampions.some(x => x.toLowerCase().includes(search)))) return false;
        if (tier && c.tier !== tier) return false;
        if (diff && c.difficulty !== diff) return false;
        if (all.length > 0 && !all.some(t => c.traits && c.traits.includes(t))) return false;
        return true;
    }));
}

// ==================== 装备图鉴 ====================
function loadItems() { displayItemList(items); }
function displayItemList(list) {
    const c = document.getElementById('item-list');
    if (!c) return;
    c.innerHTML = '';
    if (!list || list.length === 0) { c.innerHTML = '<p style="text-align:center;color:var(--text-secondary);padding:40px;">未找到装备</p>'; return; }
    const frag = document.createDocumentFragment();
    list.forEach(item => {
        const card = document.createElement('div');
        card.className = 'item-card';
        card.innerHTML = `<div class="item-header"><div class="item-icon">🎁</div><div><div class="item-name">${item.name}</div><div class="item-stat">${item.stat || ''}</div></div></div>`;
        if (item.components) card.innerHTML += `<div class="item-components"><h5>合成配方：</h5>${item.components.map(c => `<span class="component-tag">${getItemName(c)}</span>`).join(' + ')}</div>`;
        frag.appendChild(card);
    });
    c.appendChild(frag);
}
function getItemName(id) { const i = items ? items.find(x => x.id === id) : null; return i ? i.name : id; }
function filterItems() {
    const q = document.getElementById('item-search')?.value.toLowerCase() || '';
    if (!items) return;
    displayItemList(items.filter(i => i.name.toLowerCase().includes(q) || (i.stat && i.stat.toLowerCase().includes(q))));
}

function getTraitName(id) { const t = traits ? traits.find(x => x.id === id) : null; return t ? t.name : id; }
function closeModal() { document.getElementById('composition-detail').classList.remove('active'); }
function toggleTheme() { /* 预留 */ }

// ==================== 导出 ====================
window.switchTab = switchTab;
window.onHexSelect = onHexSelect;
window.onConstellationSelect = onConstellationSelect;
window.onStarGodSelect = onStarGodSelect;
window.toggleChampion = toggleChampion;
window.removeChampion = removeChampion;
window.filterChampions = filterChampions;
window.generateRecommendation = generateRecommendation;
window.showDetail = showDetail;
window.closeModal = closeModal;
window.filterCompositions = filterCompositions;
window.filterItems = filterItems;
