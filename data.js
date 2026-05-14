// 金铲铲之战 S17星神赛季 游戏数据
// 数据来源：官网、17173、游侠网、金铲铲助手等权威渠道
// 更新时间：2026-05-14

// ==================== 星神数据 ====================
const starGods = [
    {
        id: 'aurelion_sol',
        name: '奥瑞利安·索尔',
        title: '造物之神',
        description: '偏经济和羁绊成型辅助，适合运营流、多羁绊阵容',
        icon: '🌟',
        color: '#FFD700',
        rewards: {
            stage2: [
                { name: '财富探险', condition: '积攒到50金币', reward: '1个基础装备锻造器+4金币', type: 'economic' },
                { name: '羁绊探险', condition: '一局玩家对战中登场6个非唯一羁绊', reward: '1个随机纹章+1个装备重铸器', type: 'functional' }
            ],
            stage3: [
                { name: '星空探险', condition: '下次将弈子升星', reward: '10金币', type: 'economic' },
                { name: '羁绊探险', condition: '一局玩家对战中登场6个非唯一羁绊', reward: '1个随机纹章+1个装备重铸器', type: 'functional' }
            ],
            stage4: [
                { name: '等级探险', condition: '到达9级', reward: '20金币', type: 'economic' },
                { name: '低生命值探险', condition: '首次跌至30点小小英雄生命值', reward: '18金币', type: 'economic' },
                { name: '刷新探险', condition: '刷新商店15次', reward: '2个基础装备锻造器', type: 'functional' }
            ],
            ultimate: {
                name: '奥瑞利安·索尔的恩赐',
                effect: '可从3个任务中任选1个完成，获取对应奖励',
                type: 'functional'
            }
        }
    },
    {
        id: 'yasuo',
        name: '亚索',
        title: '深渊之神',
        description: '单体弈子增益，适合给核心C位、前排关键弈子使用',
        icon: '⚔️',
        color: '#C0C0C0',
        rewards: {
            stage2: [
                { name: '烈阳格', effect: '放置在友方弈子上后，该弈子5秒内造成18%额外魔法伤害，同时给目标附加持续5秒的1%最大生命值灼烧（每秒造成真实伤害）', type: 'combat' },
                { name: '宇宙格', effect: '放置在友方弈子上后，该弈子获得10%最大生命值，且每回合额外获得30点永久生命值', type: 'defense' },
                { name: '增速格', effect: '放置在友方弈子上后，该弈子获得30%攻击速度', type: 'offense' },
                { name: '星光格', effect: '放置在友方弈子上后，该弈子获得3点法力回复', type: 'utility' },
                { name: '风暴格', effect: '放置在友方弈子上后，该弈子首次用技能命中敌人时，晕眩敌人2秒', type: 'control' },
                { name: '冰晶格', effect: '放置在友方弈子上后，该弈子首次跌下40%生命值时，冻结1秒并治疗自身35%最大生命值', type: 'defense' }
            ],
            stage3: '同阶段2',
            stage4: '同阶段2',
            ultimate: {
                name: '亚索的恩赐',
                effect: '亚索的【格】类效果提升50%；若你仅拥有2个格，额外获得12金币',
                type: 'mixed'
            }
        }
    },
    {
        id: 'kayle',
        name: '凯尔',
        title: '秩序之神',
        description: '全为基础装备供给，适合缺装备的阵容',
        icon: '⚖️',
        color: '#FFD700',
        rewards: {
            stage2: [
                { name: '随机基础装备', reward: '1件随机基础装备', type: 'equipment' },
                { name: '拳套', reward: '1个拳套', type: 'equipment' },
                { name: '反曲之弓', reward: '1个反曲之弓', type: 'equipment' },
                { name: '女神之泪', reward: '1个女神之泪', type: 'equipment' }
            ],
            stage3: [
                { name: '随机基础装备', reward: '1件随机基础装备', type: 'equipment' },
                { name: '无用大棒', reward: '1个无用大棒', type: 'equipment' },
                { name: '锁子甲', reward: '1个锁子甲', type: 'equipment' },
                { name: '负极斗篷', reward: '1个负极斗篷', type: 'equipment' },
                { name: '暴风大剑', reward: '1个暴风大剑', type: 'equipment' }
            ],
            stage4: [
                { name: '随机基础装备', reward: '1件随机基础装备', type: 'equipment' },
                { name: '拳套', reward: '1个拳套', type: 'equipment' },
                { name: '反曲之弓', reward: '1个反曲之弓', type: 'equipment' },
                { name: '女神之泪', reward: '1个女神之泪', type: 'equipment' },
                { name: '无用大棒', reward: '1个无用大棒', type: 'equipment' },
                { name: '锁子甲', reward: '1个锁子甲', type: 'equipment' },
                { name: '负极斗篷', reward: '1个负极斗篷', type: 'equipment' },
                { name: '暴风大剑', reward: '1个暴风大剑', type: 'equipment' }
            ],
            ultimate: {
                name: '凯尔的恩赐',
                effect: '将1个随机成品装备升级为光明装备',
                type: 'equipment'
            }
        }
    },
    {
        id: 'ahri',
        name: '阿狸',
        title: '财富之神',
        description: '偏经济和等级提升，适合运营流、需要快速拉9/10级的阵容',
        icon: '🦊',
        color: '#FF69B4',
        rewards: {
            stage2: [
                { name: '6金币', reward: '6金币', type: 'economic' },
                { name: '8经验', reward: '8经验', type: 'economic' },
                { name: '10经验', reward: '10经验', type: 'economic' },
                { name: '5次免费商店刷新', reward: '5次免费商店刷新', type: 'functional' },
                { name: '联手致富', reward: '获得6金币，若至少5名玩家选该选项，额外加1金币', type: 'economic' }
            ],
            stage3: [
                { name: '8金币', reward: '8金币', type: 'economic' },
                { name: '7次免费商店刷新', reward: '7次免费商店刷新', type: 'functional' },
                { name: '联手致富+', reward: '获得8金币，若至少5名玩家选该选项，额外加2金币', type: 'economic' }
            ],
            stage4: [
                { name: '12金币', reward: '12金币', type: 'economic' },
                { name: '8次免费商店刷新', reward: '8次免费商店刷新', type: 'functional' },
                { name: '联手致富++', reward: '获得12金币，若至少5名玩家选该选项，额外加3金币', type: 'economic' }
            ],
            ultimate: {
                name: "阿狸的恩赐",
                effect: '你的队伍获得「2%×小小英雄等级」的物攻和法强加；本局剩余所有回合，每回合额外获得2点经验值',
                type: 'mixed'
            }
        }
    },
    {
        id: 'varus',
        name: '韦鲁斯',
        title: '爱神',
        description: '适合赌低费追三星、或需要特定高费卡的阵容',
        icon: '💘',
        color: '#FF1493',
        rewards: {
            stage2: [
                { name: '已拥有的3费弈子', reward: '获得你已拥有的1个3费弈子的复制品+2金币，若你没有3费弈子则随机发放1个', type: 'mixed' },
                { name: '恋人', reward: '获得1个同羁绊的3费弈子+1个2费弈子', type: 'combat' },
                { name: '2个微型复制器', reward: '消耗品，用在1费英雄身上可生成1个1星该英雄到备战区', type: 'functional' },
                { name: '全3费商店', reward: '下一个商店所有棋子均为3费，首次购买免费', type: 'functional' }
            ],
            stage3: [
                { name: '次级英雄复制器', reward: '获得1个次级英雄复制器+3金币', type: 'mixed' },
                { name: '已拥有的3费弈子', reward: '获得你已拥有的1个3费弈子的复制品+2金币，若你没有3费弈子则随机发放1个', type: 'mixed' },
                { name: '恋人+', reward: '获得1个同羁绊的4费弈子+1个3费弈子', type: 'combat' },
                { name: '全4费商店', reward: '下一个商店所有棋子均为4费，首次购买免费', type: 'functional' }
            ],
            stage4: [
                { name: '次级英雄复制器', reward: '获得1个次级英雄复制器+5金币', type: 'mixed' },
                { name: '已拥有的4费弈子', reward: '获得你已拥有的1个4费弈子的复制品+3金币，若你没有4费弈子则随机发放1个', type: 'mixed' },
                { name: '恋人++', reward: '获得1个同羁绊的5费弈子+1个4费弈子', type: 'combat' }
            ],
            ultimate: {
                name: "韦鲁斯的恩赐",
                effect: '你的所有弈子获得「18×己方队伍总星级」的额外生命值，同时你的商店5费弈子出现概率提升2%',
                type: 'mixed'
            }
        }
    },
    {
        id: 'ekko',
        name: '艾克',
        title: '时间之神',
        description: '偏后期资源和特殊道具，适合中后期发力的阵容',
        icon: '⏰',
        color: '#00CED1',
        rewards: {
            stage2: [
                { name: '神圣干预', condition: '首次跌至30点小小英雄生命值', reward: '1个特殊战利品法球', type: 'functional' },
                { name: '迅捷蟹派对', reward: '下一个PVP回合替换为附带额外战利品的迅捷蟹回合', type: 'functional' },
                { name: '金铲铲', reward: '4回合后发放1个金铲铲', type: 'equipment' },
                { name: '随机神器', reward: '8回合后发放1个随机神器', type: 'equipment' },
                { name: '4费弈子', reward: '3回合后发放1个4费弈子', type: 'combat' }
            ],
            stage3: [
                { name: '赐福：速度', reward: '消耗品，永久给1个友方弈子增加20%攻击速度，同时体型缩小20%', type: 'offense' },
                { name: '迅捷蟹派对', reward: '下一个PVP回合替换为附带额外战利品的迅捷蟹回合', type: 'functional' },
                { name: '2个5费弈子', reward: '4回合后发放2个5费弈子', type: 'combat' },
                { name: '基础装备锻造器', reward: '3回合后发放1个基础装备锻造器', type: 'equipment' }
            ],
            stage4: [
                { name: '赐福：速度', reward: '消耗品，永久给1个友方弈子增加20%攻击速度，同时体型缩小20%', type: 'offense' },
                { name: '随机神器', reward: '5回合后发放1个随机神器', type: 'equipment' },
                { name: '成装锻造器', reward: '4回合后发放1个成装锻造器', type: 'equipment' },
                { name: '5费商店', reward: '3回合后获得1次免费商店刷新，且下一次商店所有棋子均为5费', type: 'functional' },
                { name: '现金流', reward: '每个回合自动获得2金币', type: 'economic' }
            ],
            ultimate: {
                name: "艾克的恩赐",
                effect: '获得装备「突变」（基于弈子定位提供强力进化效果），同时获得2个装备拆卸器',
                type: 'equipment'
            }
        }
    },
    {
        id: 'thresh',
        name: '锤石',
        title: '契约之神',
        description: '偏随机性和生命值续航，适合运气型玩家或需要补生命的局势',
        icon: '⛓️',
        color: '#8B00FF',
        rewards: {
            stage2: [
                { name: '随机恩赐', reward: '从任意星神处随机获得1个赐福+2金币', type: 'mixed' },
                { name: '神秘战利品', reward: '获得随机奖励', type: 'mixed' },
                { name: '12小小英雄生命值', reward: '直接增加12点小小英雄生命值', type: 'defense' },
                { name: '在一起更好', reward: '获得6点小小英雄生命值，若至少5名玩家选该选项，额外加3金币', type: 'mixed' },
                { name: '巨人腰带', reward: '获得1个巨人腰带', type: 'equipment' }
            ],
            stage3: [
                { name: '随机恩赐', reward: '从任意星神处随机获得1个赐福+3金币', type: 'mixed' },
                { name: '神秘战利品', reward: '获得随机奖励', type: 'mixed' },
                { name: '12小小英雄生命值', reward: '直接增加12点小小英雄生命值', type: 'defense' },
                { name: '在一起更好+', reward: '获得6点小小英雄生命值，若至少5名玩家选该选项，额外加4金币', type: 'mixed' },
                { name: '赐福：体型', reward: '消耗品，永久给1个友方弈子增加350点生命值，同时体型提升20%', type: 'defense' },
                { name: '巨人腰带', reward: '获得1个巨人腰带', type: 'equipment' }
            ],
            stage4: [
                { name: '随机恩赐', reward: '从任意星神处随机获得1个赐福+5金币', type: 'mixed' },
                { name: '神秘战利品', reward: '获得随机奖励', type: 'mixed' },
                { name: '掷骰子', reward: '投掷3次骰子，获得与点数总和相同数量的金币', type: 'economic' },
                { name: '12小小英雄生命值', reward: '直接增加12点小小英雄生命值', type: 'defense' },
                { name: '在一起更好+', reward: '获得6点小小英雄生命值，若至少5名玩家选该选项，额外加4金币', type: 'mixed' },
                { name: '赐福：体型', reward: '消耗品，永久给1个友方弈子增加350点生命值，同时体型提升20%', type: 'defense' },
                { name: '巨人腰带', reward: '获得1个巨人腰带', type: 'equipment' }
            ],
            ultimate: {
                name: "锤石的恩赐",
                effect: '每回合自动投掷1次骰子，根据投掷点数获得对应加成',
                type: 'mixed'
            }
        }
    },
    {
        id: 'evelynn',
        name: '伊芙琳',
        title: '诱惑之神',
        description: '「用生命值换战力/经济」，适合血量高、阵容强度足够的玩家',
        icon: '💋',
        color: '#FF1493',
        rewards: {
            stage2: [
                { name: '2星2费', reward: '获得1个2星2费弈子，消耗1点小小英雄生命值', type: 'combat', hpCost: 1 },
                { name: '1星4费', reward: '获得1个4费弈子，消耗4点小小英雄生命值', type: 'combat', hpCost: 4 },
                { name: '猩红契约', reward: '获得9金币，每有1名玩家选该选项，额外消耗1点小小英雄生命值', type: 'economic', hpCost: 'variable' },
                { name: '碾压之势', reward: '立刻获得1个随机2费弈子，之后每次赢下玩家对战都获得1个随机2费弈子，直到输1次为止', type: 'combat' }
            ],
            stage3: [
                { name: '2星3费', reward: '获得1个2星3费弈子，消耗3点小小英雄生命值', type: 'combat', hpCost: 3 },
                { name: '3星1费', reward: '获得1个3星1费弈子，消耗3点小小英雄生命值', type: 'combat', hpCost: 3 },
                { name: '随机纹章', reward: '获得1个随机纹章，消耗3点小小英雄生命值', type: 'functional', hpCost: 3 },
                { name: '猩红契约+', reward: '获得11金币，每有1名玩家选该选项，额外消耗1点小小英雄生命值', type: 'economic', hpCost: 'variable' },
                { name: '碾压之势+', reward: '效果与阶段2的「碾压之势」一致，只是发放的为随机3费弈子', type: 'combat' },
                { name: '15金币', reward: '获得15金币，接下来2个回合无法购买英雄', type: 'economic' }
            ],
            stage4: [
                { name: '2星4费', reward: '获得1个2星4费弈子，消耗3点小小英雄生命值', type: 'combat', hpCost: 3 },
                { name: '2个1星5费', reward: '获得2个5费弈子，消耗1点小小英雄生命值（性价比极高）', type: 'combat', hpCost: 1 },
                { name: '随机成装', reward: '获得1个随机成品装备，消耗5点小小英雄生命值', type: 'equipment', hpCost: 5 },
                { name: '猩红契约++', reward: '获得16金币，每有1名玩家选该选项，额外消耗1点小小英雄生命值', type: 'economic', hpCost: 'variable' },
                { name: '18金币', reward: '获得18金币，接下来2个回合无法购买英雄', type: 'economic' }
            ],
            ultimate: {
                name: "伊芙琳的恩赐",
                effect: '你的队伍获得10%伤害减免；若你输掉玩家对战，额外消耗1点小小英雄生命值',
                type: 'defense'
            }
        }
    },
    {
        id: 'soraka',
        name: '索拉卡',
        title: '治愈之神',
        description: '适合坦度足够、能扛伤害的阵容，用弈子生命值换小小英雄续航',
        icon: '💚',
        color: '#32CD32',
        rewards: {
            ultimate: {
                name: "索拉卡的恩赐",
                effect: '你每损失1点小小英雄生命值，你的所有弈子获得2点生命值；每场玩家对战开始时，额外回复1点小小英雄生命值',
                type: 'defense'
            }
        }
    }
];

// ==================== 观星者星座数据 ====================
const constellations = [
    {
        id: 'serpent',
        name: '蝰蛇',
        description: '强化格内的友军获得5%伤害减免。强化格内的【观星者】获得更多此加成，并且会使敌人中毒，在3秒内重复造成相当于一部分造成伤害的魔法伤害。',
        effect: '伤害减免+中毒效果',
        suitableFor: ['崔斯特阵容', '霞阵容', '露露阵容', '摘星贾克斯'],
        color: '#00FF00'
    },
    {
        id: 'mountain',
        name: '秀山',
        description: '观星者本体仅6个，却可激活11人口彩色羁绊。激活羁绊后每5个玩家对战回合会赠送1个转职道具。数值越高=单位存活时间越久。',
        effect: '超强羁绊激活+转职道具',
        suitableFor: ['霞阵容', '露露阵容', '高生存阵容'],
        color: '#8B4513'
    },
    {
        id: 'wolf',
        name: '野猪',
        description: '赢下玩家对战时获得金币。强化格中的友军获得8%生命值、物理加成和法术加成。【观星者】获得更多。',
        effect: '金币奖励+属性加成',
        suitableFor: ['霞的观星狙阵容', '经济运营阵容'],
        color: '#8B4513'
    },
    {
        id: 'altar',
        name: '圣坛',
        description: '强化格内的友军获得法力回复和技能增强效果。',
        effect: '法力回复+技能增强',
        suitableFor: ['崔斯特阵容', '霞阵容', '摘星贾克斯'],
        color: '#FFD700'
    },
    {
        id: 'hunter',
        name: '女猎手',
        description: '强化格内的友军获得攻击速度和暴击几率提升。',
        effect: '攻速+暴击提升',
        suitableFor: ['摘星贾克斯阵容', '物理输出阵容'],
        color: '#FF4500'
    },
    {
        id: 'spring',
        name: '泉水',
        description: '强化格内的友军获得生命值回复和护盾效果。推测可能包含斩杀、护盾等效果。',
        effect: '生命回复+护盾',
        suitableFor: ['高生存阵容', '坦克阵容'],
        color: '#00BFFF'
    },
    {
        id: 'medal',
        name: '勋章',
        description: '强化格内的友军获得额外属性加成和特殊效果。崔斯特搭配该星座成型后强度较高。',
        effect: '额外属性加成',
        suitableFor: ['崔斯特阵容', '露露阵容'],
        color: '#FFD700'
    }
];

// ==================== 强化符文数据（三级）====================
// 数据来源：中华网(business.china.com)黄金海克斯、小斑游戏(xiaoban.net)彩色海克斯
const hexes = {
    // 白银级（一级）- 基础强化符文
    silver: [
        // 经济运营类
        { name: 'D个痛快！', effect: '每回合获得1次免费商店刷新', type: 'economic' },
        { name: '利滚利', effect: '每回合开始时获得额外的金币利息', type: 'economic' },
        { name: '清晰头脑', effect: '回合结束时备战席无英雄则获得3经验', type: 'economic' },
        { name: '花到上头', effect: '不再获得利息，每个玩家对战回合开始时获得3金币，立刻获得3金币', type: 'economic' },
        { name: '耐心学习', effect: '与玩家战斗后，胜利得2经验，失败得3经验', type: 'economic' },
        { name: '白银赌约', effect: '获得1金币并抛硬币，正面得幸运装备宝箱，反面得1个成装锻造器', type: 'gamble' },
        { name: 'DD街区', effect: '每回合获得1次免费商店刷新', type: 'economic' },
        
        // 装备类
        { name: '阿福的百宝袋', effect: '获得1个金铲铲、3个随机基础装备、5金币', type: 'equipment' },
        { name: '大百宝袋', effect: '获得3件随机基础装备、2金币、1个装备重铸器', type: 'equipment' },
        { name: '珍藏财宝', effect: '立刻及接下来5回合开始时获得1个随机基础装备', type: 'equipment' },
        
        // 战斗增益类
        { name: '战斗法师', effect: '携带者和同一排的友军获得法术强度提升', type: 'combat' },
        { name: '粉碎器', effect: '提供一定几率的额外伤害', type: 'combat' },
        { name: '发条增速器', effect: '弈子战斗中每3秒获得10%攻速', type: 'combat' },
        { name: '复苏之风', effect: '己方单位在战斗开始时回复一定生命值', type: 'combat' },
        { name: '最佳好友', effect: '战斗开始时独立成对的弈子获得攻速和护甲', type: 'combat' },
        { name: '源计划植入', effect: '携带1件装备的友军获得攻击力和生命值', type: 'combat' },
        { name: '源计划上行链路', effect: '携带1件装备的友军获得法力回复和生命值', type: 'combat' },
        { name: '源计划链路', effect: '在源计划羁绊下，棋子获得额外属性', type: 'combat' },
        { name: '浪人', effect: '战斗开始时邻格无单位的弈子获得护盾', type: 'combat' },
        { name: '电火花', effect: '友军受攻击时对附近敌人造成魔法伤害', type: 'combat' },
        { name: '玻璃大炮', effect: '后排弈子战斗开始时生命值降低但获得伤害增幅', type: 'combat' },
        { name: '充能转移', effect: '己方获得伤害增幅，对最近敌人造成溢出伤害的魔法伤害', type: 'combat' },
        { name: '终身黄铜', effect: '每拥有一个黄铜级羁绊，己方弈子获得伤害增幅', type: 'combat' },
        
        // 羁绊类
        { name: '源计划链路', effect: '源计划羁绊下棋子获得额外属性', type: 'other' },
        
        // 英雄强化类
        { name: '星界连招', effect: '强化亚托克斯的技能效果', type: 'hero', forChamp: '亚托克斯' },
        { name: '邦！', effect: '强化内瑟斯的技能效果', type: 'hero', forChamp: '内瑟纳斯' },
        
        // 其他
        { name: '随心衣', effect: '选择一件辅助或坦克基础装备获得', type: 'equipment' },
        { name: '扩展包', effect: '获得价值9金币的随机弈子', type: 'gamble' },
        { name: '英勇福袋', effect: '获得次级英雄复制器和金币', type: 'other' },
        { name: '赏金战士', effect: '获得基础装备，赢取胜利获得更多装备', type: 'equipment' },
    ],
    
    // 黄金级（二级）- 完整数据（来源：中华网 2026-04-02）
    gold: [
        // 专属英雄强化类
        { name: '天煞灭影·劫', effect: '获得1个【饮血剑】，4-2回合获得1个【劫】，之后劫才会出现在商店中。劫为5费物理战士，可创造分身。', type: 'hero', forChamp: '劫' },
        { name: '摘星之志·贾克斯', effect: '获得1个【贾克斯】，最强大的贾克斯成为魔法战士，攻击造成额外魔法伤害，施放技能获得可叠加攻速。', type: 'hero', forChamp: '贾克斯' },
        { name: '热寂·莫德凯撒', effect: '获得1个【莫德凯撒】，最强大的莫德凯撒成为魔法战士，拥有缓慢成长的光环持续造成伤害。', type: 'hero', forChamp: '莫德凯撒' },
        { name: '职业杀手·派克', effect: '获得1个【派克】，最强大的派克成为物理战士，参与击杀产生金币，技能击杀时重置。', type: 'hero', forChamp: '派克' },
        { name: '自我毁灭·古拉加斯', effect: '获得1个【古拉加斯】，最强大的古拉加斯成为魔法战士，可引发巨大爆炸但对自身造成伤害。', type: 'hero', forChamp: '古拉加斯' },
        
        // 经济与运营类
        { name: '8级D干的传说', effect: '到达8级时获得20次商店刷新。', type: 'economic' },
        { name: 'DD街区', effect: '每回合获得1次免费商店刷新，获得2金币。', type: 'economic' },
        { name: '储蓄账户', effect: '通过利息赚取50金币后获得30金币，最大利息提升至7金币，立刻获得4金币。', type: 'economic' },
        { name: '前瞻思维', effect: '失去所有金币，5回合后收回原金币并额外获得70金币。', type: 'economic' },
        { name: '后期收益', effect: '每个玩家战斗回合开始时获得2经验值，5费弈子获得12%生命值和12%攻速。', type: 'economic' },
        { name: '清晰头脑', effect: '回合结束时备战席无英雄则获得3经验。', type: 'economic' },
        { name: '物尽其用', effect: '回合结束时备战席无装备则获得2经验值。', type: 'economic' },
        { name: '物尽其用+', effect: '立刻获得8金币和10经验值，后续每回合备战席无装备获得2经验。', type: 'economic' },
        { name: '爆炸式增长', effect: '立刻及接下来3回合开始时获得7经验值。', type: 'economic' },
        { name: '爆炸式增长+', effect: '立刻及接下来3回合开始时获得10经验值。', type: 'economic' },
        { name: '耐心学习', effect: '与玩家战斗后，胜利得2经验，失败得3经验。', type: 'economic' },
        { name: '独自升级', effect: '接下来5回合小队规模为1，登场弈子属性巨幅提升，每次击杀获得1经验，之后获得2件基础装备。', type: 'economic' },
        { name: '新纪元', effect: '现在及每个阶段开始时获得4经验值和2次免费刷新。', type: 'economic' },
        { name: '新纪元+', effect: '现在及每个阶段开始时获得8经验值和2次免费刷新。', type: 'economic' },
        { name: '花到上头', effect: '不再获得利息，每个玩家对战回合开始时获得3金币，立刻获得3金币。', type: 'economic' },
        { name: '贪财', effect: '立刻获得7金币，每个阶段开始时获得7金币。', type: 'economic' },
        { name: '高级贷款', effect: '获得20金币，下一个强化符文阶位降低一级。', type: 'economic' },
        { name: '高级贷款+', effect: '获得33金币，下一个强化符文阶位降低一级。', type: 'economic' },
        
        // 装备与神器类
        { name: '便携锻炉', effect: '从4件神器中选出1件。', type: 'equipment' },
        { name: '打捞桶', effect: '立刻获得1件随机成装，8回合后提供1个基础装备，出售弈子将成装拆分为基础装备。', type: 'equipment' },
        { name: '打捞桶+', effect: '立刻获得1件随机成装，4回合后提供1个基础装备，出售弈子将成装拆分为基础装备。', type: 'equipment' },
        { name: '活体锻炉', effect: '立刻及之后每8回合获得1个【神器锻造器】。', type: 'equipment' },
        { name: '甜点', effect: '获得1个【神器锻造器】，弈子每携带1个装备，队伍获得20生命值。', type: 'equipment' },
        { name: '锤石的恩赐', effect: '每回合投掷骰子，根据结果获得加成。', type: 'equipment' },
        { name: '阿福的百宝袋', effect: '获得1个【金铲铲】、3个随机基础装备、5金币。', type: 'equipment' },
        { name: '海牛阿福的锅铲战术', effect: '下一场胜利得【金铲铲】，失败得【金锅锅】，立刻获得1个【基础装备锻造器】和6金币。', type: 'equipment' },
        { name: '锅铲厨房', effect: '获得1个随机纹章，3回合后获得1个【金锅铲冠冕】。', type: 'equipment' },
        { name: '厨神阿福', effect: '获得1个【金铲铲】，携带【金铲铲】或【金锅锅】的弈子获得15%攻速和2法力回复。', type: 'equipment' },
        { name: '剑之工匠', effect: '获得2个由【暴风大剑】合成的随机成装。', type: 'equipment' },
        { name: '杖之工匠', effect: '获得2个由【无用大棒】合成的随机成装。', type: 'equipment' },
        { name: '大百宝袋', effect: '获得3件随机基础装备、2金币、1个【装备重铸器】。', type: 'equipment' },
        { name: '珍藏财宝', effect: '立刻及接下来5回合开始时获得1个随机基础装备。', type: 'equipment' },
        { name: '散件丰收日', effect: '6回合后获得所有基础装备各一件，立刻获得一件随机基础装备。', type: 'equipment' },
        { name: '潘朵拉的装备 II', effect: '回合开始时备战席装备随机变化，获得2件随机基础装备。', type: 'equipment' },
        { name: '神赐锻炉', effect: '从4件天赐神器中选出1件。', type: 'equipment' },
        
        // 战斗增益类
        { name: '异类', effect: '己方获得基于已激活独特羁绊数量的生命值，获得1个【厄运小姐】和1个【拉亚斯特】。', type: 'combat' },
        { name: '三幻神', effect: '获得1个随机纹章，3费弈子和携带纹章的己方弈子获得200生命值和12%攻速。', type: 'combat' },
        { name: '了解你的敌人', effect: '可查看下回合对手，队伍获得8%伤害增幅，若有相同羁绊则获得15%伤害增幅。', type: 'combat' },
        { name: '伊芙琳的恩赐', effect: '队伍获得10%伤害减免，输掉对战时额外失去1玩家生命值。', type: 'combat' },
        { name: '充能转移 II', effect: '己方获得8%伤害增幅，对最近敌人造成溢出伤害80%的魔法伤害。', type: 'combat' },
        { name: '副作用', effect: '友军受治疗时对目标造成治疗值70%的魔法伤害，每5秒回复6%最大生命值。', type: 'combat' },
        { name: '发条增速器', effect: '弈子战斗中每3秒获得10%攻速。', type: 'combat' },
        { name: '复苏之风 II', effect: '战斗开始10秒后，弈子回复60%已损失生命值。', type: 'combat' },
        { name: '最佳好友 II', effect: '战斗开始时独立成对的弈子获得15%攻速和22护甲。', type: 'combat' },
        { name: '电火花 II', effect: '友军每受4次攻击对附近敌人造成50-140魔法伤害（1秒冷却）。', type: 'combat' },
        { name: '终身黄铜 I', effect: '每拥有一个黄铜级羁绊，己方弈子获得2.5%伤害增幅。', type: 'combat' },
        { name: '玻璃大炮 II', effect: '后排弈子战斗开始时生命值为80%，获得25%伤害增幅。', type: 'combat' },
        { name: '飞升', effect: '战斗开始12秒后，队伍获得35%伤害增幅。', type: 'combat' },
        { name: '珠光莲花 I', effect: '己方获得20%暴击几率和【精准】。', type: 'combat' },
        { name: '珠光莲花 II', effect: '己方获得25%暴击几率、10%暴击伤害和【精准】。', type: 'combat' },
        
        // 特殊机制类
        { name: '奥瑞利安·索尔的恩赐', effect: '从3个探险中选择1个，向索尔证明自己。', type: 'special' },
        { name: '宇宙大爆炸', effect: '获得1个【小木灵】，最强大的小木灵成为魔法战士，跳向附近格子造成范围伤害。', type: 'special' },
        { name: "凯尔的恩赐", effect: '将1个随机成装升级为光明装备。', type: 'special' },
        { name: '亚索的共享聚光灯', effect: "亚索的绘制格影响邻格单位，效能100%。", type: 'special' },
        { name: '亚索的恩赐', effect: '提高50%亚索绘制格效果，若只有2个绘制格则获得12金币。', type: 'special' },
        { name: '艾克的恩赐', effect: '获得【突变】装备，基于单位定位提供强力进化，获得2个【装备拆卸器】。', type: 'special' },
        { name: "索拉卡的恩赐", effect: '每损失1玩家生命值，队伍获得2生命值，每场对战开始时回复1玩家生命值。', type: 'special' },
        { name: "阿狸的恩赐", effect: '队伍获得2%×等级数的物法加成，每回合获得2经验值。', type: 'special' },
        { name: "韦鲁斯的恩赐", effect: '弈子获得18×己方队伍总星级的生命值，5费概率提升2%。', type: 'special' },
        { name: '斗神的恩赐', effect: '战斗开始时最多3个基础装备暂时变为成装，获得3个【装备拆卸器】和1个【分解器】。', type: 'special' },
        { name: '双城赢家', effect: '战斗开始8秒后晕眩所有敌人1.5秒，18秒后重复该效果。', type: 'special' },
        { name: '星界重启', effect: '出售棋盘和备战区所有弈子，获得2个随机纹章和11次免费刷新。', type: 'special' },
        { name: '金麟龙', effect: '获得1个【大亨之铠】，携带者占用2个弈子栏位，获得700生命值和20%伤害减免。', type: 'special' },
        { name: '碰撞测试假人', effect: '获得2个【训练假人】，战斗开始时假人射向敌人最密集处并晕眩1.25秒。', type: 'special' },
        { name: '复活恩赐', effect: '第一次将被淘汰时，依然保持1生命值。', type: 'special' },
        { name: '猩红报偿', effect: '获得25生命值，商店最右侧栏位需用生命值购买而非金币。', type: 'special' },
        { name: '王冠之重', effect: '获得1个【德玛西亚王冠】，携带者阵亡则输掉该回合。', type: 'special' },
        { name: '寻宝', effect: '阶段间获得上锁宝箱，刷新商店花费20金币解锁，宝箱存留至打开。', type: 'special' },
        
        // 赌注与随机类
        { name: '黄金赌约', effect: '获得4金币并抛硬币，正面得光明版幸运装备宝箱，反面得2个成装锻造器。', type: 'gamble' },
        { name: '混沌召唤', effect: '获得1个强大的随机奖励。', type: 'gamble' },
        { name: '意料之中的意外', effect: '现在及下2阶段开始时投掷3个骰子，根据总点数获得奖励。', type: 'gamble' },
        { name: '魔法投掷', effect: '投掷3个骰子，根据总点数获得奖励。', type: 'gamble' },
        { name: '扩展包', effect: '获得价值9金币的随机弈子（至少一个3费）。', type: 'gamble' },
        { name: '扩展包+', effect: '获得价值18金币的随机弈子（至少一个4费）。', type: 'gamble' },
        { name: '扩展包++', effect: '获得价值30金币的随机弈子（至少一个5费）。', type: 'gamble' },
        { name: '纷乱头脑', effect: '立刻获得4个随机1费弈子，回合结束时备战席已满则获得3经验。', type: 'gamble' },
        
        // 其他类
        { name: '三相庇护', effect: '立刻获得3金币，阶段3-7获得1个【三相之力】，为同一排弈子提供12%生命值护盾。', type: 'other' },
        { name: '不侦察，不变阵', effect: '参与对战后弈子无法出售或回备战席，队伍获得1%生命值、1.5%物法加成。', type: 'other' },
        { name: '专属定制', effect: '获得1个【幸运装备宝箱】、1个【装备拆卸器】、10金币。', type: 'other' },
        { name: '专属定制 II', effect: '获得2个【幸运装备宝箱】、1个【装备拆卸器】、10金币。', type: 'other' },
        { name: '英勇福袋', effect: '获得2个【次级英雄复制器】、5金币。', type: 'other' },
        { name: '英勇福袋+', effect: '获得2个【次级英雄复制器】、8金币。', type: 'other' },
        { name: '英勇福袋++', effect: '获得2个【次级英雄复制器】、14金币。', type: 'other' },
        { name: '获得21金币', effect: '获得21金币。', type: 'other' },
        { name: '认知过载', effect: '获得7金币、1个2星1费、1个2费、2个3费弈子、1经验值和1次刷新。', type: 'other' },
        { name: '双排', effect: '获得2个随机5费弈子和2件相同的随机基础装备。', type: 'other' },
        { name: '赏金战士', effect: '获得2件基础装备，每赢5场胜利获得1件基础装备。', type: 'other' },
        { name: '四费增援', effect: '用金币购买的下一个4费弈子立刻升到2星，获得5金币。', type: 'other' },
        { name: '小伙伴', effect: '每个登场的1费和2费弈子为4费和5费弈子提供55生命值和6%攻速。', type: 'other' },
        { name: '坦度成双', effect: '若登场相同英雄的2个弈子，均获得550生命值，一方阵亡时另一方获得40%最大生命值护盾。升3星时获得该英雄的1个2星弈子。', type: 'other' },
        { name: '心之钢', effect: '获得1个【坚定之心】，携带者每存活10秒额外获得12永久最大生命值。', type: 'other' },
        { name: '火上浇油', effect: '获得1个【日炎斗篷】，队伍攻击灼烧敌人时获得12%全能吸血。', type: 'other' },
        { name: '泪流成河', effect: '获得1个【女神之泪】，队伍获得1法力回复，12秒后提升至3。', type: 'other' },
        { name: '源计划植入', effect: '携带1件装备的友军获得100生命值和20%物理加成，获得1个【暴风大剑】。', type: 'other' },
        { name: '源计划上行链路', effect: '携带1件装备的友军获得100生命值和2法力回复，获得1个【女神之泪】。', type: 'other' },
        { name: '浪人 II', effect: '战斗开始时邻格无单位的弈子获得30%最大生命值护盾，持续10秒。', type: 'other' },
        { name: '潘朵拉的备战席', effect: '备战席最右侧3个栏位英雄变为随机同费用英雄，获得6金币。', type: 'other' },
        { name: '灵活摇摆', effect: '获得1个随机纹章，每个阶段开始时获得1个随机纹章，每携带一个纹章队伍获得40生命值。', type: 'other' },
        { name: '蔓延之根', effect: '获得2个随机纹章和1金币。', type: 'other' },
        { name: '蔓延之根+', effect: '获得2个随机纹章、1个【装备重铸器】和2金币。', type: 'other' },
        { name: '羁绊树', effect: '获得3个随机纹章、1个【装备重铸器】和2金币。', type: 'other' },
        { name: '羁绊树+', effect: '获得3个随机纹章、1个【装备重铸器】和4金币。', type: 'other' },
        { name: '终身黄铜 II', effect: '每拥有一个黄铜级羁绊，己方获得2.5%伤害增幅和4双抗。', type: 'other' },
        { name: '金鳞精粹', effect: '获得1个【大亨之铠】，6回合内获得1个【投机者之刃】。', type: 'other' }
    ],
    
    // 彩色级（三级）- 完整68个符文（来源：小斑游戏 2026-04-02）
    prismatic: [
        { name: '1个霸符，2个霸符', effect: '获得1个【红霸符】、1个【蓝霸符】和1个【英雄复制器】。', type: 'equipment' },
        { name: '三项赛 II', effect: '获得3个3费弈子。己方弈子获得5%攻击速度。战斗开始时：3个随机3费英雄获得300生命值和25%攻击速度。', type: 'combat' },
        { name: '上进心', effect: '购买经验的费用降低1。每当你升级时，获得2生命值和2次免费刷新。', type: 'economic' },
        { name: '不计代价', effect: '立即升到6级并获得12经验值。你无法选择之后的强化符文。', type: 'economic' },
        { name: '九条命', effect: '将你的当前和最大玩家生命值设置为9。输掉战斗时，你只会损失1生命值并获得战利品。你无法获得生命值。', type: 'special' },
        { name: '值得等待 II', effect: '获得一个随机2费弈子的2个1星版本。每回合开始时都会获得该弈子的又一个1星版本，持续至本局游戏结束。', type: 'economic' },
        { name: '光明无赖', effect: '获得1个【光明窃贼手套】。每回合装备2件随机的临时光明武器。', type: 'equipment' },
        { name: '升级咯！', effect: '在你购买经验值的时候，获得额外的2经验值。立刻获得8经验值。', type: 'economic' },
        { name: '可大可小', effect: '获得1个【金制拆卸器】和4个随机基础装备。', type: 'equipment' },
        { name: '坚守防线', effect: '战斗开始时，你的前排每有一名己方弈子，后两排的己方弈子就会获得10%法术加成和9%物理加成。', type: 'combat' },
        { name: '大买特买', effect: '在你升级时，获得相当于你等级数+1的免费商店刷新次数。获得2金币。', type: 'economic' },
        { name: '大剑溢流', effect: '获得4个【暴风大剑】。你的【暴风大剑】提供+4%攻击速度。', type: 'equipment' },
        { name: '大而有力', effect: '你的队伍体型变大，获得200生命值和10%最大生命值。', type: 'combat' },
        { name: '奢侈品订购', effect: '获得1个包裹，包含1个5费弈子、1个2星1费弈子和5金币。在接下来的2个阶段开始时，再次获得该包裹。', type: 'economic' },
        { name: '对冲基金', effect: '获得25金币。你的最大利息提升至10金币。', type: 'economic' },
        { name: '对冲基金+', effect: '获得30金币。你的最大利息提升至10金币。', type: 'economic' },
        { name: '小而致命', effect: '你的队伍体型变小，获得30%攻击速度和移动速度。', type: 'combat' },
        { name: '崇高冒险', effect: '获得3名2费弈子。如果你将他们当中的两个升为3星，将获得一个充满战利品的法球。在接下来的2个阶段开始时会获得1个【次级英雄复制器】。', type: 'economic' },
        { name: '幸运手套', effect: '【窃贼手套】总会为你的弈子们提供理想的装备。获得2个【拳套】。', type: 'equipment' },
        { name: '幸运手套+', effect: '【窃贼手套】总会为你的弈子们提供推荐装备。即刻获得2个【拳套】，然后在4场玩家对战后获得另一个。', type: 'equipment' },
        { name: '意料之中的意外', effect: '现在以及下2个阶段开始时，投掷3个骰子。根据总点数获得各种奖励。', type: 'gamble' },
        { name: '投资+', effect: '获得26金币。在每场战斗之后，在50金币之上，每拥有10金币就会获得1次商店刷新(最多80金币)。', type: 'economic' },
        { name: '投资++', effect: '获得40金币。在每场战斗之后，在50金币之上，每拥有10金币就会获得1次商店刷新(最多80金币)。', type: 'economic' },
        { name: '挑个好伙计！', effect: '你购买的下个1费弈子变为3星。获得2金币。', type: 'economic' },
        { name: '摇钱树', effect: '立刻并在剩余游戏时间内每回合获得7金币。', type: 'economic' },
        { name: '散件丰收日', effect: '在6场玩家对战回合后，获得所有的基础装备各一件。即刻获得一件随机的基础装备。', type: 'equipment' },
        { name: '新人入队', effect: '获得+1最大队伍规模和1个【英雄复制器】。', type: 'special' },
        { name: '明智消费', effect: '你不能再购买经验值。每次花费金币刷新商店时，获得2经验值。立刻获得3金币。', type: 'economic' },
        { name: '最小巨人', effect: '在每场玩家对战回合后获得2玩家生命值和2金币。你的小小英雄还会移动得更快。立刻获得15金币。', type: 'economic' },
        { name: '来个好伙计', effect: '获得1个随机3星1费弈子。获得8金币。', type: 'economic' },
        { name: '棱彩门票', effect: '每当你的商店刷新时，你都有50%几率获得1次免费刷新。', type: 'economic' },
        { name: '正义报复', effect: '获得2个【正义之手】。装备【正义之手】的友方获得【精准】。', type: 'equipment' },
        { name: '水乳交融', effect: '获得1个随机纹章和1个【成装锻造器】。与该纹章有同一羁绊的己方弈子们获得25%攻击速度。', type: 'special' },
        { name: '法杖溢流', effect: '获得4个【无用大棒】。你的【无用大棒】提供+5%攻击速度。', type: 'equipment' },
        { name: '活体锻炉', effect: '立刻以及之后的每8个玩家对战回合后获得1个【神器锻造器】。', type: 'equipment' },
        { name: '混沌召唤', effect: '获得1个强大的随机奖励。', type: 'gamble' },
        { name: '潘朵拉的装备 III', effect: '回合开始时：你备战席上的装备会随机变化。获得1件随机光明武器。', type: 'equipment' },
        { name: '灵魂唤醒', effect: '战斗开始时：你的队伍每秒获得1.5%物理加成和法术加成，持续10秒。在最大层数时，造成12%额外真实伤害。', type: 'combat' },
        { name: '点击即送', effect: '获得1个【英雄复制器】、18次商店刷新和3金币。', type: 'economic' },
        { name: '珍藏财宝', effect: '立刻以及接下来的5个回合开始时，获得1个随机基础装备。', type: 'equipment' },
        { name: '珠光莲花 II', effect: '己方获得25%暴击几率、10%暴击伤害和【精准】。', type: 'combat' },
        { name: '甜点', effect: '获得1个【神器锻造器】。弈子每携带1个装备，你的队伍就获得20生命值。', type: 'equipment' },
        { name: '生日礼物', effect: '在你每次升级时提供1个2星弈子和1金币。这个弈子的费用位阶是你的等级减4(最大值：5费)。', type: 'economic' },
        { name: '男爵幻域', effect: '获得一件随机坦克装备。在战斗开始8秒后，你的弈子们会获得5%额外物理加成和法术加成，持续至战斗环节结束。', type: 'combat' },
        { name: '登上最高峰', effect: '当你到达9级时，立刻升至10级并获得2次商店刷新。立刻获得6经验值。', type: 'economic' },
        { name: '硬性承诺', effect: '获得1个随机纹章。现在以及每个阶段开始时，获得该羁绊的一个1星弈子，且该弈子的费用相当于当前阶段数(最多为5)，并获得4金币。', type: 'special' },
        { name: '神力天铸', effect: '获得1个随机神器。当你降至40生命值时，额外获得3个随机神器。', type: 'equipment' },
        { name: '窃贼帮派 II', effect: '获得2个【窃贼手套】。在8场玩家对战回合后，获得另一个。', type: 'equipment' },
        { name: '窃贼帮派 II+', effect: '获得2个【窃贼手套】。在6场玩家对战回合后，获得另一个。', type: 'equipment' },
        { name: '窃贼帮派 II++', effect: '获得2个【窃贼手套】。在3场玩家对战回合后，获得另一个。', type: 'equipment' },
        { name: '纺织魔法', effect: '获得1件随机基础装备。你的小队每消耗2200法力值，就会提供1个额外基础装备。', type: 'equipment' },
        { name: '终身黄铜 II', effect: '每拥有一个黄铜级羁绊，己方获得2.5%伤害增幅和4护甲与魔抗。', type: 'combat' },
        { name: '绝境反击', effect: '每损失1玩家生命值，你的队伍获得5生命值和0.4%攻击速度。', type: 'combat' },
        { name: '羁绊树', effect: '获得3个随机纹章、一个【装备重铸器】和2金币。', type: 'special' },
        { name: '羁绊树+', effect: '获得3个随机纹章、一个【装备重铸器】和4金币。', type: 'special' },
        { name: '腰带溢流', effect: '获得4个【巨人腰带】。你的【巨人腰带】提供+85额外生命值。', type: 'equipment' },
        { name: '订阅服务', effect: '现在以及每个阶段开始时，开启一个由4个独特4费弈子组成的商店，并获得6金币。', type: 'economic' },
        { name: '诅咒冠冕', effect: '提供+2最大队伍规模，并且你的队伍获得4%伤害减免，但你在输掉一场玩家对战回合后会承受2倍的玩家伤害。', type: 'special' },
        { name: '贸易中心', effect: '立刻获得16次免费商店刷新，并在剩余游戏时间内每回合获得3次免费商店刷新。', type: 'economic' },
        { name: '遥遥领先', effect: '你不再获得利息。即刻获得8金币。在你的回合开始时，获得4经验。', type: 'economic' },
        { name: '金蛋', effect: '获得1个大金蛋，需要11个回合来孵化，在孵化时提供大量战利品。赢下玩家对战回合后会使孵化倒计时加快1个额外的回合。', type: 'economic' },
        { name: '金鳞精粹', effect: '获得1个【大亨之铠】。在6回合内，获得1个【投机者之刃】。', type: 'equipment' },
        { name: '锅铲厨房', effect: '获得1个随机纹章。在3个回合后，获得1个【金锅铲冠冕】。', type: 'equipment' },
        { name: '锻造挚友', effect: '你购买的下个1费弈子变为3星。获得2金币。', type: 'economic' },
        { name: '阿福的百宝袋', effect: '获得1个【金铲铲】、3个随机基础装备、以及5金币。', type: 'equipment' },
        { name: '黄金赌约', effect: '获得12金币，并抛一枚硬币。如果硬币正面朝上，获得1个光明版幸运装备宝箱。如果硬币反面朝上，获得2个成装锻造器。', type: 'gamble' },
        { name: '黄金赌约+', effect: '获得1金币，并抛一枚硬币。正面得光明版幸运装备宝箱，反面得2个成装锻造器。', type: 'gamble' },
        { name: '黄金赌约++', effect: '获得4金币，并抛一枚硬币。正面得光明版幸运装备宝箱，反面得2个成装锻造器。', type: 'gamble' },
    ]
};

// ==================== 羁绊数据 ====================
const traits = [
    // 种族羁绊（特质）
    { id: 'phantom', name: '幻灵战队', type: 'racial', levels: [3, 5], description: '设置基础层数和击杀层数，额外科技值可通过连败获取，激活5幻灵后根据小小英雄掉血量给场上弈子提供血量加成，每累计达到100整数倍的科技值即可选择收菜。' },
    { id: 'stargazer', name: '观星者', type: 'racial', levels: [3, 5, 7, 9, 11], description: '每局游戏会观测到一个不同的星座（蝰蛇、秀山、野猪、圣坛、女猎手、泉水、勋章），提供不同的强化格加成。每5个玩家对战回合赠送1个转职道具。' },
    { id: 'space_groove', name: '太空律动', type: 'racial', levels: [3, 5, 7, 10], description: '太空律动弈子根据自身技能描述可获得攻速+回血的buff，队伍中每多1名律动者，该加成幅度提升。激活10太空律动全员开始跳舞，砸人可造成真实伤害和眩晕。' },
    { id: 'dark_star', name: '暗星', type: 'racial', levels: [2, 4, 6, 9], description: '2暗星可触发斩杀效果；4暗星提供双攻加成；6暗星召唤2个黑洞作为前排；9暗星黑洞会移动至棋盘中间，直接吞噬所有敌人。' },
    { id: 'wood_spirit', name: '木灵族', type: 'racial', levels: [2, 3, 4, 5], description: '木灵族弈子可吸引木灵，木灵会强化木灵族的技能，同时木灵族弈子会获得额外生命值。彩色羁绊最容易达成，仅需2个转职即可激活，激活后召唤4只绿色奶龙加入战斗。' },
    { id: 'judge', name: '法官', type: 'racial', levels: [2, 3, 4], description: '可自主选择1种神圣法则，使法官羁绊效果翻倍，再选择1个触发条件，满足条件后效果生效，可根据对局情况自由搭配组合。' },
    { id: 'mecha', name: '霸天机甲', type: 'racial', levels: [3, 4], description: '机甲单位可变为终极形态，升级技能并获得60%生命值加成；变身后的机甲占用2个队伍栏位，同时计算为2个机甲羁绊单位。激活3机甲获得20%攻击力和法术强度；激活4机甲获得35%攻击力和法术强度。' },
    { id: 'nova', name: '新星特攻队', type: 'racial', levels: [3, 5, 6], description: '激活羁绊后，6秒后会发动全屏砸击，砸击效果会根据上场的新星弈子附带不同额外效果。激活5新星特攻队后还会获得效果选择器，可自主选择不同效果。' },
    { id: 'sea_monster', name: '海魔人', type: 'racial', levels: [3, 5], description: '海魔人弈子造成伤害时会召唤基于自身星级的幼体造成物理伤害。激活3海魔人还会发放1-2费卡，属于适合赌狗玩法的羁绊。' },
    { id: 'psycho', name: '灵能特工', type: 'racial', levels: [2, 4], description: '一共有7个模块，每局随机获得2个。2灵能特工给本地和外地弈子的加成一致；4灵能特工有金色边框标记，给灵能弈子提供额外加成。' },
    { id: 'future', name: '未来战士', type: 'racial', levels: [2, 3, 4], description: '2未来战士对局失败时/获胜时提供对应加成；3未来战士所有友军获得15%攻击速度；4未来战士额外获得50%攻击速度。是偏向经济类增益的羁绊，同时提供攻速加成。' },
    
    // 职业羁绊
    { id: 'weaver', name: '织命人', type: 'class', levels: [2, 4], description: '自带技能暴击磁条；激活2织命人提升技能生效和暴击概率；激活4织命人提升暴击伤害。' },
    { id: 'berserker', name: '狂战士', type: 'class', levels: [2, 3, 4], description: '获得5%全能吸血，同时获得伤害增幅，效果可翻倍，自带吸血和增伤属性。' },
    { id: 'magician', name: '魔术师', type: 'class', levels: [2, 3], description: '激活羁绊后可释放2次技能，但第二次技能效果会减弱。' },
    { id: 'ranger', name: '游侠', type: 'class', levels: [2, 3, 4, 5], description: '参与击杀后，持续3秒获得增益，2/3/4/5游侠为数值层面的提升。' },
    { id: 'shepherd', name: '牧羊人', type: 'class', levels: [2, 3], description: '本赛季的召唤类羁绊，类似一只狐狸的召唤效果，技能效果会随牧羊人的总星级提升而变多。' },
    { id: 'bastion', name: '堡垒卫士', type: 'class', levels: [2, 4, 6] },
    { id: 'fighter', name: '斗士', type: 'class', levels: [2, 4, 6] },
    { id: 'challenger', name: '挑战者', type: 'class', levels: [2, 4, 6] },
    { id: 'oracle', name: '神谕', type: 'class', levels: [2, 3, 4] },
    { id: 'sniper', name: '狙神', type: 'class', levels: [2, 3] },
    { id: 'vanguard', name: '重装战士', type: 'class', levels: [2, 4, 6] },
    { id: 'traveler', name: '旅人（司令）', type: 'class', levels: [2, 3] }
];

// ==================== 英雄数据 ====================
const champions = [
    // 1费英雄
    { name: '泰隆', cost: 1, traits: ['stargazer', 'berserker'] },
    { name: '崔斯特（卡牌）', cost: 1, traits: ['space_groove', 'magician'] },
    { name: '贾克斯', cost: 1, traits: ['wood_spirit', 'weaver'] },
    
    // 2费英雄
    { name: '霞', cost: 2, traits: ['stargazer', 'ranger'] },
    { name: '露露', cost: 2, traits: ['stargazer', 'shepherd'] },
    { name: '内瑟纳斯', cost: 2, traits: ['dark_star', 'bastion'] },
    
    // 3费英雄
    { name: '莫德凯撒', cost: 3, traits: ['mecha', 'berserker'] },
    { name: '派克', cost: 3, traits: ['nova', 'assassin'] },
    { name: '古拉加斯', cost: 3, traits: ['future', 'fighter'] },
    
    // 4费英雄
    { name: '劫', cost: 4, traits: ['dark_star', 'berserker'] },
    { name: '厄运小姐', cost: 4, traits: ['phantom', 'sniper'] },
    { name: '拉亚斯特', cost: 4, traits: ['psycho', 'assassin'] },
    
    // 5费英雄
    { name: '奥瑞利安·索尔', cost: 5, traits: ['space_groove', 'oracle'] },
    { name: '亚索', cost: 5, traits: ['nova', 'challenger'] },
    { name: '凯尔', cost: 5, traits: ['judge', 'berserker'] }
];

// ==================== 装备数据 ====================
const items = [
    // 基础装备
    { id: 'bf_sword', name: '暴风大剑', type: 'basic', stat: '+10攻击力' },
    { id: 'recurve_bow', name: '反曲之弓', type: 'basic', stat: '+10%攻击速度' },
    { id: 'tear', name: '女神之泪', type: 'basic', stat: '+10法力值' },
    { id: 'giants_belt', name: '巨人腰带', type: 'basic', stat: '+150生命值' },
    { id: 'chain_vest', name: '锁子甲', type: 'basic', stat: '+20护甲' },
    { id: 'negatron_cloak', name: '负极斗篷', type: 'basic', stat: '+20魔法抗性' },
    { id: 'spatula', name: '金铲铲', type: 'basic', stat: '可合成纹章' },
    { id: 'needlessly_large_rod', name: '无用大棒', type: 'basic', stat: '+10法术强度' },
    { id: 'glove', name: '拳套', type: 'basic', stat: '+10%暴击几率，+10%闪避' },
    
    // 成品装备（部分示例）
    { id: 'infinity_edge', name: '无尽之刃', type: 'advanced', components: ['bf_sword', 'glove'], stat: '+40攻击力，+20%暴击几率，+10%暴击伤害' },
    { id: 'rapid_firecannon', name: '疾射火炮', type: 'advanced', components: ['recurve_bow', 'recurve_bow'], stat: '+25%攻击速度，攻击无视闪避，攻击距离翻倍' },
    { id: 'blue_buff', name: '蓝霸符', type: 'advanced', components: ['tear', 'tear'], stat: '+20法力值，释放技能后回复20法力值' },
    { id: 'sunfire_cape', name: '日炎斗篷', type: 'advanced', components: ['chain_vest', 'giants_belt'], stat: '+20护甲，+150生命值，每秒对相邻敌人造成魔法伤害' },
    { id: 'dragons_claw', name: '巨龙之爪', type: 'advanced', components: ['negatron_cloak', 'negatron_cloak'], stat: '+40魔法抗性，获得额外魔法抗性' },
    { id: 'rabadons_deathcap', name: "莫雷洛秘典", type: 'advanced', components: ['needlessly_large_rod', 'needlessly_large_rod'], stat: '+40法术强度，法术伤害提升' }
];

// ==================== 阵容数据 ====================
const compositions = [
    {
        id: 'dark_star_kaisa',
        name: '暗星卡莎',
        tier: 'T0',
        difficulty: '中等',
        description: '以卡莎为核心的暗星阵容，利用暗星的斩杀效果和卡莎的爆发伤害快速清场。',
        traits: ['dark_star', 'berserker', 'sniper'],
        mainChampions: ['卡莎', '劫', '凯尔'],
        position: {
            front: ['劫', '内瑟纳斯'],
            middle: ['卡莎', '凯尔'],
            back: ['厄运小姐', '崔斯特']
        },
        equipment: {
            '卡莎': ['无尽之刃', '疾射火炮', '莫雷洛秘典'],
            '劫': ['饮血剑', '无尽之刃', '守护天使']
        },
        starGod: '亚索', // 推荐星神
        constellation: '蝰蛇', // 推荐星座
        earlyGame: '前期用2暗星+2狂战士过渡，优先拿攻速装备',
        midGame: '6人口开始搜卡莎，凑4暗星羁绊',
        lateGame: '8人口追2星卡莎，9人口补齐阵容',
        hexes: ['珠光莲花 II', '飞升', '了解你的敌人'], // 推荐强化符文
        advantages: ['爆发高', '斩杀能力强', '后期稳定'],
        disadvantages: ['需要卡莎2星', '前期较脆'],
        source: '官网+17173',
        updateTime: '2026-05-14'
    },
    {
        id: 'nova_nine_five',
        name: '新星九五',
        tier: 'T0',
        difficulty: '困难',
        description: '运营上9/10级，利用高费卡的强度优势碾压对手。',
        traits: ['nova', 'space_groove', 'judge'],
        mainChampions: ['奥瑞利安·索尔', '亚索', '凯尔'],
        position: {
            front: ['内瑟纳斯', '莫德凯撒'],
            middle: ['亚索', '奥瑞利安·索尔'],
            back: ['卡莎', '厄运小姐']
        },
        equipment: {
            '奥瑞利安·索尔': ['蓝霸符', '莫雷洛秘典', '无尽之刃'],
            '亚索': ['无尽之刃', '饮血剑', '守护天使']
        },
        starGod: '阿狸', // 推荐星神（经济运营）
        constellation: '秀山', // 推荐星座（高生存）
        earlyGame: '前期连胜或连败保血，快速积攒金币',
        midGame: '3-5阶段开始上8级，搜关键高费卡',
        lateGame: '上9/10级，追2星5费卡',
        hexes: ['后期收益', '新纪元+', '阿狸的恩赐'],
        advantages: ['上限高', '5费卡强度高', '适合运营玩家'],
        disadvantages: ['需要极高运营能力', '前期容易掉血'],
        source: '官网+搜狐',
        updateTime: '2026-05-14'
    },
    {
        id: 'wood_spirit_jin',
        name: '木灵九五烬',
        tier: 'T0.5',
        difficulty: '中等',
        description: '利用木灵族的木灵强化和5费卡的强度，稳定上分。',
        traits: ['wood_spirit', 'berserker', 'sniper'],
        mainChampions: ['烬', '凯尔', '奥瑞利安·索尔'],
        position: {
            front: ['贾克斯', '内瑟纳斯'],
            middle: ['烬', '凯尔'],
            back: ['奥瑞利安·索尔', '厄运小姐']
        },
        equipment: {
            '烬': ['无尽之刃', '疾射火炮', '饮血剑'],
            '凯尔': ['无尽之刃', '莫雷洛秘典', '蓝霸符']
        },
        starGod: '韦鲁斯', // 推荐星神（5费强化）
        constellation: '野猪', // 推荐星座（经济收益）
        earlyGame: '前期用2木灵+2狙神过渡',
        midGame: '7人口开始存钱上8/9',
        lateGame: '9人口追2星5费卡，激活彩色木灵羁绊',
        hexes: ['韦鲁斯的恩赐', '珠光莲花 II', '飞升'],
        advantages: ['稳定', '后期强', '木灵强化有趣'],
        disadvantages: ['需要上9/10级', '依赖5费卡'],
        source: '17173+游侠网',
        updateTime: '2026-05-14'
    },
    {
        id: 'stargazer_jax',
        name: '观星贾克斯',
        tier: 'T1',
        difficulty: '简单',
        description: '利用观星者的星座加成和贾克斯的魔法战士能力，适合新手。',
        traits: ['stargazer', 'wood_spirit', 'weaver'],
        mainChampions: ['贾克斯', '霞', '露露'],
        position: {
            front: ['贾克斯', '泰隆'],
            middle: ['霞', '露露'],
            back: ['崔斯特', '厄运小姐']
        },
        equipment: {
            '贾克斯': ['饮血剑', '无尽之刃', '水银'],
            '霞': ['疾射火炮', '无尽之刃', '饮血剑']
        },
        starGod: '凯尔', // 推荐星神（装备供给）
        constellation: '勋章', // 推荐星座（属性加成）
        earlyGame: '前期用3观星者过渡，优先拿反曲之弓',
        midGame: '6人口追3星贾克斯',
        lateGame: '8人口补齐阵容，根据星座调整站位',
        hexes: ['凯尔的恩赐', '珠光莲花 I', '复苏之风 II'],
        advantages: ['简单易懂', '前期强势', '成本低'],
        disadvantages: ['后期上限一般', '依赖贾克斯3星'],
        source: '微信公众号+小红书',
        updateTime: '2026-05-14'
    },
    {
        id: 'phantom_collection',
        name: '幻灵收菜',
        tier: 'T0.5',
        description: '鼓励连败收菜的羁绊，开出5幻灵后获得强大的武器加成。',
        traits: ['phantom', 'space_groove', 'sniper'],
        difficulty: '困难',
        mainChampions: ['厄运小姐', '奥瑞利安·索尔', '霞'],
        position: {
            front: ['内瑟纳斯', '莫德凯撒'],
            middle: ['厄运小姐', '霞'],
            back: ['奥瑞利安·索尔', '崔斯特']
        },
        equipment: {
            '厄运小姐': ['蓝霸符', '莫雷洛秘典', '无尽之刃'],
            '奥瑞利安·索尔': ['蓝霸符', '莫雷洛秘典', '疾射火炮']
        },
        starGod: '奥瑞利安·索尔', // 推荐星神（羁绊探险）
        constellation: '圣坛', // 推荐星座（法力回复）
        earlyGame: '前期故意连败，积攒幻灵层数',
        midGame: '5幻灵后开始收菜，获得武器加成',
        lateGame: '8/9人口补齐阵容，利用武器加成碾压',
        hexes: ['奥瑞利安·索尔的恩赐', '后期收益', '飞升'],
        advantages: ['收菜后强度极高', '适合高风险玩家'],
        disadvantages: ['需要连败', '容错率低'],
        source: '17173',
        updateTime: '2026-05-14'
    },
    {
        id: 'mecha_assassin',
        name: '机甲刺客',
        tier: 'T1',
        difficulty: '中等',
        description: '利用机甲的高生命值和刺客的爆发，前排坦克+后排切C。',
        traits: ['mecha', 'assassin', 'berserker'],
        mainChampions: ['莫德凯撒', '劫', '拉亚斯特'],
        position: {
            front: ['莫德凯撒', '内瑟纳斯'],
            middle: ['劫', '拉亚斯特'],
            back: ['崔斯特', '厄运小姐']
        },
        equipment: {
            '莫德凯撒': ['日炎斗篷', '巨龙之爪', '守护天使'],
            '劫': ['无尽之刃', '饮血剑', '水银']
        },
        starGod: '亚索', // 推荐星神（单体增益）
        constellation: '女猎手', // 推荐星座（攻速暴击）
        earlyGame: '前期用2机甲+2刺客过渡',
        midGame: '6人口追2星莫德凯撒和劫',
        lateGame: '8人口激活4机甲，追3星劫',
        hexes: ['亚索的恩赐', '玻璃大炮 II', '充能转移 II'],
        advantages: ['前排坦度高', '后排爆发强'],
        disadvantages: ['需要2个4费核心', '阵容成型较慢'],
        source: '官网',
        updateTime: '2026-05-14'
    },
    {
        id: 'space_groove_mage',
        name: '太空律动法师',
        tier: 'T0.5',
        difficulty: '中等',
        description: '利用太空律动的攻速+回血buff，搭配法师的高伤害。',
        traits: ['space_groove', 'magician', 'oracle'],
        mainChampions: ['奥瑞利安·索尔', '崔斯特', '凯尔'],
        position: {
            front: ['内瑟纳斯', '贾克斯'],
            middle: ['奥瑞利安·索尔', '崔斯特'],
            back: ['凯尔', '厄运小姐']
        },
        equipment: {
            '奥瑞利安·索尔': ['蓝霸符', '莫雷洛秘典', '无尽之刃'],
            '崔斯特': ['蓝霸符', '莫雷洛秘典', '疾射火炮']
        },
        starGod: '艾克', // 推荐星神（后期资源）
        constellation: '圣坛', // 推荐星座（法力回复）
        earlyGame: '前期用3太空律动过渡，优先拿女神之泪',
        midGame: '7人口开始搜奥瑞利安·索尔',
        lateGame: '9人口激活7太空律动，全员跳舞砸人',
        hexes: ['艾克的恩赐', '飞升', '珠光莲花 II'],
        advantages: ['攻速高', '回血强', '10太空律动强度极高'],
        disadvantages: ['需要上10级', '依赖奥瑞利安·索尔'],
        source: '搜狐+17173',
        updateTime: '2026-05-14'
    },
    {
        id: 'future_warrior',
        name: '未来战士',
        tier: 'T1',
        difficulty: '简单',
        description: '偏向经济类增益的羁绊，同时提供攻速加成，适合新手。',
        traits: ['future', 'fighter', 'sniper'],
        mainChampions: ['古拉加斯', '厄运小姐', '霞'],
        position: {
            front: ['古拉加斯', '内瑟纳斯'],
            middle: ['霞', '厄运小姐'],
            back: ['崔斯特', '奥瑞利安·索尔']
        },
        equipment: {
            '古拉加斯': ['日炎斗篷', '巨龙之爪', '救赎'],
            '霞': ['疾射火炮', '无尽之刃', '饮血剑']
        },
        starGod: '阿狸', // 推荐星神（经济运营）
        constellation: '野猪', // 推荐星座（经济收益）
        earlyGame: '前期用2未来战士+2斗士过渡',
        midGame: '6人口追2星古拉加斯和霞',
        lateGame: '8人口激活4未来战士',
        hexes: ['阿狸的恩赐', 'DD街区', '后期收益'],
        advantages: ['经济好', '攻速高', '适合新手'],
        disadvantages: ['后期上限一般', '依赖霞2星'],
        source: '游侠网',
        updateTime: '2026-05-14'
    },
    // ====== 以下为2026-05-14从搜狐、17173小红书等渠道收集的新阵容 ======
    {
        id: 'vanguard_lb',
        name: '重装妖姬',
        tier: 'T0',
        difficulty: '中等',
        description: '三费赌狗版本答案，6重装战士提供超高坦度，妖姬切后排稳定收割。',
        traits: ['vanguard', 'assassin'],
        mainChampions: ['妖姬', '努努', '卡尔玛'],
        position: {
            front: ['努努', '俄洛伊', '莫甘娜'],
            middle: ['小木灵', '佐伊'],
            back: ['妖姬', '卡尔玛', '欧蕾娜']
        },
        equipment: {
            '妖姬': ['鬼索的狂暴之刃', '珠光护手', '巨人杀手'],
            '努努': ['离子火花', '日炎斗篷', '狂徒铠甲'],
            '卡尔玛': ['灭世者的死亡之帽', '莫雷洛秘典', '蓝霸符']
        },
        starGod: '韦鲁斯',
        constellation: '勋章',
        earlyGame: '开局拿大棒或弓，用低费重装搭配未来战士过渡，存钱',
        midGame: '上7人口，卡利息慢D，追出三星妖姬',
        lateGame: '三星妖姬后上8人口，开出6重装羁绊，坦度质变',
        hexes: ['职业杀手·派克', '珠光莲花 II', '飞升'],
        advantages: ['坦度高', '妖姬切后排强', '赌狗阵容稳定'],
        disadvantages: ['依赖妖姬三星', '重装同行多时难追'],
        source: '搜狐号-红手指游戏',
        updateTime: '2026-05-13'
    },
    {
        id: 'wood_veigar',
        name: '木灵小法',
        tier: 'T0',
        difficulty: '中等',
        description: '利用木灵族的复制机制，快速追出三星小法，配合7木灵羁绊碾压对手。',
        traits: ['wood_spirit', 'magician', 'dark_star'],
        mainChampions: ['小法', '库奇', '拉莫斯'],
        position: {
            front: ['拉莫斯', '波比', '丽桑卓'],
            middle: ['库奇', '菲兹', '小木灵'],
            back: ['小法', '卡尔玛', '巴德']
        },
        equipment: {
            '小法': ['纳什之牙', '珠光护手', '朔极之矛'],
            '库奇': ['最后的轻语', '锐利之刃', '巨人杀手'],
            '拉莫斯': ['日炎斗篷', '荆棘背心', '离子火花']
        },
        starGod: '韦鲁斯',
        constellation: '圣坛',
        earlyGame: '不搜牌，有木灵和牧羊人则直接升人口',
        midGame: '8人口搜出7木灵羁绊',
        lateGame: '利用木灵复制快速追三星小法，上9挂巴德或莫甘娜提升上限',
        hexes: ['摘星之志·贾克斯', '韦鲁斯的恩赐', '飞升'],
        advantages: ['木灵复制快速追三', '后期强度高', '冷门不易撞车'],
        disadvantages: ['需要稳定运营上8', '依赖小法三星'],
        source: '搜狐号-红手指游戏',
        updateTime: '2026-05-13'
    },
    {
        id: 'sniper_xia',
        name: '闭环狙神霞',
        tier: 'T0',
        difficulty: '简单',
        description: '公式化稳定上分阵容，观星秀山星座配合狙神体系，霞和烬双C收割战场。',
        traits: ['stargazer', 'ranger', 'vanguard'],
        mainChampions: ['霞', '烬', '努努'],
        position: {
            front: ['努努', '拉莫斯', '慎'],
            middle: ['巴德'],
            back: ['霞', '烬', '布里茨']
        },
        equipment: {
            '霞': ['鬼索的狂暴之刃', '海妖杀手', '无尽之刃'],
            '烬': ['无尽之刃', '巨人杀手', '锐利之刃'],
            '努努': ['日炎斗篷', '冰甲', '头盔']
        },
        starGod: '韦鲁斯',
        constellation: '秀山',
        earlyGame: '有"观星秀山"相关强化符文即可无脑冲，公式化玩法',
        midGame: '8人口找2星霞和前排肉坦',
        lateGame: '9人口补齐体系牌，追出2星烬，阵容大成',
        hexes: ['珠光莲花 II', '复苏之风 II', '了解你的敌人'],
        advantages: ['公式化稳定', '同行少', '霞和烬双C稳定'],
        disadvantages: ['需要特定星座', '大成需要9人口'],
        source: '搜狐号-红手指游戏',
        updateTime: '2026-05-13'
    },
    {
        id: 'dark_star_double_gun',
        name: '暗星双枪九五',
        tier: 'T0',
        difficulty: '困难',
        description: '顶级九五运营阵容，有无暗星转职都能玩，烬主C+格雷福斯副C双核输出，上限极高。',
        traits: ['dark_star', 'nova', 'berserker'],
        mainChampions: ['烬', '格雷福斯', '努努'],
        position: {
            front: ['努努', '慎', '莫甘娜'],
            middle: ['格雷福斯', '维克托'],
            back: ['烬', '薇古丝', '巴德']
        },
        equipment: {
            '烬': ['无尽之刃', '红霸符', '最后的轻语'],
            '格雷福斯': ['青龙刀', '破防者', '暗星转职'],
            '努努': ['冰甲', '冰甲', '狂徒铠甲']
        },
        starGod: '阿狸',
        constellation: '野猪',
        earlyGame: '用4暗星卡莎或重装提莫过渡，优先做烬的装备',
        midGame: '根据来牌扩充羁绊，若有暗星转可追三星卡莎',
        lateGame: '上8找关键牌，最终拉9补齐双枪或6暗星',
        hexes: ['天煞灭影·劫', '后期收益', '新纪元+'],
        advantages: ['有无暗星转都能玩', '上限极高', '双核输出稳定'],
        disadvantages: ['需要极高运营能力', '上9人口需要经济支撑'],
        source: '17173-17.2a版本攻略',
        updateTime: '2026-05-07'
    },
    {
        id: 'shadow_zed',
        name: '天煞灭影劫',
        tier: 'T0',
        difficulty: '特殊',
        description: '专属强化符文「天煞灭影」触发的特殊阵容，隐藏弈子劫为核心，成型后强度极高。必须3-2回合拿到专属符文才能玩。',
        traits: ['dark_star', 'assassin', 'berserker'],
        mainChampions: ['劫', '努努'],
        position: {
            front: ['努努', '慎', '莫甘娜'],
            middle: ['格雷福斯'],
            back: ['劫', '烬', '巴德']
        },
        equipment: {
            '劫': ['青龙刀', '夜刃', '冰甲'],
            '努努': ['板甲', '狂徒铠甲', '日炎斗篷']
        },
        starGod: '亚索',
        constellation: '蝰蛇',
        earlyGame: '硬性条件：必须在3-2回合获得专属强化符文"天煞灭影"，否则无法玩此阵容',
        midGame: '劫是隐藏弈子，阵容构成围绕其展开，存钱上8',
        lateGame: '八或九人口成型，劫切入后排秒C位',
        hexes: ['天煞灭影·劫', '亚索的恩赐', '充能转移 II'],
        advantages: ['成型后强度极高', '劫切后排无敌', '冷门不易撞车'],
        disadvantages: ['必须拿到专属符文', '需要特定海克斯', '运营难度高'],
        source: '17173-17.2a版本攻略',
        updateTime: '2026-05-07'
    },
    // ====== 2026-05-14 小红书S17吃鸡榜单TOP9 最热阵容 ======
    {
        id: 'muring_jin95',
        name: '木灵暗影狙',
        tier: 'T0',
        difficulty: '困难',
        description: '小红书吃鸡榜TOP1，木灵烬95大后期阵容，主C烬+拉莫斯前排超级坦克，成型难度极高但强度顶级，碾压一切赌狗阵容。',
        traits: ['wood_spirit', 'dark_star', 'sniper'],
        mainChampions: ['烬', '拉莫斯', '薇古丝'],
        position: {
            front: ['拉莫斯', '莫德凯撒', '纳尔', '慎'],
            middle: ['布里茨', '莫甘娜'],
            back: ['烬', '薇古丝', '巴德']
        },
        equipment: {
            '烬': ['鬼索的狂暴之刃', '无尽之刃', '死亡之刃'],
            '拉莫斯': ['日炎斗篷', '石像鬼石板甲', '冰霜之心'],
            '薇古丝': ['鬼索的狂暴之刃', '珠光护手', '纳什之牙']
        },
        starGod: '韦鲁斯',
        constellation: '野猪',
        earlyGame: '2-1升4级，用3未来战士+2重装+2斗士过渡，EZ带烬装备打工',
        midGame: '6级后吃50利息升级，4-2升8级小抽保血量，不上9不大抽',
        lateGame: '5阶段升9人口大D找5费卡，烬和拉莫斯2星即锁血，有经济可以追三星五费',
        hexes: ['对冲基金', '利滚利', '耐心学习'],
        advantages: ['成型后碾压一切', '木灵复制增加上限', '坦度极高'],
        disadvantages: ['极度依赖经济运营', '上9难度大', '前期容易被血入'],
        source: '小红书/ABC游戏网',
        updateTime: '2026-05-14'
    },
    {
        id: 'millio_mf',
        name: '米利欧女枪',
        tier: 'T0',
        difficulty: '简单',
        description: '小红书吃鸡榜TOP2，冷门偷分利器！米利欧+女枪双C体系，7级成型锁血，成型即有分，同行少易追三星。',
        traits: ['stargazer', 'magician', 'nova'],
        mainChampions: ['厄运小姐', '米利欧', '茂凯'],
        position: {
            front: ['茂凯', '潘森', '努努'],
            middle: ['贾克斯', '娜美'],
            back: ['厄运小姐', '米利欧', '璐璐']
        },
        equipment: {
            '厄运小姐': ['无尽之刃', '朔极之矛', '破防者'],
            '米利欧': ['珠光护手', '纳什之牙', '蓝霸符'],
            '茂凯': ['狂徒铠甲', '日炎斗篷', '石像鬼石板甲']
        },
        starGod: '韦鲁斯',
        constellation: '秀山',
        earlyGame: '2-1拉4级，用3未来战士EZ过渡或直接用女枪凑羁绊，优先做女枪装备',
        midGame: '3-5拉7级大D，找二星女枪+茂凯锁血，卡利息追三星',
        lateGame: '三星女枪后上8补4魔术师或上9补5费卡',
        hexes: ['DD街区', '珠光莲花 II', '韦鲁斯的恩赐'],
        advantages: ['7级成型锁血', '冷门不易撞车', '装备灵活'],
        disadvantages: ['3费赌狗怕同行', '后期上限略低', '依赖女枪三星'],
        source: '小红书/B站锅包柔柔',
        updateTime: '2026-05-14'
    },
    {
        id: 'graves95',
        name: '男枪九五',
        tier: 'T0',
        difficulty: '困难',
        description: '小红书吃鸡榜TOP3，无限火力男枪！三大核心改件（动力框架+冷却介质+虚空系数）实现平A即技能，一星上万伤害，二星直接吃鸡。',
        traits: ['wood_spirit', 'sniper', 'nova'],
        mainChampions: ['格雷福斯', '烬', '拉莫斯'],
        position: {
            front: ['拉莫斯', '布里茨', '莫德凯撒', '慎'],
            middle: ['纳尔', '拉亚斯特'],
            back: ['格雷福斯', '烬', '巴德']
        },
        equipment: {
            '格雷福斯': ['无尽之刃', '朔极之矛', '锐利之刃'],
            '布里茨': ['圣盾使的誓约', '离子火花', '救赎']
        },
        starGod: '艾克',
        constellation: '野猪',
        earlyGame: '2-1升4未来过渡，3-5升7小抽保血，必须拿2个经济类海克斯',
        midGame: '4阶段上8一般不吃利息D牌，卖两波容错直接上9',
        lateGame: '9级找一星男枪开始养，升级到虚空系数改件后基本锁血',
        hexes: ['对冲基金', '新纪元+', '后期收益'],
        advantages: ['成型后伤害爆炸', '一星即可锁血', '上限极高'],
        disadvantages: ['极度需要经济', '运营难度极高', '需要特定改件'],
        source: '小红书/ABC游戏网',
        updateTime: '2026-05-14'
    },
    {
        id: 'stargazer_magic_gun',
        name: '观星魔枪',
        tier: 'T0',
        difficulty: '中等',
        description: '小红书吃鸡榜TOP4，4魔术师+3观星者核心羁绊，女枪直线AOE秒后排，秀山璐璐+视界专注封神！',
        traits: ['stargazer', 'magician', 'vanguard'],
        mainChampions: ['厄运小姐', '璐璐', '茂凯'],
        position: {
            front: ['茂凯', '潘森', '努努'],
            middle: ['贾克斯', '亚托克斯'],
            back: ['厄运小姐', '璐璐', '娜美']
        },
        equipment: {
            '厄运小姐': ['无尽之刃', '朔极之矛', '破防者'],
            '璐璐': ['珠光护手', '纳什之牙', '视界专注'],
            '茂凯': ['狂徒铠甲', '日炎斗篷', '石像鬼石板甲']
        },
        starGod: '韦鲁斯',
        constellation: '秀山',
        earlyGame: '2-1拉4，有女枪直接凑羁绊，或用3未来EZ过渡，优先女枪装备',
        midGame: '3-2拉6不D牌，3-5拉7大D找二星女枪+茂凯，开4魔术师',
        lateGame: '追三星女枪大树璐璐，9级补莫甘娜/娑娜提升上限',
        hexes: ['DD街区', '珠光莲花 II', '潘朵拉的装备 II'],
        advantages: ['7级成型锁血', '女枪技能克制站位密集阵容', '秀山璐璐控制强'],
        disadvantages: ['3费赌狗怕同行', '需要秀山观星更好', '后期打九五略吃力'],
        source: '小红书/17173',
        updateTime: '2026-05-14'
    },
    {
        id: 'kasha_darkstar6',
        name: '爆杀流卡莎',
        tier: 'T0',
        difficulty: '中等',
        description: '小红书吃鸡榜TOP5，6暗星高额双攻加成+卡莎高频爆发输出，轻松融化前排横扫后排，当前版本断档第一的吃鸡率！',
        traits: ['dark_star', 'berserker', 'vanguard'],
        mainChampions: ['卡莎', '烬', '努努'],
        position: {
            front: ['塔姆', '努努', '莫德凯撒', '科加斯'],
            middle: ['莫甘娜', '丽桑卓'],
            back: ['卡莎', '烬', '卡尔玛']
        },
        equipment: {
            '卡莎': ['无尽之刃', '青龙刀', '死亡之刃'],
            '烬': ['鬼索的狂暴之刃', '无尽之刃', '最后的轻语'],
            '塔姆': ['日炎斗篷', '薄暮法袍', '狂徒铠甲']
        },
        starGod: '韦鲁斯',
        constellation: '蝰蛇',
        earlyGame: '有暗星转无脑冲，无转职则3未来连败拿装备，3-5拉7大D',
        midGame: '7级大D追三星卡莎，2家以上同行先上8找烬开6暗星',
        lateGame: '三星卡莎后上9补5费卡，完美成型后横扫一切',
        hexes: ['DD街区', '天煞灭影·劫', '珠光莲花 II'],
        advantages: ['6暗星双攻加成极高', '卡莎融化前排快', '吃鸡率断层第一'],
        disadvantages: ['需要暗星转或追三', '同行巨多', '7级D不到卡莎容易崩'],
        source: '小红书/游侠网',
        updateTime: '2026-05-14'
    },
    {
        id: 'savior95',
        name: '救世九五',
        tier: 'T0',
        difficulty: '困难',
        description: '小红书吃鸡榜TOP6，救世主羁绊提供高额双抗+攻速+护盾，成型即锁血稳保前二，完美闭环12个羁绊强度拉满！',
        traits: ['wood_spirit', 'sniper', 'nova'],
        mainChampions: ['烬', '巴德', '拉莫斯'],
        position: {
            front: ['拉莫斯', '布里茨', '莫德凯撒', '慎'],
            middle: ['纳尔', '拉亚斯特'],
            back: ['烬', '巴德', '薇古丝']
        },
        equipment: {
            '烬': ['鬼索的狂暴之刃', '无尽之刃', '死亡之刃'],
            '拉莫斯': ['日炎斗篷', '冰霜之心', '狂徒铠甲']
        },
        starGod: '阿狸',
        constellation: '野猪',
        earlyGame: '用纳尔+EZ+前排过渡，有3未来直接挂，3连败拿装备',
        midGame: '利用3未来免费刷新小D提质量，经济允许直接跳9',
        lateGame: '9级追烬和拉莫斯2星，副C男枪或薇古丝，5费全2星后上10',
        hexes: ['对冲基金', '升级咯！', '新纪元+'],
        advantages: ['救世主羁绊团队提升巨大', '闭环羁绊多', '成型稳前二'],
        disadvantages: ['需要极高运营能力', '上9人口需要经济', '前期容易被血入'],
        source: '小红书/ABC游戏网',
        updateTime: '2026-05-14'
    },
    {
        id: 'shepherd_nami',
        name: '牧羊娜美',
        tier: 'T0',
        difficulty: '中等',
        description: '小红书吃鸡榜TOP7，5牧羊人召唤物提供高额法强加成，娜美弹跳泡泡伤害可秒三星四费，冷门好追牌！',
        traits: ['shepherd', 'magician', 'dark_star'],
        mainChampions: ['娜美', '乐芙兰', '努努'],
        position: {
            front: ['努努', '加里奥', '俄洛伊'],
            middle: ['丽桑卓', '娑娜', '小木灵'],
            back: ['娜美', '乐芙兰', '卡尔玛']
        },
        equipment: {
            '娜美': ['纳什之牙', '纳什之牙', '珠光护手'],
            '乐芙兰': ['鬼索的狂暴之刃', '珠光护手', '巨人杀手'],
            '努努': ['冰霜之心', '狂徒铠甲', '石像鬼石板甲']
        },
        starGod: '阿狸',
        constellation: '勋章',
        earlyGame: '前期用牧羊人过渡，提莫带娜美装备打工，搭配斗士+魔术师',
        midGame: '7人口优先开5牧羊人存钱，8级启动搜卡追三星四费',
        lateGame: '9人口补加里奥开3旅人，阵容大成，娜美泡泡秒杀一切',
        hexes: ['阿狸的恩赐', 'DD街区', '珠光莲花 II'],
        advantages: ['5牧羊人法强加成爆炸', '娜美单体秒杀', '冷门好追'],
        disadvantages: ['依赖娜美三星', '控制不足怕刺客', '9人口才完全体'],
        source: '小红书/ABC游戏网',
        updateTime: '2026-05-14'
    },
    {
        id: 'stargazer_sniper95',
        name: '观星狙九五',
        tier: 'T0',
        difficulty: '中等',
        description: '小红书吃鸡榜TOP8，3观星+3狙神+3木灵完美闭环，霞+烬双C物理伤害爆炸，成型后一波融化对手！',
        traits: ['stargazer', 'sniper', 'wood_spirit'],
        mainChampions: ['霞', '烬', '努努'],
        position: {
            front: ['努努', '拉莫斯', '莫德凯撒', '贾克斯'],
            middle: ['纳尔', '拉亚斯特'],
            back: ['霞', '烬', '巴德']
        },
        equipment: {
            '霞': ['鬼索的狂暴之刃', '海妖杀手', '海妖杀手'],
            '烬': ['无尽之刃', '锐利之刃', '最后的轻语'],
            '努努': ['冕卫', '圣盾使的誓约', '狂徒铠甲']
        },
        starGod: '艾克',
        constellation: '秀山',
        earlyGame: '2-1拉4，3观星+2未来过渡走连胜，优先拿攻速大剑',
        midGame: '4-2拉8大D找2星霞和努努锁血，稳血后存钱上9',
        lateGame: '9人口补齐烬和巴德，霞+烬双C输出爆炸，努门坦度无敌',
        hexes: ['新纪元', '珠光莲花 II', '后期收益'],
        advantages: ['霞烬双C输出爆炸', '观星+狙神羁绊完美', '运营节奏平滑'],
        disadvantages: ['8级需要D牌质量', '9人口才完全体', '物理装备要求高'],
        source: '小红书/游侠网',
        updateTime: '2026-05-14'
    },
    {
        id: 'berserker_yi',
        name: '狂斗剑圣',
        tier: 'T0',
        difficulty: '中等',
        description: '小红书吃鸡榜TOP9，4斗士+4狂战士核心体系，剑圣持续输出拉满+千珏后排补伤害，中期锁血后期上限高，同行少适合上分！',
        traits: ['berserker', 'vanguard', 'challenger'],
        mainChampions: ['易', '千珏', '塔姆'],
        position: {
            front: ['塔姆', '茂凯', '厄加特', '古拉加斯'],
            middle: ['卑尔维斯', '莫甘娜'],
            back: ['易', '千珏', '菲奥娜']
        },
        equipment: {
            '易': ['夜之锋刃', '巨人杀手', '水银'],
            '千珏': ['鬼索的狂暴之刃', '海妖杀手', '最后的轻语'],
            '塔姆': ['薄暮法袍', '日炎斗篷', '冰霜之心']
        },
        starGod: '亚索',
        constellation: '蝰蛇',
        earlyGame: '3海魔人过渡保连胜，卑尔维斯带剑圣装备，2-1拉4买经验保连胜',
        midGame: '4-2拉8人口大D，找二星剑圣+千珏+塔姆锁血，成型4斗4狂',
        lateGame: '8级可追三星四费，或上9补剑姬+莫甘娜，有转职再补斗/狂',
        hexes: ['飞升', '亚索的恩赐', '复苏之风 II'],
        advantages: ['中期锁血强', '后期上限高', '同行少好追牌'],
        disadvantages: ['铲铲有前排优先攻击bug', '需要夜刃保命', '装备要求较高'],
        source: '小红书/17173/游侠网',
        updateTime: '2026-05-14'
    },
    // ====== 2026-05-14 新增专属英雄强化对应阵容 ======
    {
        id: 'self_destruct_gragas',
        name: '自爆酒桶',
        tier: 'T0',
        difficulty: '中等',
        description: '【需2-1拿"自我毁灭"专属符文】酒桶变成魔法战士自爆攻击，法爆+正义装核心，6级卡利息追三星酒桶，后期开6斗士碾压全场！',
        traits: ['vanguard', 'berserker', 'nova'],
        mainChampions: ['古拉加斯', '塔姆', '厄加特'],
        position: {
            front: ['古拉加斯', '塔姆', '潘森', '茂凯'],
            middle: ['科加斯', '厄加特'],
            back: ['伊泽瑞尔', '烬']
        },
        equipment: {
            '古拉加斯': ['珠光护手', '正义之手', '共感植入'],
            '塔姆': ['日炎斗篷', '离子火花', '狂徒铠甲'],
            '伊泽瑞尔': ['蓝霸符', '大天使之杖', '纳什之牙']
        },
        starGod: '韦鲁斯',
        constellation: '蝰蛇',
        earlyGame: '2-1必须拿【自我毁灭】专属符文，斗士体系过渡，2-1拉4级保血量',
        midGame: '6级卡利息大D追三星酒桶，顺带追EZ和大虫子',
        lateGame: '酒桶3星后拉7-8开6斗士，补5费卡提升上限',
        hexes: ['自我毁灭·古拉加斯', '利滚利', '珠光莲花'],
        advantages: ['酒桶自爆伤害爆炸', '6斗士坦度极高', '赌狗成型即锁血'],
        disadvantages: ['必须拿到专属符文', '怕同行抢酒桶', '后期打九五略吃力'],
        source: 'ABC游戏网/17173',
        updateTime: '2026-05-14'
    },
    {
        id: 'professional_killer_pyke',
        name: '职业杀手派克',
        tier: 'T0',
        difficulty: '中等',
        description: '【需2-1拿"职业杀手"专属符文】派克变物理战士，参与击杀获得金币+重置技能，经济滚雪球！6级追三星派克，旅人灵能双C体系。',
        traits: ['traveler', 'psychic', 'dark_star'],
        mainChampions: ['派克', '易', '古拉加斯'],
        position: {
            front: ['古拉加斯', '加里奥', '塔姆'],
            middle: ['小木灵', '琴女'],
            back: ['派克', '易', '卡尔玛']
        },
        equipment: {
            '派克': ['无尽之刃', '正义之手', '夜之锋刃'],
            '易': ['巨人杀手', '泰坦的坚决', '水银'],
            '古拉加斯': ['日炎斗篷', '狂徒铠甲', '荆棘背心']
        },
        starGod: '艾克',
        constellation: '勋章',
        earlyGame: '2-1必须拿【职业杀手】专属符文，用2灵能+2旅人+2斗士过渡',
        midGame: '6级卡50利息搜三星派克，顺追酒桶，有剑圣开4灵能',
        lateGame: '派克3星后上8级，上9或追3星4费，派克+塔姆提供经济可冲高费',
        hexes: ['职业杀手·派克', 'DD街区', '珠光莲花'],
        advantages: ['派克击杀滚雪球经济好', '灵能羁绊输出高', '冷门好追'],
        disadvantages: ['刚需灵能装备', '必须拿到专属符文', '怕控制阵容'],
        source: 'ABC游戏网/中华网',
        updateTime: '2026-05-14'
    },
    {
        id: 'bang_nasus',
        name: '邦！内瑟斯',
        tier: 'T0',
        difficulty: '简单',
        description: '【需2-1拿"邦！"专属符文】狗头变物理战士，技能击杀无限成长伤害！3-1大D三星狗头，搭配6重装前排，后期一棍2000伤害全场游龙！',
        traits: ['vanguard', 'shepherd', 'nova'],
        mainChampions: ['内瑟斯', '蕾欧娜', '提莫'],
        position: {
            front: ['内瑟斯', '蕾欧娜', '努努', '莫德凯撒', '俄洛伊'],
            middle: ['布里茨'],
            back: ['提莫', '乐芙兰']
        },
        equipment: {
            '内瑟斯': ['鬼索的狂暴之刃', '泰坦的坚决', '饮血剑'],
            '蕾欧娜': ['日炎斗篷', '薄暮法袍', '狂徒铠甲'],
            '提莫': ['鬼索的狂暴之刃', '灭世者的死亡之帽', '巨人杀手']
        },
        starGod: '韦鲁斯',
        constellation: '勋章',
        earlyGame: '2-1必须拿【邦！】专属符文，靠2星狗头打连胜，优先合成狗头三神装',
        midGame: '3-1大D搜三星狗头，顺带追三星蕾欧娜和提莫，三星后立刻拉人口',
        lateGame: '上人口开高重装羁绊，努努对位敌方主C，狗头叠层后一棍秒杀',
        hexes: ['邦！', '升级咯！', '狩猎律动'],
        advantages: ['狗头伤害无限成长', '操作简单适合新手', '前期锁血能力强'],
        disadvantages: ['必须拿到专属符文', '后期怕控制', '依赖狗头三星'],
        source: 'ABC游戏网/B站',
        updateTime: '2026-05-14'
    },
    {
        id: 'star_combo_aatrox',
        name: '星界连招剑魔',
        tier: 'T0',
        difficulty: '中等',
        description: '【需2-1拿"星界连招"专属符文】剑魔从坦克质变主C物理战士，三段技能切换兼具爆发控制！3-1大D三星剑魔，搭配5新星特攻队成型。',
        traits: ['nova', 'vanguard', 'berserker'],
        mainChampions: ['亚托克斯', '凯特琳', '茂凯'],
        position: {
            front: ['亚托克斯', '茂凯', '潘森', '慎'],
            middle: ['卑尔维斯', '阿卡丽'],
            back: ['凯特琳', '千珏', '米利欧']
        },
        equipment: {
            '亚托克斯': ['饮血剑', '斯特拉克的挑战护手', '泰坦的坚决'],
            '茂凯': ['日炎斗篷', '狂徒铠甲', '荆棘背心'],
            '凯特琳': ['鬼索的狂暴之刃', '海妖杀手', '死亡之刃']
        },
        starGod: '韦鲁斯',
        constellation: '秀山',
        earlyGame: '2-1必须拿【星界连招】专属符文，连败过渡不拉人口，2特攻+2未来稳住',
        midGame: '2-7或3-1 All in搜三星剑魔+女警，三星后立刻拉人口',
        lateGame: '6-7人口凑新星特攻，8人口开5新星成型，慎保护核心输出',
        hexes: ['星界连招·亚托克斯', '新手好运', '潘朵拉的装备 II'],
        advantages: ['剑魔三段技能爆发高', '3费赌狗成型快', '5新星全队增益'],
        disadvantages: ['必须拿到专属符文', '3-1后经济压力大', '后期上限有限'],
        source: 'ABC游戏网/17173',
        updateTime: '2026-05-14'
    },
    // ====== 2026-05-14 补充官网/微社区/游侠网推荐阵容 ======
    {
        id: 'fate_twisted_caitlyn',
        name: '织命卡牌女警',
        tier: 'T0',
        difficulty: '简单',
        description: '微社区官方推荐阵容！4织命人3观星者赌狗阵容，1费卡牌+女警双C，3-1大D追三星，8人口成型锁血稳吃分！',
        traits: ['fate_weaver', 'stargazer', 'ranger'],
        mainChampions: ['崔斯特', '凯特琳', '贾克斯'],
        position: {
            front: ['贾克斯', '亚托克斯', '泰隆'],
            middle: ['锐雯', '米利欧'],
            back: ['崔斯特', '凯特琳', '库奇']
        },
        equipment: {
            '崔斯特': ['朔极之矛', '纳什之牙', '灭世者的死亡之帽'],
            '凯特琳': ['鬼索的狂暴之刃', '海妖杀手', '死亡之刃'],
            '贾克斯': ['棘刺背心', '振奋铠甲', '日炎斗篷']
        },
        starGod: '韦鲁斯',
        constellation: '秀山',
        earlyGame: '不主动升人口，尽量低人口增加1费卡概率，换怪保血或连败',
        midGame: '3-1卡30利息大D搜三星卡牌和女警，数量多就追3-1出三星',
        lateGame: '三星后上8人口补4织命+3观星羁绊，飞机带多余物理装备',
        hexes: ['DD街区', '新手好运', '潘朵拉的装备 II'],
        advantages: ['1费赌狗成型快', '中期锁血能力强', '双C输出稳定'],
        disadvantages: ['3-1必须D出三星', '后期上限有限', '怕控制阵容'],
        source: '腾讯微社区/中华网',
        updateTime: '2026-05-14'
    },
    {
        id: 'seabeast_briar',
        name: '海魔贝蕾亚',
        tier: 'T0',
        difficulty: '简单',
        description: '官方热门赌狗阵容！3海魔人贝蕾亚单顶前排以血换攻速，被动残血增伤叠满后搭配吸血实现永动机输出！',
        traits: ['seabeast', 'berserker', 'nova'],
        mainChampions: ['贝蕾亚', '卑尔维斯', '雷克塞'],
        position: {
            front: ['贝蕾亚'],
            middle: ['科加斯', '雷克塞', '阿卡丽'],
            back: ['卑尔维斯', '卡莎', '千珏', '拉亚斯特']
        },
        equipment: {
            '贝蕾亚': ['血手', '泰坦的坚决', '饮血剑'],
            '雷克塞': ['日炎斗篷', '荆棘背心', '狂徒铠甲']
        },
        starGod: '艾克',
        constellation: '蝰蛇',
        earlyGame: '开局凑3海魔人，连败积累经济拿装备',
        midGame: '5级大D追三星贝蕾亚+雷克塞，6级追三星卑尔维斯',
        lateGame: '三星大卑后速8挂满羁绊，大虫子后期可换烬或塔姆',
        hexes: ['DD街区', '不侦查不变阵', '宝宝学院'],
        advantages: ['赌狗成型极快', '贝蕾亚残血输出无敌', '海魔人提供经济'],
        disadvantages: ['需要3海魔人开局', '后期上限不高', '怕控制爆发'],
        source: 'ABC游戏网/游侠网',
        updateTime: '2026-05-14'
    },
    {
        id: 'mecha_urgot',
        name: '机甲厄加特',
        tier: 'T1',
        difficulty: '中等',
        description: '6霸天机甲高额坦度+厄加特持续物理输出，7级追三星厄加特，成型快运营简单，吃分稳定！',
        traits: ['mecha', 'berserker', 'nova'],
        mainChampions: ['厄加特', '阿萝拉', '茂凯'],
        position: {
            front: ['茂凯', '超级机甲', '拉亚斯特'],
            middle: ['阿卡丽'],
            back: ['厄加特', '阿萝拉']
        },
        equipment: {
            '厄加特': ['水银', '锐利之刃', '巨人杀手'],
            '茂凯': ['薄暮法袍', '日炎斗篷', '圣盾使的誓约'],
            '阿萝拉': ['珠光护手', '灭世者的死亡之帽', '蓝霸符']
        },
        starGod: '阿狸',
        constellation: '野猪',
        earlyGame: '用3未来战士过渡，正常节奏运营',
        midGame: '7级慢D追三星厄加特，顺追三星茂凯',
        lateGame: '两个三星后上8级，9级补强力5费卡提升上限',
        hexes: ['DD街区', '利滚利', '便携锻炉'],
        advantages: ['6霸天坦度极高', '7级追三易成型', '运营简单'],
        disadvantages: ['偏娱乐强度一般', '后期上限有限', '怕高爆发阵容'],
        source: 'ABC游戏网',
        updateTime: '2026-05-14'
    },
    {
        id: 'speed_wood_poppy',
        name: '飙速木灵波比',
        tier: 'T0',
        difficulty: '中等',
        description: '【需2-1拿"飙速木灵"专属符文】波比变远程炮台发射高速木灵，技能击杀弹射伤害！2-7D三星波比，慎保护核心。',
        traits: ['wood_spirit', 'vanguard', 'nova'],
        mainChampions: ['波比', '凯特琳', '拉莫斯'],
        position: {
            front: ['拉莫斯', '亚托克斯', '慎'],
            middle: ['奥恩', '贾克斯'],
            back: ['波比', '凯特琳', '库奇']
        },
        equipment: {
            '波比': ['朔极之矛', '无尽之刃', '巨人杀手'],
            '拉莫斯': ['日炎斗篷', '荆棘背心', '巨龙之爪'],
            '凯特琳': ['死亡之刃', '巨人杀手', '最后的轻语']
        },
        starGod: '韦鲁斯',
        constellation: '秀山',
        earlyGame: '2-1必须拿【飙速木灵】符文，2未来过渡连败攒经济',
        midGame: '2-7或3-1开始D牌搜2星波比，卡50利息慢D三星波比',
        lateGame: '波比3星后速8人口，所有棋子围绕慎站位，副C女警换飞机',
        hexes: ['飙速木灵·波比', '新手好运', 'DD街区'],
        advantages: ['波比远程炮台伤害高', '技能弹射清场快', '成型锁血'],
        disadvantages: ['必须拿专属符文', '依赖三星波比', '需要慎保护'],
        source: 'ABC游戏网/B站',
        updateTime: '2026-05-14'
    },
    {
        id: 'big_bang_wood',
        name: '宇宙大爆炸小木灵',
        tier: 'T0',
        difficulty: '中等',
        description: '【需2-1拿"宇宙大爆炸"专属符文】小木灵变魔法战士全屏击飞轰炸，6级追三星小木灵，7木灵族孵化提速！',
        traits: ['wood_spirit', 'traveler', 'nova'],
        mainChampions: ['小木灵', '拉莫斯', '库奇'],
        position: {
            front: ['小木灵', '拉莫斯', '加里奥'],
            middle: ['波比', '派克'],
            back: ['库奇', '卡尔玛', '巴德']
        },
        equipment: {
            '小木灵': ['珠光护手', '正义之手', '夜之锋刃'],
            '拉莫斯': ['日炎斗篷', '荆棘背心', '狂徒铠甲'],
            '库奇': ['蓝霸符', '无尽之刃', '最后的轻语']
        },
        starGod: '韦鲁斯',
        constellation: '蝰蛇',
        earlyGame: '2-1必须拿【宇宙大爆炸】，用3木灵+2旅人过渡',
        midGame: '6级卡利息追三星小木灵，顺追乌龟和飞机',
        lateGame: '有7木灵则开7木灵孵化加速，8级全2星后上9',
        hexes: ['宇宙大爆炸·小木灵', 'DD街区', '珠光莲花'],
        advantages: ['小木灵全屏击飞控制强', '木灵孵化加速追三', '输出爆炸'],
        disadvantages: ['必须拿专属符文', '怕刺客切入', '6级D不到容易崩'],
        source: 'ABC游戏网/荣耀俱乐部',
        updateTime: '2026-05-14'
    },
    {
        id: 'vanguard_teemo',
        name: '重装提莫',
        tier: 'T0',
        difficulty: '简单',
        description: '官方热门赌狗阵容！6重装超高坦度+提莫持续输出，3-1大D三星提莫，简单粗暴稳上分！',
        traits: ['vanguard', 'shepherd', 'nova'],
        mainChampions: ['提莫', '蕾欧娜', '内瑟斯'],
        position: {
            front: ['蕾欧娜', '内瑟斯', '布里茨', '努努'],
            middle: ['莫德凯撒', '俄洛伊'],
            back: ['提莫', '丽桑卓', '佐伊']
        },
        equipment: {
            '提莫': ['鬼索的狂暴之刃', '纳什之牙', '莫雷洛秘典'],
            '蕾欧娜': ['日炎斗篷', '狂徒铠甲', '荆棘背心'],
            '努努': ['冰霜之心', '圣盾使的誓约', '狂徒铠甲']
        },
        starGod: '阿狸',
        constellation: '勋章',
        earlyGame: '五连败开局拿装备，4级不D牌攒经济',
        midGame: '3-1开始大D追三星提莫，顺追蕾欧娜',
        lateGame: '提莫3星后拉人口开6重装，努努拿蕾欧娜装备',
        hexes: ['DD街区', '新手好运', '狩猎律动'],
        advantages: ['重装坦度极高', '新手友好简单', '中期锁血强'],
        disadvantages: ['3-1必须大D', '怕刺客控制', '后期上限低'],
        source: '腾讯微社区/ABC游戏网',
        updateTime: '2026-05-14'
    },
    {
        id: 'giant_cho',
        name: '万血大虫子',
        tier: 'T1',
        difficulty: '特殊',
        description: '特定条件下极强！看到"德玛西亚的皇冠"海克斯必玩，科加斯无限叠生命值，万血大虫子坦度无敌！',
        traits: ['berserker', 'vanguard', 'nova'],
        mainChampions: ['科加斯', '塔姆', '卡尔玛'],
        position: {
            front: ['科加斯', '塔姆', '努努'],
            middle: ['莫甘娜', '卡尔玛'],
            back: ['烬', '巴德', '拉亚斯特']
        },
        equipment: {
            '科加斯': ['德玛西亚王冠', '狂徒铠甲', '泰坦的坚决'],
            '塔姆': ['日炎斗篷', '薄暮法袍', '冰霜之心']
        },
        starGod: '索拉卡',
        constellation: '野猪',
        earlyGame: '2-1看到【德玛西亚的王冠】海克斯必选！没有则不强玩',
        midGame: '连败或连胜均可，科加斯叠层优先，肉装全给他',
        lateGame: '科加斯万血后搭配狂战士和斗士羁绊，前排坦度碾压',
        hexes: ['德玛西亚的王冠', '不侦查不变阵', '宝宝学院'],
        advantages: ['科加斯万血坦度无敌', '特定条件必吃分', '娱乐性强'],
        disadvantages: ['必须拿到特定海克斯', '怕真实伤害', '输出依赖后排'],
        source: 'ABC游戏网',
        updateTime: '2026-05-14'
    },
    {
        id: 'shepherd_viktor',
        name: '牧羊人维克托',
        tier: 'T0',
        difficulty: '中等',
        description: '微社区官方推荐阵容！3牧羊人+维克托法系爆发核心，法强加成爆炸，8人口成型稳吃分！',
        traits: ['shepherd', 'magician', 'nova'],
        mainChampions: ['维克托', '卡尔玛', '努努'],
        position: {
            front: ['努努', '加里奥', '俄洛伊'],
            middle: ['丽桑卓', '小木灵', '娑娜'],
            back: ['维克托', '卡尔玛', '乐芙兰']
        },
        equipment: {
            '维克托': ['蓝霸符', '珠光护手', '灭世者的死亡之帽'],
            '卡尔玛': ['鬼索的狂暴之刃', '纳什之牙', '莫雷洛秘典'],
            '努努': ['冰霜之心', '狂徒铠甲', '石像鬼石板甲']
        },
        starGod: '阿狸',
        constellation: '圣坛',
        earlyGame: '前期用牧羊人+斗士过渡，顺风开局即可',
        midGame: '7人口开3牧羊人存钱，8级搜卡找维克托和努努',
        lateGame: '8人口成型后追三星四费或上9补旅人/5费卡提升上限',
        hexes: ['阿狸的恩赐', '珠光莲花 II', 'DD街区'],
        advantages: ['牧羊人法强加成高', '维克托技能AOE强', '运营节奏平滑'],
        disadvantages: ['8人口才成型', '需要高费卡', '前期容易掉血'],
        source: '腾讯微社区/游侠网',
        updateTime: '2026-05-14'
    }
];

// 导出数据
window.starGods = starGods;
window.constellations = constellations;
window.hexes = hexes;
window.traits = traits;
window.champions = champions;
window.compositions = compositions;