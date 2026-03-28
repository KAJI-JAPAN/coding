# プレイヤーのステータスを管理するクラス（構造体のような状態）
class Player
  attr_accessor :level, :attack_power, :weapon_power
end

# 攻撃力を計算するサービス
class BattleService
  def calculate_total_attack(player)
    # 攻撃力 ＝ (基本攻撃力 + 武器攻撃力) × レベル補正
    # ※ 本来レベルは1以上、攻撃力は0以上であるべきだが、チェックがない
    if player.level < 0
      raise "レベルが1以下です"
    end

    if player.attack_power < 0
      raise "攻撃力が0以下です"
    end

    (player.attack_power + player.weapon_power) * player.level
  end
end

# 使い方（悪い例：生焼けオブジェクト）
player = Player.new
player.level = 10
# attack_power と weapon_power をセットし忘れた！（nilのまま）
service = BattleService.new
puts service.calculate_total_attack(player) # エラーが発生するか、予期せぬ結果になる