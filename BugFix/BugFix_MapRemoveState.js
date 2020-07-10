//
//  バグ修正-マップ時ステート解除 ver1.00
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
Imported['BugFix_MapRemoveState'] = 1.00;
/*:
 * @plugindesc ver1.00/マップ上でアイテムでステート解除を行った時、行動結果がクリアされないバグを修正します。
 * @author Yana
 *
 * @help ------------------------------------------------------
 * プラグインコマンド
 * ------------------------------------------------------
 * このプラグインには、プラグインコマンドはありません。
 * ------------------------------------------------------
 * 使い方
 * ------------------------------------------------------
 * プラグインを導入することで動作します。
 * ------------------------------------------------------
 * 利用規約
 * ------------------------------------------------------
 * 当プラグインはMITライセンスで公開されています。
 * 使用に制限はありません。商用、アダルト、いずれにも使用できます。
 * 二次配布も制限はしませんが、サポートは行いません。
 * 著作表示は任意です。行わなくても利用できます。
 * 要するに、特に規約はありません。
 * バグ報告や使用方法等のお問合せはネ実ツクールスレ、または、Twitterにお願いします。
 * https://twitter.com/yanatsuki_
 * 素材利用は自己責任でお願いします。
 * ------------------------------------------------------
 * 更新履歴:
 * ver1.00:
 * 公開
 */

(function() {
////////////////////////////////////////////////////////////////////////////////////

    var __SItemBase_applyItem = Scene_ItemBase.prototype.applyItem;
    Scene_ItemBase.prototype.applyItem = function() {
        __SItemBase_applyItem.call(this);
        this.itemTargetActors().forEach(function(target) { target._result.clear() }.bind(this));
    };

////////////////////////////////////////////////////////////////////////////////////
}());