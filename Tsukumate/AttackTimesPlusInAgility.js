//
//  敏捷で攻撃回数追加 ver1.00
//
// ------------------------------------------------------
// Copyright (c) 2016 Yana
// Released under the MIT license
// http://opensource.org/licenses/mit-license.php
// ------------------------------------------------------
//
// author Yana
//

var Imported = Imported || {};
Imported['AttackTimesPlusInAgility'] = 1.00;
/*:
 * @target MZ MV
 * @url https://raw.githubusercontent.com/munokura/Yana-MV-plugins/master/Tsukumate/AttackTimesPlusInAgility.js
 * @plugindesc ver1.00/敏捷値で攻撃回数を追加します。
 * @author Yana
 * 
 * @param TimesPlusAgility
 * @text 攻撃回数が増加する敏捷値
 * @type number
 * @desc 攻撃回数が増加する敏捷値です。
 * @default 100
 * 
 * @help
 * 敏捷値で攻撃回数を追加します。
 * 
 * ------------------------------------------------------
 * 利用規約
 * ------------------------------------------------------
 * 当プラグインはMITライセンスで公開されています。
 * 使用に制限はありません。商用、アダルト、いずれにも使用できます。
 * 二次配布も制限はしませんが、サポートは行いません。
 * 著作表示は任意です。行わなくても利用できます。
 * 要するに、特に規約はありません。
 * バグ報告や使用方法等のお問合せはネ実ツクールスレ、
 * または、Twitterにお願いします。
 * https://twitter.com/yanatsuki_/
 * 素材利用は自己責任でお願いします。
 * ------------------------------------------------------
 * 更新履歴:
 * ver1.00:
 * 公開
 */

(() => {

    "use strict";

    ////////////////////////////////////////////////////////////////////////////////////

    const parameters = PluginManager.parameters('AttackTimesPlusInAgility');
    const timesPlusAgility = Number(parameters['TimesPlusAgility']);

    ////////////////////////////////////////////////////////////////////////////////////

    const __Game_BattlerBase_attackTimesAdd = Game_BattlerBase.prototype.attackTimesAdd;
    Game_BattlerBase.prototype.attackTimesAdd = function () {
        let count = __Game_BattlerBase_attackTimesAdd.call(this);
        if (!!timesPlusAgility) {
            count += Math.floor(this.agi / timesPlusAgility);
        }
        return count;
    };

})();
