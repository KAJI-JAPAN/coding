# プレイヤーのステータスを管理するクラス（構造体のような状態）

class AttackPpower
  attr_accessor :value

  def initialize(value)
    if value < 0
      raise ArgumentError, "攻撃力は1以上を指定してください"
    end
    @value = value

    self.freeze
  end

  def add(other)
    unless outher.is_a?(AttackPpower)
      raise ArgumentError "AttackPoer同士でしか加算ができません"
    end

    AttackPpower.new(@value + other.value)
  end

  def multiply(other)
    AttackPpower.new((@value * other.value).to_i)
  end
end

class Level
  attr_accessor :value
  def initialize(value)
    if value < 1
      raise ArgumentError "levelは1以上を指定する必要があります"
    end
    @value = value

    self.freeze
  end
end

class Player
  attr_accessor :level, :base_attack, :weapon_power

  def initialize(level, base_attack, weppon_power)
      @level = level
      @base_attack = base_attack
      @weppon_power = weppon_power

      self.freeze
  end

  def total_attack_power
    # (基本 + 武器) × レベル補正
    combindied_pwer =  @base_attack.add(@weppon_power)
    combindied_pwer.multiply(@level.value)
  end
end

level = Level.new(10)
base = AttackPpower.new(10)
wepon = AttackPower.new(50)

player = Player.new(level, base, wepon)

puts "攻撃力：　#{player.total_attack_power.value}"