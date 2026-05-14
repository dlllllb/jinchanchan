// 金铲铲之战 S17星神赛季 知识空间
// 用于收集、存储和管理阵容数据
// 从官网、小红书、微信公众号等渠道收集最新阵容

const KNOWLEDGE_BASE = {
    // 元数据
    meta: {
        version: "1.0.0",
        lastUpdate: "2026-05-14",
        season: "S17 星神赛季",
        totalComps: 0,
        sources: ["官网", "小红书", "微信公众号", "17173", "游侠网", "搜狐"]
    },
    
    // 阵容数据收集区
    compositions: [
        // 示例：从各渠道收集的阵容
        // 每个阵容包含：名称、梯度、核心英雄、装备、站位、来源、更新时间等
    ],
    
    // 英雄数据
    champions: [
        // 从官网和攻略网站收集的英雄数据
        // 包含：名称、费用、种族羁绊、职业羁绊、技能等
    ],
    
    // 装备数据
    items: [
        // 基础装备和成品装备数据
    ],
    
    // 羁绊数据
    traits: [
        // 种族羁绊和职业羁绊数据
    ],
    
    // 强化符文数据（三级）
    hexes: {
        silver: [],   // 白银级
        gold: [],     // 黄金级
        prismatic: [] // 彩色级
    },
    
    // 星神赐福数据
    starBlessings: [
        // 9位星神的赐福效果
    ],
    
    // 观星者星座数据
    constellations: [
        // 7大星座的效果和强化格加成
    ],
    
    // 待处理队列（从图片、文章中提取但未整理的阵容）
    pending: [
        // 从图片解析、文章提取的临时数据
    ]
};

// 知识空间管理函数

// 添加新阵容到知识空间
function addComposition(comp) {
    KNOWLEDGE_BASE.compositions.push({
        ...comp,
        id: Date.now(),
        addedTime: new Date().toISOString(),
        verified: false // 是否需要验证
    });
    KNOWLEDGE_BASE.meta.totalComps++;
    saveKnowledgeBase();
}

// 从图片解析阵容（预留接口）
function parseCompositionFromImage(imagePath) {
    // TODO: 使用OCR或AI视觉识别解析阵容图片
    // 返回解析后的阵容数据
    console.log("图片解析功能待实现:", imagePath);
    return null;
}

// 从文章提取阵容（预留接口）
function extractCompositionFromArticle(articleUrl) {
    // TODO: 使用网页抓取或API提取文章内容中的阵容信息
    // 返回提取的阵容数据
    console.log("文章提取功能待实现:", articleUrl);
    return null;
}

// 验证阵容数据准确性
function verifyComposition(compId, source) {
    // TODO: 对比多个数据源，验证阵容的准确性
    const comp = KNOWLEDGE_BASE.compositions.find(c => c.id === compId);
    if (comp) {
        comp.verified = true;
        comp.verifiedSource = source;
        comp.verifiedTime = new Date().toISOString();
        saveKnowledgeBase();
        return true;
    }
    return false;
}

// 保存知识空间到本地存储
function saveKnowledgeBase() {
    try {
        localStorage.setItem('jcc_knowledge_base', JSON.stringify(KNOWLEDGE_BASE));
        console.log("知识空间已保存到本地存储");
    } catch (e) {
        console.error("保存知识空间失败:", e);
    }
}

// 从本地存储加载知识空间
function loadKnowledgeBase() {
    try {
        const data = localStorage.getItem('jcc_knowledge_base');
        if (data) {
            const parsed = JSON.parse(data);
            Object.assign(KNOWLEDGE_BASE, parsed);
            console.log("知识空间已从本地存储加载");
            return true;
        }
    } catch (e) {
        console.error("加载知识空间失败:", e);
    }
    return false;
}

// 导出知识空间数据（用于网站使用）
function exportCompositions() {
    return KNOWLEDGE_BASE.compositions.filter(c => c.verified);
}

// 搜索知识空间
function searchKnowledgeBase(query) {
    const results = [];
    const q = query.toLowerCase();
    
    // 搜索阵容
    KNOWLEDGE_BASE.compositions.forEach(comp => {
        if (comp.name.toLowerCase().includes(q) ||
            comp.champions.some(c => c.toLowerCase().includes(q)) ||
            comp.traits.some(t => t.toLowerCase().includes(q))) {
            results.push({ type: 'composition', data: comp });
        }
    });
    
    // 搜索英雄
    KNOWLEDGE_BASE.champions.forEach(champ => {
        if (champ.name.toLowerCase().includes(q) ||
            champ.traits.some(t => t.toLowerCase().includes(q))) {
            results.push({ type: 'champion', data: champ });
        }
    });
    
    return results;
}

// 初始化知识空间
function initKnowledgeBase() {
    // 尝试从本地存储加载
    if (!loadKnowledgeBase()) {
        // 如果本地没有数据，添加一些初始数据
        console.log("初始化知识空间...");
        // 这里可以添加一些初始阵容数据
    }
}

// 页面加载时初始化
document.addEventListener('DOMContentLoaded', function() {
    initKnowledgeBase();
});

// 导出供其他模块使用
window.KNOWLEDGE_BASE = KNOWLEDGE_BASE;
window.addComposition = addComposition;
window.exportCompositions = exportCompositions;
window.searchKnowledgeBase = searchKnowledgeBase;