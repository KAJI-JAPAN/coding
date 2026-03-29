

#### 1. 悪いコード（現状の実装）

class AttackPower
  attr_accessor :value # 可変（ミュータブル）な属性

  def initialize(value)
    @value = value
    self.freeze
  end

  # 副作用：自身の状態を直接書き換えてしまう
  def upgrade(amount)
    @value += amount
    AttackPpower.new(@value)
  end
end
def calculate_total_damage(base_power, multiplier, bonus)20260328.rb
    # 悪い例：変数 tmp の使い回し（再代入）
    multipul_power = base_power.value

    # 1. 倍率計算
    total_power = multipul_power * base

    AttackPpower.new(total_power)
end

base = AttackPpower.new(20)
final_power = calculate_total_damage(base, 2, 5)

puts "最終的な攻撃力#{final_power}"
puts "通常の攻撃力#{base}"